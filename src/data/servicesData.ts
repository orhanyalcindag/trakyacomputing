/**
 * Trakyacomputing - Kurumsal Hizmetler Veri Modeli
 * Bütünleşik BT Çözümleri Ajansı konseptine uygun 4 temel uzmanlık alanı
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "Code" | "ShieldCheck" | "Server" | "Cpu" | "Layers";
  badge: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  regionalAdvantage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "yazilim-otomasyon",
    title: "Yazılım & Kurumsal Otomasyon",
    shortDesc: "C#, ASP.NET Core, React ve Next.js tabanlı yüksek performanslı kurumsal otomasyonlar ve web uygulamaları.",
    fullDesc: "İşletmenizin operasyonel verimliliğini artırmak için modern yazılım mimarileriyle özel ERP, CRM, stok takip ve B2B portal çözümleri geliştiriyoruz. Güvenli API entegrasyonları, gerçek zamanlı veri analitiği ve ölçeklenebilir bulut mimarileri sunuyoruz.",
    iconName: "Code",
    badge: "Özel Geliştirme",
    technologies: ["C#", "ASP.NET Core", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    features: [
      "Kuruma özel iş akış ve süreç otomasyonları",
      "Modern ve responsive web yönetim panelleri",
      "Mikroservis ve RESTful API mimarileri",
      "Gerçek zamanlı raporlama ve dashboard sistemleri",
      "Mevcut muhasebe ve ERP sistemlerine tam entegrasyon"
    ],
    deliverables: [
      "Kaynak kod teslimi ve dokümantasyon",
      "Kullanıcı ve yönetici eğitimleri",
      "1 yıl yerinde ve uzaktan garanti & bakım",
      "Düzenli güvenlik ve performans güncellemeleri"
    ],
    regionalAdvantage: "Trakya bölgesindeki fabrikalar ve işletmeler için yerinde analiz ve yüz yüze proje yönetimi."
  },
  {
    id: "ag-guvenlik-sistemleri",
    title: "Ağ ve Güvenlik Sistemleri",
    shortDesc: "IP Kamera (Hikvision/Dahua), NVR kayıt sistemleri ve profesyonel yapısal ağ (Switch/Router/Fiber) kurulumları.",
    fullDesc: "Fabrika, depo, ofis ve ticari binalarınız için uçtan uca fiziksel ve siber güvenlik altyapıları kuruyoruz. 4K akıllı analitikli IP kameralar, yapay zeka destekli hareket algılama, yedekli omurga ağları ve güvenli uzaktan erişim imkanı sağlıyoruz.",
    iconName: "ShieldCheck",
    badge: "Anahtar Teslim Altyapı",
    technologies: ["Hikvision", "Dahua", "Cisco", "MikroTik", "Ubiquiti UniFi", "Fiber Optik", "Cat6A/Cat7"],
    features: [
      "4K/Ultra HD Akıllı Analitikli IP Kamera Projelendirmesi",
      "Yüksek kapasiteli NVR/Storage video kayıt altyapısı",
      "Endüstriyel Gigabit PoE Switch ve Router konfigürasyonu",
      "Fiber optik sonlandırma ve OTDR test raporlaması",
      "Güvenli VPN, VLAN segmentasyonu ve Firewall (Güvenlik Duvarı)"
    ],
    deliverables: [
      "Kablo etiketleme ve ağ topoloji haritası",
      "Mobil/Masaüstü uzaktan canlı izleme yazılımı kurulumu",
      "Kesintisiz güç kaynağı (UPS) entegrasyonu",
      "Periyodik bakım ve lens/sensör kalibrasyonu"
    ],
    regionalAdvantage: "Lüleburgaz ve çevre ilçelerde 30 dakika içinde yerinde arıza müdahale garantisi."
  },
  {
    id: "donanim-e-ticaret",
    title: "Donanım & E-Ticaret Tedariği",
    shortDesc: "Kurumsal ve bireysel bilgisayar parçaları, yüksek performanslı bileşenler ve sunucu donanımları satışı.",
    fullDesc: "En son nesil işlemciler, anakartlar, kurumsal depolama üniteleri ve sunucu bileşenlerini doğrudan yetkili distribütör garantisiyle temin ediyoruz. İhtiyacınıza en uygun donanım konfigürasyonunu belirleyip test edilmiş olarak teslim ediyoruz.",
    iconName: "Server",
    badge: "Orijinal Distribütör Garantili",
    technologies: ["Intel Xeon", "AMD EPYC", "ASUS Workstation", "Kingston Enterprise", "Seagate IronWolf", "Synology NAS"],
    features: [
      "Masaüstü, iş istasyonu ve sunucu donanım tedariği",
      "Yüksek hızlı NVMe kurumsal SSD ve NAS depolama",
      "ECC kayıtlı bellekler (RAM) ve yedekli güç kaynakları",
      "Termal analiz ve profesyonel donanım montajı",
      "Eski donanımların modernizasyonu ve hızlandırılması"
    ],
    deliverables: [
      "Stres testi ve performans benchmark raporları",
      "2 ila 5 yıl resmi distribütör garantisi",
      "Lüleburgaz ve çevresine elden aynı gün teslimat seçeneği",
      "Ücretsiz ilk montaj ve işletim sistemi kurulumu"
    ],
    regionalAdvantage: "Yerel depomuzdan hızlı kargo veya ofisimizden doğrudan teslim alma olanağı."
  },
  {
    id: "3d-ozel-cozumler",
    title: "3D Özel Çözümler & Saha Aparatları",
    shortDesc: "Saha kurulumları için özel tasarlanmış, 3D yazıcı ile üretilen plastik aparatlar ve montaj çözümleri.",
    fullDesc: "Standart montaj ayaklarının yetersiz kaldığı direk, köşe, asma tavan veya dar panolarda saha mühendislerimiz tarafından CAD ortamında özel tasarlanan UV ve hava şartlarına dayanıklı PETG/ABS plastik montaj braketleri üretiyoruz.",
    iconName: "Cpu",
    badge: "Özel Tasarım & Üretim",
    technologies: ["Endüstriyel 3D Baskı", "PETG Karbon Katkılı", "ABS / ASA Dış Ortam", "Autodesk Fusion 360", "SolidWorks"],
    features: [
      "Kamera direk ve boru geçiş braketleri",
      "NVR ve Mini-PC için 19 inç kabinet kızakları",
      "Ağ switch'leri için özel kablo düzenleme tırnakları",
      "Güneş ve yağmur siperlikleri (IP66 uyumlu ilave koruma)",
      "Titreşim emici esnek TPU conta ve montaj contaları"
    ],
    deliverables: [
      "Milimetrik ölçüye özel CAD tasarımı",
      "Yüksek mukavemetli darbe ve UV dayanım garantisi",
      "Hızlı prototipleme (24 saatte numune üretim)",
      "Toplu üretim imkanı"
    ],
    regionalAdvantage: "Montaj yapılacak yere bizzat gelerek 3D lazer tarama ve ölçü alma hizmeti."
  }
];
