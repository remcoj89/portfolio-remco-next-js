import Card from '@/ui/components/card/card.component';
import Styles from './social-proof.module.css';
import ExperianceComponent from '@/ui/components/experiance-card/experiance.component';


export default function SocialProof() {
  return (
    <section id="socialProofSection">
      <div className={Styles.socialProofWrapper}>
        {/* Header */}
        <div className={Styles.socialProofHeader}>
          <h2>Vriendelijke Woorden</h2>
          <span className={Styles.subTitle}>Bekijk wat mijn klanten en partners te zeggen hebben over samen werken met mij</span>
        </div>

        {/* Revieuws */}
        <div className={Styles.reviewGrid}>

          <div className={`${Styles.gridItem} ${Styles.gridItem1}`}>
            <Card >
              <div className={Styles.reviewText}>
                <p>"Zijn werkkwaliteit is uitstekend! Ik geef de voorkeur aan Mehedi bij elk belangrijk ontwerpwerk. Hij werkt snel, netjes en presenteert geweldige bruikbare resultaten." </p>
              </div>
              <span className={Styles.reviewAuthor}>Harald Pfeifer</span>
            </Card>
          </div>

          <div className={`${Styles.gridItem} ${Styles.gridItem2}`}>
            <Card>
            <div className={Styles.reviewText}>
                <p>Ik kon mij geen betere developer wensen. De communicatie was 200% en dit ging boven mijn verwachtingen.</p>
                <p>Hij heeft mij nog wat extraatjes gegeven. Voor toekomstige projecten zal ik zeker met hem samenwerken. Blije en zeer tevreden klant</p>
            </div>

              <span className={Styles.reviewAuthor}>Valentino</span>
            </Card>
          </div>

          <div className={`${Styles.gridItem} ${Styles.gridItem3}`}>
            <Card>
            <div className={Styles.reviewText}>
              <p>Remco heeft aan veel projecten met ons samengewerkt en is er altijd doorheen gekomen. Remco is professioneel met oog voor detail en haalt zijn deadlines.</p>
              <p>Zijn werk is altijd uitstekend en gebruikt veel van zijn eigen creativiteit en begrijpt ons en onze projecten met eenvoudige aanwijzingen.</p>
              <p>Hij is gemakkelijk om mee te werken en reageert snel op elk verzoek dat we ooit hebben gehad.</p>
            </div>
              <span className={Styles.reviewAuthor}>Geoff Crutcher</span>
            </Card>
          </div>

        </div>

        {/* Experiance */}
        <ExperianceComponent />
      </div>
    </section>
  )
}
