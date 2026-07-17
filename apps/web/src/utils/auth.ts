import { getSupabase } from "~/utils/supabase"
import { isValidEmail, normalizeOtp, OTP_MAX, OTP_MIN } from "~/utils/otp"

export type AuthResult = { ok: true } | { ok: false; error: string }

function friendlyError(error: unknown, fallback: string): string {
  if (error && typeof error === "object" && "message" in error) {
    const msg = String((error as { message: string }).message || "")
    if (/rate limit|too many/i.test(msg)) {
      return "Muitas tentativas. Aguarde um minuto e tente de novo."
    }
    if (/invalid|otp|token|code/i.test(msg)) {
      return "Código inválido ou expirado. Peça um novo."
    }
    if (/provider|oauth|twitter|x is not/i.test(msg)) {
      return "Login com X ainda não está ativo no Supabase. Ative o provider X no dashboard."
    }
    if (msg) return msg
  }
  return fallback
}

/** Fase 2 — OTP real via Supabase (igual blog online). */
export async function sendEmailCode(
  email: string,
  redirectPath = "/cupons",
): Promise<AuthResult> {
  const clean = email.trim().toLowerCase()
  if (!isValidEmail(clean)) {
    return { ok: false, error: "Digite um e-mail válido." }
  }

  try {
    const supabase = getSupabase()
    const origin =
      typeof window !== "undefined" ? window.location.origin : undefined
    const { error } = await supabase.auth.signInWithOtp({
      email: clean,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: origin
          ? `${origin}${redirectPath}`
          : undefined,
      },
    })
    if (error) return { ok: false, error: friendlyError(error, error.message) }
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error: friendlyError(error, "Não foi possível enviar o código."),
    }
  }
}

export async function verifyEmailCode(
  email: string,
  token: string,
): Promise<AuthResult> {
  const clean = email.trim().toLowerCase()
  const otp = normalizeOtp(token)

  if (!isValidEmail(clean)) {
    return { ok: false, error: "E-mail inválido. Volte e confira." }
  }
  if (otp.length < OTP_MIN || otp.length > OTP_MAX) {
    return {
      ok: false,
      error: "Digite o código de 6 a 8 números enviado por e-mail.",
    }
  }

  try {
    const supabase = getSupabase()
    const { error } = await supabase.auth.verifyOtp({
      email: clean,
      token: otp,
      type: "email",
    })
    if (error) return { ok: false, error: friendlyError(error, error.message) }
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error: friendlyError(error, "Não foi possível verificar o código."),
    }
  }
}

/**
 * Fase 3 — OAuth X (provider `x` no Supabase).
 * Redirects the browser to X; returns after /auth/callback.
 */
export async function signInWithX(
  redirectPath = "/cupons",
): Promise<AuthResult> {
  try {
    const supabase = getSupabase()
    const origin = window.location.origin
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "x",
      options: {
        redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(redirectPath)}`,
        skipBrowserRedirect: false,
      },
    })
    if (error) return { ok: false, error: friendlyError(error, error.message) }
    // Browser should navigate; if URL returned but no redirect, go manually
    if (data?.url) {
      window.location.assign(data.url)
      return { ok: true }
    }
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error: friendlyError(
        error,
        "Não foi possível iniciar o login com X.",
      ),
    }
  }
}

export async function signOut(): Promise<void> {
  try {
    await getSupabase().auth.signOut()
  } catch {
    /* ignore */
  }
}

export async function getAuthUser() {
  const {
    data: { user },
  } = await getSupabase().auth.getUser()
  return user
}

export async function exchangeAuthCode(url: string): Promise<AuthResult> {
  try {
    const supabase = getSupabase()
    const { error } = await supabase.auth.exchangeCodeForSession(url)
    if (error) return { ok: false, error: friendlyError(error, error.message) }
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error: friendlyError(error, "Falha ao concluir o login."),
    }
  }
}
