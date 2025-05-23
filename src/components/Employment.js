// src/components/Employment.js

import { BriefcaseIcon } from '@heroicons/react/24/solid';
import React from "react";
import { employment } from "../data";

export default function Employment() {
  return (
    <section id="employment" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Employment History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A summary of my work experience across various roles, highlighting my technical, administrative, and problem-solving skills.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {employment.map((job, index) => (
            <div
              key={index}
              className="sm:w-1/2 w-full p-4 group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-62 sm:h-75 bg-gray-800 p-6 flex flex-col justify-between">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {job.position}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-2">
                  {job.company}
                </h1>
                <p className="leading-relaxed text-white text-sm mb-2 italic">
                  {job.duration}
                </p>
                <ul className="text-left text-white text-sm list-disc list-inside space-y-1 overflow-y-auto max-h-48">
                  {job.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
