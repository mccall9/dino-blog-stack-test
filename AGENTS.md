# Agents — dino-blog-stack-test

This is a **stack preview** of the club product. Not production.  
Production agents still live under `Desktop/build in public/.grok/agents/`.

## How to work here

1. Prefer product personas (copy prompts from build in public agents):
   - **home-designer** — home visual / club hero
   - **product-shell** — nav, CTAs, routes
   - **content-builder** — ideias / about copy
   - **ship-check** — Playwright when tests exist
   - **supabase-guard** — only when wiring auth/feed
2. Skills useful for this test:
   - `baseline-ui`, `emil-design-eng`, `marclou-review`
   - `fixing-accessibility`, `fixing-metadata`
   - `revenue-centric-design` for CTAs
3. **Do not** change dinoclub.blog production from this repo.
4. **Do not** switch fonts off DM Sans (match live brand).

## Scope map

| Path | Owner agent |
|------|-------------|
| `apps/web` home / club CSS | home-designer |
| nav, routes, vercel | product-shell |
| `apps/api` health → future product BFF | supabase-guard later |
| copy | content-builder |

## Parallel

`dino-platform` = native agents console only. Keep it separate.
