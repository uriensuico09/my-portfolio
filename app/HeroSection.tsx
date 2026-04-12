"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection({ typedName }: { typedName: string }) {
  return (
    <section className="mb-12 md:mb-16 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 mt-4 md:mt-0">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 min-h-[108px] sm:min-h-20 md:min-h-12">
          Hello, I&apos;m <span className="text-orange-500">{typedName}<span className="animate-pulse font-light text-orange-400">|</span></span>
        </h1>
        <h2 className="text-lg sm:text-xl text-blue-200 mb-4 sm:mb-6">IT Student & Aspiring Web Developer</h2>
        <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6 text-justify">
          I am a passionate IT student focusing on frontend development, cloud infrastructure, and building great user experiences. 
          I also work as a freelance photographer, videographer, and video editor, bringing a strong creative eye and attention to detail to all my technical projects. Welcome to my digital portfolio!
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-blue-950 font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]">
            Contact Me
            <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-blue-950 font-bold rounded-lg transition-colors shadow-sm">
            View CV
          </a>
          <a href="https://github.com/uriensuico09" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-900/40 hover:bg-orange-500 hover:text-blue-950 text-blue-200 rounded-lg transition-all border border-blue-800 hover:border-orange-500 shadow-sm" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.facebook.com/urienadriane.suico/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-900/40 hover:bg-orange-500 hover:text-blue-950 text-blue-200 rounded-lg transition-all border border-blue-800 hover:border-orange-500 shadow-sm" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="mailto:urienadriane09@gmail.com" className="p-3 bg-blue-900/40 hover:bg-orange-500 hover:text-blue-950 text-blue-200 rounded-lg transition-all border border-blue-800 hover:border-orange-500 shadow-sm" aria-label="Gmail">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
        {/* Subtle glowing effect behind the image */}
        <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
        <Image 
          src="/profile.png" 
          alt="Urien Adriane O. Suico" 
          width={256}
          height={256}
          priority
          className="w-full h-full object-cover rounded-full border-4 border-blue-800 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
        />
      </div>
    </section>
  );
}