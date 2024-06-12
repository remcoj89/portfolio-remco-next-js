'use client'
import Styles from './button.module.css';
import { useRouter } from 'next/navigation'

export default function Button({children}) {
  const router = useRouter()

  return (
    <button className={`${Styles.btn} ${Styles.btnPrimary}`} onClick={() => router.push('/about')}>{children}</button>
  )
}
