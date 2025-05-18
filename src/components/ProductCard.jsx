import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[#e4d3c3]">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-[#3c2f2f]">{product.name}</h2>
        <p className="text-lg text-[#aa856a] font-medium">{product.price} €</p>
      </div>
    </div>
  );
}
