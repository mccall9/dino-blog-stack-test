import * as React from "react"
import { signOut as supabaseSignOut } from "~/utils/auth"
import { getSupabase } from "~/utils/supabase"

const EVENT = "dino-session"

export type Session = {
  userId: string
  email: string
  loggedInAt: string
  provider?: string
}

function mapUser(user: {
  id: string
  email?: string | null
  app_metadata?: { provider?: string }
  created_at?: string
}): Session {
  return {
    userId: user.id,
    email: user.email || "",
    loggedInAt: user.created_at || new Date().toISOString(),
    provider: user.app_metadata?.provider,
  }
}

function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT))
  }
}

/** @deprecated Prefer Supabase OTP/OAuth — kept for rare offline preview only. */
export function loginSession(email = "curioso@dino.blog"): Session {
  const session: Session = {
    userId: "preview-user",
    email,
    loggedInAt: new Date().toISOString(),
    provider: "preview",
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("dino.session", JSON.stringify(session))
    emit()
  }
  return session
}

export async function logoutSession(): Promise<void> {
  if (typeof window !== "undefined") {
    localStorage.removeItem("dino.session")
  }
  await supabaseSignOut()
  emit()
}

export function useSession() {
  const [session, setSession] = React.useState<Session | null>(null)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    let mounted = true
    const supabase = getSupabase()

    async function boot() {
      try {
        const {
          data: { session: s },
        } = await supabase.auth.getSession()
        if (!mounted) return
        if (s?.user) {
          setSession(mapUser(s.user))
        } else {
          // legacy preview key
          try {
            const raw = localStorage.getItem("dino.session")
            if (raw) {
              const parsed = JSON.parse(raw) as Session
              if (parsed?.userId) setSession(parsed)
              else setSession(null)
            } else {
              setSession(null)
            }
          } catch {
            setSession(null)
          }
        }
      } catch {
        if (mounted) setSession(null)
      } finally {
        if (mounted) setReady(true)
      }
    }

    void boot()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      if (!mounted) return
      if (s?.user) {
        localStorage.removeItem("dino.session")
        setSession(mapUser(s.user))
      } else {
        setSession(null)
      }
      emit()
    })

    const sync = () => {
      void supabase.auth.getSession().then(({ data }) => {
        if (!mounted) return
        if (data.session?.user) setSession(mapUser(data.session.user))
      })
    }
    window.addEventListener(EVENT, sync)
    window.addEventListener("storage", sync)

    return () => {
      mounted = false
      subscription.unsubscribe()
      window.removeEventListener(EVENT, sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  return {
    session,
    ready,
    isLoggedIn: !!session,
  }
}
