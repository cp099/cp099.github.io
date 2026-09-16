import { ContentItem } from '@/types/system';
import { content as systemArchitecture } from '@/content/work/system-architecture';
import { content as learningNextjs } from '@/content/journey/learning-nextjs';
import { content as delhiPublicSchool } from '@/content/journey/delhi-public-school';
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
import { content as smartparkAssistant } from '@/content/work/smartpark-assistant';
import { content as doorOpenDetection } from '@/content/work/door-open-detection';
import { content as dualnozzleenginev1 } from '@/content/work/dual-nozzle-engine-v1';
import { content as electromagneticLaunchSystem } from '@/content/work/electromagnetic-launch-system';
import { content as christUniversity } from '@/content/journey/christ-university';
import { content as certificationsCredentials } from '@/content/journey/certifications-credentials';
import { content as aiScopeCompetition } from '@/content/work/ai-scope-competition';
import { content as valoraValuationSociety } from '@/content/work/valora-valuation-society';
import { content as cucaPromotionsSponsorships } from '@/content/work/cuca-promotions-sponsorships';
import { content as capsGroupPeerTrainer } from '@/content/work/caps-group-peer-trainer';
import { content as bycStudentCouncil } from '@/content/work/byc-student-council';
import { content as skillStakeholderManagement } from '@/content/journey/stakeholder-management';
import { content as skillEventManagement } from '@/content/journey/event-management';
import { content as skillDataAnalysis } from '@/content/journey/data-analysis';
import { content as skillLeadership } from '@/content/journey/leadership';
import { content as skillFinancialAnalysis } from '@/content/journey/financial-analysis';
import { content as zenithos } from '@/content/work/zenithos';

const ALL_CONTENT: ContentItem[] = [
  systemArchitecture,
  learningNextjs,
  delhiPublicSchool,
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
  smartparkAssistant,
  doorOpenDetection,
  dualnozzleenginev1,
  electromagneticLaunchSystem,
  christUniversity,
  certificationsCredentials,
  aiScopeCompetition,
  valoraValuationSociety,
  cucaPromotionsSponsorships,
  capsGroupPeerTrainer,
  bycStudentCouncil,
  skillStakeholderManagement,
  skillEventManagement,
  skillDataAnalysis,
  skillLeadership,
  skillFinancialAnalysis,
  zenithos,
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