import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"
import { exchangeAuthCode } from "~/utils/auth"
import { getSupabase } from "~/utils/supabase"

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallbackPage,
  head: () => ({
    meta: [
      { title: "Entrando… — dino.blog" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
})

function safeNext(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/cupons"
  }
  return value
}

function AuthCallbackPage() {
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let cancelled = false

    async function finish() {
      const params = new URLSearchParams(window.location.search)
      const next = safeNext(params.get("next"))
      const code = params.get("code")
      const hashError = new URLSearchParams(
        window.location.hash.replace(/^#/, ""),
      ).get("error_description")

      if (hashError) {
        if (!cancelled) setError(decodeURIComponent(hashError))
        return
      }

      try {
        if (code) {
          const result = await exchangeAuthCode(window.location.href)
          if (!result.ok) {
            if (!cancelled) setError(result.error)
            return
          }
        } else {
          // detectSessionInUrl may already have set the session
          const {
            data: { session },
          } = await getSupabase().auth.getSession()
          if (!session) {
            // short wait for hash parsing
            await new Promise((r) => setTimeout(r, 400))
            const again = await getSupabase().auth.getSession()
            if (!again.data.session) {
              if (!cancelled) {
                setError("Não encontramos a sessão. Tente entrar de novo.")
              }
              return
            }
          }
        }

        if (!cancelled) {
          window.location.replace(next)
        }
      } catch {
        if (!cancelled) setError("Falha ao concluir o login.")
      }
    }

    void finish()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="auth-body otp-auth">
      <main id="conteudo" className="auth-page">
        <section className="auth-card email-auth" aria-live="polite">
          <img
            src="/assets/favicon-dino-180.png"
            alt=""
            className="auth-logo"
            width={50}
            height={50}
          />
          <h1>{error ? "Não deu certo" : "Entrando…"}</h1>
          <p>
            {error
              ? error
              : "Finalizando o login. Só um instante."}
          </p>
          {error ? (
            <a className="button auth-submit" href="/login">
              Voltar ao login →
            </a>
          ) : null}
        </section>
      </main>
    </div>
  )
}
