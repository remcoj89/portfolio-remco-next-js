
// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";


// Sanity CMS
import { fetchSanity } from '@/utils/sanity-funcions';
import ProjectsGrid from "@/ui/components/projects-grid/projects-grid.component";
// import Link from "next/link";
const PROJECT_QUERY = `*[_type == "project"]{_id, name, Subtitle, slug, thumbnail, liveView}`;




export const metadata = {
  title:  "Remco Jonk | Een overzicht van mjjn beste werk",
  description: "Dit is een meta description"
}

export default async function Home() {
  const projects = await fetchSanity({query: PROJECT_QUERY});

  return (
    <>
      <Navbar />
      <GradientBackgroundComponent />
      <main className="main">
        <div className="wrapper">
          <section>
            <h1>Showcasing my work</h1>
              <ProjectsGrid />
          </section>
        </div>
      </main>
    </>
  );
}
