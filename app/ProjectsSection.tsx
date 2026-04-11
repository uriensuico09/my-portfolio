import React from "react";

const projectsData = [
  { 
    id: 1, 
    title: "HCDC Logbooks", 
    description: "A digital logbook and records management system developed for HCDC. Built to efficiently track, manage, and monitor entries with a clean, modern user interface.", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "#" 
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 pt-8">
      <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="group flex flex-col border border-blue-800/40 bg-blue-950/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-blue-900/40">
            <div className="relative h-48 overflow-hidden bg-blue-900/20">
              <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="font-bold text-xl mb-3 text-blue-50 group-hover:text-orange-400 transition-colors">{project.title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-blue-900/50 text-orange-300 rounded-md text-xs font-semibold border border-blue-800/30">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors mt-auto w-fit">
                View Project <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}