# Agents & skills — dino-blog-stack-test

Stack **preview** do clube. Não é produção.  
**Fonte/cores travadas** em [DESIGN.md](./DESIGN.md) (DM Sans + tokens do site online).

## Skills (preferir 1–2 por pass)

Fonte no workspace do produto / Grok:

| Skill | Uso neste repo |
|-------|----------------|
| `baseline-ui` | spacing, hierarchy, text-balance/pretty, deslop |
| `fixing-accessibility` | focus-visible, alvos ≥44px, nomes, contraste |
| `emil-design-eng` | press `scale(0.97)`, ease-out, ≤200ms feedback |
| `fixing-metadata` | title/OG/noindex no preview |
| `marclou-review` | hero + CTA principal |
| `ui-skills-root` | escolher skill mínima se o pedido for amplo |

Paths típicos:
- `Desktop/build in public/.grok/skills/`
- `~/.grok/skills/` (emil-design-eng, etc.)

## Agents (personas de produto)

Copiar prompts de `build in public/.grok/agents/`:

| Agent | Zona |
|-------|------|
| **home-designer** | home, hero, seções club |
| **product-shell** | nav, rotas, CTAs |
| **content-builder** | copy ideias/about |
| **ship-check** | checks antes de “pronto pra review” |
| **supabase-guard** | só na Fase 2+ auth/feed |

## Regras anti-drift

1. Não trocar DM Sans por outra fonte de produto.  
2. Não introduzir segunda cor de accent (só `--green`).  
3. `dino-platform` = agents console — não misturar UI.  
4. Produção dinoclub.blog só quando cutover for decidido.
