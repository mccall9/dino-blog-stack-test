import { createFileRoute, Link } from "@tanstack/react-router"
import * as React from "react"
import { SiteHeader } from "~/components/SiteHeader"

export const Route = createFileRoute("/cupons")({
  component: CuponsPage,
  head: () => ({
    meta: [
      { title: "Cupons — dino.blog" },
      {
        name: "description",
        content:
          "Cupons e benefícios para quem está no Clube dos Curiosos. Copie o código e use nas parcerias.",
      },
    ],
  }),
})

type Coupon = {
  id: string
  title: string
  partner: string
  code: string
  benefit: string
  expires: string
  status: "ativo" | "em breve"
}

const COUPONS: Coupon[] = [
  {
    id: "1",
    title: "Ferramentas para builders",
    partner: "Parceiro exemplo",
    code: "CURIOSO20",
    benefit: "20% off no primeiro mês",
    expires: "30 dias",
    status: "ativo",
  },
  {
    id: "2",
    title: "Cursos e workshops",
    partner: "Parceiro exemplo",
    code: "DINOCLUBE",
    benefit: "Acesso antecipado + desconto",
    expires: "15 dias",
    status: "ativo",
  },
  {
    id: "3",
    title: "Surpresa do mês",
    partner: "Clube dos Curiosos",
    code: "—",
    benefit: "Cupom exclusivo para membros ativos",
    expires: "em breve",
    status: "em breve",
  },
  {
    id: "4",
    title: "Hosting e deploys",
    partner: "Parceiro exemplo",
    code: "DINOSTACK",
    benefit: "Créditos extras no primeiro deploy",
    expires: "45 dias",
    status: "ativo",
  },
  {
    id: "5",
    title: "Design systems",
    partner: "Parceiro exemplo",
    code: "CURIOSOUI",
    benefit: "Kit de componentes + templates",
    expires: "20 dias",
    status: "ativo",
  },
  {
    id: "6",
    title: "Mentoria em grupo",
    partner: "Clube dos Curiosos",
    code: "—",
    benefit: "Sessão mensal para membros",
    expires: "em breve",
    status: "em breve",
  },
]

function CuponsPage() {
  const [copied, setCopied] = React.useState<string | null>(null)

  async function copyCode(code: string, id: string) {
    if (code === "—") return
    try {
      await navigator.clipboard.writeText(code)
      setCopied(id)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="cupons-page">
      <SiteHeader current="cupons" />

      <main id="conteudo" className="cupons-shell">
        <header className="cupons-hero">
          <span className="detail-eyebrow">Benefícios do clube</span>
          <h1>Cupons</h1>
        </header>

        <ul className="cupons-list" aria-label="Lista de cupons">
          {COUPONS.map((c) => (
            <li key={c.id} className="cupom-card" data-status={c.status}>
              <div className="cupom-card-top">
                <div>
                  <p className="cupom-partner">{c.partner}</p>
                  <h2>{c.title}</h2>
                  <p className="cupom-benefit">{c.benefit}</p>
                </div>
                <span className="cupom-badge" data-status={c.status}>
                  {c.status}
                </span>
              </div>
              <div className="cupom-card-bottom">
                <code className="cupom-code" aria-label={`Código ${c.code}`}>
                  {c.code}
                </code>
                <div className="cupom-actions">
                  <span className="cupom-expires">val. {c.expires}</span>
                  {c.status === "ativo" ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => copyCode(c.code, c.id)}
                    >
                      {copied === c.id ? "copiado ✓" : "copiar código"}
                    </button>
                  ) : (
                    <Link to="/login" className="btn btn-ghost">
                      avisar-me
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="cupons-note">
          Stub de preview — códigos de exemplo. Parcerias reais entram com o
          fluxo de membership.
        </p>
      </main>
    </div>
  )
}
