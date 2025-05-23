// src/components/Skills.js

import { CheckBadgeIcon, CpuChipIcon } from '@heroicons/react/24/solid';
import React from "react";
import { developerSkills, officeSkills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I specialize in building responsive, user-friendly web applications using core web technologies. My skill set also includes administrative and organizational skills gained through office-based roles.
          </p>
        </div>

        {/* Developer Skills */}
        <h2 className="text-2xl text-white font-semibold mb-4 text-center">Developer Skills</h2>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-8 -mx-2">
          {developerSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Office Staff Skills */}
        <h2 className="text-2xl text-white font-semibold mt-10 mb-4 text-center"> Office Staff Skills </h2>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto -mx-2">
          {officeSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
