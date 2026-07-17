# Design system lock — dino-blog-stack-test

**Identity source of truth:** production [dinoclub.blog](https://dinoclub.blog) / `build in public/styles.css`  
**This repo only re-implements** that look on the new stack. No Arvo, no purple, no new accent.

## Brand (must not drift)

| Token | Value | Use |
|-------|--------|-----|
| Font | **DM Sans** 400/500/600 | Body + UI |
| Accent quote | **Nunito** 400 | Only if quotes appear |
| `--ink` | `#171917` | Text |
| `--muted` | `#6f746f` | Secondary text |
| `--paper` | `#ffffff` | Page bg |
| `--soft` | `#f2f3f0` | Soft surfaces |
| `--line` | `#dedfda` | Borders |
| `--green` | `#229b55` | Primary CTA only |
| `--green-dark` | `#176f3d` | Hover / eyebrows |
| `--mint` | `#dff3e5` | Soft green wash |
| `--radius` | `30px` | Large shells |
| `--max` | `1120–1180px` | Content width |

### Rules
1. **One accent** per view: green CTA only (baseline-ui + marclou).
2. **No new fonts** on product surfaces.
3. **No purple / multicolor gradients** (baseline-ui).
4. Hero atmosphere washes may match production (mint/soft radial only).

## Skills to use on this UI (`/skills`)

| Skill | When |
|-------|------|
| **baseline-ui** | Spacing, hierarchy, typography, deslop |
| **emil-design-eng** | Press states, ease-out, duration ≤200ms feedback |
| **fixing-accessibility** | Focus, names, contrast, keyboard |
| **fixing-metadata** | titles, OG, noindex on preview |
| **marclou-review** | Hero clarity, one CTA priority |
| **home-designer** agent | Visual home / club sections |
| **product-shell** agent | Nav + CTAs |

Prefer **1–2 skills** per pass (ui-skills-root).

## Implementation map

- Tokens: `apps/web/src/styles/tokens.css`
- Global + club: `apps/web/src/styles/app.css`
- Shell: `apps/web/src/components/SiteHeader.tsx`
