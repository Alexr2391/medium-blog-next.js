import { SanityProjectDetails } from '@sanity/image-url/lib/types/types';
import { FieldValues } from 'react-hook-form'


interface SanityConfig extends SanityProjectDetails {
    useCdn: boolean
};

export interface Post {
    _id: string, 
    _createdAt: string, 
    title: string,
    author: {
        name: string, 
        image: string, 
    }, 
    description: string, 
    mainImage: string, 
    slug: {
        current: string
    }, 
    body: [object],
    };

export type Data = {
        _id: string; 
        name?: string; 
        email?: string; 
        comment?: string;
      };
      
export type Error = {
    message?: string;
    err?: unknown
};


export interface IFormInput {
    _id: string; 
    name: string; 
    email: string; 
    comment: string;
};

export type FieldFiller = IFormInput | FieldValues; 

export type ResHandler = Data | Error;