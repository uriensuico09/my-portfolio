"use client";

import React, { useRef } from "react";
import LogoLoop from "./LogoLoop";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiFirebase, SiGit, SiGithub, SiFigma, SiVercel
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skillsData: { title: string; skills: Skill[] }[] = [
  { 
    title: "Frontend Development", 
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'group-hover/skill:text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'group-hover/skill:text-blue-400' },
      { name: 'React', icon: SiReact, color: 'group-hover/skill:text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover/skill:text-white' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover/skill:text-teal-400' },
      { name: 'HTML/CSS', icon: SiHtml5, color: 'group-hover/skill:text-orange-500' }
    ] 
  },
  { 
    title: "Backend & Cloud", 
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover/skill:text-green-500' },
      { name: 'SQL', icon: FaDatabase, color: 'group-hover/skill:text-blue-300' },
      { name: 'Firebase', icon: SiFirebase, color: 'group-hover/skill:text-yellow-500' }
    ] 
  },
  { 
    title: "Tools & Workflow", 
    skills: [
      { name: 'Git', icon: SiGit, color: 'group-hover/skill:text-red-500' },
      { name: 'GitHub', icon: SiGithub, color: 'group-hover/skill:text-white' },
      { name: 'VS Code', icon: VscVscode, color: 'group-hover/skill:text-blue-500' },
      { name: 'Figma', icon: SiFigma, color: 'group-hover/skill:text-pink-500' },
      { name: 'Vercel', icon: SiVercel, color: 'group-hover/skill:text-white' }
    ] 
  }
];

const SkillTag = ({ skill }: { skill: Skill }) => {
  const tagRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!tagRef.current) return;
    const rect = tagRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tagRef.current.style.setProperty("--mouse-x", `${x}px`);
    tagRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <span 
      ref={tagRef}
      onMouseMove={handleMouseMove}
      className="relative group/skill flex items-center gap-2 px-5 py-3 bg-blue-950/40 text-blue-100 rounded-xl text-base font-medium border border-blue-800/40 hover:bg-blue-900/80 hover:border-orange-500/60 hover:shadow-[0_0_15px_rgba(249,115,22,0.25)] transition-all duration-300 hover:-translate-y-1 cursor-default whitespace-nowrap overflow-hidden"
    >
      {/* Interactive Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle 50px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(249,115,22,0.25), transparent 100%)"
        }}
      />
      <skill.icon className={`relative z-10 text-2xl text-blue-300 transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:-rotate-12 ${skill.color}`} />
      <span className="relative z-10 transition-colors duration-300 group-hover/skill:text-orange-300">{skill.name}</span>
    </span>
  );
};

export default function SkillsSection() {
  const allSkills = skillsData.flatMap(category => category.skills);
  const topRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const bottomRow = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section id="skills" className="mb-16 pt-8">
      <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Technical Skills</h3>
      <div className="relative w-full py-4 reveal-on-scroll flex flex-col gap-6 overflow-hidden">
        <LogoLoop
          logos={topRow}
          speed={60}
          direction="left"
          gap={24}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="#172554" // Matches Tailwind bg-blue-950
          renderItem={(skill: Skill, key: React.Key) => (
            <SkillTag key={key} skill={skill} />
          )}
        />
        <LogoLoop
          logos={bottomRow}
          speed={60}
          direction="right"
          gap={24}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="#172554" // Matches Tailwind bg-blue-950
          renderItem={(skill: Skill, key: React.Key) => (
            <SkillTag key={key} skill={skill} />
          )}
        />
      </div>
    </section>
  );
}