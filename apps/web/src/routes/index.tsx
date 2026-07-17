import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/")({
  component: ClubHome,
})

function ClubHome() {
  return (
    <div className="club-page">
      <SiteHeader current="home" />

      <main id="conteudo" className="club-shell">
        <div>
          <span className="stack-badge">stack test · preview</span>
        </div>

        <section className="club-hero" aria-labelledby="club-hero-title">
          <div>
            <span className="eyebrow">Clube dos Curiosos</span>
            <h1 id="club-hero-title">
              Onde a curiosidade
              <br />
              encontra companhia
            </h1>
            <p className="club-hero-lede">
              Pessoas pensando em voz alta, fazendo perguntas e mostrando o que
              ainda está em construção — agora.
            </p>
            <ul className="club-hero-points" aria-label="O que acontece aqui">
              <li>
                <span aria-hidden="true">1</span>
                Ideias e projetos em andamento
              </li>
              <li>
                <span aria-hidden="true">2</span>
                Perguntas sem pose de especialista
              </li>
              <li>
                <span aria-hidden="true">3</span>
                Conversas reais, não catálogo de clubes
              </li>
            </ul>
            <div className="club-hero-actions">
              <Link to="/login" className="btn btn-primary">
                Entrar para participar
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Conhecer o clube
              </Link>
            </div>
          </div>
          <figure className="club-hero-art">
            <img
              src="/assets/dino-blog-hero.png"
              alt="Dino investigando uma ideia entre livros, uma lâmpada e objetos curiosos"
              width={1984}
              height={793}
            />
          </figure>
        </section>

        <section className="bento" aria-label="O que vem a seguir neste preview">
          <article className="panel">
            <div className="panel-head">
              <span className="eyebrow">Acontecendo</span>
              <h2>Conversas recentes</h2>
            </div>
            <p>
              Aqui entram as prévias públicas do feed. No stack-test ainda é
              placeholder — a lógica Supabase chega com o agent{" "}
              <strong className="text-[var(--ink)]">supabase-guard</strong> e o
              shell do{" "}
              <strong className="text-[var(--ink)]">product-shell</strong>.
            </p>
            <p className="mt-4">
              <Link to="/login" className="text-link">
                Entrar para participar →
              </Link>
            </p>
          </article>

          <article className="panel panel-soft">
            <div className="panel-head">
              <span className="eyebrow">Um só espaço</span>
              <h2>Clube dos Curiosos</h2>
            </div>
            <p>
              Um lugar para curiosidade sem performance. Este preview valida a
              stack nova com agents e skills — design pode evoluir.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to="/about" className="btn btn-secondary">
                Sobre
              </Link>
              <Link to="/ideias" className="btn btn-secondary">
                Ideias
              </Link>
            </div>
          </article>
        </section>

        <footer className="site-footer">
          <span>dino-blog-stack-test</span>
          <span>
            agents: home-designer · product-shell · content-builder · …
          </span>
        </footer>
      </main>
    </div>
  )
}
