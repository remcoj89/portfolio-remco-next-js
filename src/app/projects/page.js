
// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";


// Sanity CMS
import ProjectsGrid from "@/ui/components/projects-grid/projects-grid.component";




export const metadata = {
  title:  "Remco Jonk | Een overzicht van mjjn beste werk",
  description: "Dit is een meta description"
}

export default async function Home() {

  return (
    <>
      <Navbar />
      <GradientBackgroundComponent />
      <main className="main">
        <div className="wrapper">
          <section>
            <h1>Een overzicht van mijn werk</h1>
              <ProjectsGrid />
          </section>
        </div>
      </main>
    </>
  );
}
