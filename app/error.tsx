'use client'; // Bu dosya client bileşeni olmalı

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold">500 - Bir Hata Oluştu</h2>
      <p className="mt-4 text-lg">Üzgünüz, bir şeyler ters gitti.</p>
      <button onClick={() => reset()} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Tekrar Dene
      </button>
    </div>
  );
}