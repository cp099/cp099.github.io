import { Metadata } from 'next';
import SubListView from "@/components/layout/SubListView";
import { CATEGORY_MAP, ContentType } from "@/types/system";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATEGORY_MAP.journey.map(sub => ({ sub }));
}

type Props = {
  params: Promise<{ sub: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sub } = await params;
  const displayTitle = sub.replace('-', ' ');
  const titleFormatted = displayTitle.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const titlePlural = sub === 'education' ? titleFormatted : `${titleFormatted}s`;
  return {
    title: `${titlePlural} | Journey`,
    description: `Browse Chirag P Patil's milestones, experiences, and academic achievements under the ${displayTitle} category.`,
  };
}

export default async function Page({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <SubListView category="journey" sub={sub as ContentType} />;
}