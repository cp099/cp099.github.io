// src/content/journey/leadership.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'skill-leadership',
  title: 'Core Capability: Principled Leadership & Institutional Command',
  date: '2025-06-27',
  category: 'journey',
  type: 'learning',
  uid: 'CPP-SKL-2025-LEADERSHIP',

  summary: 'A battle-tested philosophy of leadership forged across competitive institutions — built on collective elevation, proven operational credibility, and the understanding that authority is earned through peer acceptance rather than the badge.',

  dependencies: [
    'Cauvery House Captain',
    'Student Council BYC',
    'P.L.E.D.G.E. Council',
    'Cauvery Vice Captain',
    'YLAC Equality Club'
  ],

  blocks: [
    // OPENING
    {
      type: 'paragraph',
      content: 'True leadership is fundamentally about collective growth: guiding, protecting, and elevating everyone together. It is not an individual showcase. A leader’s success is measured entirely by whether the whole team ascends, develops resilience, and achieves outcomes that none could have reached alone.'
    },

    {
      type: 'highlight',
      content: 'It’s not about the badge, it’s about the responsibility. It’s not about the resume, it’s about the person who carries it.'
    },

    // METRICS DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'Competency', value: 'Principled Leadership' },
        { label: 'Core Creed', value: 'Responsibility Over Badge' },
        { label: 'Legitimacy Anchor', value: 'Earned Peer Acceptance' },
        { label: 'Executive Offices', value: '5 High-Stakes Posts' }
      ]
    },

    // CREDIBILITY THROUGH EXECUTION
    {
      type: 'heading',
      level: 2,
      content: 'Credibility: Action Over Rhetoric'
    },
    {
      type: 'paragraph',
      content: 'In highly competitive, cut-throat environments, grand speeches carry zero weight. People quickly see through empty posturing. Real authority is forged through unglamorous, consistent execution: being the first to arrive, absorbing pressure when things break, making difficult decisions under scrutiny, and consistently delivering verifiable results.'
    },
    {
      type: 'paragraph',
      content: 'Holding leadership posts across demanding school and university institutions proved that credibility is earned by doing the actual work. When your peers see that you are willing to get your hands dirty, take accountability for missteps, and deflect credit to the team during victory, trust becomes unshakeable.'
    },

    // COMPOUNDING EXPERIENCES
    {
      type: 'heading',
      level: 2,
      content: 'The Compounding Leadership Trajectory'
    },
    {
      type: 'paragraph',
      content: 'Leadership capability does not develop in a vacuum; it compounds across environments of increasing complexity. I carried the hard lessons of each previous role into the next:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<strong>Founding Authority:</strong> Launching the <a href="/item/pledge-council-founder" class="text-cyan underline hover:text-cyan-bright font-medium">P.L.E.D.G.E. Council</a> taught me how to create structure from zero, inspire volunteers without an established hierarchy, and rally people behind a novel mission.',
        '<strong>Operational Second-in-Command:</strong> Serving as <a href="/item/cauvery-vice-captain" class="text-cyan underline hover:text-cyan-bright font-medium">Cauvery Vice Captain</a> taught me the mechanics of backstage coordination, loyalty to the house mandate, and executing without ego.',
        '<strong>Full-Scale Command & Expectation:</strong> Stepping up to <a href="/item/cauvery-house-captain" class="text-cyan underline hover:text-cyan-bright font-medium">Cauvery House Captain</a> shifted the burden to total ownership — managing high competitive pressure, sustaining athletic and cultural excellence across grades, and defending a legacy.',
        '<strong>Institutional Mediation:</strong> Serving on the <a href="/item/byc-student-council-representative" class="text-cyan underline hover:text-cyan-bright font-medium">Student Council BYC</a> refined my diplomacy, learning how to balance student welfare advocacy against administrative parameters in higher education.'
      ]
    },

    // THE ULTIMATE BAROMETER: PEER ACCEPTANCE
    {
      type: 'heading',
      level: 2,
      content: 'The True Barometer: Peer Acceptance'
    },
    {
      type: 'paragraph',
      content: 'An institution can pin a badge on your blazer or assign you a title, but that does not make you a leader. A leader only truly exists if their peers have accepted them. Peer acceptance cannot be demanded; it is granted voluntarily when people know you care about their individual growth, respect their contributions, and will stand up for them in any room.'
    },

    // LINKED SYSTEM NODES
    {
      type: 'heading',
      level: 2,
      content: 'Linked Executive Offices in Personal OS'
    },
    {
      type: 'paragraph',
      content: 'The empirical records of these leadership commands are documented in the archive:'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '<a href="/item/cauvery-house-captain" class="text-cyan underline hover:text-cyan-bright font-medium">Cauvery House Captain</a>: High-stakes leadership of the house council, athletic squads, and student body across school competitions.',
        '<a href="/item/byc-student-council-representative" class="text-cyan underline hover:text-cyan-bright font-medium">School-Level Student Council Representative</a>: Representing the School of Commerce, Finance & Accountancy at Christ University BYC.',
        '<a href="/item/pledge-council-founder" class="text-cyan underline hover:text-cyan-bright font-medium">Founder, P.L.E.D.G.E. Council</a>: Conceiving, establishing, and scaling a dedicated student environmental leadership body.',
        '<a href="/item/cauvery-vice-captain" class="text-cyan underline hover:text-cyan-bright font-medium">Vice Captain, Cauvery House</a>: Managing ground-level logistics, team morale, and competitive selections.',
        '<a href="/item/ylac-equality-club" class="text-cyan underline hover:text-cyan-bright font-medium">President, YLAC Equality Club</a>: Directing student discourse on social equity, civic engagement, and policy awareness.'
      ]
    }
  ]
};
