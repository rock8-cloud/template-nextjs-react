# Agent guide

Space Targets is a Next.js 16 starter (App Router, React 19, TypeScript strict, Tailwind CSS 4). No database, no environment variables.

## Layout

- `data/targets.ts` - the data and its types. The single source of truth.
- `lib/targets.ts` - lookup and filter helpers, shared by pages and API routes.
- `lib/format.ts` - number and distance formatting.
- `components/` - shared UI. `target-explorer.tsx` is the only client component.
- `app/layout.tsx` - root layout with header and footer.
- `app/page.tsx`, `app/about/page.tsx`, `app/targets/[slug]/page.tsx`, `app/not-found.tsx` - pages.
- `app/api/` - route handlers: `targets`, `targets/[slug]`, `health`.
- `app/globals.css` - Tailwind import and theme tokens (`void`, `panel`, `line`, `ink`, `mute`, `signal`).

## Conventions

- Server components by default. Add `'use client'` only for state or browser APIs, and keep those components small.
- `params` is a Promise in pages and route handlers. Await it.
- Import with the `@/` alias from the repo root.
- Style with Tailwind classes and the theme tokens. Do not add CSS files or hard-coded colors.
- Pages and API routes share logic through `lib/`. Do not fetch the app's own API from a server component.
- API routes return JSON with a proper status code. Errors look like `{ "error": "..." }`.
- Keep `/api/health` returning `{ "status": "ok" }`.
- Copy uses plain words. No em dashes, no semicolons in prose.

## Deployment contract - do not break

- `Dockerfile` in the repo root, multi-stage, `npm ci`, non-root user, port 3000, `CMD ["node", "server.js"]`.
- `output: 'standalone'` in `next.config.ts`.
- The app must start with no environment variables. If you add one, give it a safe default.
- Use npm and commit `package-lock.json`.

## TypeScript packages

TypeScript is pinned to 6.x because ESLint's TypeScript support does not run on 7 yet. Renovate will offer the upgrade when it does.

## Before you finish

```bash
npm run lint && npm run typecheck && npm run build
npm audit
```
