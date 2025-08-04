import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToFavorites: () => void;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  onAddToFavorites,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <Card className="w-[350px]">
      <CardHeader className="relative h-[200px]">
        <Image
          src={imageUrl}
          alt={name}
          fill // Bu özellik sayesinde width ve height vermeye gerek kalmaz
          className="rounded-md object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Boyut optimizasyonu için
          priority
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
        <div className="text-2xl font-bold mt-4">${price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onAddToFavorites}>Add to Favorites</Button>
      </CardFooter>
    </Card>
    </motion.div>
  );
}
