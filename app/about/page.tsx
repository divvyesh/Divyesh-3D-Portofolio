import Image from 'next/image'
import { BoldText } from '@/lib/highlight'

// Chronological (EXIF-sorted), unfiltered — 2024 through 2026
const ROADMAP_PHOTOS: { file: string; year: string }[] = [
  { file: 'rm-01.jpg', year: '2024' }, { file: 'rm-02.jpg', year: '2024' }, { file: 'rm-03.jpg', year: '2024' },
  { file: 'rm-04.jpg', year: '2024' }, { file: 'rm-05.jpg', year: '2024' }, { file: 'rm-06.jpg', year: '2024' },
  { file: 'rm-07.jpg', year: '2024' }, { file: 'rm-08.jpg', year: '2025' }, { file: 'rm-09.jpg', year: '2025' },
  { file: 'rm-10.jpg', year: '2025' }, { file: 'rm-11.jpg', year: '2025' }, { file: 'rm-12.jpg', year: '2025' },
  { file: 'rm-13.jpg', year: '2025' }, { file: 'rm-14.jpg', year: '2025' }, { file: 'rm-15.jpg', year: '2025' },
  { file: 'rm-16.jpg', year: '2025' }, { file: 'rm-17.jpg', year: '2025' }, { file: 'rm-18.jpg', year: '2025' },
  { file: 'rm-19.jpg', year: '2025' }, { file: 'rm-20.jpg', year: '2025' }, { file: 'rm-21.jpg', year: '2025' },
  { file: 'rm-22.jpg', year: '2025' }, { file: 'rm-23.jpg', year: '2025' }, { file: 'rm-24.jpg', year: '2025' },
  { file: 'rm-25.jpg', year: '2026' }, { file: 'rm-26.jpg', year: '2026' }, { file: 'rm-27.jpg', year: '2026' },
  { file: 'rm-28.jpg', year: '2026' }, { file: 'rm-29.jpg', year: '2026' }, { file: 'rm-30.jpg', year: '2026' },
  { file: 'rm-31.jpg', year: '2026' }, { file: 'rm-32.jpg', year: '2026' }, { file: 'rm-33.jpg', year: '2026' },
  { file: 'rm-34.jpg', year: '2026' }, { file: 'rm-35.jpg', year: '2026' }, { file: 'rm-36.jpg', year: '2026' },
  { file: 'rm-37.jpg', year: '2026' }, { file: 'rm-38.jpg', year: '2026' }, { file: 'rm-39.jpg', year: '2026' },
  { file: 'rm-40.jpg', year: '2026' }, { file: 'rm-41.jpg', year: '2026' }, { file: 'rm-42.jpg', year: '2026' },
  { file: 'rm-43.jpg', year: '2026' },
]

