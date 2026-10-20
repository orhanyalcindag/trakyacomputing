"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FolderKanban, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projectsData";

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projeler" className="py-24 relative bg-white dark:bg-[#070d19] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-cyan-400 text-xs font-bold tracking-wider uppercase border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Saha Referansları</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
              Trakya Genelinde Tamamlanan Başarı Hikayeleri
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Sanayi tesislerinden lojistik üslerine kadar sahada kanıtlanmış bütünleşik teknoloji ve altyapı çözümlerimiz.
            </p>
          </div>

          <Link
            href="/projelerimiz"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-white transition-colors"
          >
            <span>Tüm Projeleri ve Vaka Analizlerini Gör</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projeler Kart Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.slice(0, 4).map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl bg-slate-50 dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Görsel Alanı */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726] via-transparent to-transparent opacity-80" />
                
                {/* Rozetler */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-white shadow-md">
                    {proj.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{proj.year}</span>
                  </div>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                    {proj.client}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {proj.summary}
                  </p>

                  {/* Sonuç Vurguları */}
                  <div className="space-y-2 mb-6">
                    {proj.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-sky-500 transition-all flex items-center justify-center gap-2 border border-slate-700"
                >
                  <span>Vaka Analizi & Teknik Kapsamı İncele</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Proje Detay Modal Penceresi */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0d1726] border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              ✕
            </button>

            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div>
                  <span className="text-xs font-bold text-cyan-400">{selectedProject.location}</span>
                  <h3 className="text-lg font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Proje Hikayesi ve Problem Tanımı
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.fullStory}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Uygulanan Teknik Kapsam
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Elde Edilen Somut Başarılar
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.results.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400"
              >
                Pencereyi Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
