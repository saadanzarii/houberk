import { AboutSection } from "@/component/about";
import { HeroSection } from "@/component/hero";
import { StatsSection } from "@/component/stats";
import { TrustBadges } from "@/component/trust";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-white">
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <StatsSection />
    </main>
  );
}
