/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, Award, Project, ServiceItem, Testimonial, BookingSlot } from "./types";

// --- ENGLISH DATA ---

export const experiences: WorkExperience[] = [
  {
    id: "exp-1",
    role: "SAP ABAP Intern",
    company: "FPT Software",
    period: "Jan. 2025 - Apr. 2025",
    logo: "FS",
    color: "bg-[#002B66]/10 text-[#002B66]"
  },
  {
    id: "exp-2",
    role: "Bachelor of Software Engineering (Semester 9/9)",
    company: "FPT University",
    period: "2022 - Present",
    logo: "FU",
    color: "bg-[#F27024]/10 text-[#F27024]"
  }
];

export const awards: Award[] = [
  {
    id: "award-1",
    title: "SAP S/4HANA Capstone Highlight Project (BJSM)",
    provider: "FPT University Jury",
    date: "2024",
    link: "https://fpt.edu.vn"
  },
  {
    id: "award-2",
    title: "Academic standing GPA 3.0/4.0 Software Engineering",
    provider: "FPT University",
    date: "2025",
    link: "https://fpt.edu.vn"
  },
  {
    id: "award-3",
    title: "Succesful Bridge from ReactJS/NextJS to SAP Backend",
    provider: "FPT Software Intern Cohort",
    date: "Jan 2025",
    link: "https://fptsoftware.com"
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Background Job Scheduling & Management System (BJSM)",
    category: "SAP Capstone Project",
    period: "2024",
    description: "Designed and developed a centralized Background Job Management platform on SAP S/4HANA as an intuitive alternative to standard SM36/SM37 transactions. Implemented RAP (Unmanaged) business logic and exposed OData Services for SAP Fiori integration. Integrated SAP Function Modules (JOB_OPEN, JOB_SUBMIT, JOB_CLOSE) to automate the complete background job lifecycle. Optimized Open SQL queries by eliminating SELECT-in-LOOP patterns, reducing database round trips and improving execution efficiency.",
    tags: ["Modern ABAP", "RAP (Unmanaged)", "CDS", "OOA", "Open SQL"],
    mockImageUrl: "struktura",
    accentColor: "from-[#002B66] to-[#004BB3]",
    bgColor: "bg-blue-50/50",
    link: "#",
    featured: true
  },
  {
    id: "proj-2",
    title: "Aidonia (E-Commerce)",
    category: "Frontend E-Commerce Web Service",
    period: "2024",
    description: "Developed responsive UI and integrated Firebase/REST APIs for real-time chat, product management, and premium payment workflows.",
    tags: ["NextJS", "Firebase", "REST API", "Tailwind CSS"],
    mockImageUrl: "prudentlife",
    accentColor: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50/50",
    link: "#",
    featured: true
  },
  {
    id: "proj-3",
    title: "Koi Care At Home Platform",
    category: "Home-Service Booking Web Platform",
    period: "2024",
    description: "Built an intuitive home-service booking interface, ensuring seamless RESTful API integration for booking workflows and media uploads.",
    tags: ["ReactJS", "Ant Design", "REST API", "Axios"],
    mockImageUrl: "eliteguard",
    accentColor: "from-teal-600 to-emerald-500",
    bgColor: "bg-teal-50/50",
    link: "#",
    featured: true
  }
];

