import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'dual-nozzle-engine-v1',
  title: 'Dual-Nozzle Engine (V1) — Independent Propulsion Research',
  date: '2024-04-18',
  category: 'work',
  type: 'research',
  uid: 'CPP-RESEARCH-2024-DUAL-NOZZLE',

  summary:
    'Independent propulsion research exploring distributed thrust geometry, controlled landing behavior, and conceptual engine architectures for safer planetary descent systems.',

  blocks: [
    
    {

    type: 'code',

    language: 'text',

    code:

`RESEARCH ABSTRACT

This research explores a dual-nozzle propulsion architecture
designed to separate precision maneuvering thrust from
distributed landing stabilization thrust.

The system investigates whether independently controlled
concentric nozzles could theoretically improve stability
during high-risk planetary landing operations.`

    },

    // HERO
    {
      type: 'highlight',
      content:
        'Independent propulsion research exploring distributed thrust geometry for safer planetary landing behavior.'
    },

    {
      type: 'paragraph',
      content:
        'This research project began during 10th grade after studying the Chandrayaan-2 landing failure and questioning how propulsion systems could better handle instability during critical landing phases.'
    },

    {
      type: 'paragraph',
      content:
        'At the time, I was 15 years old and independently exploring propulsion architecture, thrust distribution, and controlled landing systems through conceptual engineering research.'
    },

    // RESEARCH OVERVIEW
    {
      type: 'heading',
      level: 2,
      content: 'Research Overview'
    },

    {
      type: 'data',
      metrics: [
        { label: 'Research Category', value: 'Space Propulsion' },
        { label: 'Research Year', value: '2024' },
        { label: 'Primary Focus', value: 'Planetary Landing Systems' },
        { label: 'Core Concept', value: 'Distributed Dual-Nozzle Thrust' }
      ]
    },

    {
      type: 'paragraph',
      content:
        'The project explored whether a propulsion system using two independently controlled concentric nozzles could improve stability, directional correction, and landing cushioning during descent operations.'
    },

    {
      type: 'highlight',
      content:
        'The core idea was simple: one nozzle handles precision control, while the second creates a distributed landing cushion.'
    },

    // PROBLEM
    {
      type: 'heading',
      level: 2,
      content: 'The Landing Problem'
    },

    {
      type: 'paragraph',
      content:
        'Traditional landing systems depend heavily on stable directional thrust during descent. Small instability events, excessive descent velocity, or uneven force distribution can introduce large correction difficulties during final landing phases.'
    },

    {
      type: 'paragraph',
      content:
        'The research explored whether separating propulsion responsibilities into independent thrust zones could improve operational flexibility during planetary descent.'
    },

    {
      type: 'code',
      language: 'text',
      code:
`TRADITIONAL LANDING MODEL

      [ SINGLE NOZZLE ]
              │
              │
      HIGH-PRECISION THRUST
              │
              │
      ↓ DESCENT CONTROL ↓

PROBLEM:
Single-point instability
affects entire landing response`
    },

    // EVOLUTION
    {
      type: 'heading',
      level: 2,
      content: 'Research Evolution'
    },

    {
      type: 'code',
      language: 'text',
      code:
`[ INITIAL LANDING IDEA ]
            ↓
[ PHYSICS DISCUSSION ]
            ↓
[ PROPULSION RESEARCH ]
            ↓
[ THRUST DISTRIBUTION ANALYSIS ]
            ↓
[ CONCEPTUAL CALCULATIONS ]
            ↓
[ STRUCTURED PAPER DEVELOPMENT ]`
    },

    {
      type: 'paragraph',
      content:
        'What began as a rough concept sketch during a classroom discussion evolved into a structured propulsion study focused on distributed thrust behavior and planetary landing dynamics.'
    },

    // MAIN CONCEPT
    {
      type: 'heading',
      level: 2,
      content: 'Core Propulsion Concept'
    },

    {
      type: 'paragraph',
      content:
        'The propulsion system explored a dual-nozzle architecture using two concentric thrust systems operating independently.'
    },

    {
      type: 'code',
      language: 'text',
      code:
`                 DUAL-NOZZLE PROPULSION SYSTEM


                 ┌─────────────────────┐
                 │    OUTER NOZZLE     │
                 │                     │
                 │ Distributed Thrust  │
                 │ Surface Cushioning  │
                 │ Landing Stability   │
                 │                     │
                 └─────────┬───────────┘
                           │
                    ┌──────┴──────┐
                    │INNER NOZZLE │
                    │             │
                    │ Precision   │
                    │ Directional │
                    │ Maneuvering │
                    │             │
                    └─────────────┘`
    },

    {
      type: 'paragraph',
      content:
        'The smaller internal nozzle would provide focused high-precision thrust for maneuvering and directional control, while the larger outer nozzle would generate a wider distributed thrust region intended to cushion and stabilize landing behavior.'
    },

    {
      type: 'highlight',
      content:
        'Instead of relying on one thrust profile for every task, the concept separated maneuvering and landing stabilization into two independent propulsion behaviors.'
    },

    // WHY HARD
    {
      type: 'heading',
      level: 2,
      content: 'Why The Problem Is Difficult'
    },

    {
      type: 'paragraph',
      content:
        'Planetary landing systems operate under extremely unstable conditions where propulsion, orientation, velocity correction, and terrain response interact simultaneously.'
    },

    {
      type: 'list',
      ordered: false,
      items: [
        'Maintaining stable thrust distribution during descent',
        'Preventing oscillation and overcorrection',
        'Managing thermal stress across multiple nozzle systems',
        'Handling force imbalance during directional adjustments',
        'Synchronizing independently controlled propulsion stages',
        'Reducing instability near touchdown'
      ]
    },

    {
      type: 'paragraph',
      content:
        'The challenge was not only generating thrust, but generating controlled and predictable landing behavior under continuously changing environmental conditions.'
    },

    // THRUST COMPARISON
    {
      type: 'heading',
      level: 2,
      content: 'Conceptual Thrust Comparison'
    },

    {
      type: 'code',
      language: 'text',
      code:
`SINGLE-NOZZLE SYSTEM

        │││││
        │││││
        │││││
          ↓
   HIGH-PRECISION
     NARROW THRUST


DUAL-NOZZLE SYSTEM

    ╔══════════════╗
    ║              ║
    ║  WIDE THRUST ║
    ║ DISTRIBUTION ║
    ║              ║
    ╚══════╦═══════╝
           ││
           ││
           ↓↓
   PRECISION CONTROL`
    },

    {
      type: 'paragraph',
      content:
        'The concept attempted to reduce pressure concentration and improve distributed stabilization behavior during landing operations through a wider secondary thrust geometry.'
    },

    // CONTROL MODEL
    {
      type: 'heading',
      level: 2,
      content: 'Independent Nozzle Control'
    },

    {
      type: 'code',
      language: 'text',
      code:
`INNER NOZZLE CONTROL
----------------------
• Precision Vectoring
• Direction Correction
• Velocity Stabilization
• Rotational Adjustment


OUTER NOZZLE CONTROL
----------------------
• Surface Distribution
• Landing Stabilization
• Wide Force Projection
• Cushioning Assistance`
    },

    {
      type: 'paragraph',
      content:
        'The independent control structure allowed both nozzles to operate differently depending on mission phase requirements.'
    },

    {
     type: 'code',
     language: 'text',
     code:

    `DESCENT PROFILE CONFIGURATION

    MODE: Planetary Landing
    ALTITUDE PHASE: Final Descent
    INNER NOZZLE: ACTIVE
    OUTER NOZZLE: STABILIZATION MODE

    THRUST DISTRIBUTION:
    - Precision Vector: 38%
    - Surface Cushioning: 62%

    STATUS:
    Landing Stabilization Sequence Engaged`
    },    

    // CALCULATIONS
    {
      type: 'heading',
      level: 2,
      content: 'Conceptual Calculations'
    },

    {
      type: 'paragraph',
      content:
        'The calculations developed during the research were conceptual demonstrations intended to validate propulsion behavior and force-distribution reasoning.'
    },

    {
      type: 'code',
      language: 'text',
      code:
`THRUST RELATIONSHIP

F = m × a + Dc + Rf


WHERE:

F   = Thrust
m   = Mass Flow Rate
a   = Exhaust Velocity
Dc  = Cushioning Resistance
Rf  = Reaction Force


CONCEPTUAL OBJECTIVE

Inner Nozzle:
→ Precision Force Vector

Outer Nozzle:
→ Distributed Stabilization Force`
    },

    {
      type: 'paragraph',
      content:
        'The primary objective was not simulation-grade accuracy, but understanding how separated thrust behaviors could theoretically influence landing stability.'
    },

    // APPLICATIONS
    {
      type: 'heading',
      level: 2,
      content: 'Potential Applications'
    },

    {
      type: 'list',
      ordered: false,
      items: [
        'Lunar landing systems',
        'Planetary descent vehicles',
        'Autonomous landing platforms',
        'Experimental distributed-thrust systems',
        'Stability-focused propulsion architectures',
        'Future conceptual aerospace research'
      ]
    },

    {
     type: 'paragraph',
     content:
        'While the concept remains theoretical, the broader research direction highlights how propulsion architectures could evolve toward specialized thrust behaviors instead of relying on a single unified descent profile.'
    },

    // ENGINEERING LIMITATIONS
    {
      type: 'heading',
      level: 2,
      content: 'Engineering Challenges'
    },

    {
      type: 'code',
      language: 'text',
      code:
`PRIMARY CHALLENGES

[1] Thermal Stress Management
[2] Fuel Flow Synchronization
[3] Oscillation Stability
[4] Exhaust Interaction
[5] Structural Weight Increase
[6] Real-Time Control Systems
[7] Surface Dust Interaction
[8] Multi-Nozzle Pressure Balance`
    },

    {
      type: 'paragraph',
      content:
        'Identifying these engineering constraints became one of the most important learning outcomes of the research. The concept eventually shifted from being purely theoretical into a broader systems-level engineering study.'
    },

    // SYSTEM THINKING
    {
      type: 'heading',
      level: 2,
      content: 'Systems Thinking'
    },

    {
      type: 'paragraph',
      content:
        'During the research process, the project evolved from simply designing an engine into understanding how propulsion systems interact with navigation, structural design, environmental response, and landing dynamics simultaneously.'
    },

    {
      type: 'highlight',
      content:
        'The research eventually became less about engine geometry and more about how propulsion systems behave during high-risk mission phases.'
    },

    {
      type: 'paragraph',
      content:
        'Beyond propulsion theory, the project ultimately became an exercise in understanding how engineering systems behave under instability, uncertainty, and operational constraints.'
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
        'This project became my first serious independent engineering research effort. It introduced me to propulsion systems, systems thinking, conceptual calculations, and the process of translating a raw idea into structured technical research.'
    },

    {
      type: 'paragraph',
      content:
        'More importantly, it changed how I approached engineering problems. I began looking beyond isolated components and started thinking about how complete systems behave under stress, instability, and real operational constraints.'
    },

    {
      type: 'highlight',
      content:
        'This project began with curiosity about a failed landing system and evolved into my first serious exploration of propulsion architecture, systems thinking, and independent engineering research.'
    },

    // STATUS
    {
      type: 'heading',
      level: 2,
      content: 'Research Status'
    },

    {
      type: 'highlight',
      content:
        'This research marked the beginning of my transition from experimentation into structured engineering and systems-level thinking.'
    },

    {
      type: 'paragraph',
      content:
        'Research completed as an independent conceptual propulsion study in 2024.'
    },
  ]
};