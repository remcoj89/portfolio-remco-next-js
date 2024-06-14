import Styles from './project-card.module.css';

// Hooks
import Image from 'next/image';
import Link from 'next/link';

// Sanity CMS
import { getProjectImageUrl } from '@/utils/sanity-funcions';

// Components
import ArrowIcon from '@/assets/icons/arrow-icon';

export default function ProjectCard({props, imageHeight, imageWidth}) {
  const {name, Subtitle, slug, thumbnail} = props

 const projectImageUrl = getProjectImageUrl(thumbnail);

  return (
    <div className={Styles.projectCard}>
      <Image
        className={Styles.cardImage}
        style={{widht: imageWidth, height:imageHeight}}
        src={projectImageUrl}
        height={500} width={500}
        alt={`Screenshot van ${name} website`}
      />
      <div className={Styles.cardContent}>
      <div >
        <span className={Styles.projectInfo}>{name}</span>
        <span className={Styles.projectInfo}>{Subtitle}</span>
      </div>
      <Link className={Styles.cardBtn} href={`/projects/${slug.current}`}><ArrowIcon/></Link>
     </div>
    </div>
  )
}
