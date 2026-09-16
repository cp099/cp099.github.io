// src/content/journey/stakeholder-management.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'skill-stakeholder-management',
  title: 'Core Capability: Stakeholder Management & Alignment',
  date: '2026-07-01',
  category: 'journey',
  type: 'learning',
  uid: 'CPP-SKL-2026-STAKEHOLDER-MGMT',

  summary: 'A practical framework for aligning incentives across organizing teams, participants, institutions, and corporate sponsors — managing asymmetric risk, establishing credibility, and engineering shared satisfaction.',

  dependencies: [
    'Student Council BYC',
    'CUCA Sponsorships',
    'Valora Valuation Society',
    'Career Connect 2024/2025',
    'Eco Summit Registrations'
  ],

  blocks: [
    // OPENING
    {
      type: 'paragraph',
      content: 'At its core, stakeholder management is the discipline of coordinating the people across both sides of an initiative: the <strong>organizing side</strong> that executes the vision, and the <strong>participating side</strong> that engages with the outcome. Whether steering student committees or negotiating corporate sponsorships, success hinges on understanding that different groups operate under completely different motivations and risk tolerances.'
    },

    {
      type: 'highlight',
      content: 'Every stakeholder wants something distinct. The goal isn’t to favor one over the other, but to calibrate execution so every party achieves a baseline of genuine satisfaction.'
    },

    // METRICS DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'Competency', value: 'Stakeholder Mgmt' },
        { label: 'Core Mechanism', value: 'Asymmetric Risk Alignment' },
        { label: 'Operating Principle', value: 'Individualized Engagement' },
        { label: 'Linked Initiatives', value: '5 Key Nodes' }
      ]
    },

    // DUAL HORIZON: ORGANIZERS VS PARTICIPANTS
    {
      type: 'heading',
      level: 2,
      content: 'The Dual Horizon: Organizing vs. Participating Sides'
    },
    {
      type: 'paragraph',
      content: 'Managing internal teams requires operational clarity, role demarcation, and sustained morale. Managing external participants requires user empathy, frictionless communication channels, and clear value delivery. When friction arises between logistics and participant expectations, effective management means stepping into the center: translating logistical constraints to participants without excuses, and advocating participant feedback to the organizing team to improve execution in real time.'
    },

    // ASYMMETRIC RISK: STUDENTS VS CORPORATE SPONSORS
    {
      type: 'heading',
      level: 2,
      content: 'Asymmetric Risk: Student Opportunities vs. Corporate Capital'
    },
    {
      type: 'paragraph',
      content: 'A central breakthrough in my approach occurred while transitioning from event logistics to corporate sponsorships. Pitching an event to students is about presenting an <em>opportunity</em> — a stage to compete, network, or learn. But pitching to a corporate sponsor involves <em>capital risk</em>. Companies are putting real budgets and brand reputation on the line.'
    },
    {
      type: 'paragraph',
      content: 'Because their risk profile is fundamentally higher, sponsors demand deep trust, institutional credibility, and verifiable assurance of return on engagement. You cannot sell both audiences with the same pitch: student marketing requires energy and accessibility, while sponsor management demands data, contract rigor, and consistent risk reassurance.'
    },

    // THE SATISFACTION EQUILIBRIUM
    {
      type: 'heading',
      level: 2,
      content: 'The Common Satisfaction Equilibrium'
    },
    {
      type: 'paragraph',
      content: 'In complex multi-stakeholder ecosystems — like university student councils or inter-school summits — total unanimity is rare. Each party arrives with competing priorities: students want leniency and flexibility, faculty require policy adherence and discipline, while external partners seek brand prominence. The objective is to design solutions with calculated magnitude: ensuring each party receives what they value most, reaching a steady state of mutual satisfaction without compromising institutional integrity.'
    },

    // INDIVIDUALIZED DIPLOMACY
    {
      type: 'heading',
      level: 2,
      content: 'Individualized Diplomacy: One Size Never Fits All'
    },
    {
      type: 'paragraph',
      content: 'Every individual operates with a unique communication style, priority set, and stress response. Standardized, impersonal scripts alienate people. Navigating stakeholders effectively means taking the time to understand personal perspectives: actively listening before proposing terms, adapting your tone from diplomatic compromise with senior leadership to high-clarity coordination with peer volunteers, and meeting people where they are.'
    },

    // LINKED SYSTEM NODES
    {
      type: 'heading',
      level: 2,
      content: 'Linked Experiences & Applied Milestones'
    },
    {
      type: 'paragraph',
      content: 'This capability was developed and tested across five major leadership nodes documented within the Personal OS archive:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<a href="/item/byc-student-council-representative" class="text-cyan underline hover:text-cyan-bright font-medium">School-Level Student Council Representative</a>: Mediating academic concerns and general student welfare between undergraduate cohorts and university faculty.',
        '<a href="/item/cuca-promotions-sponsorships" class="text-cyan underline hover:text-cyan-bright font-medium">Promotions & Sponsorships Associate (CUCA)</a>: Managing corporate sponsor relationships and brand risk for flagship initiatives like Concordia.',
        '<a href="/item/valora-valuation-society" class="text-cyan underline hover:text-cyan-bright font-medium">Technical Associate (Valora)</a>: Aligning financial valuation research and Bloomberg Terminal insights across society members.',
        '<a href="/item/career-connect" class="text-cyan underline hover:text-cyan-bright font-medium">Career Connect (2024 & 2025)</a>: Coordinating corporate industry speakers, alumni panels, and institutional hosts across two editions.',
        '<a href="/item/eco-summit-registrations" class="text-cyan underline hover:text-cyan-bright font-medium">Head of Registrations — Eco Summit 2025</a>: Structuring delegate communication, external school relations, and credential management for over 300 participants.'
      ]
    }
  ]
};
