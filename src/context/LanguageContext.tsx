/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "vi";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "header.intro": "Introduce",
    "header.skills": "Core Skills",
    "header.projects": "Projects",
    "header.education": "Education",
    "header.available": "Available for Opportunities",
    "header.get_in_touch": "Get in Touch",
    "header.local_time": "My local time",
    "header.thuduc": "THU DUC, HCMC, VN",
    
    "hero.hello": "Hello! I'm",
    "hero.name": "Nguyên Thái Nam",
    "hero.sub": "An SAP ABAP Developer & Web Frontend Engineer.",
    "hero.desc": "Transitioned from a ReactJS/NextJS frontend background to SAP services. Dedicated to building RAP unmanaged pipelines, CDS view models, and optimized Open SQL.",
    "hero.view_projects": "View My Projects",
    "hero.academic_profile": "Academic & Tech Profile",
    "hero.profile_title": "Educational foundation & internship background.",
    "hero.profile_desc": "Multi-stack awareness helps me communicate across frontend layers and internal SAP transactional systems.",
    "hero.metric.systems": "End-to-End systems",
    "hero.metric.code": "SAP Compliant Code",
    "hero.metric.semesters": "University Semesters",
    "hero.metric.gpa": "SE Cumulative GPA",

    "exp_awards.career_trace": "CAREER TRACE",
    "exp_awards.title": "Professional Experience",
    "exp_awards.accolades": "ACCOLADES & EDUCATION",
    "exp_awards.awards_title": "Education & Milestones",
    "exp_awards.info": "Open to developer positions, both locally in Ho Chi Minh City/Thu Duc and remote with global teams.",
    "exp_awards.creative_directive": "ARCHITECTURAL GUIDELINE",
    "exp_awards.architectural_guideline": "\"Simple, clean-code structures require careful design to ensure reliable service life and maintainability under enterprise system concurrency.\"",
    
    "services.section_subtitle": "WHAT I EXCEL AT",
    "services.section_title": "Technical Competencies",
    "services.view_details": "View Detailed Competence",
    "services.illustrations_title": "Visual architectural workflow illustration:",
    "services.close_details": "Close Details",
    
    "projects.subtitle": "SELECTED CASE STUDIES",
    "projects.title": "Deep-Dive Into Key Projects",
    "projects.view_details": "View Case Study",
    "projects.role": "ROLE",
    "projects.timeline": "TIMELINE",
    "projects.techstack": "TECHSTACK",
    "projects.overview": "Project Overview",
    "projects.pillars": "Technical Pillars Implemented",
    "projects.viewport": "Running secure Sandbox Viewport",
    "projects.close": "Close Details",
    
    "testimonials.subtitle": "MOTIVATION & PROFICIENCY HIGHLIGHTS",
    "testimonials.title": "Professional Endorsements",
    
    "contact.title": "Direct Channels",
    "contact.booking_title": "Contact Nguyen Thai Nam",
    "contact.available_slots": "AVAILABLE OFFERS",
    "contact.select_slot": "Select a message type",
    "contact.form_name": "Your name",
    "contact.form_email": "Your email address",
    "contact.form_message": "How can I help you?",
    "contact.send": "Send Message",
    "contact.sending": "Preparing...",
    "contact.success_title": "Email Client Opened!",
    "contact.success_desc": "You can now edit and send your email inquiry directly through your app.",
    "contact.close": "Close Dialog",
    "contact.slot_booked": "Off-work",
    "contact.slot_available": "Active / Let's Connect",
    "contact.time_sec": "HCMC, Vietnam Time Zone",

    "footer.title": "Let's Get in Touch",
    "footer.subtitle": "Have an opportunity?",
    "footer.desc": "I am responsive, details-oriented, and ready for collaborative engineering roles.",
    "footer.rights": "SAP ABAP Developer",
    "common.download_cv": "Download CV"
  },
  vi: {
    "header.intro": "Giới thiệu",
    "header.skills": "Kỹ năng cốt lõi",
    "header.projects": "Dự án",
    "header.education": "Học vấn",
    "header.available": "Sẵn sàng đón nhận cơ hội",
    "header.get_in_touch": "Liên hệ ngay",
    "header.local_time": "Giờ địa phương",
    "header.thuduc": "THỦ ĐỨC, TP.HCM, VN",
    
    "hero.hello": "Xin chào! Mình là",
    "hero.name": "Nguyễn Thái Nam",
    "hero.sub": "Lập trình viên SAP ABAP & Kỹ sư Frontend Web.",
    "hero.desc": "Chuyển đổi từ nền tảng frontend ReactJS/NextJS sang các dịch vụ SAP. Tập trung xây dựng các hệ thống RAP unmanaged, thiết kế CDS view và viết Open SQL hiệu quả.",
    "hero.view_projects": "Xem các dự án",
    "hero.academic_profile": "Học vấn & Công nghệ",
    "hero.profile_title": "Nền tảng học thuật & Kinh nghiệm thực tập doanh nghiệp.",
    "hero.profile_desc": "Khả năng am hiểu đa nền tảng (multi-stack) giúp mình kết nối giữa giao diện người dùng và hệ thống nghiệp vụ SAP.",
    "hero.metric.systems": "Hệ thống đầu-cuối",
    "hero.metric.code": "Code chuẩn SAP",
    "hero.metric.semesters": "Kỳ học Đại học",
    "hero.metric.gpa": "GPA tích lũy SE",

    "exp_awards.career_trace": "LỘ TRÌNH SỰ NGHIỆP",
    "exp_awards.title": "Kinh nghiệm làm việc",
    "exp_awards.accolades": " danh hiệu & học vấn",
    "exp_awards.awards_title": "Học tập & Cột mốc",
    "exp_awards.info": "Sẵn sàng đón nhận các cơ hội lập trình trực tiếp tại TP. Hồ Chí Minh / Thủ Đức hoặc làm việc từ xa (remote) với các đối tác toàn cầu.",
    "exp_awards.creative_directive": "NGUYÊN TẮC THIẾT KẾ",
    "exp_awards.architectural_guideline": "\"Một cấu trúc mã nguồn đơn giản và chuẩn chỉ luôn cần thiết kế kỹ lưỡng để đem lại sự ổn định và khả năng bảo trì tốt dưới tần suất tải của doanh nghiệp.\"",
    
    "services.section_subtitle": "KỸ NĂNG VƯỢT TRỘI",
    "services.section_title": "Năng lực chuyên môn",
    "services.view_details": "Xem chi tiết năng lực",
    "services.illustrations_title": "Sơ đồ kiến trúc luồng công việc trực quan:",
    "services.close_details": "Đóng chi tiết",
    
    "projects.subtitle": "DỰ ÁN TIÊU BIỂU",
    "projects.title": "Thông tin chi tiết các dự án",
    "projects.view_details": "Xem chi tiết dự án",
    "projects.role": "VAI TRÒ",
    "projects.timeline": "THỜI GIAN",
    "projects.techstack": "CÔNG NGHỆ",
    "projects.overview": "Tổng quan dự án",
    "projects.pillars": "Trụ cột kỹ thuật đã triển khai",
    "projects.viewport": "Đang chạy Sandbox bảo mật",
    "projects.close": "Đóng chi tiết",
    
    "testimonials.subtitle": "ĐỘNG LỰC & ĐÁNH GIÁ CHUYÊN MÔN",
    "testimonials.title": "Đánh giá từ đồng nghiệp & Mentor",
    
    "contact.title": "Kênh liên hệ trực tiếp",
    "contact.booking_title": "Liên hệ với Nguyễn Thái Nam",
    "contact.available_slots": "KÊNH KẾT NỐI KHẢ DỤNG",
    "contact.select_slot": "Chọn kiểu tin nhắn",
    "contact.form_name": "Tên của bạn",
    "contact.form_email": "Địa chỉ email",
    "contact.form_message": "Mình có thể giúp gì được cho bạn?",
    "contact.send": "Gửi tin nhắn",
    "contact.sending": "Đang chuẩn bị...",
    "contact.success_title": "Đang Mở Trình Email!",
    "contact.success_desc": "Bạn có thể chỉnh sửa và gửi thư liên hệ trực tiếp qua ứng dụng email của mình.",
    "contact.close": "Đóng cửa sổ",
    "contact.slot_booked": "Ngoài giờ",
    "contact.slot_available": "Đang trực tuyến / Liên hệ ngay",
    "contact.time_sec": "Múi giờ HCMC, Việt Nam",

    "footer.title": "Hãy giữ liên lạc nhé",
    "footer.subtitle": "Có cơ hội hợp tác?",
    "footer.desc": "Mình luôn phản hồi nhanh, chú trọng chất lượng code và sẵn sàng tham gia các thử thách mới.",
    "footer.rights": "Lập trình viên SAP ABAP",
    "common.download_cv": "Tải CV"
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi"); // Default to Vietnamese because user says "thèm tiếng việt"

  const t = (key: string): string => {
    const dict = translations[language];
    return (dict as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
