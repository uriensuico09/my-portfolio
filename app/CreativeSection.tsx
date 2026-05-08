"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import BorderGlow from "./BorderGlow";

const creativeMediaData = [
  { id: 0, type: 'image', src: "/c11.jpg", alt: "Creative work Cover" },
  { id: 1, type: 'video', src: "/creative-video.mp4", alt: "Creative Video" },
  { id: 2, type: 'image', src: "/c1.jpg", alt: "Creative work 1" },
  { id: 3, type: 'image', src: "/c2.jpg", alt: "Creative work 2" },
  { id: 4, type: 'image', src: "/c3.jpg", alt: "Creative work 3" },
  { id: 5, type: 'image', src: "/c4.jpg", alt: "Creative work 4" },
];

export default function CreativeSection() {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Accessibility: Close modal on 'Escape' key press
  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMediaIndex(null);
      } else if (e.key === 'ArrowRight' && selectedMediaIndex !== null) {
        setSelectedMediaIndex((prev) => prev !== null ? (prev + 1) % creativeMediaData.length : null);
      } else if (e.key === 'ArrowLeft' && selectedMediaIndex !== null) {
        setSelectedMediaIndex((prev) => prev !== null ? (prev - 1 + creativeMediaData.length) % creativeMediaData.length : null);
      }
    };
    if (selectedMediaIndex !== null) window.addEventListener('keydown', handleKeyDown);
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMediaIndex]);

  return (
    <>
      <section id="creative" className="mb-16 pt-8">
        <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2 reveal-on-scroll">Creative Experience</h3>
        <BorderGlow 
          className="p-6 sm:p-8 shadow-sm transition-all duration-500 group/card relative overflow-hidden reveal-on-scroll"
          backgroundColor="#172554" // Tailwind bg-blue-950
          glowColor="25 95 53"      // Tailwind orange-500 HSL
          colors={['#f97316', '#ea580c', '#c2410c']} // Orange gradient mesh
          borderRadius={16} // Matches rounded-2xl
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10 group-hover/card:bg-orange-500/10 transition-colors duration-500 pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col justify-center reveal-on-scroll slide-in-left">
              <h4 className="font-bold text-xl md:text-2xl mb-3 text-blue-50 flex items-center gap-3">
                <span className="text-3xl">📸</span> Freelance Visual Creative
              </h4>
              <p className="text-blue-200 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                Alongside my IT studies, I have extensive experience in visual storytelling. I shoot, direct, and edit high-quality photo and video content for clients. This creative background gives me a unique perspective on UI/UX design and digital media.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Photography', 'Videography','Drone Pilot', 'Premiere Pro','Photoshop', 'After Effects', 'Lightroom'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-900/40 text-orange-400 rounded-lg text-xs font-semibold border border-blue-800/50">{skill}</span>
                ))}
              </div>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100091884375823" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-blue-950 text-sm font-bold rounded-lg transition-colors shadow-sm">
                  View on Facebook <span className="text-lg leading-none">&rarr;</span>
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full flex flex-col gap-3 sm:gap-4 relative z-10">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div 
                  className="relative overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group reveal-on-scroll slide-in-left"
                  onClick={() => setSelectedMediaIndex(0)}
                >
                  <img src="/c11.jpg" alt="Creative work 1" loading="lazy" className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <svg className="w-10 h-10 text-orange-500 transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
                <div 
                  className="relative overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group reveal-on-scroll slide-in-right"
                  style={{ animationDelay: '150ms' }}
                  onClick={() => setSelectedMediaIndex(1)}
                >
                  <video autoPlay loop muted playsInline className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-700">
                    <source src="/creative-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <svg className="w-12 h-12 text-orange-500 transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {creativeMediaData.slice(2).map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`relative overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group reveal-on-scroll ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                    style={{ animationDelay: `${(index + 2) * 150}ms` }}
                    onClick={() => setSelectedMediaIndex(index + 2)}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-24 sm:h-32 object-cover hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <svg className="w-6 h-6 text-orange-500 transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BorderGlow>
      </section>

      {mounted && selectedMediaIndex !== null ? createPortal(
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md transition-opacity duration-300" onClick={() => setSelectedMediaIndex(null)} role="dialog" aria-modal="true" aria-label="Media gallery lightbox">
          <button type="button" onClick={() => setSelectedMediaIndex(null)} className="absolute top-6 right-6 sm:top-8 sm:right-8 text-blue-200 hover:text-orange-500 font-bold text-4xl leading-none z-20 transition-colors drop-shadow-lg" aria-label="Close lightbox">&times;</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex((prev) => prev !== null ? (prev - 1 + creativeMediaData.length) % creativeMediaData.length : null); }} className="absolute left-2 sm:left-8 p-2 text-blue-200 hover:text-orange-500 font-bold text-5xl sm:text-7xl z-[80] transition-transform hover:-translate-x-2 drop-shadow-lg focus:outline-none" aria-label="Previous item">&#8249;</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex((prev) => prev !== null ? (prev + 1) % creativeMediaData.length : null); }} className="absolute right-2 sm:right-8 p-2 text-blue-200 hover:text-orange-500 font-bold text-5xl sm:text-7xl z-[80] transition-transform hover:translate-x-2 drop-shadow-lg focus:outline-none" aria-label="Next item">&#8250;</button>
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {creativeMediaData[selectedMediaIndex].type === 'video' ? (
              <video src={creativeMediaData[selectedMediaIndex].src} controls autoPlay playsInline className="max-w-full max-h-full object-contain drop-shadow-2xl outline-none bg-black/50 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
            ) : (
              <Image src={creativeMediaData[selectedMediaIndex].src} alt={creativeMediaData[selectedMediaIndex].alt} fill className="object-contain drop-shadow-2xl transition-all duration-300" unoptimized />
            )}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-200 text-sm font-semibold tracking-widest z-10 drop-shadow-md">{selectedMediaIndex + 1} / {creativeMediaData.length}</div>
        </div>,
        document.body
      ) : null}
    </>
  );
}