// src/content/journey/event-management.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'skill-event-management',
  title: 'Core Capability: Event Architecture & Operations Management',
  date: '2025-01-24',
  category: 'journey',
  type: 'learning',
  uid: 'CPP-SKL-2025-EVENT-MGMT',

  summary: 'A high-throughput operational playbook for event execution — built on disciplined delegation, rigorous data management, and a two-tier crisis triage protocol.',

  dependencies: [
    'DiPSMUN Logistics',
    'Eco Summit Registrations',
    'Career Connect',
    'The Enigma Confluence',
    'Crisis Triage Protocol'
  ],

  blocks: [
    // OPENING
    {
      type: 'paragraph',
      content: 'True success in event management is not defined by grandiose spectacle, but by systemic reliability: when every component of the operational machine runs smoothly within acceptable tolerance thresholds and high efficiency. Behind every flawless keynote or committee session lies a network of synchronized logistics, structured data pipelines, and distributed team ownership.'
    },

    {
      type: 'highlight',
      content: 'Delegation is the bedrock of scale. No single individual can oversee every moving part — resilience comes from rigorous delegation, continuous vigilance, and clear accountability.'
    },

    // METRICS DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'Competency', value: 'Event Operations' },
        { label: 'Operational Anchor', value: 'Delegation & Vigilance' },
        { label: 'Data Discipline', value: 'Single Source of Truth' },
        { label: 'Major Summits', value: '4 Flagship Builds' }
      ]
    },

    // THE TWO PILLARS: LOGISTICS & DATA RECORD INTEGRITY
    {
      type: 'heading',
      level: 2,
      content: 'The Dual Pillars: Physical Logistics & Data Integrity'
    },
    {
      type: 'paragraph',
      content: 'Event operations split into two demanding arenas: physical throughput and information management. As Head of Logistics for <a href="/item/dipsmun-logistics" class="text-cyan underline hover:text-cyan-bright font-medium">DiPSMUN 2025</a>, managing over 500 delegates across multi-floor committee rooms taught me that physical service requires <em>severe delegation and unrelenting vigilance</em>. If supplies, room transitions, and tech setups are delayed by even five minutes, the schedule cascades into failure.'
    },
    {
      type: 'paragraph',
      content: 'Conversely, leading Registrations for <a href="/item/eco-summit-registrations" class="text-cyan underline hover:text-cyan-bright font-medium">Eco Summit 2025</a> proved that logistical execution is only as sound as the underlying data. Maintaining accurate attendee records, verifiable credential databases, and seamless check-in systems eliminated on-ground queues and provided live visibility into delegate movement.'
    },

    // CRISIS MANAGEMENT: TWO-TIER TRIAGE
    {
      type: 'heading',
      level: 2,
      content: 'Crisis Architecture: Two-Tier Root Triage'
    },
    {
      type: 'paragraph',
      content: 'Live events are inherently stochastic; unexpected friction is inevitable. When a breakdown occurs — whether an audiovisual failure, sudden schedule bottleneck, or speaker delay — panicking in the middle of the crowd creates chaos. My operational protocol follows two distinct phases:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Tier 1 — Perimeter Containment:</strong> Immediately mobilize trusted lieutenants to step in, manage attendee expectations, and stabilize the friction so the public experience remains calm and uninterrupted.',
        '<strong>Tier 2 — Root Cause Elimination:</strong> Rather than applying superficial band-aids while distracted by crowd noise, I step back, trace the issue to its fundamental source, and re-engineer the broken process at its core.'
      ]
    },

    // THE DELEGATION MANDATE
    {
      type: 'heading',
      level: 2,
      content: 'The Delegation Mandate: Decentralized Execution'
    },
    {
      type: 'paragraph',
      content: 'The single most common failure mode in event leadership is micromanagement. Attempting to hold every walkie-talkie and verify every chair creates a single point of failure. Effective event architecture requires establishing trust: clearly defining scope for each committee head, training team members to make autonomous calls within their boundaries, and maintaining high-level situational awareness to intervene only when system boundaries are breached.'
    },

    // LINKED SYSTEM NODES
    {
      type: 'heading',
      level: 2,
      content: 'Linked Experiences & Operational Milestones'
    },
    {
      type: 'paragraph',
      content: 'This operational blueprint was refined through hands-on leadership across several high-stakes events:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<a href="/item/dipsmun-logistics" class="text-cyan underline hover:text-cyan-bright font-medium">Head of Logistics — DiPSMUN 2025</a>: Architecting material supply lines, committee room readiness, and crisis containment across a 500+ delegate Model UN.',
        '<a href="/item/eco-summit-registrations" class="text-cyan underline hover:text-cyan-bright font-medium">Head of Registrations — Eco Summit 2025</a>: Building automated verification spreadsheets, delegate accreditation badges, and zero-latency check-in portals.',
        '<a href="/item/career-connect" class="text-cyan underline hover:text-cyan-bright font-medium">Career Connect (2024 & 2025)</a>: Orchestrating multi-industry corporate speaker panels, student attendance tracking, and auditorium workflows.',
        '<a href="/item/the-enigma-confluence" class="text-cyan underline hover:text-cyan-bright font-medium">Assistant Event Head — "The Enigma" (Confluence 2024)</a>: Designing competitive problem prompts, real-time scoring, and synchronized inter-school event rounds.'
      ]
    }
  ]
};
