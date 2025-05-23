// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Employment />
      <Projects />
      <Skills />
      <Hobbies />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}