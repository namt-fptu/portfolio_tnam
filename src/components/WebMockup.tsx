/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface WebMockupProps {
  type: string;
  theme?: "blue" | "dark" | "teal" | "amber";
  customHeroText?: string;
}

export default function WebMockup({ type, theme = "blue", customHeroText }: WebMockupProps) {
  // Let's build responsive interactive styled UI nodes depending on the type
  if (type === "service-demo") {
    // Elegant mini templates for service showcases
    const bgMap = {
      blue: "bg-[#f5f8ff] text-[#1c3d5a]",
      dark: "bg-[#111112] text-[#f4f4f3] border-neutral-800",
      teal: "bg-[#f2faf7] text-[#113a2d]",
      amber: "bg-[#fffbfa] text-[#4d2d18]"
    };

    const headerAccent = {
      blue: "bg-blue-600",
      dark: "bg-white",
      teal: "bg-emerald-600",
      amber: "bg-amber-600"
    };

    return (
      <div className={`w-full aspect-[4/3] rounded-xl border border-neutral-200/60 shadow-lg overflow-hidden flex flex-col font-sans transition-all duration-300 hover:shadow-xl ${bgMap[theme]}`}>
        {/* Browser bar */}
        <div className="px-3 py-2 border-b border-neutral-100 dark:border-neutral-800/50 flex items-center justify-between bg-white/40 dark:bg-black/20 backdrop-blur-md">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
          <div className="text-[9px] font-mono opacity-40 px-4 py-0.5 rounded-md bg-white/60 dark:bg-black/30 w-36 text-center truncate">
            {theme}.aesthetic.studio
          </div>
          <div className="w-10"></div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden relative">
          {/* Decorative background grid/blobs */}
          <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>

          {/* Mini Nav */}
          <div className="flex justify-between items-center text-[10px]">
            <div className="font-bold tracking-tight uppercase flex items-center gap-1">
              <div className={`w-2.5 h-2.5 rounded-sm ${headerAccent[theme]}`}></div>
              {theme.toUpperCase()}
            </div>
            <div className="flex gap-2.5 opacity-60 font-medium">
              <span>Home</span>
              <span>Features</span>
              <span>Pricing</span>
            </div>
          </div>

          {/* Main Hero block */}
          <div className="my-auto py-2">
            <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-1.5 ${headerAccent[theme]} text-white`}>
              Design Concept
            </span>
            <h4 className="text-sm md:text-base font-bold font-display leading-tight tracking-tight max-w-[85%]">
              {customHeroText || "Sleek and immersive design systems."}
            </h4>
            <p className="text-[10px] opacity-70 mt-1 max-w-[70%] leading-relaxed">
              Experience the pinnacle of typography, motion graphics, and ultra-crisp interface layout parameters.
            </p>

            <div className="flex gap-2 mt-3">
              <span className={`px-2.5 py-1 text-[9px] font-semibold rounded-md text-white shadow-sm ${headerAccent[theme]}`}>
                Get Started
              </span>
              <span className="px-2.5 py-1 text-[9px] font-medium rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Learn More
              </span>
            </div>
          </div>

          {/* Miniature UI Dashboard Cards at the bottom of thumbnail */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/70 dark:bg-white/5 p-2 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">
              <div className="w-4 h-1 bg-black/10 dark:bg-white/10 rounded mb-1"></div>
              <div className="w-8 h-1.5 bg-black/30 dark:bg-white/30 rounded mb-1.5"></div>
              <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded"></div>
            </div>
            <div className="bg-white/70 dark:bg-white/5 p-2 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">
              <div className="w-4 h-1 bg-black/10 dark:bg-white/10 rounded mb-1"></div>
              <div className="w-6 h-1.5 bg-black/30 dark:bg-white/30 rounded mb-1.5"></div>
              <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded"></div>
            </div>
            <div className="bg-white/70 dark:bg-white/5 p-2 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">
              <div className="w-4 h-1 bg-black/10 dark:bg-white/10 rounded mb-1"></div>
              <div className="w-10 h-1.5 bg-black/30 dark:bg-white/30 rounded mb-1.5"></div>
              <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Showcase layout builders for "Selected works"
  return (
    <div className="w-full aspect-[16/10] bg-white rounded-xl border border-neutral-200 shadow-md overflow-hidden flex flex-col font-sans transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
      {/* Chrome address bar */}
      <div className="px-4 py-2.5 border-b border-neutral-200/70 bg-neutral-50 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-[10px] font-mono text-neutral-400 px-4 py-1 rounded bg-neutral-100 border border-neutral-200/50 w-72 text-center truncate">
          https://www.{type}.com
        </div>
        <div className="w-12"></div>
      </div>

      {/* Screen layout design */}
      <div className="flex-1 p-4 lg:p-6 overflow-hidden flex flex-col justify-between relative bg-neutral-50">
        {type === "struktura" ? (
          <div className="flex-1 flex flex-col justify-between text-neutral-800">
            {/* SAP BJSM Header */}
            <div className="flex justify-between items-center border-b border-neutral-200 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded bg-[#002B66]"></div>
                <div className="font-display font-black text-xs tracking-tight text-[#002B66]">SAP FIORI • BJSM PORTAL</div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>S/4HANA OK</span>
              </div>
            </div>

            {/* Core Hero / Layout */}
            <div className="grid grid-cols-2 gap-4 my-auto">
              <div className="flex flex-col justify-center">
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-neutral-400">UNMANAGED RAP PATTERN</span>
                <h3 className="text-sm lg:text-base font-bold font-display mt-0.5 text-neutral-900 leading-tight">
                  Background Job Control Center
                </h3>
                <div className="w-8 h-[2px] bg-[#002B66] my-2"></div>
                <p className="text-[9.5px] text-neutral-500 leading-relaxed">
                  Lighter SM36/SM37 alternative integrating standard Function Modules (JOB_OPEN, JOB_CLOSE). Highly-optimized query models without SELECT-in-LOOP patterns.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="px-2.5 py-1 bg-[#002B66] text-white rounded text-[8px] font-semibold tracking-tight">Execute Job</span>
                  <span className="px-2 py-1 border border-neutral-200 text-neutral-600 rounded text-[8px] font-medium">View ATC Logs</span>
                </div>
              </div>

              {/* Graphical representation of background jobs scheduling */}
              <div className="bg-white border border-neutral-200/60 rounded-lg p-2.5 shadow-sm flex flex-col justify-between gap-2">
                <div className="flex justify-between items-center text-[8px] font-mono">
                  <span className="font-bold text-neutral-400">ACTIVE SAP THREADS</span>
                  <span className="text-[#002B66]">OData v2</span>
                </div>
                
                {/* Simulated table/grid of jobs */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[7px] font-mono border-b border-neutral-100 pb-1">
                    <span className="text-neutral-500">ZJOB_CLEANUP_STABLE</span>
                    <span className="text-emerald-600 font-bold">RELEASED</span>
                  </div>
                  <div className="flex justify-between text-[7px] font-mono border-b border-neutral-100 pb-1">
                    <span className="text-neutral-500">ZJOB_CALC_METRIC</span>
                    <span className="text-emerald-600 font-bold">RUNNING</span>
                  </div>
                  <div className="flex justify-between text-[7px] font-mono pb-0.5">
                    <span className="text-neutral-500">ZJOB_CHECK_INDEX</span>
                    <span className="text-neutral-400">SCHEDULED</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-neutral-100 pt-1 text-[7px] text-neutral-400 font-mono">
                  <span>Server: HCMC_S4_PROD</span>
                  <span className="text-emerald-600 font-bold">ATC Passed</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer block */}
            <div className="border-t border-neutral-200/50 pt-2 flex justify-between items-center text-[8px] font-mono text-neutral-500">
              <span>©2024 BACKGROUND JOB INTEGRATOR</span>
              <span className="opacity-75">OO TRADING • CDS LAYER</span>
            </div>
          </div>
        ) : type === "prudentlife" ? (
          <div className="flex-1 flex flex-col justify-between text-neutral-800">
            {/* NextJS Aidonia Header */}
            <div className="flex justify-between items-center pb-2 border-b border-orange-100">
              <span className="font-display font-extrabold text-xs text-orange-600 flex items-center gap-1">
                <div className="w-2 h-2 rounded bg-orange-500"></div>
                AIDONIA SITE
              </span>
              <span className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-[7.5px] font-bold">Firebase Real-time</span>
            </div>

            {/* Content with columns */}
            <div className="grid grid-cols-12 gap-3 my-auto pt-2">
              <div className="col-span-7 flex flex-col justify-center">
                <h3 className="text-xs lg:text-sm font-bold text-neutral-900 leading-snug">
                  Modern NextJS Real-time E-Commerce Storefront.
                </h3>
                <p className="text-[9px] text-neutral-500 mt-1 leading-relaxed">
                  Seamless user workflows with responsive layout, real-time message chat, secure state parameters, and payment checkout interfaces.
                </p>

                {/* Simulated product search */}
                <div className="mt-3 flex gap-1 items-center bg-white border border-neutral-200 rounded p-0.5 max-w-xs shadow-sm">
                  <div className="px-2 text-[8px] text-neutral-400 truncate flex-1">Search tech gear...</div>
                  <button className="px-2 py-1 bg-orange-500 text-white rounded text-[7.5px] font-bold">Search</button>
                </div>
              </div>

              {/* Chat & Product Panel */}
              <div className="col-span-5 bg-white border border-neutral-100 rounded-lg p-2 shadow-sm flex flex-col justify-between h-24">
                <div className="flex justify-between items-center pb-1 border-b border-neutral-50">
                  <span className="text-[7px] font-bold text-neutral-400">STORE AGENT LIVE CHAT</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                </div>
                
                <div className="space-y-1 my-1 flex-1 overflow-hidden flex flex-col justify-end">
                  <div className="bg-neutral-50 p-1 rounded text-[7px] text-neutral-600 self-start max-w-[90%]">
                    Is the premium checkout pipeline active?
                  </div>
                  <div className="bg-orange-50 p-1 rounded text-[7px] text-orange-700 self-end max-w-[90%] font-medium">
                    Yes! Live with Firebase channels.
                  </div>
                </div>
                
                <div className="text-[6.5px] text-neutral-400 font-mono text-right">
                  Connected Socket
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[7.5px] text-neutral-400 border-t border-neutral-100 pt-1.5">
              <span>Next.js Static Generation optimized</span>
              <span>EST. 2024</span>
            </div>
          </div>
        ) : type === "eliteguard" ? (
          <div className="flex-1 flex flex-col justify-between text-neutral-800">
            {/* Koi Care Platform */}
            <div className="flex justify-between items-center border-b border-teal-200 pb-2">
              <span className="font-display font-medium text-[10px] tracking-tight text-teal-800 font-bold">KOI CARE PORTAL</span>
              <span className="text-[7px] font-mono px-2 py-0.5 bg-teal-50 border border-teal-200 text-teal-700 rounded font-bold">BOOKING DESK</span>
            </div>

            {/* Booking Platform Layout */}
            <div className="grid grid-cols-2 gap-4 my-auto">
              <div>
                <h3 className="text-xs lg:text-sm font-bold font-display text-[#113a2d] leading-snug">
                  Intuitive home-service pond check integration.
                </h3>
                <p className="text-[9px] text-neutral-500 mt-1 leading-relaxed">
                  Built with ReactJS, Ant Design, and Axios RESTful patterns for expert home consultation schedules.
                </p>
                <div className="mt-3.5 flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <div className="text-[8px] font-medium text-[#113a2d]">Booking engine online</div>
                </div>
              </div>

              {/* Expert diagnostic dispatch card */}
              <div className="bg-teal-900 text-white p-2.5 rounded-lg flex flex-col justify-between h-24">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] tracking-wide text-teal-200 font-mono uppercase">DISPATCH APPOINTMENT</span>
                </div>
                <div className="my-1.5">
                  <div className="text-[10px] font-bold text-teal-50 leading-tight">"Pond pH & Filtration Diagnostic"</div>
                  <div className="text-[7px] text-teal-300 mt-0.5">Date: Tomorrow, Oct 24</div>
                </div>
                <div className="w-full bg-teal-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[100%]"></div>
                </div>
              </div>
            </div>

            {/* Bottom block */}
            <div className="flex justify-between text-[7px] text-neutral-400 border-t border-neutral-100 pt-1.5">
              <span>Axios REST API Secure connection validated</span>
              <span>Available 24/7 Portal Support</span>
            </div>
          </div>
        ) : (
          // moovin layout
          <div className="flex-1 flex flex-col justify-between text-[#3d2719]">
            {/* Header */}
            <div className="flex justify-between items-center pb-2 border-b border-[#e5d6cd]">
              <span className="font-display font-black text-xs text-[#ff5722] flex items-center gap-0.5">
                MOOVIN'
              </span>
              <span className="px-2 py-0.5 bg-[#fff3e0] text-[#ff5722] rounded text-[8px] font-black">NEXT-DAY TRACKER</span>
            </div>

            {/* Map Simulator */}
            <div className="grid grid-cols-12 gap-3 my-auto">
              <div className="col-span-5 flex flex-col justify-center">
                <h3 className="text-xs lg:text-sm font-black tracking-tight text-[#3d2719] leading-tight">
                  Seamless transit. Zero stress coordinates.
                </h3>
                <p className="text-[9px] text-[#705646] mt-1 leading-normal">
                  Calculate real-time quotes, select packing support metrics, and lock in guaranteed time slots with live tracking.
                </p>
                <div className="mt-3.5">
                  <span className="px-3 py-1.5 bg-[#3d2719] text-white rounded text-[8px] font-bold shadow-md inline-block">
                    Book Move No-Deposit
                  </span>
                </div>
              </div>

              {/* Mini Transit map widget */}
              <div className="col-span-7 bg-[#fffcfb] border border-[#ffecd1] rounded-lg p-2.5 flex flex-col justify-between h-28 relative overflow-hidden">
                <span className="text-[7px] font-mono text-[#a08471] uppercase">LIVE FLEET DISPATCH</span>
                
                {/* Visual grid representing map */}
                <div className="absolute inset-x-2 inset-y-6 border border-dashed border-[#f4e2d8] rounded flex items-center justify-around">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600 relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[5px] font-mono font-bold bg-[#3d2719] text-white px-1 py-0.5 rounded shadow">A</span>
                  </div>
                  <div className="w-full h-[1.5px] bg-[#f4e2d8] relative">
                    <div className="absolute left-[30%] -top-1.5 w-4 h-3 bg-[#ff5722] rounded flex items-center justify-center text-[5.5px] text-white font-extrabold shadow-sm animate-bounce">🚚</div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 relative animate-ping">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[5px] font-mono font-bold bg-teal-600 text-white px-1 py-0.5 rounded shadow">B</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[7.5px] font-mono text-neutral-600 mt-auto z-10">
                  <span>ETA: 18 Minutes</span>
                  <span className="text-orange-600 font-bold">Transit Secured</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[7.5px] text-[#a08471]">
              <span>Licensed Carrier #9283-A</span>
              <span>All Shipments Insured Up To $10M</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
