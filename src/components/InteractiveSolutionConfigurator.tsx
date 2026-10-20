"use client";

import React, { useState } from "react";
import { 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Sparkles,
  Zap,
  Clock
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function InteractiveSolutionConfigurator() {
  const { openQuoteModalWithService } = useCart();

  const [serviceType, setServiceType] = useState<"security" | "software" | "network" | "all">("all");
  const [scale, setScale] = useState<"small" | "medium" | "enterprise">("medium");
  const [sla, setSla] = useState<"standard" | "critical">("critical");

  const getRecommendation = () => {
    if (serviceType === "all") {
      return {
        title: "Bütünleşik Anahtar Teslim Fabrika & Tesis Paketi",
        description: "Yazılım, 4K DarkFighter IP kamera güvenliği, 10G fiber ağ ve özel 3D aparatların tek bir elden entegre edildiği tam ekosistem.",
        estimatedSetup: "3-5 İş Günü",
        included: [
          "Yedekli Fiber Switch & PoE Omurga",
          "4K AI Destekli IP Kameralar ve NVR",
          "Özel 3D Basım Direk & Köşe Braketleri",
          "Kurumsal Web & Depo Entegrasyon Yazılımı",
          "30 Dakikada Yerinde Acil Müdahale SLA Garantisi"
        ]
      };
    } else if (serviceType === "security") {
      return {
        title: "Yapay Zeka Destekli 4K IP Kamera & Fiziksel Güvenlik",
        description: "Hikvision AcuSense 8MP 4K kameralar, insan/araç analitiği ve zorlu direkler için özel 3D karbon montaj aparatları.",
        estimatedSetup: "1-2 İş Günü",
        included: [
          "4K 60FPS DarkFighter Gece Renkli Kameralar",
          "16/32 Kanal Akıllı NVR Depolama",
          "Özel 3D PETG Dış Ortam Koruma Braketleri",
          "Mobil Canlı İzleme ve Uzaktan Alarm Kurulumu"
        ]
      };
    } else if (serviceType === "software") {
      return {
        title: "Özel ERP, Depo ve Süreç Otomasyon Yazılımı",
        description: "C# ASP.NET Core ve React ile firmanızın çalışma disiplinine birebir uyumlu kurumsal otomasyon ve el terminali entegrasyonu.",
        estimatedSetup: "2-4 Hafta",
        included: [
          "Kuruma Özel İş Akış Mimarisi ve Veritabanı",
          "Modern Yönetim Dashboard'u ve Gerçek Zamanlı Raporlar",
          "El Terminali Barkod/QR Entegrasyonu",
          "Kaynak Kod Teslimi & 1 Yıl Yerinde Garanti"
        ]
      };
    } else {
      return {
        title: "Kurumsal Fiber Optik Omurga & Yönetilebilir Ağ",
        description: "Cisco ve MikroTik tabanlı yüksek hızlı veri iletişimi, VLAN ayrımı ve 5651 uyumlu siber güvenlik altyapısı.",
        estimatedSetup: "1-3 İş Günü",
        included: [
          "24/48 Port Gigabit PoE+ Switch Kurulumu",
          "10G SFP+ Fiber Sonlandırma ve Test Raporu",
          "Donanımsal Güvenlik Duvarı & VPN Konfigürasyonu",
          "Kesintisiz Güç Kaynağı (UPS) Entegrasyonu"
        ]
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-24 relative bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-sky-400">
            <Sliders className="w-3.5 h-3.5 text-sky-400" />
            <span>İnteraktif Çözüm & Kapsam Belirleyici</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Projenize En Uygun BT Mimarisini Seçin
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Tesis büyüklüğünüzü ve ihtiyaçlarınızı belirleyin; mühendislik ekibimizin hazırladığı önerilen altyapı paketini anında inceleyin.
          </p>
        </div>

        {/* Konfigüratör İki Kolonlu Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sol Kolon: Seçim Kontrolleri */}
          <div className="lg:col-span-5 pro-card rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Hizmet Türü */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                1. Ana İhtiyaç Alanı:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setServiceType("all")}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    serviceType === "all"
                      ? "bg-sky-500/15 border-sky-400 text-white shadow-sm"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">Bütünleşik Paket</div>
                  <div className="text-[10px] text-slate-400">Yazılım + Kamera + Ağ</div>
                </button>

                <button
                  onClick={() => setServiceType("security")}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    serviceType === "security"
                      ? "bg-sky-500/15 border-sky-400 text-white shadow-sm"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">IP Kamera & Güvenlik</div>
                  <div className="text-[10px] text-slate-400">4K AI + 3D Aparat</div>
                </button>

                <button
                  onClick={() => setServiceType("software")}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    serviceType === "software"
                      ? "bg-sky-500/15 border-sky-400 text-white shadow-sm"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">Özel Yazılım & ERP</div>
                  <div className="text-[10px] text-slate-400">C# • React • Otomasyon</div>
                </button>

                <button
                  onClick={() => setServiceType("network")}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    serviceType === "network"
                      ? "bg-sky-500/15 border-sky-400 text-white shadow-sm"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">Fiber Ağ & Switch</div>
                  <div className="text-[10px] text-slate-400">Cisco • Omurga • Kablo</div>
                </button>
              </div>
            </div>

            {/* 2. Tesis Büyüklüğü */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                2. Tesis Büyüklüğü & Kapsam:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setScale("small")}
                  className={`p-3 rounded-2xl text-center border transition-all ${
                    scale === "small"
                      ? "bg-sky-500/15 border-sky-400 text-white"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white">Ofis / Mağaza</div>
                  <div className="text-[10px] text-slate-400">&lt; 500 m²</div>
                </button>

                <button
                  onClick={() => setScale("medium")}
                  className={`p-3 rounded-2xl text-center border transition-all ${
                    scale === "medium"
                      ? "bg-sky-500/15 border-sky-400 text-white"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white">Orta Fabrika</div>
                  <div className="text-[10px] text-slate-400">500 - 5.000 m²</div>
                </button>

                <button
                  onClick={() => setScale("enterprise")}
                  className={`p-3 rounded-2xl text-center border transition-all ${
                    scale === "enterprise"
                      ? "bg-sky-500/15 border-sky-400 text-white"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white">Büyük Sanayi</div>
                  <div className="text-[10px] text-slate-400">&gt; 5.000 m²</div>
                </button>
              </div>
            </div>

            {/* 3. Destek & SLA Seviyesi */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                3. Destek & Saha Müdahale Talebi:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setSla("standard")}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    sla === "standard"
                      ? "bg-sky-500/15 border-sky-400 text-white"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">Standart Garanti</div>
                  <div className="text-[10px] text-slate-400">İş Saatleri İçi Destek</div>
                </button>

                <button
                  onClick={() => setSla("critical")}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    sla === "critical"
                      ? "bg-sky-500/15 border-sky-400 text-white"
                      : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">7/24 Kritik SLA</div>
                  <div className="text-[10px] text-emerald-400">30 Dk Yerinde Müdahale</div>
                </button>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: Önerilen Mimari Paketi & Hızlı Teklif Aksiyonu */}
          <div className="lg:col-span-7">
            <div className="pro-card rounded-3xl p-7 sm:p-9 space-y-6 text-white relative">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    Önerilen BT Çözüm Paketi
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {rec.title}
                  </h3>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-right shrink-0">
                  <span className="text-[10px] text-slate-400 block font-medium">Tahmini Devreye Alma</span>
                  <span className="text-sm font-black text-sky-300 font-mono">
                    {rec.estimatedSetup}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {rec.description}
              </p>

              {/* Dahil Olan Hizmet Bileşenleri */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Paket İçeriğine Dahil Olanlar:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {rec.included.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-medium text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alt Bilgi & CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Ücretsiz 24 saatte yerinde saha keşfi</span>
                </div>

                <button
                  onClick={() => openQuoteModalWithService(`${rec.title} (Konfigüratör Talebi)`)}
                  className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <span>Bu Kapsamda Teklif İste</span>
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
