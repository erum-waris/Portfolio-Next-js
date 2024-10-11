"use client";
import React from "react";
import { ProjectCard } from "./ProjectCards";

const projects = [
  {
    title: "Next js Calculator",
    description:
      "I have created website using html css and javascript so check it out and share your feedback",
    image: "/images/project-1.png",
    url: "https://calculator-next-js-six.vercel.app/ ",
  },
  {
    title: "Clothing E Commerce Website ",
    description:
      "Here is E Commerce website with Next js so check it out and share your feedback",
    image: "/images/project-2.png",
    url: "https://e-commerce-website-pied-chi.vercel.app/"
  },
  {
    title: " E Commerce Book Store ",
    description:
      "Here is Book Store ECommerce website Project live link below click there and check it",
    image: "/images/project-3.png",
    url: "https://xounity-assignment-2.vercel.app/",
  },
  {
    title: "Periodic Table",
    description:
      "I made this Periodic Table Using HTML & CSS Check it from Live link below",
    image: "/images/project-4.png",
    url: " https://html-css-assignments-omega.vercel.app/",
  },
  {
    title: "Quiz App",
    description:
      "I made this CLI Based App with Typescript & Node js Check it From GitHub Source code",
    image: "/images/project-8.png",
    url: "https://erum",
  },
  {
    title: "Easypaisa App",
    description:
      "I have Created an Easypaisa App Using Typescript and Node js Check it on GitHub Source code",
    image: "/images/project-9.png",
    url: "",
  },
  {
    title: "Simple Website",
    description:
      "I have created a simple website Using HTML & CSS Here is Live Link check it and share your feedback",
    image: "/images/project-5.png",
    url: " https://html-css-assignments-o94x.vercel.app/",
  },
  {
    title: "Book Website Landing Page",
    description:
      "I have created Book website Landing Page Here is a Live link below",
    image: "/images/project-6.png",
    url: "https://xounity-assignments.vercel.app/",
  },
  {
    title: "Static Resume",
    description:
      "I Have created Static Resume Using HTML CSS and Typescript Here is a live link below",
    image: "/images/project-7.png",
    url: "https://static-resume-xi-roan.vercel.app/",
  },
];

const Project: React.FC = () => {
  return (
    <div className="container mx-auto  bg-black mb-8 p-8">
      <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-24 text-white">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}; 

export default Project;


// https://calculator-next-js-six.vercel.app/ calculator live link
// https://vercel.com/erum-waris-projects/e-commerce-website website
// https://static-resume-xi-roan.vercel.app/ static resume
// https://vercel.com/erum-waris-projects/xounity-assignment-2 qasim ali shah live link
// https://html-css-assignments-o94x.vercel.app/ Ai Assignment
// https://vercel.com/erum-waris-projects/xounity-assignments book website live link
// https://vercel.com/erum-waris-projects/html-css-assignments periodic table live link