import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * Same Supabase project as production dino.blog (anon/publishable key only).
 * Override with VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY when needed.
 */
const url =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://dyqfpgxdkizgcgfzrkbd.supabase.co"

const anonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_YjP1AlL6KD5stjOWWY4w6w_AQVhyK6W"

export const supabaseConfigured = Boolean(url && anonKey)

let client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (!client) {
    client = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    })
  }
  return client
}
