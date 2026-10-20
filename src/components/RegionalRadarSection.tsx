"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Radio, 
  Truck, 
  Activity, 
  CheckCircle2, 
  PhoneCall,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useCart } from "@/context/CartContext";

interface RegionHub {
  id: string;
  name: string;
  role: string;
  responseTime: string;
  activeTechs: number;
  coverage: string;
  status: "Aktif" | "Nöbetçi Ekip";
  highlights: string[];
}

export default function RegionalRadarSection() {
  const { openQuoteModalWithService } = useCart();

  const hubs: RegionHub[] = [
    {
      id: "luleburgaz",
      name: "Lüleburgaz (Genel Merkez)",
      role: "Ana Lojistik Depo & Mühendislik Merkezi",
      responseTime: "15 Dakika",
      activeTechs: 6,
      coverage: "Lüleburgaz OSB, Büyükkarıştıran, Babaeski, Pınarhisar",
      status: "Aktif",
      highlights: ["3D Baskı ve CAD Laboratuvarı", "Tam Teşekküllü Donanım Deposu", "Fiber Sonlandırma Filosu"]
    },
    {
      id: "corlu",
      name: "Çorlu & Ergene",
      role: "Sanayi & Tekstil Bölge Hattı",
      responseTime: "25 Dakika",
      activeTechs: 4,
      coverage: "Çorlu 1. OSB, Deri OSB, Ulaş, Velimeşe",
      status: "Aktif",
      highlights: ["Depo ERP Entegrasyonları", "Yüksek Hızlı Fiber Omurga", "Yedek Switch/NVR Stoğu"]
    },
    {
      id: "cerkezkoy",
      name: "Çerkezköy & Kapaklı",
      role: "Ağır Sanayi ve Üretim Üssü",
      responseTime: "30 Dakika",
      activeTechs: 4,
      coverage: "Çerkezköy OSB, Kapaklı Sanayi, Karaağaç",
      status: "Aktif",
      highlights: ["4K IP Kamera Projeleri", "Yapay Zeka Saha Analitiği", "Endüstriyel Ağ Güvenliği"]
    },
    {
      id: "tekirdag",
      name: "Tekirdağ Süleymanpaşa",
      role: "Liman & Ticari Alanlar",
      responseTime: "35 Dakika",
      activeTechs: 3,
      coverage: "Asyaport Çevresi, Muratlı, Marmaraereğlisi",
      status: "Aktif",
      highlights: ["Liman CCTV Sistemleri", "Açık Alan Mesh WiFi", "Donanımsal Firewall"]
    },
    {
      id: "edirne",
      name: "Edirne & Havsa",
      role: "Lojistik & Gümrük Ağı",
      responseTime: "40 Dakika",
      activeTechs: 3,
      coverage: "Kapıkule Hat Boyu, Edirne Merkez OSB, Havsa",
      status: "Nöbetçi Ekip",
      highlights: ["TIR Parkı Geniş Alan İzleme", "5651 Sayılı Loglama", "Kesintisiz UPS Çözümleri"]
    },
    {
      id: "kirklareli",
      name: "Kırklareli Merkez",
      role: "Tarımsal Endüstri & Soğuk Hava Depoları",
      responseTime: "25 Dakika",
      activeTechs: 3,
      coverage: "Kırklareli OSB, Kavaklı, Üsküp",
      status: "Aktif",
      highlights: ["IoT Sıcaklık & Nem Takibi", "3D Su Geçirmez Sensör Kutuları", "Özel Web Portalları"]
    }
  ];

  const [selectedHub, setSelectedHub] = useState<RegionHub>(hubs[0]);

  return (
    <section className="py-24 relative bg-[#060b14] border-t border-sky-500/20 tech-grid overflow-hidden">
      {/* Arka Plan Parlamaları */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Canlı Bölgesel Müdahale Radarı</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Trakya'nın Neresinde Olursanız Olun, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Dakikalar İçinde Yanınızdayız
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            İstanbul merkezli firmaların günler süren randevuları yerine, Lüleburgaz üssümüzden hareket eden mobil teknik filomuzla aynı gün yerinde çözüm sunuyoruz.
          </p>
        </div>

        {/* Radar & Bölge Seçici Paneli */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sol Kolon: Tıklanabilir Bölge Listesi */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              Bölgesel Müdahale İstasyonlarımız:
            </span>

            {hubs.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-950/80 to-[#0d1726] border-cyan-400 shadow-lg shadow-sky-500/20"
                      : "bg-[#0d1726]/80 border-slate-800 hover:border-slate-700 hover:bg-[#0d1726]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      isSelected ? "bg-cyan-400 animate-ping" : "bg-emerald-400"
                    }`} />
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {hub.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {hub.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-black text-cyan-300 block font-mono">
                      ~{hub.responseTime}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">
                      {hub.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sağ Kolon: Seçili Bölgenin İnteraktif Radar & Detay Kartı */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1626] to-[#070e1b] border border-sky-500/40 p-8 shadow-2xl text-white space-y-6">
              
              {/* Radar Üst Şerit */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Seçili Operasyon Bölgesi
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      {selectedHub.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-right">
                    <span className="text-[10px] text-slate-400 block font-medium">Yerinde Müdahale</span>
                    <span className="text-sm font-black text-emerald-400 font-mono">
                      {selectedHub.responseTime}
                    </span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-right">
                    <span className="text-[10px] text-slate-400 block font-medium">Saha Mühendisi</span>
                    <span className="text-sm font-black text-cyan-300 font-mono">
                      {selectedHub.activeTechs} Personel
                    </span>
                  </div>
                </div>
              </div>

              {/* Kapsama Alanları */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Aktif Hizmet Verilen Sanayi Alanları & İlçeler:
                </span>
                <p className="text-sm text-slate-200 font-medium p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  {selectedHub.coverage}
                </p>
              </div>

              {/* Öne Çıkan Saha Yetkinlikleri */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Bu Bölgeye Özel Çözümler:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {selectedHub.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-sky-500/20 text-xs font-semibold text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alt Butonlar */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>7/24 Sözleşmeli Arıza & Acil Destek Hattı</span>
                </div>

                <button
                  onClick={() => openQuoteModalWithService(`${selectedHub.name} Saha Keşfi`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Bu Bölge İçin Keşif Planla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
