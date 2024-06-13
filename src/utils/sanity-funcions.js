import {client, sanityFetch} from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';

// Fetch Sanity Data from the CMS
export const fetchSanity = async (query, params) => {
  return sanityFetch(query, {params});
};

// Create Image Urls
const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
   ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
// End of Image Urls

export const getProjectImageUrl = (image) =>  image ? urlFor(image)?.width(550).height(310).url() : null;
