import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No products available.</p>;
  }

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
