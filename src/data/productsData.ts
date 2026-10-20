/**
 * Trakyacomputing - E-Ticaret Donanım & Parça Veri Modeli
 * Saha kurulumları, kurumsal BT altyapıları ve bireysel performans için donanımlar
 */

export interface ProductItem {
  id: string;
  name: string;
  category: "ag-guvenlik" | "donanim" | "3d-cozumler" | "sunucu";
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  image: string;
  shortDesc: string;
  specs: { [key: string]: string };
  isFeatured: boolean;
}

export const productsData: ProductItem[] = [
  {
    id: "prod-mb-01",
    name: "ASUS ROG STRIX B760-F Gaming WiFi Anakart",
    category: "donanim",
    categoryLabel: "Donanım & Parça",
    price: 9450,
    oldPrice: 10800,
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    stockCount: 14,
    badge: "Çok Satan",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Intel LGA1700 soket, PCIe 5.0, DDR5 bellek ve WiFi 6E desteği ile kurumsal iş istasyonları ve üst seviye PC'ler için mükemmel seçim.",
    specs: {
      "Soket Tipi": "LGA 1700 (14. & 13. Nesil Intel)",
      "Bellek Desteği": "4x DDR5 7800+ MHz (OC)",
      "Genişleme Yuvası": "1x PCIe 5.0 x16",
      "Depolama": "3x M.2 PCIe 4.0 NVMe",
      "Ağ": "Intel 2.5Gb Ethernet & WiFi 6E"
    },
    isFeatured: true
  },
  {
    id: "prod-cam-02",
    name: "Hikvision AcuSense 8MP 4K DarkFighter IP Bullet Kamera",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 4850,
    oldPrice: 5600,
    rating: 5.0,
    reviewsCount: 52,
    inStock: true,
    stockCount: 28,
    badge: "AI Destekli",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Yapay zeka insan/araç sınıflandırması, gece tam renkli DarkFighter teknolojisi ve IP67 dış ortam korumalı profesyonel güvenlik kamerası.",
    specs: {
      "Çözünürlük": "8 Megapiksel 4K (3840 x 2160)",
      "Lens": "2.8mm Geniş Açı (107° görüş)",
      "Gece Görüşü": "60 Metre EXIR IR + DarkFighter",
      "Koruma Sınıfı": "IP67 Su/Toz & IK10 Darbe",
      "Besleme": "PoE (802.3af) / 12V DC"
    },
    isFeatured: true
  },
  {
    id: "prod-nvr-03",
    name: "Hikvision 16 Kanal 4K UltraHD Akıllı PoE NVR Cihazı",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 12900,
    oldPrice: 14500,
    rating: 4.8,
    reviewsCount: 29,
    inStock: true,
    stockCount: 9,
    badge: "16x Dahili PoE",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80",
    shortDesc: "16 adet bağımsız PoE portu ile doğrudan tak-çalıştır kamera bağlantısı, 2x 10TB HDD desteği ve H.265+ ultra sıkıştırma algoritması.",
    specs: {
      "Kanal Sayısı": "16 Kanal 4K Akıllı IP Kamera",
      "PoE Arayüzü": "16x 10/100 Mbps Bağımsız PoE",
      "Bant Genişliği": "160 Mbps Giriş / 160 Mbps Çıkış",
      "HDD Yuvası": "2x SATA Portu (2x 10TB'a kadar)",
      "Video Çıkışı": "1x HDMI (4K), 1x VGA"
    },
    isFeatured: true
  },
  {
    id: "prod-sw-04",
    name: "Cisco Business 24 Port Gigabit PoE+ Yönetilebilir Ağ Switch",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 16800,
    oldPrice: 19200,
    rating: 4.9,
    reviewsCount: 21,
    inStock: true,
    stockCount: 7,
    badge: "Kurumsal Standart",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    shortDesc: "24 Gigabit PoE+ port (195W güç bütçesi) ve 4x Gigabit SFP fiber yuvası ile kurumsal ağ omurgalarının vazgeçilmez anahtarı.",
    specs: {
      "Portlar": "24x 10/100/1000 Gigabit PoE+ RJ45",
      "Uplink": "4x Gigabit SFP Fiber Yuvası",
      "PoE Bütçesi": "195 Watt Toplam Güç",
      "Yönetim": "Web GUI, CLI, SNMP, VLAN, QoS",
      "Kasa Tipi": "1U Rack Tipi 19 inç Kabinet Montaj"
    },
    isFeatured: true
  },
  {
    id: "prod-3d-05",
    name: "Trakyacomputing Pro 3D Direk & Köşe Kamera Braketi",
    category: "3d-cozumler",
    categoryLabel: "3D Özel Çözümler",
    price: 650,
    oldPrice: 850,
    rating: 5.0,
    reviewsCount: 64,
    inStock: true,
    stockCount: 85,
    badge: "Özel Üretim",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Kamera montajında standart vidaların oturmadığı direk ve kolonlar için karbon takviyeli PETG filament ile basılmış yüksek mukavemetli braket.",
    specs: {
      "Malzeme": "Karbon Fiber Takviyeli PETG Plastik",
      "Hava Dayanımı": "-30°C / +85°C UV Korumalı",
      "Uyumluluk": "Hikvision, Dahua, Uniview Tüm Standart Kameralar",
      "Taşıma Kapasitesi": "12 Kg Test Edilmiş Statik Yük",
      "Montaj": "Çelik Kelepçe veya Dübel Kanalları Dahil"
    },
    isFeatured: true
  },
  {
    id: "prod-ram-06",
    name: "Kingston Server Premier 64GB DDR5 4800MHz ECC Reg RAM",
    category: "sunucu",
    categoryLabel: "Sunucu & Donanım",
    price: 11200,
    oldPrice: 12500,
    rating: 4.9,
    reviewsCount: 16,
    inStock: true,
    stockCount: 18,
    badge: "Enterprise",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Veri merkezleri, sanallaştırma ve kurumsal sunucu altyapıları için hata düzeltmeli (ECC) kayıtlı endüstri standardı bellek modülü.",
    specs: {
      "Kapasite": "64 GB (1x 64GB Tek Modül)",
      "Bellek Tipi": "DDR5 ECC Registered DIMM",
      "Frekans": "4800 MHz (PC5-38400)",
      "Gecikme": "CL40 (1.1V Düşük Güç)",
      "Garanti": "Ömür Boyu Kingston Garantisi"
    },
    isFeatured: false
  },
  {
    id: "prod-3d-07",
    name: "19'' 1U Rackmount Mini-PC / NVR Çiftli Montaj Kızağı",
    category: "3d-cozumler",
    categoryLabel: "3D Özel Çözümler",
    price: 890,
    oldPrice: 1100,
    rating: 4.8,
    reviewsCount: 31,
    inStock: true,
    stockCount: 40,
    badge: "Tasarım Ödüllü",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Sistem kabinetlerinde masaüstü tipi mini PC veya kompakt kayıt cihazlarını düzenli 1U alanına kilitleyen özel hava kanallı 3D kızak.",
    specs: {
      "Boyut": "19 inç Standart 1U Rack Kızağı",
      "Kapasite": "2 Adet Mini PC veya 1 NVR + Güç Adaptörü",
      "Malzeme": "Yangın Geciktirici ABS/PETG Kompozit",
      "Hava Akışı": "Petek Dokulu Yan Havalandırma Kanalları",
      "Kablo Yönetimi": "Entegre Cırt Cırt ve Kelepçe Yuvaları"
    },
    isFeatured: true
  },
  {
    id: "prod-rt-08",
    name: "MikroTik Cloud Router Switch 10Gbps SFP+ Profesyonel Ağ Yönlendirici",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 14200,
    oldPrice: 15900,
    rating: 4.9,
    reviewsCount: 19,
    inStock: true,
    stockCount: 6,
    badge: "10G Fiber",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Trakya bölgesindeki fabrikalar için yüksek hızlı fiber internet dağıtımı, çoklu WAN yük dengeleme ve gelişmiş güvenlik duvarı.",
    specs: {
      "İşlemci": "Dual Core 800MHz + Donanımsal Switch Çipi",
      "Fiber Portlar": "2x 10G SFP+ Yuvası",
      "Ethernet": "8x Gigabit RJ45 Port",
      "İşletim Sistemi": "Dual Boot: RouterOS (L5) / SwOS",
      "Kullanım": "Hotspot, VLAN, IPSec VPN, QoS, Firewall"
    },
    isFeatured: false
  }
];
