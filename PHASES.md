# Fases — stack test dino.blog

**Não** misturar com `dino-platform` (console de agents).  
**Não** cutover automático de produção.

| Fase | Entrega | Status |
|------|---------|--------|
| **1** | Shell + home clube, DM Sans, Vercel preview | em curso |
| **2** | Auth OTP Supabase no Start | **feito** (`/login` e-mail → código) |
| **3a** | Login com X (OAuth) abaixo do e-mail | **feito** (UI + `provider: x`; ativar no Dashboard) |
| **3b** | Membership + `/feed` gate | later |
| **4** | Ideias / about / post paridade | later |
| **5** | Decisão de cutover (manual) | later |

### Auth — checklist Supabase (projeto `dyqfpgxdkizgcgfzrkbd`)

**Já aplicado via Management API** (ver `docs/SUPABASE_AUTH.md`):
1. Email OTP ON, `mailer_autoconfirm` OFF, OTP length **8**
2. Redirect allow list: localhost + `dino-blog-stack-test` Vercel + `dinoclub.blog`

**X OAuth 2.0 — ativado no Supabase** (`external_x_enabled=true`).  
Confirme no portal X o callback:  
`https://dyqfpgxdkizgcgfzrkbd.supabase.co/auth/v1/callback`

Production hoje: manutenção em dinoclub.blog (`index.html` offline page).
