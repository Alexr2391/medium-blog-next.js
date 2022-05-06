import { 
    createCurrentUserHook,
    createClient 
} from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url'

import { SanityConfig } from '../typings';


export const config: SanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, 
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', 
    useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config);

export const urlFor = (source : string) => imageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);
