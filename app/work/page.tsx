'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projects, ProjectTag } from '@/data/projects'

const FILTERS: { label: string; value: ProjectTag | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Client work', value: 'client' },
  { label: 'Capstone analyses', value: 'capstone' },
  { label: 'Tools I built', value: 'tool' },
]

const TAG_COLORS: Record<ProjectTag, string> = {
  client: 'var(--accent-2)',
  capstone: 'var(--text-low)',
  tool: 'var(--accent)',
}

const HONESTY_COLORS: Record<string, string> = {
  'MEASURED': 'var(--accent)',
  'MODELED': 'var(--text-mid)',
  'PROJECTED': 'var(--text-low)',
  'MEASURED+MODELED': 'var(--accent-2)',
}

export default function WorkPage() {
  const [active, setActive] = useState<ProjectTag | 'all'>('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.tag === active)

  return (
    <div style={{ paddingTop: '64px' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
            All Work
          </div>
          <h1
            className="font-display mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            Every project behind the work.
          </h1>
          <p className="font-body text-[16px] max-w-[52ch]" style={{ color: 'var(--text-mid)' }}>
            Problem, data, method, and the decision it changed. Honest labels on every project — client work, capstone analysis, or tool I built.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="font-mono text-[12px] uppercase tracking-[0.1em] px-4 py-2 rounded-full border transition-all duration-150"
              style={{
                background: active === f.value ? 'var(--accent)' : 'transparent',
                color: active === f.value ? '#050507' : 'var(--text-mid)',
                borderColor: active === f.value ? 'var(--accent)' : 'var(--line)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {filtered.map(project => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="block p-6 rounded-[14px] transition-all duration-200 group"
              style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,231,183,0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'
                ;(e.currentTarget as HTMLElement).style.transform = ''
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-full"
                  style={{
                    background: `${TAG_COLORS[project.tag]}18`,
                    color: TAG_COLORS[project.tag],
                    border: `1px solid ${TAG_COLORS[project.tag]}40`,
                  }}
                >
                  {project.tagLabel}
                </div>
                <span className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>{project.year}</span>
              </div>

              <div className="font-mono text-[11px] mb-2" style={{ color: 'var(--text-low)' }}>
                {project.brand}
              </div>
              <h2 className="font-body font-semibold text-[15px] leading-snug mb-3" style={{ color: 'var(--text-hi)' }}>
                {project.outcomeTitle}
              </h2>
              <p className="font-body text-[13px] leading-[1.6] mb-4" style={{ color: 'var(--text-mid)' }}>
                {project.oneLineDecision}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map(m => (
                  <span
                    key={m}
                    className="font-mono text-[10px] px-2 py-1 rounded"
                    style={{ background: 'var(--bg-0)', border: '1px solid var(--line)', color: 'var(--text-low)' }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-1 rounded"
                  style={{
                    background: `${HONESTY_COLORS[project.honesty]}18`,
                    color: HONESTY_COLORS[project.honesty],
                    border: `1px solid ${HONESTY_COLORS[project.honesty]}40`,
                  }}
                >
                  {project.honesty}
                </span>
                <span className="font-body text-[13px]" style={{ color: 'var(--accent)' }}>
                  View breakdown →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
