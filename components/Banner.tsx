import React, { FC } from 'react'

const Banner: FC = () => {
  return (
    <div className='flex justify-between items-center bg-yellow-400
     border-y border-black py-10'
    > 
      <div className='px-10 space-y-5'>
        <h1 className='text-6xl max-w-xl font-serif'>
          <span className='underline decoration-black decoration-4'>Medium</span> is a place to write read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and 
          connect with millions of readers
        </h2>
      </div>
      <img
            className='hidden md:inline-flex h-24 lg:h-52 lg:py-10 mr-5' 
            src="/m-logo.png" 
            alt="logo-capital" 
          />
    </div>
  )
}

export default Banner