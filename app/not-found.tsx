import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold">404 - Sayfa Bulunamadı</h2>
      <p className="mt-4 text-lg">Aradığınız sayfa mevcut değil.</p>
      <Link href="/tr" className="mt-6 text-blue-500 hover:underline">
        Anasayfaya Dön
      </Link>
    </div>
  );
}