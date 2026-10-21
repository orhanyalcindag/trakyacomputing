"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function KurumsalPage() {
  const { openQuoteModalWithService } = useCart();

  const milestones = [
    { year: "2012", title: "Lüleburgaz'da Temeller Atıldı", desc: "Trakya sanayisinin bilgisayar donanımı ve yerel teknik destek ihtiyacını karşılamak üzere faaliyetlerimize başladık." },
    { year: "2016", title: "Ağ & Güvenlik Departmanı Kuruldu", desc: "Organize Sanayi Bölgelerindeki fabrikalar için IP kamera ve fiber optik ağ kurulumlarını başlattık." },
    { year: "2019", title: "Özel Yazılım & Otomasyon Birimi", desc: "C#, ASP.NET ve modern web teknolojileriyle kurumsal ERP/depo takip yazılımları geliştirmeye başladık." },
    { year: "2022", title: "3D Özel Saha Çözümleri Laboratuvarı", desc: "Zorlu montaj koşulları için endüstriyel 3D yazıcılarla aparat ve braket üretimine geçerek ekosistemi tamamladık." },
    { year: "Günümüz", title: "Bölgenin Bütünleşik BT Ajansı", desc: "Lüleburgaz merkezli ekibimizle Tekirdağ, Çorlu, Kırklareli ve Edirne genelinde 450'den fazla kuruma 7/24 hizmet veriyoruz." }
  ];

  const values = [
    { title: "Bütünleşik Mühendislik", desc: "Yazılım, güvenlik, donanım ve özel aparatı ayrı ayrı değil, tek bir sistem olarak entegre ediyoruz." },
    { title: "Bölgesel Hızlı Refleks", desc: "İstanbul'dan servis beklemenize gerek yok; Lüleburgaz merkezimizden 30 dakikada yanınızdayız." },
    { title: "Orijinal ve Şeffaf Tedarik", desc: "Her parçayı faturalı, Türkiye distribütör garantili ve açık maliyetlendirme ile sunuyoruz." },
    { title: "Sürekli Destek ve SLA", desc: "İşi teslim edip gitmiyoruz; düzenli bakım anlaşmaları ile sistemlerinizi 7/24 ayakta tutuyoruz." }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* 1. Üst Başlık Banner */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-500/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>Kurumsal Profilimiz</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Trakya'nın Teknolojik Altyapısını Geleceğe Taşıyoruz
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            "Bütünleşik BT Çözümleri" vizyonuyla yazılım, ağ güvenliği, donanım tedariği ve sahaya özel 3D aparat üretimini tek bir çatı altında birleştiren yeni nesil teknoloji ajansı.
          </p>
        </div>
      </section>

      {/* 2. Hikayemiz ve Bütünleşik Yaklaşım */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
              Biz Kimiz?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Lüleburgaz'da Doğan, Tüm Trakya'ya Yayılan Güvenilir Teknoloji Gücü
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Trakyacomputing, işletmelerin teknoloji süreçlerinde yaşadığı bölünmüşlüğü ortadan kaldırmak amacıyla kuruldu. Çoğu işletme yazılım için bir ajansla, güvenlik kameraları için bir elektrikçiyle, bilgisayar parçaları için bir toptancıyla uğraşmak zorunda kalıyordu.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Biz bu dağınıklığı tek bir kurumsal ortaklıkta topladık: <strong>Bütünleşik BT Çözümleri Ajansı</strong>. Artık fabrikanızın yazılımından sunucusuna, IP kamerasından boru direğine takılacak 3D aparata kadar her şey tek bir mühendislik vizyonuyla tasarlanıyor, kuruluyor ve 7/24 destekleniyor.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Yerel Mühendislik Kadrosu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Hızlı Saha Müdahale Filosu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Resmi Distribütör Güvencesi</span>
              </div>
            </div>
          </div>

          {/* Görsel / Bilgi Kartı */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d1726] to-sky-950 border border-sky-500/30 text-white space-y-6 shadow-2xl">
            {/* Mühendislik Laboratuvarı Görseli */}
            <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src="/images/about/about_lab.jpg"
                alt="Trakyacomputing Mühendislik Laboratuvarı"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Lüleburgaz Ar-Ge & Saha Mühendislik Merkezi</span>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <Award className="w-6 h-6 text-cyan-400" />
              <div>
                <h4 className="font-bold text-sm">Kalite & Hizmet Standartlarımız</h4>
                <p className="text-xs text-slate-400">Trakya Sanayi Bölgesi Odaklı</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <strong className="text-white block text-sm">Vizyonumuz</strong>
                  <span className="text-slate-300">Trakya bölgesinin en güvenilir, inovatif ve eksiksiz bilişim ekosistemini oluşturarak bölge sanayisini Endüstri 4.0 ve akıllı otomasyon çağına taşımak.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <strong className="text-white block text-sm">Misyonumuz</strong>
                  <span className="text-slate-300">Kurumların teknolojik ihtiyaçlarını sıfır aracıyla, doğru bütçeyle ve 30 dakika içinde yerinde müdahale güvencesiyle uçtan uca karşılamak.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModalWithService("Kurumsal Görüşme")}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/25 transition-all"
            >
              Kurumsal Temsilcimizle Görüşün
            </button>
          </div>
        </div>
      </section>

      {/* 3. Kilometre Taşları / Zaman Tüneli */}
      <section className="py-16 bg-slate-50 dark:bg-[#070d19]/80 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
              Gelişim Sürecimiz
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Adım Adım Bütünleşik Teknoloji Gücüne
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 relative hover:border-sky-500/40 transition-all"
              >
                <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500 mb-2">
                  {m.year}
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Değerlerimiz Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
            Temel İlkelerimiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Neden Bizi Tercih Ediyorlar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm mb-4">
                0{i + 1}
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                {val.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
