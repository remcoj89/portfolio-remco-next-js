'use client'
import Styles from './gradient-backround.module.css';

import React from 'react'

export default function gradientBackgroundComponent() {
  return (
    <div className={Styles.gradientBg}>
      <svg className={Styles.backgroundSvg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={Styles.gradientsContainer}>
        <div className={Styles.gradient1} />
        <div className={Styles.gradient2} />
        <div className={Styles.gradient3} />
        <div className={Styles.gradient4} />
        <div className={Styles.gradient5} />
      </div>
    </div>
  )
}
