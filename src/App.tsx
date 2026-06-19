/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceAwards from "./components/ExperienceAwards";
import ServicesSection from "./components/ServicesSection";
import TechStackDashboard from "./components/TechStackDashboard";
import SelectedWorks from "./components/SelectedWorks";
import GithubContributions from "./components/GithubContributions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const [activeSegment, setActiveSegment] = useState("playground");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { language, t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Auto-scroll tracker using IntersectionObserver
  useEffect(() => {
    const sections = ["playground", "services", "case-studies", "about-me"];
    const observers = sections.map((secId) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSegment(secId);
            }
          });
        },
        { threshold: 0.2, rootMargin: "-80px 0px -20% 0px" }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const triggerScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d] font-sans antialiased text-neutral-900 flex flex-col justify-between py-0 md:py-6 lg:py-10 px-0 md:px-6 lg:px-12 xl:px-16 selection:bg-neutral-900 selection:text-white">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#ff5722] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Aesthetic outer decoration mimicking presentation frame */}
      <div className="absolute top-3 left-4 hidden lg:flex items-center gap-1 text-[11px] font-mono text-neutral-400 font-bold uppercase select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
        <span>{language === "vi" ? "Nguyễn Thái Nam • Hồ Sơ Chuyên Môn" : "Nguyễn Thái Nam • Professional Portfolio"}</span>
      </div>
      <div className="absolute top-3 right-4 hidden lg:flex items-center gap-4 text-[11.5px] font-mono text-neutral-400 font-bold uppercase select-none">
        <span>VITE • REACT 19</span>
        <span>TAILWIND v4.0</span>
      </div>

      {/* Main Container mimicking presentation card canvas from screenshot */}
      <div className="w-full max-w-7xl mx-auto bg-[#fcfcfc] rounded-none md:rounded-3xl shadow-[0_24px_50px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col border border-neutral-200/50 relative">
        
        {/* Dynamic Header */}
        <Header 
          onOpenBooking={() => setIsBookingOpen(true)} 
          activeSection={activeSegment} 
        />

        {/* Content sections stack */}
        <main className="flex-1">
          {/* Hero segment */}
          <Hero 
            onTalkClick={() => setIsBookingOpen(true)} 
            onSeeWorkClick={() => triggerScroll("case-studies")} 
          />

          {/* Working Experience & Awards & Recognition stacked */}
          <ExperienceAwards />

          {/* Services Section with custom WebMockups */}
          <ServicesSection 
            onSeeWorkClick={() => triggerScroll("case-studies")} 
          />

          {/* Interactive Tech Stack Dashboard */}
          <TechStackDashboard />

          {/* Selected Work visual gallery with interactive case study side-over drawer */}
          <SelectedWorks />

          {/* GitHub Contributions timeline & commit logs */}
          <GithubContributions />

          {/* Full inline contact form for clients scrolling till bottom */}
          <div id="contact-booking" className="w-full py-12 lg:py-16 px-4 lg:px-8 bg-neutral-50/50 border-t border-neutral-200/50">
            <div className="max-w-3xl mx-auto bg-white border border-neutral-200/60 p-6 sm:p-10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
              <ContactForm inlineMode={true} />
            </div>
          </div>
        </main>

        {/* Footer block */}
        <Footer onTalkClick={() => setIsBookingOpen(true)} />

      </div>

      {/* Interactive Floating Booking Scheduler Dialog Backdrop & Drawer */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dimmed backdrop */}
            <motion.div 
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
            />

            {/* Centered Modal Content Card */}
            <motion.div 
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border p-4 sm:p-8 scrollbar-thin"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute right-4 top-4 w-11 h-11 bg-neutral-50 hover:bg-neutral-100 active:scale-95 transition-all rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 border cursor-pointer"
                title={language === "vi" ? "Đóng" : "Close"}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono tracking-widest text-[#ff5722] font-black uppercase">
                    {language === "vi" ? "KÊNH LIÊN HỆ TRỰC TIẾP" : "DIRECT CHANNELS"}
                  </span>
                </div>
                
                {/* Embedded Appointment Sheet */}
                <ContactForm onClose={() => setIsBookingOpen(false)} inlineMode={false} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
