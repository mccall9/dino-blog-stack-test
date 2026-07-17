import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre — dino.blog" },
      {
        name: "description",
        content:
          "O Clube dos Curiosos: um espaço para pensar em voz alta, sem marketplace de comunidades.",
      },
    ],
  }),
})

function AboutPage() {
  return (
    <div className="page-simple">
      <SiteHeader current="about" />
      <main id="conteudo">
        <h1>Sobre o dino.blog</h1>
        <p>
          O Clube dos Curiosos é um espaço para pessoas que pensam em voz alta,
          fazem perguntas e mostram o que ainda está em construção — sem pose
          de especialista e sem diretório de comunidades.
        </p>
        <p>
          A curiosidade fica melhor com companhia. Entre, leia o que está vivo e
          participe.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
          <Link to="/community/clube-dos-curiosos" className="btn btn-primary">
            ver o clube
          </Link>
          <Link to="/login" className="btn btn-ghost">
            entrar →
          </Link>
        </div>
      </main>
    </div>
  )
}
