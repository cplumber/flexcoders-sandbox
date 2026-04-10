# Stripe Integration - Drupal payment entry UI and checkout-session launch

## Related issues
- Parent FE: #366
- Backend scope: #359

## Summary
Implement the Drupal entry UI for:
- one-time premium purchase
- monthly subscription purchase
- donation entry point only

Frontend controls let a user start checkout, call backend session-creation endpoints, and redirect to Stripe Checkout.

## Latest mockup
- https://oci1.xln.one/flexcoders-sandbox/payment-entry

## Scope
### One-time premium section
- [ ] Render product title
- [ ] Render product description
- [ ] Render price
- [ ] Render currency
- [ ] Render CTA button: `Continue to secure payment`
- [ ] Support radio options or a dropdown if multiple one-time plans exist
- [ ] Require login before one-time premium checkout

### Monthly subscription section
- [ ] Render subscription title
- [ ] Render billing interval
- [ ] Render price
- [ ] Render currency
- [ ] Render benefits/features list
- [ ] Render CTA button: `Start subscription`
- [ ] Support plan selection with radio cards or a dropdown if multiple subscription tiers exist
- [ ] Hide or disable purchase CTA when user already has an active subscription

### Donation entry point
- [ ] Render a donation teaser card or button
- [ ] Open the dedicated donation page from the entry screen
- [ ] Do not embed the full donation form in the payment entry screen

### Shared launch behavior
- [ ] Call backend checkout-session endpoint on CTA click
- [ ] Send frontend payload with payment type and selected plan/product identifier
- [ ] Redirect user to Stripe Checkout using returned `checkoutUrl`
- [ ] Disable CTA during in-flight request
- [ ] Prevent duplicate submissions
- [ ] Show non-sensitive inline error if session creation fails

## Fields and controls
### One-time premium
- Product title: read-only text
- Product description: read-only text
- Price: read-only text
- Currency: read-only text
- Plan selector: radio group or dropdown
- CTA button

### Subscription
- Plan title: read-only text
- Billing interval: read-only text
- Price: read-only text
- Currency: read-only text
- Benefits list: read-only bullet list
- Plan selector: radio group or card selection
- CTA button

### Donation entry point
- Teaser card or button: read-only
- Link to dedicated donation page: CTA

## Acceptance criteria
- [ ] User can start one-time premium checkout from Drupal
- [ ] User can start subscription checkout from Drupal
- [ ] User can open the dedicated donation page from the entry screen
- [ ] Frontend uses backend endpoint to create checkout session
- [ ] Frontend redirects to Stripe Checkout
- [ ] Duplicate-submit protection is implemented
- [ ] Logged-in user with active subscription does not see an invalid purchase path
- [ ] Do not collect payment card details in Drupal
- [ ] Do not mark payment as successful from the frontend redirect alone
