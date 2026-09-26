# service-marketplace

A maintainable and production-friendly service marketplace starter built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Overview

This project is designed to be easy to maintain and safe to run in production. It focuses on:

- Clean separation between UI, domain logic, and infrastructure
- Safe environment configuration
- Type-safe data validation
- Reusable UI building blocks
- Clear database and API boundaries
- Health checks, graceful fallback states, and structured error handling

## Tech stack

- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- Supabase
- Zod validation
- Vitest for basic tests

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Copy the environment file:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Visit http://localhost:3000

## Environment variables

See `.env.example` for the required variables.

## Project structure

```text
app/
components/
features/
lib/
tests/
```

## Safety-first architecture decisions

- Validation at the edge for all user input
- Minimal client-side state and explicit server behavior
- No hardcoded secrets in the app
- Graceful fallback when Supabase config is missing
- Clear service layer for marketplace logic

## Deployment notes

This starter is ready to be extended for production deployment with:

- Vercel or Node-based hosting
- Supabase Postgres for persistence
- monitoring and logging integrations
- background jobs for lead matching and notifications

## License

MIT
