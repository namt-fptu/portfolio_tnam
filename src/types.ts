/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  logo: string; // Company initials or small text placeholder
  color: string; // Accent color for the company logo container
}

export interface Award {
  id: string;
  title: string;
  provider: string;
  date: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  mockImageUrl: string; // High-fidelity SVG/CSS mockup styling key
  accentColor: string;
  bgColor: string;
  link: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  illustrations: Array<{
    title: string;
    theme: "blue" | "dark" | "teal" | "amber";
    heroText: string;
  }>;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface BookingSlot {
  id: string;
  time: string;
  status: "Available" | "Booked" | "Reserved";
}
