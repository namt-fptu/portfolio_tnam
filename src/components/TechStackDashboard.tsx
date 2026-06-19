/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Server, Layout, ShieldCheck, Terminal, Cpu, Database, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface SkillItem {
  name: string;
  level: number; // percentage
  experience: string;
  category: "sap" | "web" | "devops";
  tags: string[];
  descriptionEn: string;
  descriptionVi: string;
}

export default function TechStackDashboard() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "sap" | "web" | "devops">("all");

  const skills: SkillItem[] = [
    {
      name: "Modern ABAP (7.40+)",
      level: 90,
      experience: "FPT Software Intern",
      category: "sap",
      tags: ["OOABAP", "RAP", "S/4HANA"],
      descriptionEn: "Deep understanding of Object-Oriented ABAP, new syntax expressions, performance-optimized Open SQL, and transaction-safe logic.",
      descriptionVi: "Hiểu sâu sắc về ABAP hướng đối tượng, cú pháp hiện đại mới, Open SQL tối ưu hóa hiệu năng cao và các xử lý nghiệp vụ an toàn giao dịch."
    },
    {
      name: "RESTful Application Programming (RAP)",
      level: 85,
      experience: "Capstone Project BJSM",
      category: "sap",
      tags: ["Unmanaged", "Behavior Def", "Business Object"],
      descriptionEn: "Implemented business assets with custom behavior definitions, custom validations, actions, and unmanaged draft-enabled state machines.",
      descriptionVi: "Đã triển khai các logic nghiệp vụ tùy chỉnh, ràng buộc toàn vẹn dữ liệu, các hành động custom và máy trạng thái draft unmanaged."
    },
    {
      name: "CDS Views & OData Services",
      level: 88,
      experience: "Enterprise Integration",
      category: "sap",
      tags: ["Core Data Services", "Annotations", "Service Binding"],
      descriptionEn: "Crafted layered CDS structures, annotated fields for Fiori elements template generation, and published OData V2/V4 service binds.",
      descriptionVi: "Xây dựng cấu trúc CDS phân lớp bài bản, dùng Annotations tạo template Fiori tự động, và phát hành kết nối dịch vụ OData V2/V4."
    },
    {
      name: "System Modules & BAPIs",
      level: 80,
      experience: "Core SAP Automation",
      category: "sap",
      tags: ["JOB_OPEN", "BAPI_USER_GET_DETAIL", "RFC"],
      descriptionEn: "Integrated standard SAP Function Modules to automate scheduled lifecycle tasks, background jobs, and remote system syncs.",
      descriptionVi: "Tích hợp các Function Module chuẩn của SAP giúp tự động hóa chu kỳ lập lịch tác vụ, chạy ngầm và đồng bộ hóa hệ thống từ xa."
    },
    {
      name: "ReactJS & NextJS",
      level: 92,
      experience: "Multiple Web Projects",
      category: "web",
      tags: ["App Router", "SSR", "Hooks", "Motion"],
      descriptionEn: "Experienced with modular architecture, server-side rendering, robust client states, dynamic layouts, and smooth animations.",
      descriptionVi: "Thích ứng nhanh nhạy với kiến trúc module hóa, kết xuất phía máy chủ (SSR), quản lý state, bố cục động và chuyển động mượt mà."
    },
    {
      name: "TypeScript & JavaScript ES6+",
      level: 88,
      experience: "Full Stack Integration",
      category: "web",
      tags: ["Async/Await", "Generics", "Type Safety"],
      descriptionEn: "Writing scalable, strictly-typed JavaScript interfaces with modular imports, functional utilities, and asynchronous event streams.",
      descriptionVi: "Viết mã nguồn Javascript kiểu tĩnh (typed) chuẩn hóa, dễ mở rộng với mô hình import chia nhỏ, xử lý đồng bộ và luồng sự kiện bất đồng bộ."
    },
    {
      name: "Tailwind CSS & Component UI",
      level: 95,
      experience: "Pixel-Perfect Designs",
      category: "web",
      tags: ["Responsive", "Custom Themes", "Ant Design"],
      descriptionEn: "Translating sophisticated Dribbble layouts into responsive, accessible Tailwind components with high fidelity and elegant spacing.",
      descriptionVi: "Chuyển giao các bản phác thảo thiết kế Dribbble sắc sảo thành các component tương thích tốt, trực quan qua CSS Tailwind và tối ưu hiển thị."
    },
    {
      name: "Firebase & Real-time Database",
      level: 82,
      experience: "Aidonia E-Commerce",
      category: "web",
      tags: ["Cloud Firestore", "Auth", "NoSQL"],
      descriptionEn: "Implemented real-time bidirectional messaging boards, product status watchers, and secure client-side login sessions.",
      descriptionVi: "Xây dựng các hệ thống kênh chat hai chiều thời gian thực, giám sát trạng thái sản phẩm và phiên đăng nhập bảo mật cho khách hàng."
    },
    {
      name: "Eclipse ADT & ABAP Test Cockpit (ATC)",
      level: 85,
      experience: "QA Quality Loop",
      category: "devops",
      tags: ["SLIN", "Code Auditor", "Eclipse Platform"],
      descriptionEn: "Executed daily Extended Program Checks (SLIN) and ATC scans to resolve static warnings and enforce absolute quality compliance.",
      descriptionVi: "Thực hiện kiểm tra chương trình Extended Checks (SLIN) và quét ATC hàng ngày để khắc phục cảnh báo tĩnh, tuân thủ tuyệt đối chất lượng mã."
    },
    {
      name: "Git & Agile Workflow",
      level: 82,
      experience: "FPT team interaction",
      category: "devops",
      tags: ["GitHub", "Git-flow", "Jira", "Code Review"],
      descriptionEn: "Comfortable managing standard branches, resolving conflicts systematically, and participating in code reviews to keep master healthy.",
      descriptionVi: "Quen thuộc với việc chia nhánh nhánh tiêu chuẩn, xử lý xung đột an toàn và tham gia đánh giá mã nguồn giữ hệ thống chính ổn định."
    }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(item => item.category === activeCategory);

  const categories = [
    { id: "all", labelEn: "All Technologies", labelVi: "Tất cả công nghệ", icon: Cpu },
    { id: "sap", labelEn: "SAP ABAP Core", labelVi: "Lập trình SAP ABAP", icon: Server },
    { id: "web", labelEn: "Web Frontend", labelVi: "Giao diện Web", icon: Layout },
    { id: "devops", labelEn: "Quality & QA", labelVi: "Chất lượng & Công cụ", icon: ShieldCheck }
  ];

  return (
    <section id="services" className="w-full py-16 lg:py-24 px-4 lg:px-8 border-t border-neutral-200/60 transition-all font-sans bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span className="text-[10px] font-mono leading-none tracking-widest text-[#ff5722] font-black uppercase">
              {language === "vi" ? "KIẾN TRÚC NĂNG LỰC CỦA TÔI" : "NICO TECH MATRIX"}
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight">
              {language === "vi" ? "Bảng Điều Khiển Tech Stack" : "Tech Stack Dashboard"}
            </h2>
            <p className="text-sm text-neutral-550 max-w-2xl leading-relaxed">
              {language === "vi" 
                ? "Bộ gia tốc kỹ năng tích hợp vững vàng cả hai khía cạnh: Lập trình hệ thống nghiệp vụ lõi SAP ABAP hiệu năng cao và Kiến trúc giao diện Web Single Page siêu tốc."
                : "A balanced hybrid skillset spanning scalable enterprise-grade SAP ABAP service business logic and hyper-responsive modern client web architectures."}
            </p>
          </div>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-neutral-100">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[42px] ${
                  isActive 
                    ? "bg-neutral-950 text-white shadow-md shadow-neutral-950/10" 
                    : "bg-neutral-50 hover:bg-neutral-100 text-neutral-650 hover:text-neutral-950 border border-neutral-200/40"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#ff5722]" : "text-neutral-400"}`} />
                <span>{language === "vi" ? cat.labelVi : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                key={skill.name}
                className="bg-white border border-neutral-200/60 rounded-2xl p-5 hover:border-neutral-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-bl-full -z-10 group-hover:from-neutral-100 group-hover:to-orange-50/20 transition-all duration-300" />
                
                <div className="space-y-4">
                  
                  {/* Skill header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-md ${
                          skill.category === "sap" 
                            ? "bg-[#002B66]/10 text-[#002B66] border border-[#002B66]/5"
                            : skill.category === "web"
                            ? "bg-[#ff5722]/10 text-[#ff5722] border border-[#ff5722]/5"
                            : "bg-purple-100 text-purple-700 border border-purple-200/30"
                        }`}>
                          {skill.category === "sap" ? "SAP CORE" : skill.category === "web" ? "WEB FRONTEND" : "QA & DEV"}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium font-mono">
                          {skill.experience}
                        </span>
                      </div>
                      <h3 className="text-sm font-extrabold text-neutral-900 group-hover:text-[#ff5722] transition-colors leading-snug mt-1.5 flex items-center gap-1.5">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs font-bold text-neutral-800">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Rating progress line */}
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        skill.category === "sap" 
                          ? "bg-gradient-to-r from-blue-700 to-[#002B66]" 
                          : skill.category === "web"
                          ? "bg-gradient-to-r from-orange-400 to-[#ff5722]"
                          : "bg-gradient-to-r from-purple-500 to-indigo-600"
                      }`}
                    />
                  </div>

                  <p className="text-[12px] text-neutral-550 leading-relaxed min-h-[36px]">
                    {language === "vi" ? skill.descriptionVi : skill.descriptionEn}
                  </p>
                </div>

                {/* Sub tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dotted border-neutral-100 mt-4">
                  {skill.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] font-mono text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Core methodology footnotes */}
        <div className="p-5 bg-neutral-50/70 border border-neutral-200/50 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#ff5722] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900 leading-none">
                {language === "vi" ? "Triết lý chuyển đổi kỹ thuật" : "Technical Bridge Mindset"}
              </p>
              <p className="text-[11px] text-neutral-500 mt-1 leading-snug">
                {language === "vi" 
                  ? "Sử dụng lối tư duy logic chặt chẽ của hệ thống backend SAP để giải quyết các cấu trúc state phức tạp ở Client và ngược lại."
                  : "Leveraging rigorous backend execution constraints to structure highly testable, scalable user interface architectures."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 self-end md:self-auto uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>SAP ABAP 7.54 + NextJS 15</span>
          </div>
        </div>

      </div>
    </section>
  );
}
