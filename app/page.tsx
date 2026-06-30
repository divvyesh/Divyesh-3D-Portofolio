import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import InsightsSection from '@/components/sections/InsightsSection'
import GapsSection from '@/components/sections/GapsSection'
import SkillsGrid from '@/components/sections/SkillsGrid'
import SelectedWork from '@/components/sections/SelectedWork'
import SocialProof from '@/components/sections/SocialProof'
import BookingSection from '@/components/sections/BookingSection'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Divyesh Annavarapu',
      jobTitle: 'Consumer Insights and Growth Analyst',
      url: 'https://divyesh-portfolio-v3.vercel.app',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Boston University Questrom School of Business',
      },
      knowsAbout: [
        'Causal inference',
        'Customer segmentation',
        'Pricing analytics',
        'Churn modeling',
        'Marketing mix modeling',
        'Behavioral economics',
        'Consumer insights',
        'Growth analytics',
      ],
      sameAs: [
        'https://www.linkedin.com/in/divyesh-sai-annavarapu/',
        'https://github.com/divvyesh',
      ],
    },
    {
      '@type': 'ProfilePage',
      name: 'Divyesh Annavarapu. Consumer Insights and Growth Analytics. BU MSBA 26',
      description: 'I help teams find the cohort, the churn signal, and the price cliff that dashboards average away. British Airways, Starbucks, Newdia.',
      url: 'https://divyesh-portfolio-v3.vercel.app',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a consumer insights analyst do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A consumer insights analyst finds the behavioral patterns, cohort differences, and causal signals that aggregate data hides. They turn raw customer data into specific, actionable decisions: which segment to prioritize, where the churn cliff actually is, and what is actually driving conversion versus what just correlates with it.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you find which customer segment is driving churn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cohort analysis combined with behavioral clustering. You segment customers by behavior, not demographics, then track retention curves per segment over time. The churning cohort almost always sits in the mid-value tier where aggregate metrics look stable but the underlying churn rate is 2x or higher.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between correlation and causal attribution in marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Correlation tells you what happened together. Causal attribution tells you what caused what. Most marketing attribution is correlation, which means spend decisions run on stale signal. Causal methods like difference in differences, regression discontinuity, and holdout experiments isolate the true lift from a campaign or channel.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you measure customer lifetime value?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CLV is calculated as average order value times purchase frequency times average customer lifespan, adjusted by segment. In practice you build cohort-level models that account for churn probability, repeat purchase curves, and channel-specific CAC to get a net present value per customer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help a small team pro bono?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. I do free 15-minute calls for small teams and founders. If there is something real to fix, we talk about next steps. If there is not, you walk away with a clearer read on your data. Book directly at the top of this page.',
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProblemSection />
      <InsightsSection />
      <GapsSection />
      <SkillsGrid />
      <SelectedWork />
      <SocialProof />
      <BookingSection />
    </>
  )
}
