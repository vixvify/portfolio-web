import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <SiteHeader />
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
