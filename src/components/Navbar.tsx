"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Terminal, 
  ShoppingCart, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  PhoneCall, 
  ChevronRight, 
  Sparkles 
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { totalItems, setIsCartOpen, openQuoteModalWithService } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sayfa kaydırma dinleyicisi: Navbar arka plan bulanıklığını artırır
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü bağlantıları tanımı
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Mağaza (Donanım & Parça)", href: "/magaza" },
    { name: "Projelerimiz", href: "/projelerimiz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070d19]/95 backdrop-blur-md shadow-lg border-b border-sky-500/20 py-3"
          : "bg-[#070d19]/80 backdrop-blur-sm py-4 border-b border-sky-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Sol: Trakyacomputing Logosu ve Kristal Netliğinde Tipografi */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 text-white shadow-lg shadow-sky-500/30 group-hover:scale-105 transition-transform duration-300">
              <Terminal className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1 drop-shadow-sm">
                Trakya<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">computing</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold text-cyan-300 drop-shadow-sm">
                Bütünleşik BT Çözümleri
              </span>
            </div>
          </Link>

          {/* 2. Orta: Masaüstü Navigasyon Menüsü */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-sky-500/25 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Sağ: Aksiyon Butonları (Tema, Sepet, CTA Teklif Al) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Tema Değiştirici (Dark/Light) */}
            <button
              onClick={toggleTheme}
              aria-label="Temayı Değiştir"
              className="p-2.5 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors border border-slate-700/60 hover:border-cyan-400/40"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-slate-200 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* E-Ticaret Sepet Butonu ve Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Alışveriş Sepeti"
              className="relative p-2.5 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors border border-slate-700/60 hover:border-cyan-400/40"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Belirgin CTA "Teklif Al" Butonu */}
            <button
              onClick={() => openQuoteModalWithService()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-sky-400/40"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Teklif Al</span>
            </button>

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:bg-slate-800 transition-colors border border-slate-700/60"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 4. Mobil Navigasyon Menüsü Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-3 bg-[#0d1726] border border-sky-500/30 rounded-2xl backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold"
                        : "text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-slate-700/60 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModalWithService();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/30"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Hemen Fiyat & Proje Teklifi Al</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-300 pt-1">
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lüleburgaz / Trakya Bölgesi: 0850 840 XX XX</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
