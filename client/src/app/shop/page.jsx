
"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors du chargement des produits");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Les données reçues ne sont pas valides.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger les produits.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <main className="px-6 py-14 max-w-7xl mx-auto bg-[#fdfaf6] min-h-screen">
      <h1 className="text-4xl font-serif text-center text-[#5e3c2f] mb-12 tracking-wide">
        Our Exclusive Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
