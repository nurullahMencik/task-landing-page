import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/layouts/StoreProvider";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... metadata ayarları
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="min-h-screen bg-background text-foreground">
            <header className="flex justify-end p-4">
              <ThemeToggle />
            </header>
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}