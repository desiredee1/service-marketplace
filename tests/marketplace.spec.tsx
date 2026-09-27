# service-marketplace

A local-first service marketplace prototype built with Next.js, TypeScript, and Tailwind. It is designed to run without Supabase, Mapbox, or other external secrets by using realistic local demo data and browser-safe mock APIs.

## Overview

This project includes:

- Customer request flow with service category selection
- Validated request form using Zod
- Mock provider matching and ranking
- Provider dashboard with accept/decline actions
- Responsive desktop/mobile experience
- Local persistence with `localStorage`
- Loading, empty, success, and error states
- Health-check API route
- Automated Vitest coverage for the demo interactions

## Tech stack

- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- Vitest + Testing Library
- Zod validation

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at `http://localhost:3000`.

## Demo behavior

- The app runs fully in browser demo mode without requiring environment variables or external services.
- Customer requests are saved to `localStorage` and matched against local demo providers.
- The provider dashboard reads the same local data and lets you accept or decline leads.
- The health route is available at `/api/health`.

## Verification

Run the automated checks:

```bash
npm test
```

Run the production build:

```bash
npm run build
```

## Project structure

```text
app/
  api/health/route.ts
  customer/page.tsx
  provider/page.tsx
components/
features/market/
lib/
tests/
```

## Notes

- Supabase and Mapbox config are intentionally not required for the demo experience.
- The prototype uses realistic local data and browser-safe mock APIs so it works immediately in development.

## License

MIT
