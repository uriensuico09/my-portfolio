"use client";

import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-16 pt-8">
      <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Frontend Development", skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
          { title: "Backend & Cloud", skills: ['Node.js', 'SQL', 'Firebase'] },
          { title: "Tools & Workflow", skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'] }
        ].map((category, index) => (
          <div key={category.title} className="bg-blue-950/40 border border-blue-800/40 p-6 rounded-2xl backdrop-blur-sm shadow-sm hover:border-orange-500/30 transition-colors reveal-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
            <h4 className="text-lg font-bold text-orange-400 mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-blue-900/50 text-blue-100 rounded-lg text-xs font-medium border border-blue-800/30 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}