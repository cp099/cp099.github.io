import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'licenses-and-certifications',
  title: 'Professional Licenses & Certifications',
  date: '2026-08-15',
  category: 'journey',
  type: 'learning',
  uid: 'CPP-CRT-2026-LICENSES',
  summary: 'Verified domain credentials spanning financial markets, management accounting, artificial intelligence fundamentals, and digital media production.',
  dependencies: ['Financial Markets', 'Management Accounting', 'Machine Learning', 'Data Literacy', 'Adobe Creative Cloud'],
  blocks: [
    // INTRO
    {
      type: 'paragraph',
      content: 'True technical competence requires both practical shipping experience and structured domain rigor. This registry documents formal certifications completed across <strong>institutional finance</strong>, <strong>management accounting</strong>, <strong>artificial intelligence</strong>, and <strong>creative media</strong>.'
    },

    {
      type: 'highlight',
      content: 'Certifications provide theoretical grounding; execution transforms that theory into functional systems.'
    },

    // METRICS OVERVIEW
    {
      type: 'heading',
      level: 2,
      content: 'Credential Summary'
    },
    {
      type: 'data',
      metrics: [
        { label: 'Total Verified', value: '5 Certifications' },
        { label: 'Primary Domains', value: 'Finance & AI' },
        { label: 'Key Issuer', value: 'Bloomberg / Corporate' },
        { label: 'Status', value: 'Active & Verified' }
      ]
    },

    // SECTION 1: FINANCE & ACCOUNTING
    {
      type: 'heading',
      level: 2,
      content: 'Financial Markets & Corporate Accounting'
    },
    {
      type: 'paragraph',
      content: 'Foundational coursework designed to master institutional market dynamics, financial reporting standards, and corporate decision metrics:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Bloomberg Finance Fundamentals: Core concepts in institutional financial markets, equity valuation, fixed-income mathematics, currencies, and macroeconomic indicators.',
        'Introduction to Management Accounting: Cost classification, variance analysis, budgeting, and performance measurement for internal executive decision-making.',
        'DhanDrishti – Financial Literacy Program: Practical capital planning, financial instruments, credit mechanisms, and investment literacy.'
      ]
    },

    // SECTION 2: ARTIFICIAL INTELLIGENCE & TECHNOLOGY
    {
      type: 'heading',
      level: 2,
      content: 'Technology & Analytical Modeling'
    },
    {
      type: 'paragraph',
      content: 'Validating the computational side of systems architecture and algorithmic workflows:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Artificial Intelligence Fundamentals: Machine learning paradigms, supervised and unsupervised learning, evaluation metrics, and neural network concepts applied to real-world datasets.'
      ]
    },

    // SECTION 3: CREATIVE & VISUAL SYSTEMS
    {
      type: 'heading',
      level: 2,
      content: 'Digital Media & Visual Systems'
    },
    {
      type: 'paragraph',
      content: 'Precision in digital asset management and visual communication:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Adobe Lightroom CC Photo Editing — Your Lightroom Masterclass: Raw color grading, tonal mapping, optical correction, and high-resolution export pipelines for digital presentation.'
      ]
    },

    // CLOSING NOTE
    {
      type: 'highlight',
      content: 'These qualifications directly inform the architecture of projects like BreatheEasy, Personal OS, and financial data modeling workflows.'
    }
  ]
};
