import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import * as React from "react"
import {
  isCompleteOtp,
  isValidEmail,
  normalizeOtp,
  OTP_MAX,
  requestOtp,
  verifyOtp,
} from "~/utils/otp"
import { loginSession, useSession } from "~/utils/session"

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Participar — Dino Blog" },
      {
        name: "description",
        content: "Entre no Clube dos Curiosos.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
})

type Step = "email" | "code"

function LoginPage() {
  const navigate = useNavigate()
  const { isLoggedIn, ready } = useSession()

  const [step, setStep] = React.useState<Step>("email")
  const [email, setEmail] = React.useState("")
  const [code, setCode] = React.useState("")
  const [busy, setBusy] = React.useState(false)
  const [resendBusy, setResendBusy] = React.useState(false)
  const [status, setStatus] = React.useState("")
  const [statusError, setStatusError] = React.useState(false)

  const codeRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (ready && isLoggedIn) {
      void navigate({ to: "/cupons" })
    }
  }, [ready, isLoggedIn, navigate])

  React.useEffect(() => {
    if (step === "code") {
      codeRef.current?.focus()
    }
  }, [step])

  function message(text: string, error = false) {
    setStatus(text)
    setStatusError(error)
  }

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault()
    const clean = email.trim().toLowerCase()
    if (!isValidEmail(clean)) {
      message("Digite um e-mail válido.", true)
      emailRef.current?.focus()
      return
    }

    setBusy(true)
    message("")
    const result = await requestOtp(clean)
    setBusy(false)

    if (!result.ok) {
      message(result.error, true)
      return
    }

    setEmail(clean)
    setCode("")
    setStep("code")
    message("Código enviado. Confira também a caixa de spam.")
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    const token = normalizeOtp(code)
    if (!isCompleteOtp(token)) {
      message("Digite o código de 6 a 8 números enviado por e-mail.", true)
      codeRef.current?.focus()
      return
    }

    setBusy(true)
    message("")
    const result = await verifyOtp(email, token)
    if (!result.ok) {
      setBusy(false)
      message(result.error, true)
      return
    }

    loginSession(email)
    void navigate({ to: "/cupons" })
  }

  async function handleResend() {
    setResendBusy(true)
    message("Reenviando…")
    const result = await requestOtp(email)
    if (!result.ok) {
      message(result.error, true)
    } else {
      message("Novo código enviado.")
    }
    window.setTimeout(() => setResendBusy(false), 60000)
  }

  function handleChangeEmail() {
    setStep("email")
    setCode("")
    message("")
    window.setTimeout(() => emailRef.current?.focus(), 0)
  }

  return (
    <div className="auth-body otp-auth">
      <div className="auth-back">
        <Link to="/">← voltar</Link>
      </div>

      <main id="conteudo" className="auth-page">
        <section className="auth-card email-auth" aria-labelledby="auth-title">
          <img
            src="/assets/favicon-dino-180.png"
            alt=""
            className="auth-logo"
            width={50}
            height={50}
          />
          <h1 id="auth-title">Entrar no dino.blog</h1>
          <p>Use seu e-mail para receber um código de acesso. Sem senha.</p>

          {step === "email" ? (
            <form id="email-form" onSubmit={handleSendCode} noValidate>
              <label htmlFor="login-email">Seu e-mail</label>
              <input
                ref={emailRef}
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="voce@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={busy}
              />
              <button
                className="button auth-submit"
                type="submit"
                disabled={busy}
                data-label="Receber código →"
              >
                {busy ? "Enviando código…" : "Receber código →"}
              </button>
            </form>
          ) : (
            <form id="code-form" onSubmit={handleVerify} noValidate>
              <p className="code-help">
                Enviamos um código para <strong>{email}</strong>.
              </p>
              <label htmlFor="login-code">Código de acesso</label>
              <input
                ref={codeRef}
                id="login-code"
                className="otp-input"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={OTP_MAX}
                pattern={`[0-9]{6,${OTP_MAX}}`}
                placeholder="000000"
                required
                value={code}
                onChange={(e) => setCode(normalizeOtp(e.target.value))}
                disabled={busy}
              />
              <button
                className="button auth-submit"
                type="submit"
                disabled={busy}
                data-label="Entrar →"
              >
                {busy ? "Verificando…" : "Entrar →"}
              </button>
              <div className="otp-actions">
                <button
                  type="button"
                  onClick={handleChangeEmail}
                  disabled={busy}
                >
                  Trocar e-mail
                </button>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={busy || resendBusy}
                >
                  Reenviar código
                </button>
              </div>
            </form>
          )}

          <p
            className="auth-status"
            id="auth-status"
            role="status"
            aria-live="polite"
            data-error={statusError ? "true" : "false"}
          >
            {status}
          </p>

          <p className="login-terms">
            Ao continuar, você concorda em participar com curiosidade e
            respeito.
          </p>
        </section>
      </main>
    </div>
  )
}
