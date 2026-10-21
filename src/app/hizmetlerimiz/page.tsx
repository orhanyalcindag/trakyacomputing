"use client";

import React, { useState } from "react";
import { 
  Code2, 
  ShieldCheck, 
  Server, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Wrench, 
  Layers, 
  Clock, 
  CheckCircle
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { useCart } from "@/context/CartContext";

export default function HizmetlerimizPage() {
  const { openQuoteModalWithService } = useCart();
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const steps = [
    { num: "01", title: "Ücretsiz Yerinde Keşif", desc: "Lüleburgaz veya Trakya'daki fabrikanıza, ofisinize gelerek mevcut altyapıyı ve ihtiyaçları yerinde inceliyoruz." },
    { num: "02", title: "Mühendislik & Projelendirme", desc: "CAD çizimleri, ağ topolojisi ve yazılım mimarisini bütçenize en uygun alternatiflerle raporluyoruz." },
    { num: "03", title: "Uygulama & Anahtar Teslim", desc: "Kablolama, kamera montajı, sunucu kurulumu, 3D aparat basımı veya kod geliştirmeyi titizlikle tamamlıyoruz." },
    { num: "04", title: "7/24 Kesintisiz Destek", desc: "Devreye alma sonrası düzenli bakım, uzaktan izleme ve 30 dakikada yerinde servis güvencesi sağlıyoruz." }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* 1. Üst Başlık Banner */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Kapsamlı Hizmet Portföyü</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Bütünleşik Bilişim ve Mühendislik Hizmetlerimiz
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Trakya sanayisinin ve işletmelerinin tüm teknolojik ihtiyaçlarına özel, tek noktadan uçtan uca anahtar teslim çözümler.
          </p>
        </div>
      </section>

      {/* 2. Dört Ana Hizmetin Detaylı Bölümleri */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 hover:border-sky-500/30 transition-all shadow-sm hover:shadow-xl`}
            >
              {/* Metin Kolonu */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-cyan-400 border border-sky-500/30">
                    {service.badge}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Hizmet Kodu: TK-0{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Teknoloji Rozetleri */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                    Kullanılan Teknolojiler & Standartlar:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-sky-600 dark:text-cyan-300 border border-slate-200 dark:border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Maddeler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Butonları */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => openQuoteModalWithService(service.title)}
                    className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/25 flex items-center gap-2"
                  >
                    <span>Bu Hizmet İçin Teklif İste</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bilgi / Teslimat Kutusu */}
              <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : ""}`}>
                {/* Gerçek Hizmet Fotoğrafı */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 border border-slate-200 dark:border-slate-800 shadow-md group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">{service.badge} • Trakya Saha Kurulumu</span>
                  </div>
                </div>

                <div className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-inner">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Teslimat & Hizmet Garantileri</span>
                  </h3>

                  <ul className="space-y-3">
                    {service.deliverables.map((deliv, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/40 text-xs">
                    <strong className="text-sky-700 dark:text-cyan-300 block mb-1">Bölgesel Avantaj:</strong>
                    <span className="text-slate-600 dark:text-slate-300">{service.regionalAdvantage}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Dört Aşamalı Süreç Akışı */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
              Nasıl Çalışıyoruz?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              4 Adımda Anahtar Teslim Teknoloji
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 relative"
              >
                <div className="text-3xl font-black text-slate-200 dark:text-slate-800 mb-3 font-mono">
                  {st.num}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
