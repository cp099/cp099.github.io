import { Metadata } from 'next';
import SubListView from "@/components/layout/SubListView";
import { CATEGORY_MAP, ContentType } from "@/types/system";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATEGORY_MAP.archive.map(sub => ({ sub }));
}

type Props = {
  params: Promise<{ sub: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sub } = await params;
  const displayTitle = sub.replace('-', ' ');
  const titleFormatted = displayTitle.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${titleFormatted}s | Archive`,
    description: `Access technical code snippets, experimental drafts, notes, and temporary logs under the ${displayTitle} archive category.`,
  };
}

export default async function Page({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <SubListView category="archive" sub={sub as ContentType} />;
}