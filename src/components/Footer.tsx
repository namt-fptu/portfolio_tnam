/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { ArrowUp, Clock, Mail, Linkedin, Github, FileSpreadsheet, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onTalkClick: () => void;
}

export default function Footer({ onTalkClick }: FooterProps) {
  const [vietnamTime, setVietnamTime] = useState("");
  const { language, t } = useLanguage();

  // Contact details
  const MY_EMAIL = "sofn2004@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/tnamhocfpt";
  const GITHUB_URL = "https://github.com/namt-fptu";

  useEffect(() => {
    const updateTime = () => {
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
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSecValue = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-[#111112] text-neutral-400 border-t border-neutral-900 pt-16 pb-10 px-6 lg:px-12 font-sans relative overflow-hidden">
      
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,87,34,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Core CTA & Social links row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-neutral-900">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono font-extrabold text-[#ff5722] tracking-widest uppercase bg-orange-500/10 border border-[#ff5722]/20 px-3 py-1 rounded-full">
              {language === "vi" ? "HỢP TÁC & PHÁT TRIỂN" : "GLOBAL OPPORTUNITIES"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              {language === "vi" 
                ? "Bắt đầu dự án SAP ABAP & Web tiếp theo của bạn ngay hôm nay" 
                : "Initiate scalable enterprise ABAP & high speed Web architectures."}
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xl">
              {language === "vi"
                ? "Sẵn sàng tiếp nhận các cơ hội thực tập, phát triển toàn thời gian và đóng góp chuyên sâu trong các giải pháp ERP tiêu chuẩn cao."
                : "Highly open to internships, professional roles, and tech contributions where robust ABAP backend logic meets visual client excellence."}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 w-full">
            <button
              onClick={onTalkClick}
              className="px-6 py-3 bg-[#ff5722] hover:bg-[#e04c1d] active:scale-95 text-white font-extrabold text-xs tracking-wide rounded-xl shadow-lg transition-all cursor-pointer font-bold shrink-0 min-h-[46px] text-center"
            >
              {language === "vi" ? "Gửi Yêu Cầu Liên Hệ" : "Schedule Consultation"}
            </button>
            <a
              href={`mailto:${MY_EMAIL}`}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 hover:border-neutral-700 active:scale-95 font-extrabold text-xs tracking-wide rounded-xl transition-all flex items-center justify-center gap-2 min-h-[46px]"
              title={`Mail to ${MY_EMAIL}`}
            >
              <Mail className="w-4 h-4 text-[#ff5722]" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Multi-column Directory & Navigation Sitemaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          
          {/* Identity Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white text-neutral-950 font-display font-black text-xs rounded-xl flex items-center justify-center tracking-tighter">
                NTN
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono leading-none tracking-wider text-[#ff5722] font-bold">NICO T. NAM</span>
                <span className="text-xs font-bold leading-none text-white mt-0.5">SAP & WEB ENTHUSIAST</span>
              </div>
            </div>
            
            <p className="text-[11px] text-neutral-450 leading-relaxed font-medium">
              {language === "vi"
                ? "Giải pháp tích hợp giúp đơn giản hóa hệ thống doanh nghiệp phức tạp và tăng tốc trải nghiệm người dùng."
                : "Delivering end-to-end efficiency that streamlines core system complexity while boosting page metrics."}
            </p>

            <div className="space-y-2 flex flex-col pt-2 text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff5722] shrink-0" />
                <span className="text-neutral-300">Thu Duc, Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-neutral-300 font-mono">{t("header.local_time")} {vietnamTime || "--:--:--"}</span>
              </div>
            </div>
          </div>

          {/* Site Directory Links */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono font-extrabold text-white tracking-widest uppercase">
              {language === "vi" ? "DANH MỤC PORTFOLIO" : "SITE SITEMAP"}
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-neutral-400 font-semibold">
              <button onClick={() => scrollToSecValue("playground")} className="hover:text-white transition-colors text-left cursor-pointer">
                {t("header.intro")}
              </button>
              <button onClick={() => scrollToSecValue("services")} className="hover:text-white transition-colors text-left cursor-pointer">
                {t("header.skills")}
              </button>
              <button onClick={() => scrollToSecValue("case-studies")} className="hover:text-white transition-colors text-left cursor-pointer">
                {t("header.projects")}
              </button>
              <button onClick={() => scrollToSecValue("about-me")} className="hover:text-white transition-colors text-left cursor-pointer">
                {t("header.education")}
              </button>

            </div>
          </div>

          {/* Tech Stack quick references */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono font-extrabold text-white tracking-widest uppercase">
              {language === "vi" ? "HỆ SINH THÁI CODES" : "ENGINEERING MATRIX"}
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#002B66]" /> SAP ABAP 7.40+ (OOA)</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#002B66]" /> SAP unmanaged RAP BO</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> S/4HANA OData Bindings</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" /> ReactJS / Next.js SPA</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" /> Tailwind v4 CSS Layer</span>
            </div>
          </div>

          {/* Call-to-action coordinate cards */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono font-extrabold text-white tracking-widest uppercase">
              {language === "vi" ? "KÊNH LIÊN HỆ PHỤ" : "EXTERNAL CHANNELS"}
            </h4>
            <div className="flex flex-col gap-2">
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-850 hover:border-neutral-800 rounded-xl flex items-center justify-between text-xs text-neutral-250 transition-all font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub Repository</span>
                </div>
                <ArrowUp className="w-3.5 h-3.5 rotate-45 text-neutral-500" />
              </a>

              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-850 hover:border-neutral-800 rounded-xl flex items-center justify-between text-xs text-neutral-250 transition-all font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUp className="w-3.5 h-3.5 rotate-45 text-neutral-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-neutral-900" />

        {/* Rights footer line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2 text-[11px] text-neutral-500">
          
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-mono font-bold bg-neutral-900 text-[#ff5722] border border-neutral-800 px-2.5 py-1 rounded-md uppercase">
              RE-ENGINEERED 2026
            </span>
            <span>{t("footer.rights")}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold font-mono">
            <span>VITE/REACT 19</span>
            <span>TAILWIND V4</span>
            <button 
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 rounded-lg border border-neutral-850 shadow-sm cursor-pointer transition-colors"
              title="Cuộn lên đầu trang"
            >
              <span>{language === "vi" ? "ĐẦU TRANG" : "UPPERMOST"}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ff5722]" />
            </button>
          </div>

        </div>

        <div className="text-[9.5px] text-center text-neutral-600 font-normal leading-relaxed pt-2">
          {language === "vi"
            ? "Được đóng gói chuẩn như một ứng dụng đơn trang React. Sử dụng mã nguồn tối ưu hóa, mượt mà trên môi trường an toàn cao."
            : "Designed by Syahrul Falah on Dribbble. Re-engineered as a high-fidelity, fully accessible React workspace application for Google AI Studio."}
        </div>

      </div>
    </footer>
  );
}
