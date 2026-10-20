"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Code2, 
  ShieldCheck, 
  Server, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Layers
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { useCart } from "@/context/CartContext";

export default function ServicesSection() {
  const { openQuoteModalWithService } = useCart();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // İkon eşleştirici
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code2 className="w-7 h-7 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-blue-400" />;
      case "Server":
        return <Server className="w-7 h-7 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-7 h-7 text-sky-400" />;
      default:
        return <Layers className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="hizmetler" className="py-24 relative bg-slate-50 dark:bg-[#070d19]/60 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Bütünleşik BT Çözümleri</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            İşletmenizin İhtiyaç Duyduğu Tüm Teknoloji Tek Çatı Altında
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Yazılımdan donanıma, kamera güvenliğinden sahaya özel 3D aparat üretimine kadar Trakya genelinde uçtan uca anahtar teslim hizmet.
          </p>
        </div>

        {/* Hizmetler Grid Yapısı (4 Temel Sütun) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/50 p-6 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Üst Kısım: İkon ve Rozet */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400 transition-all duration-300 shadow-inner">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-cyan-400 border border-sky-200 dark:border-sky-800/50">
                    {service.badge}
                  </span>
                </div>

                {/* Başlık ve Açıklama */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-sky-500 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Teknoloji Etiketleri */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-sky-500/10 text-sky-400">
                      +{service.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Öne Çıkan Özellikler */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alt Kısım: Butonlar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col gap-2">
                <button
                  onClick={() => openQuoteModalWithService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Teklif & Keşif İste</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-cyan-400 transition-colors flex items-center justify-center gap-1"
                >
                  <span>Detaylı Kapsamı Gör</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi Bandı */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-sky-900/30 via-blue-900/20 to-indigo-900/30 border border-sky-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Trakya Bölgesindeki Fabrikanız veya Ofisiniz İçin Ücretsiz Keşif
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Lüleburgaz, Çorlu, Kırklareli, Çerkezköy ve Edirne sahalarında yerinde teknik inceleme yapıyoruz.
            </p>
          </div>
          <button
            onClick={() => openQuoteModalWithService("Ücretsiz Saha Keşfi")}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 transition-all"
          >
            Hemen Keşif Planla
          </button>
        </div>

      </div>

      {/* Hizmet Detay Modal Penceresi */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0d1726] border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                {renderIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Kapsam & Özellikler
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Teslim Edilenler & Güvenceler
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/20 text-xs text-sky-200 mb-6">
              <strong>Bölgesel Avantaj:</strong> {selectedService.regionalAdvantage}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Kapat
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  openQuoteModalWithService(title);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25"
              >
                Bu Hizmet İçin Teklif İste
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
