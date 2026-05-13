import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'india-air-quality-dataset',
  title: 'India Air Quality Dataset',
  date: '2025-03-23',
  category: 'work',
  type: 'project',
  uid: 'CPP-2025-AQI-DATASET',

  dependencies: ['Python', 'Pandas', 'CPCB Data', 'Excel'],

  summary:
    'A reverse-engineered AQI dataset built to estimate pollutant concentrations from CPCB AQI data, forming part of the data foundation behind BreatheEasy.',

  blocks: [

    // OPENING
    {
      type: 'paragraph',
      content:
        'This project was created as part of the early data engineering work behind <strong>BreatheEasy</strong>. While CPCB datasets provided AQI values, they did not expose pollutant-level data in a usable format for the forecasting pipeline we were building.'
    },

    {
      type: 'highlight',
      content:
        'The challenge was not collecting AQI data — it was reconstructing the missing pollutant information required to make the system usable.'
    },

    // PROBLEM
    {
      type: 'heading',
      level: 2,
      content: 'The Problem'
    },

    {
      type: 'paragraph',
      content:
        'Most publicly accessible CPCB datasets focused primarily on AQI values rather than detailed pollutant concentrations. For machine learning workflows, this created a major limitation — the system lacked the pollutant-level granularity needed for deeper forecasting and environmental analysis.'
    },

    {
      type: 'list',
      ordered: false,
      items: [
        'AQI data available without structured pollutant values',
        'Limited ML-ready preprocessing',
        'Inconsistent accessibility across cities',
        'No unified estimation workflow'
      ]
    },

    // APPROACH
    {
      type: 'heading',
      level: 2,
      content: 'Reverse Engineering Pollutants'
    },

    {
      type: 'paragraph',
      content:
        'To bridge this gap, I developed a generalized estimation system that derived approximate pollutant concentrations mathematically from AQI values using reverse-calculated scaling relationships.'
    },

    {
      type: 'paragraph',
      content:
        'Instead of city-specific tuning, the system intentionally used generalized estimation coefficients that could scale consistently across multiple datasets.'
    },

    {
      type: 'code',
      language: 'excel',
      code:
`PM2.5 = ROUND(AQI × 0.55, 2)
PM10  = ROUND(AQI × 1.08, 2)
NO2   = ROUND(AQI × 0.83, 2)
SO2   = ROUND(AQI × 1.14, 2)
CO    = ROUND(AQI × 0.0105, 2)`
    },

    {
      type: 'paragraph',
      content:
        'The formulas were designed through iterative testing and adjustment to reduce excessive deviation while still maintaining usable relationships between AQI and estimated pollutant values.'
    },

    // DATA STRUCTURE
    {
      type: 'heading',
      level: 2,
      content: 'Dataset Structure'
    },

    {
      type: 'paragraph',
      content:
        'The resulting dataset combined AQI information with estimated pollutant concentrations and weather parameters, creating a significantly richer structure for experimentation and forecasting workflows.'
    },

    {
      type: 'code',
      language: 'csv',
      code:
`City, Date, AQI, PM2.5, PM10, NO2, SO2, CO, O3
Bangalore, 2018-01-01, 68, 37.4, 73.44, 56.44, 77.52, 0.71, ...

+ Weather Parameters
- Temperature
- Humidity
- Pressure
- Cloud Cover
- Wind Speed
- Rainfall`
    },

    // SCALE
    {
      type: 'heading',
      level: 2,
      content: 'Coverage'
    },

    {
      type: 'data',
      metrics: [
        { label: 'Cities Covered', value: '5 Indian Cities' },
        { label: 'Core Source', value: 'CPCB AQI Data' },
        { label: 'Dataset Type', value: 'ML-Oriented AQI Dataset' },
        { label: 'Purpose', value: 'Forecasting Foundation' }
      ]
    },

    // IMPACT
    {
      type: 'heading',
      level: 2,
      content: 'Impact on BreatheEasy'
    },

    {
      type: 'paragraph',
      content:
        'Although the dataset was not perfectly accurate, it became an important experimental foundation during the development of BreatheEasy. It helped identify what the forecasting pipeline lacked, how pollutant relationships behaved, and what additional data engineering steps were required.'
    },

    {
      type: 'highlight',
      content:
        'This project was less about precision — and more about building missing infrastructure when clean data did not exist.'
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
        'One of the hardest parts was finding generalized formulas that produced stable approximations without creating extreme deviation across cities. The process involved repeated experimentation, comparison, and refinement.'
    },

    {
      type: 'paragraph',
      content:
        'This project reinforced an important lesson: data science is often constrained less by models and more by data availability, quality, and structure.'
    },

    // ACCESS
    {
      type: 'heading',
      level: 2,
      content: 'Project Access'
    },

    {
      type: 'paragraph',
      content: `
      <a href="https://github.com/cp099/India-Air-Quality-Dataset.git" target="_blank" rel="noopener noreferrer">
        View Dataset Repository on GitHub
      </a>
      `
    }

  ]
};