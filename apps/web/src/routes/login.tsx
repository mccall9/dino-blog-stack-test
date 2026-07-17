import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import * as React from "react"
import { SiteHeader } from "~/components/SiteHeader"
import {
  isCompleteOtp,
  isValidEmail,
  normalizeOtp,
  OTP_LENGTH,
  PREVIEW_OTP,
  requestOtp,
  verifyOtp,
} from "~/utils/otp"
import { loginSession, useSession } from "~/utils/session"

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Entrar — dino.blog" },
      {
        name: "description",
        content:
          "Entre no Clube dos Curiosos com código por e-mail. Desbloqueie cupons e benefícios.",
      },
    ],
  }),
})

type Step = "email" | "otp"

function LoginPage() {
  const navigate = useNavigate()
  const { isLoggedIn, ready } = useSession()

  const [step, setStep] = React.useState<Step>("email")
  const [email, setEmail] = React.useState("")
  const [otp, setOtp] = React.useState("")
  const [busy, setBusy] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [info, setInfo] = React.useState<string | null>(null)

  const otpRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (ready && isLoggedIn) {
      void navigate({ to: "/cupons" })
    }
  }, [ready, isLoggedIn, navigate])

  React.useEffect(() => {
    if (step === "otp") {
      otpRef.current?.focus()
    }
  }, [step])

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setInfo(null)

    const clean = email.trim().toLowerCase()
    if (!isValidEmail(clean)) {
      setError("Digite um e-mail válido.")
      return
    }

    setBusy(true)
    const result = await requestOtp(clean)
    setBusy(false)

    if (!result.ok) {
      setError(result.error)
      return
    }

    setEmail(clean)
    setOtp("")
    setStep("otp")
    setInfo(
      `Preview: use o código ${PREVIEW_OTP} (depois o e-mail real leva o OTP).`,
    )
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    setBusy(true)
    const result = await verifyOtp(email, otp)
    setBusy(false)

    if (!result.ok) {
      setError(result.error)
      return
    }

    loginSession(email)
    void navigate({ to: "/cupons" })
  }

  async function handleResend() {
    setError(null)
    setBusy(true)
    const result = await requestOtp(email)
    setBusy(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    setInfo(`Código reenviado (preview). Continua sendo ${PREVIEW_OTP}.`)
    setOtp("")
    otpRef.current?.focus()
  }

  function handleChangeEmail() {
    setStep("email")
    setOtp("")
    setError(null)
    setInfo(null)
  }

  function onOtpChange(value: string) {
    setOtp(normalizeOtp(value))
    setError(null)
  }

  return (
    <div className="login-page">
      <SiteHeader current="login" />

      <main id="conteudo" className="login-layout">
        <section className="login-card" aria-labelledby="login-title">
          <span className="detail-eyebrow">Clube dos Curiosos</span>
          <h1 id="login-title">
            {step === "email" ? "Entrar" : "Código de acesso"}
          </h1>
          <p className="login-lead">
            {step === "email"
              ? "Receba um código de 6 dígitos no e-mail. Sem senha."
              : (
                  <>
                    Enviamos o código para{" "}
                    <strong className="login-email-strong">{email}</strong>.
                  </>
                )}
          </p>

          {step === "email" ? (
            <form className="login-form" onSubmit={handleSendCode} noValidate>
              <label className="login-label" htmlFor="login-email">
                E-mail
              </label>
              <input
                id="login-email"
                className="login-input"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError(null)
                }}
                placeholder="voce@email.com"
                disabled={busy}
                required
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "login-error" : undefined}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={busy || !email.trim()}
              >
                {busy ? "enviando…" : "enviar código →"}
              </button>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleVerify} noValidate>
              <label className="login-label" htmlFor="login-otp">
                Código de {OTP_LENGTH} dígitos
              </label>
              <input
                ref={otpRef}
                id="login-otp"
                className="login-input login-input-otp"
                type="text"
                name="otp"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern={`[0-9]{${OTP_LENGTH}}`}
                maxLength={OTP_LENGTH}
                value={otp}
                onChange={(e) => onOtpChange(e.target.value)}
                placeholder="••••••"
                disabled={busy}
                required
                aria-invalid={error ? true : undefined}
                aria-describedby={
                  error
                    ? "login-error"
                    : info
                      ? "login-info"
                      : undefined
                }
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={busy || !isCompleteOtp(otp)}
              >
                {busy ? "verificando…" : "entrar no clube →"}
              </button>

              <div className="login-otp-actions">
                <button
                  type="button"
                  className="login-text-btn"
                  onClick={handleResend}
                  disabled={busy}
                >
                  reenviar código
                </button>
                <button
                  type="button"
                  className="login-text-btn"
                  onClick={handleChangeEmail}
                  disabled={busy}
                >
                  trocar e-mail
                </button>
              </div>
            </form>
          )}

          {error ? (
            <p id="login-error" className="login-error" role="alert">
              {error}
            </p>
          ) : null}
          {info && !error ? (
            <p id="login-info" className="login-info" role="status">
              {info}
            </p>
          ) : null}

          <p className="login-hint">
            Stub de preview — o OTP real chega por e-mail na Fase 2 (Supabase).
            Código de teste: <code>{PREVIEW_OTP}</code>
          </p>
        </section>

        <Link to="/" className="login-back">
          ← voltar à home
        </Link>
      </main>
    </div>
  )
}
