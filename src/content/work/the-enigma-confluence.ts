import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'the-enigma-confluence',
  title: 'The Enigma — Assistant Event Head',
  date: '2024-08-07',
  category: 'work',
  type: 'role',
  uid: 'CPP-ROLE-2024-ENIGMA',

  summary:
    'Designed and conducted “Codebreaker” for Confluence 2024 — a multi-stage competitive puzzle system built around mathematical problem solving, progressive decryption, and time-based team progression.',

  blocks: [

    // OPENING
    {
      type: 'paragraph',
      content:
        'Served as Assistant Event Head for <strong>The Enigma</strong> at Confluence 2024, designing and conducting a logic-driven competitive experience focused on mathematical reasoning, problem solving, and progressive puzzle unlocking.'
    },

    {
      type: 'highlight',
      content:
        'The challenge was not just solving problems — it was unlocking the next stage before everyone else.'
    },

    // EVENT CONTEXT
    {
      type: 'heading',
      level: 2,
      content: 'Event Concept'
    },

    {
      type: 'paragraph',
      content:
        'The Enigma was designed as an immersive mathematical challenge where participants navigated layered problem-solving systems under time pressure. Inspired by themes of mystery, pursuit, and analytical thinking, the event combined mathematics with competitive progression mechanics.'
    },

    {
      type: 'paragraph',
      content:
        'Participants were expected to think beyond direct calculations — combining logic, speed, resilience, and pattern recognition to progress through increasingly difficult stages.'
    },

    // CODEBREAKER
    {
      type: 'heading',
      level: 2,
      content: 'Codebreaker — Sub Event Architecture'
    },

    {
      type: 'paragraph',
      content:
        'I designed and led <strong>Codebreaker</strong>, a multi-stage puzzle competition where teams progressed through a chain of password-protected PDF files.'
    },

    {
      type: 'paragraph',
      content:
        'Each participating team received a sequence of five PDF files. The first file was accessible immediately, while every subsequent file remained locked behind a password generated from solving the previous stage.'
    },

    {
      type: 'code',
      language: 'text',
      code:
`FILE_01.pdf  →  Solve Problems  →  Extract Password
        ↓
Unlock FILE_02.pdf
        ↓
Solve New Challenge Set
        ↓
Unlock FILE_03.pdf
        ↓
...
        ↓
FIRST TEAM TO REACH FINAL FILE WINS`
    },

    // PUZZLE DESIGN
    {
      type: 'heading',
      level: 2,
      content: 'Puzzle System Design'
    },

    {
      type: 'paragraph',
      content:
        'The challenge architecture was intentionally progressive. Each round increased in difficulty while introducing new logical structures and mathematical patterns.'
    },

    {
      type: 'list',
      ordered: false,
      items: [
        'Progressive multi-stage puzzle chaining',
        'Password-derived progression mechanics',
        'Logic and mathematics integrated together',
        'Difficulty scaling across rounds',
        'Time-pressure driven competition structure'
      ]
    },

    {
      type: 'paragraph',
      content:
        'The objective was not only to make the event difficult, but to make it engaging. Teams needed to constantly balance speed, accuracy, collaboration, and interpretation under pressure.'
    },

    // CODE STYLE VISUAL
    {
      type: 'code',
      language: 'text',
      code:
`ROUND 03 :: ACCESS LOCKED

PASSWORD REQUIREMENTS:
- Derived from Question Set B
- Numerical sequence required
- Final answer format: ####-##

STATUS:
[ ACCESS DENIED ]`
    },

    // EVENT EXECUTION
    {
      type: 'heading',
      level: 2,
      content: 'Execution & Event Flow'
    },

    {
      type: 'paragraph',
      content:
        'Beyond puzzle creation, I coordinated the live execution of the sub-event — handling participant flow, event timing, scoring, troubleshooting, and on-spot issue resolution during active rounds.'
    },

    {
      type: 'paragraph',
      content:
        'One of the hardest phases was the preparation before the event itself. Every puzzle chain, password dependency, and progression flow had to be verified carefully to ensure there were no broken sequences or unintended bypasses.'
    },

    {
      type: 'highlight',
      content:
        'In a chained puzzle system, one broken clue can collapse the entire experience.'
    },

    // SCALE
    {
      type: 'heading',
      level: 2,
      content: 'Scale & Participation'
    },

    {
      type: 'data',
      metrics: [
        { label: 'Participants', value: '40+' },
        { label: 'Teams', value: '20+' },
        { label: 'Competition Type', value: 'Puzzle Progression' },
        { label: 'Core Mechanic', value: 'Locked PDF Chain' }
      ]
    },

    // EXPERIENCE
    {
      type: 'heading',
      level: 2,
      content: 'Experience'
    },

    {
      type: 'paragraph',
      content:
        'The most satisfying part of the event was watching teams successfully progress through systems that initially seemed impossible. The moment participants understood the progression logic, the competition transformed from confusion into high-pressure strategic problem solving.'
    },

    {
      type: 'paragraph',
      content:
        'The event succeeded not just because participants solved problems, but because they became fully immersed in the progression system itself.'
    },

    // REFLECTION
    {
      type: 'heading',
      level: 2,
      content: 'Reflection'
    },

    {
      type: 'paragraph',
      content:
        'This experience changed how I think about engagement systems. Designing a good challenge is not just about difficulty — it is about pacing, clarity, progression, and maintaining curiosity under pressure.'
    },

    {
      type: 'paragraph',
      content:
        'It also reinforced how systems thinking applies even in competitive experiences. Every clue, dependency, and progression path needed to function together as one coherent structure.'
    },

    {
      type: 'highlight',
      content:
        'The best puzzle systems do not just test intelligence — they force people to think differently.'
    }

  ]
};