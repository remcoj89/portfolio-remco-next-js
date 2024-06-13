import Styles from './about-me.module.css';
// Hooks
import Image from 'next/image';
// Components
import Button from '@/ui/components/button/button.component';
import ArrowRight from '@/assets/icons/arrow-right-icon';
import EmailIcon from '@/assets/icons/email-icon';


export default function AboutMe() {
  return (
    <section id="about-me-section">
      <div className={Styles.aboutMeWrapper}>
          {/* Grid item 1 */}
          <h3 className={Styles.aboutMeTitle}>Mijn lange verhaal in het kort</h3>

          {/* Grid item 2 */}
          <div className={Styles.aboutMeCard}>
            <Image className={Styles.aboutMeImage} src='/assets/images/about-me-image-remco.png' height={400} width={400} alt="Remco Jonk" />
            <h3>Remco Jonk</h3>
            <span>Frontend en Webflow Developer</span>
          </div>

          {/* Grid item 3 */}
          <article className={Styles.aboutMeArticle}>
            <p>Van militair naar monteur tot code-enthousiast: mijn verhaal is doordrenkt van ongebruikelijke wendingen en verrassende ontdekkingen.</p>

            <p>Mijn naam is Remco Jonk</p>

            <p>As a former cricket team captain, I gained valuable teamwork and empathy skills that have helped me contribute positively to any situation.</p>

            <p>Now, I'm passionate about helping others, and I'm working to build a Designer Community to assist new designers in their journey to success.</p>
          </article>

          {/* Grid item 4 */}
          <div className={Styles.buttonWrapper}>
            <Button link='/about'>
              <EmailIcon/>  Let's Talk
            </Button>
          </div>
      </div>
    </section>
  )
}
