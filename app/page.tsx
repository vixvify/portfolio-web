import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { LoadingScreen } from "@/components/loading-screen";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="site-shell min-h-screen">
      <LoadingScreen />
      <div className="page-content">
        <SiteHeader />
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
