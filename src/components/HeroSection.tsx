"use client";

import React from "react";
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
  Zap
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeroSection() {
  const { openQuoteModalWithService } = useCart();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden tech-grid bg-[#070d19]">
      {/* 1. Arka Plan Işıma ve Aurora Efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-sky-500/25 via-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

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

          {/* Sağ Kolon: Bütünleşik BT Mimari Görseli & İnteraktif Kart */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Parlayan Çerçeve Efekti */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 opacity-40 blur-xl animate-pulse" />

              {/* Ana Cam Panel */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0d1726]/95 to-[#08101e]/95 border border-sky-500/30 p-6 shadow-2xl backdrop-blur-xl text-white space-y-6">
                
                {/* Panel Üst Başlığı (Terminal Barı) */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                    <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">trakyacomputing-core::v3.4</span>
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                    ONLINE • AKTİF
                  </span>
                </div>

                {/* 4 Ana Yetkinlik Kartının Entegre Görünümü */}
                <div className="space-y-3">
                  {/* 1. Yazılım & Otomasyon */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 hover:border-cyan-400 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-500/20 text-cyan-300">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          Yazılım & Otomasyon
                        </div>
                        <div className="text-xs text-slate-300">C# • ASP.NET Core • React</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-1 rounded-md border border-cyan-500/30">
                      Özel Kod
                    </span>
                  </div>

                  {/* 2. Ağ & Güvenlik Sistemleri */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 hover:border-blue-400 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                          Ağ ve Güvenlik Sistemleri
                        </div>
                        <div className="text-xs text-slate-300">IP Kamera • NVR • Fiber Switch</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-blue-300 bg-blue-950/80 px-2 py-1 rounded-md border border-blue-500/30">
                      4K Yapay Zeka
                    </span>
                  </div>

                  {/* 3. Donanım & E-Ticaret Tedariği */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 hover:border-indigo-400 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                          Donanım & Parça Tedariği
                        </div>
                        <div className="text-xs text-slate-300">Anakart • Sunucu • Depolama</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-300 bg-indigo-950/80 px-2 py-1 rounded-md border border-indigo-500/30">
                      Aynı Gün Teslim
                    </span>
                  </div>

                  {/* 4. 3D Özel Çözümler */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 hover:border-cyan-300 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          3D Özel Saha Çözümleri
                        </div>
                        <div className="text-xs text-slate-300">Özel Tasarım Montaj Aparatları</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-1 rounded-md border border-cyan-500/30">
                      PETG / Karbon
                    </span>
                  </div>
                </div>

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
