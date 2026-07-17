import { createFileRoute, Link } from "@tanstack/react-router"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/login")({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="club-page min-h-screen">
      <SiteHeader current="login" />
      <main id="conteudo" className="club-shell max-w-lg">
        <div className="club-card">
          <span className="eyebrow">Entrar</span>
          <h1 className="mt-2 mb-2 text-3xl font-semibold tracking-tight">
            Login OTP (próxima fase)
          </h1>
          <p className="m-0 text-[var(--muted)] leading-relaxed">
            Auth Supabase OTP 6–8 dígitos entra na Fase 2 deste stack test.
            Enquanto o site online está em manutenção, o fluxo real fica
            pausado.
          </p>
          <Link to="/" className="btn btn-secondary mt-5 inline-flex">
            ← Home
          </Link>
        </div>
      </main>
    </div>
  )
}
