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
          "Comunidade de quem pensa e constrói — sem pose. Entre no Clube dos Curiosos.",
      },
    ],
  }),
})

/**
 * Página do card da home — Apple Design: um propósito (entender + entrar).
 * Sem feed fake, sem sobre/regras, sem CTA triplo.
 */
function ClubDetailPage() {
  const { isLoggedIn, ready } = useSession()

  return (
    <div className="detail-page">
      <SiteHeader current="home" />

      <main id="conteudo" className="detail-main">
        {/* Mesma largura/padding do site-nav → alinha com o logo */}
        <div className="detail-rail">
          <nav className="detail-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="detail-crumb-sep" aria-hidden="true">
              /
            </span>
            <span>Comunidade</span>
            <span className="detail-crumb-sep" aria-hidden="true">
              /
            </span>
            <span className="detail-crumb-current" aria-current="page">
              Clube dos Curiosos
            </span>
          </nav>
        </div>

        <div className="detail-shell">
          <section className="club-simple" aria-labelledby="detail-title">
            <div className="club-simple-cover">
              <img
                src="/assets/dino-blog-hero.png"
                alt=""
                width={1200}
                height={675}
              />
            </div>

            <div className="club-simple-body">
              <img
                className="club-simple-avatar"
                src="/assets/favicon-dino-180.png"
                alt=""
                width={56}
                height={56}
              />

              <h1 id="detail-title">Clube dos Curiosos</h1>

              <p className="club-simple-lede">
                Comunidade de quem pensa e constrói — sem pose.
              </p>

              <div className="club-simple-cta">
                {ready && isLoggedIn ? (
                  <Link to="/cupons" className="btn btn-primary">
                    Continuar →
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    search={
                      { next: "/community/clube-dos-curiosos" } as never
                    }
                    className="btn btn-primary"
                  >
                    Entrar no clube
                  </Link>
                )}
              </div>

              <p className="club-simple-meta">
                Grátis no preview · conversas reais
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
