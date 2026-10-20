import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuoteModal from "@/components/QuoteModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trakyacomputing | Bütünleşik BT Çözümleri Ajansı",
  description: "Trakya'nın Bütünleşik Teknoloji ve Yazılım Çözüm Ortağı. Özel Yazılım Geliştirme, IP Kamera ve Güvenlik Altyapıları, Bilgisayar Donanımları ve 3D Saha Çözümleri.",
  keywords: [
    "Trakyacomputing",
    "Bütünleşik BT Çözümleri",
    "Lüleburgaz Bilgisayar",
    "Trakya Yazılım Firması",
    "IP Güvenlik Kamerası Lüleburgaz",
    "NVR Kayıt Sistemleri Çorlu",
    "C# ASP.NET React Yazılım",
    "3D Montaj Braketi",
    "Donanım Satış Trakya",
    "Ağ Switch Router Kurulumu"
  ],
  authors: [{ name: "Trakyacomputing Mühendislik Ekibi" }],
  openGraph: {
    title: "Trakyacomputing | Bütünleşik BT Çözümleri Ajansı",
    description: "Özel Yazılım, IP Kamera, Ağ Sistemleri ve Bilgisayar Donanımlarında Trakya'nın Yerinde Hizmet Veren Lider Teknoloji Ortağı.",
    type: "website",
    locale: "tr_TR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased selection:bg-sky-500 selection:text-white`}>
        <ThemeProvider>
          <CartProvider>
            {/* Global Sabit Başlık / Navigasyon */}
            <Navbar />

            {/* Dinamik Sayfa İçeriği */}
            <main className="flex-1">
              {children}
            </main>

            {/* Global E-Ticaret Sepet Çekmecesi */}
            <CartDrawer />

            {/* Global Fiyat & Keşif Teklifi Alma Modalı */}
            <QuoteModal />

            {/* Global Alt Bilgi / Footer */}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
