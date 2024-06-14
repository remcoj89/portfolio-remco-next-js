'use client';
// React Hooks
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';

// Styling
import Styles from './navbar.module.css';
import Link from 'next/link';

// Components
import BurgerMenu from '@/assets/icons/burger-icon/icon-burger-menu.component';
import EmailIcon from '@/assets/icons/email-icon';


const Navbar = () => {
const pathname = usePathname()
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [screenWidth, setScreenWidth] = useState(null)

useEffect(() => {setScreenWidth(window.screen.width)},[])

// Toggle burger menu
const toggleBurgerMenu = () => { setIsMenuOpen(!isMenuOpen)}
  const mailSubject = "Let's talk"
  return (
  <>
    <nav className={Styles.navbar}>
      <div className="wrapper">
        <div className={Styles.navContainer}>
          <Link className={Styles.logo} href="/">Remco Jonk</ Link>
          <div className={Styles.navlinks} style={isMenuOpen || screenWidth >= 478 ? {display: "flex"} : {display: "none"}}>
            <li className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`} ><Link href="/">home</Link></li>
            <span className={Styles.navDivider} />
            <li className={`${Styles.navLink} ${pathname === '/projects' ? `${Styles.active}` : ""}`} ><Link href="/projects">Mijn Werk</Link></li>
            <span className={Styles.navDivider} />
            <li className={`${Styles.navLink} ${pathname === '/about' ? `${Styles.active}` : ""}`} ><Link href="/about">Wie is Remco</Link></li>
            <li className={`${Styles.navLink} ${pathname === '#contact' ? `${Styles.active}` : ""}`} ><Link className={Styles.contactLinkWrapper} href={`mailto: remcojonk@hotmail.com?subject=${mailSubject}`}><span className={Styles.emailIcon}><EmailIcon /></span> Let's Talk</Link></li>
          </div>
          <div className={Styles.burgerMenu}>Menu <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isMenuOpen={isMenuOpen}/></div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar
