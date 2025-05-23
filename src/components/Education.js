// src/components/Education.js

import { AcademicCapIcon } from '@heroicons/react/24/solid';
import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Education
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My formal academic background in Information Technology provided the foundation for my career in tech, development, and systems support.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {education.map((edu, index) => (
            <div key={index} className="p-4 w-full sm:w-2/3 lg:w-1/2">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded shadow">
                <h2 className="text-lg text-white font-medium title-font mb-2">{edu.degree}</h2>
                <h3 className="text-green-400 text-sm mb-1">{edu.institution}</h3>
                <p className="leading-relaxed text-base">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
