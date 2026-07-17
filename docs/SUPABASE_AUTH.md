# Supabase Auth — dino-blog-stack-test

**Project:** `dyqfpgxdkizgcgfzrkbd` (mccall9's Project)  
**Callback X (no app):** `https://dyqfpgxdkizgcgfzrkbd.supabase.co/auth/v1/callback`

## Já aplicado (Management API)

| Setting | Valor |
|---------|--------|
| `external_email_enabled` | `true` |
| `mailer_autoconfirm` | `false` (OTP obrigatório) |
| `mailer_otp_length` | `8` |
| `site_url` | `http://localhost:3000` |
| `uri_allow_list` | localhost + Vercel stack-test + dinoclub.blog (wildcards) |
| `external_x_enabled` | `false` — **falta Client ID/Secret do X** |

Redirects incluídos:

```
http://localhost:3000/**
http://localhost:3000/auth/callback
http://127.0.0.1:3000/**
http://127.0.0.1:3000/auth/callback
https://dino-blog-stack-test.vercel.app/**
https://dino-blog-stack-test-*.vercel.app/**
https://*-dino-blog-stack-test.vercel.app/**
https://dinoclub.blog/**
https://www.dinoclub.blog/**
https://*.dinoclub.blog/**
```

## Falta: ativar X (precisa de secrets do developer.x.com)

1. Crie app em [developer.x.com](https://developer.x.com/en/portal/dashboard)
2. User authentication → **OAuth 2.0** → Web App  
   - Callback URL: `https://dyqfpgxdkizgcgfzrkbd.supabase.co/auth/v1/callback`  
   - Website: `https://dino-blog-stack-test.vercel.app` (ou dinoclub.blog)  
   - **Request email from users** = ON
3. Copie **Client ID** e **Client Secret**
4. Envie aqui **ou** rode (com access token do dashboard):

```bash
export SUPABASE_ACCESS_TOKEN="sbp_..."
export PROJECT_REF="dyqfpgxdkizgcgfzrkbd"

curl -X PATCH "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "external_x_enabled": true,
    "external_x_client_id": "YOUR_X_CLIENT_ID",
    "external_x_secret": "YOUR_X_CLIENT_SECRET"
  }'
```

Ou no Dashboard: **Authentication → Providers → X / Twitter (OAuth 2.0)** → ON + colar credenciais.

## Prompt para o Supabase AI (Dashboard)

Cole no Assistente AI do projeto se quiser reaplicar via UI:

```
Configure Auth for this project:

1. Keep Email provider ON with mailer_autoconfirm OFF (passwordless OTP only).
2. OTP length should remain 8 digits.
3. Site URL: http://localhost:3000 (dev). Production site may later be https://dinoclub.blog.
4. Add these Redirect URLs (allow list):
   - http://localhost:3000/**
   - http://localhost:3000/auth/callback
   - http://127.0.0.1:3000/**
   - https://dino-blog-stack-test.vercel.app/**
   - https://dino-blog-stack-test-*.vercel.app/**
   - https://*-dino-blog-stack-test.vercel.app/**
   - https://dinoclub.blog/**
   - https://www.dinoclub.blog/**
5. When X OAuth Client ID and Secret are provided, enable external_x (X/Twitter OAuth 2.0).
   Callback URL for the X app must be:
   https://dyqfpgxdkizgcgfzrkbd.supabase.co/auth/v1/callback
6. Do not enable mailer_autoconfirm. Do not disable email OTP.
```

## App code (já no monorepo)

- OTP: `apps/web/src/utils/auth.ts` → `signInWithOtp` / `verifyOtp`
- X: `signInWithOAuth({ provider: 'x' })` → `/auth/callback`
- Login UI: e-mail principal + **Fazer login com X** abaixo
