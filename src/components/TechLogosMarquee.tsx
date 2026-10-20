"use client";

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Server, 
  Code2, 
  Wifi, 
  Layers, 
  Radio, 
  Activity,
  CheckCircle2
} from "lucide-react";

export default function TechLogosMarquee() {
  const brands = [
    { name: "Hikvision", tag: "AI Video Analitik", color: "from-rose-500 to-red-600" },
    { name: "Cisco Systems", tag: "Kurumsal Omurga Ağ", color: "from-sky-400 to-blue-600" },
    { name: "Dahua Technology", tag: "Termal & IP Kamera", color: "from-blue-500 to-indigo-600" },
    { name: "MikroTik", tag: "10G Fiber Router & FW", color: "from-amber-400 to-orange-500" },
    { name: "Ubiquiti UniFi", tag: "Endüstriyel Mesh WiFi", color: "from-cyan-400 to-blue-500" },
    { name: "Microsoft .NET", tag: "Kurumsal C# Çözümleri", color: "from-purple-500 to-indigo-600" },
    { name: "React & Next.js", tag: "Yüksek Hızlı Web UI", color: "from-cyan-300 to-sky-500" },
    { name: "Kingston Enterprise", tag: "ECC Sunucu RAM & NVMe", color: "from-red-500 to-rose-600" },
    { name: "Intel Xeon & Core", tag: "İş İstasyonu İşlemcileri", color: "from-blue-400 to-sky-600" },
    { name: "PETG Carbon 3D", tag: "Endüstriyel Saha Aparatı", color: "from-emerald-400 to-teal-500" }
  ];

  return (
    <div className="py-8 bg-[#030712] border-y border-white/[0.06] overflow-hidden relative">
      {/* Sol ve Sağ Geçiş Yumuşatma Degradesi (Fade) */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
          <Activity className="w-3.5 h-3.5 text-sky-400" />
          <span>Resmi Distribütör Garantili Donanım & Endüstriyel Yazılım Altyapısı</span>
        </span>
      </div>

      {/* Kayan Şerit */}
      <div className="flex w-max animate-marquee gap-4 py-1">
        {[...brands, ...brands].map((b, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all group shrink-0"
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${b.color} group-hover:scale-125 transition-transform`} />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                {b.name}
              </span>
              <span className="text-[10px] text-slate-400">
                {b.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
