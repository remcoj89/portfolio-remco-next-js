'use client';

import Styles from './navbar.module.css';

// Hooks
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useState} from 'react'

// Icons
import { CloseIcon, BurgerIcon, EmailIcon } from '@/assets/icons/icons';

const NavBar = () => {
  const [cancelButtonChecked, setCancelButtonChecked] = useState(false);
  const pathname = usePathname();

  const mailSubject = "remcojonk@hotmail.com"

  function toggleMobileNav() {
    setCancelButtonChecked(!cancelButtonChecked)
  }

  function handleNavLinkClick() {
    setCancelButtonChecked(false)
  }

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.navWrapper}>
          <Link  className={Styles.logo} href="/">Remco Jonk</ Link>
          <input type="radio" name="slide" className={Styles.navButton} id={Styles.cancelButton} onChange={toggleMobileNav}/>
          <input type="radio" name="slide" className={Styles.navButton} id={Styles.menuButton} onChange={toggleMobileNav} />

          <ul className={Styles.navLinks}>

              <li className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`} onClick={handleNavLinkClick}>
                <Link href="/">home</Link>
              </li>
              <li><span className={Styles.navDivider} /></li>
              <li className={`${Styles.navLink} ${pathname === '/projects' ? `${Styles.active}` : ""}`} onClick={handleNavLinkClick}>
                <Link href="/projects">Mijn Werk</Link>
              </li>
              <li><span className={Styles.navDivider} /></li>
              <li className={Styles.navLink} onClick={handleNavLinkClick}>
                <Link className={Styles.contactLinkWrapper} href={`mailto: remcojonk@hotmail.com?subject=${mailSubject}`}>Contact</Link>
              </li>
          </ul>

          <label className={`${Styles.navButton} ${Styles.menuButton}`} htmlFor={Styles.menuButton}>
            <BurgerIcon color="#ffff"/>
          </label>
          <label className={`${Styles.navButton} ${Styles.cancelButton}`} htmlFor={Styles.cancelButton}>
                <CloseIcon color="#ffff" />
          </label>
        </div>
      </nav>
    </header>
  )
}


export default NavBar;



/*
           <ul className={Styles.navlinks} aria-expanded="false" id="navList">
              <li className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`}><Link href="/">home</Link></li>
              <li><span className={Styles.navDivider} /></li>
              <li className={`${Styles.navLink} ${pathname === '/projects' ? `${Styles.active}` : ""}`}><Link href="/projects">Mijn Werk</Link></li>
              <li><span className={Styles.navDivider} /></li>
              <li className={`${Styles.navLink} ${pathname === '#contact' ? `${Styles.active}` : ""}`}><Link className={Styles.contactLinkWrapper} href={`mailto: remcojonk@hotmail.com?subject=${mailSubject}`}><span className={Styles.emailIcon}><EmailIcon /></span> Contact</Link></li>
            </ul>

*/
