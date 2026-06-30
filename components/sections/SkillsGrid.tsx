'use client'
import { useRef, useEffect, useState } from 'react'

const SKILLS = [
  {
    icon: '\u{1F50D}',
    title: 'Consumer Behavior Science',
    body: 'Prospect theory, System 1 vs 2, choice architecture, probability weighting, perceived value, applied to real buying decisions.',
    tag: 'Behavioral Economics',
    color: '#34d399',
  },
  {
    icon: '\u{1F333}',
    title: 'Causal Measurement',
    body: 'DiD, regression discontinuity, synthetic control, propensity matching. Separating what is driving growth from what would have happened anyway.',
    tag: 'Causal Inference',
    color: '#7c5cff',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Pricing & Revenue Strategy',
    body: 'Price elasticity modeling, non linear demand curves, promotional cannibalization detection, bundling strategy, margin prediction.',
    tag: 'Pricing Science',
    color: '#f5a35c',
  },
  {
    icon: '\u{1F3AF}',
    title: 'Growth & GTM Analytics',
    body: 'ICP validation, MMM, touchpoint attribution, LTV modeling, win back campaigns, CAC measurement, and funnel diagnostics.',
    tag: 'Growth Analytics',
    color: '#34d399',
  },
  {
    icon: '\u{1F4CA}',
    title: 'ML Segmentation',
    body: 'K means, DBSCAN, hierarchical clustering, PCA, ARM. Building customer segments from transactional behavior, not survey responses.',
    tag: 'Unsupervised ML',
    color: '#9b7cff',
  },
  {
    icon: '\u{1F5FA}',
    title: 'Journey & Heatmap Intel',
    body: 'Path to purchase mapping, behavioral dwell time analysis, in store vs online conversion gap diagnostics, and layout optimization.',
    tag: 'UX and Physical Analytics',
    color: '#f5a35c',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Data Storytelling',
    body: 'A trained eye for visual clarity plus MSBA rigor. Dashboards that get read and acted on, decks that win the room, analysis translated into a decision.',
    tag: 'Visualization and Story',
    color: '#34d399',
  },
  {
    icon: '\u{1F9E0}',
    title: 'Psychographic Intelligence',
    body: 'Values, lifestyle identity, motivational drivers, and self concept mapped from behavioral signals. The layer that explains why identical demographics make opposite decisions.',
    tag: 'Consumer Psychology',
    color: '#ef6f8e',
  },
  {
    icon: '\u{1F6E1}',
    title: 'First Party & Zero Party Data Strategy',
    body: 'Post cookie architecture design, consent based enrichment, declared intent collection, CDP strategy, and server side measurement frameworks.',
    tag: 'Privacy First Measurement',
    color: '#7c5cff',
  },
  {
    icon: '\u{1F504}',
    title: 'Retention & Churn Architecture',
    body: 'Predictive churn modeling, early warning trigger design, win back experiment frameworks, and retention economics by cohort and channel.',
    tag: 'Churn, LTV, Win Back',
    color: '#34d399',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Survey & Research Design',
    body: 'Validated questionnaire architecture, conjoint analysis, max diff scaling, anchoring bias mitigation. Getting signal that actually predicts behavior.',
    tag: 'VoC, Conjoint, Research',
    color: '#f5a35c',
  },
  {
    icon: '\u{1F916}',
    title: 'AI Augmented Analytics',
    body: 'LLM assisted insight generation, predictive automation, agentic BI workflows, and ML model deployment into decision pipelines.',
    tag: 'Causal AI, Agentic BI',
    color: '#9b7cff',
  },
]

function SkillCard({ skill, delay }: { skill: typeof SKILLS[0], delay: number }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-1)',
        border: hovered ? '1px solid ' + skill.color + '66' : '1px solid var(--line)',
        borderRadius: '14px',
        padding: '24px',
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: hovered ? 'translateY(-2px)' : (visible ? 'none' : 'translateY(16px)'),
        transition: 'opacity 450ms cubic-bezier(0.22,1,0.36,1) ' + delay + 'ms, transform 200ms ease-out, border-color 200ms ease-out',
      }}
    >
      {/* Icon box */}
      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: skill.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '22px' }}>
        {skill.icon}
      </div>

      {/* Title */}
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', fontWeight: 600, color: 'var(--text-hi)', lineHeight: 1.3, marginBottom: '8px' }}>
        {skill.title}
      </div>

      {/* Body */}
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.5, flex: 1, marginBottom: '16px' }}>
        {skill.body}
      </div>

      {/* Tag */}
      <div style={{ alignSelf: 'flex-start', fontFamily: 'var(--font-geist-mono)', fontSize: '12px', fontWeight: 500, color: skill.color, background: skill.color + '18', borderRadius: '999px', padding: '4px 10px' }}>
        {skill.tag}
      </div>
    </div>
  )
}

export default function SkillsGrid() {
  return (
    <section id="skills" style={{ padding: '128px 0' }} aria-labelledby="skills-heading">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
              What I Bring
            </span>
          </div>
          <h2
            id="skills-heading"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '16px' }}
          >
            A lens most strategists do not carry.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: 'var(--text-mid)', lineHeight: 1.6, maxWidth: '60ch', margin: '0 auto' }}>
            Built across British Airways, Starbucks, Newdia Fenway, and 25+ real engagements, with BU Questrom MSBA rigor and hands on execution.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} delay={i * 40} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
