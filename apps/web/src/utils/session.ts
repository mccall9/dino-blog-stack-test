import * as React from "react"

const KEY = "dino.session"
const EVENT = "dino-session"

export type Session = {
  userId: string
  email: string
  loggedInAt: string
}

function readSession(): Session | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Session
    if (!parsed?.userId) return null
    return parsed
  } catch {
    return null
  }
}

export function getSession(): Session | null {
  return readSession()
}

export function loginSession(email = "curioso@dino.blog"): Session {
  const session: Session = {
    userId: "preview-user",
    email,
    loggedInAt: new Date().toISOString(),
  }
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(session))
    window.dispatchEvent(new Event(EVENT))
  }
  return session
}

export function logoutSession(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(KEY)
  window.dispatchEvent(new Event(EVENT))
}

/** Client-only session hook (localStorage stub until OTP Fase 2). */
export function useSession() {
  const [session, setSession] = React.useState<Session | null>(null)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    setSession(readSession())
    setReady(true)

    const sync = () => setSession(readSession())
    window.addEventListener(EVENT, sync)
    window.addEventListener("storage", sync)
    return () => {
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
