"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  Truck,
  MessageCircle
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalItems, 
    totalPrice 
  } = useCart();

  const [needInstallation, setNeedInstallation] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isCartOpen) return null;

  // WhatsApp Sipariş Mesajı Oluşturucu
  const generateWhatsAppUrl = () => {
    let text = "Merhaba Trakyacomputing! Web sitenizden aşağıdaki ürünler için sipariş/teklif oluşturmak istiyorum:%0A%0A";
    cart.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} (Adet: ${item.quantity}) - ${(item.product.price * item.quantity).toLocaleString("tr-TR")} TL%0A`;
    });
    text += `%0AToplam Tutar: ${totalPrice.toLocaleString("tr-TR")} TL`;
    if (needInstallation) {
      text += "%0A(Not: Trakya bölgesi yerinde kurulum & montaj hizmeti de talep ediyorum.)";
    }
    return `https://wa.me/908508400000?text=${text}`;
  };

  const handleCompleteOrder = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      clearCart();
      setOrderSuccess(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white dark:bg-[#0d1726] border-l border-slate-200 dark:border-sky-500/20 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Başlık Alanı */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/10 text-cyan-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Alışveriş Sepeti</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{totalItems} adet donanım seçildi</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sepet İçeriği */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Sipariş Talebiniz Alındı!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Teknik operasyon ekibimiz en kısa sürede sizinle iletişime geçerek sevkiyat ve montaj planlamasını yapacaktır.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-slate-400">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-8 h-8 opacity-40" />
              </div>
              <p className="text-sm font-medium">Sepetiniz şu anda boş.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 transition-colors"
              >
                Ürünleri İncele
              </button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 items-center justify-between"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-slate-800 shrink-0"
                  />

                  <div className="flex-1 min-w-0 pr-2">
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                      {item.product.name}
                    </h5>
                    <div className="text-xs font-bold text-sky-600 dark:text-cyan-400 mt-1">
                      {(item.product.price * item.quantity).toLocaleString("tr-TR")} ₺
                    </div>

                    {/* Miktar Kontrolleri */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-900 dark:text-white px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                    title="Sepetten Kaldır"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Yerinde Kurulum & Montaj Talep Kutusu */}
              <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="installCheck"
                  checked={needInstallation}
                  onChange={(e) => setNeedInstallation(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-sky-400 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="installCheck" className="text-xs text-slate-300 cursor-pointer">
                  <span className="font-bold text-white block">Trakya İçi Yerinde Montaj Talep Ediyorum</span>
                  Lüleburgaz, Çorlu ve çevre ilçelerde cihazlarınız teknik ekibimizce kurulup çalışır vaziyette teslim edilsin.
                </label>
              </div>
            </>
          )}
        </div>

        {/* Alt Toplam & Butonlar */}
        {cart.length > 0 && !orderSuccess && (
          <div className="p-5 border-t border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50 dark:bg-slate-900/90">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Ara Toplam:</span>
              <span>{totalPrice.toLocaleString("tr-TR")} ₺</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>KDV (%20 Dahil):</span>
              <span className="text-emerald-400 font-medium">Dahil</span>
            </div>
            <div className="flex items-center justify-between text-base font-black text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
              <span>Genel Toplam:</span>
              <span className="text-xl text-sky-500 dark:text-cyan-400">
                {totalPrice.toLocaleString("tr-TR")} ₺
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleCompleteOrder}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
              >
                <span>Siparişi & Kurulumu Onayla</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ile Sipariş Ver</span>
              </a>

              <button
                onClick={clearCart}
                className="text-[11px] text-slate-400 hover:text-rose-400 transition-colors text-center pt-1"
              >
                Sepeti Temizle
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
