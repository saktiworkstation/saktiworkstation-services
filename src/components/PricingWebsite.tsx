import React from 'react';

const plans = [
  {
    name: "Personal",
    description: "Pilihan terbaik untuk penggunaan pribadi & untuk proyek Anda berikutnya.",
    price: "Rp. 50K",
    unit: "/halaman",
    features: [
      "Halaman responsive",
      "Akses terhadap kode",
      "Revisi: 1 Kali",
      "Pemeliharaan jika online: 1 Tahun",
      "Form ke Email: 1 Form"
    ]
  },
  {
    name: "Ekonomi",
    description: "Relevan untuk dukungan lanjutan dan premium.",
    price: "Rp. 300k",
    unit: "/5 halaman",
    features: [
      "Halaman responsive",
      "Akses terhadap kode",
      "Optimasi kecepatan",
      "Revisi: 3 Kali",
      "Pemeliharaan jika online: 1 Tahun",
      "Form ke Email: 3 Form"
    ]
  },
  {
    name: "Enterprise",
    description: "Terbaik untuk penggunaan skala besar dan hak distribusi ulang yang diperluas.",
    price: "Rp. 1jt",
    unit: "/tabel database",
    features: [
      "Halaman responsive",
      "Akses terhadap kode",
      "Framework Laravel",
      "Payment Gateway",
      "Revisi: 3 Kali",
      "Pemeliharaan jika online: 1 Tahun",
      "Database: MongoDB,MYSQL"
    ]
  }
];

export default function PricingWebsite() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Layanan Pembuatan Website
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Kami telah merancang layanan kami secara khusus untuk memenuhi kebutuhan Anda, mendukung pengembangan potensi yang Anda
            miliki agar dapat mencapai hasil yang maksimal.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{plan.description}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{plan.unit}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left ml-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/6285336925308" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}