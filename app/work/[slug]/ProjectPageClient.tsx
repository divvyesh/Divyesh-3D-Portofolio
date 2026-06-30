'use client'
import Link from 'next/link'
import { Project } from '@/data/projects'

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-body text-[14px] mb-10 group"
          style={{ color: 'var(--text-low)' }}
        >
          <span>←</span>
          <span>All work</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {project.category} · {project.year}
          </div>

          <div className="font-display font-semibold mb-2" style={{ fontSize: '56px', color: 'var(--accent)', lineHeight: 1 }}>
            {project.stat}
          </div>
          <div className="font-mono text-[13px] mb-6" style={{ color: 'var(--text-low)' }}>
            {project.statLabel}
          </div>

          <h1 className="font-display font-semibold leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--text-hi)' }}>
            {project.title}
          </h1>
          <p className="font-display text-[18px] leading-relaxed" style={{ color: 'var(--text-mid)', fontStyle: 'italic' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tools.map((tool) => (
            <span key={tool} className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ background: 'var(--bg-1)', color: 'var(--text-low)', border: '1px solid var(--line)' }}>
              {tool}
            </span>
          ))}
        </div>

        {/* Case study sections */}
        <div className="space-y-10">
          {[
            { label: 'Summary', content: project.summary },
            { label: 'The Problem', content: project.problem },
            { label: 'The Approach', content: project.approach },
            { label: 'The Outcome', content: project.outcome },
          ].map(({ label, content }) => (
            <div key={label} className="p-8 rounded-2xl" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
              <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
                {label}
              </div>
              <p className="font-body leading-relaxed text-[16px]" style={{ color: 'var(--text-mid)' }}>
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: 'var(--bg-1)', border: '1px solid rgba(110,231,183,0.2)' }}>
          <h3 className="font-display font-semibold text-[22px] mb-3" style={{ color: 'var(--text-hi)' }}>
            Is this signal hiding in your data?
          </h3>
          <p className="font-body text-[14px] mb-6" style={{ color: 'var(--text-mid)' }}>
            15 minutes. I&apos;ll tell you if there&apos;s a thread worth pulling.
          </p>
          <a
            href="/#book"
            className="font-body font-medium px-6 py-3 rounded-[12px] inline-block"
            style={{ background: 'var(--accent)', color: '#050507' }}
          >
            Book free session →
          </a>
        </div>
      </div>
    </div>
  )
}
