import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'system-architecture',
  title: 'CHIRAG.OS — Personal Operating System',
  date: '2025-01-24',
  category: 'work',
  type: 'major-build',
  uid: 'CPP-2025-001-CHIRAG-OS',
  summary: 'A headless, file-based digital environment engineered to replace the traditional portfolio with a highly structured, scalable data system.',
  dependencies: ['Next.js 16', 'Tailwind CSS v4', 'TypeScript', 'GitHub Pages', 'JSON-LD'],
  blocks: [
    // SPLASH SCREEN
    { 
      type: 'image', 
      src: '/assets/og-image.png', 
      alt: 'CHIRAG.OS System Splash Screen', 
      caption: 'System Boot Screen & Identity Graphic' 
    },

    // INTRODUCTION
    { 
      type: 'paragraph', 
      content: 'Standard web portfolios suffer from two fatal flaws: they are tedious to update, and they prioritize surface-level aesthetics over information density. <strong>CHIRAG.OS</strong> was architected from scratch to solve this. It is not a website; it is a modular, self-contained digital environment designed to aggregate and cite my work across technology and finance.' 
    },

    { 
      type: 'highlight', 
      content: 'A portfolio tells people what you did. An operating system proves how you think.' 
    },

    // SYSTEM SPECS
    { 
      type: 'heading', 
      level: 2, 
      content: 'Core Architecture & Specs' 
    },
    { 
      type: 'paragraph', 
      content: 'The system is deployed as a 100% Static HTML Export, entirely eliminating server-side vulnerabilities and database latency. Content is managed as strict TypeScript objects, allowing the UI to act purely as a rendering layer.' 
    },
    { 
      type: 'data', 
      metrics: [
        { label: 'Framework', value: 'Next.js 16.2' },
        { label: 'Styling', value: 'Tailwind v4' },
        { label: 'Data Model', value: 'Headless / TS' },
        { label: 'Hosting', value: 'GitHub Actions' }
      ] 
    },

    // THE BLOCK ENGINE
    { 
      type: 'heading', 
      level: 2, 
      content: 'The Block Engine CMS' 
    },
    { 
      type: 'paragraph', 
      content: 'To decouple content from design, I engineered a custom <strong>Block Renderer</strong>. Instead of writing raw HTML or Markdown for every new project, the system reads arrays of data blocks and dynamically constructs the page geometry.' 
    },
    { 
      type: 'code', 
      language: 'typescript', 
      code: `// The core schema powering the entire OS
export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  category: ContentCategory;
  type: ContentType; 
  summary: string;
  blocks: Block[]; // Dynamic UI Engine
  uid?: string;
  dependencies?: string[];
}` 
    },

    // UX & IDENTITY
    { 
      type: 'heading', 
      level: 2, 
      content: 'Identity HUD & User Experience' 
    },
    { 
      type: 'paragraph', 
      content: 'The user interface abandons the "wall of text" biography in favor of a <strong>Heads-Up Display (HUD)</strong>. Mental bandwidth is visualized via a dynamic "Memory Allocation" bar chart, and system uptime is calculated live from my birthdate.' 
    },
    { 
      type: 'list', 
      ordered: false, 
      items: [
        'Ambient Blueprint Grid: A 30px CSS grid overlay that creates Z-depth without impacting performance.',
        'Human/Machine Toggle: An interactive state-flip on the root portrait that reveals the personality behind the architecture.',
        'Breadcrumb Pathing: Dynamic, terminal-style URL tracking embedded in the navigation bar.'
      ] 
    },

    // SEO & AUTHORITY
    { 
      type: 'heading', 
      level: 2, 
      content: 'Machine Readability & Authority' 
    },
    { 
      type: 'paragraph', 
      content: 'CHIRAG.OS is optimized not just for human eyes, but for LLMs and search indexers. It features a fully automated <code>sitemap.ts</code> generator, IndexNow protocol integration for instant Bing/Yandex discovery, and a robust JSON-LD structured data layer mapping my professional entity.' 
    },
    { 
      type: 'paragraph', 
      content: 'Furthermore, every project incorporates a <strong>Citation Engine</strong>. With a single click, users can copy a Wikipedia-grade Harvard/APA reference string, anchoring the project to a permanent UID.' 
    },

    // THE TERMINAL
    { 
      type: 'heading', 
      level: 2, 
      content: 'The Superuser Console' 
    },
    { 
      type: 'paragraph', 
      content: 'Hidden within the system tray is an interactive Command Line Interface. Triggered by clicking the "NOMINAL" status indicator, the terminal allows advanced users to query system directories, read raw status logs, and execute a diagnostic override that forcefully toggles the system into a high-contrast Light Theme.' 
    },

    // CONCLUSION
    { 
      type: 'highlight', 
      content: 'CHIRAG.OS is a living foundation. It ensures that as my skills and projects evolve, the architecture housing them will never bottleneck their presentation.' 
    }
  ]
};