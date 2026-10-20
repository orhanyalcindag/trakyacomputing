/**
 * Trakyacomputing - Tamamlanan Projeler & Vaka Analizleri
 * Bölgesel referanslar ve kurumsal başarı hikayeleri
 */

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: "ag-guvenlik" | "yazilim" | "3d-cozumler" | "butunlesik";
  categoryLabel: string;
  summary: string;
  fullStory: string;
  scope: string[];
  results: string[];
  year: string;
  image: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-osb-fabrika",
    title: "Lüleburgaz OSB Otomotiv Yan Sanayi Bütünleşik Güvenlik & Ağ Projesi",
    client: "Trakya Otomotiv Parça A.Ş.",
    location: "Lüleburgaz Organize Sanayi Bölgesi",
    category: "butunlesik",
    categoryLabel: "Bütünleşik Çözüm",
    summary: "45.000 m² üretim ve açık depolama sahasının 64 adet 4K AI kamera, yedekli fiber omurga ve özel 3D montaj aparatları ile donatılması.",
    fullStory: "Müşterimiz geniş açık alan ve yüksek titreşimli üretim hatlarında standart kameraların kör noktalarda kalması ve ağ kesintileri yaşaması sebebiyle bize başvurdu. Trakyacomputing ekibi olarak 10 Gigabit fiber ring omurga kurduk, 64 adet Hikvision DarkFighter IP kamera yerleştirdik ve boru direklerine özel 3D karbon takviyeli braketler bastık.",
    scope: [
      "64 Adet 4K Yapay Zekalı IP Güvenlik Kamerası",
      "2 Adet 32 Kanal 4K Yedekli NVR Kayıt Sunucusu",
      "4.5 km Çelik Zırhlı Fiber Optik Kablolama & Sonlandırma",
      "Özel 3D Basım UV Dayanımlı Direk Kelepçeleri"
    ],
    results: [
      "%99.98 Kesintisiz Ağ Erişimi",
      "Sıfır Kör Nokta Güvenlik Denetimi",
      "Fabrika İçi Yıllık Kayıp/Hasar Olaylarında %85 Düşüş",
      "Yerel Ekiple 15 Dakikada Arıza Müdahalesi"
    ],
    year: "2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-depo-erp",
    title: "Çorlu Tekstil & İhracat Depo Takip ve ERP Entegrasyonu",
    client: "Rumeli Tekstil İhracat Ltd.",
    location: "Çorlu / Tekirdağ",
    category: "yazilim",
    categoryLabel: "Özel Yazılım",
    summary: "ASP.NET Core ve React ile geliştirilen, el terminalleri ve barkod sistemleriyle entegre çalışan gerçek zamanlı depo lojistik otomasyonu.",
    fullStory: "10.000'den fazla kumaş rulosunun günlük giriş çıkışının elle takip edilmesi ciddi sevkiyat gecikmelerine neden oluyordu. Trakyacomputing yazılım departmanı, firmanın mevcut muhasebe yazılımına çift yönlü bağlanan, el terminalleriyle okutulan QR/Barkod sistemli ve Next.js tabanlı modern yönetim paneline sahip depo yazılımını 6 haftada canlıya aldı.",
    scope: [
      "ASP.NET Core Web API ve Mikroservis Mimarisi",
      "React/TypeScript Tabanlı Hızlı Sevkiyat Portalı",
      "Android El Terminali Uygulaması Entegrasyonu",
      "Gerçek Zamanlı Stok ve Kritik Eşik SMS/Mail Uyarıları"
    ],
    results: [
      "Sevkiyat Hazırlama Süresinde %60 Hızlanma",
      "Kayıp Stok ve Hatalı Gönderim Oranında Sıfıra Yakın Sonuç",
      "Canlı Dashboard ile Yönetimsel Şeffaflık"
    ],
    year: "2024",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-tarim-iot",
    title: "Kırklareli Akıllı Çiftlik & Soğuk Hava Deposu İzleme",
    client: "Istranca Doğal Ürünler Çiftliği",
    location: "Kırklareli Merkez",
    category: "3d-cozumler",
    categoryLabel: "IoT & 3D Çözüm",
    summary: "Nem, sıcaklık ve elektrik kesintilerini anlık bildiren IoT sensör istasyonları ve zorlu tarla koşullarına özel 3D koruma kutuları.",
    fullStory: "Geniş meyve bahçeleri ve soğuk hava depolarında ürünlerin don riskine karşı korunması için geliştirilen projede, kablosuz LoRaWAN sensörleri özel 3D baskı su geçirmez IP68 kutular içerisine yerleştirildi. Kritik sıcaklık aşımlarında mobil bildirim ve sesli siren devreye giren bütünleşik bir sistem teslim edildi.",
    scope: [
      "18 Noktada Kablosuz Sıcaklık & Nem Sensör Düğümü",
      "Güneş Paneli Uyumlu Özel 3D Tasarım Muhafaza Kutuları",
      "Yedekli GSM Hatlı Alarm & Bildirim Ünitesi",
      "Web ve Mobil Takip Ekranları"
    ],
    results: [
      "Soğuk Hava Bozulma Risklerinin Sıfırlanması",
      "Dış Ortam Koşullarına Karşı 3 Yıl Dayanıklı Muhafaza",
      "Çiftlik Genelinde 7/24 Kesintisiz Takip"
    ],
    year: "2023",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-edirne-lojistik",
    title: "Edirne Uluslararası Lojistik Üssü Ağ & Siber Güvenlik Altyapısı",
    client: "Serhat Uluslararası Lojistik",
    location: "Kapıkule / Edirne",
    category: "ag-guvenlik",
    categoryLabel: "Ağ & Güvenlik",
    summary: "TIR parkı ve gümrükleme ofisleri için yüksek hızlı WiFi kapsama alanı, siber güvenlik duvarı ve PoE omurga yapılandırması.",
    fullStory: "Kapıkule sınır hattına yakın lojistik üssünde günlük yüzlerce TIR şoförü ve gümrük müşavirinin eş zamanlı bağlandığı ağda siber güvenlik tehditleri ve kopmalar engellendi. Cisco ağ switch'leri ve MikroTik güvenlik duvarı ile kurumsal ağ misafir ağından tamamen izole edildi.",
    scope: [
      "Cisco Yönetilebilir Gigabit PoE+ Switch Kurulumu",
      "Dış Ortam Yüksek Güçlü Mesh WiFi Erişim Noktaları",
      "Donanımsal Firewall ve KVKK Uyumlu 5651 Loglama",
      "Kesintisiz Güç Kaynağı ve Kabinet İyileştirmesi"
    ],
    results: [
      "Eşzamanlı 400+ Cihaz Kesintisiz Bağlantı Kapasitesi",
      "5651 Sayılı Kanuna Tam Hukuki Uyum",
      "Bölgesel Destek Güvencesi"
    ],
    year: "2023",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
  }
];
