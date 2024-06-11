import Styles from './project-card.module.css';

import Image from 'next/image';
import Link from 'next/link';

import ArrowIcon from '@/assets/icons/arrow-icon';

export default function ProjectCard() {
  return (
    <div className={Styles.projectCard}>
      <Image className={Styles.cardImage} src="/assets/images/Rectangle 22projectcard1.png" height={500} width={500} alt="" />
    <div className={Styles.cardContent}>
      <div >
        <span className={Styles.projectInfo}>Vue.js | Figma | Vercel</span>
        <span className={Styles.projectInfo}>B&B Schermer</span>
      </div>
      <Link className={Styles.cardBtn} href="/"><ArrowIcon/></Link>
     </div>
    </div>
  )
}
