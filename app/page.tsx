"use client";

import React, { useState, useEffect } from "react";
import NetworkDots from "./NetworkDots";
import ProjectsSection from "./ProjectsSection";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import CreativeSection from "./CreativeSection";
import CertificatesSection from "./CertificatesSection";
import ContactSection from "./ContactSection";

const fullName = "Urien Adriane O. Suico";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

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
    let i = 0;
    let isDeleting = false;

    const type = () => {
      setTypedName(fullName.slice(0, i));

      let typeSpeed = isDeleting ? 50 : 100; // Type at 100ms, delete faster at 50ms

      if (!isDeleting && i === fullName.length) {
        typeSpeed = 2000; // Pause for 2 seconds at the end before deleting
        isDeleting = true;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        typeSpeed = 500; // Pause for half a second before typing again
      } else {
        i = isDeleting ? i - 1 : i + 1;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    const timer = setTimeout(() => {
      type();
    }, 2400); // Delays the start so it waits for the loading screen to finish

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutId);
    };
  }, []);

  // Monitor scroll position for the Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const timeoutId = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
      hiddenElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isLoading]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative z-10 w-full min-w-0 min-h-screen overflow-x-hidden p-4 sm:p-8 md:p-24 max-w-4xl mx-auto font-sans text-blue-50 selection:bg-orange-500 selection:text-blue-950">
      <style>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        /* Firefox */
        html {
          scrollbar-width: thin;
          scrollbar-color: #f97316 #172554;
        }
        /* WebKit (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #172554; /* Match blue-950 background */
        }
        ::-webkit-scrollbar-thumb {
          background: #f97316; /* orange-500 */
          border-radius: 6px;
          border: 3px solid #172554; /* Creates a padded effect inside the track */
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ea580c; /* orange-600 on hover */
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite; /* Decrease for faster, increase for slower */
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      @keyframes scrollReveal {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .reveal-on-scroll {
        opacity: 0;
        will-change: opacity, transform;
      }
      .reveal-on-scroll.is-revealed {
        animation: scrollReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @media (min-width: 768px) {
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px) translateY(40px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px) translateY(40px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .reveal-on-scroll.slide-in-left.is-revealed {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .reveal-on-scroll.slide-in-right.is-revealed {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
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

      <NetworkDots />
      
      {/* Main Content Wrapper with Fade-In / Slide-Up Animation */}
      <div className={`w-full transition-all duration-1000 delay-200 ease-out transform ${fadeOut ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-8 justify-center md:justify-start mb-12 md:mb-16 text-sm md:text-base font-semibold border-b border-blue-800/50 pb-4">
        <a href="#creative" className="text-blue-200 hover:text-orange-500 transition-colors">Creative Work</a>
        <a href="#projects" className="text-blue-200 hover:text-orange-500 transition-colors">Projects</a>
        <a href="#certificates" className="text-blue-200 hover:text-orange-500 transition-colors">Certifications</a>
        <a href="#contact" className="text-blue-200 hover:text-orange-500 transition-colors">Contact</a>
      </nav>

      <HeroSection typedName={typedName} />
      <AboutSection />
      <SkillsSection />
      <CreativeSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      {/* Footer */}
      <footer className="text-center py-8 text-blue-300 text-sm border-t border-blue-800/50 mt-16">
        <p>&copy; {new Date().getFullYear()} Urien Adriane O. Suico. All rights reserved.</p>
      </footer>
      </div>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-orange-500 text-blue-950 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300 z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} hover:bg-orange-600 hover:scale-110`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </main>
  );
}
