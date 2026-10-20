"use client";

import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText 
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function QuoteModal() {
  const { isQuoteModalOpen, setIsQuoteModalOpen, quoteSelectedService } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: quoteSelectedService || "Yazılım & Kurumsal Otomasyon",
    location: "Lüleburgaz",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsQuoteModalOpen(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0d1726] border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Kapat Butonu */}
        <button
          onClick={() => setIsQuoteModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Teklif Talebiniz Başarıyla Alındı!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Teknik ve satış mühendislerimiz talebinizi inceleyerek en geç <strong>2 saat</strong> içinde detaylı fizibilite ve fiyat teklifinizle birlikte sizinle iletişime geçecektir.
            </p>
            <div className="pt-2 text-xs font-semibold text-cyan-400">
              Trakyacomputing Bütünleşik BT Çözümleri
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Başlığı */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Kurumsal Fiyat & Keşif Teklifi Al
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Trakya bölgesindeki projeniz için dakikalar içinde ücretsiz keşif ve teklif oluşturun.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-400" />
                    <span>Ad Soyad *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Firma / Kurum Adı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: ABC Tekstil A.Ş."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Telefon Numarası *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0532 000 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>E-Posta Adresi *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="info@sirketiniz.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    İlgilenilen Hizmet Alanı *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Yazılım & Kurumsal Otomasyon">Yazılım & Kurumsal Otomasyon (C#, React)</option>
                    <option value="Ağ ve Güvenlik Sistemleri">Ağ ve Güvenlik (IP Kamera, NVR, Switch)</option>
                    <option value="Donanım Tedariği">Donanım & Sunucu Parça Tedariği</option>
                    <option value="3D Özel Çözümler">3D Özel Saha Montaj Aparatları</option>
                    <option value="Komple Bütünleşik BT">Tüm Hizmetler (Komple Bütünleşik BT Çözümü)</option>
                    <option value="Ücretsiz Saha Keşfi">Ücretsiz Yerinde Saha Keşfi</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Proje Lokasyonu (Trakya) *</span>
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Lüleburgaz">Lüleburgaz / Kırklareli</option>
                    <option value="Çorlu">Çorlu / Tekirdağ</option>
                    <option value="Kırklareli Merkez">Kırklareli Merkez</option>
                    <option value="Çerkezköy">Çerkezköy / Kapaklı</option>
                    <option value="Tekirdağ Süleymanpaşa">Tekirdağ Süleymanpaşa</option>
                    <option value="Edirne">Edirne Merkez</option>
                    <option value="Diğer">Diğer Bölge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>Proje Notları & Özel Talepler</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Kamera sayısı, fabrika büyüklüğü, istenilen yazılım özellikleri veya donanım gereksinimleriniz..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Teklif Talebini Gönder (Ücretsiz Keşif)</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-500 dark:text-slate-400">
                🔒 Bilgileriniz KVKK kapsamında gizli tutulur, üçüncü şahıslarla paylaşılmaz.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
