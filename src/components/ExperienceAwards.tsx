/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { experiences, experiencesVi, awards, awardsVi } from "../data";
import { ArrowUpRight, Award, Briefcase, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceAwards() {
  const [selectedAward, setSelectedAward] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const currentExperiences = language === "vi" ? experiencesVi : experiences;
  const currentAwards = language === "vi" ? awardsVi : awards;

  return (
    <section id="about-me" className="w-full py-8 lg:py-12 px-4 lg:px-8 bg-[#fcfcfc] border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
        
        {/* Working Experience Column */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-neutral-800" />
              <span className="text-[10px] font-mono tracking-widest font-extrabold text-neutral-400 uppercase">{t("exp_awards.career_trace")}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 tracking-tight mb-8">
              {t("exp_awards.title")}
            </h3>

            {/* Experience list stack */}
            <div className="space-y-4">
              {currentExperiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="group bg-white border border-neutral-200/60 p-4 rounded-xl flex items-center justify-between gap-4 transition-all duration-300 hover:border-neutral-900 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    {/* Company Initial logo circular node */}
                    <div className={`w-10 h-10 ${exp.color} rounded-xl flex items-center justify-center font-display font-black text-sm tracking-tighter shadow-inner transition-transform group-hover:scale-105 font-bold`}>
                      {exp.logo}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-sans text-neutral-900 group-hover:text-black transition-colors">
                        {exp.role} <span className="text-neutral-400">{language === "vi" ? "tại" : "at"}</span> <span className="font-extrabold pr-1">{exp.company}</span>
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 mt-1 font-medium italic">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-neutral-200 group-hover:bg-neutral-950 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimal citation at bottom */}
          <div className="mt-8 p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center gap-3">
            <span className="text-xs bg-neutral-900 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">i</span>
            <p className="text-[11px] text-neutral-500 font-medium leading-normal">
              {t("exp_awards.info")}
            </p>
          </div>
        </div>

        {/* Awards & Recognition Column */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-neutral-800" />
              <span className="text-[10px] font-mono tracking-widest font-extrabold text-neutral-400 uppercase">{t("exp_awards.accolades")}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 tracking-tight mb-8">
              {t("exp_awards.awards_title")}
            </h3>

            {/* Awards list stack */}
            <div className="space-y-4">
              {currentAwards.map((award) => {
                const isExpanded = selectedAward === award.id;
                return (
                  <div 
                    key={award.id}
                    onClick={() => setSelectedAward(isExpanded ? null : award.id)}
                    className={`group bg-white border ${
                      isExpanded ? "border-neutral-950 ring-1 ring-neutral-950 shadow-md" : "border-neutral-200/60"
                    } p-4 rounded-xl cursor-pointer transition-all duration-300 hover:border-neutral-900`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* W Logo mock for Webby/Awwwards */}
                        <div className="w-10 h-10 bg-neutral-950 text-white rounded-xl flex items-center justify-center font-display font-bold text-xs">
                          {award.id === "award-1" ? "SAP" : award.id === "award-2" ? "GPA" : "FU"}
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs font-bold font-sans text-neutral-900">
                            {award.title} <span className="text-neutral-400">{language === "vi" ? "tại" : "at"}</span> <span className="font-extrabold">{award.provider}</span>
                          </span>
                          <span className="text-[11px] font-mono text-neutral-400 mt-1 font-medium">
                            {award.date}
                          </span>
                        </div>
                      </div>

                      {/* Outward Link */}
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="w-11 h-11 rounded-xl bg-neutral-50 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-neutral-900 flex items-center justify-center text-neutral-500 transition-colors shrink-0"
                        title={`Visit official ${award.provider}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Animated expansion with explanation of details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          className="mt-3 pt-3 border-t border-neutral-100 text-xs text-neutral-600 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="leading-relaxed">
                            {award.id === "award-1" 
                              ? (language === "vi" 
                                  ? "Được Bộ môn Kỹ thuật Phần mềm Trường Đại học FPT công nhận là Đồ án tốt nghiệp xuất sắc. Đánh giá dựa trên khả năng xử lý nghiệp vụ RAP unmanaged, đóng gói OData Services Fiori và hiệu suất truy vấn cơ sở dữ liệu."
                                  : "Recognized by FPT University Software Engineering department as a Top Capstone project. Evaluated on unmanaged RAP capabilities, Fiori OData services, and high database execution efficiency.")
                              : award.id === "award-2"
                              ? (language === "vi"
                                  ? "Duy trì sự tập trung học tập kiên định trong các môn học Kỹ thuật Phần mềm cốt lỗi bao gồm Cơ sở dữ liệu, Thiết kế Kiến trúc, Tích hợp Hệ thống và Lập trình Giao diện."
                                  : "Maintained consistent academic focus across standard Software Engineering modules (including Database Management, Program Designs, System Integrations, and Client Interfaces).")
                              : (language === "vi"
                                  ? "Thể hiện khả năng phát triển nghề nghiệp vững vàng qua việc chuyển tiếp và áp dụng các tư duy UI/UX từ ReactJS/NextJS hiện đại vào hệ thống SAP backend của doanh nghiệp."
                                  : "Demonstrated strong professional development by transferring core NextJS frontend patterns to modern SAP backend platforms.")}
                          </p>
                          <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span>{language === "vi" ? "THÔNG TIN ĐÃ XÁC MINH" : "VERIFIED TIMELINE ITEM"}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial preview card inside layout space */}
          <div className="mt-8 p-4 bg-orange-50/50 border border-orange-100/50 rounded-xl relative overflow-hidden group">
            <div className="absolute right-3 top-3 opacity-10">
              <Sparkles className="w-10 h-10 text-orange-600" />
            </div>
            <span className="text-[9px] font-mono font-extrabold text-orange-700 tracking-wider block mb-1 uppercase">{t("exp_awards.creative_directive")}</span>
            <p className="text-[11px] text-neutral-600 italic leading-relaxed">
              {t("exp_awards.architectural_guideline")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
