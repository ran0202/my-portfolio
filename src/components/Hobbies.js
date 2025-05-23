// src/components/Hobbies.js

import { SparklesIcon } from '@heroicons/react/24/solid';
import React from "react";
import { hobbies } from "../data";

export default function Hobbies() {
  return (
    <section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <SparklesIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Hobbies & Interests
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Outside of work, I enjoy spending my time on various activities that keep me creative, active, and continuously learning.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 w-60 shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-white text-lg font-medium">{hobby}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
