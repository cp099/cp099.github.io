import { Metadata } from 'next';
import SubListView from "@/components/layout/SubListView";
import { CATEGORY_MAP, ContentType } from "@/types/system";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATEGORY_MAP.work.map(sub => ({ sub }));
}

type Props = {
  params: Promise<{ sub: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sub } = await params;
  const displayTitle = sub.replace('-', ' ');
  const titleFormatted = displayTitle.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${titleFormatted}s | Work`,
    description: `Browse Chirag P Patil's documentation and logs under the ${displayTitle} work category.`,
  };
}

export default async function Page({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <SubListView category="work" sub={sub as ContentType} />;
}