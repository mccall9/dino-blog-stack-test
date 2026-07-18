import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router"
import * as React from "react"
import { SiteHeader } from "~/components/SiteHeader"
import {
  getSkillById,
  resolveSourceOrigin,
  SKILLS_CATALOG,
} from "~/data/skills-catalog"

export const Route = createFileRoute("/skills/$id")({
  loader: ({ params }) => {
    const skill = getSkillById(params.id)
    if (!skill) throw notFound()
    return { skill }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.skill.id} — Skills · dino.blog`
          : "Skill — dino.blog",
      },
      {
        name: "description",
        content: loaderData?.skill.description ?? "Skill do pack dino",
      },
    ],
  }),
  component: SkillDetailPage,
})

function SkillDetailPage() {
  const { skill } = Route.useLoaderData()
  const origin = resolveSourceOrigin(skill.source)
  const installCmd =
    skill.install ??
    (skill.id
      ? `npx dino-skills get ${skill.id}`
      : "npx dino-skills start")
  const externalUrl = skill.url ?? origin?.url
  const [copied, setCopied] = React.useState(false)

  async function copyInstall() {
    try {
      await navigator.clipboard.writeText(installCmd)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

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
            <Link to="/skills">Skills</Link>
            <span className="detail-crumb-sep" aria-hidden="true">
              /
            </span>
            <span className="detail-crumb-current" aria-current="page">
              {skill.id}
            </span>
          </nav>
        </div>

        <article className="skill-glass" aria-labelledby="skill-title">
          <header className="skill-glass-head">
            <div className="skill-glass-title-row">
              <h1 id="skill-title">{skill.id}</h1>
              {externalUrl ? (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-glass-ext"
                  aria-label="Abrir fonte"
                >
                  ↗
                </a>
              ) : null}
            </div>

            <div className="skill-glass-meta">
              {skill.source ? (
                <span className="skills-source skills-source-dot">
                  {skill.source}
                </span>
              ) : null}
              {origin ? (
                <a
                  href={origin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-glass-origin"
                >
                  origem ↗
                </a>
              ) : null}
            </div>

            <p className="skill-glass-desc">{skill.description}</p>
          </header>

          <section className="skill-glass-install" aria-labelledby="install-h">
            <h2 id="install-h">Install</h2>
            <button
              type="button"
              className="skill-glass-cmd"
              onClick={copyInstall}
              aria-label="Copiar comando de install"
            >
              <code>{installCmd}</code>
              <span className="skill-glass-copy" aria-hidden>
                {copied ? "✓" : "copiar"}
              </span>
            </button>
          </section>

          {externalUrl ? (
            <div className="skill-glass-actions">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Abrir fonte ↗
              </a>
              <Link to="/skills" className="btn btn-ghost">
                ← todas as skills
              </Link>
            </div>
          ) : (
            <div className="skill-glass-actions">
              <Link to="/skills" className="btn btn-ghost">
                ← todas as skills
              </Link>
            </div>
          )}
        </article>

        <p className="skills-note">
          {SKILLS_CATALOG.length} skills no inventário · pack{" "}
          <code>npx dino-skills start</code>
        </p>
      </main>
    </div>
  )
}
