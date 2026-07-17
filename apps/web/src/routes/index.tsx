import { createFileRoute, Link } from "@tanstack/react-router"
import * as React from "react"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/")({
  component: ClubHome,
  head: () => ({
    meta: [
      {
        title: "Pense em voz alta — Clube dos Curiosos · dino.blog",
      },
      {
        name: "description",
        content:
          "O Clube dos Curiosos: conversas reais de quem pensa e constrói. Entre para participar.",
      },
    ],
  }),
})

const TOPICS = [
  { id: "todas", label: "todas", active: true },
  { id: "ideias", label: "ideias" },
  { id: "perguntas", label: "perguntas" },
  { id: "projetos", label: "projetos" },
  { id: "build", label: "build in public" },
] as const

function ClubHome() {
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    const prevHtml = document.documentElement.style.overflow
    const prevBody = document.body.style.overflow
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    return () => {
      document.documentElement.style.overflow = prevHtml
      document.body.style.overflow = prevBody
    }
  }, [])

  return (
    <div className="page-lock">
      <SiteHeader current="home" />

      <div className="home-body" id="conteudo">
        <section className="discover" aria-labelledby="hero-title">
          <h1 id="hero-title">Pense em voz alta. Ache quem responde.</h1>

          <p className="discover-sub">
            O{" "}
            <strong className="text-[var(--ink)] font-semibold">
              Clube dos Curiosos
            </strong>{" "}
            — conversas reais, sem marketplace de comunidades.{" "}
            <Link to="/login">entrar para ver cupons</Link>
          </p>

          <form
            className="search-wrap"
            role="search"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label className="sr-only" htmlFor="club-search">
              Buscar no clube
            </label>
            <input
              id="club-search"
              className="search-input"
              type="search"
              name="q"
              placeholder="buscar no clube…"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          <div className="chips" role="list" aria-label="Temas no clube">
            {TOPICS.map((t) => (
              <span
                key={t.id}
                role="listitem"
                className="chip"
                data-active={t.active ? "true" : "false"}
              >
                {t.label}
              </span>
            ))}
          </div>
        </section>

        <section className="product-stage" aria-label="O clube">
          <Link to="/community/clube-dos-curiosos" className="club-card">
            <div className="club-card-cover">
              <img
                src="/assets/dino-blog-hero.png"
                alt=""
                width={640}
                height={360}
              />
            </div>
            <div className="club-card-body">
              <div className="club-card-meta">
                <img
                  className="club-card-avatar"
                  src="/assets/favicon-dino-180.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="club-card-name">Clube dos Curiosos</span>
              </div>
              <p className="club-card-desc">
                Comunidade de gente que pensa, pergunta e mostra o que ainda
                está em construção — sem pose de especialista.
              </p>
              <p className="club-card-stats">
                <strong>1</strong> clube · conversas em tempo real ·{" "}
                <strong>entrar grátis no preview</strong>
              </p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  )
}
