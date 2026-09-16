// src/content/journey/data-analysis.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'skill-data-analysis',
  title: 'Core Capability: Data Analysis & Empirical Modeling',
  date: '2025-01-24',
  category: 'journey',
  type: 'learning',
  uid: 'CPP-SKL-2025-DATA-ANALYSIS',

  summary: 'Extracting latent signals from high-entropy telemetry and financial records — navigating the 80% gap between sterile textbook datasets and production data pipelines through the Python scientific ecosystem.',

  dependencies: [
    'Python Ecosystem',
    'Pandas & NumPy',
    'Matplotlib & Seaborn',
    'BreatheEasy ML',
    'Sherlock v2.0',
    'Bloomberg Terminal'
  ],

  blocks: [
    // OPENING
    {
      type: 'paragraph',
      content: 'At its essence, data analysis is the art of extracting hidden patterns from raw datasets while aggressively filtering out noise and irrelevant artifacts. Whether parsing real-time sensor metrics or corporate valuation ratios, raw data is inherently chaotic; the analyst’s role is to enforce order, verify integrity, and isolate the underlying signal.'
    },

    {
      type: 'highlight',
      content: 'Textbooks only prepare you for the first 20% of data science. The remaining 80% is the grind of real-world telemetry: managing broken streams, tuning ingestion pipelines under load, and developing the pattern intuition that comes from hundreds of hours of staring directly at data.'
    },

    // METRICS DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'Competency', value: 'Data Analysis' },
        { label: 'Primary Language', value: 'Python 3' },
        { label: 'Core Libraries', value: 'NumPy, Pandas' },
        { label: 'Visualization', value: 'Matplotlib, Seaborn' }
      ]
    },

    // THE TEXTBOOK GAP: LIVE TELEMETRY VS SYNTHETIC LABS
    {
      type: 'heading',
      level: 2,
      content: 'The 80% Reality Gap: Handling Live Systems'
    },
    {
      type: 'paragraph',
      content: 'Academic coursework and introductory certifications present clean, pre-scrubbed CSVs where outliers are obvious and null values are easily dropped. In production environments like <a href="/item/breatheeasy" class="text-cyan underline hover:text-cyan-bright font-medium">BreatheEasy</a>, reality is vastly more demanding.'
    },
    {
      type: 'paragraph',
      content: 'Handling live continuous telemetry from government CPCB environmental feeds means contending with dropped connections, sensor calibration drift, missing readings, and asynchronous latency spikes. When live data streams into a system continuously, pipelines must be iteratively tuned to handle volume without choking or corrupting downstream predictive models.'
    },

    // ANALYTICAL WORKFLOW & TOOLCHAIN
    {
      type: 'heading',
      level: 2,
      content: 'The Quantitative Toolkit'
    },
    {
      type: 'paragraph',
      content: 'My analytical workflow centers on the foundational Python scientific stack:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>NumPy:</strong> Vectorized matrix math, numerical transformations, and high-speed statistical operations.',
        '<strong>Pandas:</strong> Dataframe reshaping, multi-index aggregation, temporal rolling windows, and data munging.',
        '<strong>Matplotlib & Seaborn:</strong> Exploratory data analysis (EDA), correlation heatmaps, residual distribution plots, and trend-line visualizations.',
        '<strong>Bloomberg Terminal & Tabular Models:</strong> Extracting historical equity multiples, tracking cross-market correlations, and structuring clean financial balance sheets at Valora.'
      ]
    },

    // DOMAIN-AGNOSTIC PATTERN RECOGNITION
    {
      type: 'heading',
      level: 2,
      content: 'Domain-Agnostic Pattern Recognition'
    },
    {
      type: 'paragraph',
      content: 'Because I have spent extensive time inspecting tabular logs, time-series feeds, and metric ledgers across wildly disparate domains, analytical intuition has become second nature. Patterns reveal themselves regardless of the data’s origin: whether diagnosing inventory turn anomalies in <a href="/item/sherlock-python" class="text-cyan underline hover:text-cyan-bright font-medium">Sherlock v2.0</a>, tracking air pollutant diffusion curves in the <a href="/item/india-air-quality-dataset" class="text-cyan underline hover:text-cyan-bright font-medium">India Air Quality Dataset</a>, or identifying margin compression in corporate valuation.'
    },

    // LINKED SYSTEM NODES
    {
      type: 'heading',
      level: 2,
      content: 'Linked Experiences & Applied Builds'
    },
    {
      type: 'paragraph',
      content: 'This capability forms the empirical backbone of several major systems in the Personal OS archive:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<a href="/item/breatheeasy" class="text-cyan underline hover:text-cyan-bright font-medium">BreatheEasy Air Quality Platform</a>: Real-time CPCB telemetry ingestion, rolling temporal averaging, and XGBoost AQI forecasting.',
        '<a href="/item/india-air-quality-dataset" class="text-cyan underline hover:text-cyan-bright font-medium">India Air Quality Dataset</a>: Scraping, cleaning, normalizing, and publishing high-granularity environmental data across national stations.',
        '<a href="/item/sherlock-python" class="text-cyan underline hover:text-cyan-bright font-medium">Sherlock v2.0</a>: Designing transaction tracking schemas, lending analytics, and inventory audit logs.',
        '<a href="/item/valora-valuation-society" class="text-cyan underline hover:text-cyan-bright font-medium">Technical Associate (Valora)</a>: Running company comparisons, financial multiple regressions, and Bloomberg market analytics.',
        '<a href="/item/licenses-and-certifications" class="text-cyan underline hover:text-cyan-bright font-medium">IBM Data Science & ML Suite</a>: Verified mastery across Python 101 for Data Science, Data Visualization with Python, Machine Learning with Python, and AI Fundamentals.'
      ]
    }
  ]
};
