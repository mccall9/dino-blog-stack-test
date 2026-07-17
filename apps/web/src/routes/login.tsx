import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import * as React from "react"
import { sendEmailCode, signInWithX, verifyEmailCode } from "~/utils/auth"
import { isCompleteOtp, normalizeOtp, OTP_MAX } from "~/utils/otp"
import { useSession } from "~/utils/session"

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
  const [xBusy, setXBusy] = React.useState(false)
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

    setBusy(true)
    message("")
    const result = await sendEmailCode(clean, "/cupons")
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
    const result = await verifyEmailCode(email, token)
    if (!result.ok) {
      setBusy(false)
      message(result.error, true)
      return
    }

    void navigate({ to: "/cupons" })
  }

  async function handleResend() {
    setResendBusy(true)
    message("Reenviando…")
    const result = await sendEmailCode(email, "/cupons")
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

  async function handleXLogin() {
    setXBusy(true)
    message("")
    const result = await signInWithX("/cupons")
    if (!result.ok) {
      setXBusy(false)
      message(result.error, true)
    }
    // on success browser redirects to X
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
            <>
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
                  disabled={busy || xBusy}
                />
                <button
                  className="button auth-submit"
                  type="submit"
                  disabled={busy || xBusy}
                  data-label="Receber código →"
                >
                  {busy ? "Enviando código…" : "Receber código →"}
                </button>
              </form>

              <div className="auth-divider" role="separator" aria-label="ou">
                <span>ou</span>
              </div>

              <button
                type="button"
                className="x-login-button"
                onClick={handleXLogin}
                disabled={busy || xBusy}
              >
                <XMark />
                <span>
                  {xBusy ? "Abrindo X…" : "Fazer login com X"}
                </span>
              </button>
            </>
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

function XMark() {
  return (
    <svg
      className="x-login-mark"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
      />
    </svg>
  )
}
