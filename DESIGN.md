# Design — dino-blog-stack-test

## Postura

Este é um **stack test**.  
Podemos **evoluir** layout, tipografia de destaque, densidade e hierarquia.

- Referência de marca: clube dino.blog (verde, tom editorial, pt-BR)  
- **Não** exige pixel-parity com dinoclub.blog  
- Produção online pode estar em manutenção — o preview é o laboratório  

## Tokens base (ponto de partida, não prisão)

Definidos em `apps/web/src/styles/tokens.css` — podem ser estendidos se o redesign pedir.

| Token | Default |
|-------|---------|
| Font | DM Sans (pode combinar com display se fizer sentido) |
| Ink / muted / paper / soft / line | paleta clube |
| Green / green-dark / mint | accent principal |

## Skills (`.grok/skills/`)

| Skill | Uso |
|-------|-----|
| baseline-ui | deslop, spacing, hierarchy |
| emil-design-eng | press, ease-out, polish |
| fixing-accessibility | focus, alvos, a11y |
| marclou-review | hero + CTA |
| improve-ui | handoff de plano se redesign grande |
| ui-skills-root | escolher skill mínima |

## Agents (`.grok/agents/`)

| Agent | Zona |
|-------|------|
| **home-designer** | `/` visual e seções |
| **product-shell** | nav, rotas, CTAs, vercel |
| **content-builder** | copy pt-BR |
| **feed-designer** | `/feed` quando existir |
| **supabase-guard** | auth/data Fase 2+ |
| **ship-check** | build + checklist |

## Anti-padrões

- Misturar UI com `dino-platform` (agents console)  
- Deploy acidental como se fosse produção do clube  
- Feature dump sem uma CTA clara  
