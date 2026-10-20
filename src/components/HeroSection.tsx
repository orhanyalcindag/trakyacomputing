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
  Zap, 
  Terminal
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeroSection() {
  const { openQuoteModalWithService } = useCart();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden tech-grid">
      {/* 1. Arka Plan Işıma ve Aurora Efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Siber Çizgiler & Dekoratif Parçacıklar */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#070d19]/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kolon: Başlık, Alt Başlık ve CTA'lar */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Bölgesel & Konsept Rozeti */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-inner shadow-sky-500/20">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lüleburgaz & Tüm Trakya'da Yerinde Kurulum & Destek</span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Trakya'nın Bütünleşik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-sm">
                Teknoloji ve Yazılım
              </span>{" "}
              Çözüm Ortağı
            </h1>

            {/* Alt Başlık */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Özel Yazılım Geliştirme, Güvenlik Altyapıları ve Bilgisayar Donanımlarında Uçtan Uca Profesyonel Hizmet.
            </p>

            {/* Özellik Maddeleri */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 border border-sky-400/30 group"
              >
                <span>Hizmetlerimizi Keşfedin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/magaza"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 hover:border-sky-500/40 backdrop-blur-md transition-all duration-200 shadow-md group"
              >
                <ShoppingBag className="w-5 h-5 text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Mağazaya Git</span>
              </Link>

              <button
                onClick={() => openQuoteModalWithService()}
                className="w-full sm:w-auto text-xs font-semibold text-sky-400 hover:text-cyan-300 underline underline-offset-4 decoration-sky-500/50 hover:decoration-cyan-400 py-2 sm:py-0"
              >
                Ücretsiz Keşif & Teklif İsteyin →
              </button>
            </div>

            {/* İstatistik Sayaçları */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  450+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                  30 Dk
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bölgesel Müdahale</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  %99.8
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Memnuniyet Oranı</div>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: Bütünleşik BT Mimari Görseli & İnteraktif Kart */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Parlayan Çerçeve Efekti */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 opacity-30 blur-xl animate-pulse" />

              {/* Ana Cam Panel */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0d1726]/95 to-[#08101e]/95 border border-sky-500/30 p-6 shadow-2xl backdrop-blur-xl text-white space-y-6">
                
                {/* Panel Üst Başlığı (Terminal Barı) */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">trakyacomputing-core::v3.4</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    ONLINE • AKTİF
                  </span>
                </div>

                {/* 4 Ana Yetkinlik Kartının Entegre Görünümü */}
                <div className="space-y-3">
                  {/* 1. Yazılım & Otomasyon */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/20 hover:border-sky-400/50 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-cyan-400">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                          Yazılım & Otomasyon
                        </div>
                        <div className="text-xs text-slate-400">C# • ASP.NET Core • React</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded-md">
                      Özel Kod
                    </span>
                  </div>

                  {/* 2. Ağ & Güvenlik Sistemleri */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/20 hover:border-sky-400/50 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                          Ağ ve Güvenlik Sistemleri
                        </div>
                        <div className="text-xs text-slate-400">IP Kamera • NVR • Fiber Switch</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-400 bg-blue-950/50 px-2 py-1 rounded-md">
                      4K Yapay Zeka
                    </span>
                  </div>

                  {/* 3. Donanım & E-Ticaret Tedariği */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/20 hover:border-sky-400/50 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                          Donanım & Parça Tedariği
                        </div>
                        <div className="text-xs text-slate-400">Anakart • Sunucu • Depolama</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-950/50 px-2 py-1 rounded-md">
                      Aynı Gün Teslim
                    </span>
                  </div>

                  {/* 4. 3D Özel Çözümler */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/20 hover:border-sky-400/50 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          3D Özel Saha Çözümleri
                        </div>
                        <div className="text-xs text-slate-400">Özel Tasarım Montaj Aparatları</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded-md">
                      PETG / Karbon
                    </span>
                  </div>
                </div>

                {/* Alt Vurgu Bandı */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 border border-sky-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="font-semibold text-slate-200">Bütünleşik BT Konsepti</span>
                  </div>
                  <span className="text-cyan-400 font-mono">Trakya / Lüleburgaz</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
