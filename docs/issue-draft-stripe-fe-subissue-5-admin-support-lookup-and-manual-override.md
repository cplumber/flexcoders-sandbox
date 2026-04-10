# Stripe Integration - Drupal admin/support user lookup and manual premium override

## Related issues
- Parent FE umbrella: #366
- Backend scope: #359

## Summary
Implement Drupal admin/support lookup and manual premium override backed by authorized backend endpoints.

## Latest mockup
- https://oci1.xln.one/flexcoders-sandbox/support-override

## Scope
- [ ] Implement user lookup
- [ ] Show separate horizontal search results table
- [ ] Show support-only current-state summary
- [ ] Show per-user transaction list
- [ ] Implement manual premium access override UI

## User lookup
### Required UI fields
- [ ] User lookup by email, username, or user id
- [ ] Search results table for matching users
- [ ] Selected user summary after lookup
- [ ] Current premium access status display
- [ ] Current premium access type display
- [ ] Current validity/expiry display
- [ ] Underlying payment-derived premium/subscription state display

## Per-user transaction list
### Required UI fields
- [ ] Transaction list for the selected user
- [ ] Payment date/time
- [ ] Payment type
- [ ] Amount
- [ ] Payment status
- [ ] Refund status
- [ ] Invoice/receipt link when available

## Manual premium access override
### Required admin UI fields
- [ ] Target status control: `Premium` / `Non-premium`
- [ ] Manual override state display
- [ ] Effective-until field for temporary override
- [ ] Indefinite override when no expiry is set
- [ ] Reason textarea
- [ ] Save/confirm action

### Required behaviors
- [ ] Restrict visibility to authorized admin/support roles
- [ ] Require a reason before submission
- [ ] Show confirmation message before applying override
- [ ] Refresh displayed user state after successful override
- [ ] Show safe success/error feedback
- [ ] Show effective premium state separately from underlying recorded subscription/payment state when override is active

### Audit history view
- [ ] Show override history table
- [ ] Columns:
  - performed at
  - performed by
  - previous premium status
  - new premium status
  - reason

## Override behavior
- Manual override is a recovery/support tool, not the normal payment flow
- Manual override takes precedence over payment-derived entitlement while active
- Payment, subscription, refund, and webhook state remain recorded normally while override is active
- Restrict this control to authorized admin/support roles with audit logging

## Acceptance criteria
- [ ] Views use authorized backend endpoints only
- [ ] Lookup supports basic support recovery tasks
- [ ] Manual premium override requires reason and is limited to authorized roles
- [ ] Override actions are auditable and user state refreshes after change
- [ ] Admin UI makes it clear when effective premium state differs from underlying payment-derived state
