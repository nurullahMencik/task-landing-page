import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LanguageSelectorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Select Your Language</h1>
      <div className="flex gap-4">
        <Link href="/en">
          <Button size="lg">English</Button>
        </Link>
        <Link href="/tr">
          <Button size="lg">Türkçe</Button>
        </Link>
      </div>
    </div>
  );
}