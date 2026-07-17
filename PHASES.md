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

### Auth — checklist Supabase Dashboard
1. **Authentication → URL config**  
   - Site URL: preview Vercel / localhost  
   - Redirect allow list: `http://localhost:3000/auth/callback`, `https://<preview>.vercel.app/auth/callback`
2. **Email OTP** — provider Email ligado (`mailer_autoconfirm` off).
3. **X / Twitter** — Authentication → Providers → **X** (OAuth 2.0)  
   - Client ID / Secret do portal developer.x.com  
   - Callback do Supabase (copiar do dashboard) no app X  
   - Sem isso, o botão “Fazer login com X” mostra erro amigável.

Production hoje: manutenção em dinoclub.blog (`index.html` offline page).
