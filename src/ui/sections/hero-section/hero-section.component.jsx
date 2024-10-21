'use client';

import DoubleArrowDown from '@/assets/icons/double-arrow-down-icon';
import Styles from './hero-section.module.css';

import React from 'react'

export default function SectionHero() {

  const handleClick = () => {
   document.getElementById("projectSection").scrollIntoView({block: "end"})
  }
  return (
  <section id="section-hero">
    <div className={Styles.heroWrapper}>
      <p>Hoi, Ik ben Remco Jonk</p>
      <h1 className={Styles.heroTitle}>Freelance Front-end Developer</h1>
      <h2 className={Styles.heroSubTitle}>Gespecialiceerd in React, Next.js & Webflow</h2>
      <div onClick={handleClick}>
        <DoubleArrowDown/>
      </div>
    </div>
  </section>
  )
}
