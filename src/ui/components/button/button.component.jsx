import Styles from './button.module.css';
import Link from 'next/link'

export default function Button({link, children}) {
  return (
    <Link className={`${Styles.btn} ${Styles.btnPrimary}`} href={link}>{children}</Link>
  )
}
