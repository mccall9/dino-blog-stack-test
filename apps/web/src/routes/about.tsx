import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/about")({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "var(--paper)" }}>
      <SiteHeader current="about" />
      <main id="conteudo" className="discover" style={{ paddingTop: "2.5rem" }}>
        <h1 style={{ maxWidth: "18ch" }}>Clube dos Curiosos</h1>
        <p className="discover-sub">
          Pessoas pensando em voz alta, sem marketplace de comunidades. Um só
          espaço — curiosidade com companhia.
        </p>
        <Link to="/" className="btn btn-ghost">
          ← Home
        </Link>
      </main>
    </div>
  )
}
