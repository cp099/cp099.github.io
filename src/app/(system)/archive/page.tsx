import { Metadata } from 'next';
import CategoryHubView from "@/components/layout/CategoryHubView";

export const metadata: Metadata = {
  title: "System Archive",
  description: "A dense database of technical experiments, code snippets, notes, and drafts documenting Chirag P Patil's builder mindset.",
};

export default function ArchivePage() { return <CategoryHubView category="archive" />; }