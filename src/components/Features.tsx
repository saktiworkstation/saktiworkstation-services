import React from 'react';
import { BarChart3, GraduationCap, Lock, DollarSign, LayoutList, Settings } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Profesional",
    description: "Didukung oleh ahli data science berpengalaman. Kami akan membantu anda untuk mengembangkan potensi anda semaksimal mungkin."
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Dukungan Edukasi",
    description: "Pendekatan yang ramah pelajar dengan penjelasan yang mudah dipahami."
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Kerahasiaan Data Terjamin",
    description: "Data Anda aman dengan standar keamanan tinggi."
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Harga Terjangkau",
    description: "Kami berfokus mengembangkan potensi terpendam anda, dengan harga yang terjangka dan dapat nego, tentunya juga akan menjangkau lebih banyak potensi."
  },
  {
    icon: <LayoutList className="w-5 h-5" />,
    title: "Laporan Terstruktur",
    description: "Kami merancang laporan analisis data sebaik mungkin, dan dapat dimengerti sebaik mungkin, dan penambahan edukasi terhadap digital bidang data."
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Efisiensi",
    description: "Kami terus berkembang agar terus bisa membantu anda untuk meningkatkan pertumbuhan potensi anda"
  }
];

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Keunggulan Layanan Kami:
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Kami terus mengembangkan dan menyesuaikan layanan kami dengan keperluan dan kebutuhan konsumen kami.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <div className="text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}