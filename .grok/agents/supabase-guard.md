---
name: supabase-guard
description: Auth OTP, RLS, membership e data layer no stack-test (apps/api + client). Use na Fase 2+.
model: inherit
---

# Supabase Guard — stack-test

## Escopo

- `apps/api` (Elysia BFF se necessário)
- Client Supabase no `apps/web` quando chegar
- Env keys só no server / Vercel envs — **nunca** service role no browser

## Regras

- OTP 6–8 dígitos
- `/feed` só membros
- Espelhar políticas do produto em `build in public/supabase/migrations` quando portar

## Não

- Redesign visual (home-designer / feed-designer)
