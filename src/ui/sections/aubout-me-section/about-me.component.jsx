import Styles from './about-me.module.css';
// Hooks
import Image from 'next/image';
// Components
import Button from '@/ui/components/button/button.component';

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
              <li><span>&#x1F3E1;</span> Geboren en getogen in het pitoreske Schermerhon. Geeft niet als je er nog nooit van hebt gehoord het is een heel klein dorpje onder de rook van Alkmaar</li>
              <br />
              <li><span>&#128187;</span> Vroeger wilde ik vuilnisman worden of militair. Een daarvan is gelukt maar na 10 jaar werd het wel eens tijd voor iets nieuws en website bouwer is een goede tweede stap</li>
              <br />
              <li><span>&#127947;</span> Wanneer ik klaar ben met het maken van websites, ga ik graag even sporten je kan mij dan ook bijna dagelijks in de plaatselijke Crossfit box vinden</li>
            </ul>
            <Button link={`mailto: remcojonk@hotmail.com?subject=${mailSubject}`}>
              Zin in een (digitaal) <span>&#9749;</span> ?
            </Button>
          </article>

      </div>
    </section>
  )
}
