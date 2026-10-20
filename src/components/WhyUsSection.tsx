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
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      title: "Tıkla, Donanımı Al, Kurulumu Biz Yapalım",
      description: "Sadece cihaz satıp bırakmıyoruz. Satın aldığınız güvenlik kamerası, sunucu veya ağ switch'ini Lüleburgaz ve Trakya genelinde uzman mühendislerimizle anahtar teslim kuruyoruz.",
      badge: "Anahtar Teslim"
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-400" />,
      title: "30 Dakikada Yerinde Acil Müdahale",
      description: "Lüleburgaz merkezli teknik operasyon filomuzla fabrikalarda veya işletmelerde yaşanan kamera, ağ ve sunucu arızalarına yarım saat içinde yerinde müdahale ediyoruz.",
      badge: "SLA Garantili"
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "360° Bütünleşik Teknoloji Çözümü",
      description: "Yazılım için ayrı yazılımcı, kamera için ayrı elektrikçi, parça için ayrı toptancı aramanıza gerek yok. Tüm BT katmanlarını senkronize tek elden yönetiyoruz.",
      badge: "Uçtan Uca"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: "Saha İhtiyacına Özel 3D Tasarım & Üretim",
      description: "Montajda standart braketlerin uymadığı zorlu direk veya kolonlara özel endüstriyel 3D yazıcılarımızla UV ve darbe dayanımlı aparatlar üretiyoruz.",
      badge: "Özel Tasarım"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Orijinal Ürün & Distribütör Güvencesi",
      description: "Kullandığımız tüm IP kameralar, NVR sistemleri, anakart ve bellekler doğrudan resmi Türkiye distribütörlerinden faturalı ve 2-5 yıl garantilidir.",
      badge: "%100 Orijinal"
    },
    {
      icon: <MapPin className="w-6 h-6 text-rose-400" />,
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
    <section className="py-24 relative bg-slate-100/70 dark:bg-[#091122] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 text-cyan-400 text-xs font-bold tracking-wider uppercase border border-sky-400/30">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Neden Trakyacomputing?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Trakya Bölgesine Özel Yerinde, Anında ve Anahtar Teslim Güç
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            İstanbul merkezli firmaların günler sonra gelen servisleri yerine, 30 dakika mesafedeki kendi mühendislerimizle yanınızdayız.
          </p>
        </div>

        {/* 6 Avantaj Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0d1726] border border-slate-800 hover:border-sky-500/40 shadow-lg hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-750 group-hover:scale-110 group-hover:border-sky-400 transition-all">
                  {adv.icon}
                </div>
                <span className="text-[11px] font-bold text-cyan-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800/40">
                  {adv.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                {adv.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trakya Bölgesel Kapsama Ağı Şeridi */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-sky-900/40 via-[#0d1726] to-blue-900/40 border border-sky-500/30 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Bölgesel Servis Ağı</span>
              </div>
              <h3 className="text-2xl font-black">
                Trakya'nın Her Noktasına Aynı Gün Teknik Servis
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Lüleburgaz merkez ofisimizden çıkan donanımlı araçlarımız, Kırklareli'den Edirne'ye, Tekirdağ'dan Çerkezköy'e kadar tüm sanayi kuruluşlarına doğrudan destek verir.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              {coveredRegions.map((region, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-sky-500/20 text-center">
                  <div className="text-sm font-bold text-white">{region.name}</div>
                  <div className="text-[10px] text-cyan-400 font-medium">{region.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
