import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"
import { useSession } from "~/utils/session"

export const Route = createFileRoute("/community/clube-dos-curiosos")({
  component: ClubDetailPage,
  head: () => ({
    meta: [
      { title: "Clube dos Curiosos — dino.blog" },
      {
        name: "description",
        content:
          "Comunidade de gente que pensa, pergunta e mostra o que ainda está em construção. Entre para participar.",
      },
    ],
  }),
})

const TOPICS = [
  "Ideias",
  "Perguntas",
  "Projetos",
  "Build in public",
  "Descobertas",
]

/** Preview conversations until /feed is real */
const PREVIEW_THREADS = [
  {
    id: "1",
    author: "Isa",
    topic: "perguntas",
    title: "Como vocês validam uma ideia sem gastar 3 meses?",
    excerpt:
      "Estou entre um protótipo feio e um deck bonito. O que funcionou de verdade pra vocês?",
    replies: 12,
    when: "há 2h",
  },
  {
    id: "2",
    author: "Rafa",
    topic: "build in public",
    title: "Shippei o hero do clube em público — o que mudaria?",
    excerpt:
      "Sem scroll, um card, um CTA. Sinto que falta prova. Crítica honestamente.",
    replies: 8,
    when: "há 5h",
  },
  {
    id: "3",
    author: "Dino",
    topic: "projetos",
    title: "O que o dino já sabe: inventário de skills no ar",
    excerpt:
      "Publiquei o pack dino-skills. Quer ver o que entra no setup de verdade?",
    replies: 21,
    when: "ontem",
  },
]

function ClubDetailPage() {
  const { isLoggedIn, ready } = useSession()

  return (
    <div className="detail-page">
      <SiteHeader current="home" />

      <main id="conteudo" className="detail-shell">
        <Link to="/" className="detail-back">
          ← Voltar
        </Link>

        {/* Hero: cover + identity (extends the home card) */}
        <section className="club-detail-hero" aria-labelledby="detail-title">
          <div className="club-detail-cover">
            <img
              src="/assets/dino-blog-hero.png"
              alt=""
              width={1200}
              height={480}
            />
          </div>

          <div className="club-detail-identity">
            <div className="club-detail-identity-row">
              <img
                className="club-detail-avatar"
                src="/assets/favicon-dino-180.png"
                alt=""
                width={56}
                height={56}
              />
              <div>
                <p className="detail-eyebrow">Comunidade · dino.blog</p>
                <h1 id="detail-title">Clube dos Curiosos</h1>
              </div>
            </div>

            <p className="club-detail-lede">
              Comunidade de gente que pensa, pergunta e mostra o que ainda está
              em construção — sem pose de especialista.
            </p>

            <p className="club-detail-stats">
              <strong>1</strong> clube ·{" "}
              <strong>conversas</strong> em tempo real ·{" "}
              <span className="club-detail-open">aberto no preview</span>
            </p>

            <div className="detail-topics" aria-label="Assuntos da comunidade">
              {TOPICS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="detail-actions">
              {ready && isLoggedIn ? (
                <Link to="/cupons" className="btn btn-primary">
                  Ver cupons →
                </Link>
              ) : (
                <Link
                  to="/login"
                  search={{ next: "/community/clube-dos-curiosos" } as never}
                  className="btn btn-primary"
                >
                  Entrar no clube
                </Link>
              )}
              <Link to="/about" className="btn btn-ghost">
                Sobre o dino
              </Link>
            </div>
          </div>
        </section>

        {/* Story + rules */}
        <section className="detail-content">
          <div className="detail-story">
            <span className="detail-eyebrow">Sobre este espaço</span>
            <h2>Ideias simples ficam maiores quando encontram companhia.</h2>
            <p>
              Aqui você não precisa ser especialista, influencer ou estar
              vendendo alguma coisa. Traga uma pergunta, mostre o que está
              criando ou compartilhe algo que fez você olhar duas vezes.
            </p>
          </div>
          <aside className="detail-rules">
            <h2>Como participamos</h2>
            <ul>
              <li>Traga contexto.</li>
              <li>Escute com curiosidade.</li>
              <li>Discorde com respeito.</li>
              <li>Mostre o processo, não só o resultado.</li>
            </ul>
          </aside>
        </section>

        {/* Conversations preview */}
        <section
          className="club-threads"
          aria-labelledby="threads-title"
        >
          <div className="club-threads-head">
            <div>
              <span className="detail-eyebrow">Dentro do clube</span>
              <h2 id="threads-title">Conversas recentes</h2>
            </div>
            <p className="club-threads-note">
              Preview · feed completo após login
            </p>
          </div>

          <ul className="club-thread-list">
            {PREVIEW_THREADS.map((th) => (
              <li key={th.id}>
                <Link
                  to="/login"
                  search={
                    {
                      next: "/community/clube-dos-curiosos",
                    } as never
                  }
                  className="club-thread-card"
                >
                  <div className="club-thread-meta">
                    <span className="club-thread-author">{th.author}</span>
                    <span className="club-thread-dot" aria-hidden>
                      ·
                    </span>
                    <span className="club-thread-topic">{th.topic}</span>
                    <span className="club-thread-when">{th.when}</span>
                  </div>
                  <h3 className="club-thread-title">{th.title}</h3>
                  <p className="club-thread-excerpt">{th.excerpt}</p>
                  <p className="club-thread-footer">
                    <strong>{th.replies}</strong> respostas · entrar para
                    participar
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-cta-block" aria-labelledby="join-title">
          <h2 id="join-title">Pronto para entrar?</h2>
          <p>
            Um clube, conversas reais. Entre para ver cupons, comentar e
            acompanhar o que o dino está construindo em público.
          </p>
          {ready && isLoggedIn ? (
            <Link to="/cupons" className="btn btn-primary">
              Ir para cupons
            </Link>
          ) : (
            <Link
              to="/login"
              search={{ next: "/community/clube-dos-curiosos" } as never}
              className="btn btn-primary"
            >
              Entrar para participar
            </Link>
          )}
        </section>
      </main>
    </div>
  )
}
