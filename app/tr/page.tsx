import { ProductList } from "@/components/organisms/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calvero - Lüks Ürünler ve Aksesuarlar",
  description: "En yeni lüks saatler, çantalar ve ayakkabı koleksiyonunu keşfedin. Kalite ve zarafet bir arada.",
  keywords: ["lüks saat", "tasarım çanta", "klasik ayakkabı", "Calvero ürünleri", "online mağaza"],
  openGraph: {
    title: "Calvero - Lüks Ürünler ve Aksesuarlar",
    description: "En yeni lüks saatler, çantalar ve ayakkabı koleksiyonunu keşfedin. Kalite ve zarafet bir arada.",
    url: "https://calvero.club/tr", 
    type: "website",
    images: [
      {
        url: "/calvero-og-tr.jpg", 
        width: 1200,
        height: 630,
        alt: "Calvero landing page görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calvero - Lüks Ürünler ve Aksesuarlar",
    description: "En yeni lüks saatler, çantalar ve ayakkabı koleksiyonunu keşfedin. Kalite ve zarafet bir arada.",
    images: ["/calvero-og-tr.jpg"], 
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calvero Landing Page",
    "description": "Lüks ürünler ve aksesuarlar için Calvero online mağazası.",
    "url": "https://calvero.club/tr",
  };
  return (
    <main>
      <h1 className="text-4xl text-center font-bold mt-8">Ürünlerimiz</h1>
      <ProductList />
    </main>
  );
}