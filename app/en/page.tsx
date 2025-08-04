import { ProductList } from "@/components/organisms/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calvero - Luxury Products and Accessories",
  description: "Discover the latest collection of luxury watches, bags, and shoes. Where quality meets elegance.",
  keywords: ["luxury watch", "designer bag", "classic shoes", "Calvero products", "online store"],
  openGraph: {
    title: "Calvero - Luxury Products and Accessories",
    description: "Discover the latest collection of luxury watches, bags, and shoes. Where quality meets elegance.",
    url: "https://calvero.club/en", 
    type: "website",
    images: [
      {
        url: "/calvero-og-en.jpg", 
        width: 1200,
        height: 630,
        alt: "Calvero landing page image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calvero - Luxury Products and Accessories",
    description: "Discover the latest collection of luxury watches, bags, and shoes. Where quality meets elegance.",
    images: ["/calvero-og-en.jpg"], // Twitter kart görseli
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calvero Landing Page",
    "description": "Calvero online store for luxury products and accessories.",
    "url": "https://calvero.club/en",
  };
  return (
    <main>
      <h1 className="text-4xl text-center font-bold mt-8">Our Products</h1>
      <ProductList />
    </main>
  );
}