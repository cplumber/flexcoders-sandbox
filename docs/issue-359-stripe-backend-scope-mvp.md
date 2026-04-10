# Stripe Integration - Backend Scope (MVP)

- GitHub issue: https://github.com/https-github-com-web-recruiters/flexcoders-fe/issues/359
- Related FE umbrella issue: https://github.com/https-github-com-web-recruiters/flexcoders-fe/issues/366

## Summary
Implement backend support for Stripe-based payments covering:
- one-time premium access
- monthly subscriptions
- donations
- refunds (full only)

---

## Backend should support
- Stripe customer mapping to Drupal users
- Checkout session creation for:
  - one-time purchase
  - subscription
  - donation
- Donations for both anonymous users and logged-in users
- Passing internal metadata to Stripe (user reference, payment type, context)
- Stripe webhook endpoint with:
  - signature validation
  - idempotent processing
  - retry-safe handling
- Payment recording for:
  - one-time payments
  - subscription payments
  - donations
  - refunds
- Premium access activation after successful payment
- Premium access revocation after refund
- One-time premium access handling:
  - entitlement/expiry/consumption controlled internally (not Stripe-driven)
- Subscription lifecycle handling:
  - activation on successful start
  - renewal success
  - renewal failure handling
  - cancellation
  - cancellation effective at billing period end
  - cancellation request recording and state exposure
- Refund processing (full refunds only) and state synchronization
- Internal storage for:
  - payments
  - subscriptions
  - refunds
  - webhook events
- Admin/support capabilities:
  - view payment history
  - view refund history
  - view subscription status
  - view premium access status
  - manually override premium access status for mismatch/recovery handling
- Retry-safe processing and duplicate protection for:
  - webhook events
  - payment activation
  - subscription updates
  - refunds
- Audit trail for:
  - webhook events
  - access grant/revoke actions
  - refund actions
  - admin actions
  - manual premium override actions

---

## Business rules
- One-time premium access:
  - controlled entirely by internal backend logic (time/usage/etc.)
  - not driven by Stripe
- Subscription:
  - cancellation takes effect at end of billing period
  - cancellation state must remain visible until the billing period ends
- Refunds:
  - full refunds only
  - always revoke premium access
- Donations:
  - allowed for both anonymous and logged-in users

---

## General rules
- Stripe webhooks are the source of truth for payment state
- No reliance on frontend redirect/success URLs for state changes
- Admin override capability is an exception/recovery tool for support use when payment and entitlement state diverge
- Backend should provide a backend-confirmed status lookup path for post-Stripe return pages

---

## FE <-> BE integration

### Contract principles
- Backend owns payment truth, entitlement truth, and subscription truth
- Frontend should never infer success from Stripe redirect alone
- Frontend should not talk to Stripe directly except redirect mechanics if backend returns `sessionId` instead of a direct URL
- Backend should return stable app-facing objects rather than raw Stripe objects
- Backend should expose business-friendly status values or document exact mappings
- Every FE-visible object should clearly distinguish required fields from optional fields

## Checkout session creation

Example path shape:
- `POST <checkout-session creation path>`

### Required behavior
- provide a backend-controlled checkout-session creation path for one-time premium, subscription, and donation flows
- keep request validation strict and explicit
- return a backend-generated session/status reference that FE can use after redirect

## Request payloads
### 1. One-time premium checkout request
Request body example:

```json
{
  "paymentType": "one_time_premium",
  "productId": "premium_one_time",
  "sourcePage": "pricing"
}
```

Rules:
- `productId` may be replaced by `planId` if backend models this as a plan
- authenticated user identity should come from session/auth on backend, not from a frontend-sent user id
- one-time premium purchase requires authenticated user in MVP
- backend should reject anonymous request for one-time premium checkout
- required fields: `paymentType`, `productId` or `planId`
- optional fields: `sourcePage`

### 2. Subscription checkout request
Request body example:

```json
{
  "paymentType": "subscription",
  "planId": "premium_monthly",
  "sourcePage": "pricing"
}
```

Rules:
- authenticated user identity should be resolved server-side
- backend should reject checkout creation if user already has an active incompatible subscription state unless replacement/upgrade behavior is explicitly defined
- required fields: `paymentType`, `planId`
- optional fields: `sourcePage`

### 3. Donation checkout request
Request body example:

```json
{
  "paymentType": "donation",
  "amount": 2500,
  "currency": "usd",
  "donorEmail": "donor@example.com",
  "donorName": "Example Donor",
  "sourcePage": "donation"
}
```

Rules:
- `amount` should be sent in minor units if backend prefers Stripe-style integer values, for example cents
- amount should be sent in minor units, for example `2500` for `25.00`
- minor units are preferred because Stripe works naturally with integer amounts and this avoids float/rounding issues between frontend and backend
- `donorEmail` and `donorName` are supported optional fields
- `donorEmail` is required for anonymous donation checkout
- `donorEmail` is optional for authenticated donation checkout
- donor message is out of scope for MVP
- anonymous donation should be allowed
- required fields: `paymentType`, `amount`, `currency`
- optional fields: `donorEmail`, `donorName`, `sourcePage`

