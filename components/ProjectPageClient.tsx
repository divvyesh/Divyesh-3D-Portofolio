'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Project } from '@/data/projects'

// ── SVG Icons ─────────────────────────────────────────────────────────
const ProblemIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)
const ContextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const DecisionIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const DataIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)
const SegmentsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const AnalysesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
)
const ImpactIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const NextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const SlidesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)
const ToolsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
)
const KpiIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

// ── Section label with icon ───────────────────────────────────────────
function SectionLabel({
  icon,
  label,
  color = 'var(--glass-low)',
}: {
  icon: React.ReactNode
  label: string
  color?: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
      <span style={{ color, display: 'flex', alignItems: 'center', opacity: 0.85 }}>{icon}</span>
      <span style={{
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color,
        fontWeight: 500,
      }}>
        {label}
      </span>
    </div>
  )
}

// ── Highlight numbers & metric terms ─────────────────────────────────
function BoldText({ text }: { text: string }) {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const highlighted = escaped.replace(
    /(\$[\d,.]+[KMBbn+%×]?|[+\-]?\d+\.?\d*[%×KMBbn+]?|\b(?:AUC|ROAS|CLV|CAC|NPS|LTV|ROI|DiD|PCA|SQL|CBCV|CAGR|CRO|GTM)\b)/gi,
    '<strong style="color:var(--glass-hi);font-weight:700">$1</strong>'
  )
  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
}

// ── Horizontal bar chart ──────────────────────────────────────────────
function BarChart({
  items,
  unit = '',
}: {
  items: { label: string; value: number; color?: string }[]
  unit?: string
}) {
  const max = Math.max(...items.map((i) => Math.abs(i.value)), 1)
  return (
    <div style={{ marginTop: '8px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '12px', color: 'var(--glass-mid)' }}>
              {item.label}
            </span>
            <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '12px', color: item.color || '#34d399', fontWeight: 600 }}>
              {item.value}{unit}
            </span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '5px', overflow: 'hidden' }}>
            <div style={{
              width: `${(Math.abs(item.value) / max) * 100}%`,
              height: '100%',
              background: item.color
                ? `linear-gradient(90deg, ${item.color}88, ${item.color})`
                : 'linear-gradient(90deg, #34d39988, #34d399)',
              borderRadius: '4px',
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Slide viewer (left / right nav) ──────────────────────────────────
function SlideViewer({ pdfUrl }: { pdfUrl: string }) {
  const [page, setPage] = useState(1)
  const btnStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(6,7,13,0.82)',
    color: 'var(--glass-mid)',
    fontSize: '22px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
    lineHeight: 1,
    paddingBottom: '2px',
  }
  return (
    <div>
      <div style={{
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        height: 'clamp(300px, 55vw, 500px)',
        background: 'rgba(6,7,13,0.6)',
      }}>
        <iframe
          key={page}
          src={`${pdfUrl}#page=${page}&toolbar=0&navpanes=0&statusbar=0&view=FitH`}
          title="Project slides"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Previous" style={{ ...btnStyle, left: '12px' }}>
          ‹
        </button>
        <button onClick={() => setPage((p) => p + 1)} aria-label="Next" style={{ ...btnStyle, right: '12px' }}>
          ›
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
        <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'var(--glass-low)' }}>← → navigate slides</span>
        <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'var(--glass-low)' }}>Slide {page}</span>
      </div>
    </div>
  )
}

// ── Tag / honesty colours ─────────────────────────────────────────────
const TAG_COLORS: Record<string, string> = {
  client: '#7c5cff',
  capstone: '#34d399',
  tool: '#f5a35c',
}
const HONESTY_COLORS: Record<string, string> = {
  MEASURED: '#34d399',
  MODELED: '#7c5cff',
  PROJECTED: '#f5a35c',
  'MEASURED+MODELED': '#ef6f8e',
}

