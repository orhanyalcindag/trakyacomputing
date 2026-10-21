"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingCart, 
  Check, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  ShieldCheck, 
  Eye, 
  Truck,
  Wrench
} from "lucide-react";
import { productsData, ProductItem } from "@/data/productsData";
import { useCart } from "@/context/CartContext";

export default function EcommerceShowcase() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  // Dinamik veri yükleme (React useState & useEffect ile JSON entegrasyonu)
  useEffect(() => {
    // Gerçekçi asenkron state simülasyonu
    let filtered = productsData;
    if (selectedCategory !== "all") {
      filtered = productsData.filter((item) => item.category === selectedCategory);
    }
    setProducts(filtered);
  }, [selectedCategory]);

  const handleAddToCart = (product: ProductItem) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  const categories = [
    { id: "all", label: "Tüm Ürünler" },
    { id: "ag-guvenlik", label: "Ağ & Güvenlik" },
    { id: "donanim", label: "Donanım & Parça" },
    { id: "3d-cozumler", label: "3D Özel Çözümler" },
  ];

  return (
    <section id="magaza" className="py-24 relative bg-[#030712] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı ve Kategori Filtreleri */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-sky-400 text-xs font-semibold uppercase tracking-wider border border-white/[0.1]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Donanım & E-Ticaret Vitrini</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Öne Çıkan Donanım & Güvenlik Ekipmanları
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Kurumsal projeleriniz için test edilmiş, doğrudan distribütör garantili orijinal donanımlar ve sahaya özel 3D aparatlar.
            </p>
          </div>

          {/* Kategori Filtre Butonları */}
          <div className="flex flex-wrap items-center gap-1.5 bg-black/40 p-1 rounded-2xl border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bölgesel Kurulum Vurgusu Banner'ı */}
        <div className="mb-8 p-5 rounded-3xl pro-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">"Tıkla, Donanımı Al, Kurulumu Biz Yapalım!"</span>
              <p className="text-slate-300">Lüleburgaz ve Trakya bölgesindeki siparişlerinizde uzman ekibimizle yerinde montaj ve devreye alma opsiyonu.</p>
            </div>
          </div>
          <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-sky-300 font-bold border border-white/[0.08]">
            Yerinde Montaj Desteği
          </span>
        </div>

        {/* Ürünler Grid Vitrini */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-3xl pro-card transition-all duration-300 overflow-hidden"
              >
                {/* Rozet */}
                {product.badge && (
                  <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-sky-500 text-white shadow-md">
                    {product.badge}
                  </div>
                )}

                {/* Hızlı İnceleme Butonu */}
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
                  title="Hızlı İncele"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Ürün Görseli */}
                <div className="relative w-full h-52 bg-[#0b1329] overflow-hidden flex items-center justify-center border-b border-white/[0.06]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Ürün Bilgileri */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Kategori ve Değerlendirme */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-sky-400 font-bold">
                        {product.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-slate-200">
                          {product.rating}
                        </span>
                        <span className="text-slate-500">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Ürün İsmi */}
                    <h3 className="font-bold text-sm text-white mb-2 line-clamp-2 group-hover:text-sky-300 transition-colors">
                      {product.name}
                    </h3>

                    {/* Kısa Açıklama */}
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Fiyat ve Sepete Ekle Butonu */}
                  <div className="pt-3 border-t border-white/[0.08]">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-black text-white">
                        {product.price.toLocaleString("tr-TR")} ₺
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-slate-500 line-through">
                          {product.oldPrice.toLocaleString("tr-TR")} ₺
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-2.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-white/[0.06] hover:bg-sky-500 hover:text-white text-slate-200 border border-white/[0.1] hover:border-sky-400"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Sepete Eklendi!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Sepete Ekle</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mağazaya Gitme Geniş CTA Butonu */}
        <div className="mt-12 text-center">
          <Link
            href="/magaza"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 hover:border-sky-500 transition-all shadow-md group"
          >
            <span>Tüm Donanım & Parça Kataloğunu İncele (8+ Ürün)</span>
            <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Hızlı İnceleme Modal Penceresi */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white dark:bg-[#0d1726] border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-2xl overflow-hidden h-64 bg-[#0b1329] flex items-center justify-center border border-white/10">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {quickViewProduct.categoryLabel}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {quickViewProduct.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {quickViewProduct.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Teknik Detaylar:</span>
                  {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-medium text-slate-500">{key}:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-3 pt-3">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    {quickViewProduct.price.toLocaleString("tr-TR")} ₺
                  </span>
                  {quickViewProduct.oldPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {quickViewProduct.oldPrice.toLocaleString("tr-TR")} ₺
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Sepete Ekle & İlerle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
