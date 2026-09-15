import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'christ-university-bangalore',
  title: 'Christ University, Bangalore — B.Com (Applied Finance & Analytics)',
  date: '2026-06-01',
  category: 'journey',
  type: 'education',
  uid: 'CPP-EDU-2030-CHRIST',
  summary: 'Undergraduate studies focusing on quantitative financial analysis, data analytics, corporate accounting, and modern institutional systems at Christ University.',
  dependencies: ['Financial Modeling', 'Data Analytics', 'Corporate Accounting', 'Management Systems', 'Python / R'],
  blocks: [
    // OPENING HOOK
    {
      type: 'paragraph',
      content: 'Entering <strong>Christ University</strong> to pursue a Bachelor of Commerce in <strong>Applied Finance and Analytics</strong> represents the natural convergence of my builder mindset and economic curiosities. Rather than viewing technology and commerce as divergent tracks, this program places quantitative data science directly at the service of financial decision-making.'
    },

    {
      type: 'highlight',
      content: 'True leverage exists at the intersection: where systems architecture meets capital allocation, financial modeling, and data-driven strategy.'
    },

    // CORE METRICS
    {
      type: 'heading',
      level: 2,
      content: 'Academic Architecture'
    },
    {
      type: 'data',
      metrics: [
        { label: 'Institution', value: 'Christ University' },
        { label: 'Degree', value: 'B.Com (Applied Finance & Analytics)' },
        { label: 'Timeline', value: '2026 — 2030' },
        { label: 'Location', value: 'Bangalore, India' }
      ]
    },

    // CURRICULUM FOCUS
    {
      type: 'heading',
      level: 2,
      content: 'Focus Areas & Quantitative Domains'
    },
    {
      type: 'paragraph',
      content: 'The curriculum is built around the rigorous analysis of financial statements, investment strategies, econometric modeling, and enterprise data pipelines. Key pillars of study include:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Applied Financial Analytics: Applying statistical methods and predictive models to market data and valuation workflows.',
        'Corporate Accounting & Auditing: Understanding standard enterprise accounting structures, statutory frameworks, and balance sheet mechanics.',
        'Institutional Financial Markets: Analyzing equity valuation, debt instruments, derivatives, and systemic market liquidity.',
        'Business Decision-Making: Bridging technical algorithms with executive management, risk mitigation, and commercial execution.'
      ]
    },

    // SYSTEMS PERSPECTIVE
    {
      type: 'heading',
      level: 2,
      content: 'A Systems Perspective on Capital'
    },
    {
      type: 'paragraph',
      content: 'Having spent years building software environments and IoT systems, I approach financial structures with an engineering mindset. Modern finance is, fundamentally, an interconnected software and information problem: transaction streams, ledger immutability, liquidity feedback loops, and portfolio risk parameters behave according to algorithmic principles.'
    },
    {
      type: 'paragraph',
      content: 'At Christ University, the objective is to build deep foundational domain competence across accounting standards (IFRS, Ind AS), econometric modeling, and enterprise analytics, while continuously shipping software systems that bring transparency to commercial data.'
    },

    // REFLECTION
    {
      type: 'highlight',
      content: 'The goal across the next four years is clear: master the language of money, build scalable analytical tooling, and orchestrate systems that bridge technology and commerce.'
    }
  ]
};
