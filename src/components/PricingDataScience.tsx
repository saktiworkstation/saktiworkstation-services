import React from 'react';

const plans = [
  {
    name: "Paket Starter",
    description: "Cocok untuk: Usaha kecil yang membutuhkan insight dasar dari data milik anda.",
    price: "Rp. 150K",
    features: [
      "Analisis data eksploratif dasar",
      "Visualisasi data sederhana",
      "Laporan hasil dalam format PDF",
      "Waktu Pengerjaan: 1 Minggu"
    ]
  },
  {
    name: "Paket Professional",
    description: "Cocok untuk: Perusahaan menengah yang ingin meningkatkan kinerja melalui data.",
    price: "Rp. 300k",
    features: [
      "Analisis data mendalam",
      "Visualisasi data interaktif",
      "Pembuatan model prediktif dasar",
      "Laporan lengkap dengan rekomendasi bisnis",
      "Kode Analisis, yang dapat dimanfaatkan untuk analisis berkelajutan",
      "Waktu Pengerjaan: 2-3 Minggu"
    ]
  },
  {
    name: "Paket Edukasi (Khusus Pelajar dan Mahasiswa)",
    description: "Cocok untuk: Siswa atau mahasiswa yang membutuhkan dukungan dalam tugas atau penelitian.",
    price: "Rp. 200k",
    features: [
      "Bantuan analisis data untuk proyek atau penelitian",
      "Konsultasi metode dan teknik data mining",
      "Laporan analisis mendalam",
      "Kode Analisis, yang dapat dimanfaatkan untuk analisis berkelajutan",
      "Diskon khusus untuk institusi pendidikan",
      "Waktu Pengerjaan: 1-4 Minggu"
    ]
  }
];

export default function PricingDataScience() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Layanan Data Mining & Data Science
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