// ── Shared block styles ───────────────────────────────────────────────
const glass: React.CSSProperties = {
  background: 'var(--glass-bg)',
  backdropFilter: 'var(--glass-blur)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '24px',
  marginBottom: '14px',
}
const redGlass: React.CSSProperties = {
  background: 'rgba(110,0,0,0.28)',
  backdropFilter: 'blur(22px) saturate(150%)',
  border: '1px solid rgba(220,38,38,0.26)',
  borderLeft: '3px solid rgba(220,38,38,0.62)',
  borderRadius: '14px',
  padding: '24px',
  marginBottom: '14px',
}
const tealGlass: React.CSSProperties = {
  background: 'rgba(0,85,60,0.18)',
  backdropFilter: 'blur(22px) saturate(150%)',
  border: '1px solid rgba(52,211,153,0.13)',
  borderLeft: '3px solid rgba(52,211,153,0.48)',
  borderRadius: '14px',
  padding: '24px',
  marginBottom: '14px',
}
const greenGlass: React.CSSProperties = {
  background: 'rgba(0,60,22,0.26)',
  backdropFilter: 'blur(22px) saturate(150%)',
  border: '1px solid rgba(0,200,80,0.2)',
  borderLeft: '3px solid rgba(0,200,80,0.52)',
  borderRadius: '14px',
  padding: '24px',
  marginBottom: '14px',
}

