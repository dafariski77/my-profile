import Introduction from "../components/Introduction";
import BackendSpotlight from "../components/BackendSpotlight";
import IntegratedProjects from "../components/IntegratedProjects";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ModernTooling from "../components/ModernTooling";
import VolunteerSection from "../components/VolunteerSection";
import Education from "../components/Education";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-bg text-cyber-black p-8 md:p-16">
      <Introduction />

      <h2 className="text-4xl font-black mb-12 text-center decoration-4 underline decoration-cyber-lime underline-offset-8">
        PROFESSIONAL JOURNEY
      </h2>
      <ExperienceTimeline />
      <BackendSpotlight />

      <Education />

      <Skills />

      {/* Kept ModernTooling as a specific highlight section */}
      <ModernTooling />

      <IntegratedProjects />

      <VolunteerSection />

      <footer className="text-center font-bold mt-20 border-t-4 border-black pt-8">
        <p>&copy; {new Date().getFullYear()} - Built with Neobrutalism</p>
      </footer>
    </main>
  );
}