export default function AboutPage() {
  const timeline = [
    { year: '2022–23', role: 'GTM Analyst', company: 'Sumedha IT', desc: 'Semiconductor training GTM. Stakeholder in CYIENT acquisition.' },
    { year: '2023–24', role: 'Founder', company: 'Count On Me', desc: '25+ client engagements, 35% avg engagement lift.' },
    { year: '2025', role: 'Data & Growth Analyst', company: 'Newdia Co.', desc: 'Built the first analytics function: CAC funnel, churn model (AUC 0.86), 30% promo-cannibalization signal.' },
    { year: '2026', role: 'Consumer Insights Analyst', company: 'Blue Horse Digital', desc: 'Consumer analytics and attribution work.' },
    { year: '2024–26', role: 'MS Business Analytics', company: 'BU Questrom', desc: '13 projects across causal inference, pricing, NLP, BigQuery, ML. Built RAT Lab.' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-6" style={{ color: 'var(--text-low)' }}>
            About
          </div>
          <h1
            className="font-display mb-8"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            Everything here happened on a clock.
          </h1>

          <div className="space-y-5 font-body text-[17px] leading-[1.75] max-w-[68ch]" style={{ color: 'var(--text-mid)' }}>
            <p>
              <BoldText color="var(--text-hi)" text="I left Hyderabad for Boston with one suitcase and a laptop, the same year I was still closing GTM decks for a semiconductor client three time zones away. That gap, deadlines by day, an ocean between me and everyone I grew up with by night, is where I actually learned what matters under pressure. Not the tool. Not the framework. The decision waiting on the other end of the work." />
            </p>
            <p>
              <BoldText color="var(--text-hi)" text="Every line on the timeline below happened against a visa clock I could not negotiate with. F-1, then OPT, then the countdown to STEM OPT and beyond. I built a 25+ client consulting practice, then a startup's first CAC funnel, then walked into Boston University with the same urgency: figure out what is real in the data, fast, because the runway is not infinite for someone in my position." />
            </p>
            <p>
              <BoldText color="var(--text-hi)" text="I'm finishing my MS in Business Analytics at Boston University Questrom School of Business in 2026, and moving to Florida after, because the work has to keep moving too. I'm actively looking for full-time roles in consumer insights, growth analytics, or data science. US work-authorized for 4+ years, no sponsorship needed." />
            </p>
            <p style={{ color: 'var(--accent-2)' }} className="font-display italic">
              The clock did not stop for any of it. Neither did I.
            </p>
          </div>

          <div style={{ marginTop: '40px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)', maxWidth: '560px' }}>
            <Image
              src="/images/about/bu-project-team.jpg"
              alt="Divyesh with his BU Questrom MSBA project team after a class presentation"
              width={1200}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{ padding: '12px 16px', fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--text-low)' }}>
              With my BU Questrom MSBA project team, right after we presented.
            </div>
          </div>
        </div>

        {/* Personal roadmap — a lineage, not a resume */}
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
            Where This Actually Comes From
          </div>
          <h2
            className="font-display mb-6"
            style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-hi)', fontWeight: 400, maxWidth: '32ch' }}
          >
            Not a resume. A lineage.
          </h2>
          <p className="font-body text-[16px] leading-[1.7] max-w-[68ch] mb-10" style={{ color: 'var(--text-mid)' }}>
            The career timeline below has my name on it. None of it happened alone. This is the shorter, truer list, the people who actually built the person doing that work. I was told once that you are who you are around, mostly. Here is who I have been around.
          </p>

          <div className="space-y-0">
            {[
              {
                who: 'Dad',
                body: 'Never finished a degree. Built a business anyway, from nothing, because no one was going to build it for him. Then spent years making sure I finished what he didn’t get to. I’m closing out a Master’s in Business Analytics partly because he needed me to.',
              },
              {
                who: 'Mom',
                body: 'Never called herself a businessperson. Started her own bakeries anyway. Then, separately, her own Zumba studio. Two ventures from zero, in fields she had no formal background in, because she wanted something that was hers. That is the second half of wherever my stubbornness comes from.',
              },
              {
                who: 'Me, before any of this',
                body: 'Long before spreadsheets, I was the kid who drew constantly, obsessively, people called me a prodigy at it. That instinct never actually left. It just moved from sketchbooks to data: the same pattern-chasing, detail-obsessed way of seeing that used to fill notebooks now finds the signal other people miss in a few million rows.',
              },
              {
                who: 'Everyone since',
                body: '25+ small business owners through Count On Me. A startup trusting me with its first real analytics function. Classmates and professors at Boston University. Enterprise-scale problems at Starbucks and British Airways data. Different rooms, wildly different stakes, same question every time: what is actually true here, and can I say it plainly enough that someone acts on it.',
              },
              {
                who: 'You, right now',
                body: 'If you’re reading this, you’re probably deciding whether to send an email, book a call, or close the tab. Either way, you’re already on this list. That is genuinely how I got here: one person, one room, one problem at a time. Yours could be next.',
              },
            ].map((item, i, arr) => (
              <div
                key={item.who}
                className="flex gap-8 relative"
                style={{ borderLeft: i === arr.length - 1 ? 'none' : '1px solid var(--line)', paddingLeft: '24px', marginLeft: '8px', paddingBottom: i === arr.length - 1 ? 0 : '28px' }}
              >
                <div
                  className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[4.5px]"
                  style={{ background: 'var(--violet)' }}
                />
                <div>
                  <div className="font-body font-semibold text-[15px] mb-2" style={{ color: 'var(--violet)' }}>
                    {item.who}
                  </div>
                  <div className="font-body text-[15.5px] leading-[1.7] max-w-[62ch]" style={{ color: 'var(--text-mid)' }}>
                    <BoldText color="var(--text-hi)" text={item.body} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo roadmap — the same journey, in pictures. Full-bleed, alternating
            left/right, one big uncropped frame at a time, all the way down. */}
        <div
          className="mb-20 w-screen relative left-1/2 -translate-x-1/2 px-5 sm:px-8"
        >
          <div className="max-w-[1300px] mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
                The Roadmap, In Pictures
              </div>
              <h2
                className="font-display mb-3"
                style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-hi)', fontWeight: 400, maxWidth: '36ch' }}
              >
                Same road. Actual frames from it.
              </h2>
              <p className="font-mono text-[11px] mb-4" style={{ color: 'var(--text-low)' }}>
                {ROADMAP_PHOTOS.length} unfiltered frames, 2024&ndash;2026 &mdash; full size, nothing cropped out
              </p>
            </div>

            <div className="flex flex-col gap-14 sm:gap-20 mt-10">
              {ROADMAP_PHOTOS.map((photo, i) => {
                const showYear = i === 0 || ROADMAP_PHOTOS[i - 1].year !== photo.year
                const alignRight = i % 2 === 1
                return (
                  <div key={photo.file} className={`flex ${alignRight ? 'justify-end' : 'justify-start'}`}>
                    <div style={{ position: 'relative', width: 'min(680px, 92vw)' }}>
                      {showYear && (
                        <div
                          className="font-mono"
                          style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 2, fontSize: '11px', letterSpacing: '0.08em', color: '#fff', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '9999px' }}
                        >
                          {photo.year}
                        </div>
                      )}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/about/roadmap/${photo.file}`}
                        alt="A moment from the last two years"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '18px', border: '1px solid var(--line)', background: 'rgba(255,255,255,0.02)' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-8" style={{ color: 'var(--text-low)' }}>
            Career Timeline
          </div>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 pb-8 relative"
                style={{ borderLeft: '1px solid var(--line)', paddingLeft: '24px', marginLeft: '8px' }}
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[4.5px]"
                  style={{ background: 'var(--accent)' }}
                />
                <div className="flex-shrink-0 w-20 font-mono text-[12px]" style={{ color: 'var(--text-low)' }}>
                  {item.year}
                </div>
                <div>
                  <div className="font-body font-semibold text-[15px] mb-1" style={{ color: 'var(--text-hi)' }}>
                    {item.role} <span style={{ color: 'var(--text-low)' }}>·</span> {item.company}
                  </div>
                  <div className="font-body text-[14px]" style={{ color: 'var(--text-mid)' }}>
                    <BoldText color="var(--text-hi)" text={item.desc} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/#book"
            className="font-body font-medium text-[15px] px-6 py-3 rounded-[10px] transition-all duration-150"
            style={{ background: 'var(--accent)', color: '#050507' }}
          >
            Book 15 min →
          </a>
          <a
            href="/work"
            className="font-body text-[15px] px-6 py-3 rounded-[10px] border transition-all duration-150"
            style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}
          >
            See the work →
          </a>
        </div>
      </div>
    </div>
  )
}
