# Stripe Integration - Drupal Frontend Scope (MVP)

- GitHub issue: https://github.com/https-github-com-web-recruiters/flexcoders-fe/issues/366
- Backend reference issue: https://github.com/https-github-com-web-recruiters/flexcoders-fe/issues/359

## Summary
Implement the Drupal frontend for the Stripe payment MVP backed by #359.

## Latest mockup
- https://oci1.xln.one/flexcoders-sandbox/payment-entry

This parent issue is an umbrella for the frontend work needed to:
- launch one-time premium checkout
- launch monthly subscription checkout
- link to donation checkout
- show payment result states
- show logged-in user payment and entitlement data

Stripe Checkout is the payment UI. Drupal should only collect minimal inputs, call backend checkout-session endpoints, redirect to Stripe, and render backend-confirmed status after the redirect.

## Shared information
### Request data
- One-time premium: `paymentType`, `productId` or `planId`, `sourcePage` or equivalent context
- Subscription: `paymentType`, `planId`, `sourcePage` or equivalent context
- Donation: `paymentType`, `amount`, `currency`, `donorEmail`, `donorName`, `sourcePage` or equivalent context
- Donation amount uses integer minor units
- Anonymous donation requires `donorEmail`
- Authenticated donation treats `donorEmail` as optional

### Response handling
- Use backend-returned `checkoutUrl`
- Use `sessionReference`
- Use `statusToken` for post-checkout status lookup

### Shared UX rules
- Treat backend/webhooks as the source of truth for all payment and access state
- Do not build frontend-only payment state transitions
- Stripe Checkout is used for payment collection
- One-time premium purchase requires authenticated user
- No card data is collected in Drupal
- No entitlement updates are based only on redirect state
- Disable submit buttons while request is in flight
- Change CTA text to `Redirecting...` or equivalent
- Show safe error feedback
- Never expose raw backend or Stripe errors
- Duplicate-submit protection exists on all checkout CTAs
- Do not display admin-only override reason in normal user-facing account UI

### Status mapping
- Payment: `pending`, `processing`, `succeeded`, `failed`, `canceled`, `refunded`
- Subscription: `active`, `incomplete`, `past_due`, `canceled`, `ended`
- Premium access: `active`, `expired`, `revoked`, `not_active`
- Refund: `not_refunded`, `pending`, `succeeded`, `failed`

## Sub-issues
- [ ] #369
- [ ] #370
- [ ] #371
- [ ] #372
- [ ] #373

## Parent acceptance criteria
- [ ] Drupal provides entry points for one-time premium purchase and monthly subscription
- [ ] Drupal provides an entry point to the donation page
- [ ] Frontend can create checkout sessions through backend endpoints and redirect to Stripe Checkout
- [ ] Anonymous and logged-in donation flows both work on the dedicated donation page
- [ ] One-time premium purchase enforces login
- [ ] Success, cancel, pending, and error states are available in Drupal
- [ ] Frontend does not grant or revoke access based only on redirect state
- [ ] Logged-in users can see a compact current-state summary
- [ ] Logged-in users can open Stripe-hosted billing management
- [ ] Duplicate-submit protection exists on all checkout CTAs
- [ ] Forms and result pages are usable on mobile and desktop

## Scope summary
### 1. Payment entry UI
- One-time premium purchase UI
- Monthly subscription purchase UI
- Donation teaser / entry point only
- CTA loading and duplicate-submit protection
- Redirect to Stripe Checkout

### 2. Dedicated donation page
- Donation amount selection
- Anonymous and logged-in donation flow
- Donation CTA and validation
- Redirect to Stripe Checkout

### 3. Post-payment states
- Success page
- Cancel page
- Pending/processing page
- Generic recoverable error state

### 4. Logged-in account summary
- Premium access summary
- Stripe-hosted billing management link/button
- Compact current-state display

### 5. Admin/support views
- User lookup
- Manual premium access override
- Support-only current-state summary

## Key dependencies on backend
- create one-time checkout session
- create subscription checkout session
- create donation checkout session
- fetch current premium access state
- fetch current subscription state
- fetch current account summary
- fetch admin/support datasets

## Out of scope for MVP
- Direct card collection in Drupal
- Coupons/promo codes
- Partial refund UI
- Self-service refund requests
- Full self-service subscription management in Drupal
- Invoice download UI
