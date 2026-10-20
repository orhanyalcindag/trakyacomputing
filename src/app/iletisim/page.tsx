"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle,
  Building,
  ShieldAlert
} from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-28 pb-20">
      {/* 1. Üst Banner */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Lüleburgaz Merkez & Trakya Saha Desteği</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Trakya bölgesindeki fabrikanız, ofisiniz veya bireysel projeleriniz için teknik ekibimizle anında görüşün, yerinde keşif planlayın.
          </p>
        </div>
      </section>

      {/* 2. İletişim Detayları ve Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sol Kolon: Bilgiler & Harita Bilgisi */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Genel Merkez & Teknik Operasyon
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Adres:</strong>
                    <span>Kocasinan Mah. İnönü Cad. No: 42, Lüleburgaz / Kırklareli</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Telefon & Santral:</strong>
                    <span>+90 (288) 417 XX XX / 0850 840 XX XX</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">E-Posta:</strong>
                    <span>destek@trakyacomputing.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Çalışma Saatleri:</strong>
                    <span>Pazartesi - Cumartesi: 08:30 - 19:00</span>
                    <span className="block text-cyan-400 font-semibold mt-0.5">Sözleşmeli Kurumlar İçin 7/24 Kesintisiz Müdahale</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Doğrudan Sohbet Butonu */}
              <a
                href="https://wa.me/908508400000?text=Merhaba,%20Trakyacomputing%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Üzerinden Canlı Yazın</span>
              </a>
            </div>

            {/* Bölgesel Acil Destek Uyarısı */}
            <div className="p-5 rounded-2xl bg-sky-950/40 border border-sky-500/30 flex items-start gap-3 text-xs text-slate-300">
              <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Acil Kamera veya Ağ Arızası mı Var?</strong>
                Lüleburgaz ve çevre OSB'lerdeki fabrikalara nöbetçi teknik ekibimiz 30 dakika içinde intikal etmektedir.
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Mesaj Formu */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Bize Mesaj Gönderin
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                İster bir yazılım projesi, ister fabrika güvenlik kameraları... Uzman mühendislerimiz gün içinde dönüş yapacaktır.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Mesajınız İletildi!</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Talebiniz müşteri hizmetlerimize ulaştı. En geç 2 saat içinde tarafınıza geri bildirim sağlanacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ahmet Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Telefon Numarası *
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        E-Posta Adresi *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ahmet@sirketiniz.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Konu / İlgili Departman
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                      >
                        <option value="">Seçiniz...</option>
                        <option value="Yazılım Geliştirme">Özel Yazılım & Web Uygulaması</option>
                        <option value="IP Kamera & Güvenlik">IP Kamera & Güvenlik Sistemi</option>
                        <option value="Ağ Altyapısı">Ağ Switch & Fiber Optik Kurulumu</option>
                        <option value="Donanım Tedariği">Donanım & Parça Satın Alma</option>
                        <option value="3D Baskı Aparat">3D Özel Montaj Braketi Üretimi</option>
                        <option value="Arıza ve Teknik Destek">Arıza & Yerinde Teknik Servis</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Mesajınız *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Projenizin detayları, adresiniz veya sormak istediğiniz sorular..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Mesajı Gönder</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
