import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/ideias")({
  component: IdeiasPage,
})

function IdeiasPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "var(--paper)" }}>
      <SiteHeader current="ideias" />
      <main id="conteudo" className="discover" style={{ paddingTop: "2.5rem" }}>
        <h1>Ideias</h1>
        <p className="discover-sub">
          Reserva editorial do dino.blog. Stub no stack-test — conteúdo completo
          na próxima fase.
        </p>
        <Link to="/" className="btn btn-ghost">
          ← Home
        </Link>
      </main>
    </div>
  )
}
