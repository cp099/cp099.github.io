import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'ai-scope-inter-house-competition',
  title: 'AI Scope — AI-Driven Solutions for Real-World Problems (3rd Place)',
  date: '2025-11-10',
  category: 'work',
  type: 'project',
  uid: 'CPP-AWD-2025-AISCOPE',
  summary: 'Award-winning competitive AI project developing practical machine learning solutions for complex real-world environmental and urban bottlenecks.',
  dependencies: ['Machine Learning', 'Computer Vision', 'Python', 'Problem Formulation', 'Public Presentation'],
  blocks: [
    // OPENING HOOK
    {
      type: 'paragraph',
      content: 'The <strong>AI Scope Inter-House Competition</strong> was organized to test practical engineering acumen: applying artificial intelligence not as a theoretical novelty, but as a robust operational solution to pressing civic and environmental challenges.'
    },

    {
      type: 'highlight',
      content: 'Theoretical AI models are easy to demonstrate; resilient AI that withstands real-world constraints and messy data is hard to build.'
    },

    // COMPETITION SPECS
    {
      type: 'heading',
      level: 2,
      content: 'Competition Specifications'
    },
    {
      type: 'data',
      metrics: [
        { label: 'Recognition', value: '3rd Place Overall' },
        { label: 'Event', value: 'AI Scope Inter-House' },
        { label: 'Theme', value: 'AI for Real-World Impact' },
        { label: 'Evaluation', value: 'Viability & Tech Stack' }
      ]
    },

    // PROBLEM & SOLUTION
    {
      type: 'heading',
      level: 2,
      content: 'Problem Formulation & Solution Design'
    },
    {
      type: 'paragraph',
      content: 'Participants were tasked with identifying systemic urban or environmental friction and constructing a working data-driven prototype. My submission focused on data acquisition accuracy, low-latency inference, and human-in-the-loop decision-making.'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Constraint-Driven Architecture: Ensuring models could execute on edge or consumer-grade hardware without cloud latency dependencies.',
        'Data Cleaning & Calibration: Mitigating noisy sensor inputs through pre-processing filters before feeding downstream models.',
        'Actionable Interface: Translating model probabilities into clear, unambiguous decision thresholds for non-technical stakeholders.'
      ]
    },

    // OUTCOME & REFLECTION
    {
      type: 'heading',
      level: 2,
      content: 'Jury Evaluation & Key Takeaways'
    },
    {
      type: 'paragraph',
      content: 'The project secured <strong>3rd Place</strong> across intense inter-house competition. The jury specifically highlighted the emphasis on commercial feasibility, defensive error-handling, and clear presentation of algorithmic limitations.'
    },
    {
      type: 'paragraph',
      content: 'Competing in AI Scope reinforced a philosophy that continues across all my projects: an AI solution is only as strong as its weakest real-world assumption.'
    },

    {
      type: 'highlight',
      content: 'Success in competitive STEM is about framing: understanding the human context of the problem before writing a single line of machine learning code.'
    }
  ]
};
