import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/ideias")({
  component: IdeiasPage,
})

function IdeiasPage() {
  return (
    <div className="club-page min-h-screen">
      <SiteHeader current="ideias" />
      <main id="conteudo" className="club-shell">
        <span className="stack-badge">stack test</span>
        <div>
          <span className="eyebrow">Reserva editorial</span>
          <h1 className="mt-2 mb-3 text-4xl font-semibold tracking-tight">
            Ideias
          </h1>
          <p className="m-0 max-w-xl text-[var(--muted)] leading-relaxed">
            Stub da rota editorial. Conteúdo completo na fase de paridade.
            Produção em manutenção: dinoclub.blog.
          </p>
          <Link to="/" className="btn btn-secondary mt-6 inline-flex">
            ← Home do clube
          </Link>
        </div>
      </main>
    </div>
  )
}
