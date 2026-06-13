import { Navbar } from "@/components/navbar";
import { ModelHeader } from "@/components/model-header";
import { ModelTabs } from "@/components/model-tabs";
import { PlaygroundSection } from "@/components/playground-section";
import { OverviewSection } from "@/components/overview-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <ModelHeader />
      <ModelTabs />
      <PlaygroundSection />
      <OverviewSection />
    </>
  );
}
