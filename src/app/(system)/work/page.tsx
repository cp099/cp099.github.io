import { Metadata } from 'next';
import CategoryHubView from "@/components/layout/CategoryHubView";

export const metadata: Metadata = {
  title: "Work Directory",
  description: "Explore the directory of systems engineering, professional roles, research papers, and major software builds by Chirag P Patil.",
};

export default function WorkPage() { return <CategoryHubView category="work" />; }