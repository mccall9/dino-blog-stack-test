import { Link } from "@tanstack/react-router"

type Props = {
  current?: "home" | "cupons" | "about" | "login"
}

export function SiteHeader({ current = "home" }: Props) {
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
          <Link
            to="/cupons"
            aria-current={current === "cupons" ? "page" : undefined}
          >
            Cupons
          </Link>
          <Link
            to="/about"
            aria-current={current === "about" ? "page" : undefined}
          >
            Sobre
          </Link>
          <Link to="/login" className="btn btn-primary">
            entrar →
          </Link>
        </div>
      </nav>
    </header>
  )
}
