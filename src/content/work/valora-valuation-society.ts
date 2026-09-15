// src/content/work/valora-valuation-society.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'valora-valuation-society',
  title: 'Valora: The Valuation Society — Technical Associate',
  date: '2026-07-01',
  category: 'work',
  type: 'role',
  uid: 'CPP-ROLE-2026-VALORA',

  summary: 'Serving as Technical Associate at Valora, applying quantitative research, Bloomberg Terminal market intelligence, and valuation modeling methodologies toward financial analysis and capital market evaluation.',

  dependencies: [
    'Bloomberg Terminal',
    'Financial Modeling',
    'Market Analysis',
    'Corporate Valuation',
    'Applied Finance & Analytics'
  ],

  blocks: [
    // OPENING
    {
      type: 'paragraph',
      content: 'My entry into Valora: The Valuation Society was driven by a focused objective: to understand how financial markets operate from the inside out. With long-term aspirations of becoming a financial analyst, I wanted an environment where theory translates directly into practical stock analysis, company valuation, and real-time market data evaluation.'
    },

    {
      type: 'highlight',
      content: 'Bridging quantitative discipline with capital markets — utilizing institutional tools like the Bloomberg Terminal to conduct real-world stock analysis and master valuation from first principles.'
    },

    // METRICS / STATUS DATA
    {
      type: 'data',
      metrics: [
        { label: 'Role', value: 'Technical Associate' },
        { label: 'Organization', value: 'Valora: Valuation Society' },
        { label: 'Tenure', value: 'Jul 2026 – Present' },
        { label: 'Primary Platform', value: 'Bloomberg Terminal' }
      ]
    },

    // CONTEXT & INITIATIVE
    {
      type: 'heading',
      level: 2,
      content: 'Context & Institutional Focus'
    },
    {
      type: 'paragraph',
      content: 'Valora serves as a specialized student-led forum dedicated to business valuation, equity research, and financial market literacy. Joining the society alongside my B.Com in Applied Finance and Analytics at Christ University created a powerful synergy: classroom principles of corporate accounting and quantitative finance immediately feed into active market research and valuation exercises.'
    },

    // ROLE & RESPONSIBILITIES
    {
      type: 'heading',
      level: 2,
      content: 'Core Responsibilities & Execution'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Support the development and execution of technical and finance-related initiatives undertaken by the society',
        'Contribute to research, analysis, and preparation of rigorous materials covering business valuation and financial markets',
        'Conduct real-time market tracking and equity evaluation utilizing institutional resources including the Bloomberg Terminal',
        'Collaborate with society members on structured learning projects and peer initiatives centered on practical valuation modeling',
        'Develop practical fluency across core valuation methodologies, financial statement decomposition, and data-driven investment analysis'
      ]
    },

    // METHODOLOGY & TOOLS
    {
      type: 'heading',
      level: 2,
      content: 'Analytical Frameworks & Tools'
    },
    {
      type: 'paragraph',
      content: 'The role emphasizes translating corporate fundamentals into actionable models. From evaluating cash flow sustainability and capital structures to running comparable company analysis and examining industry-specific multiples, the goal is building a methodical, data-backed approach to financial decision-making.'
    },
    {
      type: 'paragraph',
      content: 'By integrating Bloomberg Terminal navigation with advanced spreadsheet modeling, I focus on extracting verifiable data points, understanding macroeconomic drivers, and preparing structured reports that align with industry-standard financial analysis workflows.'
    }
  ]
};
