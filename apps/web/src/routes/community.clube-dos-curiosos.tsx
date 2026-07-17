import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/community/clube-dos-curiosos")({
  component: ClubDetailPage,
  head: () => ({
    meta: [
      { title: "Clube dos Curiosos — dino.blog" },
      {
        name: "description",
        content:
          "Um lugar leve para compartilhar ideias, perguntas, descobertas e coisas que ainda estão sendo construídas.",
      },
    ],
  }),
})

const TOPICS = ["Ideias", "Criando", "Tecnologia", "Descobertas", "Perguntas"]

function ClubDetailPage() {
  return (
    <div className="detail-page">
      <SiteHeader current="home" />

      <main id="conteudo" className="detail-shell">
        <Link to="/" className="detail-back">
          ← Voltar
        </Link>

        <section className="detail-hero" aria-labelledby="detail-title">
          <div className="detail-hero-copy">
            <span className="detail-eyebrow">Comunidade do dino.blog</span>
            <h1 id="detail-title">Clube dos Curiosos</h1>
            <p className="detail-lede">
              Um lugar leve para compartilhar ideias, perguntas, descobertas e
              coisas que ainda estão sendo construídas.
            </p>
            <div className="detail-topics" aria-label="Assuntos da comunidade">
              {TOPICS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="detail-actions">
              <Link
                to="/login"
                search={{ next: "/feed" } as never}
                className="btn btn-primary"
              >
                Entrar no clube
              </Link>
              <span className="detail-meta">Comunidade aberta</span>
            </div>
          </div>
          <figure className="detail-image">
            <img
              src="/assets/dino-blog-hero.png"
              alt="Dino investigando uma ideia entre livros, uma lâmpada e pequenos objetos coloridos"
              width={1984}
              height={793}
            />
          </figure>
        </section>

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
            </ul>
          </aside>
        </section>

        <section className="detail-cta-block" aria-labelledby="join-title">
          <h2 id="join-title">Pronto para entrar?</h2>
          <p>
            No preview, o login OTP ainda é stub. O botão leva ao fluxo de
            entrar — e depois ao feed de conversas.
          </p>
          <Link to="/login" className="btn btn-primary">
            Entrar para participar
          </Link>
        </section>
      </main>
    </div>
  )
}
