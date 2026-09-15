// src/content/work/byc-student-council.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'byc-student-council-representative',
  title: 'Student Council BYC — School-Level Student Council Representative',
  date: '2026-07-01',
  category: 'work',
  type: 'role',
  uid: 'CPP-ROLE-2026-BYC-COUNCIL',

  summary: 'Representing the School of Commerce, Finance & Accountancy on the BYC Student Council — facilitating Open Forums, bridging student concerns with faculty leadership, and mediating pragmatic institutional solutions.',

  dependencies: [
    'Student Council BYC',
    'Student Governance',
    'School of Commerce Finance & Accountancy',
    'Institutional Mediation',
    'Open Forums'
  ],

  blocks: [
    // OPENING
    {
      type: 'paragraph',
      content: 'Entering university, I wanted to take on serious institutional responsibility in an area where I already held deep experience. Having led Cauvery House as Captain and Vice Captain, and founded the Pledge Council in high school, stepping into the School-Level Student Council at Christ University was a deliberate continuation of my commitment to student governance and systemic advocacy.'
    },

    {
      type: 'highlight',
      content: 'Effective representation isn’t about confrontation — it’s about active listening across both sides, identifying genuine constraints, and building a diplomatic common ground that delivers workable solutions.'
    },

    // METRICS / STATUS DATA
    {
      type: 'data',
      metrics: [
        { label: 'Role', value: 'Council Representative' },
        { label: 'Council', value: 'Student Council BYC' },
        { label: 'School', value: 'Commerce, Finance & Acc.' },
        { label: 'Tenure', value: 'Jul 2026 – Present' }
      ]
    },

    // CONTEXT & FOUNDATIONAL EXPERIENCE
    {
      type: 'heading',
      level: 2,
      content: 'Context & Prior Governance Foundation'
    },
    {
      type: 'paragraph',
      content: 'My earlier leadership positions taught me how to operate under scrutiny, coordinate large cohorts, and represent collective interests responsibly. At Christ University, the scale and nature of representation matured: university peers have distinct academic requirements, professional ambitions, and institutional expectations that demand articulate, evidence-backed advocacy.'
    },

    // OPEN FORUMS & ADVOCACY WORKFLOWS
    {
      type: 'heading',
      level: 2,
      content: 'Open Forums & Academic Representation'
    },
    {
      type: 'paragraph',
      content: 'As representative for the School of Commerce, Finance & Accountancy, a core responsibility is convening and conducting Open Forum sessions. These forums provide an open channel where students raise both academic concerns (curriculum pacing, continuous internal assessments, resource accessibility) and general campus welfare issues. I document these discussions into formal, structured reports submitted directly to faculty coordinators and university-level council heads.'
    },

    // CORE RESPONSIBILITIES
    {
      type: 'heading',
      level: 2,
      content: 'Core Responsibilities & Delivery'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Serve as the primary liaison between undergraduate students, departmental faculty, and the University Student Council',
        'Organize and moderate regular Open Forum sessions to surface, verify, and catalog student concerns',
        'Draft rigorous, objective feedback reports and policy recommendations for institutional review',
        'Advocate for student academic welfare, schedule optimization, and campus resource improvements',
        'Collaborate with cross-departmental council members to support university-wide cultural, academic, and civic initiatives'
      ]
    },

    // INSTITUTIONAL DIPLOMACY & RESOLUTION
    {
      type: 'heading',
      level: 2,
      content: 'The Architecture of Diplomatic Mediation'
    },
    {
      type: 'paragraph',
      content: 'Navigating between student demands and administrative requirements requires high emotional intelligence and practical pragmatism. When conflicts or concerns arise, taking an extreme stance rarely succeeds. My approach is to listen impartially to both parties, understand the faculty’s logistical parameters alongside the students’ genuine frustrations, and negotiate a common diplomatic ground that resolves the core issue while upholding institutional integrity.'
    }
  ]
};
