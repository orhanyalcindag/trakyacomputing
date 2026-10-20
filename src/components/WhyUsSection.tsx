"use client";

import React from "react";
import { 
  MapPin, 
  Clock, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  CheckCircle, 
  PhoneCall, 
  Sparkles,
  Award,
  Truck
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function WhyUsSection() {
  const { openQuoteModalWithService } = useCart();

  const advantages = [
    {
      icon: <Wrench className="w-5 h-5 text-sky-400" />,
      title: "Tıkla, Donanımı Al, Kurulumu Biz Yapalım",
      description: "Sadece cihaz satıp bırakmıyoruz. Satın aldığınız güvenlik kamerası, sunucu veya ağ switch'ini Lüleburgaz ve Trakya genelinde uzman mühendislerimizle anahtar teslim kuruyoruz.",
      badge: "Anahtar Teslim"
    },
    {
      icon: <Clock className="w-5 h-5 text-sky-400" />,
      title: "30 Dakikada Yerinde Acil Müdahale",
      description: "Lüleburgaz merkezli teknik operasyon filomuzla fabrikalarda veya işletmelerde yaşanan kamera, ağ ve sunucu arızalarına yarım saat içinde yerinde müdahale ediyoruz.",
      badge: "SLA Garantili"
    },
    {
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      title: "360° Bütünleşik Teknoloji Çözümü",
      description: "Yazılım için ayrı yazılımcı, kamera için ayrı elektrikçi, parça için ayrı toptancı aramanıza gerek yok. Tüm BT katmanlarını senkronize tek elden yönetiyoruz.",
      badge: "Uçtan Uca"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      title: "Saha İhtiyacına Özel 3D Tasarım & Üretim",
      description: "Montajda standart braketlerin uymadığı zorlu direk veya kolonlara özel endüstriyel 3D yazıcılarımızla UV ve darbe dayanımlı aparatlar üretiyoruz.",
      badge: "Özel Tasarım"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Orijinal Ürün & Distribütör Güvencesi",
      description: "Kullandığımız tüm IP kameralar, NVR sistemleri, anakart ve bellekler doğrudan resmi Türkiye distribütörlerinden faturalı ve 2-5 yıl garantilidir.",
      badge: "%100 Orijinal"
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      title: "Trakya Bölgesinin Yerel Güvenilir Gücü",
      description: "Lüleburgaz, Çorlu, Kırklareli, Çerkezköy, Tekirdağ ve Edirne sanayi bölgelerini avucunun içi gibi bilen, sahayı tanıyan yerel çözüm ortağınız.",
      badge: "Bölgesel Lider"
    }
  ];

  const coveredRegions = [
    { name: "Lüleburgaz", status: "Genel Merkez & Depo" },
    { name: "Kırklareli Merkez", status: "Mobil Saha Ekibi" },
    { name: "Çorlu", status: "Hızlı Müdahale Hattı" },
    { name: "Çerkezköy", status: "Sanayi & OSB Desteği" },
    { name: "Tekirdağ", status: "Liman & Ticari Alanlar" },
    { name: "Edirne", status: "Lojistik & Gümrük Ağı" },
  ];

  return (
    <section className="py-24 relative bg-[#040814] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Neden Trakyacomputing?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trakya Bölgesine Özel Yerinde, Anında ve Anahtar Teslim Güç
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            İstanbul merkezli firmaların günler sonra gelen servisleri yerine, 30 dakika mesafedeki kendi mühendislerimizle yanınızdayız.
          </p>
        </div>

        {/* 6 Avantaj Kartı (Pro Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl pro-card group transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-sky-400 transition-all">
                  {adv.icon}
                </div>
                <span className="text-[11px] font-bold text-sky-300 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.08]">
                  {adv.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                {adv.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trakya Bölgesel Kapsama Ağı Şeridi */}
        <div className="mt-14 p-8 rounded-3xl pro-card text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Bölgesel Servis Ağı</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Trakya'nın Her Noktasına Aynı Gün Teknik Servis
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Lüleburgaz merkez ofisimizden çıkan donanımlı araçlarımız, Kırklareli'den Edirne'ye, Tekirdağ'dan Çerkezköy'e kadar tüm sanayi kuruluşlarına doğrudan destek verir.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full lg:w-auto">
              {coveredRegions.map((region, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <div className="text-xs font-bold text-white">{region.name}</div>
                  <div className="text-[10px] text-sky-400 font-semibold mt-0.5">{region.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
