/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { Mail, Menu, X, Globe, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export default function Header({ onOpenBooking, activeSection }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [vietnamTime, setVietnamTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setVietnamTime(formatted.toLowerCase());
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full bg-[#fcfcfc] border-b border-neutral-200/60 sticky top-0 z-40 px-4 py-3 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left side: branding/logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer group flex items-center gap-2.5 min-w-0"
        >
          <div className="w-9 h-9 bg-neutral-950 text-white font-display font-black text-xs rounded-xl flex items-center justify-center tracking-tighter transition-transform group-hover:scale-105 shadow-md font-bold shrink-0">
            NTN
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-mono leading-none tracking-wider text-neutral-400 font-bold uppercase truncate">SAP ABAP</span>
            <span className="text-xs font-bold leading-none font-sans text-neutral-900 mt-0.5 truncate">N. T. Nam</span>
          </div>
        </div>

        {/* Desktop navigation menu */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 mx-4">
          {[
            { label: t("header.intro"), id: "playground" },
            { label: t("header.skills"), id: "services" },
            { label: t("header.projects"), id: "case-studies" },
            { label: t("header.education"), id: "about-me" },
          ].map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`text-xs px-3 py-2 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] flex items-center justify-center ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right side controls (Language switcher, time coordinate, CTA button) */}
        <div className="flex items-center gap-2 lg:gap-3 text-[11px]">
          
          {/* Language toggle for desktop/tablet */}
          <div className="hidden sm:flex bg-neutral-100 p-0.5 rounded-lg border border-neutral-200/50 shrink-0">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold tracking-tight transition-all cursor-pointer min-h-[30px] flex items-center ${
                language === "en"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
              title="English translation"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold tracking-tight transition-all cursor-pointer min-h-[30px] flex items-center ${
                language === "vi"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-500"
              }`}
              title="Tiếng Việt"
            >
              VI
            </button>
          </div>

          {/* Time & Coordinates for Desktop */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-neutral-50 rounded-lg border border-neutral-200/50 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-neutral-400 leading-none">{t("header.thuduc")}</span>
              <span className="font-mono text-neutral-700 leading-none mt-1 font-semibold">{vietnamTime || "--:--:--"}</span>
            </div>
          </div>

          {/* Download CV CTA Button */}
          <a
            href="/Tnam_CV.pdf"
            download="Tnam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200/80 rounded-xl text-xs font-bold shadow-sm cursor-pointer flex items-center gap-2 transition-all active:scale-95 leading-none min-h-[44px] shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-neutral-500" />
            <span className="hidden sm:inline">{t("common.download_cv")}</span>
          </a>

          {/* Action CTA Button */}
          <button 
            type="button"
            onClick={onOpenBooking} 
            className="px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center gap-2 transition-all active:scale-95 leading-none min-h-[44px]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">{t("header.get_in_touch")}</span>
          </button>

          {/* Hamburger Mobile Menu toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 bg-neutral-100 hover:bg-neutral-200 active:scale-95 text-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 cursor-pointer transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-neutral-200/50 mt-3 bg-white rounded-2xl"
          >
            <div className="p-4 space-y-3">
              <span className="text-[9px] font-mono font-extrabold text-neutral-400 tracking-wider block uppercase">
                {language === "vi" ? "DANH MỤC TRANG" : "SITE DIRECTORY"}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: t("header.intro"), id: "playground" },
                  { label: t("header.skills"), id: "services" },
                  { label: t("header.projects"), id: "case-studies" },
                  { label: t("header.education"), id: "about-me" },
                ].map((tab) => {
                  const isActive = activeSection === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`text-xs px-3 py-3 rounded-xl font-bold transition-all text-left w-full min-h-[44px] flex items-center ${
                        isActive
                          ? "bg-neutral-950 text-white shadow-sm"
                          : "bg-neutral-50 border border-neutral-200/30 text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Download CV inside mobile panel */}
              <div className="pt-3 border-t border-dashed border-neutral-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-xs font-bold text-neutral-500">
                    {language === "vi" ? "Hồ Sơ Sơ Yếu" : "Curriculum Vitae"}
                  </span>
                </div>
                <a
                  href="/Tnam_CV.pdf"
                  download="Tnam_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-neutral-50 border border-neutral-200 text-neutral-800 text-[10px] font-bold tracking-tight transition-all cursor-pointer min-h-[30px] flex items-center gap-1.5"
                >
                  <Download className="w-3 h-3 text-neutral-500" />
                  <span>{t("common.download_cv")}</span>
                </a>
              </div>

              {/* Languages toggle inside mobile panel */}
              <div className="pt-3 border-t border-dashed border-neutral-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-xs font-bold text-neutral-500">
                    {language === "vi" ? "Ngôn Ngữ" : "Language"}
                  </span>
                </div>
                <div className="flex bg-neutral-100 p-0.5 rounded-lg border border-neutral-200/50">
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("en");
                    }}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold tracking-tight transition-all cursor-pointer min-h-[30px] min-w-[40px] flex items-center justify-center ${
                      language === "en"
                        ? "bg-white text-neutral-900 shadow-sm"
                        : "text-neutral-400"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("vi");
                    }}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold tracking-tight transition-all cursor-pointer min-h-[30px] min-w-[40px] flex items-center justify-center ${
                      language === "vi"
                        ? "bg-white text-neutral-900 shadow-sm"
                        : "text-neutral-400"
                    }`}
                  >
                    VI
                  </button>
                </div>
              </div>

              {/* Time tracker coordinates in mobile panel */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{t("header.thuduc")}</span>
                </div>
                <span className="font-bold text-neutral-800">{vietnamTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
