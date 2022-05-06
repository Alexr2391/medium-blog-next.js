import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import { sanityClient, urlFor } from "../lib/sanity"
import { Post } from '../typings' 
import Link from 'next/link'

interface Props {
  posts: Post[];
}


const Home: NextPage<Props> = ({posts}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    {/* Posts */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
    {posts && posts.map((post) => {
      return (
        <Link 
          key={post._id}
          href={`/post/${post.slug.current}`}
        >
          <div className='group cursor-pointer border rounded-lg overflow-hidden'>
            <img
              className='h-60 w-full object-cover group-hover:scale-105 
              transition-transform ease-in-out' 
              src={urlFor(post.mainImage).url()!} 
              alt={post.description}
            />
            <div className='flex justify-between p-5 bg-white'>
              <div>
                <p className='text-lg font-bold'>{post.title}</p>
                <p className='text-xs'>{post.description} by {post.author.name}</p>
              </div>
              <img 
              className="h-12 w-12 rounded-full"
                src={urlFor(post.author.image).url()} 
                alt={post.author.name} 
              />
            </div>
          </div>
        </Link>  
      )})}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async() => {
  const query = `*[_type=="post"]{
    _id, 
    title, 
    author->{
      name,
      image
    },
      description, 
      mainImage, 
      slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  }
}

