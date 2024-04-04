import HeroSection from "@/components/landing/hero-section";
import SkillSection from "@/components/skills/skill-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillSection />
    </main>
  );
}
