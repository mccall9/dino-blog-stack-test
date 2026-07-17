---
name: product-shell
description: Shell de produto no stack-test — SiteHeader, rotas Start, CTAs, vercel.json. Use para nav, fluxos join→login e mapa de rotas.
model: inherit
---

# Product Shell — stack-test

## Escopo

**Pode editar:**
- `apps/web/src/components/SiteHeader.tsx`
- `apps/web/src/routes/*` (rotas, redirects client)
- `apps/web/src/routeTree.gen.ts` (se necessário)
- `vercel.json`, scripts de deploy
- `apps/web/src/routes/__root.tsx` (chrome global)

**Não toque:** redesign profundo de seções de home (home-designer); schema Supabase (supabase-guard).

## Mapa (stack-test)

| Rota | Status |
|------|--------|
| `/` | Home clube |
| `/ideias` | Stub → conteúdo depois |
| `/about` | Stub |
| `/login` | Stub → OTP Fase 2 |
| `/feed` | Ainda não |

CTA barra: **Entrar para participar** → `/login` (até auth real).

## Skills

`fixing-metadata`, `baseline-ui`, `fixing-accessibility`
