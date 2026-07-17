/** OTP helpers — shared with Supabase email auth (6–8 digits). */
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
