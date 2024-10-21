import Styles from './about-me.module.css';
// Hooks
import Image from 'next/image';
// Components
import Button from '@/ui/components/button/button.component';
import ArrowRight from '@/assets/icons/arrow-right-icon';
import EmailIcon from '@/assets/icons/email-icon';


export default function AboutMe() {
  const mailSubject = "Let's talk"
  return (
    <section id="about-me-section">
      <div className={Styles.aboutMeWrapper}>
          {/* Grid item 1 */}
          <h3 className={Styles.aboutMeTitle}>Een aantal weetjes over mij</h3>

          {/* Grid item 2 */}
          <div className={Styles.aboutMeCard}>
            <Image className={Styles.aboutMeImage} src='/assets/images/about-me-image-remco.png' height={400} width={400} alt="Remco Jonk" />
            <h3>Remco Jonk</h3>
            <span>Frontend en Webflow Developer</span>
          </div>

          {/* Grid item 3 */}
          <article className={Styles.aboutMeArticle}>

            <h4>Hoi, ik ben Remco</h4>

            <ul>
              <li>&#x1F3E1; Geboren en getogen in het pitoreske Schermerhon. Geeft niet als je er nog nooit van hebt gehoord het is een heel klein dorpje onder de rook van Alkmaar</li>
              <br />
              <li>&#128187; Vroeger wilde ik vuilnisman worden of militair. Een daarvan is gelukt maar na 10 jaar werd het wel eens tijd voor iets nieuws en website bouwer is een goede tweede stap</li>
              <br />
              <li>&#127947; Wanneer ik klaar ben met het maken van websites, ga ik graag even sporten je kan mij dan ook bijna dagelijks in de plaatselijke Crossfit box vinden</li>
            </ul>
            <Button link={`mailto: remcojonk@hotmail.com?subject=${mailSubject}`}>
              Zin in een (digitaal) &#9749; ?
            </Button>
          </article>

      </div>
    </section>
  )
}
