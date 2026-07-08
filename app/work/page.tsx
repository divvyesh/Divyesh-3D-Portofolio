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

function Icon({ path, viewBox = '0 0 24 24' }: { path: React.ReactNode; viewBox?: string }) {
  return (
    <svg width="16" height="16" viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  newdia: <Icon path={<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>} />,
  starbucks: <Icon path={<><path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></>} />,
  'british-airways': <Icon path={<><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>} />,
  airbnb: <Icon path={<><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>} />,
  'california-ev': <Icon path={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />} />,
  salesforce: <Icon path={<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>} />,
  'google-trends': <Icon path={<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>} />,
  'mbta-sql': <Icon path={<><rect x="5" y="3" width="14" height="13" rx="3" /><path d="M5 10h14" /><path d="M9 16l-2.5 4" /><path d="M15 16l2.5 4" /></>} />,
  'mbta-consumer': <Icon path={<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>} />,
  banco: <Icon path={<><path d="M3 21h18" /><path d="M5 21V10" /><path d="M19 21V10" /><path d="M9 21V10" /><path d="M15 21V10" /><path d="M2 10l10-6 10 6" /></>} />,
  'clark-school': <Icon path={<><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12.5V17c0 1.1 2.7 2 6 2s6-.9 6-2v-4.5" /></>} />,
  'rat-lab': <Icon path={<><path d="M9 2v6l-5.5 9.5A2 2 0 005.2 21h13.6a2 2 0 001.7-3.5L15 8V2" /><path d="M9 2h6" /><path d="M8.5 13h7" /></>} />,
  'count-on-me': <Icon path={<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />} />,
  sumedha: <Icon path={<><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></>} />,
  'avatar-ai': <Icon path={<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>} />,
  'emo-ai': <Icon path={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />} />,
  'fractals-of-mind': <Icon path={<><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" /><path d="M19 15l.9 2.6L22 18.5l-2.1.9L19 22l-.9-2.6L16 18.5l2.1-.9z" /></>} />,
  promptr: <Icon path={<><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></>} />,
  wazzap: <Icon path={<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />} />,
  attendance: <Icon path={<><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" /></>} />,
  'sr-soft': <Icon path={<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></>} />,
  'blue-horse': <Icon path={<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>} />,
}

const GITHUB_CERTS_URL = 'https://github.com/divvyesh/BU-MSBA-2026/tree/main/Certifications'
const LINKEDIN_CERTS_URL = 'https://www.linkedin.com/in/divyesh-annavarapu/details/certifications/'

const CERT_GROUPS: { issuer: string; proofs?: { label: string; url: string }[]; items: string[] }[] = [
  {
    issuer: 'DataCamp',
    proofs: [{ label: 'View certificates', url: '/pdfs/DataCamp_Certifications.pdf' }],
    items: [
      'Introduction to SQL',
      'Intermediate SQL',
      'Joining Data in SQL',
      'Data Manipulation in SQL',
      'Analyzing Business Data in SQL',
      'Introduction to Python',
      'Intermediate Python',
      'Introduction to Functions in Python',
      'Introduction to Data Science in Python',
      'Introduction to Statistics in Python',
      'Statistical Simulation in Python',
      'Supervised Learning with scikit-learn',
      'Linear Classifiers in Python',
      'Machine Learning with Tree-Based Models in Python',
      'Hyperparameter Tuning in Python',
      'Introduction to Data Visualization with Matplotlib',
      'Introduction to Data Visualization with Seaborn',
      'Interactive Data Visualization with Bokeh',
      'Introduction to NumPy',
      'Foundations of Git',
      'Introduction to GitHub Concepts',
    ],
  },
  {
    issuer: 'Google',
    proofs: [
      { label: 'GA4 certificate', url: '/pdfs/Google_Analytics_Certification.pdf' },
      { label: 'Cloud Skills Boost activity log', url: '/pdfs/Google_Cloud_Skills_Boost.pdf' },
    ],
    items: [
      'Google Analytics 4 Certification',
      'Advanced Data Analytics',
      'Analytics Individual Certification',
      'AI for Data Analysis',
      'AI for Content Creation and for Writing and Communication',
      'AI for Research and Insights',
      'AI for Brainstorming and Planning',
    ],
  },
  {
    issuer: 'Anthropic',
    items: ['Claude 101', 'AI Fluency Framework & Foundations'],
  },
  {
    issuer: "Moody's Analytics",
    items: ['Applied Excel for Business Analytics'],
  },
  {
    issuer: 'CalArts',
    items: ['Fundamentals of Graphic Design'],
  },
  {
    issuer: 'CFI',
    items: ['Finance Exchange Essentials'],
  },
]

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
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))' }}
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
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>{project.year}</span>
                  {PROJECT_ICONS[project.slug] && (
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: '30px',
                        height: '30px',
                        background: `${TAG_COLORS[project.tag]}14`,
                        border: `1px solid ${TAG_COLORS[project.tag]}35`,
                        color: TAG_COLORS[project.tag],
                      }}
                    >
                      {PROJECT_ICONS[project.slug]}
                    </div>
                  )}
                </div>
              </div>

              <div className="font-mono text-[11px] mb-2" style={{ color: 'var(--text-mid)' }}>
                {project.brand}
              </div>
              <h2 className="font-body font-semibold text-[15px] leading-snug mb-3" style={{ color: 'var(--text-hi)' }}>
                {project.outcomeTitle}
              </h2>
              <p className="font-body text-[13px] leading-[1.6] mb-4" style={{ color: 'var(--text-hi)' }}>
                {project.oneLineDecision}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map(m => (
                  <span
                    key={m}
                    className="font-mono text-[10px] px-2 py-1 rounded"
                    style={{ background: 'var(--bg-0)', border: '1px solid var(--line)', color: 'var(--text-mid)' }}
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

        {/* Certifications — full breakdown, same pattern as a project breakdown */}
        <div className="mt-20 pt-14" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-full"
              style={{ background: 'rgba(110,231,183,0.1)', color: 'var(--accent)', border: '1px solid rgba(110,231,183,0.4)' }}
            >
              CERTIFICATIONS BREAKDOWN
            </div>
            <span className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>33 total</span>
          </div>
          <h2 className="font-display mb-4" style={{ fontSize: 'clamp(24px, 3vw, 34px)', color: 'var(--text-hi)', fontWeight: 400 }}>
            Kept building the fundamentals alongside every project above.
          </h2>
          <p className="font-body text-[15px] leading-[1.6] max-w-[62ch] mb-6" style={{ color: 'var(--text-mid)' }}>
            33 courses and certifications across SQL, Python, machine learning, analytics, and AI tooling, completed alongside the client work and capstone projects on this page.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={GITHUB_CERTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 rounded-full border"
              style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}
            >
              Source folder on GitHub →
            </a>
            <a
              href={LINKEDIN_CERTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 rounded-full border"
              style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}
            >
              Verified on LinkedIn →
            </a>
          </div>

          <div className="space-y-10">
            {CERT_GROUPS.map(group => (
              <div key={group.issuer}>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="font-body font-semibold text-[16px]" style={{ color: 'var(--text-hi)' }}>
                    {group.issuer}
                  </h3>
                  <span
                    className="font-mono text-[10px] px-2 py-1 rounded-full"
                    style={{ background: 'var(--bg-0)', border: '1px solid var(--line)', color: 'var(--text-mid)' }}
                  >
                    {group.items.length}
                  </span>
                  {group.proofs?.map(proof => (
                    <a
                      key={proof.url}
                      href={proof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[12px]"
                      style={{ color: 'var(--accent)' }}
                    >
                      {proof.label} →
                    </a>
                  ))}
                </div>
                <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))' }}>
                  {group.items.map(item => (
                    <div
                      key={item}
                      className="font-body text-[13.5px] leading-snug px-4 py-3 rounded-[10px]"
                      style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', color: 'var(--text-hi)' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
