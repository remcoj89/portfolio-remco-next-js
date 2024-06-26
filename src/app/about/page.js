import Styles from "../page.module.css";

// Components
import Navbar from "@/ui/components/navbar/navbar.component";
import GradientBackgroundComponent from "@/ui/components/gradient-background/gradient-background.component";

export const metadata = {
  title:  "Remco Jonk | Over mij",
  description: "Dit is een meta description"
}

export default function Home() {

  return (
    <>
      <Navbar />
      <GradientBackgroundComponent />
      <main className={Styles.main}>
        <div className="wrapper">
         <h1>Over Remco</h1>
        </div>
      </main>
    </>
  );
}
