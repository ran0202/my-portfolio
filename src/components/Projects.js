// src/components/Projects.js

import { FolderIcon } from '@heroicons/react/24/solid';
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FolderIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Contributed To
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            As a front-end developer, I’ve played a key role in building and enhancing several web applications. From implementing new features and improving user interfaces to debugging and optimizing code, these projects reflect my hands-on experience in real-world development using JavaScript and PHP. Below are some of the websites and systems I’ve helped bring to life.
            </p>
        </div>
        <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
                <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-full p-4 group"
                >
                <div className="relative overflow-hidden rounded-lg shadow-lg h-62 sm:h-75">
                    {/* IMAGE */}
                    <img
                    alt="gallery"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center px-6 text-center">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                    </h1>
                    <p className="leading-relaxed text-white overflow-y-auto max-h-full">
                        {project.description}
                    </p>
                    </div>
                </div>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
}