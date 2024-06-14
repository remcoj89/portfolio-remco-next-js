import Styles from './footer.module.css';

// Hooks
import Link from 'next/link';
// Icons
import { GitHubIcon, InstaIcon, LinkedInIcon, MediumIcon } from '@/assets/icons/socials-icons';

export default function Footer() {
  return (
  <footer className={Styles.footer}>
    <div className="wrapper">
      <div className={Styles.footerWrapper}>
         <p>Remco Jonk  	&#169;2024</p>
         <ul className={Styles.socialMediaIcons}>
          <li className={Styles.socialMediaIcon}><Link href='#'><LinkedInIcon/></Link></li>
          <li className={Styles.socialMediaIcon}><Link href='#'><GitHubIcon/></Link></li>
          <li className={Styles.socialMediaIcon}><Link href='#'><MediumIcon/></Link></li>
          <li className={Styles.socialMediaIcon}><Link href='#'><InstaIcon/></Link></li>
         </ul>
      </div>
    </div>
  </footer>
  )
}
