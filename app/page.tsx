import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import Navigation from "@/components/home/Navigation";
import ProjectsSection from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <main className="px-8 bg-[#0d0c0d]">
      <Navigation isHomeActive={true} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
