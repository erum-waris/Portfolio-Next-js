import React from "react";

import Image from "next/image"
import SkillsBar from "./Skillsbar";
import ImageSlider from "@/app/components/Image-slider";

const SkillsSection: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto py-2 px-4 bg-green-200">
        <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-12 text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="shadow-[0_0_8px_6px_rgb(39,210,216)] pt-4 flex items-center justify-center mb-4 rounded-lg p-2">
            <ImageSlider />
          </div>
          <div className="transition-all duration-1000 ease-in-out mb-8 md:p-2 hover:shadow-[0_0_8px_6px_rgb(204,45,143)] hover:scale-105 border-4 border-double h-auto border-pink-500">
            <SkillsBar />
           < Image src="/images/developer_logo.jpg" alt="developer logo" width={500} height={500} 
           className="hidden md:flex md:pl-10 rounded-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;