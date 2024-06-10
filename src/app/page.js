import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/components/navbar/navbar.component";

import { sanityFetch } from "@/sanity/client";
import Link from "next/link";
const PROJECT_QUERY = `*[_type == "project"]{_id, name, slug, image, liveView}`;


export default async function Home() {
  const projects = await sanityFetch({query: PROJECT_QUERY});
  console.log(projects)
  return (
    <>
    <Navbar />
    <main className={styles.main}>

    </main>
    </>
  );
}
