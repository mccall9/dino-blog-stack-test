import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/login")({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="page-simple">
      <SiteHeader current="login" />
      <main id="conteudo">
        <h1>Entrar no clube</h1>
        <p>
          OTP por e-mail (6–8 dígitos) na Fase 2. Por enquanto use o botão da
          barra: <strong>entrar →</strong>
        </p>
        <Link to="/" className="btn btn-primary">
          Voltar à home
        </Link>
      </main>
    </div>
  )
}
