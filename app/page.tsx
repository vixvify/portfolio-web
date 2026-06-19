import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-3 sm:gap-20 sm:px-8 lg:px-12 lg:py-5">
        <SiteHeader />
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
