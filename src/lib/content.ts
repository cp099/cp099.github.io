import { ContentItem } from '@/types/system';
import { content as systemArchitecture } from '@/content/work/system-architecture';
import { content as learningNextjs } from '@/content/journey/learning-nextjs';
import { content as breatheeasy } from '@/content/work/breatheeasy';
import { content as sherlock } from '@/content/work/sherlock-python';
import { content as ylacEqualityClub } from '@/content/work/ylac-equality-club';
import { content as cauveryViceCaptain } from '@/content/work/cauvery-vice-captain';
import { content as pledgeCouncilFounder } from '@/content/work/pledge-council-founder';
import { content as cauveryHouseCaptain } from '@/content/work/cauvery-house-captain';
import { content as atlStudentMentor } from '@/content/work/atl-student-mentor';
import { content as dipsmunLogistics } from '@/content/work/dipsmun-logistics';
import { content as ecoSummitRegistrations } from '@/content/work/eco-summit-registrations';
import { content as theEnigmaConfluence } from '@/content/work/the-enigma-confluence';
import { content as careerConnect } from '@/content/work/career-connect';
import { content as indiaAirQualityDataset } from '@/content/work/india-air-quality-dataset';

const ALL_CONTENT: ContentItem[] = [
  systemArchitecture,
  learningNextjs,
  breatheeasy,
  sherlock,
  ylacEqualityClub,
  cauveryViceCaptain,
  pledgeCouncilFounder,
  cauveryHouseCaptain,
  atlStudentMentor,
  dipsmunLogistics,
  ecoSummitRegistrations,
  theEnigmaConfluence,
  careerConnect,
  indiaAirQualityDataset,
];



export function getAllContent(): ContentItem[] {
  return [...ALL_CONTENT].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getContentByCategory(category: string): ContentItem[] {
  return getAllContent().filter((item) => item.category === category);
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return ALL_CONTENT.find((item) => item.slug === slug);
}