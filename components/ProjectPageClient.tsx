'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Project } from '@/data/projects'

const HONESTY_COLORS: Record<string, string> = {
  'MEASURED': 'var(--accent)',
  'MODELED': 'var(--text-mid)',
  'PROJECTED': 'var(--text-low)',
  'MEASURED+MODELED': 'var(--accent-2)',
}
const TAG_COLORS: Record<string, string> = {
  client: 'var(--accent-2)',
  capstone: 'var(--text-low)',
  tool: 'var(--accent)',
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid var(--line)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex items-center justify-between font-body font-semibold text-[15px] text-left"
        style={{ color: 'var(--text-hi)' }}
        aria-expanded={open}
      >
        {title}
        <span className="transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'none', color: 'var(--text-low)' }}>
          \u25be
        </span>
      </button>
      {open && (
        <div className="pb-6 font-body text-[15px] leading-[1.7]" style={{ color: 'var(--text-mid)' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProjectPageClient({
  project,
  prev,
  next,
}: {
  project: Project
  prev: Project | null
  next: Project | null
}) {
  return (
    <div style={{ paddingTop: '64px' }}>
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          href="/work"
          className="font-mono text-[12px] uppercase tracking-[0.1em] inline-flex items-center gap-2 mb-12 transition-colors"
          style={{ color: 'var(--text-low)' }}
        >
          \u2190 Back to work
        </Link>

        {/* Tag row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{ background: `${TAG_COLORS[project.tag]}18`, color: TAG_COLORS[project.tag], border: `1px solid ${TAG_COLORS[project.tag]}40` }}
          >
            {project.tagLabel}
          </span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>{project.year}</span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-1 rounded"
            style={{ background: `${HONESTY_COLORS[project.honesty]}18`, color: HONESTY_COLORS[project.honesty], border: `1px solid ${HONESTY_COLORS[project.honesty]}40` }}
          >
            {project.honesty}
          </span>
        </div>

        {/* Brand */}
        <div className="font-mono text-[13px] mb-3" style={{ color: 'var(--text-low)' }}>{project.brand}</div>

        {/* H1 */}
        <h1
          className="font-display mb-8 leading-[1.08]"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-hi)', fontWeight: 400 }}
        >
          {project.outcomeTitle}
        </h1>

        {/* Problem Statement — red glass */}
        {(project.problemLines || project.problem) && (
          <div
            className="p-6 rounded-[14px] mb-8"
            style={{
              background: 'rgba(140,0,0,0.18)',
              border: '1px solid rgba(220,38,38,0.35)',
              borderLeft: '3px solid rgba(220,38,38,0.75)',
            }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'rgba(220,38,38,0.9)' }}>
              Problem Statement
            </div>
            {project.problemLines ? (
              <div className="space-y-3">
                {project.problemLines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-[11px] mt-0.5 flex-shrink-0" style={{ color: 'rgba(220,38,38,0.7)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-body text-[14px] leading-[1.6]" style={{ color: 'rgba(232,232,240,0.72)' }}>{line}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-body text-[14px] leading-[1.6]" style={{ color: 'rgba(232,232,240,0.72)' }}>{project.problem}</p>
            )}
          </div>
        )}

        {/* Decision This Changed — teal glass */}
        <div
          className="p-6 rounded-[14px] mb-8"
          style={{
            background: 'rgba(0,140,110,0.12)',
            border: '1px solid var(--line)',
            borderLeft: '3px solid rgba(0,212,170,0.6)',
          }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--accent)' }}>
            Decision This Changed
          </div>
          <p className="font-body text-[14px] leading-[1.6]" style={{ color: 'var(--text-mid)' }}>{project.decisionChanged}</p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {project.metrics.map(m => (
            <div key={m} className="p-4 rounded-[10px] text-center" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
              <div className="font-mono text-[13px]" style={{ color: 'var(--text-hi)' }}>{m}</div>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map(s => (
            <span key={s} className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', color: 'var(--text-mid)' }}>
              {s}
            </span>
          ))}
        </div>

        {/* Client Context */}
        {project.clientContext && (
          <div className="p-6 rounded-[14px] mb-8" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>Client & Market Context</div>
            <ul className="space-y-2">
              {project.clientContext.map((item, i) => (
                <li key={i} className="flex gap-2 font-body text-[14px]" style={{ color: 'var(--text-mid)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>\u2022</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Customer Segments grid */}
        {project.segments && (
          <div className="mb-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>Customer Segments</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.segments.map((seg, i) => (
                <div key={i} className="p-4 rounded-[10px]" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
                  <div className="font-body font-semibold text-[14px] mb-1" style={{ color: 'var(--text-hi)' }}>{seg.name}</div>
                  <div className="font-body text-[13px] leading-[1.5]" style={{ color: 'var(--text-mid)' }}>{seg.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analyses grid */}
        {project.analyses && (
          <div className="mb-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>Analyses & Frameworks</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.analyses.map((a, i) => (
                <div key={i} className="p-4 rounded-[10px]" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
                  <div className="font-mono text-[12px] font-semibold mb-2" style={{ color: 'var(--accent-2)' }}>{a.title}</div>
                  <div className="font-body text-[13px] leading-[1.5]" style={{ color: 'var(--text-mid)' }}>{a.finding}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed accordions */}
        <div className="mb-10">
          <Accordion title="\u25b8 How I got there \u2014 data & method">
            <div className="space-y-6 mt-2">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-low)' }}>Data</div>
                <p>{project.data}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-low)' }}>Method</div>
                <p>{project.method}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-low)' }}>What I did</div>
                <p>{project.whatIDid}</p>
              </div>
            </div>
          </Accordion>
          <Accordion title="\u25b8 Result">
            <p className="mt-2">{project.result}</p>
          </Accordion>
        </div>

        {/* KPI row — gold buttons */}
        {project.kpis && (
          <div className="mb-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>Key Metrics</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.kpis.map((kpi, i) => (
                <div
                  key={i}
                  className="p-4 rounded-[10px] text-center"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.10) 0%, rgba(20,22,29,0.95) 70%)',
                    border: '1px solid rgba(245,200,66,0.22)',
                  }}
                >
                  <div
                    className="font-display text-[22px] font-semibold mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #f5c842 0%, #fde68a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {kpi.n}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: 'var(--text-low)' }}>{kpi.l}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact block — green glass */}
        {project.impactPoints && (
          <div
            className="p-6 rounded-[14px] mb-8"
            style={{
              background: 'rgba(0,85,32,0.18)',
              border: '1px solid rgba(0,210,85,0.25)',
              borderLeft: '3px solid rgba(0,210,85,0.6)',
            }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'rgba(0,210,85,0.9)' }}>
              Impact & Validation
            </div>
            <ul className="space-y-3">
              {project.impactPoints.map((pt, i) => (
                <li key={i} className="flex gap-3 font-body text-[14px] leading-[1.6]" style={{ color: 'rgba(232,232,240,0.8)' }}>
                  <span style={{ color: 'rgba(0,210,85,0.8)', flexShrink: 0, marginTop: '2px' }}>\u2713</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Steps grid */}
        {project.nextStepCards && (
          <div className="mb-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.nextStepCards.map((card, i) => (
                <div key={i} className="p-4 rounded-[10px] flex gap-4" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
                  <div className="font-mono text-[18px] font-bold flex-shrink-0" style={{ color: 'var(--accent)', lineHeight: '1' }}>{card.num}</div>
                  <div>
                    <div className="font-body font-semibold text-[14px] mb-1" style={{ color: 'var(--text-hi)' }}>{card.title}</div>
                    <div className="font-body text-[13px] leading-[1.5]" style={{ color: 'var(--text-mid)' }}>{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PDF / Slides iframe */}
        {project.pdfUrl && (
          <div className="mb-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--text-low)' }}>
              Deck / Slides
            </div>
            <div
              className="rounded-[14px] overflow-hidden"
              style={{ border: '1px solid var(--line)', background: 'var(--bg-1)', height: '520px' }}
            >
              <iframe
                src={`${project.pdfUrl}#toolbar=0&navpanes=0&statusbar=0&scrollbar=1&view=FitH`}
                title="Project presentation"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
            <div className="font-mono text-[10px] mt-2" style={{ color: 'var(--text-low)' }}>
              \u2195 scroll within frame
            </div>
          </div>
        )}

        {/* Newdia 20 doc buttons */}
        {project.deckButtons && (
          <div className="mb-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
              All Documents ({project.deckButtons.length})
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.deckButtons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[12px] px-3 py-2 rounded-[8px] text-center transition-all duration-150 hover:scale-[1.02]"
                  style={{
                    background: 'var(--bg-1)',
                    border: '1px solid var(--line)',
                    color: 'var(--text-mid)',
                    display: 'block',
                  }}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* External links */}
        {(project.deckUrl || project.githubUrl) && (
          <div className="flex gap-4 mb-10">
            {project.deckUrl && (
              <a href={project.deckUrl} target="_blank" rel="noopener noreferrer"
                className="font-body text-[14px] px-4 py-2 rounded-[8px] border transition-colors"
                style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}>
                View deck \u2197
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="font-body text-[14px] px-4 py-2 rounded-[8px] border transition-colors"
                style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}>
                GitHub \u2197
              </a>
            )}
          </div>
        )}

        {/* Booking CTA */}
        <div className="p-8 rounded-[14px] text-center mb-12" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
          <p className="font-body text-[15px] mb-4" style={{ color: 'var(--text-mid)' }}>
            Want to discuss this kind of analysis for your business?
          </p>
          <a
            href="/#book"
            className="font-body font-medium text-[15px] px-6 py-3 rounded-[10px] inline-block transition-all duration-150"
            style={{ background: 'var(--accent)', color: '#050507' }}
          >
            Book 15 min \u2192
          </a>
        </div>

        {/* Prev / Next */}
        <div className="flex justify-between pt-8" style={{ borderTop: '1px solid var(--line)' }}>
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>
              \u2190 {prev.brand}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>
              {next.brand} \u2192
            </Link>
          ) : <div />}
        </div>

      </div>
    </div>
  )
}
