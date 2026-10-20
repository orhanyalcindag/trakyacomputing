import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EcommerceShowcase from "@/components/EcommerceShowcase";
import WhyUsSection from "@/components/WhyUsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Link from "next/link";
import { Sparkles, PhoneCall, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Karşılama Ekranı) */}
      <HeroSection />

      {/* 2. Hizmetlerimiz (Services Grid - Kart Yapısında) */}
      <ServicesSection />

      {/* 3. E-Ticaret Vitrini (Mini Mağaza Modülü) */}
      <EcommerceShowcase />

      {/* 4. Neden Biz? / Avantajlarımız (Bölgesel Güç: Lüleburgaz & Trakya) */}
      <WhyUsSection />

      {/* 5. Projelerimiz & Saha Vaka Analizleri */}
      <ProjectsShowcase />

      {/* 6. Hızlı İletişim & Keşif CTA Şeridi */}
      <section className="py-20 bg-gradient-to-r from-sky-950 via-[#0d1726] to-blue-950 text-white relative overflow-hidden border-t border-sky-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-slate-900/80 border border-sky-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl shadow-2xl">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Teknolojik Dönüşüm Zamanı</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                İşletmenizi Geleceğe Birlikte Taşıyalım
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Yazılım ihtiyaçlarınız, fabrika güvenlik altyapınız veya kurumsal donanım tedariğiniz için yerinde ücretsiz fizibilite yapıyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Hemen İletişime Geçin</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:02884170000"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>0288 417 XX XX</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
