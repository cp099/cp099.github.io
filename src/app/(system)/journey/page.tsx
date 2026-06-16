import { Metadata } from 'next';
import CategoryHubView from "@/components/layout/CategoryHubView";

export const metadata: Metadata = {
  title: "Journey Directory",
  description: "Browse the milestones, education, leadership experiences, and learning trajectory shaping Chirag P Patil's path.",
};

export default function JourneyPage() { return <CategoryHubView category="journey" />; }