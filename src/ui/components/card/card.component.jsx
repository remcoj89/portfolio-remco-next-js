import Styles from './card.module.css';

import React from 'react'

export default function Card({children}) {
  return (
    <div className={Styles.card}>{children}</div>
  )
}
