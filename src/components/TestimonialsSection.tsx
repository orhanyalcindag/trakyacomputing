"use client";

import React from "react";
import { Star, Quote, Building, CheckCircle2, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "test-1",
      quote: "Lüleburgaz OSB'deki 45.000 m² fabrikamızda kör nokta kalmadan 64 adet 4K IP kamera ve fiber altyapı kurdular. Boru direklerine özel ürettikleri 3D montaj braketleri fırtınalarda bile milim oynamadı. İstanbul firmalarını aramaktan kurtulduk.",
      author: "Hakan Özdemir",
      role: "Fabrika Müdürü",
      company: "Trakya Otomotiv Parça A.Ş. (Lüleburgaz)",
      rating: 5,
      date: "2024",
      service: "IP Kamera & 3D Çözüm"
    },
    {
      id: "test-2",
      quote: "Geliştirdikleri ASP.NET Core ve React tabanlı depo yönetim yazılımı sayesinde kumaş rulosu arama ve sevkiyat süremiz %60 hızlandı. Hem yazılımı hem de el terminallerini tek elden teslim ettiler, harika bir bütünleşik hizmet.",
      author: "Ayşe Erdem",
      role: "Lojistik & Operasyon Direktörü",
      company: "Rumeli Tekstil İhracat Ltd. (Çorlu)",
      rating: 5,
      date: "2024",
      service: "Özel ERP & Yazılım"
    },
    {
      id: "test-3",
      quote: "Sınır kapısına yakın lojistik sahamızda sık sık ağ kesintisi ve kamera arızası yaşıyorduk. Trakyacomputing ekibi Cisco switch omurgasını kurup tüm sistemi devreye aldı. Arıza bildirdiğimizde 30 dakikada sahadalar.",
      author: "Murat Çetin",
      role: "Bilgi İşlem Müdürü",
      company: "Serhat Uluslararası Lojistik (Edirne)",
      rating: 5,
      date: "2023",
      service: "Ağ & Siber Güvenlik"
    }
  ];

  return (
    <section className="py-24 relative bg-[#070d19] border-t border-sky-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Gerçek Müşteri Deneyimleri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Trakya Sanayisinin Güvenini Kazandık
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Bölgedeki fabrikalar, sanayi tesisleri ve kurumsal işletmeler neden Trakyacomputing'i tercih ediyor?
          </p>
        </div>

        {/* Değerlendirme Kartları Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#0c1626] border border-slate-800 hover:border-sky-500/50 shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Yıldız ve Alıntı İkonu */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-950/80 text-cyan-300 border border-sky-800/60">
                    {t.service}
                  </span>
                </div>

                {/* Yorum Metni */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Yazar Bilgileri */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {t.author}
                  </h4>
                  <div className="text-xs text-cyan-400 font-medium">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3 text-slate-500" />
                    <span>{t.company}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0" title="Onaylı Kurumsal Müşteri">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
