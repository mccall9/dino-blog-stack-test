# Skills Inventory — “Run the company” pack

Catálogo scraped em **2026-07-17** a partir dos links oficiais/GitHub.  
Locais de instalação no workspace:

| Local | Uso |
|-------|-----|
| `Desktop/build in public/.agents/skills/` | Inventário principal (Claude Code / agents) |
| `~/.grok/skills/` | Skills nativas Grok |
| `~/.claude/skills/` / plugins | Claude Code marketplace / global |

**Legenda status**

| Status | Significado |
|--------|-------------|
| `local` | Já presente em `.agents/skills` |
| `installable` | Repo público — `npx skills add` / plugin marketplace |
| `plugin-only` | Claude.com plugins (Cowork/marketplace) — não é pasta SKILL.md open-source completa |
| `mcp/runtime` | Precisa serviço/MCP/daemon, não só markdown |

---

## Developers

### Superpowers
- **Source:** https://github.com/obra/superpowers  
- **Plugin:** https://claude.com/plugins/superpowers  
- **O que é:** Metodologia agentic (brainstorm → plan → TDD → subagents → review). Skills: `brainstorming`, `writing-plans`, `test-driven-development`, `systematic-debugging`, `subagent-driven-development`, `using-git-worktrees`, etc.  
- **Install:**  
  - Claude Code: `/plugin install superpowers@claude-plugins-official`  
  - Cursor: `/add-plugin superpowers`  
- **Status:** `installable` / plugin · **Local:** miss  

### Context7
- **Source:** https://github.com/upstash/context7  
- **O que é:** Docs de libs/API **atualizados** no contexto do LLM (anti-hallucination). CLI `ctx7` + MCP `https://mcp.context7.com/mcp`.  
- **Install:** `npx ctx7 setup` (ou MCP + `CONTEXT7_API_KEY`)  
- **Status:** `mcp/runtime` · **Local:** miss  

### Skill Creator
- **Source:** https://github.com/anthropics/skills → `skills/skill-creator`  
- **O que é:** Criar/melhorar Agent Skills (`SKILL.md`, evals, description).  
- **Status:** `local` (já em `.agents/skills/skill-creator`)  

### MCP Builder
- **Source:** https://github.com/anthropics/skills → `skills/mcp-builder`  
- **O que é:** Scaffold de MCP servers (Python FastMCP / TS SDK).  
- **Status:** `local` (`mcp-builder`)  

### Webapp Testing
- **Source:** https://github.com/anthropics/skills → `skills/webapp-testing`  
- **O que é:** Playwright — smoke UI, screenshots, logs.  
- **Status:** `local` (`webapp-testing`)  

### Claude-Mem
- **Source:** https://github.com/thedotmack/claude-mem  
- **O que é:** Memória persistente entre sessões (hooks + worker + SQLite/Chroma + search).  
- **Install:** `npx claude-mem install` (não usar só `npm i -g`)  
- **Status:** `mcp/runtime` · **Local:** miss  

### Anthropics skills (repo completo)
- **Source:** https://github.com/anthropics/skills/tree/main/skills  
- **Pack no repo:** algorithmic-art, brand-guidelines, canvas-design, claude-api, doc-coauthoring, docx, frontend-design, internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing, xlsx  
- **Marketplace:** `/plugin marketplace add anthropics/skills`  

---

## Designers

### UI UX Pro Max
- **Source:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill  
- **O que é:** Design system generator (84 styles, 192 palettes, 74 fonts, 161 rules, multi-stack). CLI `uipro`.  
- **Install:** `npm i -g ui-ux-pro-max-cli` → `uipro init --ai claude`  
- **Status:** `local` (`ui-ux-pro-max`)  

### Taste Skill
- **Source:** https://github.com/Leonxlnx/taste-skill  
- **O que é:** Anti-slop frontend (layout, type, motion). Skills: `design-taste-frontend`, redesign, minimalist, brutalist, imagegen, brandkit…  
- **Install:** `npx skills add https://github.com/Leonxlnx/taste-skill`  
- **Status:** `installable` · install em curso / verificar pasta  

### Frontend Design
- **Source:** https://github.com/anthropics/skills → `skills/frontend-design`  
- **Status:** `local` (`frontend-design`)  

### Transitions.dev
- **Source:** https://github.com/Jakubantalik/transitions.dev  
- **O que é:** Snippets CSS de transições (card resize, modal, badge, shake…) + skill agent + Refine tool.  
- **Install:** `npx skills add Jakubantalik/transitions.dev`  
- **Status:** `local` (`transitions-dev`)  

### Web Artifacts
- **Source:** https://github.com/anthropics/skills → `skills/web-artifacts-builder`  
- **Status:** `local` (`web-artifacts-builder`)  

### Brand Guidelines
- **Source:** https://github.com/anthropics/skills → `skills/brand-guidelines`  
- **Status:** `local` (`brand-guidelines`)  

---

## Marketing

### Marketing Skills (Corey Haines)
- **Source:** https://github.com/coreyhaines31/marketingskills  
- **Claim:** ~45 skills (CRO, copy, SEO, ads, email, launch, pricing, revops…)  
- **Fundação:** `product-marketing` (lido por quase todas)  
- **Install:** `npx skills add coreyhaines31/marketingskills`  
- **Exemplos:** cro, copywriting, seo-audit, ai-seo, emails, ads, launch, lead-magnets, pricing, analytics  
- **Status:** `installable`  

---

## Social Media

