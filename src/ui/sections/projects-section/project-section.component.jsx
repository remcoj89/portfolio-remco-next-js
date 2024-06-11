import VisualDesignIcon from '@/assets/icons/visual-design-icon';
import Styles from './project-section.module.css';
import CaseStudyIcon from '@/assets/icons/case-study-icon';
import ProjectsIcon from '@/assets/icons/projects-icon';
import ProjectCard from '@/ui/components/project-card/project-card.component';


export default function ProjectSection() {
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
        <div className={Styles.projectCardsWrapper}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}
