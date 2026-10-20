/**
 * Trakyacomputing - E-Ticaret Donanım & Parça Veri Modeli
 * Saha kurulumları, kurumsal BT altyapıları ve endüstriyel tesisler için test edilmiş orijinal donanımlar
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
    name: "ASUS ROG STRIX B760-F Gaming WiFi DDR5 Anakart",
    category: "donanim",
    categoryLabel: "Donanım & Parça",
    price: 9450,
    oldPrice: 10800,
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    stockCount: 14,
    badge: "Çok Satan",
    image: "/products/anakart.svg",
    shortDesc: "Intel LGA1700 soket, PCIe 5.0, DDR5 7800+ MHz ve WiFi 6E desteği ile kurumsal iş istasyonları ve üst seviye PC'ler için mükemmel seçim.",
    specs: {
      "Soket Tipi": "LGA 1700 (14. & 13. Nesil Intel Core)",
      "Bellek Desteği": "4x DDR5 7800+ MHz (OC) 192GB Max",
      "Genişleme Yuvası": "1x PCIe 5.0 x16 SafeSlot",
      "Depolama": "3x M.2 PCIe 4.0 NVMe Soğutuculu",
      "Ağ": "Intel 2.5Gb Ethernet & WiFi 6E Antenli"
    },
    isFeatured: true
  },
  {
    id: "prod-cam-02",
    name: "Hikvision AcuSense 8MP 4K DarkFighter IP Bullet Güvenlik Kamerası",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 4850,
    oldPrice: 5600,
    rating: 5.0,
    reviewsCount: 52,
    inStock: true,
    stockCount: 28,
    badge: "AI Destekli",
    image: "/products/kamera.svg",
    shortDesc: "Yapay zeka derin öğrenme insan/araç sınıflandırması, gece tam renkli DarkFighter teknolojisi ve IP67 dış ortam korumalı profesyonel güvenlik kamerası.",
    specs: {
      "Çözünürlük": "8 Megapiksel 4K UltraHD (3840 x 2160)",
      "Lens": "2.8mm Geniş Açı (107° yatay görüş)",
      "Gece Görüşü": "60 Metre EXIR IR + DarkFighter Sensör",
      "Koruma Sınıfı": "IP67 Su/Toz & IK10 Darbe Sertifikası",
      "Besleme": "PoE (802.3af) / 12V DC Dahili Mikrofon"
    },
    isFeatured: true
  },
  {
    id: "prod-nvr-03",
    name: "Hikvision 16 Kanal 4K UltraHD Akıllı PoE NVR Kayıt Sunucusu",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 12900,
    oldPrice: 14500,
    rating: 4.8,
    reviewsCount: 29,
    inStock: true,
    stockCount: 9,
    badge: "16x Dahili PoE",
    image: "/products/nvr.svg",
    shortDesc: "16 adet bağımsız PoE portu ile doğrudan tak-çalıştır kamera bağlantısı, 2x 10TB HDD desteği ve H.265+ ultra bant genişliği tasarrufu sağlayan kayıt cihazı.",
    specs: {
      "Kanal Sayısı": "16 Kanal 4K Akıllı IP Kamera Eşzamanlı",
      "PoE Arayüzü": "16x 10/100 Mbps Bağımsız PoE RJ45",
      "Bant Genişliği": "160 Mbps Giriş / 160 Mbps Çıkış Kapasitesi",
      "HDD Yuvası": "2x SATA Portu (2x 10TB = 20TB Max)",
      "Video Çıkışı": "1x HDMI (4K 3840x2160), 1x VGA"
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
    image: "/products/switch.svg",
    shortDesc: "24 Gigabit PoE+ port (195W güç bütçesi) ve 4x Gigabit SFP fiber yuvası ile kurumsal ağ omurgalarının kesintisiz anahtarı.",
    specs: {
      "Portlar": "24x 10/100/1000 Gigabit PoE+ RJ45",
      "Uplink": "4x Gigabit SFP Fiber Yuvası",
      "PoE Bütçesi": "195 Watt Toplam Güç Beslemesi",
      "Yönetim": "Web GUI, CLI, SNMP, VLAN, QoS, Port Mirroring",
      "Kasa Tipi": "1U Rack Tipi 19 inç Kabinet Montaj Kiti Dahil"
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
    image: "/products/braket.svg",
    shortDesc: "Kamera montajında standart vidaların oturmadığı direk, boru ve kolonlar için karbon takviyeli PETG kompozit filament ile basılmış yüksek mukavemetli braket.",
    specs: {
      "Malzeme": "Karbon Fiber Takviyeli Endüstriyel PETG Plastik",
      "Hava Dayanımı": "-35°C / +85°C UV & Yağmur Korumalı",
      "Uyumluluk": "Hikvision, Dahua, Uniview Tüm Standart Kameralar",
      "Taşıma Kapasitesi": "15 Kg Test Edilmiş Statik Rüzgar Yükü",
      "Montaj": "Çelik Kelepçe veya Dübel Kanalları Dahil"
    },
    isFeatured: true
  },
  {
    id: "prod-ram-06",
    name: "Kingston Server Premier 64GB DDR5 4800MHz ECC Reg Sunucu RAM",
    category: "sunucu",
    categoryLabel: "Sunucu & Donanım",
    price: 11200,
    oldPrice: 12500,
    rating: 4.9,
    reviewsCount: 16,
    inStock: true,
    stockCount: 18,
    badge: "Enterprise",
    image: "/products/ram.svg",
    shortDesc: "Veri merkezleri, sanallaştırma ve kurumsal sunucu altyapıları için hata düzeltmeli (ECC) kayıtlı endüstri standardı bellek modülü.",
    specs: {
      "Kapasite": "64 GB (1x 64GB Tek Modül)",
      "Bellek Tipi": "DDR5 ECC Registered DIMM (RDIMM)",
      "Frekans": "4800 MHz (PC5-38400)",
      "Gecikme & Voltaj": "CL40 (1.1V Düşük Güç Tüketimi)",
      "Garanti": "Ömür Boyu Kingston Türkiye Distribütör Garantisi"
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
    image: "/products/rackmount.svg",
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
    image: "/products/router.svg",
    shortDesc: "Trakya bölgesindeki fabrikalar için yüksek hızlı fiber internet dağıtımı, çoklu WAN yük dengeleme ve gelişmiş donanımsal güvenlik duvarı.",
    specs: {
      "İşlemci": "Dual Core 800MHz + Donanımsal Switch Çipi",
      "Fiber Portlar": "2x 10G SFP+ Yuvası (10 Gigabit)",
      "Ethernet": "8x Gigabit RJ45 Port",
      "İşletim Sistemi": "Dual Boot: RouterOS (L5) / SwOS",
      "Kullanım": "Hotspot, VLAN, IPSec VPN, QoS, Firewall 5651"
    },
    isFeatured: false
  },
  {
    id: "prod-hdd-09",
    name: "Western Digital Purple Pro 8TB 7200RPM 256MB Güvenlik NVR Hard Diski",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 7850,
    oldPrice: 8900,
    rating: 5.0,
    reviewsCount: 44,
    inStock: true,
    stockCount: 22,
    badge: "7/24 Kesintisiz",
    image: "/products/hdd.svg",
    shortDesc: "Yapay zeka destekli NVR kayıt cihazları için 64 kameraya kadar kesintisiz 4K video yazma kapasitesine sahip kurumsal disk.",
    specs: {
      "Kapasite": "8 Terabayt (8000 GB)",
      "Dönüş Hızı": "7200 RPM",
      "Önbellek": "256 MB Cache",
      "İş Yükü": "Yılda 550 TB Veri Yazma Oranı",
      "Garanti": "5 Yıl Resmi Distribütör Birebir Değişim"
    },
    isFeatured: true
  },
  {
    id: "prod-wifi-10",
    name: "Ubiquiti UniFi 6 Pro Endüstriyel WiFi 6 Tavan Tipi Erişim Noktası",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    price: 6900,
    oldPrice: 7750,
    rating: 4.9,
    reviewsCount: 37,
    inStock: true,
    stockCount: 15,
    badge: "WiFi 6 Hızı",
    image: "/products/wifi.svg",
    shortDesc: "Geniş fabrika, depo ve ofis alanlarında 300+ eşzamanlı cihaz için 5.3 Gbps toplam bant genişliği sağlayan profesyonel PoE AP.",
    specs: {
      "Kablosuz Standart": "Wi-Fi 6 (802.11ax) Dual-Band",
      "Hız": "4.8 Gbps (5 GHz) + 573 Mbps (2.4 GHz)",
      "Kullanıcı Kapasitesi": "350+ Eşzamanlı Cihaz Bağlantısı",
      "Besleme": "PoE+ (802.3at) Ethernet Üzerinden Güç",
      "Yönetim": "UniFi Network Kontrolcü Merkezi Yönetim"
    },
    isFeatured: false
  }
];