## Checkout-session response
Response example:

```json
{
  "checkoutUrl": "https://checkout.stripe.com/c/pay/...",
  "sessionReference": "chk_123",
  "statusToken": "st_eyJhbGciOi...",
  "expiresAt": "2026-04-09T12:34:56Z"
}
```

### Required behavior
- backend returns `checkoutUrl`
- frontend redirects immediately
- backend also returns an app-level `sessionReference` or `paymentIntentReference` if useful for later status lookup
- `sessionId` response shape is not used for MVP

Frontend expects at least:
- `sessionReference`
- `statusToken`
- `expiresAt`
- `checkoutUrl`

Optional response fields:
- `paymentIntentReference`

Rules:
- `sessionReference` must be stable enough for FE post-checkout status lookup
- `statusToken` should be short-lived, backend-signed, and scoped to a single `sessionReference`
- FE must be able to resolve payment result state using `sessionReference` plus `statusToken` even when the user is anonymous

## Error response shape
Error response example:

```json
{
  "error": {
    "code": "CHECKOUT_CREATION_FAILED",
    "message": "Unable to start checkout at the moment."
  }
}
```

Rules:
- do not expose raw Stripe/internal exception text to frontend
- use stable error codes where possible
- backend should return validation errors in a predictable structure

### Validation error format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please correct the highlighted fields.",
    "fields": {
      "amount": "Amount must be greater than zero"
    }
  }
}
```

## Status and query shapes
### Post-checkout status resolution
- `GET <post-checkout status lookup path>`

### Requirements
- support success/pending/error state resolution after return from Stripe
- support anonymous donation flow where no logged-in `me` endpoint is available
- allow FE to poll or refresh until webhook processing settles

Request shape:
- path or query includes `sessionReference`
- request also includes `statusToken`

Response example:

```json
{
  "sessionReference": "chk_123",
  "paymentType": "donation",
  "paymentStatus": "processing",
  "premiumAccess": {
    "status": "not_active",
    "type": null,
    "validUntil": null
  },
  "subscription": null,
  "display": {
    "title": "Donation received",
    "message": "Your payment is being confirmed."
  },
  "lastUpdatedAt": "2026-04-09T12:36:00Z"
}
```

Frontend expects at least:
- `sessionReference`
- `paymentType`
- `paymentStatus`
- `lastUpdatedAt`

Optional fields:
- `premiumAccess`
- `subscription`
- `display`

Rules:
- this endpoint must not expose another user's sensitive data
- anonymous lookup is protected by a short-lived backend-signed `statusToken` scoped to one `sessionReference`
- backend should reject status lookups when `sessionReference` and `statusToken` do not match
- backend should reject expired `statusToken`
- it should be safe to refresh repeatedly while webhook processing completes
- response should contain only minimal display-safe payment and entitlement data

### Logged-in user status
- `GET <current-user summary path>`
- `GET <current-user payment history path>`
- `GET <current-user refund history path>`
- `GET <current-user subscription detail path>`

### Subscription cancellation handling
- backend should expose subscription cancellation state to frontend
- frontend-visible subscription data should include whether cancellation has been requested
- frontend-visible subscription data should include the effective end date when cancellation is scheduled
- if subscription cancellation is user-initiated or admin-initiated in MVP, backend should provide a backend-controlled cancellation action path
- if cancellation is handled outside the app, backend should still synchronize and expose the resulting state clearly

### Required behavior
- use a single current-user summary endpoint for premium/subscription state
- use separate detail/history endpoints for payment history, refund history, and subscription detail as needed
- summary and history responses should document required vs optional fields clearly

### Summary response

```json
{
  "premiumAccess": {
    "status": "active",
    "type": "subscription",
    "validUntil": "2026-05-09T00:00:00Z",
    "isManualOverride": false
  },
  "subscription": {
    "status": "active",
    "planId": "premium_monthly",
    "currentPeriodEnd": "2026-05-09T00:00:00Z",
    "cancelAtPeriodEnd": false
  }
}
```

Frontend expects at least:
- `premiumAccess.status`

Optional fields:
- `premiumAccess.type`
- `premiumAccess.validUntil`
- `premiumAccess.isManualOverride`
- `premiumAccess.overrideEffectiveUntil`
- `subscription`

Rules:
- `premiumAccess` is always present for authenticated user summary responses
- `subscription` is omitted when the user has no subscription record
- `premiumAccess.overrideReason` is omitted from normal user-facing summary responses

### Payment history response

```json
{
  "items": [
    {
      "paymentId": "pay_123",
      "createdAt": "2026-04-09T10:00:00Z",
      "paymentType": "subscription",
      "description": "Premium Monthly",
      "amount": 1500,
      "currency": "usd",
      "status": "succeeded",
      "reference": "pi_123",
      "refundStatus": "not_refunded"
    }
  ]
}
```

Frontend expects at least:
- `paymentId`
- `createdAt`
- `paymentType`
- `amount`
- `currency`
- `status`
- `refundStatus`

Optional item fields:
- `description`
- `reference`

### Refund history response

```json
{
  "items": [
    {
      "refundId": "ref_123",
      "createdAt": "2026-04-10T10:00:00Z",
      "paymentReference": "pi_123",
      "amount": 1500,
      "currency": "usd",
      "status": "succeeded",
      "reason": "requested_by_customer"
    }
  ]
}
```

Frontend expects at least:
- `refundId`
- `createdAt`
- `paymentReference`
- `amount`
- `currency`
- `status`

Optional item fields:
- `reason`

## Admin and support shapes

Path shapes:
- `GET <admin payment list path>`
- `GET <admin subscription list path>`
- `GET <admin refund list path>`
- `GET <admin payment detail path>`
- `GET <admin subscription detail path>`
- `GET <admin user premium-access path>`
- `POST <admin manual premium override path>`

Capabilities:
- filtering by date
- filtering by status
- filtering by payment type
- search by email/user/reference
- audit lookup for manual override history

### Manual premium override
Request body example:

```json
{
  "targetStatus": "active",
  "accessType": "manual",
  "reason": "Payment mismatch corrected by support",
  "effectiveUntil": "2026-05-09T00:00:00Z"
}
```

Response example:

```json
{
  "userId": "123",
  "premiumAccess": {
    "status": "active",
    "type": "manual",
    "validUntil": "2026-05-09T00:00:00Z",
    "isManualOverride": true,
    "overrideEffectiveUntil": "2026-05-09T00:00:00Z"
  },
  "overrideAudit": {
    "actionId": "ovr_123",
    "performedAt": "2026-04-09T15:00:00Z",
    "performedBy": "admin_42",
    "reason": "Payment mismatch corrected by support"
  }
}
```

Rules:
- manual override should be admin/support-only
- every manual override should require a reason
- backend should store previous state and new state
- backend should record who made the change and when
- backend should support both granting and revoking premium access
- active manual override takes precedence over payment-derived entitlement while it is active
- active subscription and refund state should still remain recorded in backend
- manual override can be temporary when `effectiveUntil` is set
- manual override can be indefinite when no expiry is set
- effective frontend-facing premium access data should indicate when manual override is active

### Manual override precedence rules
Rules:
- a manual override should create explicit override state, not an undocumented side effect
- a manual override should record whether it is temporary or indefinite
- if manual override revokes premium access, FE-visible entitlement should become non-premium immediately
- if manual override grants premium access, FE-visible entitlement should become premium immediately
- active subscription should remain recorded separately from effective premium entitlement
- refund and webhook events should continue to be recorded normally while manual override is active
- effective premium status shown to frontend should follow the active manual override until it expires or is removed
- when manual override expires or is removed, effective premium status should fall back to normal payment-derived logic

Required behavior
- store source of entitlement separately, for example `subscription`, `one_time`, `manual`
- compute effective entitlement from a documented precedence order
- keep manual override as an explicit, auditable override layer
- require support/admin to remove or expire the override rather than silently losing it to the next unrelated event
- use `effectiveUntil` for temporary overrides and no expiry for indefinite overrides
- keep payment/subscription/refund truth intact while allowing manual override to control effective entitlement

## Stripe metadata

Metadata keys:
- `payment_type`
- `internal_user_id` or app user reference
- `drupal_uid` if relevant
- `plan_id` or `product_id`
- `source_page`
- internal request/session correlation id

Rules:
- do not rely on metadata alone for authorization
- do not expose internal-only metadata directly to FE unless needed

## Frontend-facing status values

### Payment status
- `pending`
- `processing`
- `succeeded`
- `failed`
- `canceled`
- `refunded`

### Subscription status
- `active`
- `incomplete`
- `past_due`
- `canceled`
- `ended`

### Premium access status
- `active`
- `expired`
- `revoked`
- `not_active`

### Refund status
- `not_refunded`
- `pending`
- `succeeded`
- `failed`

## Backend behaviors for FE safety
- checkout-session creation should be idempotent enough to handle repeat clicks safely
- backend should reject invalid plan/product combinations
- backend should reject unauthorized access to account/admin datasets
- backend should restrict premium override actions to authorized admin/support roles only
- backend should expose timestamps in ISO 8601 UTC format
- backend should keep currency format consistent across all responses
- backend should document whether amounts are minor units or decimal strings
- backend should expose app-level references for support/debugging when safe
- backend should log before/after premium state for every manual override
- backend should ensure all enum values used in examples are included in documented vocabularies
- backend should document all required and optional FE-facing response fields
