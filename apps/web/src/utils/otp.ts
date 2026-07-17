/** Preview OTP — stub até Supabase (Fase 2). Código fixo para testar. */
export const PREVIEW_OTP = "123456"
export const OTP_LENGTH = 6

export function isValidEmail(value: string): boolean {
  const email = value.trim()
  if (!email || email.length > 254) return false
  // enough for preview; real validation lives with Supabase later
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function normalizeOtp(value: string): string {
  return value.replace(/\D/g, "").slice(0, OTP_LENGTH)
}

export function isCompleteOtp(value: string): boolean {
  return normalizeOtp(value).length === OTP_LENGTH
}

/** Simulate “send code” delay. In production this hits the API. */
export async function requestOtp(email: string): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isValidEmail(email)) {
    return { ok: false, error: "Digite um e-mail válido." }
  }
  await wait(450)
  return { ok: true }
}

/** Simulate verify. Preview accepts PREVIEW_OTP only. */
export async function verifyOtp(
  email: string,
  code: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isValidEmail(email)) {
    return { ok: false, error: "E-mail inválido. Volte e confira." }
  }
  await wait(350)
  const otp = normalizeOtp(code)
  if (otp.length !== OTP_LENGTH) {
    return { ok: false, error: `O código tem ${OTP_LENGTH} dígitos.` }
  }
  if (otp !== PREVIEW_OTP) {
    return { ok: false, error: "Código incorreto. Tente de novo." }
  }
  return { ok: true }
}

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}
