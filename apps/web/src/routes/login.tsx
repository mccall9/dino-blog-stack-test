import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/login")({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "var(--paper)" }}>
      <SiteHeader current="login" />
      <main id="conteudo" className="discover" style={{ paddingTop: "2.5rem" }}>
        <h1>Entrar no clube</h1>
        <p className="discover-sub">
          OTP por e-mail (6–8 dígitos) na Fase 2. Por enquanto este botão é o
          placeholder do fluxo.
        </p>
        <Link to="/" className="btn btn-accent">
          Voltar à home
        </Link>
      </main>
    </div>
  )
}
