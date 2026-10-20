"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShoppingBag, 
  Shield, 
  Code2, 
  Cpu, 
  Server, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Radio,
  Eye,
  Activity,
  Box,
  Layers,
  ChevronRight,
  TrendingUp,
  Lock,
  ArrowUpRight
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeroSection() {
  const { openQuoteModalWithService } = useCart();
  const [activeTab, setActiveTab] = useState<"cctv" | "network" | "software" | "cad3d">("cctv");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const tabs: ("cctv" | "network" | "software" | "cad3d")[] = ["cctv", "network", "software", "cad3d"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % tabs.length;
      setActiveTab(tabs[index]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("tr-TR"));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* 1. Profesyonel Maskeli İnce Grid Deseni */}
      <div className="absolute inset-0 subtle-grid pointer-events-none" />

      {/* 2. Yumuşak Atmosferik Işık Huzmeleri */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-sky-500/18 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none animate-soft-pulse" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sol Kolon: Kurumsal Başlık, Alt Başlık ve CTA'lar */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Minimalist Bölge ve Canlı Durum Rozeti */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-slate-300 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">Lüleburgaz Merkez</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Tüm Trakya'da Yerinde Teknik Destek</span>
            </div>

            {/* Ana Başlık - Üst Düzey Tipografi ve İnce Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Trakya'nın Bütünleşik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                Teknoloji ve Yazılım
              </span>{" "}
              Çözüm Ortağı
            </h1>

            {/* Alt Başlık */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Özel Kurumsal Yazılımlar, Yapay Zekalı IP Güvenlik Sistemleri, Fiber Ağ Omurgaları ve Sahaya Özel 3D Montaj Çözümlerinde Uçtan Uca Mühendislik.
            </p>

            {/* Güven Rozetleri (Hafif ve Zarif) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Tek Muhatap & Çözüm</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>30 Dk Yerinde Müdahale</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Distribütör Garantisi</span>
              </div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/hizmetlerimiz"
                className="relative group overflow-hidden w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 border border-sky-400/30"
              >
                <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
                <span className="relative z-10">Hizmetlerimizi İnceleyin</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/magaza"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/20 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-sky-400" />
                <span>Donanım Mağazası</span>
              </Link>

              <button
                onClick={() => openQuoteModalWithService()}
                className="w-full sm:w-auto text-xs font-semibold text-sky-400 hover:text-white transition-colors py-2 sm:py-0 flex items-center justify-center gap-1"
              >
                <span>Ücretsiz Keşif & Teklif Talebi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metrik Kartları (Bento Tarzı İnce Yüzeyler) */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">450+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Teslim Edilen Proje</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-black text-sky-400 tracking-tight">30 Dk</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Saha Müdahalesi</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight">%99.8</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Memnuniyet Oranı</div>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: ULTRA PROFESYONEL BÜTÜNLEŞİK BT KOKPİTİ */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Hafif Yansıma */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/20 to-blue-600/20 blur-2xl pointer-events-none" />

              {/* Ana Cam Kokpit Gövdesi */}
              <div className="relative rounded-3xl bg-[#090e1a]/90 border border-white/[0.1] p-5 sm:p-6 shadow-2xl backdrop-blur-2xl text-white space-y-4">
                
                {/* Kokpit Üst Barı */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2 font-medium">Trakya-SOC::Console</span>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ONLINE
                    </span>
                    <span className="text-slate-400 hidden sm:inline">{currentTime || "12:00:00"}</span>
                  </div>
                </div>

                {/* Sekmeler (Ultra Temiz Hap Şekli) */}
                <div className="grid grid-cols-4 gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.06] text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("cctv")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "cctv"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">4K Kamera</span>
                    <span className="sm:hidden">Kamera</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("network")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "network"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Fiber Ağ</span>
                    <span className="sm:hidden">Ağ</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("software")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "software"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Yazılım</span>
                    <span className="sm:hidden">Kod</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("cad3d")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "cad3d"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">3D Aparat</span>
                    <span className="sm:hidden">3D</span>
                  </button>
                </div>

                {/* Sekme 1: 4K Canlı Güvenlik & Yapay Zeka */}
                {activeTab === "cctv" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-950 border border-white/[0.08]">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                        alt="Fabrika IP Kamera"
                        className="w-full h-full object-cover opacity-75"
                      />
                      
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-white bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                        <span className="text-rose-400 font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                          CAM-04 [Lüleburgaz OSB Depo 2]
                        </span>
                        <span className="text-sky-300 font-semibold">4K UHD • 60 FPS • H.265+</span>
                      </div>

                      <div className="absolute top-12 left-12 border border-emerald-400/90 rounded-lg p-1.5 bg-emerald-500/10 backdrop-blur-xs">
                        <span className="text-[10px] font-bold text-emerald-300 bg-black/80 px-1.5 py-0.5 rounded">
                          AI: Yetkili Personel (%99.4)
                        </span>
                      </div>

                      <div className="absolute bottom-6 right-8 border border-sky-400/90 rounded-lg p-1.5 bg-sky-500/10">
                        <span className="text-[10px] font-bold text-sky-200 bg-black/80 px-1.5 py-0.5 rounded">
                          AI: Forklift Koridoru Güvenli
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-slate-300 bg-black/70 px-2 py-0.5 rounded border border-white/5">
                        DarkFighter Gece Görüşü: AKTİF
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">NVR Depolama:</span>
                        <span className="text-emerald-400 font-bold font-mono">16/16 Kanal Aktif</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">Analitik Tespit:</span>
                        <span className="text-sky-400 font-bold">Sıfır Kör Nokta</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sekme 2: Endüstriyel Ağ & 24G Switch */}
                {activeTab === "network" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Server className="w-4 h-4 text-sky-400" />
                          Cisco 24 Port Gigabit PoE+ Omurga
                        </span>
                        <span className="text-emerald-400 font-mono text-[11px] font-bold">
                          Uptime: 99.99% • 0 Paket Kaybı
                        </span>
                      </div>

                      {/* 24 Port LED Matrisi */}
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                          <span>Port 1-24 (10/100/1000 PoE+)</span>
                          <span className="text-sky-400">10G SFP+ Uplink: AKTİF</span>
                        </div>
                        <div className="grid grid-cols-12 gap-1.5">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-4 rounded flex items-center justify-center text-[8px] font-mono font-bold ${
                                i % 3 === 0
                                  ? "bg-sky-400 text-black animate-pulse"
                                  : i % 5 === 0
                                  ? "bg-emerald-400 text-black"
                                  : "bg-blue-600 text-white"
                              }`}
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <div>
                          <div className="text-[10px] text-slate-400">Fiber Hat Hızı</div>
                          <div className="text-sm font-black text-sky-300 font-mono">9.84 Gbps</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400">Lüleburgaz-Çorlu Ping</div>
                          <div className="text-sm font-black text-emerald-400 font-mono">2.4 ms</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400">PoE Güç Yükü</div>
                          <div className="text-sm font-black text-blue-300 font-mono">142W / 195W</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-slate-300">Yedekli Fiber Hat Güvencesi:</span>
                      <span className="text-sky-400 font-bold font-mono">Ring Topoloji Devrede</span>
                    </div>
                  </div>
                )}

                {/* Sekme 3: C# & Next.js Yazılım API Konsolu */}
                {activeTab === "software" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.08] font-mono text-[11px] space-y-1.5 text-slate-300">
                      <div className="text-sky-400 font-bold flex items-center justify-between border-b border-white/[0.06] pb-1.5">
                        <span>ASP.NET Core 9.0 Web API [Production]</span>
                        <span className="text-emerald-400">STATUS: 200 OK</span>
                      </div>
                      <div className="text-slate-400">
                        <span className="text-emerald-400">INFO</span> [08:34:12] JWT Auth: Token verified for Client "TrakyaOtomotiv"
                      </div>
                      <div className="text-slate-400">
                        <span className="text-sky-300">EXEC</span> [08:34:13] sp_GetLiveWarehouseInventory fetched in 1.4ms
                      </div>
                      <div className="text-slate-400">
                        <span className="text-emerald-400">INFO</span> [08:34:14] Next.js 16 SSR: 64 warehouse nodes hydrated
                      </div>
                      <div className="text-slate-400">
                        <span className="text-amber-400">SYNC</span> [08:34:15] ERP Socket: 14 barcoded items synchronized
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">Backend:</span>
                        <span className="text-sky-300 font-bold">C# .NET / Microservice</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">Frontend:</span>
                        <span className="text-sky-300 font-bold">React 19 / TypeScript</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sekme 4: 3D Özel Tasarım Saha Aparatları */}
                {activeTab === "cad3d" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Cpu className="w-4 h-4 text-sky-400" />
                          Pro 3D Direk & Köşe Kamera Braketi
                        </span>
                        <span className="text-sky-300 font-mono text-[10px] font-bold">
                          CAD: Fusion 360
                        </span>
                      </div>

                      <div className="relative h-28 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/[0.06]">
                        <img
                          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                          alt="3D Baskı Aparat"
                          className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center justify-center">
                          <span className="px-3 py-1 rounded-full bg-sky-950/90 text-sky-300 border border-sky-400/40 text-[11px] font-mono font-bold">
                            Karbon Takviyeli PETG Kompozit (IP67)
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1">
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="text-slate-400 block">Darbe Testi</span>
                          <span className="text-emerald-400 font-bold">15 Kg Yük</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="text-slate-400 block">Isı Aralığı</span>
                          <span className="text-sky-300 font-bold">-35°C / +85°C</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="text-slate-400 block">Prototip</span>
                          <span className="text-blue-300 font-bold">24 Saatte Hazır</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-slate-300">Standart Ayakların Uymadığı Yerlerde:</span>
                      <span className="text-sky-400 font-bold font-mono">Milimetrik Çözüm</span>
                    </div>
                  </div>
                )}

                {/* Alt Mikro Vurgu */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    <span className="font-semibold text-slate-200">Uçtan Uca Bütünleşik Çözüm</span>
                  </div>
                  <span className="text-sky-400 font-mono text-[11px] font-bold">Lüleburgaz / Trakya</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
