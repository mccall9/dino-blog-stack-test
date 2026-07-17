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
| `external_x_enabled` | **`true`** (OAuth 2.0 Client ID/Secret no Dashboard; não versionar secrets) |

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

## X OAuth 2.0 — ativado

Provider **X / Twitter (OAuth 2.0)** ligado no projeto via Management API  
(`external_x_enabled=true`, `external_x_email_optional=true`).

No app X (User authentication settings), confira:

- **Type of App:** Web App  
- **Callback URL:** `https://dyqfpgxdkizgcgfzrkbd.supabase.co/auth/v1/callback`  
- **Website URL:** preview Vercel ou `https://dinoclub.blog`  
- **Request email from users:** recomendado ON  

> OAuth 1.0a (Consumer Key / Secret / Bearer) é legado — o app usa **OAuth 2.0** (`provider: 'x'`).

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
