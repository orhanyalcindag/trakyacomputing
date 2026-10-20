import React from "react";
import HeroSection from "@/components/HeroSection";
import TechLogosMarquee from "@/components/TechLogosMarquee";
import ServicesSection from "@/components/ServicesSection";
import InteractiveSolutionConfigurator from "@/components/InteractiveSolutionConfigurator";
import EcommerceShowcase from "@/components/EcommerceShowcase";
import RegionalRadarSection from "@/components/RegionalRadarSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { Sparkles, PhoneCall, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Karşılama Ekranı & Ultra Profesyonel SOC Kokpiti) */}
      <HeroSection />

      {/* 2. Teknoloji Markaları & Altyapı Güvencesi Sonsuz Kayan Bant */}
      <TechLogosMarquee />

      {/* 3. Hizmetlerimiz (Bento Grid Mimarisi: Yazılım, Ağ, Donanım, 3D Aparat) */}
      <ServicesSection />

      {/* 4. İnteraktif Çözüm & Maliyet Konfigüratörü */}
      <InteractiveSolutionConfigurator />

      {/* 5. E-Ticaret Vitrini (Mini Mağaza Modülü) */}
      <EcommerceShowcase />

      {/* 6. Trakya Canlı Müdahale Radarı & Bölgesel İstasyonlar */}
      <RegionalRadarSection />

      {/* 7. Neden Biz? / Avantajlarımız (Bölgesel Güç: Lüleburgaz & Trakya) */}
      <WhyUsSection />

      {/* 8. Projelerimiz & Saha Vaka Analizleri */}
      <ProjectsShowcase />

      {/* 9. Trakya Sanayisi Müşteri Yorumları & Değerlendirmeleri */}
      <TestimonialsSection />

      {/* 10. Hızlı İletişim & Keşif CTA Şeridi */}
      <section className="py-24 bg-gradient-to-b from-[#030712] via-[#090e1a] to-[#030712] text-white relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pro-card rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Teknolojik Dönüşüm Zamanı</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                İşletmenizi Geleceğe Birlikte Taşıyalım
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Yazılım ihtiyaçlarınız, fabrika güvenlik altyapınız veya kurumsal donanım tedariğiniz için yerinde ücretsiz fizibilite yapıyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Hemen İletişime Geçin</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:02884170000"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-xs text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>0288 417 XX XX</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
