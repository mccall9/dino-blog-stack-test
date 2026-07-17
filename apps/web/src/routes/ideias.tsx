import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/ideias")({
  component: IdeiasPage,
})

function IdeiasPage() {
  return (
    <div className="page-simple">
      <SiteHeader current="ideias" />
      <main id="conteudo">
        <h1>Ideias</h1>
        <p>
          Reserva editorial do dino.blog. Stub no stack-test — conteúdo completo
          na próxima fase.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Home
        </Link>
      </main>
    </div>
  )
}
