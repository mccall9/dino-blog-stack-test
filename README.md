# dino-blog-stack-test

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](./LICENSE)

**Experimental** rewrite of [dino.blog](https://dinoclub.blog) on the new stack — for Vercel **preview only**.

| | Production | This repo |
|--|------------|-----------|
| Site | [dinoclub.blog](https://dinoclub.blog) (static, maintenance now) | Stack test preview |
| Font | **DM Sans** | **DM Sans** (same as live) |
| Agents console | — | [dino-platform](https://github.com/mccall9/dino-platform) (separate) |

## Stack

Bun · Turborepo · Elysia · Eden Treaty (ready) · TanStack Start · Tailwind

## Dev

```bash
bun install
bun run dev
# web :3000 · api :3001/health
```

## Agents & skills

Work on this repo with product agents/skills from the static product workspace:

- Agents: `build in public/.grok/agents/` (home-designer, product-shell, …)
- Skills: marclou-review, baseline-ui, emil-design-eng, revenue-centric-design, …

See [AGENTS.md](./AGENTS.md) and [PHASES.md](./PHASES.md).

## Phases (stack test)

1. **Shell + home** (now) — nav, hero, tokens, DM Sans  
2. **Auth OTP** — Supabase  
3. **Feed + membership**  
4. **Content parity**  
5. **Decide cutover** (never automatic)

## License

[MIT](./LICENSE)
