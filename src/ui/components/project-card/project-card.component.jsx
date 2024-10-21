import Styles from './project-card.module.css';

// Hooks
import Image from 'next/image';
import Link from 'next/link';

// Sanity CMS
import { getProjectImageUrl } from '@/utils/sanity-funcions';

// Components
import ArrowIcon from '@/assets/icons/arrow-icon';

export default function ProjectCard({props}) {
  const {name, subtitle, slug, thumbnail, backgroundcolor} = props

 const projectImageUrl = getProjectImageUrl(thumbnail);

  return (
    <Link href={`/projects/${slug.current}`}>
    <div className={Styles.projectCard}>
      <div className={Styles.imageWrapper} style={{backgroundColor: backgroundcolor}}>

      <Image
        className={Styles.cardImage}

        src={projectImageUrl}
        height={500} width={500}
        alt={`Screenshot van ${name} website`}
      />
      </div>
      <div className={Styles.cardContent}>
      <div >
        <span className={Styles.projectInfo}>{name}</span>
        <span className={Styles.projectInfo}>{subtitle}</span>
      </div>

      <div className={Styles.cardBtn}>
        <ArrowIcon/>
      </div>
     </div>
    </div>
     </Link>
  )
}
