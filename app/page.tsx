"use client";

import React, { useState, useEffect } from "react";
import NetworkDots from "./NetworkDots";
import ProjectsSection from "./ProjectsSection";

const certificatesData = [
  { id: 1, title: "Blockchain Developer Training", issued: "Jan 2024", type: "pdf", fileUrl: "/certificates/1.pdf", thumbnail: "/certificates/1-thumbnail.jpg" },
  { id: 3, title: "GETTING STARTED WITH FULL STACK JAVA DEVELOPER", issued: "Jun 2023", type: "pdf", fileUrl: "/certificates/3.pdf", thumbnail: "/certificates/3-thumbnail.jpg" },
  { id: 2, title: "Introduction to Cybersecurity", issued: "2023", type: "pdf", fileUrl: "/certificates/2.pdf", thumbnail: "/certificates/2-thumbnail.jpg" },
  { id: 4, title: "C++ Essentials 1", issued: "2023", type: "pdf", fileUrl: "/certificates/4.pdf", thumbnail: "/certificates/4-thumbnail.jpg" },
  { id: 5, title: "JavaScript Essentials 1", issued: "2022", type: "pdf", fileUrl: "/certificates/5.pdf", thumbnail: "/certificates/5-thumbnail.jpg" },
  { id: 6, title: "Networking Basics", issued: "2022", type: "pdf", fileUrl: "/certificates/6.pdf", thumbnail: "/certificates/6-thumbnail.jpg" },
  { id: 7, title: "Python and Flask Frameworks", issued: "2021", type: "pdf", fileUrl: "/certificates/7.pdf", thumbnail: "/certificates/7-thumbnail.jpg" },
  { id: 8, title: "Python for Beginners", issued: "2021", type: "pdf", fileUrl: "/certificates/8.pdf", thumbnail: "/certificates/8-thumbnail.jpg" },
  { id: 9, title: "Python 101 for Data Science", issued: "2020", type: "jpg", fileUrl: "/certificates/9.jpg", thumbnail: "/certificates/9.jpg" },
  { id: 10, title: "Certificate 10", issued: "2020", type: "pdf", fileUrl: "/certificates/10.pdf", thumbnail: "/certificates/10-thumbnail.jpg" },
];

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<{url: string, type: string} | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedName, setTypedName] = useState("");
  const fullName = "Urien Adriane O. Suico";
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for the 500ms fade transition to finish before completely removing from DOM
      setTimeout(() => setIsLoading(false), 500); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isDeleting = false;
    let currentIndex = 0;

    const type = () => {
      if (!isDeleting && currentIndex <= fullName.length) {
        // Typing forward
        setTypedName(fullName.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(type, 100); // Typing speed
      } else if (isDeleting && currentIndex >= 0) {
        // Deleting backward
        setTypedName(fullName.slice(0, currentIndex));
        currentIndex--;
        timeoutId = setTimeout(type, 50); // Deleting speed (faster)
      } else if (!isDeleting && currentIndex > fullName.length) {
        // Pause at the end before deleting
        isDeleting = true;
        currentIndex--;
        timeoutId = setTimeout(type, 2500); // Wait 2.5 seconds when name is fully typed
      } else if (isDeleting && currentIndex < 0) {
        // Pause before re-typing
        isDeleting = false;
        currentIndex = 0;
        timeoutId = setTimeout(type, 500); // Wait half a second before re-typing
      }
    };

    const timer = setTimeout(type, 2400); // Delays the start for the loading screen

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutId);
    };
  }, []);

  // Listen for 'Escape' key to close the certificate modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) window.addEventListener('keydown', handleKeyDown);
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  // Toggle dark mode class on HTML document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden p-4 sm:p-8 md:p-24 max-w-4xl mx-auto font-sans text-blue-50 selection:bg-orange-500 selection:text-blue-950 transition-colors duration-500">
      <style>{`
        body::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Animated Loading Splash Screen */}
      {isLoading && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-blue-950 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-orange-500 text-6xl md:text-7xl font-bold mb-6 tracking-tighter animate-pulse shadow-orange-500 drop-shadow-lg">
            {"< UA />"}
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}

      <NetworkDots isDarkMode={isDarkMode} />
      
      {/* Main Content Wrapper with Fade-In / Slide-Up Animation */}
      <div className={`w-full transition-all duration-1000 delay-200 ease-out transform ${fadeOut ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

      {/* Navigation Menu */}
      <nav className="flex items-center justify-between mb-16 border-b border-blue-800/50 pb-4">
        <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base font-semibold">
          <a href="#skills" className="text-blue-200 hover:text-orange-500 transition-colors">Skills</a>
          <a href="#creative" className="text-blue-200 hover:text-orange-500 transition-colors">Creative Work</a>
          <a href="#projects" className="text-blue-200 hover:text-orange-500 transition-colors">Projects</a>
          <a href="#certificates" className="text-blue-200 hover:text-orange-500 transition-colors">Certifications</a>
        </div>
        
        {/* Dark/Light Mode Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 ml-4 flex-shrink-0 rounded-full bg-blue-900/40 hover:bg-orange-500 text-blue-200 hover:text-blue-950 transition-colors border border-blue-800 hover:border-orange-500 shadow-sm"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
          )}
        </button>
      </nav>

      {/* Header / Hero Section */}
      <section className="mb-16 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 min-h-[40px]">
            Hello, I'm <span className="text-orange-500">{typedName}<span className="animate-pulse font-light text-orange-400">|</span></span>
          </h1>
          <h2 className="text-xl text-blue-200 mb-6">IT Student & Aspiring Web Developer</h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            I am a passionate IT student focusing on frontend development, cloud infrastructure, and building great user experiences. 
            I also work as a freelance photographer, videographer, and video editor, bringing a strong creative eye and attention to detail to all my technical projects. Welcome to my digital portfolio!
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="mailto:your.email@example.com" className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-blue-950 font-bold rounded-lg transition-colors shadow-sm">
              Contact Me
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
          <img 
            src="/profile.png" 
            alt="Urien Adriane O. Suico" 
            className="w-full h-full object-cover rounded-full border-4 border-blue-800 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16 pt-8">
        <h3 className="text-2xl font-semibold mb-4 border-b border-orange-500/30 pb-2">Technical Skills</h3>
        <div className="flex flex-wrap gap-3">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-blue-900/40 text-blue-100 rounded-full text-sm font-medium border border-blue-800 hover:bg-orange-500/20 hover:border-orange-500/50 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Creative Work Section */}
      <section id="creative" className="mb-16 pt-8">
        <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Creative Experience</h3>
        <div className="border border-blue-800 p-6 sm:p-8 rounded-2xl shadow-sm bg-blue-950/95 hover:border-orange-500/50 transition-all duration-500 group relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text & Skills Content */}
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-2xl mb-3 text-blue-50 flex items-center gap-3">
                <span className="text-3xl">📸</span> Freelance Visual Creative
              </h4>
              <p className="text-blue-200 text-base leading-relaxed mb-6">
                Alongside my IT studies, I have extensive experience in visual storytelling. I shoot, direct, and edit high-quality photo and video content for clients. This creative background gives me a unique perspective on UI/UX design and digital media.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Photography', 'Videography', 'Premiere Pro', 'After Effects', 'Lightroom'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-900/40 text-orange-400 rounded-lg text-xs font-semibold border border-blue-800/50">{skill}</span>
                ))}
              </div>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100091884375823" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-blue-950 text-sm font-bold rounded-lg transition-colors shadow-sm">
                  View on Facebook <span className="text-lg leading-none">&rarr;</span>
                </a>
              </div>
            </div>
            
            {/* Asymmetric Image Grid */}
            <div className="flex-1 w-full grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80" alt="Photography sample 1" className="w-full h-32 sm:h-40 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1554046920-90dc5f3ac6ed?auto=format&fit=crop&w=400&q=80" alt="Photography sample 2" className="w-full h-24 sm:h-32 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="flex flex-col pt-6 sm:pt-10">
                <div className="overflow-hidden rounded-xl border border-blue-800/50 hover:border-orange-500 shadow-sm hover:shadow-orange-500/20 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80" alt="Photography sample 3" className="w-full h-52 sm:h-64 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Certificates Section */}
      <section id="certificates" className="mb-16 pt-8">
        <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Certifications</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <a
              key={cert.id}
              href={cert.fileUrl}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCert({ url: cert.fileUrl, type: cert.type });
              }}
              onContextMenu={(e) => e.preventDefault()}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-800/40 bg-blue-950/60 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-blue-900/60 cursor-pointer"
            >
              {cert.thumbnail || cert.type === 'image' ? (
                <div className="relative h-48 overflow-hidden bg-blue-900/20">
                  <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={cert.thumbnail || cert.fileUrl} alt={cert.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ) : (
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-blue-900/20">
                  <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <span className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 opacity-80">📄</span>
                </div>
              )}
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <span className="inline-block px-2 py-1 mb-3 bg-blue-900/50 text-blue-200 text-xs font-semibold rounded border border-blue-800/30">{cert.issued}</span>
                  <h4 className="font-bold text-lg text-blue-50 transition-colors duration-300 group-hover:text-orange-400 line-clamp-2">{cert.title}</h4>
                </div>
                <span className="mt-4 text-sm font-semibold text-orange-500 flex items-center gap-1 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  View Certificate <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-blue-300 text-sm border-t border-blue-800/50 mt-16">
        <p>&copy; {new Date().getFullYear()} Urien Adriane O. Suico. All rights reserved.</p>
      </footer>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-8 backdrop-blur-sm" onClick={() => setSelectedCert(null)} onContextMenu={(e) => e.preventDefault()}>
          <div className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh] bg-blue-950 rounded-xl border border-blue-800 flex flex-col overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-blue-800 bg-blue-900/50">
              <h3 className="text-white font-bold">Certificate Preview</h3>
              <button onClick={() => setSelectedCert(null)} className="text-blue-200 hover:text-orange-500 font-bold text-2xl leading-none">&times;</button>
            </div>
            <div className="flex-1 w-full h-full bg-blue-950/90 relative flex items-center justify-center overflow-hidden">
              {selectedCert.type === 'pdf' ? (
                <iframe src={`${selectedCert.url}#toolbar=0&view=FitH`} className="w-full h-full border-none bg-white" />
              ) : (
                <img src={selectedCert.url} alt="Certificate Preview" className="max-w-full max-h-full object-contain p-2" />
              )}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
