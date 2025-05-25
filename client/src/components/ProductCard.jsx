import { useState } from "react";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative group bg-white rounded-xl shadow-md overflow-hidden h-64 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-2/3 object-cover transition-all duration-500 group-hover:h-full"
        />

        {/* Contenu en bas */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 px-4 py-2 bg-white/90 z-10 transition-opacity duration-500 group-hover:opacity-0">
          <h2 className="text-lg font-semibold text-[#5e3c2f]">{product.name}</h2>
          <p className="text-gray-600">{product.price} €</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain rounded shadow-lg"
          />
        </div>
      )}
    </>
  );
}
