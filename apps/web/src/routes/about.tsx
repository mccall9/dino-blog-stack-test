import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/about")({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="page-simple">
      <SiteHeader current="about" />
      <main id="conteudo">
        <h1>Clube dos Curiosos</h1>
        <p>
          Pessoas pensando em voz alta, sem marketplace de comunidades. Um só
          espaço — curiosidade com companhia.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Home
        </Link>
      </main>
    </div>
  )
}
