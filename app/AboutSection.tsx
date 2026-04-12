"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="mb-16 pt-8">
      <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">About Me</h3>
      <div className="bg-blue-950/40 border border-blue-800/40 p-6 sm:p-8 rounded-2xl backdrop-blur-sm shadow-sm hover:border-orange-500/30 transition-colors reveal-on-scroll">
        <p className="text-blue-200 leading-relaxed mb-4 text-sm sm:text-base md:text-lg text-justify">
          Hello! I am a dedicated IT student with a strong passion for crafting clean, intuitive, and dynamic digital experiences. My journey into technology started with a fascination for how things work under the hood, which quickly evolved into a love for frontend development, web design, and system architecture.
        </p>
        <p className="text-blue-200 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
          When I&apos;m not writing code or studying, you can usually find me exploring my creative side through photography and videography. I believe that having a strong visual eye helps me build better, more engaging user interfaces. I am constantly learning new technologies and am always looking for exciting opportunities to collaborate and grow!
        </p>
      </div>
    </section>
  );
}