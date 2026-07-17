import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"

/**
 * Product API scaffold for stack test.
 * Eden Treaty types come from `export type App`.
 * Agents console lives in dino-platform (separate).
 */
export const app = new Elysia()
  .use(
    cors({
      origin: true,
      methods: ["GET", "POST", "OPTIONS"],
    }),
  )
  .get("/health", () => ({
    ok: true as const,
    service: "dino-blog-stack-test-api",
    runtime: "bun" as const,
    note: "Stack test only — not production dinoclub.blog",
  }))

export type App = typeof app
