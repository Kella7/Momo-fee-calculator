# PI Agent Operating Rules — Mobile Money Fee Calculator

## Goal
Provide fast, transparent Uganda mobile-money fee calculations using verified tariff data.

## Data rules
Never invent or silently guess tariffs. Store tariff source/date/version. When tariffs are stale or unverified, say so clearly.
Prefer authoritative machine-readable sources/APIs when available; otherwise maintain a verified versioned table.

## Build method
Reuse existing app logic and browser/PWA capabilities before adding dependencies. Define outcome and done criteria first.

## Evals
Maintain boundary-value test cases for every tariff band, exact band edges, zero/negative/invalid inputs, large values, and provider changes. Builder and tester must be separate passes.

## UX
Show fee, total debit/amount received as applicable, provider, and tariff effective date. Keep offline behavior where possible.

## Security
No credentials in client code or repository.

## Showcase
After tariff tests pass, a HyperFrames-style short demo may explain how a calculation works using verified examples.