### Social Media Skills (Charlie Hills)
- **Source:** https://github.com/charlie947/social-media-skills  
- **Claim:** 17 skills (voice → newsletter → LinkedIn/Reels/YouTube)  
- **Fundação:** `voice-builder` → `about-me.md` + `voice.md`  
- **Skills:** voice-builder, post-writer, reels-scripting, youtube-thumbnail, post-scorer, content-matrix, niche-research, gemini-carousel…  
- **Install:**  
  - `/plugin marketplace add charlie947/social-media-skills`  
  - ou `cp skills/* ~/.claude/skills/`  
- **Deps opcionais:** `APIFY_API_TOKEN`, `GOOGLE_AI_API_KEY`  
- **Status:** `installable`  

---

## Finance

### Finance plugin (Anthropic)
- **Source:** https://claude.com/plugins/finance  
- **Claim:** ~8 workflows — journal entries, reconciliation, P&L, variance, SOX  
- **Commands:** `/journal-entry`, `/reconciliation`, `/income-statement`, `/variance-analysis`, `/sox-testing`  
- **Status:** `plugin-only` (Claude Cowork / knowledge-work-plugins)  
- **Nota:** saídas exigem revisão de profissional de finanças  

---

## Small Business

### Small Business plugin (Anthropic)
- **Source:** https://claude.com/plugins/small-business  
- **Claim:** ~31 skills / ~15 commands — payroll, cash forecast, month-end, campaigns, CRM  
- **Commands:** `/plan-payroll`, `/close-month`, `/run-campaign`, `/monday-brief`, `/smb-onboard`  
- **Connectors:** QuickBooks, PayPal, HubSpot, Canva, Stripe…  
- **Status:** `plugin-only`  

---

## Legal

### Legal plugin (Anthropic)
- **Source:** https://claude.com/plugins/legal  
- **Claim:** ~9 skills — contract review, NDA triage, compliance, briefs  
- **Commands:** `/review-contract`, `/triage-nda`, `/vendor-check`, `/brief`, `/respond`  
- **Status:** `plugin-only`  
- **Nota:** revisão final por advogado licenciado  

---

## Mapa de prioridade (dino.blog / stack-test)

| Prioridade | Pack | Por quê |
|------------|------|---------|
| P0 | Superpowers | SDLC agentic |
| P0 | Context7 | Docs Supabase/TanStack/Elysia frescos |
| P0 | UI UX Pro Max + Taste + Frontend Design | UI do clube/cupons/login |
| P0 | Transitions.dev | Micro-interactions login/cards |
| P1 | Marketing skills | Landing, CRO, SEO dino.blog |
| P1 | Social media skills | Conteúdo X / LinkedIn |
| P1 | Claude-Mem | Continuidade multi-sessão |
| P2 | Finance / SMB / Legal | Ops empresa (plugin Claude) |
| P2 | Skill Creator / MCP Builder | Expandir inventário |

---

## Comandos de instalação (copiar/colar)

```bash
# --- Design (open source) ---
npx skills add Leonxlnx/taste-skill
npx skills add Jakubantalik/transitions.dev
npx skills add nextlevelbuilder/ui-ux-pro-max-skill
# ou: npm i -g ui-ux-pro-max-cli && uipro init --ai claude

# --- Marketing / Social ---
npx skills add coreyhaines31/marketingskills
# Social: marketplace Claude ou clone
git clone https://github.com/charlie947/social-media-skills.git
# copiar skills/ para .agents/skills ou ~/.claude/skills

# --- Anthropic example skills ---
# Claude Code:
# /plugin marketplace add anthropics/skills
# /plugin install example-skills@anthropic-agent-skills

# --- Superpowers ---
# /plugin install superpowers@claude-plugins-official

# --- Context7 ---
npx ctx7 setup

# --- Claude-Mem ---
npx claude-mem install

# --- Finance / SMB / Legal (Claude app / Cowork) ---
# https://claude.com/plugins/finance
# https://claude.com/plugins/small-business
# https://claude.com/plugins/legal
```

---

## Overlaps com inventário atual (build in public)

Já cobertos localmente (não reinstalar cego):  
`frontend-design`, `brand-guidelines`, `mcp-builder`, `skill-creator`, `webapp-testing`, `web-artifacts-builder`, `ui-ux-pro-max`, `transitions-dev`, `marclou-review`, `revenue-centric-design`, `landing-page`, `seo`, etc.

---

## Instalado neste machine (2026-07-17)

Via `npx skills add … -y -g` → **`~/.agents/skills/`** (~85 pastas novas):

| Pack | Exemplos instalados |
|------|---------------------|
| **Taste** | `design-taste-frontend`, `design-taste-frontend-v1`, `gpt-taste`, `stitch-design-taste`, … |
| **Marketing** | `product-marketing`, `cro`, `copywriting`, `seo-audit`, `ads`, `lead-magnets`, `marketing-plan`, … |
| **Social** | `voice-builder`, `post-writer`, `reels-scripting`, `post-scorer`, `newsletter-voice`, … |
| **Transitions** | `transitions-dev`, `transitions-polish` |

Índice Grok/Claude no monorepo:  
`.agents/skills/company-skills-catalog/SKILL.md`

**Ainda manual (plugins / runtime):** Superpowers, Context7 (`npx ctx7 setup`), Claude-Mem (`npx claude-mem install`), Finance / SMB / Legal no Claude.com.

## Changelog

| Data | Ação |
|------|------|
| 2026-07-17 | Scraping + inventário; install Taste + Marketing + Social + Transitions em `~/.agents/skills` |
| 2026-07-17 | Skill índice `company-skills-catalog` |