export const services: ServiceItem[] = [
  {
    id: "srv-1",
    title: "SAP ABAP Backend Development & S/4HANA",
    description: "Specialized in enterprise-standard SAP S/4HANA compliant service models utilizing Modern ABAP (7.40+), OOA, CDS, and RAP.",
    longDescription: "Building robust, robust-architecture backend structures for SAP S/4HANA. Experienced in setting up RAP unmanaged patterns, exposing crisp OData services for SAP Fiori consumption, using BAPIs, modern Object-Oriented principles, and high-performance Open SQL.",
    illustrations: [
      {
        title: "BJSM Job Scheduler Control",
        theme: "dark",
        heroText: "Centralized Core SAP Job Scheduling"
      },
      {
        title: "RAP Custom OData Service Exposure",
        theme: "blue",
        heroText: "Security Protected Fiori Gateway APIs"
      }
    ]
  },
  {
    id: "srv-2",
    title: "Modern Web Frontend Development (ReactJS & NextJS)",
    description: "Developing end-to-end web services with clean responsive layouts, robust state workflows, and fast API communication.",
    longDescription: "Successfully bridged frontend frameworks like ReactJS/NextJS, TypeScript, and Tailwind with secure downstream services. Highly proficient in clean component isolation, real-time channels like Firebase, and RESTful API processing.",
    illustrations: [
      {
        title: "Koi Care Platform Portal",
        theme: "teal",
        heroText: "Intuitive Home Service Booking Dashboard"
      },
      {
        title: "Aidonia E-Commerce Layout",
        theme: "amber",
        heroText: "Firebase Chat & Product Management Node"
      }
    ]
  },
  {
    id: "srv-3",
    title: "Performance Optimization & Code Quality Assurance",
    description: "Troubleshooting custom backend logic, optimizing SQL indexes, and adhering strictly to SAP Clean Code guidelines.",
    longDescription: "Deeply committed to keeping database query counts low. Solid foundation in avoiding SELECT-in-LOOP patterns, conducting extensive Extended Program Check (SLIN) loops, and debugging using Eclipse ADT tools.",
    illustrations: [
      {
        title: "SLIN and ATC Assessment Console",
        theme: "dark",
        heroText: "100% Compliant Code Compliance"
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Nguyen Thai Nam is a dedicated final-year Software Engineering student. Successfully transitioned from a ReactJS/NextJS background to SAP backend, bringing a solid multi-stack perspective to our team dynamics.",
    author: "Reflections from FPT Software Internship Mentor",
    role: "SAP ABAP Team Lead",
    company: "FPT Software",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "test-2",
    quote: "Passionate about building scalable, clean-code, performance-optimized, and enterprise-compliant systems. Combines professional English capability with thorough trial-tested backend logic.",
    author: "Nguyen Thai Nam",
    role: "SAP ABAP Developer",
    company: "Professional Statement",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
  }
];

export const bookingSlots: BookingSlot[] = [
  { id: "slot-1", time: "09:00 AM - 10:30 AM", status: "Booked" },
  { id: "slot-2", time: "11:00 AM - 12:30 PM", status: "Available" },
  { id: "slot-3", time: "02:00 PM - 03:30 PM", status: "Available" },
  { id: "slot-4", time: "04:00 PM - 05:30 PM", status: "Booked" }
];

// --- VIETNAMESE DATA ---

export const experiencesVi: WorkExperience[] = [
  {
    id: "exp-1",
    role: "Thực tập sinh SAP ABAP",
    company: "FPT Software",
    period: "Tháng 01/2025 - Tháng 04/2025",
    logo: "FS",
    color: "bg-[#002B66]/10 text-[#002B66]"
  },
  {
    id: "exp-2",
    role: "Sinh viên Kỹ thuật Phần mềm (Kỳ học 9/9)",
    company: "Đại học FPT",
    period: "2022 - Hiện tại",
    logo: "FU",
    color: "bg-[#F27024]/10 text-[#F27024]"
  }
];

export const awardsVi: Award[] = [
  {
    id: "award-1",
    title: "Đề án Capstone tâm đắc nhất SAP S/4HANA (Hệ thống BJSM)",
    provider: "Hội đồng Giám khảo Đại học FPT",
    date: "2024",
    link: "https://fpt.edu.vn"
  },
  {
    id: "award-2",
    title: "Kết quả học tập tốt GPA 3.0/4.0 chuyên ngành Kỹ thuật Phần mềm",
    provider: "Đại học FPT",
    date: "2025",
    link: "https://fpt.edu.vn"
  },
  {
    id: "award-3",
    title: "Chuyển giao và kết nối thành công từ Frontend ReactJS/NextJS sang SAP Backend",
    provider: "Đội ngũ Thực tập sinh FPT Software",
    date: "Tháng 01/2025",
    link: "https://fptsoftware.com"
  }
];

export const projectsVi: Project[] = [
  {
    id: "proj-1",
    title: "Hệ thống Quản lý & Lập lịch Background Job (BJSM)",
    category: "Đồ án Capstone SAP",
    period: "2024",
    description: "Thiết kế và phát triển nền tảng quản lý Background Job tập trung trên SAP S/4HANA thay thế trực quan cho các T-Code SM36/SM37 truyền thống. Triển khai logic nghiệp vụ RAP (Unmanaged) và đóng gói OData Services để đồng bộ với SAP Fiori. Tích hợp trực tiếp các Function Modules tiêu chuẩn của SAP (JOB_OPEN, JOB_SUBMIT, JOB_CLOSE) nhằm tự động hóa vòng đời công việc. Tối ưu hóa các câu lệnh Open SQL, loại bỏ hoàn toàn các cấu trúc SELECT-in-LOOP giúp tiết kiệm số lượng truy vấn hệ thống vượt trội.",
    tags: ["ABAP Hiện đại", "RAP (Unmanaged)", "CDS Layer", "OOA", "Open SQL"],
    mockImageUrl: "struktura",
    accentColor: "from-[#002B66] to-[#004BB3]",
    bgColor: "bg-blue-50/50",
    link: "#",
    featured: true
  },
  {
    id: "proj-2",
    title: "Aidonia (Trang thương mại điện tử)",
    category: "Dịch vụ Web Thương mại điện tử",
    period: "2024",
    description: "Xây dựng giao diện phản hồi mượt mà, tích hợp Firebase & REST APIs xử lý dữ liệu chat trực tuyến thời gian thực, quản lý danh mục sản phẩm, đồng thời tối ưu hóa cổng thanh toán dịch vụ cao cấp.",
    tags: ["NextJS", "Firebase", "REST API", "Tailwind CSS"],
    mockImageUrl: "prudentlife",
    accentColor: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50/50",
    link: "#",
    featured: true
  },
  {
    id: "proj-3",
    title: "Nền tảng Koi Care Tại Nhà",
    category: "Cổng Đặt Lịch Tư vấn & Chăm sóc tại nhà",
    period: "2024",
    description: "Thiết kế cổng tương tác đặt lịch nhanh chóng cho dịch vụ kiểm tra sức khỏe hồ cá Koi, đồng bộ hệ thống RESTful API bảo mật cao bằng Axios giúp quản lý lịch hẹn và đăng tải truyền thông trực quan.",
    tags: ["ReactJS", "Ant Design", "REST API", "Axios"],
    mockImageUrl: "eliteguard",
    accentColor: "from-teal-600 to-emerald-500",
    bgColor: "bg-teal-50/50",
    link: "#",
    featured: true
  }
];

export const servicesVi: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Lập trình Backend SAP ABAP & S/4HANA",
    description: "Chuyên sâu mô hình dịch vụ tiêu chuẩn doanh nghiệp SAP S/4HANA bằng Modern ABAP (7.40+), OOA, CDS và RAP.",
    longDescription: "Xây dựng các hạ tầng backend vững chắc, chuẩn kiến trúc cho hệ thống SAP S/4HANA. Có kinh nghiệm triển khai mô hình RAP unmanaged, cung cấp dịch vụ OData tinh gọn phục vụ ứng dụng SAP Fiori, tận dụng BAPIs, lập trình hướng đối tượng chuyên sâu và tối ưu hóa hệ thống dữ liệu Open SQL.",
    illustrations: [
      {
        title: "Bộ điều khiển Lập trình Lịch Job BJSM",
        theme: "dark",
        heroText: "Quản lý Lịch trình Job SAP Tập trung"
      },
      {
        title: "Cung cấp Dịch vụ OData Custom RAP",
        theme: "blue",
        heroText: "Cổng bảo mật APIs Gateway cho Fiori"
      }
    ]
  },
  {
    id: "srv-2",
    title: "Phát triển Web Frontend (ReactJS & NextJS)",
    description: "Thiết kế và lập trình giao diện Web tối ưu mượt mà, quản lý trạng thái hiệu quả và kết nối các endpoint APIs ổn định.",
    longDescription: "Hỗ trợ kết nối giữa các framework giao diện hiện đại như ReactJS, NextJS, TypeScript, Tailwind với các hệ thống dịch vụ backend. Thành thạo việc cấu trúc mã nguồn dạng module dễ tái sử dụng, đồng bộ kênh thời gian thực Firebase và giao tiếp RESTful APIs.",
    illustrations: [
      {
        title: "Cổng thông tin đặt lịch cá Koi",
        theme: "teal",
        heroText: "Bảng quản trị Đặt dịch vụ Chăm sóc cá Koi"
      },
      {
        title: "Cấu trúc Trang Thương mại Aidonia",
        theme: "amber",
        heroText: "Luồng nhắn tin Firebase & Quản lý thiết bị dữ liệu"
      }
    ]
  },
  {
    id: "srv-3",
    title: "Tối ưu hóa Hiệu năng & Đảm bảo Chất lượng Code",
    description: "Giải quyết các điểm nghẽn logic nghiệp vụ, nâng cấp tối ưu hóa SQL indexes, tuân thủ chặt chuẩn SAP Clean Code.",
    longDescription: "Nỗ lực tối đa hóa tốc độ tra cứu và giảm thiểu số lần gọi Database truy vấn rườm rà. Hiểu rõ cách xử lý loại bỏ SELECT-in-LOOP, thực hiện đánh giá kiểm thử SLIN/ATC liên tục và sử dụng thành thạo Eclipse ADT phục vụ gỡ lỗi.",
    illustrations: [
      {
        title: "Bảng điều khiển kiểm thử quản trị SLIN & ATC",
        theme: "dark",
        heroText: "Mã nguồn đạt chuẩn chất lượng 100%"
      }
    ]
  }
];

