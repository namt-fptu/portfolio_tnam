/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, Github, Trophy, Landmark, Flame, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onTalkClick: () => void;
  onSeeWorkClick: () => void;
}

export default function Hero({ onTalkClick, onSeeWorkClick }: HeroProps) {
  const { t } = useLanguage();
  
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/your-profile";
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "https://github.com/your-username";

  return (
    <section id="playground" className="w-full py-6 lg:py-10 px-4 lg:px-8 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Brand Intro, Title & Buttons */}
        <div className="lg:col-span-8 bg-white border border-neutral-200/70 p-6 lg:p-10 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col justify-between relative overflow-hidden group">
          {/* Custom decorative background accent and vertical elements */}
          <div className="absolute right-0 top-0 bottom-0 w-12 border-l border-neutral-100 hidden sm:flex flex-col items-center justify-center gap-6 py-8 text-neutral-400">
            <span className="text-[10px] font-mono tracking-widest uppercase rotate-90 my-4 text-neutral-300 font-bold">CONNECT</span>
            <hr className="w-px h-12 bg-neutral-100" />
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 hover:scale-115 transition-all" title="LinkedIn">
              <span className="text-xs font-mono font-bold">In</span>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 hover:scale-115 transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="sm:pr-14">
            {/* Avatar & Availability indicator */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-display font-bold border-2 border-neutral-900 shadow-sm text-sm">
                  NTN
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse"></span>
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 leading-none">{t("hero.name")}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[11px] font-semibold text-emerald-600">{t("header.available")}</span>
                  <span className="text-[11px] text-neutral-400">• {t("header.thuduc")}</span>
                </div>
              </div>
            </div>

            {/* Split Grid for Names & Tagline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              
              {/* Name portion */}
              <div>
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-neutral-900 leading-none"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t("hero.hello")} <br />
                  <span className="font-extrabold tracking-tighter block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800">
                    Nguyễn <br />Thái Nam
                  </span>
                </motion.h1>
              </div>

              {/* Tagline portion */}
              <div className="flex flex-col justify-between">
                <div className="pt-2">
                  <h2 className="text-xl sm:text-2xl font-semibold font-display text-neutral-800 leading-snug">
                    {t("hero.sub")}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-3 font-normal leading-relaxed">
                    {t("hero.desc")}
                  </p>
                </div>
                
                {/* Visual Buttons */}
                <div className="flex flex-wrap gap-2.5 mt-6 sm:mt-8">
                  <button
                    onClick={onTalkClick}
                    className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-xs text-white font-semibold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>{t("header.get_in_touch")}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-75" />
                  </button>
                  <button
                    onClick={onSeeWorkClick}
                    className="px-5 py-3 border border-neutral-300 hover:bg-neutral-50 active:scale-95 text-xs text-neutral-800 font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    {t("hero.view_projects")}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Socials bar for tiny viewports */}
          <div className="flex sm:hidden items-center gap-4 border-t border-neutral-100 pt-4 mt-8 text-neutral-400">
            <span className="text-[10px] font-mono tracking-widest text-neutral-300 mr-auto uppercase">Connect:</span>
            <a href={LINKEDIN_URL} className="hover:text-neutral-950 font-semibold">LinkedIn</a>
            <a href={GITHUB_URL} className="hover:text-neutral-950 font-semibold">GitHub</a>
          </div>
        </div>

        {/* Right Side: Industry summary list & metrics */}
        <div className="lg:col-span-4 bg-[#fbfbfa] border border-neutral-200/70 p-6 lg:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-mono tracking-widest font-extrabold uppercase text-neutral-400 block mb-2">{t("hero.academic_profile")}</span>
            <h3 className="text-lg lg:text-xl font-bold font-display text-neutral-900 leading-snug">
              {t("hero.profile_title")}
            </h3>
            <p className="text-xs text-neutral-500 mt-2.5 leading-relaxed">
              {t("hero.profile_desc")}
            </p>
          </div>

          {/* Core Metrics Bento Grid */}
          <div className="grid grid-cols-2 gap-3.5 my-6">
            
            {/* Metric 1 */}
            <div className="bg-white border border-neutral-200/50 p-4 rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-neutral-400 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="text-2xl font-extrabold font-display leading-none text-neutral-900">3</span>
                <span className="text-[10px] font-semibold text-neutral-400 block mt-1 tracking-tight leading-none uppercase">{t("hero.metric.systems")}</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white border border-neutral-200/50 p-4 rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-neutral-400 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <span className="text-2xl font-extrabold font-display leading-none text-neutral-900">100%</span>
                <span className="text-[10px] font-semibold text-neutral-400 block mt-1 tracking-tight leading-none uppercase">{t("hero.metric.code")}</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white border border-neutral-200/50 p-4 rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-neutral-400 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-2xl font-extrabold font-display leading-none text-neutral-900">9/9</span>
                <span className="text-[10px] font-semibold text-neutral-400 block mt-1 tracking-tight leading-none uppercase">{t("hero.metric.semesters")}</span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white border border-neutral-200/50 p-4 rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-neutral-400 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <span className="text-2xl font-extrabold font-display leading-none text-neutral-900">3.0</span>
                <span className="text-[10px] font-semibold text-neutral-400 block mt-1 tracking-tight leading-none uppercase">{t("hero.metric.gpa")}</span>
              </div>
            </div>

          </div>

          <div className="flex gap-2">
            <button 
              onClick={onTalkClick}
              className="text-[11px] px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white font-bold hover:bg-neutral-800 cursor-pointer"
            >
              {t("header.get_in_touch")}
            </button>
            <button 
              onClick={onSeeWorkClick}
              className="text-[11px] px-3.5 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-600 font-bold cursor-pointer"
            >
              {t("hero.view_projects")}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
