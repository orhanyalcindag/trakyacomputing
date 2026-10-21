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
  ChevronRight,
  Layers,
  ArrowUpRight,
  Database,
  Radio,
  Box,
  Wrench
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { useCart } from "@/context/CartContext";

export default function ServicesSection() {
  const { openQuoteModalWithService } = useCart();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="hizmetler" className="py-24 relative bg-[#040814] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-sky-400">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Bütünleşik BT Mühendisliği</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            İşletmenizin İhtiyaç Duyduğu Tüm Teknoloji Tek Çatı Altında
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Yazılımdan donanıma, kamera güvenliğinden sahaya özel 3D aparat üretimine kadar Trakya genelinde uçtan uca anahtar teslim hizmet.
          </p>
        </div>

        {/* MODERN BENTO GRID MİMARİSİ (Apple / Linear Tarzı) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. Büyük Bento Kartı: Yazılım & Kurumsal Otomasyon (8 Kolon) */}
          <div className="lg:col-span-7 pro-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/[0.05] border border-white/10 text-sky-300">
                  Özel Geliştirme
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-sky-400 transition-colors">
                Yazılım & Kurumsal Otomasyon
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                C#, ASP.NET Core, React ve Next.js tabanlı kurumsal otomasyonlar, depo/lojistik ERP sistemleri ve özel web portalları. Mevcut muhasebe ve üretim bantlarınızla doğrudan entegrasyon.
              </p>

              {/* Gerçek Görsel Önizleme */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 border border-white/[0.08] group/img">
                <img
                  src="/images/services/service_software.jpg"
                  alt="Yazılım ve Kurumsal Otomasyon Mühendisliği"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-sky-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>C# .NET 9 & React 19 Enterprise Core</span>
                </div>
              </div>

              {/* Kod & Mimari Önizleme Şeridi */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-6 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-white/[0.06]">
                  <span>TechStack: C# • .NET 9 • PostgreSQL • React 19</span>
                  <span className="text-emerald-400">Microservice Architecture</span>
                </div>
                <div className="text-sky-300">✓ Gerçek zamanlı stok ve kritik eşik SMS/Mail uyarıları</div>
                <div className="text-slate-400">✓ Android El Terminali & Barkod / QR Entegrasyonu</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["C#", "ASP.NET Core", "React", "Next.js", "PostgreSQL", "Docker", "REST API"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 text-xs font-semibold border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => openQuoteModalWithService("Yazılım & Kurumsal Otomasyon")}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors flex items-center gap-1.5 shadow-md shadow-sky-500/20"
              >
                <span>Yazılım Teklifi Al</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedService(servicesData[0])}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Detaylı Kapsam</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Bento Kartı: Ağ ve Güvenlik Sistemleri (5 Kolon) */}
          <div className="lg:col-span-5 pro-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/[0.05] border border-white/10 text-blue-300">
                  Anahtar Teslim Altyapı
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-sky-400 transition-colors">
                Ağ ve Güvenlik Sistemleri
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Hikvision ve Dahua 4K IP kameralar, NVR depolama üniteleri ve Cisco/MikroTik yönetilebilir fiber switch kurulumları.
              </p>

              {/* Gerçek Görsel Önizleme */}
              <div className="relative h-36 rounded-2xl overflow-hidden mb-6 border border-white/[0.08] group/img">
                <img
                  src="/images/services/service_network.jpg"
                  alt="Ağ ve Güvenlik Altyapı Mühendisliği"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-blue-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>Fiber Optik & PoE+ Gigabit Omurga</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>4K AI İnsan ve Araç Sınıflandırma</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Yedekli Fiber Optik Omurga Kablolama</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>5651 Sayılı Kanuna Uyumlu Firewall</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => openQuoteModalWithService("Ağ ve Güvenlik Sistemleri")}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors flex items-center gap-1.5 shadow-md shadow-sky-500/20"
              >
                <span>Keşif & Fiyat İste</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedService(servicesData[1])}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Detayları Gör</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Bento Kartı: 3D Özel Çözümler & Saha Aparatları (5 Kolon) */}
          <div className="lg:col-span-5 pro-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/[0.05] border border-white/10 text-cyan-300">
                  Özel CAD Üretim
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                3D Özel Çözümler & Saha Aparatları
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Standart vidalama ve ayakların yetersiz kaldığı direk, kolon veya dar kabinet alanları için endüstriyel 3D yazıcılarla basılan karbonlu PETG aparatlar.
              </p>

              {/* Gerçek Görsel Önizleme */}
              <div className="relative h-36 rounded-2xl overflow-hidden mb-6 border border-white/[0.08] group/img">
                <img
                  src="/images/services/service_3d.jpg"
                  alt="3D Endüstriyel Montaj Aparatları"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Karbon Takviyeli PETG / Milimetrik CAD</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.06] mb-6 text-xs text-slate-300 space-y-1.5">
                <div className="text-cyan-300 font-semibold">• UV Işınlarına ve Dış Hava Şartlarına Tam Uyumlu</div>
                <div className="text-slate-400">• Standart Kameralar & NVR'lar için Milimetrik Uyum</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => openQuoteModalWithService("3D Özel Çözümler")}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors flex items-center gap-1.5"
              >
                <span>Aparat Tasarımı İste</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedService(servicesData[3])}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Teknik Özellikler</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. Bento Kartı: Donanım & E-Ticaret Tedariği (7 Kolon) */}
          <div className="lg:col-span-7 pro-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 flex items-center justify-center">
                  <Server className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/[0.05] border border-white/10 text-indigo-300">
                  Distribütör Güvencesi
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-indigo-300 transition-colors">
                Donanım & E-Ticaret Tedariği
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Kurumsal iş istasyonları, ECC sunucu bellekleri, yüksek hızlı NVMe depolama üniteleri ve yedekli güç kaynakları. Lüleburgaz içi aynı gün teslimat ve yerinde montaj opsiyonu.
              </p>

              {/* Gerçek Görsel Önizleme */}
              <div className="relative h-40 rounded-2xl overflow-hidden mb-6 border border-white/[0.08] group/img">
                <img
                  src="/images/services/service_hardware.jpg"
                  alt="Kurumsal Donanım ve Sunucu Tedariği"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-indigo-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span>İş İstasyonları, Sunucu & Depolama Sistemleri</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>2 ila 5 Yıl Resmi Distribütör Garantisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Stres Testi & Performans Raporu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Lüleburgaz ve Çevresine Hızlı Kurye</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>İşletim Sistemi & Sürücü Kurulumu Dahil</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <Link
                href="/magaza"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors flex items-center gap-1.5 shadow-md shadow-sky-500/20"
              >
                <span>Donanım Mağazasına Git</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setSelectedService(servicesData[2])}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Parça Kapsamı</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Modal Detay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#090e1a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-white">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              {selectedService.badge}
            </span>
            <h3 className="text-2xl font-bold mb-4">
              {selectedService.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Teknik Kapsam:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedService.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-white"
              >
                Kapat
              </button>
              <button
                onClick={() => {
                  const t = selectedService.title;
                  setSelectedService(null);
                  openQuoteModalWithService(t);
                }}
                className="px-6 py-2 rounded-full text-xs font-bold text-white bg-sky-500 hover:bg-sky-400"
              >
                Bu Hizmet İçin Teklif Al
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
