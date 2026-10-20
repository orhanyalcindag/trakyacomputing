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
  Terminal,
  Box,
  Layers,
  ChevronRight
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeroSection() {
  const { openQuoteModalWithService } = useCart();
  const [activeTab, setActiveTab] = useState<"cctv" | "network" | "software" | "cad3d">("cctv");
  const [currentTime, setCurrentTime] = useState("");

  // Otomatik sekme geçişi simülatörü
  useEffect(() => {
    const tabs: ("cctv" | "network" | "software" | "cad3d")[] = ["cctv", "network", "software", "cad3d"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % tabs.length;
      setActiveTab(tabs[index]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Canlı saat sayacı
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
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden tech-grid bg-[#070d19]">
      {/* 1. Arka Plan Işıma ve Aurora Efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/25 via-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-48 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Siber Çizgiler & Dekoratif Parçacıklar */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#070d19]/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kolon: Başlık, Alt Başlık ve CTA'lar */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Bölgesel & Konsept Rozeti */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950/90 border border-sky-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-inner shadow-sky-500/30">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Lüleburgaz & Tüm Trakya'da Yerinde Kurulum & Destek</span>
            </div>

            {/* Ana Başlık - Yüksek Kontrastlı Parlak Beyaz ve Neon Mavi */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-white drop-shadow-md">
              Trakya'nın Bütünleşik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 drop-shadow-[0_0_30px_rgba(0,240,255,0.35)]">
                Teknoloji ve Yazılım
              </span>{" "}
              Çözüm Ortağı
            </h1>

            {/* Alt Başlık - Kristal Netliğinde Açık Gri/Beyaz */}
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0 drop-shadow-sm">
              Özel Yazılım Geliştirme, Güvenlik Altyapıları ve Bilgisayar Donanımlarında Uçtan Uca Profesyonel Hizmet.
            </p>

            {/* Özellik Maddeleri */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-100 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Tek Elden Çözüm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Yerinde Hızlı Müdahale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Orijinal Parça Garantisi</span>
              </div>
            </div>

            {/* Butonlar Grubu: "Hizmetlerimizi Keşfedin" ve "Mağazaya Git" */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/hizmetlerimiz"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200 border border-sky-400/40 group"
              >
                <span>Hizmetlerimizi Keşfedin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/magaza"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600 hover:border-cyan-400 backdrop-blur-md transition-all duration-200 shadow-md group"
              >
                <ShoppingBag className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Mağazaya Git</span>
              </Link>

              <button
                onClick={() => openQuoteModalWithService()}
                className="w-full sm:w-auto text-xs font-bold text-cyan-300 hover:text-white underline underline-offset-4 decoration-sky-400/60 hover:decoration-cyan-300 py-2 sm:py-0"
              >
                Ücretsiz Keşif & Teklif İsteyin →
              </button>
            </div>

            {/* İstatistik Sayaçları */}
            <div className="pt-8 border-t border-slate-700/80 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 drop-shadow-sm">
                  450+
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 drop-shadow-sm">
                  30 Dk
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Bölgesel Müdahale</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400 drop-shadow-sm">
                  %99.8
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Memnuniyet Oranı</div>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: İNTERAKTİF SİBER OPERASYON & KONTROL MERKEZİ (GÖRSEL ŞÖLEN) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Parlayan Çerçeve Efekti */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 opacity-40 blur-2xl animate-pulse" />

              {/* Ana Cam Panel */}
              <div className="relative rounded-2xl bg-[#0c1626]/95 border border-sky-500/35 p-5 shadow-2xl backdrop-blur-xl text-white space-y-4">
                
                {/* Panel Üst Başlığı (Terminal Barı + Canlı Durum) */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                    <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">Trakya-SOC::Console</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      CANLI SİSTEM
                    </span>
                    <span className="text-[11px] font-mono text-cyan-300 hidden sm:inline">
                      {currentTime || "12:00:00"}
                    </span>
                  </div>
                </div>

                {/* İnteraktif Sekme Seçiciler */}
                <div className="grid grid-cols-4 gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-bold">
                  <button
                    onClick={() => setActiveTab("cctv")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "cctv"
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">4K IP Kamera</span>
                    <span className="sm:hidden">Kamera</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("network")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "network"
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
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
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Yazılım</span>
                    <span className="sm:hidden">Yazılım</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("cad3d")}
                    className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      activeTab === "cad3d"
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">3D Aparat</span>
                    <span className="sm:hidden">3D</span>
                  </button>
                </div>

                {/* Sekme 1: 4K Canlı IP Kamera & Yapay Zeka Video Analitik Simülasyonu */}
                {activeTab === "cctv" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="relative rounded-xl overflow-hidden h-48 bg-slate-950 border border-sky-500/40">
                      {/* Fabrika İçi Güvenlik Kamerası Görseli */}
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                        alt="Fabrika IP Kamera Akışı"
                        className="w-full h-full object-cover opacity-80"
                      />
                      
                      {/* Üst Canlı Kamera Bilgi Katmanı */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-white bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                        <span className="text-red-400 font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          CAM-04 [Lüleburgaz OSB Depo 2]
                        </span>
                        <span className="text-cyan-300">4K • 60 FPS • H.265+</span>
                      </div>

                      {/* Yapay Zeka Tespit Çerçevesi 1 */}
                      <div className="absolute top-12 left-16 border-2 border-emerald-400 rounded p-1 bg-emerald-500/15 backdrop-blur-xs animate-pulse">
                        <span className="text-[10px] font-bold text-emerald-300 bg-black/70 px-1 py-0.5 rounded">
                          AI: Yetkili Personel (%99.4)
                        </span>
                      </div>

                      {/* Yapay Zeka Tespit Çerçevesi 2 */}
                      <div className="absolute bottom-6 right-10 border-2 border-cyan-400 rounded p-1 bg-cyan-500/15">
                        <span className="text-[10px] font-bold text-cyan-300 bg-black/70 px-1 py-0.5 rounded">
                          AI: Forklift Güvenli Mesafe OK
                        </span>
                      </div>

                      {/* Alt Grid Göstergesi */}
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded">
                        DarkFighter IR Gece Görüşü: AKTİF
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">NVR Kayıt Durumu:</span>
                        <span className="text-emerald-400 font-bold">16/16 Kanal Aktif</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">Yapay Zeka Analitik:</span>
                        <span className="text-cyan-400 font-bold">Sıfır Kör Nokta</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sekme 2: Endüstriyel Ağ & Switch / Router Port Durumu */}
                {activeTab === "network" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-slate-950 border border-sky-500/40 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Server className="w-4 h-4 text-cyan-400" />
                          Cisco 24G PoE+ Omurga Switch
                        </span>
                        <span className="text-emerald-400 font-mono text-[11px] font-bold">
                          Uptime: 99.99% • 0 Paket Kaybı
                        </span>
                      </div>

                      {/* Switch Portları LED Gösterimi (24 Port Görselleştirmesi) */}
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                          <span>Port 1-12 (Gigabit PoE)</span>
                          <span className="text-cyan-400">10G SFP+ Uplink: AKTİF</span>
                        </div>
                        <div className="grid grid-cols-12 gap-1.5">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-4 rounded flex items-center justify-center text-[8px] font-mono font-bold ${
                                i % 3 === 0
                                  ? "bg-cyan-500 text-black animate-pulse"
                                  : i % 5 === 0
                                  ? "bg-emerald-500 text-black"
                                  : "bg-blue-600 text-white"
                              }`}
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hat Hızı & Trafik Grafiği */}
                      <div className="flex items-center justify-between text-xs pt-1">
                        <div>
                          <div className="text-[10px] text-slate-400">Fiber Trafik Hızı</div>
                          <div className="text-sm font-black text-cyan-300 font-mono">9.84 Gbps / 10G</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400">Lüleburgaz-Çorlu Ping</div>
                          <div className="text-sm font-black text-emerald-400 font-mono">2.4 ms</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400">PoE Güç Yükü</div>
                          <div className="text-sm font-black text-blue-400 font-mono">142W / 195W</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Yedekli Fiber Hat Güvencesi:</span>
                      <span className="text-cyan-400 font-bold">Ring Topoloji Devrede</span>
                    </div>
                  </div>
                )}

                {/* Sekme 3: C# ASP.NET Core & Next.js Kurumsal Yazılım Konsolu */}
                {activeTab === "software" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-sky-500/40 font-mono text-[11px] space-y-1.5 text-slate-300">
                      <div className="text-sky-400 font-bold flex items-center justify-between border-b border-slate-800 pb-1.5">
                        <span>ASP.NET Core 9.0 Web API [Production]</span>
                        <span className="text-emerald-400">STATUS: 200 OK</span>
                      </div>
                      <div className="text-slate-400">
                        <span className="text-emerald-400">INFO</span> [08:34:12] JWT Auth: Token verified for Client "TrakyaOtomotiv"
                      </div>
                      <div className="text-slate-400">
                        <span className="text-cyan-300">EXEC</span> [08:34:13] sp_GetLiveWarehouseInventory fetched in 1.4ms
                      </div>
                      <div className="text-slate-400">
                        <span className="text-emerald-400">INFO</span> [08:34:14] Next.js 16 SSR: 64 warehouse nodes hydrated
                      </div>
                      <div className="text-slate-400">
                        <span className="text-amber-400">SYNC</span> [08:34:15] ERP Socket: 14 barcoded items synchronized
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">Backend:</span>
                        <span className="text-sky-300 font-bold">C# .NET / Microservices</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">Frontend:</span>
                        <span className="text-cyan-300 font-bold">React 19 / TypeScript</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sekme 4: 3D Özel Tasarım Saha Aparatları & CAD Üretimi */}
                {activeTab === "cad3d" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-slate-950 border border-sky-500/40 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          Pro 3D Direk & Köşe Kamera Braketi
                        </span>
                        <span className="text-cyan-300 font-mono text-[10px] font-bold">
                          CAD: Fusion 360
                        </span>
                      </div>

                      {/* CAD Tel Kafes Şematiği Görseli */}
                      <div className="relative h-28 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-800">
                        <img
                          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                          alt="3D Baskı Aparat"
                          className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-center justify-center">
                          <div className="text-center">
                            <span className="px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-400/50 text-[11px] font-mono font-bold">
                              Karbon Takviyeli PETG Filament (IP67)
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1">
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block">Darbe Dayanımı</span>
                          <span className="text-emerald-400 font-bold">15 Kg Yük</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block">Isı Aralığı</span>
                          <span className="text-cyan-300 font-bold">-35°C / +85°C</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block">Hızlı Prototip</span>
                          <span className="text-blue-300 font-bold">24 Saat Teslim</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Standart Ayakların Uymadığı Yerlerde:</span>
                      <span className="text-cyan-400 font-bold">Birebir Milimetrik Çözüm</span>
                    </div>
                  </div>
                )}

                {/* Alt Vurgu Bandı */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500/15 via-blue-500/15 to-indigo-500/15 border border-sky-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="font-bold text-white">Bütünleşik BT Konsepti</span>
                  </div>
                  <span className="text-cyan-300 font-mono font-bold">Trakya / Lüleburgaz</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
