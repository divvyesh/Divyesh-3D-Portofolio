import Link from 'next/link'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Work — Divyesh Annavarapu',
  description: '13 analyses across real datasets. Consumer cohorts, pricing, attribution, causal inference.',
}

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            All work
          </div>
          <h1 className="font-display font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-hi)' }}>
            13 analyses.<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Real datasets. Real decisions.</span>
          </h1>
          <p className="font-body leading-relaxed max-w-2xl" style={{ color: 'var(--text-mid)', fontSize: '16px' }}>
            Every project here started with a signal that aggregate views were averaging away.
            Cohort churn masked by blended retention. Channel ROAS distorted by last-click. Price cliffs invisible in fare averages.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block p-6 rounded-2xl transition-all duration-200"
              style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-low)' }}>
                    {project.category}
                  </div>
                  <div className="font-mono text-[10px]" style={{ color: 'var(--text-low)' }}>
                    {project.year}
                  </div>
                </div>
                {project.featured && (
                  <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full" style={{ background: 'rgba(110,231,183,0.1)', color: 'var(--accent)', border: '1px solid rgba(110,231,183,0.2)' }}>
                    Featured
                  </span>
                )}
              </div>

              <div className="font-display font-semibold mb-1" style={{ fontSize: '36px', color: 'var(--accent)', lineHeight: 1 }}>
                {project.stat}
              </div>
              <div className="font-mono text-[11px] mb-4" style={{ color: 'var(--text-low)' }}>
                {project.statLabel}
              </div>

              <h2 className="font-display font-semibold text-[18px] mb-2 leading-snug" style={{ color: 'var(--text-hi)' }}>
                {project.title}
              </h2>
              <p className="font-body text-[13px] leading-relaxed mb-5" style={{ color: 'var(--text-mid)' }}>
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-1 rounded-full" style={{ background: 'var(--bg-2)', color: 'var(--text-low)', border: '1px solid var(--line)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
