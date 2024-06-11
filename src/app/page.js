import Image from "next/image";
import Styles from "./page.module.css";

// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";
import SectionHero from "@/ui/sections/hero-section/hero-section.component";
import ProjectSection from "@/ui/sections/projects-section/project-section.component";


// import { sanityFetch } from "@/sanity/client";
// import Link from "next/link";
// const PROJECT_QUERY = `*[_type == "project"]{_id, name, slug, image, liveView}`;


export default function Home() {
  // const projects = await sanityFetch({query: PROJECT_QUERY});

  return (
    <>
      <Navbar />
      <GradientBackgroundComponent />
      <main className={Styles.main}>
        <div className="wrapper">
          <SectionHero />
          <ProjectSection />
        </div>
      </main>
    </>
  );
}
