/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { projects, projectsVi } from "../data";
import { Project } from "../types";
import { ArrowUpRight, FolderGit2, X, Sparkles, Check, HelpCircle, Network, Zap, ShieldAlert, CheckCircle2, CornerDownRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import WebMockup from "./WebMockup";
import { useLanguage } from "../context/LanguageContext";

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"challenge" | "architecture" | "optimization">("challenge");
  const { language, t } = useLanguage();

  const currentProjects = language === "vi" ? projectsVi : projects;

  // Track active project across toggles to prevent mismatching language states
  const activeProject = selectedProject
    ? currentProjects.find((p) => p.id === selectedProject.id) || selectedProject
    : null;

  return (
    <section id="case-studies" className="w-full py-12 lg:py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <FolderGit2 className="w-4 h-4 text-neutral-800" />
          <span className="text-[10px] font-mono tracking-widest font-extrabold text-neutral-400 uppercase">{t("projects.section_subtitle")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight mb-10">
          {t("projects.section_title")}
        </h2>

        {/* Selected Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {currentProjects.map((proj) => {
            const isFeaturedCapstone = proj.id === "proj-1";
            return (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`group cursor-pointer flex flex-col justify-between rounded-3xl p-4 sm:p-6 transition-all duration-300 relative ${
                  isFeaturedCapstone 
                    ? "bg-gradient-to-br from-neutral-50 via-white to-orange-50/15 border-2 border-[#ff5722]/35 hover:border-[#ff5722]/80 shadow-[0_12px_40px_rgba(255,87,34,0.06)] hover:shadow-[0_16px_50px_rgba(255,87,34,0.15)] md:col-span-2" 
                    : "bg-white border border-neutral-200/55 hover:border-neutral-350 hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)]"
                }`}
              >
                {/* Floating Badge for BJSM Capstone */}
                {isFeaturedCapstone && (
                  <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-[#ff5722] to-[#002B66] text-white text-[9.5px] font-extrabold font-mono px-3.5 py-1.5 rounded-full shadow-md shadow-[#ff5722]/15 flex items-center gap-1.5 uppercase select-none tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>{language === "vi" ? "Đồ án tâm đắc nhất" : "My Favorite Capstone Project"}</span>
                  </div>
                )}

                <div className={`grid grid-cols-1 ${isFeaturedCapstone ? "lg:grid-cols-12 gap-6 lg:gap-8 items-center" : "gap-4"}`}>
                  
                  {/* Visual mockup block */}
                  <div className={isFeaturedCapstone ? "lg:col-span-7" : ""}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <WebMockup type={proj.mockImageUrl} />
                      
                      {/* Micro dark tint on hover to signal inspectability */}
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/5 group-hover:backdrop-blur-[1px] transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1">
                          <span>{language === "vi" ? "Xem Chi Tiết" : "Inspect Details"}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Metadata block */}
                  <div className={`space-y-4 ${isFeaturedCapstone ? "lg:col-span-5" : ""}`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          {isFeaturedCapstone && (
                            <span className="text-[9.5px] font-mono leading-none tracking-wider text-[#ff5722] font-extrabold uppercase block mb-1">
                              {language === "vi" ? "ĐỒ ÁN TÂM ĐẮC NHẤT" : "MY CHERISHED CAPSTONE PROJECT"}
                            </span>
                          )}
                          <h3 className={`font-bold font-display text-neutral-900 leading-tight group-hover:text-[#ff5722] lg:group-hover:text-[#ff5722] transition-colors ${
                            isFeaturedCapstone ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
                          }`}>
                            {proj.title}
                          </h3>
                          <p className="text-[11px] font-semibold text-neutral-450 leading-none block mt-1.5 uppercase">
                            {proj.category}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400 font-semibold uppercase bg-neutral-50 px-2 py-1 rounded border border-neutral-100 shrink-0">
                          {proj.period}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-550 font-normal leading-relaxed line-clamp-4 font-sans">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tags mapping */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className={`text-[9.5px] font-semibold rounded-md ${
                            isFeaturedCapstone 
                              ? "text-[#ff5722] bg-[#ff5722]/10 px-2.5 py-1" 
                              : "text-neutral-500 bg-neutral-100 px-2 py-0.5"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action button mimicking dribbble image */}
                    <div className="pt-2">
                      <button 
                        type="button"
                        className="inline-flex items-center text-xs font-black text-neutral-900 border-b-2 border-neutral-900 group-hover:text-[#ff5722] group-hover:border-[#ff5722] transition-all pb-0.5 cursor-pointer"
                      >
                        {language === "vi" ? "Xem chi tiết dự án" : "View detail works"}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Dialog Slide-over / Overlay Drawer */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-end">
              {/* Dimmed backdrop background */}
              <motion.div 
                className="absolute inset-0 bg-neutral-950/40 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />

              {/* Slide-over panel */}
              <motion.div 
                className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                {/* Header row */}
                <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-bold uppercase">
                      {language === "vi" ? "HỒ SƠ CHI TIẾT DỰ ÁN" : "CASE STUDY PORTFOLIO"}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-11 h-11 rounded-full bg-neutral-50 hover:bg-neutral-100 active:scale-95 flex items-center justify-center border text-neutral-500 hover:text-neutral-900 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content body */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Live viewport representation of the selected project */}
                  <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60 shadow-inner">
                    <WebMockup type={activeProject.mockImageUrl} />
                  </div>

                  {/* Title stack */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600">
                      <Sparkles className="w-3 h-3" />
                      <span>{language === "vi" ? "DẤU ẤN THIẾT KẾ & KỸ THUẬT" : "CORE DESIGN & TECHNICAL HIGHLIGHT"}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950 tracking-tight leading-none">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-455 uppercase tracking-wide">
                      {activeProject.category}
                    </p>
                  </div>

                  {/* Details stats block */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-400 font-bold block uppercase leading-none">{language === "vi" ? "VAI TRÒ" : "ROLE"}</span>
                      <span className="text-xs font-bold text-neutral-800 block mt-1">
                        {activeProject.id === "proj-1" 
                          ? (language === "vi" ? "Lập trình viên SAP" : "SAP Developer")
                          : activeProject.id === "proj-2" 
                          ? (language === "vi" ? "Lập trình viên Fullstack" : "Fullstack Developer")
                          : activeProject.id === "proj-4"
                          ? (language === "vi" ? "Lập trình viên Android" : "Android Developer")
                          : (language === "vi" ? "Lập trình viên Frontend" : "Frontend Developer")}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-400 font-bold block uppercase leading-none">{language === "vi" ? "THỜI GIAN" : "TIMELINE"}</span>
                      <span className="text-xs font-bold text-neutral-800 block mt-1">{activeProject.period}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-400 font-bold block uppercase leading-none">TECHSTACK</span>
                      <span className="text-xs font-bold text-neutral-800 block mt-1">
                        {activeProject.id === "proj-1"
                          ? "ABAP, RAP unmanaged, CDS"
                          : activeProject.id === "proj-2"
                          ? "NextJS, Firebase, Tailwind"
                          : activeProject.id === "proj-4"
                          ? "Android SDK, Firebase, Gemini"
                          : "React, Antd, Axios, REST"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold text-neutral-400 uppercase block">{language === "vi" ? "Tổng Quan Dự Án" : "Project Overview"}</span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal font-sans">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Highlights section checklists */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold text-neutral-400 uppercase block">
                      {language === "vi" ? "Các Giải Pháp Kỹ Thuật Đã Triển Khai" : "Technical Pillars Implemented"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600 font-sans">
                      {activeProject.id === "proj-1" ? (
                        <>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Loại bỏ hoàn toàn truy vấn SELECT-in-LOOP" : "Eliminated SELECT-in-LOOP database overhead"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Tích hợp xử lý giao dịch RAP (Unmanaged)" : "Integrated RAP (Unmanaged) transactional processing"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Cấu trúc thực thể CDS views phân tầng tối ưu" : "Clean CDS view entity structures configured"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Xuất bản dịch vụ OData Gateway kết nối Fiori" : "Exposed standard SAP OData Gateway integration services"}</span>
                          </div>
                        </>
                      ) : activeProject.id === "proj-2" ? (
                        <>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Đồng bộ tin nhắn thời gian thực qua Firebase" : "Firebase database real-time message channels"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Tối ưu giao diện thanh toán thương mại điện tử" : "Robust state-driven e-commerce transaction layout"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Tùy biến bảng màu Tailwind liền mạch linh hoạt" : "Tailwind fluid custom color classes configured"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Cơ chế đáp ứng hoàn hảo trên mọi kích cỡ thiết bị" : "Optimized responsive layout scaling models"}</span>
                          </div>
                        </>
                      ) : activeProject.id === "proj-4" ? (
                        <>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Xác thực người dùng bảo mật bằng Firebase Auth" : "Secure authentication using Firebase Auth"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Trích xuất OCR, tài liệu PDF, DOCX tự động" : "Automated OCR, PDF, and DOCX document parser"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Sinh tóm tắt, flashcard, trắc nghiệm qua Gemini API" : "GenAI summaries, flashcards, & quizzes via Gemini"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Thuật toán lặp lại ngắt quãng Leitner ôn tập" : "Leitner spaced repetition learning models"}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Kết nối mẫu RESTful API bằng Axios chặt chẽ" : "Clean Axios RESTful API endpoint mapping templates"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Tùy chỉnh giao diện thư viện Ant Design đồng bộ" : "Fluid Ant Design component library theme styling"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Xử lý logic form đặt lịch tư vấn và chăm sóc" : "Dynamic service coordination scheduling form logic"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                            <span>{language === "vi" ? "Kiểm soát an toàn dữ liệu đầu vào và bắt lỗi API" : "Efficient data structure mapping and error guards"}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Detailed Capstone Research Section for proj-1 */}
                  {activeProject.id === "proj-1" && (
                    <div className="border-t border-neutral-200/60 pt-6 mt-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" />
                        <span className="text-[10px] font-mono tracking-wider font-extrabold text-[#ff5722] uppercase block">
                          {language === "vi" ? "Khía cạnh thực tiễn đồ án" : "Practical Capstone Dimensions"}
                        </span>
                      </div>

                      {/* Tab selection indicators inside drawer */}
                      <div className="flex bg-neutral-100 p-1 rounded-xl border border-neutral-200/40">
                        {[
                          { id: "challenge", labelVi: "Thách thức", labelEn: "Challenge", icon: HelpCircle },
                          { id: "architecture", labelVi: "Kiến trúc", labelEn: "Architecture", icon: Network },
                          { id: "optimization", labelVi: "Tối ưu", labelEn: "Optimization", icon: Zap }
                        ].map((tab) => {
                          const Icon = tab.icon;
                          const isActive = activeTab === tab.id;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id as any)}
                              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer min-h-[34px] ${
                                isActive 
                                  ? "bg-white text-neutral-900 shadow-sm" 
                                  : "text-neutral-500 hover:text-neutral-900"
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#ff5722]" : "text-neutral-400"}`} />
                              <span>{language === "vi" ? tab.labelVi : tab.labelEn}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Display content active tab */}
                      <div className="bg-neutral-50 border border-neutral-150 p-4 sm:p-5 rounded-2xl min-h-[220px] flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                          {activeTab === "challenge" && (
                            <motion.div
                              key="challenge"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                              className="space-y-3.5"
                            >
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight">
                                {language === "vi" ? "Hợp nhất & Lập lịch Background Job trực quan" : "Centralizing SAP S/4HANA Background Jobs"}
                              </h4>
                              
                              <div className="space-y-2 text-[11px] leading-relaxed text-neutral-600 font-normal">
                                <div className="p-3 bg-neutral-100 border border-neutral-200/40 rounded-xl space-y-1">
                                  <div className="flex items-center gap-1 text-neutral-850 font-bold">
                                    <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-[#ff5722]" />
                                    <span>{language === "vi" ? "KHÓ KHĂN THỰC TẾ" : "PRACTICAL DIFFICULTIES"}</span>
                                  </div>
                                  <p>
                                    {language === "vi"
                                      ? "Các T-Code tiêu chuẩn như SM36/SM37 đòi hỏi người dùng phải làm quen với màn hình SAP GUI truyền thống, đôi khi gây khó khăn cho nhân viên nghiệp vụ không sâu về mặt lập trình/hệ thống."
                                      : "Standard SM36/SM37 screens rely on classic SAP GUI layouts, which can be less intuitive for non-technical business users tracking system job status."}
                                  </p>
                                </div>

                                <div className="p-3 bg-neutral-100 border border-neutral-200/40 rounded-xl space-y-1">
                                  <div className="flex items-center gap-1 text-neutral-850 font-bold">
                                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                                    <span>{language === "vi" ? "HƯỚNG GIẢI QUYẾT" : "PROPOSED APPROACH"}</span>
                                  </div>
                                  <p>
                                    {language === "vi"
                                      ? "BJSM được thiết kế nhằm tinh gọn hóa quy trình: đóng gói logic tạo, theo dõi và lập lịch vào một giao diện trực quan và phân quyền rõ ràng theo vai trò nghiệp vụ."
                                      : "The BJSM tool simplifies these steps by collecting common scheduling actions under a clean UI with permission sets tailored for daily operations."}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {activeTab === "architecture" && (
                            <motion.div
                              key="architecture"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                              className="space-y-3.5"
                            >
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight">
                                {language === "vi" ? "Dòng luân chuyển dữ liệu" : "Data stream mapping"}
                              </h4>

                              <div className="bg-neutral-950 text-neutral-300 rounded-xl p-3.5 font-mono text-[10px] leading-relaxed border border-neutral-800 space-y-2.5">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5 text-white">
                                    <span className="w-2 h-2 rounded bg-blue-500 text-[7px] flex items-center justify-center font-bold">1</span>
                                    <span>[Layer 1] Fiori Elements Desktop Cockpit (Client App)</span>
                                  </div>
                                  <div className="pl-4 text-neutral-500">OData service calls via standard HTTP payloads</div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5 text-white">
                                    <span className="w-2 h-2 rounded bg-emerald-500 text-[7px] flex items-center justify-center font-bold">2</span>
                                    <span>[Layer 2] RAP CDS Annotations & Business Definition</span>
                                  </div>
                                  <div className="pl-4 text-neutral-500">Behavior implementation unmanaged handler (ABAP Class)</div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5 text-white">
                                    <span className="w-2 h-2 rounded bg-orange-500 text-[7px] flex items-center justify-center font-bold">3</span>
                                    <span>[Layer 3] SAP Core Engines Function Modules</span>
                                  </div>
                                  <div className="pl-4 text-[#ff5722] flex items-center gap-1 font-semibold">
                                    <CornerDownRight className="w-3 h-3 text-neutral-600 shrink-0" />
                                    <span>Executing: JOB_OPEN → JOB_SUBMIT → JOB_CLOSE locks</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {activeTab === "optimization" && (
                            <motion.div
                              key="optimization"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                              className="space-y-3.5"
                            >
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight">
                                {language === "vi" ? "Tối ưu hóa câu lệnh truy vấn & Tuân thủ nội quy phân tích mã nguồn" : "Query optimization & code check compliance"}
                              </h4>

                              <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="p-2.5 bg-white border border-neutral-150 rounded-xl">
                                  <span className="text-[8px] font-mono font-bold text-neutral-400 block uppercase">DB Queries</span>
                                  <span className="text-sm font-bold text-neutral-800 font-mono">Optimized</span>
                                </div>
                                <div className="p-2.5 bg-white border border-neutral-150 rounded-xl">
                                  <span className="text-[8px] font-mono font-bold text-neutral-400 block uppercase">ATC check</span>
                                  <span className="text-sm font-bold text-neutral-800 font-mono">Passed</span>
                                </div>
                                <div className="p-2.5 bg-white border border-neutral-150 rounded-xl">
                                  <span className="text-[8px] font-mono font-bold text-neutral-400 block uppercase">Language</span>
                                  <span className="text-sm font-bold text-neutral-800 font-mono">ABAP 7.4+</span>
                                </div>
                              </div>

                              <p className="text-[11px] text-neutral-550 leading-relaxed font-sans font-normal">
                                {language === "vi"
                                  ? "Dự án chú trọng tối ưu hóa các câu lệnh SQL, thay thế cấu trúc SELECT-in-LOOP bằng các câu lệnh JOIN hoặc mệnh đề FOR ALL ENTRIES IN chuẩn mực của SAP, giúp hạn chế rác bộ nhớ và nâng tốc độ truy xuất thông tin của người dùng."
                                  : "By substituting slow SELECT statements inside loops with standard JOIN operations or 'FOR ALL ENTRIES' clauses, the application reduces unnecessary database roundtrips and follows best practices for SAP performance."}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer action trigger */}
                <div className="p-6 border-t border-neutral-100 flex items-center justify-end gap-4 bg-neutral-50/50 sticky bottom-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-850 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{language === "vi" ? "Đóng Chi Tiết" : "Close Details"}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
