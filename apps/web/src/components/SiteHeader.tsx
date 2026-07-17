import { Link } from "@tanstack/react-router"

type Props = {
  current?: "home" | "ideias" | "about" | "login"
}

export function SiteHeader({ current = "home" }: Props) {
  return (
    <header className="border-b border-[var(--line)] bg-white/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex w-[min(calc(100%-2rem),var(--max))] items-center justify-between gap-4 py-3.5"
        aria-label="Navegação principal"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-[1.05rem] font-semibold tracking-tight text-[var(--ink)]"
          aria-current={current === "home" ? "page" : undefined}
        >
          <img
            src="/assets/dino-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span>dino.blog</span>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-[var(--ink)]">
          <Link
            to="/ideias"
            className={
              current === "ideias"
                ? "font-semibold underline decoration-[var(--green)] underline-offset-4"
                : "hover:text-[var(--green-dark)]"
            }
          >
            Ideias
          </Link>
          <Link
            to="/about"
            className={
              current === "about"
                ? "font-semibold underline decoration-[var(--green)] underline-offset-4"
                : "hover:text-[var(--green-dark)]"
            }
          >
            Sobre
          </Link>
          <Link to="/login" className="btn btn-primary">
            Entrar para participar
          </Link>
        </div>
      </nav>
    </header>
  )
}
