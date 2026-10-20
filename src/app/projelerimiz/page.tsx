"use client";

import React, { useState } from "react";
import { 
  FolderKanban, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { useCart } from "@/context/CartContext";

export default function ProjelerimizPage() {
  const { openQuoteModalWithService } = useCart();
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Tüm Projeler" },
    { id: "butunlesik", label: "Bütünleşik Çözümler" },
    { id: "yazilim", label: "Özel Yazılım & ERP" },
    { id: "ag-guvenlik", label: "Ağ & Güvenlik Altyapısı" },
    { id: "3d-cozumler", label: "IoT & 3D Saha Çözümleri" },
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="pt-28 pb-20">
      {/* 1. Üst Banner */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Saha Referansları & Vaka Analizleri</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Trakya Sanayisinde Başarıyla Teslim Edilen Projeler
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Lüleburgaz, Çorlu, Tekirdağ ve Edirne sahalarında devreye aldığımız yüksek güvenlikli ağlar, özel yazılımlar ve 3D aparat çözümleri.
          </p>
        </div>
      </section>

      {/* 2. Filtreler */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === c.id
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projeler Listesi (Geniş Vaka Formatında) */}
        <div className="space-y-12">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Sol: Görsel */}
              <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </span>
                  <div className="text-sm font-bold text-white">{proj.client}</div>
                </div>
              </div>

              {/* Sağ: Proje Vaka Detayları */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-cyan-400 border border-sky-500/30">
                    {proj.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Teslim: {proj.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {proj.fullStory}
                </p>

                {/* Kapsam & Sonuçlar İki Kolon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-sky-400" />
                      <span>Uygulanan Kapsam</span>
                    </h5>
                    {proj.scope.map((s, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-sky-500 font-bold">•</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Ölçülebilir Sonuç</span>
                    </h5>
                    {proj.results.map((r, i) => (
                      <div key={i} className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModalWithService(`${proj.title} Benzeri Proje`)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 flex items-center gap-2 shadow-md"
                  >
                    <span>Benzer Bir Proje İçin Teklif Al</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
