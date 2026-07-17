/** Preview OTP — stub até Supabase (mesmo fluxo do blog online). */
export const OTP_MIN = 6
export const OTP_MAX = 8

export function isValidEmail(value: string): boolean {
  const email = value.trim()
  if (!email || email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function normalizeOtp(value: string): string {
  return value.replace(/\D/g, "").slice(0, OTP_MAX)
}

export function isCompleteOtp(value: string): boolean {
  const n = normalizeOtp(value).length
  return n >= OTP_MIN && n <= OTP_MAX
}

/** Simulate “send code” delay. Production: auth.sendEmailCode. */
export async function requestOtp(
  email: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isValidEmail(email)) {
    return { ok: false, error: "Digite um e-mail válido." }
  }
  await wait(450)
  return { ok: true }
}

/**
 * Simulate verify. Preview: any 6–8 digit code works.
 * Production: auth.verifyEmailCode(email, token).
 */
export async function verifyOtp(
  email: string,
  code: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isValidEmail(email)) {
    return { ok: false, error: "E-mail inválido. Volte e confira." }
  }
  await wait(350)
  const otp = normalizeOtp(code)
  if (otp.length < OTP_MIN || otp.length > OTP_MAX) {
    return {
      ok: false,
      error: "Digite o código de 6 a 8 números enviado por e-mail.",
    }
  }
  return { ok: true }
}

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}
