// Sanity CMS
import imageUrlBuilder from '@sanity/image-url';
import { client, sanityFetch } from "@/sanity/client";

// Sanity CMS
import { fetchSanity, getProjectImageUrl } from '@/utils/sanity-funcions';

import Link from 'next/link';
import Image from 'next/image';

// Components
import Navbar from "@/ui/components/navbar/navbar.component";

const PROJECT_QUERY = `*[
  _type == "project" &&
  slug.current == $slug
][0]{
  ...,
}`;




export default async function ProjectPAge({params}) {
  const project = await fetchSanity({
    query: PROJECT_QUERY,
    params,
    });

 const {
    buildTime,
    description,
    gallery,
    liveView,
    name,
    sourceCode,
    stack,
    Subtitle,
    thumbnail,
    type,
   } = project

   const projectImageUrl = getProjectImageUrl(thumbnail);

  return (
  <>
  <Navbar />
    <div className="wrapper">
      <section>
        <div className="projectWrapper">
          <h1>{name}</h1>
          <h4>{Subtitle}</h4>
          <Image src={projectImageUrl} width={500} height={500} alt={`Thumbnail foto van ${name} website`} />
        </div>
      </section>
    </div>
  </>
  )
}
