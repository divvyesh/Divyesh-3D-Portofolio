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
        <span
          className="transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'none', color: 'var(--text-low)' }}
        >
          ▾
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
          ← Back to work
        </Link>

        {/* Tag row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{
              background: `${TAG_COLORS[project.tag]}18`,
              color: TAG_COLORS[project.tag],
              border: `1px solid ${TAG_COLORS[project.tag]}40`,
            }}
          >
            {project.tagLabel}
          </span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>{project.year}</span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-1 rounded"
            style={{
              background: `${HONESTY_COLORS[project.honesty]}18`,
              color: HONESTY_COLORS[project.honesty],
              border: `1px solid ${HONESTY_COLORS[project.honesty]}40`,
            }}
          >
            {project.honesty}
          </span>
        </div>

        {/* Brand */}
        <div className="font-mono text-[13px] mb-3" style={{ color: 'var(--text-low)' }}>
          {project.brand}
        </div>

        {/* H1: outcome */}
        <h1
          className="font-display mb-8 leading-[1.08]"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-hi)', fontWeight: 400 }}
        >
          {project.outcomeTitle}
        </h1>

        {/* 10-second read */}
        <div
          className="p-6 rounded-[14px] mb-10"
          style={{
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--accent)' }}>
            The 10-second read
          </div>
          <div className="space-y-3">
            {[
              ['Decision it changed', project.decisionChanged],
              ['What I did', project.whatIDid],
              ['Result', project.result],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <div className="font-mono text-[12px] uppercase tracking-[0.08em] flex-shrink-0 sm:w-36" style={{ color: 'var(--text-low)' }}>
                  {label}
                </div>
                <div className="font-body text-[14px] leading-[1.6]" style={{ color: 'var(--text-mid)' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {project.metrics.map(m => (
            <div
              key={m}
              className="p-4 rounded-[10px] text-center"
              style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}
            >
              <div className="font-mono text-[13px]" style={{ color: 'var(--text-hi)' }}>{m}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.stack.map(s => (
            <span
              key={s}
              className="font-mono text-[11px] px-3 py-1 rounded-full"
              style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', color: 'var(--text-mid)' }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Accordions */}
        <div className="mb-12">
          <Accordion title="▸ How I got there — problem, data, method">
            <div className="space-y-6 mt-2">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-low)' }}>Problem</div>
                <p>{project.problem}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-low)' }}>Data</div>
                <p>{project.data}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-low)' }}>Method</div>
                <p>{project.method}</p>
              </div>
            </div>
          </Accordion>
          <Accordion title="▸ Impact & validation">
            <p className="mt-2">{project.impact}</p>
          </Accordion>
          {project.nextSteps && (
            <Accordion title="▸ Next steps">
              <p className="mt-2">{project.nextSteps}</p>
            </Accordion>
          )}
        </div>

        {/* External links */}
        {(project.deckUrl || project.githubUrl) && (
          <div className="flex gap-4 mb-12">
            {project.deckUrl && (
              <a href={project.deckUrl} target="_blank" rel="noopener noreferrer"
                className="font-body text-[14px] px-4 py-2 rounded-[8px] border transition-colors"
                style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}>
                View deck ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="font-body text-[14px] px-4 py-2 rounded-[8px] border transition-colors"
                style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}>
                GitHub ↗
              </a>
            )}
          </div>
        )}

        {/* Booking CTA */}
        <div
          className="p-8 rounded-[14px] text-center mb-12"
          style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}
        >
          <p className="font-body text-[15px] mb-4" style={{ color: 'var(--text-mid)' }}>
            Want to discuss this kind of analysis for your business?
          </p>
          <a
            href="/#book"
            className="font-body font-medium text-[15px] px-6 py-3 rounded-[10px] inline-block transition-all duration-150"
            style={{ background: 'var(--accent)', color: '#050507' }}
          >
            Book 15 min →
          </a>
        </div>

        {/* Prev/Next */}
        <div className="flex justify-between pt-8" style={{ borderTop: '1px solid var(--line)' }}>
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>
              ← {prev.brand}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>
              {next.brand} →
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
