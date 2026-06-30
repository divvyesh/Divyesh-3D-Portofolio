export type ProjectTag = 'client' | 'capstone' | 'tool'

export interface KPI { n: string; l: string }
export interface AnalysisCard { title: string; finding: string }
export interface SegmentCard { name: string; desc: string }
export interface NextStepCard { num: string; title: string; desc: string }
export interface DeckButton { label: string; url: string }

export interface Project {
  slug: string
  tag: ProjectTag
  tagLabel: string
  year: string
  brand: string
  outcomeTitle: string
  oneLineDecision: string
  metrics: [string, string, string]
  stack: string[]
  honesty: 'MEASURED' | 'MODELED' | 'PROJECTED' | 'MEASURED+MODELED'
  decisionChanged: string
  whatIDid: string
  result: string
  problem: string
  data: string
  method: string
  impact: string
  nextSteps?: string
  deckUrl?: string
  githubUrl?: string
  pdfUrl?: string
  problemLines?: string[]
  kpis?: KPI[]
  impactPoints?: string[]
  nextStepCards?: NextStepCard[]
  analyses?: AnalysisCard[]
  segments?: SegmentCard[]
  clientContext?: string[]
  deckButtons?: DeckButton[]
}

export const projects: Project[] = [
  {
    slug: 'newdia',
    tag: 'client',
    tagLabel: 'CLIENT WORK',
    year: '2025',
    brand: 'Newdia Co.',
    outcomeTitle: "Built a startup's entire analytics function from zero  -  rerouted 40% of a $1.2M budget",
    oneLineDecision: 'Promotions budget reallocated from blanket discounts to high-LTV behavioral cohorts',
    metrics: ['39,793 customers', 'Churn AUC 0.86', '2.3\u00d7 ROAS on winning channel'],
    stack: ['Python', 'SQL', 'scikit-learn', 'Tableau', 'Qualtrics', 'Meta Ads'],
    honesty: 'MEASURED+MODELED',
    decisionChanged: 'Built the first CAC and behavioral NPS funnel the business had ever tracked, then surfaced a 30% promo-cannibalization signal hiding in the transaction data. The decision: reallocate promotions budget from blanket discounts toward high-LTV behavioral cohorts.',
    whatIDid: 'Built 6 customer segments via clustering, modeled churn (AUC 0.86), discovered 30% of promo budget was cannibalizing organic purchases, and identified a 2.3\u00d7 ROAS channel the team had deprioritized.',
    result: '40% budget reallocation recommendation based on causal model. Revenue protection from identified churn cohort. First analytics infrastructure the business had ever run.',
    problem: 'Newdia had 39,793 customers and zero analytics infrastructure. Promotions were gut-feel. No one knew which customers were churning, which channels worked, or what a loyal customer looked like.',
    data: 'Transaction records, promotional data, channel attribution logs, NPS surveys, Qualtrics (n=94), in-store observation (n=30+), Meta/TikTok platform APIs, IBIS World reports.',
    method: 'K-means clustering (6 segments), churn prediction (AUC 0.86), promo-cannibalization DiD analysis, channel ROAS decomposition, CausalForest uplift modeling, CLV/CBCV Beta-Geometric NBD, price elasticity OLS (R\u00b2 0.74), market basket analysis (Apriori), Holt-Winters 12-week revenue forecast.',
    impact: 'First-ever CAC and behavioral NPS funnel. 30% promo-cannibalization signal identified. 2.3\u00d7 ROAS channel found. $1.2M budget reallocation recommendation built on causal evidence. 9 targeted campaigns deployed.',
    pdfUrl: '/pdfs/Newdia_25.pdf',
    problemLines: [
      'Zero analytics infrastructure in a newly-regulated Massachusetts cannabis market  -  every growth and pricing decision was made on instinct',
      'GenZ-majority customer base (39,793 records) with no segmentation, no churn model, and no measurement framework for campaign performance',
      '$1.2M marketing budget deployed largely on blanket discounts with no visibility into which promotions were cannibalizing organic purchases',
      'No CRM or loyalty IDs initially due to MA CORI restrictions  -  required building intelligence entirely from transaction-level POS data'
    ],
    clientContext: [
      'Newdia Co.  -  dispensary & cannabis lifestyle brand, Fenway neighborhood, Boston MA',
      'Regulated market (MA CORI laws restrict PII linkage; no loyalty program initially)',
      'Core customer: GenZ (18\u201326), BIPOC community, event-goers, Fenway sports fans',
      'Business model: retail + wholesale + apparel + events + brand licensing',
      'Data constraint: transaction-level records only; no CRM, no loyalty IDs until mid-project'
    ],
    kpis: [
      { n: '$1.2M', l: 'Marketing Budget Managed' },
      { n: '39.8K', l: 'Customer Records Analyzed' },
      { n: '20+', l: 'Deep Analyses Conducted' },
      { n: '$774K+', l: 'Revenue Impact (proj.)' },
      { n: '9', l: 'Targeted Campaigns' },
      { n: '6', l: 'GenZ Segments Modeled' }
    ],
    segments: [
      { name: '\U0001f3af Fenway Loyalist', desc: 'High-frequency, location-attached buyers. Sports events & concerts drive same-day spikes. Best CLV segment.' },
      { name: '\U0001f48a Medical Pragmatist', desc: 'Discount-sensitive, high-volume, consistent cadence. Responds to loyalty nudges over creative campaigns.' },
      { name: '\U0001f6cd\ufe0f Apparel & Lifestyle Buyer', desc: 'Brand-driven, fashion-conscious, low product frequency but high merch spend. Activates on social content.' },
      { name: '\U0001f33f Bulk Deal Seeker', desc: 'Price-elastic, basket-large, visit-infrequent. Responds to bulk offers and tiered pricing. Price-driven.' },
      { name: '\U0001f465 Social Explorer', desc: 'Event-adjacent, low repeat rate, high first-purchase AOV. Converts best with ambassador programs.' },
      { name: '\U0001f4c9 NED  -  Never-Engaged, Declining', desc: 'Single or 2-visit buyers with zero re-engagement signal. Churn AUC 0.83. Most responsive to bounce-back.' }
    ],
    analyses: [
      { title: 'Accessory Audit', finding: 'Identified 4 under-performing SKU families; recommended discontinuation of 2 with negative margin contribution' },
      { title: 'Street Team Performance Audit', finding: 'Measured cost-per-acquisition per activation; 3 of 5 channels underperforming baseline CAC' },
      { title: 'Churn Prediction Model', finding: 'Gradient Boost AUC 0.86 (precision 0.79) on 60\u201390 day lapse prediction; enabled Win-Back campaign targeting' },
      { title: 'Price Elasticity OLS', finding: 'R\u00b2 0.74 across 8 product categories; bulk flower had highest cross-price elasticity' },
      { title: 'Promo Cannibalization (DiD)', finding: '30% of promotional spend identified as cannibalizing organic purchases with no net-new revenue' },
      { title: 'Market Basket Analysis', finding: 'Apriori algorithm; lift \u2265 1.8 rule sets revealed 3 high-confidence cross-sell pairings' },
      { title: 'CLV / CBCV Modeling', finding: 'Beta-Geometric NBD 12-month projections; Medical Pragmatist CLV 40% above average' },
      { title: 'CausalForest Uplift Model', finding: 'HTE estimation by segment; Win-Back cohort showed 2.1\u00d7 uplift vs baseline on personalized offers' },
      { title: 'NPS Survey Design (n=94)', finding: 'Qualtrics survey + psychographic layer; mapped GenZ motivation archetypes to segment clusters' },
      { title: 'Holt-Winters Revenue Forecast', finding: '12-week exponential smoothing; seasonal event spikes captured for Fenway game-day surges' }
    ],
    impactPoints: [
      'First-ever CAC tracking and behavioral NPS funnel designed  -  the business had no measurement baseline before this engagement',
      '30% promo-cannibalization signal surfaced via DiD causal model  -  budget was being destroyed by discounting organic buyers',
      '2.3\u00d7 ROAS channel identified and elevated; previously deprioritized by marketing team',
      '$774K+ revenue impact identified (projected) across churn protection, segment reactivation, and CAC optimization',
      '9 targeted campaigns executed across 6 behavioral segments with measurable cohort tracking'
    ],
    nextStepCards: [
      { num: '01', title: 'Loyalty Program Launch', desc: 'CORI-compliant loyalty ID system now possible; build longitudinal cohort tracking to replace transaction-only data.' },
      { num: '02', title: 'Real-Time Churn Dashboard', desc: 'Productionize the AUC 0.86 churn model into a weekly ops dashboard triggering Win-Back sequences automatically.' },
      { num: '03', title: 'A/B Campaign Infrastructure', desc: 'Build holdout testing framework so future campaign ROAS is measured causally, not attributed heuristically.' },
      { num: '04', title: 'Price Elasticity Repricing', desc: 'Deploy OLS elasticity findings into dynamic pricing tiers for bulk flower  -  highest-leverage revenue lever identified.' }
    ],
    deckButtons: [
      { label: 'Main Deck (25 slides)', url: '/pdfs/Newdia_25.pdf' },
      { label: 'Final Presentation', url: '/pdfs/Newdia_Final_Presentation.pdf' },
      { label: 'Full Presentation', url: '/pdfs/Newdia_Presentation.pdf' },
      { label: 'Initial Analysis', url: '/pdfs/Newdia_Initial_Analysis.pdf' },
      { label: 'Strategy Framework', url: '/pdfs/Newdia_Strategy_Framework.pdf' },
      { label: 'Customer Segmentation', url: '/pdfs/Newdia_Client_Data_Summary.pdf' },
      { label: 'Qualtrics Survey', url: '/pdfs/Newdia_Qualtrics_Survey.pdf' },
      { label: 'Interview Transcripts', url: '/pdfs/Newdia_Interview_Transcripts.pdf' },
      { label: 'Observation Research', url: '/pdfs/Newdia_Observation_Research.pdf' },
      { label: 'Consumer Trends', url: '/pdfs/Newdia_Consumer_Trends.pdf' },
      { label: 'Brand Mentions', url: '/pdfs/Newdia_Brand_Mentions.pdf' },
      { label: 'Mentions Report', url: '/pdfs/Newdia_Mentions_Report.pdf' },
      { label: 'Social Media Trends', url: '/pdfs/Newdia_Social_Media_Trends.pdf' },
      { label: 'Online Shopping Behavior', url: '/pdfs/Newdia_Online_Shopping.pdf' },
      { label: 'IBIS World Report', url: '/pdfs/Newdia_IBIS_Report.pdf' },
      { label: 'Creative Brief', url: '/pdfs/Newdia_Creative_Brief.pdf' },
      { label: 'Pledge Dia Sponsorship', url: '/pdfs/Newdia_Pledge_Dia_Sponsorship.pdf' },
      { label: 'Internship Proposal', url: '/pdfs/Newdia_Internship_Proposal.pdf' },
      { label: 'Reflection Letter', url: '/pdfs/Newdia_Reflection_Letter.pdf' },
      { label: 'Reflection Paper', url: '/pdfs/Newdia_Reflection_Paper.pdf' }
    ]
  },
  {
    slug: 'starbucks',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'Starbucks',
    outcomeTitle: 'A 14% retention lift hiding in one cohort that 3.2M aggregate records were masking',
    oneLineDecision: 'Target menu simplification at mid-frequency buyers specifically  -  not a blanket product change',
    metrics: ['3.2M loyalty records', '+14% retention lift (projected)', 'p < 0.01 DiD result'],
    stack: ['Python', 'scikit-learn', 'statsmodels'],
    honesty: 'PROJECTED',
    decisionChanged: 'Targeting menu simplification at mid-frequency buyers specifically, not a blanket product change. A causal DiD experiment isolated this cohort churning on cognitive complexity  -  invisible in top-line BI views.',
    whatIDid: 'Clustered 3.2M records past standard frequency buckets using K-means + DBSCAN + hierarchical + PCA. Ran a Difference-in-Differences causal experiment testing whether menu density suppresses conversion at peak cognitive load.',
    result: '+14% projected retention lift for the mid-frequency segment. The signal was statistically significant (p < 0.01) and invisible at the aggregate level.',
    problem: 'Starbucks loyalty program showed flat aggregate retention metrics, but churn was hiding in specific cohorts. Aggregate views were smoothing over a behavioral signal that required segment-level causal analysis to surface.',
    data: '3.2M Starbucks loyalty transaction records from the BU MSBA capstone dataset.',
    method: 'K-means, DBSCAN, hierarchical clustering, PCA, Difference-in-Differences causal inference, market basket analysis.',
    impact: '+14% projected retention lift in mid-frequency segment. Causal evidence for menu complexity as churn driver. Decision framework for targeted  -  not blanket  -  product changes.',
    pdfUrl: '/pdfs/Starbucks_Research_Presentation.pdf',
    problemLines: [
      'Flat aggregate retention metrics masked segment-level churn  -  3.2M records averaging out a behavioral signal in a specific cohort',
      'Mid-frequency buyers (43% of the customer base) were churning on cognitive overload at peak decision points  -  invisible in top-line views',
      'No causal framework existed to separate menu complexity effects from confounding loyalty program mechanics',
      'Aggregate BI dashboards gave a false positive signal  -  the business appeared healthy while a key cohort was silently leaving'
    ],
    kpis: [
      { n: '+14%', l: 'Retention Lift (proj., p<0.01)' },
      { n: '3.2M', l: 'Loyalty Records Analyzed' },
      { n: '0.62', l: 'Silhouette Score' },
      { n: '43%', l: 'Mid-Cohort Customer Base' },
      { n: '74%', l: 'PCA Variance Explained' },
      { n: '2.1%', l: 'Outliers Removed (DBSCAN)' }
    ],
    impactPoints: [
      '+14% projected retention lift for the mid-frequency segment  -  statistically significant at p < 0.01 via Difference-in-Differences',
      'Causal evidence established for menu cognitive complexity as a churn driver  -  not correlation, a measurable behavioral mechanism',
      'Mid-frequency cohort (43% of customer base) isolated as highest-leverage intervention point',
      'Business case for segment-first product decisions over blanket menu changes'
    ],
    nextStepCards: [
      { num: '01', title: 'Holdout A/B Test', desc: 'Run a live menu simplification test on the mid-frequency cohort against a holdout group  -  convert the projected 14% into measured lift.' },
      { num: '02', title: 'Cohort Monitoring Dashboard', desc: 'Build a real-time dashboard tracking mid-frequency churn rate, separating it from the aggregate loyalty metric.' },
      { num: '03', title: 'Extended Behavioral Segmentation', desc: 'Apply the clustering framework to regional markets to test whether the cognitive load signal varies by store density.' },
      { num: '04', title: 'Causal Attribution for Loyalty Mechanics', desc: 'Isolate which loyalty program mechanics independently drive mid-frequency retention, separating from menu effects.' }
    ]
  },
  {
    slug: 'british-airways',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'British Airways',
    outcomeTitle: 'Caught a retargeting channel bleeding budget before the blended dashboard could',
    oneLineDecision: 'Reallocate media spend away from a channel reading positive in blended ROAS but negative at segment level',
    metrics: ['12 fare classes modeled', 'Neg. ROAS channel surfaced', 'Leisure mid-tier cliff found'],
    stack: ['R', 'Python', 'statsmodels'],
    honesty: 'PROJECTED',
    decisionChanged: 'One retargeting channel was returning negative ROAS at the leisure mid-tier segment level while reading positive in blended dashboards. Demand breaks non-linearly across 12 fare classes  -  a cliff invisible in average elasticity views.',
    whatIDid: 'Built a regression-discontinuity elasticity model across 12 fare classes. Identified a non-linear price sensitivity cliff in the leisure mid-tier. Decomposed ROAS by segment.',
    result: 'A retargeting channel identified as negative ROAS at segment level. A non-linear price cliff found weeks before it would appear in aggregate.',
    problem: 'British Airways was watching average elasticity across fare classes and making pricing and media decisions on blended metrics  -  missing segment-level breakdowns entirely.',
    data: 'British Airways booking and review dataset from BU MSBA capstone. Scraped review data. 12 fare class labels.',
    method: 'Regression discontinuity design, price elasticity modeling, ROAS decomposition by segment, sentiment analysis on reviews.',
    impact: 'Negative ROAS channel identified before budget was further committed. Non-linear price cliff documented. Segment-first modeling framework established.',
    pdfUrl: '/pdfs/British_Airways_PRESENTATION.pdf',
    problemLines: [
      'Blended ROAS metrics were hiding a negative-returning retargeting channel  -  one segment was bleeding budget while the aggregate showed positive',
      'Price elasticity modeled as an average across 12 fare classes  -  non-linear cliffs and segment-specific demand breaks were invisible',
      'Leisure mid-tier passengers had structurally different price sensitivity than business travelers, but no separate model existed',
      'Review sentiment data existed but was not connected to fare class or booking channel  -  a rich signal being left unread'
    ],
    kpis: [
      { n: '89%', l: 'Classifier Accuracy' },
      { n: '\u22120.34', l: 'Punctuality Gap vs Emirates' },
      { n: '31%', l: 'Higher Completion (14-day lead)' },
      { n: '50K+', l: 'Booking Records Modeled' },
      { n: '3', l: 'Passenger Segments' },
      { n: '0.46', l: 'Extras vs Satisfaction (r)' }
    ],
    impactPoints: [
      'Negative ROAS retargeting channel identified at segment level  -  invisible in blended dashboards until decomposed',
      'Non-linear price cliff documented across 12 fare classes  -  a structural demand break average elasticity models miss',
      'Media reallocation framework built on segment-level causal evidence, not blended attribution',
      'Sentiment analysis connected booking behavior to review signal for the first time in the dataset'
    ],
    nextStepCards: [
      { num: '01', title: 'Segment-Level ROAS Reporting', desc: 'Replace blended ROAS with per-segment attribution dashboards so negative-returning channels are visible before they compound.' },
      { num: '02', title: 'Dynamic Fare Elasticity Model', desc: 'Build a real-time elasticity model that updates per fare class as booking patterns shift, replacing the static average.' },
      { num: '03', title: 'Review Sentiment Churn Signal', desc: 'Connect NLP review sentiment to rebooking probability  -  declining sentiment as an early churn predictor.' },
      { num: '04', title: 'Retargeting Channel Holdout', desc: 'Run a geo-controlled holdout on the negative-ROAS channel to confirm causal direction before full reallocation.' }
    ]
  },
  {
    slug: 'airbnb',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'Airbnb',
    outcomeTitle: 'Identified which host and listing factors actually drive booking conversion vs. noise',
    oneLineDecision: 'Shift host coaching from surface-level pricing to the behavioral and review signals that explain conversion',
    metrics: ['74K listings analyzed', 'XGBoost R\u00b2 0.73', '\u221235% error vs linear'],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP'],
    honesty: 'MODELED',
    decisionChanged: 'The analysis identified which host and listing characteristics actually drove booking probability versus noise  -  shifting focus from surface-level pricing to the behavioral and review signals that explain conversion.',
    whatIDid: 'Built a booking probability model. Decomposed review sentiment signals. Ran SHAP feature attribution to separate genuine conversion drivers from correlated noise.',
    result: 'Ranked attribution model for booking probability. Review signal decomposition. Host quality scoring framework. \u221235% error vs linear baseline.',
    problem: 'Airbnb hosts lacked a systematic way to understand which listing characteristics actually drove bookings versus which were misleading proxies.',
    data: 'Public Airbnb dataset (Inside Airbnb). 74K listings across 6 US cities. Review text.',
    method: 'Gradient boosting (XGBoost), SHAP values for feature attribution, NLP on review text, booking probability regression.',
    impact: 'Booking probability model (R\u00b2 0.73). 35% lower error vs linear baseline. Top 8 pricing features identified. City-level variation captured.',
    pdfUrl: '/pdfs/Airbnb_Presentation.pdf',
    problemLines: [
      '74K listings with no systematic model to distinguish genuine conversion drivers from correlated noise',
      'Host coaching was based on surface-level heuristics (price, # of photos) rather than behavioral signals that predict bookings',
      'Review sentiment data existed as raw text  -  no NLP pipeline connected it to conversion probability',
      'Geographic variation across 6 US cities meant national averages were masking market-specific demand dynamics'
    ],
    kpis: [
      { n: '74K', l: 'Listings Analyzed' },
      { n: '0.73', l: 'Test R\u00b2 Score' },
      { n: '0.34', l: 'Test RMSE (log)' },
      { n: '8', l: 'Top Pricing Features' },
      { n: '\u221235%', l: 'Error vs Linear Baseline' },
      { n: '6', l: 'US Cities Covered' }
    ],
    impactPoints: [
      'Booking probability model (XGBoost, R\u00b2 0.73)  -  35% lower error vs linear baseline, SHAP attribution per feature',
      'Review sentiment decomposed into dimensions that predict conversion vs. those that correlate but do not drive bookings',
      'Top 8 pricing features identified  -  host coaching framework built on actual signal, not platform folklore',
      'City-level variation captured  -  national averages were masking market-specific demand dynamics across 6 US cities'
    ],
    nextStepCards: [
      { num: '01', title: 'Real-Time Host Scoring', desc: 'Productionize the XGBoost model into a host quality score that updates weekly as reviews and booking data accumulate.' },
      { num: '02', title: 'Causal Intervention Test', desc: 'Run A/B tests on host coaching recommendations derived from SHAP features  -  convert predictive attribution to causal proof.' },
      { num: '03', title: 'Sentiment Rebooking Pipeline', desc: 'Build an NLP pipeline that flags review sentiment decline as a leading indicator for host churn risk.' },
      { num: '04', title: 'City-Specific Models', desc: 'Train market-specific models for each of the 6 cities  -  feature importance varies significantly by local demand dynamics.' }
    ]
  },
  {
    slug: 'california-ev',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'California EV Infrastructure',
    outcomeTitle: 'Found the highest-ROI EV charging sites in California before any agency had the model',
    oneLineDecision: 'Prioritize inland clusters over coastal infill  -  ROI is 265% higher, visibility is 0%',
    metrics: ['5 placement clusters', '265% avg ROI (proj.)', '$182K revenue/site (proj.)'],
    stack: ['Python', 'scikit-learn', 'GeoPandas', 'pandas'],
    honesty: 'PROJECTED',
    decisionChanged: 'Model shifted site selection from population-density-first heuristics to a behavioral demand + infrastructure gap composite  -  identifying inland clusters with 265% higher projected ROI than coastal infill being prioritized by most planners.',
    whatIDid: 'Clustered 74K existing EV charging locations by demand signal and infrastructure gap. Built a revenue projection model. Identified 5 high-priority placement clusters ignored by density-first planning.',
    result: '5 high-priority site clusters with 265% average projected ROI. $182K projected annual revenue per optimal site.',
    problem: 'California EV charging rollout was following population density as the primary site selection signal  -  missing high-demand corridors with infrastructure gaps.',
    data: 'DOE AFDC charging station database, EV registration data, California traffic corridors, 34% CAGR market projections.',
    method: 'K-means clustering (silhouette 0.58), PCA (78% variance), demand gap composite scoring, ROI projection modeling.',
    impact: '5 inland placement clusters identified with 265% higher projected ROI than coastal infill. $182K annual revenue projection per optimal site.',
    pdfUrl: '/pdfs/EV_Charging_Presentation.pdf',
    problemLines: [
      'EV charging site selection was driven by population density  -  a proxy that misses behavioral demand patterns and infrastructure gaps',
      '34% CAGR in EV adoption creating urgent need for forward-looking placement vs. reactive infill of already-served areas',
      'Inland high-traffic corridors had zero charging coverage despite measured demand signals  -  planners had no model to quantify this gap',
      'ROI modeling for EV infrastructure did not exist at the cluster level  -  sites were approved project-by-project with no portfolio optimization'
    ],
    kpis: [
      { n: '5', l: 'Placement Clusters Found' },
      { n: '0.58', l: 'Silhouette Score' },
      { n: '$182K', l: 'Annual Revenue/Site (proj.)' },
      { n: '265%', l: 'Avg Cluster ROI (proj.)' },
      { n: '78%', l: 'Variance via PCA' },
      { n: '34%', l: 'CAGR Charging Ports' }
    ],
    impactPoints: [
      '5 high-priority inland placement clusters identified  -  invisible to population-density-first planning approaches',
      '265% projected ROI advantage over coastal infill sites  -  structural opportunity, not marginal improvement',
      '$182K annual revenue projection per optimal site, built on demand gap composite scoring',
      'Replicable model for any state-level EV infrastructure planning'
    ],
    nextStepCards: [
      { num: '01', title: 'Live Demand Signal Integration', desc: 'Connect EV registration growth data as a live feed to update cluster ROI projections quarterly as adoption accelerates.' },
      { num: '02', title: 'Zoning & Grid Capacity Layer', desc: 'Add zoning feasibility and electrical grid capacity constraints to filter the 5 clusters to implementation-ready sites.' },
      { num: '03', title: 'State Agency Pilot', desc: 'Present the cluster model to a California energy agency  -  the gap between the model and current planning is actionable.' },
      { num: '04', title: 'Multi-State Replication', desc: 'Refit the model for Texas and Arizona  -  same methodology, different demand dynamics and infrastructure starting points.' }
    ]
  },
  {
    slug: 'salesforce',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'Salesforce AI GTM',
    outcomeTitle: 'Mapped which AI sales tools actually move pipeline  -  and which are activity-metric theater',
    oneLineDecision: 'Concentrate AI spend in 3 tool categories; defund 4 others that correlate with activity but not close rate',
    metrics: ['7 AI tools evaluated', '92% forecast accuracy (Gong)', '3.8\u00d7 pipeline multiplier (Drift)'],
    stack: ['Python', 'pandas', 'Excel', 'Tableau'],
    honesty: 'MODELED',
    decisionChanged: 'Separated AI tools that correlated with activity metrics from those that drove close rate and pipeline velocity  -  concentrating spend in 3 strategic categories and defunding 4 that inflated activity metrics.',
    whatIDid: 'Evaluated 7 AI sales tools across 3 strategic categories. Built a pipeline attribution model. Separated activity-correlated tools from close-rate-driving tools.',
    result: 'Prioritized AI tool stack with ROI attribution per category. Framework for separating pipeline-moving tools from activity-inflating ones.',
    problem: 'Salesforce reps were using 7+ AI tools with no framework to determine which drove pipeline vs. which inflated activity metrics that looked good in dashboards but did not close.',
    data: 'AI tool performance benchmarks, pipeline velocity data, close rate analysis, prospecting time reduction metrics.',
    method: 'Tool evaluation framework, pipeline attribution modeling, ROI decomposition, category-level performance analysis.',
    impact: '3 AI tool categories identified as genuine pipeline drivers. 4 tools identified as activity-inflating. +40% SQL conversion lift from optimized stack.',
    pdfUrl: '/pdfs/AI_Sales_Presentation.pdf',
    problemLines: [
      '7 AI sales tools in the stack with no attribution model separating close-rate drivers from activity-metric inflators',
      'Pipeline forecasts based on activity volume (calls, emails) rather than behavioral signals that predicted close probability',
      'AI tool adoption was being driven by buying committee preference rather than performance evidence',
      'No framework existed to evaluate new AI tools before adoption  -  decisions were reactive and budget-diffuse'
    ],
    kpis: [
      { n: '7', l: 'AI Tools Evaluated' },
      { n: '3', l: 'Strategic Categories' },
      { n: '92%', l: 'Gong Forecast Accuracy' },
      { n: '3.8\u00d7', l: 'Pipeline Multiplier (Drift)' },
      { n: '\u221265%', l: 'Prospecting Time (Cognism)' },
      { n: '+40%', l: 'SQL Conversion Lift' }
    ],
    impactPoints: [
      '3 AI tool categories identified as genuine pipeline drivers: Gong (92% forecast accuracy), Drift (3.8\u00d7 pipeline multiplier), Cognism (\u221265% prospecting time)',
      '4 tools identified as activity-metric inflators with no measurable close rate impact  -  defunding recommendation with ROI evidence',
      '+40% SQL conversion lift modeled from optimized tool stack vs current configuration',
      'Evaluation framework built for future AI tool adoption  -  prevents reactive committee-driven purchasing'
    ],
    nextStepCards: [
      { num: '01', title: 'Live Pipeline Attribution', desc: 'Instrument the 3 validated tool categories with pipeline tracking at deal level  -  close rate, velocity, and AOV per tool touchpoint.' },
      { num: '02', title: 'Tool Rationalization Rollout', desc: 'Present defunding case for 4 activity-inflating tools to sales leadership  -  framework already built.' },
      { num: '03', title: 'AI Tool Evaluation Framework', desc: 'Standardize the evaluation methodology for new AI tool adoption  -  ROI gates before any new tool enters the stack.' },
      { num: '04', title: 'Rep Behavior Analysis', desc: 'Analyze which rep behaviors with the validated tools drive highest conversion  -  build coaching playbook from actual signal.' }
    ]
  },
  {
    slug: 'google-trends',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'Google Trends',
    outcomeTitle: 'Mapped the half-life of viral search terms and found the economic signals hiding in noise',
    oneLineDecision: 'Use term survival rate, not peak volume, as the leading indicator of durable demand vs. fad',
    metrics: ['10M+ rows processed', '42 countries analyzed', '\u22120.66 internet vs. volatility (r)'],
    stack: ['Python', 'BigQuery', 'pandas', 'statsmodels'],
    honesty: 'MEASURED+MODELED',
    decisionChanged: 'Peak search volume is a lagging vanity metric  -  the decision shifts to term survival rate as the leading indicator of durable demand vs. fad. A term that peaks and dies in 3 days behaves economically differently from one that sustains for 3 weeks at 60% of peak.',
    whatIDid: 'Processed 10M+ rows of Google Trends data across 42 countries. Built survival models on search term lifecycle. Correlated internet penetration with search term volatility patterns.',
    result: 'Search term survival model with AUC 0.64. Term churn rate of 70% per day documented. \u22120.66 correlation between internet penetration and volatility.',
    problem: 'Google Trends data was being read via peak volume  -  a metric that conflates viral spikes with durable intent and misses the term lifecycle entirely.',
    data: '10M+ rows Google Trends global dataset, internet penetration data by country, economic indicators across 42 countries.',
    method: 'Kaplan-Meier survival analysis, Cox regression, AUC 0.64 term survival model, BigQuery for large-scale data processing.',
    impact: 'Search term survival model (AUC 0.64). 70% daily term churn rate documented. Structural finding: high internet penetration correlates with lower search volatility (\u22120.66).',
    pdfUrl: '/pdfs/GT_Presentation.pdf',
    problemLines: [
      'Google Trends was being read via peak search volume  -  a metric that conflates viral spikes with sustained demand intent',
      '10M+ rows of term lifecycle data existed with no survival model  -  no way to distinguish a 3-day fad from a 3-week durable signal',
      '70% of search terms churn within 24 hours  -  any demand model using weekly aggregates is systematically biased toward noise',
      'Internet penetration variation across 42 countries created structural differences in search volatility that were not being accounted for'
    ],
    kpis: [
      { n: '10M+', l: 'Rows Processed' },
      { n: '42', l: 'Countries Analyzed' },
      { n: '0.64', l: 'AUC Survival Model' },
      { n: '31K', l: 'Unique Terms Tagged' },
      { n: '\u22120.66', l: 'Internet vs Volatility (r)' },
      { n: '70%', l: 'Daily Term Churn Rate' }
    ],
    impactPoints: [
      'Search term survival model (AUC 0.64) built  -  separates durable demand signals from viral spikes using lifecycle features',
      '70% daily term churn rate documented  -  establishes the baseline noise level any demand model must account for',
      '\u22120.66 correlation between internet penetration and volatility  -  structural finding about market maturity and search behavior',
      'BigQuery pipeline for 10M+ row processing  -  framework replicable for brand monitoring or demand sensing'
    ],
    nextStepCards: [
      { num: '01', title: 'Real-Time Term Scoring', desc: 'Deploy survival model as a scoring API  -  input any search term, output estimated durable demand probability within 48 hours.' },
      { num: '02', title: 'Brand Monitoring Application', desc: 'Apply term lifecycle model to brand name tracking  -  separate genuine brand interest growth from PR spike noise.' },
      { num: '03', title: 'Country-Level Calibration', desc: 'Fit country-specific survival baselines using the internet penetration correlation  -  one global model underperforms 42 local ones.' },
      { num: '04', title: 'Demand Sensing Integration', desc: 'Connect term survival scores to inventory and campaign planning systems  -  leading indicator before sales data shows it.' }
    ]
  },
  {
    slug: 'mbta-sql',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'MBTA (SQL & Operations)',
    outcomeTitle: 'Found 4 broken stations and a $700M deficit hiding in headway data',
    oneLineDecision: "Fix Warren St timing window  -  90-second cycle gap is the system's highest-leverage single intervention",
    metrics: ['$700M MBTA deficit 2026', '4 problem stations found', '90s Warren St window'],
    stack: ['BigQuery', 'SQL', 'Python', 'Tableau'],
    honesty: 'MEASURED',
    decisionChanged: 'Headway analysis identified Warren Street as the single highest-leverage intervention  -  a 90-second scheduling window that, if fixed, cascades timing improvements through 4 downstream stations.',
    whatIDid: 'Processed MBTA headway data in BigQuery. Built 2 operational Tableau dashboards. Identified 4 problem stations with statistically anomalous cycle windows.',
    result: '4 problem stations identified. Warren St 90-second cycle window documented. $700M deficit context established for prioritization framework.',
    problem: 'The MBTA faces a $700M deficit by 2026 with no systematic framework for identifying which operational fixes produce the highest ridership and reliability ROI.',
    data: 'MBTA headway and scheduling data, ridership records, BigQuery for large-scale processing.',
    method: 'SQL analysis in BigQuery, headway anomaly detection, Tableau dashboard construction, statistical cycle window analysis.',
    impact: '4 problem stations identified. Warren St 90-second window quantified. 2 operational dashboards delivered.',
    pdfUrl: '/pdfs/MBTA_Headway_Presentation.pdf',
    problemLines: [
      '$700M MBTA deficit by 2026 with no systematic framework for identifying which operational fixes produce highest ROI',
      'Headway data existed but no anomaly detection model  -  problem stations were identified by ridership complaints, not data',
      'Warren Street timing gap cascaded downstream delays to 4 connected stations  -  the root cause was invisible in aggregate on-time performance',
      'Low ridership elasticity meant fare increases had limited revenue impact  -  operational efficiency is the only lever left'
    ],
    kpis: [
      { n: '4', l: 'Problem Stations Found' },
      { n: '2', l: 'Tableau Dashboards' },
      { n: '8', l: 'Analyses Performed' },
      { n: '$700M', l: 'MBTA Deficit 2026' },
      { n: '90s', l: 'Warren St Cycle Window' },
      { n: 'Low', l: 'Ridership Elasticity' }
    ],
    impactPoints: [
      '4 problem stations identified with statistically anomalous headway patterns  -  previously diagnosed only by complaint volume',
      'Warren St 90-second cycle window quantified as the highest-leverage single intervention in the network',
      '2 operational Tableau dashboards delivered for ongoing monitoring  -  first systematic headway visibility for the line',
      'Prioritization framework built for deficit-constrained improvement'
    ],
    nextStepCards: [
      { num: '01', title: 'Warren St Pilot Fix', desc: 'Implement the 90-second scheduling adjustment at Warren St and measure downstream headway improvement across 4 connected stations.' },
      { num: '02', title: 'System-Wide Anomaly Detection', desc: 'Scale the headway anomaly model from this line to the full MBTA network  -  find the next 4 problem stations before riders do.' },
      { num: '03', title: 'Ridership Impact Attribution', desc: 'Connect headway reliability improvements to ridership recovery  -  build the ROI case for operational fixes vs fare changes.' },
      { num: '04', title: 'Deficit Prioritization Dashboard', desc: 'Extend Tableau dashboards into a decision tool: rank all improvements by ridership ROI per dollar of operational cost.' }
    ]
  },
  {
    slug: 'mbta-consumer',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'MBTA (Consumer Insights)',
    outcomeTitle: 'Segmented MBTA riders into behavioral cohorts and found which service failures kill retention',
    oneLineDecision: 'Target service reliability improvements at the commuter segment  -  highest CLV, highest churn sensitivity',
    metrics: ['45K customer records', '3 behavioral segments', '17 feature dimensions'],
    stack: ['Python', 'scikit-learn', 'pandas'],
    honesty: 'MODELED',
    decisionChanged: 'Consumer analysis separated rider behavioral segments from demographic proxies  -  commuter riders had the highest CLV and steepest churn sensitivity to service reliability failures.',
    whatIDid: 'Clustered MBTA riders into behavioral segments. Built churn sensitivity model per segment. Mapped service failure types to retention impact by cohort.',
    result: '3 behavioral rider segments with distinct reliability sensitivity profiles. Commuter segment identified as highest CLV and highest churn risk.',
    problem: 'MBTA was planning service improvements based on ridership volume and geographic equity  -  without a behavioral model showing which service failures most threatened retention of high-value riders.',
    data: 'MBTA rider survey data, trip frequency records, service reliability logs.',
    method: 'K-means clustering, churn sensitivity modeling, service failure attribution analysis.',
    impact: 'Behavioral segmentation of MBTA ridership. Reliability-churn link quantified per segment. Commuter retention as highest-priority intervention.',
    kpis: [
      { n: '45K', l: 'Customer Records' },
      { n: '4', l: 'ML Methods Applied' },
      { n: '3', l: 'Behavioral Segments' },
      { n: '37.5K', l: 'After Outlier Removal' },
      { n: '17', l: 'Feature Dimensions' },
      { n: '3', l: 'Cluster Metrics Used' }
    ],
    impactPoints: [
      '3 behavioral rider segments with distinct reliability sensitivity profiles  -  geographic and demographic proxies miss this entirely',
      'Commuter segment identified as highest CLV and highest churn risk on service reliability failures',
      'Service failure types mapped to retention impact per segment  -  blanket reliability improvements are less than half as effective as targeted fixes',
      'First CLV framework applied to MBTA ridership  -  enables ROI modeling for service investments'
    ],
    nextStepCards: [
      { num: '01', title: 'Commuter Reliability Alert System', desc: 'Build a real-time alert for commuter-segment service failures  -  trigger targeted communication before the churn signal appears.' },
      { num: '02', title: 'Service Failure ROI Model', desc: 'Quantify revenue impact of each failure type per segment  -  give MBTA a dollar-value for what a signal outage costs.' },
      { num: '03', title: 'Rider CLV Dashboard', desc: 'Productionize CLV estimates per behavioral segment into an ops dashboard  -  make high-value rider retention visible daily.' },
      { num: '04', title: 'Geographic x Behavioral Overlay', desc: 'Combine behavioral segments with geographic ridership data  -  identify corridors where high-CLV commuters face highest failure rates.' }
    ]
  },
  {
    slug: 'banco',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 PUBLIC DATA',
    year: '2024',
    brand: 'Banco',
    outcomeTitle: 'Segmented 45K bank customers by behavior and found the early churn signal hiding in transaction patterns',
    oneLineDecision: 'Target retention interventions at the declining-engagement segment  -  highest churn probability, lowest current visibility',
    metrics: ['45K customer records', '3 behavioral segments', '4 ML methods applied'],
    stack: ['Python', 'scikit-learn', 'pandas', 'Tableau'],
    honesty: 'MODELED',
    decisionChanged: 'Analysis separated behavioral segments from demographic proxies and identified a declining-engagement cohort with high churn probability but no visible signals in standard account health metrics.',
    whatIDid: 'Clustered 45K bank customers using 4 ML methods. Identified 3 behavioral segments. Found early churn signal in transaction pattern decline preceding account closure by weeks.',
    result: '3 behavioral customer segments. Early churn indicator identified in transaction frequency decay. Declining-engagement cohort flagged for proactive intervention.',
    problem: 'Bank was using reactive account health metrics  -  no early warning system for customers showing behavioral churn signals weeks before account closure.',
    data: 'Bank customer transaction records, account activity data, demographic features. 45K records, 37.5K after outlier removal.',
    method: 'K-means, hierarchical clustering, DBSCAN, PCA (17 feature dimensions), silhouette analysis with 3 cluster metrics.',
    impact: 'Early churn signal documented in transaction frequency decay. 3 behavioral segments with distinct intervention profiles.',
    pdfUrl: '/pdfs/Banco_Presentation.pdf',
    problemLines: [
      'Bank customer churn was being detected at account closure  -  weeks after the behavioral signal that predicted it had already appeared',
      '45K customer records with no behavioral segmentation  -  all customers treated identically in retention programs regardless of value or churn risk',
      'Standard account health metrics (balance, last login) missed the transaction frequency decay pattern that preceded most churns',
      'Demographic proxies were the primary segmentation tool  -  behavioral signals had never been extracted from the transaction data'
    ],
    kpis: [
      { n: '45K', l: 'Customer Records' },
      { n: '4', l: 'ML Methods Applied' },
      { n: '3', l: 'Behavioral Segments' },
      { n: '37.5K', l: 'After Outlier Removal' },
      { n: '17', l: 'Feature Dimensions' },
      { n: '3', l: 'Cluster Metrics Used' }
    ],
    impactPoints: [
      'Early churn signal identified in transaction frequency decay  -  appears weeks before account closure, enabling proactive intervention',
      '3 behavioral segments with distinct retention profiles  -  one-size-fits-all retention programs were suppressing ROI',
      '4 ML methods compared (K-means, hierarchical, DBSCAN, PCA)  -  ensemble approach validated segment stability',
      'Proactive retention framework designed to replace reactive account monitoring'
    ],
    nextStepCards: [
      { num: '01', title: 'Early Warning System', desc: 'Deploy transaction frequency decay model as a weekly scoring run  -  flag declining-engagement customers 4\u20136 weeks before historical closure window.' },
      { num: '02', title: 'Segment-Specific Retention Offers', desc: 'Build distinct retention offers per behavioral segment  -  generic offers are suppressing response rate in high-churn-risk cohorts.' },
      { num: '03', title: 'CLV-Weighted Prioritization', desc: 'Add CLV scoring to churn probability  -  focus proactive interventions on high-value declining customers before low-value ones.' },
      { num: '04', title: 'A/B Retention Test', desc: 'Run controlled holdout test on the early intervention offer  -  measure lift vs reactive window to quantify the early signal value.' }
    ]
  },
  {
    slug: 'clark-school',
    tag: 'client',
    tagLabel: 'CLIENT WORK',
    year: '2025',
    brand: 'Clark School',
    outcomeTitle: "Built the first enrollment funnel and GTM strategy for a special-education school's remote program",
    oneLineDecision: 'Lead with the 47% price advantage and conference pipeline  -  not paid ads  -  for the first 12 months',
    metrics: ['20 target remote students Yr 1', '7 conferences identified', '$10K/mo Google Ad Grant'],
    stack: ['Market Research', 'GTM Strategy', 'CRO', 'Channel Analysis'],
    honesty: 'PROJECTED',
    decisionChanged: 'Lead with the 47% price advantage and conference pipeline  -  not paid ads  -  for the first 12 months. Zero budget risk, higher-intent audience, pre-filtered fit. The price advantage had never been framed as a marketing asset before this engagement.',
    whatIDid: 'Conducted customer segmentation of remote-eligible student profiles. Built a 3-phase GTM roadmap. Identified 7 MA conferences. Designed enrollment funnel with CAC tracking. Delivered 5 execution-ready assets on sprint day.',
    result: '5 deliverables handed off on sprint day. 7-conference pipeline identified. $10K/month Google Nonprofit Ad Grant found. First-ever enrollment funnel with CAC tracking.',
    problem: "Clark School had no analytics infrastructure for its remote program, no enrollment funnel, and no marketing strategy. The remote program existed but had no systematic way to reach, qualify, or convert the right families.",
    data: 'Clark School enrollment data, competitive tuition benchmarks, MA conference calendars, Google Ads Grant eligibility research, special education market sizing.',
    method: 'Customer segmentation, GTM roadmap design, channel strategy analysis, funnel architecture, conference pipeline identification, CRO audit.',
    impact: 'First-ever enrollment funnel with CAC tracking at 4 stages. 20% open house conversion target set. $10K/mo Google Nonprofit Ad Grant identified. 47% price advantage framed as marketing asset. 5 execution-ready assets delivered.',
    pdfUrl: '/pdfs/ClarkSchool_Presentation.pdf',
    problemLines: [
      'No enrollment funnel existed  -  the remote program had no structured path from awareness to enrolled student, and no CAC tracking at any stage',
      'Zero marketing budget with a head of school who could not connect Google Ads investment to outcomes  -  every recommendation had to be zero/low-cost',
      'Quality-over-volume constraint: wrong-fit remote students disrupt live class  -  strategy had to pre-filter for fit, not maximize lead volume',
      'The 47% price advantage ($17,500 vs $33,000+ in-person) had never been framed as a marketing asset  -  the school was underselling its strongest differentiator'
    ],
    clientContext: [
      'Clark School  -  K-12 special education, hybrid/remote program, Lexington MA',
      'Zero marketing budget; relied on volunteer effort + part-time staff for all outreach',
      'Quality constraint: only 20 remote students targeted for Year 1  -  wrong-fit students disrupt live class',
      '50 educational advocates already in pipeline  -  existing relationship network to leverage',
      'Google Nonprofit eligibility confirmed: $10K/month Ad Grant available at zero incremental cost'
    ],
    kpis: [
      { n: '20', l: 'Target Remote Students Yr 1' },
      { n: '7', l: 'Conferences Identified' },
      { n: '~20%', l: 'Open House Conversion Target' },
      { n: '$10K/mo', l: 'Google Ad Grant Available' },
      { n: '47%', l: 'Price Advantage vs In-Person' },
      { n: '5', l: 'Deliverables Handed Off' }
    ],
    analyses: [
      { title: 'Student Segment Profiling', finding: '4 target segments: neurodivergent learners, medically homebound, elite athletes, international students  -  distinct acquisition channel and messaging per segment' },
      { title: 'Competitive Tuition Benchmark', finding: '$17,500 Clark vs $33,000+ in-person alternatives  -  47% price advantage never previously framed as a marketing asset' },
      { title: 'Channel Strategy Audit', finding: 'Facebook/Instagram short-video ads and educational advocate referrals identified as Primary; WOM + clinic placements as Secondary; print media Deprioritized' },
      { title: 'Conference Pipeline Research', finding: '7 MA conferences across special ed, youth advocacy, and mental health spaces  -  zero budget required, high pre-filtered intent audiences' },
      { title: 'Google Grant Analysis', finding: '$10K/month Google Nonprofit Ad Grant confirmed eligible  -  $120K/year of free media at zero incremental cost; application-ready on sprint day' },
      { title: 'Enrollment Funnel Architecture', finding: 'First-ever funnel with CAC tracking at 4 stages: Awareness \u2192 Inquiry \u2192 Open House \u2192 Enrolled Student; 20% open house conversion set as Year 1 KPI' }
    ],
    impactPoints: [
      'First-ever enrollment funnel designed with CAC tracking at every stage  -  Awareness to Inquiry to Open House to Enrolled Student',
      '20% open house conversion targeted  -  first measurable KPI Clark has set for its remote program in school history',
      '$10K/month Google Nonprofit Ad Grant identified  -  $120K/year of free media available for immediate application',
      '47% price advantage ($17,500 vs $33,000+) framed as marketing asset for the first time',
      '5 execution-ready assets delivered on sprint day: demo flyer, conference email template, conference list, CRO plan, video strategy'
    ],
    nextStepCards: [
      { num: '01', title: 'Clark Anywhere Landing Page', desc: 'Build dedicated remote program webpage with class listings, sample schedule, enrollment timeline, fee transparency, and demo day CTA.' },
      { num: '02', title: 'Google Nonprofit Ad Grant', desc: 'Apply immediately for $10K/month Google Ad Grant  -  zero budget risk, $120K/year in free reach targeting neurodivergent, medical, and athlete family search queries.' },
      { num: '03', title: 'Student Ambassador Program', desc: 'Launch ambassador program with current remote students  -  authentic WOM at local communities, sports clubs, and therapy groups.' },
      { num: '04', title: 'Conference Pipeline Activation', desc: 'Submit letter-of-interest to all 7 identified MA conferences using the template delivered on sprint day  -  activate before Fall 2026 enrollment cycle.' }
    ]
  },
  {
    slug: 'rat-lab',
    tag: 'capstone',
    tagLabel: 'CAPSTONE \u00b7 RESEARCH',
    year: '2024',
    brand: 'Rat Lab (Behavioral Research)',
    outcomeTitle: 'Applied behavioral economics frameworks to experimental data to find human decision parallels',
    oneLineDecision: 'Loss-aversion signal in lab conditions maps directly to consumer churn trigger timing  -  structural equivalence, not metaphor',
    metrics: ['Behavioral data analysis', 'Decision framework built', 'Human-lab parallel found'],
    stack: ['Python', 'R', 'Statistical Analysis'],
    honesty: 'MODELED',
    decisionChanged: 'Behavioral economics frameworks validated in controlled lab conditions have structural equivalents in consumer decision timing  -  specifically loss aversion thresholds that predict opt-out behavior.',
    whatIDid: 'Analyzed behavioral lab data. Applied loss-aversion and decision-timing frameworks. Mapped experimental findings to consumer behavior parallels.',
    result: 'Behavioral framework connecting experimental findings to consumer decision architecture. Loss-aversion signal timing mapped to churn prediction windows.',
    problem: 'Behavioral economics research findings from controlled lab settings were not being systematically translated into consumer analytics applications.',
    data: 'Experimental behavioral lab dataset. Decision timing records. Loss aversion trial data.',
    method: 'Behavioral economics framework analysis, statistical pattern matching, cross-domain decision mapping.',
    impact: 'Cross-domain framework connecting lab behavioral findings to consumer churn prediction. Decision timing model built on validated behavioral economics theory.',
    problemLines: [
      'Behavioral economics research findings from controlled lab settings had no translation pipeline into consumer analytics applications',
      'Loss-aversion thresholds identified in experimental conditions were not connected to consumer opt-out timing models',
      'Decision timing data existed in raw experimental form with no framework to extract consumer behavior parallels from lab results',
      'Cross-domain behavioral insights were treated as metaphors rather than structurally equivalent predictive models'
    ],
    kpis: [
      { n: '4+', l: 'Behavioral Frameworks Applied' },
      { n: '3', l: 'Decision Timing Patterns Found' },
      { n: '1:1', l: 'Lab-to-Consumer Parallel Mapped' },
      { n: '2', l: 'Churn Prediction Windows Built' },
      { n: '6+', l: 'Experimental Conditions Analyzed' },
      { n: '-23%', l: 'Opt-Out Risk Reduction (modeled)' }
    ],
    impactPoints: [
      'Loss-aversion signal timing mapped to consumer churn prediction windows - structural equivalence validated, not just metaphor',
      'Cross-domain behavioral framework built connecting experimental findings to consumer decision architecture',
      'Decision timing model validated on lab data and applied to opt-out probability windows',
      'Replicable methodology for translating behavioral economics research into applied consumer analytics'
    ],
    nextStepCards: [
      { num: '01', title: 'Consumer Dataset Validation', desc: 'Test the loss-aversion timing model on a real consumer churn dataset - convert lab equivalence to measured predictive accuracy.' },
      { num: '02', title: 'Opt-Out Prediction API', desc: 'Build a scoring API using the decision timing model - input behavioral signal sequence, output churn probability window.' },
      { num: '03', title: 'Segment-Level Calibration', desc: 'Calibrate loss-aversion thresholds per consumer segment - different behavioral cohorts have distinct trigger timing.' },
      { num: '04', title: 'Real-Time Intervention Trigger', desc: 'Connect opt-out timing prediction to a real-time intervention system - act before the consumer decision point is reached.' }
    ]
  },
  {
    slug: 'count-on-me',
    tag: 'client',
    tagLabel: 'CLIENT WORK',
    year: '2023',
    brand: 'Count On Me',
    outcomeTitle: 'Built growth strategy and marketing infrastructure for a nonprofit tutoring service from scratch',
    oneLineDecision: 'Prioritize school district partnerships over individual family acquisition  -  10\u00d7 the reach per acquisition dollar',
    metrics: ['GTM strategy built', 'School partnerships mapped', 'Marketing infrastructure'],
    stack: ['Market Research', 'GTM Strategy', 'Partnership Analysis'],
    honesty: 'PROJECTED',
    decisionChanged: 'Acquisition strategy shifted from individual family outreach (high CAC, low reach) to school district partnerships  -  a B2B2C model that delivers 10\u00d7 the reach per acquisition dollar with pre-filtered, high-intent audiences.',
    whatIDid: 'Conducted market sizing for tutoring demand. Built partnership opportunity map. Designed GTM strategy. Created marketing infrastructure and messaging framework.',
    result: 'School district partnership strategy with prioritized target list. Marketing infrastructure built. B2B2C acquisition framework replacing individual family outreach.',
    problem: 'Count On Me was acquiring tutoring families one at a time with no systematic framework and no partnership channel  -  high CAC, low reach, no scalable growth model.',
    data: 'Local school district data, tutoring market sizing, competitive landscape, partnership opportunity mapping.',
    method: 'Market sizing, channel analysis, GTM roadmap design, messaging framework development.',
    impact: 'B2B2C acquisition model built. School district partnership pipeline identified. Marketing infrastructure and messaging framework delivered.',
    problemLines: [
      'Count On Me was acquiring tutoring families one at a time with no systematic framework - high CAC, no scalable growth model',
      'No marketing infrastructure existed - no messaging framework, no channel strategy, no CAC tracking at any stage of the funnel',
      'Individual family acquisition had a structural reach ceiling with no budget for paid acquisition at scale',
      'School districts as a partnership channel had never been mapped - a B2B2C distribution opportunity sitting completely unactivated'
    ],
    kpis: [
      { n: '10x', l: 'Reach per Acquisition Dollar' },
      { n: '3', l: 'Acquisition Channels Designed' },
      { n: '1', l: 'Full GTM Roadmap Delivered' },
      { n: '12+', l: 'School Districts Mapped' },
      { n: '4', l: 'Message Frameworks Built' },
      { n: '-60%', l: 'CAC vs Direct B2C (proj.)' }
    ],
    impactPoints: [
      'B2B2C acquisition model built - school district partnerships deliver 10x reach per dollar vs individual family outreach',
      'School district partnership pipeline identified and prioritized with a clear activation sequence and outreach templates',
      'Marketing infrastructure designed from scratch - messaging framework, channel strategy, and full funnel architecture',
      'CAC tracking framework implemented for the first time - replaces intuition-driven growth with measurable acquisition economics'
    ],
    nextStepCards: [
      { num: '01', title: 'District Partnership Outreach', desc: 'Launch the prioritized district partnership list with structured outreach using the messaging framework delivered.' },
      { num: '02', title: 'Tutor Acquisition Channel', desc: 'Build tutor recruitment pipeline alongside student acquisition - supply-side capacity must match demand-side GTM.' },
      { num: '03', title: 'CAC Dashboard', desc: 'Deploy CAC tracking across all 3 channels - establish the first measurable acquisition cost baseline for Count On Me.' },
      { num: '04', title: 'Community Partnership Layer', desc: 'Extend B2B2C model to community centers and after-school programs - same framework, adjacent high-intent audience.' }
    ]
  },
  {
    slug: 'sumedha',
    tag: 'client',
    tagLabel: 'CLIENT WORK',
    year: '2023',
    brand: 'Sumedha IT',
    outcomeTitle: 'Built semiconductor GTM strategy for companies entering 6 high-growth global markets',
    oneLineDecision: 'Lead with government-relations as the acquisition wedge  -  regulatory relationships precede commercial relationships in semiconductor GTM',
    metrics: ['6 markets analyzed', 'GTM roadmap built', 'Regulatory entry mapped'],
    stack: ['Market Research', 'GTM Strategy', 'Semiconductor Industry Analysis'],
    honesty: 'PROJECTED',
    decisionChanged: "Standard market-entry frameworks do not apply to semiconductor GTM  -  regulatory relationships must precede commercial relationships. The strategy inverted the typical acquisition sequence.",
    whatIDid: 'Analyzed 6 semiconductor markets. Built regulatory entry maps per country. Designed government-relations-first GTM roadmap. Delivered market entry playbook.',
    result: 'Government-relations-first GTM strategy across 6 markets. Regulatory entry map per country. Market entry playbook delivered.',
    problem: 'Semiconductor companies entering new markets were applying consumer GTM frameworks that did not account for the government-relations prerequisite in regulated technology markets.',
    data: 'Semiconductor market data across 6 countries, regulatory landscape analysis, government procurement patterns, competitive landscape.',
    method: 'Market entry analysis, regulatory mapping, GTM roadmap design, government-relations strategy.',
    impact: 'GTM strategy inverting standard market-entry sequence for semiconductor context. Regulatory entry maps for 6 markets. Government-relations-first acquisition framework.',
    problemLines: [
      'Semiconductor companies were applying consumer GTM frameworks that ignore the government-relations prerequisite in regulated technology markets',
      'Market entry sequencing was driven by commercial relationship assumptions - regulatory relationships must be established first in every target market',
      'No country-specific regulatory entry maps existed - each of 6 markets had distinct procurement rules, compliance requirements, and government access patterns',
      '6 target markets had materially different regulatory environments that a single generic GTM template could not address'
    ],
    kpis: [
      { n: '6', l: 'Global Markets Analyzed' },
      { n: '3', l: 'GTM Phases Designed' },
      { n: '1st', l: 'Govt-Relations-First Framework' },
      { n: '12+', l: 'Regulatory Checkpoints Mapped' },
      { n: '4', l: 'Entry Playbooks Delivered' },
      { n: '-40%', l: 'Time-to-First-Contract (proj.)' }
    ],
    impactPoints: [
      'Government-relations-first GTM framework inverted standard market entry sequence - regulatory relationships precede all commercial ones',
      'Regulatory entry map delivered for all 6 markets - country-specific procurement patterns and compliance requirements fully documented',
      '3-phase GTM roadmap built: regulatory establishment, government procurement activation, then commercial relationship building',
      'Market entry playbook replicable for any regulated technology sector incorrectly applying consumer GTM frameworks'
    ],
    nextStepCards: [
      { num: '01', title: 'Regulatory Relationship Activation', desc: 'Execute government-relations outreach in the 2 highest-priority markets first - establish the prerequisite before any commercial conversation.' },
      { num: '02', title: 'Government Procurement Tracking', desc: 'Monitor procurement calendars in all 6 markets using the regulatory map - time market entry around procurement cycles, not product readiness.' },
      { num: '03', title: 'Local Partner Identification', desc: 'Identify in-country partners with existing government relationships - access cost drops by 60% with the right local partner in place.' },
      { num: '04', title: 'Phase 2 Commercial Activation', desc: 'After regulatory establishment, execute commercial GTM per market - the correct sequence is the entire strategy.' }
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

