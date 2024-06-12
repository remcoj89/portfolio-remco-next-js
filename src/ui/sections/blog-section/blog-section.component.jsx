import Styles from './blog-section.module.css';
// Components
import CardsWrapper from '@/ui/components/cards-wrapper/cards.wrapper.compenent';
import Button from '@/ui/components/button/button.component';
import ProjectCard from '@/ui/components/project-card/project-card.component';

// Icons
import ArrowRight from '@/assets/icons/arrow-right-icon';

export default function BlogSection() {
  return (
    <section id="blogSection">
            <div className={Styles.cardsGridSectionWrapper}>
        {/* Header */}
        <div className={Styles.cardsGridSectionHeader}>
          <div className={Styles.cardsGridSectionHeaderText}>
            <h2>Blog & Resources</h2>
            <p>Ik houd ervan om te schrijven wanneer ik maar kan. Hier zijn enkele van mijn blogs  en bronnen voor de ontwerpers en ontwikkelaars.</p>
          </div>
        </div>

        {/* Project Cards */}
        <CardsWrapper >
          <ProjectCard imageHeight={250} imageWidth={500}/>
          <ProjectCard imageHeight={250} imageWidth={500}/>
          <ProjectCard imageHeight={250} imageWidth={500}/>
        </CardsWrapper>

        <div className={Styles.btnWrapper}>
          <Button link='/blog'>Deze kant op voor meer <ArrowRight/></Button>
        </div>
      </div>
    </section>

  )
}
