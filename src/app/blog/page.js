import Styles from "../page.module.css";

// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";


export function generatedMetaData() {

  return {
    title: "Remco Jonk | Freelance Web Developer | Mijn werk",
    description:"Test",
    metadataBase: "localhost:3000",
    alternates: {
      canonical: `/projects`
    }
  }
}


export default function Home() {

  return (
    <>
      <Navbar />
      <GradientBackgroundComponent />
      <main className={Styles.main}>
        <div className="wrapper">
         <h1>Blog</h1>
        </div>
      </main>
    </>
  );
}
