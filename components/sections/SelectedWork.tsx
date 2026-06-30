import Link from 'next/link'
import { featuredProjects } from '@/data/projects'

export default function SelectedWork() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              Selected work
            </div>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)' }}>
              Real datasets. Actual decisions.
            </h2>
          </div>
          <Link
            href="/work"
            className="font-body text-[14px] hidden md:block"
            style={{ color: 'var(--accent)' }}
          >
            All 13 projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block p-6 rounded-2xl transition-all duration-200"
              style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
              }}
            >
              {/* Category */}
              <div className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-low)' }}>
                {project.category}
              </div>

              {/* Stat */}
              <div className="font-display font-semibold mb-1" style={{ fontSize: '40px', color: 'var(--accent)', lineHeight: 1 }}>
                {project.stat}
              </div>
              <div className="font-mono text-[11px] mb-5" style={{ color: 'var(--text-low)' }}>
                {project.statLabel}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-[18px] mb-2 leading-snug" style={{ color: 'var(--text-hi)' }}>
                {project.title}
              </h3>
              <p className="font-body text-[13px] leading-relaxed mb-5" style={{ color: 'var(--text-mid)' }}>
                {project.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-1 rounded-full" style={{ background: 'var(--bg-2)', color: 'var(--text-low)', border: '1px solid var(--line)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 font-body text-[13px] font-medium" style={{ color: 'var(--accent)' }}>
                Read case study →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link href="/work" className="font-body text-[14px]" style={{ color: 'var(--accent)' }}>
            All 13 projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
