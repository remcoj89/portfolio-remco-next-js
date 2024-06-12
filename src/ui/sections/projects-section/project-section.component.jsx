import Styles from './project-section.module.css';
// Components
import CardsWrapper from '@/ui/components/cards-wrapper/cards.wrapper.compenent';
import Button from '@/ui/components/button/button.component';
// Icons
import VisualDesignIcon from '@/assets/icons/visual-design-icon';
import CaseStudyIcon from '@/assets/icons/case-study-icon';
import ProjectsIcon from '@/assets/icons/projects-icon';
import ArrowRight from '@/assets/icons/arrow-right-icon';


// import { sanityFetch } from "@/sanity/client";
// import Link from "next/link";
// const PROJECT_QUERY = `*[_type == "project"]{_id, name, slug, image, liveView}`;

export default function ProjectSection() {
// const projects = await sanityFetch({query: PROJECT_QUERY});
  return (
    <section id="projectSection">
      <div className={Styles. projectSectionWrapper}>
        {/* Header */}
        <div className={Styles.projectSectionHeader}>
          <div className={Styles.projecSectionHeaderText}>
            <h2>Mijn Werk</h2>
            <p>Hier zijn enkele van mijn frontend-projecten die mijn codeer vaardigheden en expertise. Klik op elk project om het te bekijken</p>
          </div>
          <div className={Styles.projectSectionHeaderIcons}>
              <div className={`${Styles.icon} `}><VisualDesignIcon/> <span>Visual Design</span></div>
              <div className={`${Styles.icon} `}><CaseStudyIcon/>< span>Case Study</span> </div>
              <div className={`${Styles.icon} `}><ProjectsIcon/> <span>Projects</span></div>
          </div>
        </div>

        {/* Project Cards */}
        <CardsWrapper />
        <div className={Styles.btnWrapper}>
          <Button>Deze kant op voor meer <ArrowRight/></Button>
        </div>
      </div>
    </section>
  )
}
