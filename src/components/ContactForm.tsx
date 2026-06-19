/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ContactFormProps {
  onClose?: () => void;
  inlineMode?: boolean;
}

export default function ContactForm({ onClose, inlineMode = false }: ContactFormProps) {
  const { language, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Constants - Use environment variables with fallback defaults
  const MY_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "sofn2004@gmail.com";
  const MY_PHONE = import.meta.env.VITE_CONTACT_PHONE || "+84 964 821 721";
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/your-profile";
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "https://github.com/your-username";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MY_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(MY_PHONE);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone:", err);
    }
  };

  const handleSendMessage = () => {
    const subject = language === "vi" 
      ? "Liên hệ hợp tác - Nguyễn Thái Nam" 
      : "Job Inquiry / Professional Collaboration - Nguyen Thai Nam";
    const body = language === "vi" 
      ? "Xin chào Nam,\n\nTôi vừa xem qua hồ sơ chuyên môn của bạn và muốn trao đổi thêm về cơ hội hợp tác..." 
      : "Hi Nam,\n\nI visited your professional portfolio and would love to stay in touch regarding career opportunities...";
    
    const mailtoUrl = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className={`w-full ${inlineMode ? "bg-transparent py-4" : "bg-white p-2"} font-sans`}>
      
      {/* Header Block */}
      <div className="space-y-2 mb-8 text-center sm:text-left">
        <span className="text-[10px] font-mono font-extrabold text-[#ff5722] tracking-wider block uppercase">
          {language === "vi" ? "THÔNG TIN LIÊN HỆ CHÍNH THỨC" : "OFFICIAL DIRECT CHANNELS"}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 tracking-tight">
          {language === "vi" ? "Kết Nối Với Nguyễn Thái Nam" : "Connect Directly with Nguyen Thai Nam"}
        </h3>
        <p className="text-xs text-neutral-500 max-w-2xl font-normal leading-relaxed">
          {language === "vi" 
            ? "Xem nhanh thông tin liên lạc chính thức dưới đây. Bạn có thể sao chép nhanh địa chỉ email, số điện thoại hoặc bấm nút Gửi Tin Nhắn để mở trình soạn thư mặc định với tiêu đề và mẫu thư được thiết lập sẵn."
            : "Explore verified corporate and social channels below. Copy quick contact credentials directly, or click the primary Send Message CTA to initialize a secure pre-filled mail outline in your native client."}
        </p>
      </div>

      {/* Grid of contact channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        {/* Email Card */}
        <div className="p-5 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-400 hover:shadow-xs transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5722] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <button 
                type="button"
                onClick={handleCopyEmail}
                className="p-1 px-2.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                title={language === "vi" ? "Sao chép thư" : "Copy email address"}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-[9px] font-bold text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-neutral-400" />
                    <span className="text-[9px] font-bold text-neutral-500">Copy</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="space-y-1">
              <span className="text-[8px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">EMAIL ADDRESS</span>
              <a 
                href={`mailto:${MY_EMAIL}?subject=Inquiry`}
                className="text-xs font-bold text-neutral-800 hover:text-[#ff5722] transition-colors break-all block"
              >
                {MY_EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200/60 flex justify-end">
            <a 
              href={`mailto:${MY_EMAIL}?subject=Contact`}
              className="text-[10px] font-extrabold text-[#ff5722] flex items-center gap-1 hover:underline"
            >
              <span>{language === "vi" ? "Gửi Thư Trực Tiếp" : "Spawn Email"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-5 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-400 hover:shadow-xs transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <button 
                type="button"
                onClick={handleCopyPhone}
                className="p-1 px-2.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                title={language === "vi" ? "Sao chép số điện thoại" : "Copy phone number"}
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-[9px] font-bold text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-neutral-400" />
                    <span className="text-[9px] font-bold text-neutral-500">Copy</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="space-y-1">
              <span className="text-[8px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">{language === "vi" ? "SỐ ĐIỆN THOẠI" : "PHONE LINE"}</span>
              <a 
                href={`tel:${MY_PHONE.replace(/\s+/g, "")}`}
                className="text-xs font-bold text-neutral-800 hover:text-blue-600 transition-colors block"
              >
                {MY_PHONE}
              </a>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200/60 flex justify-end">
            <a 
              href={`tel:${MY_PHONE.replace(/\s+/g, "")}`}
              className="text-[10px] font-extrabold text-blue-600 flex items-center gap-1 hover:underline"
            >
              <span>{language === "vi" ? "Gọi Ngay" : "Dial Now"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <a 
          href={LINKEDIN_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-400 hover:shadow-xs transition-all group cursor-pointer"
        >
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            
            <div className="space-y-1">
              <span className="text-[8px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">LINKEDIN CHANNELS</span>
              <span className="text-xs font-bold text-neutral-800 block truncate">
                nam-nguyen-sap
              </span>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200/60 flex justify-end">
            <div className="text-[10px] font-extrabold text-neutral-600 flex items-center gap-1 group-hover:text-[#0077b5] group-hover:underline">
              <span>{language === "vi" ? "Kết Nối Linkedin" : "View Profile"}</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>

        {/* GitHub Card */}
        <a 
          href={GITHUB_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-400 hover:shadow-xs transition-all group cursor-pointer"
        >
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-900/10 text-neutral-900 flex items-center justify-center shrink-0">
              <Github className="w-5 h-5" />
            </div>
            
            <div className="space-y-1">
              <span className="text-[8px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">GITHUB ARCHIVE</span>
              <span className="text-xs font-bold text-neutral-800 block truncate">
                namnt-abap
              </span>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200/60 flex justify-end">
            <div className="text-[10px] font-extrabold text-neutral-600 flex items-center gap-1 group-hover:text-black group-hover:underline">
              <span>{language === "vi" ? "Xem Kho Mã Nguồn" : "Browse Repos"}</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>

      </div>

      {/* Main Mailto Trigger block */}
      <div className="p-6 bg-neutral-950 text-white rounded-3xl text-center space-y-4 max-w-3xl mx-auto shadow-lg">
        <h4 className="text-sm font-bold font-display tracking-tight text-white">
          {language === "vi" ? "Gửi Thư Trực Tiếp Đến Nguyễn Thái Nam ?" : "Want to Start a Conversation with Nguyen Thai Nam?"}
        </h4>
        <p className="text-[11px] text-neutral-300 max-w-xl mx-auto leading-relaxed">
          {language === "vi" 
            ? "Bấm vào nút dưới đây để khởi chạy ứng dụng thư mặc định của bạn (Outlook, Mail, hoặc Gmail) với tệp thư nháp được định cấu hình tự động hoàn chỉnh."
            : "Click below to initialize. We will launch your default system companion email utility with predefined routing data, saving your crucial corporate scheduling steps."}
        </p>
        <div className="flex justify-center pt-2 gap-3 flex-wrap">
          <button
            type="button"
            onClick={handleSendMessage}
            className="px-6 py-3 bg-white text-neutral-950 font-extrabold text-xs tracking-wide rounded-xl shadow-sm hover:bg-neutral-100 transition-all active:scale-95 flex items-center gap-2 cursor-pointer font-bold duration-200"
          >
            <Send className="w-3.5 h-3.5 text-neutral-950" />
            <span>{language === "vi" ? "Gửi Tin Nhắn (Mở Trình Thư)" : "Send Message (Open Email Client)"}</span>
          </button>
          
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-400 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              {language === "vi" ? "Đóng Cửa Sổ" : "Close Window"}
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
