# Lawmatics Access Notes

## What to gather once you have Lawmatics access

- Account details
  - Lawmatics account owner/user email
  - Organization name or account ID
  - Environment type (production/test/sandbox)

- API access
  - API base URL for submissions
  - API key or access token
  - Any required request headers
  - Allowed origin / CORS settings for web form submissions

- Form submission requirements
  - Expected field names for contact form data
  - Required fields vs optional fields
  - Mapping for `first_name`, `last_name`, `email`, `phone`
  - Mapping for tracking fields such as `utm_source`, `utm_medium`, `utm_campaign`, `source`
  - Any specific field names for case type, consultation request, and message

- Webhooks / callbacks
  - Webhook URL requirements or available endpoints
  - Event types to listen for (lead created, form submitted, status changes)
  - Secret or signing key for webhook verification

- Technical setup
  - Preferred submission method (direct API POST, form embed, redirect)
  - Rate limits or request quotas
  - Validation rules or field constraints
  - Any sample request/response payloads

- Deployment notes
  - Environment variable name to use in this project (`VITE_LAWMATICS_API_URL`)
  - Whether the app should use a proxy/backend for secure key handling
  - Any required DNS or domain whitelisting

## Notes for implementation

- Keep the contact page client-side friendly for SPA mode.
- Avoid using React Router route `loader` / `action` exports in this app.
- If a secure API key is required, plan for a server-side proxy instead of exposing it in the frontend.
