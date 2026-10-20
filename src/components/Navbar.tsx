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
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { totalItems, setIsCartOpen, openQuoteModalWithService } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Mağaza", href: "/magaza" },
    { name: "Projelerimiz", href: "/projelerimiz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 px-3 sm:px-6">
      <div 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 border ${
          isScrolled 
            ? "bg-[#080d1a]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/80 py-2.5 px-4 sm:px-6" 
            : "bg-[#080d1a]/70 backdrop-blur-md border-white/[0.08] py-3 px-4 sm:px-6 shadow-xl"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Sol: Minimalist Profesyonel Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-0.5">
                Trakya<span className="text-sky-400 font-extrabold">computing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1 animate-pulse" />
              </span>
              <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-400">
                Bütünleşik BT Ajansı
              </span>
            </div>
          </Link>

          {/* Orta: Floating Minimal Menü */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-inner"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Sağ: İşlem Butonları */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Tema Switch */}
            <button
              onClick={toggleTheme}
              aria-label="Temayı Değiştir"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-200" />
              )}
            </button>

            {/* Sepet */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Sepet"
              className="relative p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 bg-sky-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Profesyonel Shimmer CTA "Teklif Al" */}
            <button
              onClick={() => openQuoteModalWithService()}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full font-bold text-xs text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] border border-sky-400/30 flex items-center gap-1.5"
            >
              <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
              <span className="relative z-10">Teklif Al</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-200 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06]"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobil Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-3 border-t border-white/10 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
}
