// src/content/work/caps-group-peer-trainer.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'caps-group-peer-trainer',
  title: 'Centre for Academic and Professional Support — Group Peer Trainer Associate',
  date: '2026-07-01',
  category: 'work',
  type: 'role',
  uid: 'CPP-ROLE-2026-CAPS-GPT',

  summary: 'Facilitating interactive peer-learning and professional development sessions at CAPS BYC, training university students on Group Discussions and LinkedIn Optimization, and authoring new curriculum including AI Automation Using Claude.',

  dependencies: [
    'CAPS BYC',
    'Peer Training',
    'Curriculum Design',
    'Public Speaking',
    'AI Automation Using Claude',
    'LinkedIn Optimization',
    'Professional Development'
  ],

  blocks: [
    // HERO IMAGE
    {
      type: 'image',
      src: '/assets/Work/caps-gpt/1.webp',
      alt: 'CAPS Group Peer Trainer Session',
      caption: 'Delivering a professional development masterclass on LinkedIn Optimization to university peers at Christ University (BYC).',
      layout: 'portrait'
    },

    // OPENING
    {
      type: 'paragraph',
      content: 'My background as the founding Student Mentor at the Atal Tinkering Lab showed me the immense power of peer-led education. Arriving at university, I knew I did not want to leave teaching behind. Joining the Centre for Academic and Professional Support (CAPS) as a Group Peer Trainer (GPT) was an intentional commitment to continue developing students while scaling my facilitation to an undergraduate level.'
    },

    {
      type: 'highlight',
      content: 'Mentoring university peers is fundamentally different from teaching high schoolers — it demands shifting from instruction to facilitation, commanding the room with industry relevance, and delivering immediate career value.'
    },

    // METRICS / STATUS DATA
    {
      type: 'data',
      metrics: [
        { label: 'Role', value: 'Group Peer Trainer' },
        { label: 'Organization', value: 'CAPS | BYC' },
        { label: 'Tenure', value: 'Jul 2026 – Present' },
        { label: 'New Module', value: 'AI Automation (Claude)' }
      ]
    },

    // CONTEXT & PEDAGOGICAL EVOLUTION
    {
      type: 'heading',
      level: 2,
      content: 'Context & Pedagogical Approach'
    },
    {
      type: 'paragraph',
      content: 'In the ATL lab, I taught robotics, 3D printing, and design thinking through tactile experimentation. At CAPS, the classroom dynamics shifted from hardware to professional communication and strategic career readiness. I retained the same philosophy: avoid one-way lectures, establish psychological safety, and immerse participants in active exercises that force immediate practice.'
    },

    {
      type: 'image',
      src: '/assets/Work/caps-gpt/2.webp',
      alt: 'Interactive Classroom Facilitation',
      caption: 'Engaging participants through live profile auditing and interactive critique.',
      layout: 'portrait'
    },

    // MODULES DELIVERED & AUTHORSHIP
    {
      type: 'heading',
      level: 2,
      content: 'Modules Facilitated & Curriculum Authorship'
    },
    {
      type: 'paragraph',
      content: 'To date, I have facilitated 3 comprehensive classroom sessions focused on core professional capabilities: Group Discussion (GD) Dynamics and LinkedIn Profile Optimization. The sessions dissect how recruiters evaluate candidates, how to formulate persuasive arguments under time pressure, and how to structure a digital presence that attracts professional opportunities.'
    },
    {
      type: 'paragraph',
      content: 'Drawing on my technical background, I also took the initiative to author a brand new training module: "AI Automation Using Claude". This curriculum introduces non-engineering undergraduates to agentic AI workflows, practical prompt design, and everyday productivity automation, preparing commerce students for an AI-native workplace.'
    },

    {
      type: 'image',
      src: '/assets/Work/caps-gpt/3.webp',
      alt: 'Hands-on Student Support',
      caption: 'Addressing student queries and breaking down actionable profile changes.',
      layout: 'portrait'
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
        'Facilitate interactive peer-learning sessions centered on students’ academic, personal, and professional development',
        'Deliver high-energy classroom sessions that encourage active participation, peer critique, and collaborative problem-solving',
        'Author cutting-edge curriculum modules including AI Automation Using Claude for collegiate audiences',
        'Collaborate with Senior Peer Trainers and faculty coordinators to plan, refine, and execute campus-wide student development programs',
        'Develop advanced facilitation, public speaking, and room management capabilities across diverse student cohorts'
      ]
    },

    {
      type: 'image',
      src: '/assets/Work/caps-gpt/4.webp',
      alt: 'Classroom Dynamics',
      caption: 'Guiding university students through mock discussion simulations.',
      layout: 'portrait'
    },

    // KEY TAKEAWAYS & HIGHER EDUCATION FACILITATION
    {
      type: 'heading',
      level: 2,
      content: 'Key Learnings: Teaching University Peers'
    },
    {
      type: 'paragraph',
      content: 'The most profound takeaway from CAPS has been the sharp contrast between teaching high schoolers and facilitating university peers. Undergraduates do not accept superficial advice; they interrogate concepts, share their own experiences, and expect concrete, battle-tested answers. Facilitating in this environment has radically sharpened my public speaking, adaptability, and ability to think and articulate clearly under scrutiny.'
    },

    {
      type: 'image',
      src: '/assets/Work/caps-gpt/5.webp',
      alt: 'Post-Session Wrap Up',
      caption: 'Iterating on feedback after the session to continuously refine training delivery.',
      layout: 'portrait'
    }
  ]
};
