import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-12 md:max-h-screen">
       
      <div className="text-left p-6 text-white space-y-2 lg:w-1/2 border-2 rounded-lg transition duration-700 ease-in-out transform hover:scale-105">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-900 to-purple-800 ">ABOUT ME:</h1>
        <h1 className="text-4xl font-bold">I am a Passionate FrontEnd Developer</h1>
        <p className="text-xl font-semibold">I am creating responsive, modern web applications.</p>
        <p className="text-xl font-semibold">As a Next.js enthusiast, I focus on fast, scalable, and efficient websites.</p>
        <p className="text-xl font-semibold">Driven by innovation, I combine design with seamless functionality.</p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:w-1/2 transition duration-700 ease-in-out transform hover:scale-105">
        <Image
          src="/images/AI_img_1.jpeg"
          alt="Developer"
          className="rounded-lg lg:w-full lg:h-full   hover:shadow-xl"
          width={550}
          height={550}
        />
      </div>
    </div>
    </>
  );
};

export default AboutMe;
