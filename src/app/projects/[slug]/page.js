// Styles
import Styles from './project-page.module.css';
// Sanity CMS
import { fetchSanity, getProjectImageUrl } from '@/utils/sanity-funcions';
import { PortableText } from 'next-sanity';

import Link from 'next/link';
import Image from 'next/image';



const PROJECT_QUERY = `*[
  _type == "project" &&
  slug.current == $slug
][0]{
  ...,
}`;

// Dynamic Meta Data
export async function generateMetadata({params}) {

  // Fetching Data
  const project = await fetchSanity({
    query: PROJECT_QUERY,
    params,
    });

  const {
    name,
    Subtitle,
    thumbnail
   } = project

   const projectImageUrl = getProjectImageUrl(thumbnail);

  return {
    title: `Remco Jonk | Uit mijn beste werk: ${name}`,
    description: `${Subtitle}`,
    openGraph: {
      images: [projectImageUrl]
    },
    metadataBase: "https://remcojonk.nl",
    alternates: {
      canonical: `/projects/${name}`
    }
  }
}

// Project Page
export default async function ProjectPage({params}) {
  // Fetching Data
  const project = await fetchSanity({
    query: PROJECT_QUERY,
    params,
    });

 const {
    buildTime,
    backgroundcolor,
    description,
    gallery,
    liveView,
    logo,
    name,
    sourceCode,
    stack,
    Subtitle,
    thumbnail,
    type,
   } = project

   const projectImageUrl = getProjectImageUrl(thumbnail);

  return (
    <main className={Styles.main}>
      <div className="wrapper">
        <section id="project-hero-section">
          <div className={Styles.hero} >
            <div className={Styles.backgroundImage} style={{backgroundColor: backgroundcolor}} >
            <Image
              className={Styles.heroImage}
              src={projectImageUrl}
              width={500}
              height={250}
              alt={`Thumbnail foto van ${name} website`}
            />

            </div>
            <div className={Styles.heroProjectInfo}>
              <div>
                <h1>{name}</h1>
                <h4>{Subtitle}</h4>
              </div>
            </div>
              {description && description.length && (
                <div className={Styles.projectDescription}>
                  <PortableText value={description} />
                </div>
              )}
          </div>

        </section>
        <section>
          <div className="projectWrapper">

          </div>
        </section>
      </div>
    </main>
  )
}
