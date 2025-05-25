'use client';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/home.jpg')" }}
    >
      <div className="bg-none text-white p-8 rounded shadow text-center drop-shadow-lg max-w-3xl px-6 py-12">
        <h1 className="text-5xl font-serif font-bold mb-6 tracking-wide drop-shadow-lg">
          TARCHA Jewelry
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Discover timeless elegance and handcrafted beauty.<br />
          Explore our exclusive collection of fine jewelry.
        </p>
        <button
          onClick={() => window.location.href = '/shop'}
          className="px-8 py-3 bg-amber-600 hover:bg-amber-700 transition rounded-md text-white font-semibold shadow-lg drop-shadow-md"
        >
          Shop Now
        </button>
      </div>
    </main>
  );
}
