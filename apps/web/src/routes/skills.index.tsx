import { createFileRoute, Link } from "@tanstack/react-router"
import * as React from "react"
import { SiteHeader } from "~/components/SiteHeader"
import {
  CATEGORY_LABELS,
  SKILLS_CATALOG,
  type SkillCatalogEntry,
  type SkillCategory,
} from "~/data/skills-catalog"

export const Route = createFileRoute("/skills/")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — dino.blog" },
      {
        name: "description",
        content: `Catálogo de ${SKILLS_CATALOG.length} skills do pack dino — design, marketing, social e dev.`,
      },
    ],
  }),
})

const FILTERS: Array<SkillCategory | "all"> = [
  "all",
  "developers",
  "designers",
  "marketing",
  "social",
]

function SkillsPage() {
  const [filter, setFilter] = React.useState<SkillCategory | "all">("all")

  const skills: SkillCatalogEntry[] =
    filter === "all"
      ? SKILLS_CATALOG
      : SKILLS_CATALOG.filter((s) => s.category === filter)

  return (
    <div className="skills-page">
      <SiteHeader current="skills" />

      <main id="conteudo" className="skills-main">
        <div className="detail-rail">
          <nav className="detail-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="detail-crumb-sep" aria-hidden="true">
              /
            </span>
            <span className="detail-crumb-current" aria-current="page">
              Skills
            </span>
          </nav>
        </div>

        <header className="skills-hero">
          <h1>Skills</h1>
          <p className="skills-lede">
            Pack dino — {SKILLS_CATALOG.length} skills para agents. Toque para
            ver install e origem.
          </p>

          <div className="skills-filters" role="list" aria-label="Filtrar">
            {FILTERS.map((c) => (
              <button
                key={c}
                type="button"
                role="listitem"
                className="skills-chip"
                data-active={filter === c ? "true" : "false"}
                onClick={() => setFilter(c)}
              >
                {CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
        </header>

        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill.id}>
              <Link
                to="/skills/$id"
                params={{ id: skill.id }}
                className="skills-card"
              >
                <h2 className="skills-card-id">{skill.id}</h2>
                <p className="skills-card-desc">{skill.description}</p>
                <div className="skills-card-foot">
                  {skill.source ? (
                    <span className="skills-source">{skill.source}</span>
                  ) : null}
                  {skill.featured ? (
                    <span className="skills-featured">destaque</span>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
