import Styles from './experiance.module.css';

import React from 'react'

export default function ExperianceComponent() {
  return (
    <div className={Styles.experianceWrapper}>
      {/* Number of Years */}
      <div className={Styles.experiance}>
        <span className={Styles.experianceNumber}>3</span>
        <span className={Styles.experianceDescription}>Jaar Ervaring</span>
      </div>
      {/* Number of Projects */}
      <div className={Styles.experiance}>
        <span className={Styles.experianceNumber}>27</span>
        <span className={Styles.experianceDescription}>Projecten</span>
      </div>
      {/* Custommer satisfaction score */}
      <div className={Styles.experiance}>
        <span className={Styles.experianceNumber}>100%</span>
        <span className={Styles.experianceDescription}>Klant tevredenheid</span>
      </div>
    </div>
  )
}
