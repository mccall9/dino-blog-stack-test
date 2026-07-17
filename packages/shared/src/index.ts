/** Shared types for stack-test product API (expand with feed/auth later). */

export type HealthResponse = {
  ok: true
  service: string
  runtime: "bun"
  note?: string
}
