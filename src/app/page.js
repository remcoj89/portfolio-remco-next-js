import Styles from "./page.module.css";

// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";
import SectionHero from "@/ui/sections/hero-section/hero-section.component";
import ProjectSection from "@/ui/sections/projects-section/project-section.component";
import SocialProof from "@/ui/sections/solcial-proof-section/social-proof.component";
import BlogSection from "@/ui/sections/blog-section/blog-section.component";


export default function Home() {

  return (
    <>
      <Navbar />
      <GradientBackgroundComponent />
      <main className={Styles.main}>
        <div className="wrapper">
          <SectionHero />
          <ProjectSection />
          <SocialProof />
          <BlogSection />
        </div>
      </main>
    </>
  );
}
