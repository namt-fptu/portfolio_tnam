/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { services, servicesVi } from "../data";
import { Plus, Minus, ArrowUpRight, Layers, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import WebMockup from "./WebMockup";
import { useLanguage } from "../context/LanguageContext";

interface ServicesSectionProps {
  onSeeWorkClick: () => void;
}

export default function ServicesSection({ onSeeWorkClick }: ServicesSectionProps) {
  const { language, t } = useLanguage();
  // Store which service index is expanded. Default to the first one ("srv-1") so the mock is immediately visible!
  const [expandedId, setExpandedId] = useState<string | null>("srv-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const currentServices = language === "vi" ? servicesVi : services;

  return (
    <section id="services" className="w-full py-12 lg:py-16 px-4 lg:px-8 bg-neutral-50/50 border-t border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200/50">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-neutral-800" />
              <span className="text-[10px] font-mono tracking-widest font-extrabold text-neutral-400 uppercase">{t("services.section_subtitle")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight">
              {t("services.section_title")}
            </h2>
          </div>
          <button
            onClick={onSeeWorkClick}
            className="px-4 py-2.5 border border-neutral-300 hover:border-neutral-900 text-xs font-bold text-neutral-800 hover:bg-neutral-50 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>{t("hero.view_projects")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>
        </div>

        {/* Services Accordion List */}
        <div className="space-y-4">
          {currentServices.map((srv, index) => {
            const isExpanded = expandedId === srv.id;
            const itemNumber = `(0${index + 1})`;

            return (
              <div 
                key={srv.id}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isExpanded 
                    ? "border-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.03)]" 
                    : "border-neutral-200/60 hover:border-neutral-400"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(srv.id)}
                  className="w-full text-left px-5 py-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  {/* Left layout with Index and Title */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <span className="text-xs font-mono font-bold text-neutral-400 pt-0.5 sm:pt-0">
                      {itemNumber}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-950">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Right layout with quick description & toggle icon */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:w-[60%] lg:w-[50%]">
                    <p className="text-xs text-neutral-500 font-normal leading-relaxed flex-1">
                      {srv.description}
                    </p>
                    
                    {/* Toggle button */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      isExpanded 
                        ? "bg-neutral-950 border-neutral-950 text-white" 
                        : "border-neutral-200 text-neutral-500 group-hover:border-neutral-950"
                    }`}>
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </button>

                {/* Expandable Tray Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-8 sm:pb-8 border-t border-neutral-100 mt-1 pt-6 space-y-6">
                        
                        {/* Summary and descriptive values */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                          <div className="md:col-span-8">
                            <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                              {language === "vi" ? "KIẾN TRÚC & PHƯƠNG PHÁP TRIỂN KHAI" : "ARCHITECTURAL BLUEPRINT & TECHNIQUE"}
                            </span>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal font-sans">
                              {srv.longDescription}
                            </p>
                          </div>
                          
                          <div className="md:col-span-4 bg-neutral-50 px-4 py-3 rounded-xl border border-neutral-200/40">
                            <span className="text-[9px] font-mono font-extrabold text-neutral-450 block mb-2 uppercase">
                              {language === "vi" ? "TIÊU CHUẨN CỐT LÕI" : "CORE STANDARDS"}
                            </span>
                            <p className="text-[10px] text-neutral-500 font-medium mb-2 leading-relaxed">
                              {language === "vi" ? "Phương pháp triển khai tối ưu cho môi trường Enterprise:" : "Optimized deployment strategy for Enterprise workloads:"}
                            </p>
                            <ul className="text-[10px] text-neutral-500 space-y-1 font-medium">
                              {language === "vi" ? (
                                <>
                                  <li className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-emerald-600 shrink-0" /> Chuẩn lập trình SAP ABAP hiện đại
                                  </li>
                                  <li className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-emerald-600 shrink-0" /> Tối giản hóa số lần truy vấn CSDL
                                  </li>
                                  <li className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-emerald-600 shrink-0" /> Tích hợp giao diện React bảo mật cao
                                  </li>
                                </>
                              ) : (
                                <>
                                  <li className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-emerald-600 shrink-0" /> Modern SAP ABAP standard compliance
                                  </li>
                                  <li className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-emerald-600 shrink-0" /> Elimination of redundant database queries
                                  </li>
                                  <li className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-emerald-600 shrink-0" /> High-security React frontend gateways
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