const innerCard: React.CSSProperties = {
  padding: '14px 16px',
  borderRadius: '10px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.07)',
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
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto', padding: '36px 16px 80px' }}>

        {/* ── Back ── */}
        <Link
          href="/work"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: 'var(--font-mono, monospace)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'var(--glass-low)', textDecoration: 'none',
            marginBottom: '28px', opacity: 0.75,
          }}
        >
          ← Back to work
        </Link>

        {/* ── Header white card ── */}
        <div style={{
          background: 'rgba(255,255,255,0.93)',
          backdropFilter: 'blur(28px)',
          border: '1px solid rgba(15,17,23,0.09)',
          borderRadius: '18px',
          padding: '28px 28px 24px',
          marginBottom: '14px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.07)',
        }}>
          {/* chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{
              fontFamily: 'var(--font-mono, monospace)', fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '4px 12px', borderRadius: '9999px',
              background: `${TAG_COLORS[project.tag]}1a`,
              color: TAG_COLORS[project.tag],
              border: `1px solid ${TAG_COLORS[project.tag]}3c`,
            }}>{project.tagLabel}</span>
            <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: '#8a8fa8' }}>{project.year}</span>
            <span style={{
              fontFamily: 'var(--font-mono, monospace)', fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '3px 8px', borderRadius: '6px',
              background: `${HONESTY_COLORS[project.honesty]}14`,
              color: HONESTY_COLORS[project.honesty],
              border: `1px solid ${HONESTY_COLORS[project.honesty]}30`,
            }}>{project.honesty}</span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '12px', color: '#9ba0b4', marginBottom: '8px' }}>
            {project.brand}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: 'clamp(20px, 3.5vw, 40px)',
            fontWeight: 400, lineHeight: 1.1,
            color: '#0f1117', marginBottom: '22px', marginTop: 0,
          }}>
            {project.outcomeTitle}
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
            {project.metrics.map((m, i) => (
              <div key={i} style={{
                borderRadius: '10px', padding: '11px 14px', textAlign: 'center',
                background: 'rgba(15,17,23,0.05)', border: '1px solid rgba(15,17,23,0.07)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '12px', color: '#1a1f2e' }}>{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Problem Statement [RED] ── */}
        {(project.problemLines || project.problem) && (
          <div style={redGlass}>
            <SectionLabel icon={<ProblemIcon />} label="Problem Statement" color="rgba(220,75,75,0.88)" />
            {project.problemLines ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.problemLines.map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono, monospace)', fontSize: '10px',
                      color: 'rgba(220,75,75,0.5)', flexShrink: 0, marginTop: '3px', minWidth: '20px',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', lineHeight: 1.65, color: 'rgba(240,241,245,0.78)', margin: 0 }}>
                      <BoldText text={line} />
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', lineHeight: 1.65, color: 'rgba(240,241,245,0.78)', margin: 0 }}>
                <BoldText text={project.problem} />
              </p>
            )}
          </div>
        )}

        {/* ── Client/Market Context ── */}
        {project.clientContext && (
          <div style={glass}>
            <SectionLabel icon={<ContextIcon />} label="Client & Market Context" color="var(--glass-mid)" />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.clientContext.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', lineHeight: 1.6 }}>
                  <span style={{ color: '#7c5cff', flexShrink: 0, marginTop: '3px' }}>▸</span>
                  <span style={{ color: 'var(--glass-mid)' }}><BoldText text={item} /></span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Decision Changed [TEAL] ── */}
        <div style={tealGlass}>
          <SectionLabel icon={<DecisionIcon />} label="The Decision This Changed" color="rgba(52,211,153,0.82)" />
          <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', lineHeight: 1.7, color: 'var(--glass-mid)', margin: 0 }}>
            <BoldText text={project.decisionChanged} />
          </p>
        </div>

        {/* ── Customer Segments ── */}
        {project.segments && (
          <div style={glass}>
            <SectionLabel icon={<SegmentsIcon />} label="Customer Segments" color="var(--glass-mid)" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px' }}>
              {project.segments.map((seg, i) => (
                <div key={i} style={innerCard}>
                  <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: 'var(--glass-hi)' }}>
                    {seg.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '13px', lineHeight: 1.5, color: 'var(--glass-mid)' }}>
                    {seg.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Analyses & Frameworks ── */}
        {project.analyses && (
          <div style={glass}>
            <SectionLabel icon={<AnalysesIcon />} label="Analyses & Frameworks" color="var(--glass-mid)" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px' }}>
              {project.analyses.map((a, i) => (
                <div key={i} style={{ ...innerCard, display: 'flex', gap: '12px' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono, monospace)', fontSize: '13px', fontWeight: 700,
                    color: 'rgba(124,92,255,0.38)', lineHeight: 1.2, flexShrink: 0, minWidth: '22px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                      color: '#7c5cff', marginBottom: '4px',
                    }}>
                      {a.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '13px', lineHeight: 1.5, color: 'var(--glass-mid)' }}>
                      <BoldText text={a.finding} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Data & Method ── */}
        <div style={glass}>
          <SectionLabel icon={<DataIcon />} label="Data & Method" color="var(--glass-mid)" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { sub: 'Data Sources', text: project.data },
              { sub: 'Methods Applied', text: project.method },
              { sub: 'What I Did', text: project.whatIDid },
              { sub: 'Result', text: project.result },
            ].map(({ sub, text }) => (
              <div key={sub}>
                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--glass-low)', marginBottom: '7px' }}>
                  {sub}
                </div>
                <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', lineHeight: 1.65, color: 'var(--glass-mid)', margin: 0 }}>
                  <BoldText text={text} />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── KPI Tiles [GOLD] ── */}
        {project.kpis && (
          <div style={{ marginBottom: '14px' }}>
            <SectionLabel icon={<KpiIcon />} label="Key Performance Metrics" color="rgba(245,200,66,0.65)" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
              {project.kpis.map((kpi, i) => (
                <div key={i} style={{
                  padding: '16px 10px', borderRadius: '12px', textAlign: 'center',
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.13) 0%, rgba(6,7,13,0.92) 70%)',
                  border: '1px solid rgba(245,200,66,0.17)',
                  boxShadow: '0 2px 20px rgba(245,200,66,0.04)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display, serif)',
                    fontSize: 'clamp(18px, 2.4vw, 26px)',
                    fontWeight: 600, lineHeight: 1.1, marginBottom: '5px',
                    background: 'linear-gradient(135deg, #f5c842 0%, #fde68a 55%, #e8a820 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {kpi.n}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono, monospace)', fontSize: '9px',
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                    color: 'rgba(245,200,66,0.48)',
                  }}>
                    {kpi.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Impact & Validation [GREEN] ── */}
        {project.impactPoints && (
          <div style={greenGlass}>
            <SectionLabel icon={<ImpactIcon />} label="Impact & Validation" color="rgba(0,200,80,0.82)" />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.impactPoints.map((pt, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', lineHeight: 1.65 }}>
                  <span style={{ color: 'rgba(0,200,80,0.7)', flexShrink: 0, marginTop: '3px', fontSize: '13px' }}>&#10003;</span>
                  <span style={{ color: 'rgba(230,242,235,0.82)' }}><BoldText text={pt} /></span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Next Steps [DARK GLASS] ── */}
        {project.nextStepCards && (
          <div style={glass}>
            <SectionLabel icon={<NextIcon />} label="Next Steps" color="var(--glass-mid)" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px' }}>
              {project.nextStepCards.map((card, i) => (
                <div key={i} style={{ ...innerCard, display: 'flex', gap: '14px' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono, monospace)', fontSize: '18px', fontWeight: 700,
                    lineHeight: 1, flexShrink: 0,
                    background: 'linear-gradient(135deg, #f5c842, #fde68a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {card.num}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: 'var(--glass-hi)' }}>
                      {card.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '13px', lineHeight: 1.5, color: 'var(--glass-mid)' }}>
                      <BoldText text={card.desc} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Slides viewer ── */}
        {project.pdfUrl && (
          <div style={{ marginBottom: '14px' }}>
            <SectionLabel icon={<SlidesIcon />} label="Presentation Slides" color="var(--glass-mid)" />
            <SlideViewer pdfUrl={project.pdfUrl} />
          </div>
        )}

        {/* ── All deck buttons ── */}
        {project.deckButtons && (
          <div style={glass}>
            <div style={{
              fontFamily: 'var(--font-mono, monospace)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'var(--glass-low)', marginBottom: '14px',
            }}>
              All Documents ({project.deckButtons.length})
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px' }}>
              {project.deckButtons.map((btn, i) => (
                <a key={i} href={btn.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block', padding: '8px 10px',
                  borderRadius: '8px', textAlign: 'center',
                  fontFamily: 'var(--font-body, sans-serif)', fontSize: '11px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                  color: 'var(--glass-mid)', textDecoration: 'none',
                }}>
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Stack & Tools ── */}
        <div style={glass}>
          <SectionLabel icon={<ToolsIcon />} label="Stack & Tools" color="var(--glass-mid)" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.stack.map((s) => (
              <span key={s} style={{
                fontFamily: 'var(--font-mono, monospace)', fontSize: '11px',
                padding: '5px 12px', borderRadius: '9999px',
                background: 'rgba(124,92,255,0.1)', border: '1px solid rgba(124,92,255,0.22)',
                color: '#9b7cff',
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── External links ── */}
        {(project.deckUrl || project.githubUrl) && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {project.deckUrl && (
              <a href={project.deckUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px',
                padding: '8px 16px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                color: 'var(--glass-mid)', textDecoration: 'none',
              }}>
                View deck &#8599;
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px',
                padding: '8px 16px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                color: 'var(--glass-mid)', textDecoration: 'none',
              }}>
                GitHub &#8599;
              </a>
            )}
          </div>
        )}

        {/* ── CTA ── */}
        <div style={{
          padding: '40px 28px', borderRadius: '16px', textAlign: 'center',
          background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)',
          border: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '40px',
        }}>
          <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '15px', color: 'var(--glass-mid)', marginBottom: '20px', marginTop: 0 }}>
            Want this kind of analysis for your business?
          </p>
          <a href="/#book" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body, sans-serif)', fontWeight: 600, fontSize: '15px',
            padding: '12px 28px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
            color: '#050507', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(52,211,153,0.26)',
          }}>
            Book 15 min &#8594;
          </a>
        </div>

        {/* ── Prev / Next ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {prev ? (
            <Link href={`/work/${prev.slug}`} style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', color: 'var(--glass-mid)', textDecoration: 'none', opacity: 0.8 }}>
              &#8592; {prev.brand}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/work/${next.slug}`} style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '14px', color: 'var(--glass-mid)', textDecoration: 'none', opacity: 0.8 }}>
              {next.brand} &#8594;
            </Link>
          ) : <div />}
        </div>

      </div>
    </div>
  )
}
