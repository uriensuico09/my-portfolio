"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "29cda32f-e4df-413d-9e7a-6ff0df3cd726");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Clear the form fields after sending
        setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mb-16 pt-8 text-center">
      <div className="border border-blue-800/40 bg-blue-950/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-16 shadow-sm max-w-2xl mx-auto relative overflow-hidden reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-50">Ready to start a project?</h3>
        <p className="text-sm md:text-base text-blue-200 mb-8 leading-relaxed text-justify">Whether you have a specific project in mind, need a freelance developer or creative, or just want to connect, my inbox is always open!</p>
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 text-left mt-8 max-w-xl mx-auto relative z-10">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Name</label><input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-blue-900/20 border border-blue-800/50 rounded-lg text-blue-50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John Doe" /></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Email</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-blue-900/20 border border-blue-800/50 rounded-lg text-blue-50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="john@example.com" /></div>
          </div>
          <div><label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Message</label><textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 bg-blue-900/20 border border-blue-800/50 rounded-lg text-blue-50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="How can I help you?"></textarea></div>
          <button type="submit" disabled={isSubmitting || isSubmitted} className="group inline-flex justify-center items-center gap-2 px-8 py-4 mt-4 bg-orange-500 hover:bg-orange-600 disabled:bg-blue-800 disabled:text-blue-300 text-blue-950 text-lg font-bold rounded-xl transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] disabled:shadow-none disabled:hover:translate-y-0 w-full sm:w-auto self-center">{isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent! ✅' : 'Send Message 🚀'}</button>
        </form>
      </div>
    </section>
  );
}