import CursorFollow from "@/components/cursor-follow";
import {
  HeroSection,
  MissionSection,
  ValuesSection,
  CTASection,
} from "@/components/landing";

export default function HomePage() {
  return (
    <>
      <CursorFollow />

      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" />

      {/* Main content */}
      <main>
        <HeroSection />
        <MissionSection />
        <ValuesSection />
        <CTASection />
      </main>
    </>
  );
}
