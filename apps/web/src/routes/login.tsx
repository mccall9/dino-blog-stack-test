import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import * as React from "react"
import { SiteHeader } from "~/components/SiteHeader"
import { loginSession, useSession } from "~/utils/session"

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Entrar — dino.blog" },
      {
        name: "description",
        content: "Entre no Clube dos Curiosos para desbloquear cupons e benefícios.",
      },
    ],
  }),
})

function LoginPage() {
  const navigate = useNavigate()
  const { isLoggedIn, ready } = useSession()
  const [email, setEmail] = React.useState("curioso@dino.blog")

  React.useEffect(() => {
    if (ready && isLoggedIn) {
      void navigate({ to: "/cupons" })
    }
  }, [ready, isLoggedIn, navigate])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    loginSession(email.trim() || "curioso@dino.blog")
    void navigate({ to: "/cupons" })
  }

  return (
    <div className="page-simple">
      <SiteHeader current="login" />
      <main id="conteudo" className="login-shell">
        <span className="detail-eyebrow">Clube dos Curiosos</span>
        <h1>Entrar</h1>
        <p>
          Preview local — sem OTP ainda. Ao entrar, a navegação muda:{" "}
          <strong>Cupons</strong> aparece e <strong>Sobre</strong> some.
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-label" htmlFor="login-email">
            E-mail
          </label>
          <input
            id="login-email"
            className="login-input"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
          />
          <button type="submit" className="btn btn-primary">
            entrar no clube →
          </button>
        </form>

        <p className="login-hint">
          Depois: OTP por e-mail (6–8 dígitos). Agora é só stub de sessão no
          browser.
        </p>

        <Link to="/" className="btn btn-ghost">
          voltar à home
        </Link>
      </main>
    </div>
  )
}
