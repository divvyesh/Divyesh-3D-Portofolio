// Shared keyword-highlighting system used across the entire site so numbers,
// technical terms, and buzzwords are bolded the same way in every content
// block — homepage sections, the About page, the Work grid, and every
// project breakdown (both the React glass template and the raw v25 HTML).

const ACRONYMS = [
  'AUC', 'ROAS', 'CLV', 'CAC', 'NPS', 'LTV', 'ROI', 'DiD', 'PCA', 'SQL', 'CBCV', 'CAGR',
  'CRO', 'GTM', 'KPI', 'KPIs', 'API', 'APIs', 'ETL', 'ELT', 'EDA', 'ML', 'AI', 'GenAI',
  'LLM', 'LLMs', 'NLP', 'GA4', 'GBM', 'ARIMA', 'ANOVA', 'RMSE', 'MAE', 'ARPU', 'ARR',
  'MRR', 'CSAT', 'CTR', 'CPC', 'CPA', 'SKU', 'SaaS', 'XGBoost', 'BigQuery', 'Python',
  'Tableau', 'Looker', 'PII', 'GPT', 'CX', 'UX', 'STEM', 'OPT', 'MSBA', 'SEO', 'CDP',
  'DTC', 'B2B', 'B2C', 'IoT', 'SSR', 'DBSCAN', 'GEO', 'AEO', 'RD',
]

const PHRASES = [
  'machine learning', 'logistic regression', 'linear regression', 'random forest',
  'gradient boosting', 'k-means clustering', 'k-means', 'time series', 'churn prediction',
  'causal inference', 'loss aversion', 'statistical significance', 'confidence interval',
  'feature engineering', 'cross-validation', 'hyperparameter tuning', 'decision tree',
  'neural network', 'sentiment analysis', 'natural language processing', 'a/b test',
  'a/b testing', 'behavioral economics', 'consumer insights', 'growth analytics',
  'data science', 'predictive model', 'regression model', 'customer segmentation',
  'attribution model', 'cohort analysis', 'retention rate', 'conversion rate',
]

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Numbers, currency, percentages, multipliers — matches "$3.7T", "95%", "5.7x", "306%", "-23%"
const NUM_SOURCE = String.raw`\$[\d,.]+[KMBbn+%×]?|[+-]?\d[\d,]*\.?\d*[%×]?(?:[KMB]\b)?`

const KEYWORDS = [...PHRASES, ...ACRONYMS].sort((a, b) => b.length - a.length).map(escapeRegex)

export const HIGHLIGHT_SOURCE = `(${NUM_SOURCE})|\\b(${KEYWORDS.join('|')})\\b`

// Always construct a fresh RegExp from this instead of sharing one instance —
// a global-flag RegExp carries lastIndex state that's easy to corrupt across
// repeated .replace() calls in a loop.
function freshRegex(): RegExp {
  return new RegExp(HIGHLIGHT_SOURCE, 'gi')
}

/**
 * React helper: renders `text` with numbers/technical terms wrapped in <strong>.
 * Use for any plain-text field rendered by a React component.
 */
export function BoldText({ text, color = 'var(--glass-hi)' }: { text: string; color?: string }) {
  if (!text) return null
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const highlighted = escaped.replace(
    freshRegex(),
    (m) => `<strong style="color:${color};font-weight:700">${m}</strong>`
  )
  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
}

/**
 * Raw-HTML helper: safely wraps keywords in <strong> inside an HTML string
 * without touching tags or attributes (splits on tag boundaries and only
 * rewrites the plain-text segments in between). Used for the v25 case-study
 * pages, which are stored as raw HTML blobs.
 */
export function highlightHtml(html: string): string {
  const parts = html.split(/(<[^>]+>)/g)
  return parts
    .map((part) => {
      if (part.startsWith('<')) return part
      return part.replace(
        freshRegex(),
        (m) => `<strong style="color:var(--text);font-weight:700">${m}</strong>`
      )
    })
    .join('')
}
