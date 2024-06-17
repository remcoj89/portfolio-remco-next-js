import CardsWrapper from '../cards-wrapper/cards.wrapper.compenent';
import ProjectCard from '../project-card/project-card.component';

// Sanity CMS
import { fetchSanity } from '@/utils/sanity-funcions';
// import Link from "next/link";
const PROJECT_QUERY = `*[_type == "project"]{_id, name, Subtitle, slug, thumbnail, liveView}`;

export default async function ProjectsGrid() {
  const projects = await fetchSanity({query: PROJECT_QUERY});

  return (

    <CardsWrapper>
      {projects.sort((a, b) => b._id - a._id).map((project) => {
        return (
          <ProjectCard props={project} imageHeight={250} imageWidth={500} key={project._id}/>
        )
        })}
    </CardsWrapper>
  )
}
