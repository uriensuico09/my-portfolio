import React from "react";
import Image from "next/image";

const projectsData = [
  { 
    id: 1, 
    title: "HCDC Logbooks", 
    description: "A digital logbook and records management system developed for HCDC. Built to efficiently track, manage, and monitor entries with a clean, modern user interface.", 
    image: "/hcdc-logs.jpg", // Make sure to place your image file inside the "public" folder
    tags: ["PHP", "SQL", "LARAVEL",  "JAVASCRIPT", "HTML", "CSS"],
    github: "https://github.com/uriensuico09/HCDC-LAB-SYSTEM",
    demo: "" 
  }
  
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 pt-8">
      <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project, index) => (
          <div key={project.id} className="group flex flex-col border border-blue-800/40 bg-blue-950/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-blue-900/40 reveal-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="relative h-48 overflow-hidden bg-blue-900/20">
              <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image src={project.image} alt={project.title} width={600} height={400} unoptimized={project.image.startsWith('http')} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="font-bold text-xl mb-3 text-blue-50 group-hover:text-orange-400 transition-colors">{project.title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-blue-900/50 text-orange-300 rounded-md text-xs font-semibold border border-blue-800/30">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-blue-800/30">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors">
                    Live Demo <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-100 font-semibold text-sm transition-colors">
                    Source Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}