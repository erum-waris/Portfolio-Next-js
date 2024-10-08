import React from 'react'
import Image from "next/image"
import Button from './Button'
function HeroSection() {
  return (
    <div  className='flex flex-col m-20 mb-10 md:flex-row'>
        <div className='md:m-10 lg:w-full lg:h-full '>

        <Image src="/images/developer.webp" alt="image" width="350" height="350"
        className='col-span-5 place-self-center lg:w-[300px] lg:h-[300px] md:ml-4 rounded-full  hover:animate-bounce'/>
  </div>
  <div className='md:m-6 md:p-6' >
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-blue-500 font-semibold mb-3 text-4xl font-serif hover:animate-pulse'>Hi, I'm ERUM WARIS</h1> 
        <br />
        <h2 className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-600 to-purple-500 font-semibold mt-6 md:mt-2 text-2xl font-serif hover:animate-bounce">I'm a Passionate Learner As a Next.js enthusiast, I focus on fast, scalable, and efficient websites.</h2>

        <Button text="Hire Me" />
        </div>
    </div>
  )
}

export default HeroSection