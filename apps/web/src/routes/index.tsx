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
        <div className="flex flex-wrap items-center gap-2">
          <span className="stack-badge">stack test · not production</span>
          <span className="text-xs text-[var(--muted)]">
            DM Sans · tokens do site online
          </span>
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
              <li>Ideias e projetos em andamento</li>
              <li>Perguntas sem pose de especialista</li>
              <li>Conversas reais, não catálogo de clubes</li>
            </ul>
            <div className="club-hero-actions">
              <Link to="/login" className="btn btn-primary">
                Entrar para participar
              </Link>
              <Link to="/about" className="btn btn-secondary">
                A história do clube
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

        <section aria-labelledby="club-live-title">
          <div className="club-section-head">
            <div>
              <span className="eyebrow">Acontecendo agora</span>
              <h2 id="club-live-title">Conversas recentes</h2>
              <p>
                Prova de vida do clube — prévia pública do que a gente está
                pensando e construindo.
              </p>
            </div>
            <Link to="/login" className="text-link shrink-0">
              Entrar para participar →
            </Link>
          </div>
          <div className="club-card club-card-muted" role="status">
            <p className="m-0">
              <strong className="text-[var(--ink)]">Stack test</strong> — feed
              live (Supabase) nas próximas fases. Produção em manutenção:{" "}
              <a className="text-link" href="https://dinoclub.blog">
                dinoclub.blog
              </a>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="featured-club-title">
          <div className="club-section-head">
            <div>
              <span className="eyebrow">Um só espaço</span>
              <h2 id="featured-club-title">A história do clube</h2>
              <p>
                Entre para ler e participar das conversas. Aqui fica o contexto
                — quem somos e como convivemos.
              </p>
            </div>
          </div>
          <article className="club-card">
            <h3 className="mt-0 mb-2 text-xl font-semibold text-balance">
              Clube dos Curiosos
            </h3>
            <p className="m-0 text-[var(--muted)] leading-relaxed text-pretty">
              Um espaço para curiosidade sem performance. Este monorepo valida a
              stack Bun · Elysia · TanStack Start · Tailwind — com a mesma
              identidade visual do site online.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/login" className="btn btn-primary">
                Entrar para participar
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Sobre
              </Link>
            </div>
          </article>
        </section>

        <footer className="border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>dino-blog-stack-test · experimental</span>
            <span className="text-xs">
              skills: baseline-ui · a11y · emil-design-eng
            </span>
          </div>
        </footer>
      </main>
    </div>
  )
}
