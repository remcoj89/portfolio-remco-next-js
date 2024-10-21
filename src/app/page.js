import Styles from "./page.module.css";

// Components
import SectionHero from "@/ui/sections/hero-section/hero-section.component";
import ProjectSection from "@/ui/sections/projects-section/project-section.component";
import AboutMe from "@/ui/sections/aubout-me-section/about-me.component";



export default function Home() {

  return (
    <main className={Styles.main}>
      <div className="wrapper">
        <SectionHero />
        <ProjectSection />
        <AboutMe />
      </div>
    </main>
  );
}
