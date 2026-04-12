"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const creativeImagesData = [
  { id: 1, src: "/creative-1.jpg", alt: "Creative work 1" },
  { id: 2, src: "/creative-2.jpg", alt: "Creative work 2" },
  { id: 3, src: "/creative-3.jpg", alt: "Creative work 3" },
  { id: 4, src: "/creative-4.jpg", alt: "Creative work 4" },
];

export default function CreativeSection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Accessibility: Close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight' && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((prev) => prev !== null ? (prev + 1) % creativeImagesData.length : null);
      } else if (e.key === 'ArrowLeft' && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((prev) => prev !== null ? (prev - 1 + creativeImagesData.length) % creativeImagesData.length : null);
      }
    };
    if (selectedPhotoIndex !== null) window.addEventListener('keydown', handleKeyDown);
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <>
      <section id="creative" className="mb-16 pt-8">
        <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Creative Experience</h3>
        <div className="border border-blue-800 p-6 sm:p-8 rounded-2xl shadow-sm bg-blue-950/95 hover:border-orange-500/50 transition-all duration-500 group/card relative overflow-hidden reveal-on-scroll">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10 group-hover/card:bg-orange-500/10 transition-colors duration-500 pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col justify-center">
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
                  className="relative overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedPhotoIndex(0)}
                >
                  <img src="/creative-1.jpg" alt="Creative work 1" loading="lazy" className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <svg className="w-10 h-10 text-orange-500 transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300">
                  <video autoPlay loop muted playsInline className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-700">
                    <source src="/creative-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {creativeImagesData.map((img, index) => (
                  <div 
                    key={img.id} 
                    className="relative overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer group reveal-on-scroll"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setSelectedPhotoIndex(index)}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-24 sm:h-32 object-cover hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <svg className="w-6 h-6 text-orange-500 transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md transition-opacity duration-300" onClick={() => setSelectedPhotoIndex(null)} role="dialog" aria-modal="true" aria-label="Image gallery lightbox">
          <button type="button" onClick={() => setSelectedPhotoIndex(null)} className="absolute top-6 right-6 sm:top-8 sm:right-8 text-blue-200 hover:text-orange-500 font-bold text-4xl leading-none z-10 transition-colors drop-shadow-lg" aria-label="Close lightbox">&times;</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedPhotoIndex((prev) => prev !== null ? (prev - 1 + creativeImagesData.length) % creativeImagesData.length : null); }} className="absolute left-2 sm:left-8 p-2 text-blue-200 hover:text-orange-500 font-bold text-5xl sm:text-7xl z-10 transition-transform hover:-translate-x-2 drop-shadow-lg focus:outline-none" aria-label="Previous photo">&#8249;</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedPhotoIndex((prev) => prev !== null ? (prev + 1) % creativeImagesData.length : null); }} className="absolute right-2 sm:right-8 p-2 text-blue-200 hover:text-orange-500 font-bold text-5xl sm:text-7xl z-10 transition-transform hover:translate-x-2 drop-shadow-lg focus:outline-none" aria-label="Next photo">&#8250;</button>
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src={creativeImagesData[selectedPhotoIndex].src} alt={creativeImagesData[selectedPhotoIndex].alt} fill className="object-contain drop-shadow-2xl transition-all duration-300" unoptimized />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-200 text-sm font-semibold tracking-widest z-10 drop-shadow-md">{selectedPhotoIndex + 1} / {creativeImagesData.length}</div>
        </div>
      )}
    </>
  );
}