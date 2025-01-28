import React from 'react';

const products = [
  {
    title: "Data Analytics Dashboard",
    description: "Dashboard interaktif untuk visualisasi data bisnis Anda. Dilengkapi dengan fitur analisis real-time dan laporan otomatis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    price: "Rp. 2.500.000"
  },
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce lengkap dengan sistem manajemen produk, keranjang belanja, dan gateway pembayaran.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
    price: "Rp. 5.000.000"
  },
  {
    title: "Machine Learning Model",
    description: "Model machine learning kustom untuk prediksi dan analisis data bisnis Anda dengan akurasi tinggi.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    price: "Rp. 7.500.000"
  }
];

export default function Products() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Products
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Solusi teknologi terbaik untuk mengembangkan bisnis Anda
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg dark:bg-gray-800 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {product.price}
                  </span>
                  <a
                    href="https://wa.me/6285336925308"
                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}