import { createFileRoute, Link } from "@tanstack/react-router"
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
  return (
    <div>
      <SiteHeader current="home" />

      <main id="conteudo">
        {/* Fold 1 — marclou: hero alone + one CTA; RCD: problem/desire first */}
        <section className="discover" aria-labelledby="hero-title">
          <span className="stack-pill">stack test · preview</span>

          <h1 id="hero-title">Pense em voz alta. Ache quem responde.</h1>

          <p className="discover-sub">
            O <strong className="text-[var(--ink)] font-semibold">Clube dos Curiosos</strong>{" "}
            — conversas reais, sem marketplace de comunidades.{" "}
            <Link to="/about">como funciona</Link>
          </p>

          <div className="discover-cta">
            <Link to="/login" className="btn btn-accent">
              Entrar para participar
            </Link>
          </div>

          {/* Chips = temas do clube, NÃO lista de comunidades (anti-biip marketplace) */}
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

        {/* Product before explanation — single club card (biip card pattern, one thing) */}
        <section className="product-stage" aria-label="O clube">
          <Link to="/login" className="club-card">
            <div className="club-card-cover">
              <img
                src="/assets/dino-blog-hero.png"
                alt=""
                width={640}
                height={400}
              />
            </div>
            <div className="club-card-body">
              <div className="club-card-meta">
                <img
                  className="club-card-avatar"
                  src="/assets/favicon-dino-180.png"
                  alt=""
                  width={28}
                  height={28}
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

        <section className="below" aria-labelledby="why-title">
          <div>
            <h2 id="why-title">Por que não é um diretório de comunidades</h2>
            <p>
              Um só espaço. Menos ruído, mais companhia. Você entra, lê o que
              está vivo e participa — em vez de escolher entre 50 clubs vazios.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <span>dino.blog · stack test</span>
          <span>marclou · revenue · ui craft</span>
        </footer>
      </main>
    </div>
  )
}
