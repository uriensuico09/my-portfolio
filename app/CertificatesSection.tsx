"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const certificatesData = [
  { id: 1, title: "Blockchain Developer Training", issued: " 2026", type: "pdf", fileUrl: "/certificates/1.pdf", thumbnail: "/certificates/1-thumbnail.jpg" },
  { id: 3, title: "GETTING STARTED WITH FULL STACK JAVA DEVELOPER", issued: " 2026", type: "pdf", fileUrl: "/certificates/3.pdf", thumbnail: "/certificates/3-thumbnail.jpg" },
  { id: 2, title: "Introduction to Cybersecurity", issued: "2026", type: "pdf", fileUrl: "/certificates/2.pdf", thumbnail: "/certificates/2-thumbnail.jpg" },
  { id: 4, title: "C++ Essentials 1", issued: "2026", type: "pdf", fileUrl: "/certificates/4.pdf", thumbnail: "/certificates/4-thumbnail.jpg" },
  { id: 5, title: "JavaScript Essentials 1", issued: "2026", type: "pdf", fileUrl: "/certificates/5.pdf", thumbnail: "/certificates/5-thumbnail.jpg" },
  { id: 6, title: "Networking Basics", issued: "2026", type: "pdf", fileUrl: "/certificates/6.pdf", thumbnail: "/certificates/6-thumbnail.jpg" },
  { id: 7, title: "Python and Flask Frameworks", issued: "2026", type: "pdf", fileUrl: "/certificates/7.pdf", thumbnail: "/certificates/7-thumbnail.jpg" },
  { id: 8, title: "Python for Beginners", issued: "2026", type: "pdf", fileUrl: "/certificates/8.pdf", thumbnail: "/certificates/8-thumbnail.jpg" },
  { id: 9, title: "Python 101 for Data Science", issued: "2026", type: "jpg", fileUrl: "/certificates/9.jpg", thumbnail: "/certificates/9.jpg" },
  { id: 10, title: "Certificate 10", issued: "2026", type: "pdf", fileUrl: "/certificates/10.pdf", thumbnail: "/certificates/10-thumbnail.jpg" },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<{url: string, type: string, pdfUrl?: string} | null>(null);
  const [isHoveringCert, setIsHoveringCert] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <>
      <section id="certificates" className="mb-16 pt-8">
        <h3 className="text-2xl font-semibold mb-6 border-b border-orange-500/30 pb-2">Certifications</h3>
        <div className="relative w-full overflow-hidden mask-edges py-4 group/marquee reveal-on-scroll">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex gap-6 pr-6">
              {certificatesData.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.fileUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCert({ 
                      url: cert.thumbnail || cert.fileUrl, 
                      type: cert.thumbnail ? 'image' : cert.type,
                      pdfUrl: cert.type === 'pdf' ? cert.fileUrl : undefined
                    });
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                  onMouseEnter={() => setIsHoveringCert(true)}
                  onMouseLeave={() => setIsHoveringCert(false)}
                  onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
                  className="relative w-56 sm:w-80 flex-shrink-0 flex flex-col overflow-hidden rounded-xl border border-blue-800 bg-blue-950/95 shadow-sm transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-2 group cursor-pointer opacity-100 md:group-hover/marquee:opacity-40 hover:!opacity-100"
                >
                  {cert.thumbnail || cert.type === 'image' ? (
                    <div className="relative h-36 sm:h-48 overflow-hidden bg-blue-900/30 border-b border-blue-800/50">
                      <Image src={cert.thumbnail || cert.fileUrl} alt={cert.title} width={320} height={240} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  ) : (
                    <div className="relative flex h-36 sm:h-48 items-center justify-center overflow-hidden bg-blue-900/30 border-b border-blue-800/50">
                      <span className="text-6xl transition-transform duration-500 group-hover:scale-110">📄</span>
                    </div>
                  )}
                  <div className="p-4 flex flex-1 items-center justify-center bg-blue-950/40">
                    <h4 className="font-bold text-sm sm:text-md text-center text-blue-50 transition-colors group-hover:text-orange-400 line-clamp-2">{cert.title}</h4>
                  </div>
                </a>
              ))}
            </div>
            {/* Second Set for seamless infinite scrolling */}
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {certificatesData.map((cert) => (
                <a key={`${cert.id}-duplicate`} href={cert.fileUrl} onClick={(e) => { e.preventDefault(); setSelectedCert({ url: cert.thumbnail || cert.fileUrl, type: cert.thumbnail ? 'image' : cert.type, pdfUrl: cert.type === 'pdf' ? cert.fileUrl : undefined }); }} onContextMenu={(e) => e.preventDefault()} onMouseEnter={() => setIsHoveringCert(true)} onMouseLeave={() => setIsHoveringCert(false)} onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })} className="relative w-56 sm:w-80 flex-shrink-0 flex flex-col overflow-hidden rounded-xl border border-blue-800 bg-blue-950/95 shadow-sm transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-2 group cursor-pointer opacity-100 md:group-hover/marquee:opacity-40 hover:!opacity-100">
                  {cert.thumbnail || cert.type === 'image' ? (
                    <div className="relative h-36 sm:h-48 overflow-hidden bg-blue-900/30 border-b border-blue-800/50"><Image src={cert.thumbnail || cert.fileUrl} alt={cert.title} width={320} height={240} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                  ) : (
                    <div className="relative flex h-36 sm:h-48 items-center justify-center overflow-hidden bg-blue-900/30 border-b border-blue-800/50"><span className="text-6xl transition-transform duration-500 group-hover:scale-110">📄</span></div>
                  )}
                  <div className="p-4 flex flex-1 items-center justify-center bg-blue-950/40"><h4 className="font-bold text-sm sm:text-md text-center text-blue-50 transition-colors group-hover:text-orange-400 line-clamp-2">{cert.title}</h4></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-8 backdrop-blur-sm" onClick={() => setSelectedCert(null)} onContextMenu={(e) => e.preventDefault()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh] bg-blue-950 rounded-xl border border-blue-800 flex flex-col overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} role="document">
            <div className="flex justify-between items-center p-4 border-b border-blue-800 bg-blue-900/50">
              <h3 id="modal-title" className="text-white font-bold">Certificate Preview</h3>
              <div className="flex items-center gap-4">
                {selectedCert.pdfUrl && <a href={`${selectedCert.pdfUrl}#toolbar=0`} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors">Open PDF &rarr;</a>}
                <button type="button" onClick={() => setSelectedCert(null)} className="text-blue-200 hover:text-orange-500 font-bold text-2xl leading-none">&times;</button>
              </div>
            </div>
            <div className="flex-1 w-full h-full bg-blue-950/90 relative flex items-center justify-center overflow-hidden">
              {selectedCert.type === 'pdf' ? (
                <iframe src={`${selectedCert.url}#toolbar=0&view=FitH`} title="Certificate PDF Viewer" className="w-full h-full border-none bg-white" />
              ) : (
                <Image src={selectedCert.url} alt="Certificate Preview" fill className="object-contain p-2" unoptimized />
              )}
            </div>
          </div>
        </div>
      )}
      <div className={`hidden md:block fixed pointer-events-none z-[60] px-3 py-1.5 bg-orange-500 text-blue-950 text-sm font-bold rounded-md shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-opacity duration-200 ${isHoveringCert && !selectedCert ? 'opacity-100' : 'opacity-0'}`} style={{ left: `${mousePos.x + 15}px`, top: `${mousePos.y + 15}px` }} aria-hidden="true">
        Click to expand
      </div>
    </>
  );
}