export const testimonialsVi: Testimonial[] = [
  {
    id: "test-1",
    quote: "Nguyễn Thái Nam là một sinh viên Kỹ thuật Phần mềm có tinh thần ham học hỏi. Em đã nhanh chóng chuyển đổi, làm quen với SAP backend từ nền tảng ReactJS/NextJS sẵn có, đóng góp tích cực vào các buổi thảo luận kỹ thuật của đội ngũ.",
    author: "Đánh giá từ Mentor Thực tập tại FPT Software",
    role: "SAP ABAP Team Lead",
    company: "FPT Software",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "test-2",
    quote: "Chú trọng tìm hiểu các hệ thống phần mềm có tính ổn định cao, tối ưu hóa các dòng lệnh SQL cơ bản và tuân thủ các quy tắc lập trình sạch (Clean Code). Tích cực trau dồi cả kỹ năng chuyên môn lẫn khả năng ngoại ngữ.",
    author: "Nguyễn Thái Nam",
    role: "Lập trình viên SAP ABAP",
    company: "Định hướng phát triển bản thân",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
  }
];

export const bookingSlotsVi: BookingSlot[] = [
  { id: "slot-1", time: "09:00 Sáng - 10:30 Sáng", status: "Booked" },
  { id: "slot-2", time: "11:00 Sáng - 12:30 Chiều", status: "Available" },
  { id: "slot-3", time: "02:00 Chiều - 03:30 Chiều", status: "Available" },
  { id: "slot-4", time: "04:00 Chiều - 05:30 Chiều", status: "Booked" }
];
