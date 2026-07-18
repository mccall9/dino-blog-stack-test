import { Link, useNavigate } from "@tanstack/react-router"
import { logoutSession, useSession } from "~/utils/session"

type Props = {
  current?: "home" | "cupons" | "about" | "login" | "skills"
}

export function SiteHeader({ current = "home" }: Props) {
  const { isLoggedIn, ready } = useSession()
  const navigate = useNavigate()

  async function handleLogout() {
    await logoutSession()
    void navigate({ to: "/" })
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegação principal">
        <Link
          to="/"
          className="brand"
          aria-current={current === "home" ? "page" : undefined}
        >
          <img
            className="brand-mark"
            src="/assets/dino-logo.png"
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
          />
          <span>dino.blog</span>
        </Link>

        <div className="nav-links">
          {/*
            Antes do login: Sobre + entrar
            Depois do login: Cupons + sair  (Sobre some)
            Cada destino continua em rota/página própria.
          */}
          <Link
            to="/skills"
            aria-current={current === "skills" ? "page" : undefined}
          >
            Skills
          </Link>
          {ready && isLoggedIn ? (
            <>
              <Link
                to="/cupons"
                aria-current={current === "cupons" ? "page" : undefined}
              >
                Cupons
              </Link>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleLogout}
              >
                sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/about"
                aria-current={current === "about" ? "page" : undefined}
              >
                Sobre
              </Link>
              <Link to="/login" className="btn btn-primary">
                entrar →
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
