import { GetStaticPaths, GetStaticProps } from 'next'
import React, {FC} from 'react'
import { sanityClient } from '../../lib/sanity'
import { Post } from '../../typings'

interface Props {
  post: Post;
}

const PostId: FC<Props> = ({ post }) => {
  console.log(post)

  return (
    <div>Hello</div>
  )
}

export default PostId


export const getStaticPaths: GetStaticPaths = async() => {
  const query =`*[_type=="post"]{
      _id,
      slug {
        current
      }
    }
  `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post ) => ({
        params : {
          slug: post.slug.current
        }
    })
  );

  return {
    paths, 
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps= async({ params }) => {
  const query = `*[_type == "post" && slug.current == "$slug"][0]{
    _id, 
    createdAt, 
    title, 
    author-> {
      name, 
      image
    }, 
    description, 
    mainImage, 
    slug, 
    body
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug
  });

  if(!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}