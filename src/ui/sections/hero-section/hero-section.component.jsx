import DoubleArrowDown from '@/assets/icons/double-arrow-down-icon';
import Styles from './hero-section.module.css';

import React from 'react'

export default function SectionHero() {
  return (
  <section id="section-hero">
    <div className={Styles.heroWrapper}>
      <h1 className={Styles.heroTitle}>Crafting Memorable User Experiences for Business Success</h1>
      <h2 className={Styles.heroSubTitle}>I blend exquisite design with impeccable functionality for an exceptional
      user experience, while keeping users captivated.</h2>
      <DoubleArrowDown/>
    </div>
  </section>
  )
}
