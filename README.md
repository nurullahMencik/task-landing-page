Calvero Landing Page (Frontend Developer Test Case)
Bu proje, bir Frontend geliştirme test senaryosu kapsamında Next.js 15+ kullanılarak geliştirilmiş, çok dilli bir ürün açılış sayfasıdır.

🚀 Projenin Canlı Adresi
[[Canlı Linki Buraya Girin]](https://task-landing-page-lac.vercel.app)

Kullanılan Teknolojiler
Frontend Framework: Next.js (App Router)

State Management: Redux Toolkit

UI Kütüphanesi: Tailwind CSS ve shadcn/ui

Animasyon: Framer Motion

Dil: TypeScript

Kod Kalitesi: ESLint ve Prettier

Veri Kaynağı: Mock JSON dosyaları (API yapısı referans alınmıştır)

Mimari ve Proje Dizini
Proje, okunabilirliği ve sürdürülebilirliği artırmak amacıyla Atomic Design prensiplerine göre yapılandırılmıştır.
├── app/                        # Next.js App Router yapısı
│   ├── tr/page.tsx             # Türkçe ürün sayfası
│   ├── en/page.tsx             # İngilizce ürün sayfası
│   ├── layout.tsx              # Uygulamanın ana düzeni
│   └── page.tsx                # Dil seçme sayfası (root)
├── components/                 # Uygulama genelinde kullanılan bileşenler
│   ├── atoms/                  # En küçük bileşenler (buton, toggle vb.)
│   ├── molecules/              # Atomların birleşimi (ürün kartı)
│   ├── organisms/              # Moleküllerin birleşimi (ürün listesi)
│   └── layouts/                # Genel sayfa düzeni bileşenleri
├── data/                       # Uygulama verilerinin sahte JSON dosyaları
├── lib/                        # Yardımcı fonksiyonlar ve Redux store
│   ├── hooks/
│   │   └── use-theme.ts        # Koyu mod için custom hook
│   └── store/
│       ├── favoritesSlice.ts   # Favoriler için Redux slice
│       └── store.ts            # Redux store konfigürasyonu
├── public/                     # Statik dosyalar (görseller, sitemap.xml, robots.txt)
├── package.json
└── README.md

Ekstra Özellikler
Çoklu Dil Desteği: Sayfanın girişinde kullanıcı tarafından dil seçimi yapılabilir.

Koyu Mod: Temel UI, koyu ve açık mod arasında geçiş yapma özelliğine sahiptir.

Animasyon: Framer Motion kullanılarak sayfa geçişleri ve bileşen girişleri animasyonludur.

SEO Optimizasyonu: Dinamik meta verileri, OpenGraph, Twitter kartları ve JSON-LD yapısal verileri her sayfaya özel olarak eklenmiştir

👤 Geliştirici
Ad Soyad: Nurullah Mencik
e-mail:nurullahmencik42@gmail.com
GitHub: https://github.com/nurullahMencik
