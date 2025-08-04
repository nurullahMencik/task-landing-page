"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductCard } from "@/components/molecules/ProductCard";
import { addToFavorites } from "@/lib/store/favoritesSlice";


import productsData from "@/data/products.json";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    // Şimdilik mock JSON dosyasını kullanıyoruz.
    setProducts(productsData);
  }, []);

  const handleAddToFavorites = (product: Product) => {
    dispatch(addToFavorites(product));
    alert(`${product.name} added to favorites!`);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          onAddToFavorites={() => handleAddToFavorites(product)}
        />
      ))}
    </div>
  );
}