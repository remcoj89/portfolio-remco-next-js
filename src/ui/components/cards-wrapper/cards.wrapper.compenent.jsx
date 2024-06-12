import Styles from './card-wrapper.module.css';
import ProjectCard from '@/ui/components/project-card/project-card.component';

export default function CardsWrapper() {
  return (
    <div className={Styles.cardsWrapper}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}
