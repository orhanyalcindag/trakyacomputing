"use client";

import React, { useState, useMemo } from "react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Check, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Truck,
  Eye,
  SlidersHorizontal
} from "lucide-react";
import { productsData, ProductItem } from "@/data/productsData";
import { useCart } from "@/context/CartContext";

export default function MagazaPage() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  // Kategori Listesi
  const categories = [
    { id: "all", label: "Tüm Ürünler" },
    { id: "ag-guvenlik", label: "Ağ & Güvenlik Sistemleri" },
    { id: "donanim", label: "Donanım & Parça" },
    { id: "3d-cozumler", label: "3D Özel Çözümler & Aparatlar" },
    { id: "sunucu", label: "Sunucu & Veri Merkezi" },
  ];

  // Arama, filtreleme ve sıralama mantığı
  const filteredProducts = useMemo(() => {
    let result = productsData.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (product: ProductItem) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20">
      {/* 1. Üst Banner */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Resmi Distribütör Donanım Mağazası</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Donanım, Güvenlik ve Özel 3D Aparatlar
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Trakya bölgesinde test edilmiş kurumsal sunucu parçaları, 4K güvenlik kameraları, PoE switch'ler ve sahaya özel montaj braketleri.
          </p>
        </div>
      </section>

      {/* 2. Mağaza Gövdesi */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölgesel Kurulum Vurgu Kutusu */}
        <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-sky-950/70 via-blue-950/60 to-slate-900/80 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">"Tıkla, Donanımı Al, Kurulumu Biz Yapalım!"</span>
              <p className="text-slate-300">Satın aldığınız tüm güvenlik kamerası ve ağ donanımlarında Lüleburgaz ve Trakya bölgesinde yerinde montaj ve devreye alma hizmeti veriyoruz.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold shrink-0">
            <Truck className="w-4 h-4" />
            <span>Lüleburgaz Aynı Gün Teslimat</span>
          </div>
        </div>

        {/* Filtre ve Arama Çubuğu */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-50 dark:bg-[#0d1726] p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          
          {/* Arama Kutusu */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Ürün adı veya özellik ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Kategori Seçiciler */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === c.id
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Sıralama */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            >
              <option value="featured">Öne Çıkanlar</option>
              <option value="price-low">Fiyat: Düşükten Yükseğe</option>
              <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
              <option value="rating">En Yüksek Puan</option>
            </select>
          </div>
        </div>

        {/* Ürünler Grid'i */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-slate-400 space-y-3">
            <ShoppingBag className="w-12 h-12 mx-auto opacity-30" />
            <p className="text-base font-semibold">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-500"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = addedId === product.id;

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0d1726] border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Rozet */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-sky-500 text-white shadow-md">
                      {product.badge}
                    </div>
                  )}

                  {/* Hızlı İnceleme Butonu */}
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-900 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Hızlı İncele"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Ürün Görseli */}
                  <div className="relative w-full h-52 bg-[#0b1329] overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>

                  {/* Bilgiler */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-sky-600 dark:text-cyan-400 font-semibold">
                          {product.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-bold text-slate-700 dark:text-slate-300">{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-black text-slate-900 dark:text-white">
                          {product.price.toLocaleString("tr-TR")} ₺
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            {product.oldPrice.toLocaleString("tr-TR")} ₺
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-md"
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
        )}

      </section>

      {/* Hızlı İnceleme Modal Penceresi */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0d1726] border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
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
                    <span>Sepete Ekle & Sepeti Gör</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
