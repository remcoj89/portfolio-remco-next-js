import Image from "next/image";
import Styles from "./page.module.css";

// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";



// import { sanityFetch } from "@/sanity/client";
// import Link from "next/link";
// const PROJECT_QUERY = `*[_type == "project"]{_id, name, slug, image, liveView}`;


export default function Home() {
  // const projects = await sanityFetch({query: PROJECT_QUERY});

  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        {/* Animated gradient background */}
        <GradientBackgroundComponent />

      </main>
    </>
  );
}
