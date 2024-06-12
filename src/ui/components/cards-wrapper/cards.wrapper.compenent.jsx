import Styles from './card-wrapper.module.css';

export default function CardsWrapper({children}) {
  return (
    <div className={Styles.cardsWrapper}>{children}</div>
  )
}
