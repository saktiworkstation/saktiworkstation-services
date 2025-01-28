<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Choose Your Plan
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda
        </p>
      </div>
      <div class="grid gap-8 lg:grid-cols-3">
        <div v-for="(plan, index) in plans" :key="index" class="bg-white rounded-lg shadow-lg dark:bg-gray-800 overflow-hidden transform transition duration-500 hover:scale-105">
          <img 
            :src="plan.image" 
            :alt="plan.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ plan.title }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400 mb-6">
              {{ plan.description }}
            </p>
            <a
              href="https://wa.me/6285336925308"
              class="block w-full text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-3 dark:text-white dark:focus:ring-primary-900"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    title: "Basic Plan",
    description: "Paket lengkap untuk memulai perjalanan digital Anda. Termasuk konsultasi dan implementasi dasar.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Growth Plan",
    description: "Solusi komprehensif untuk bisnis yang berkembang. Dilengkapi dengan fitur analisis dan optimasi.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Enterprise Plan",
    description: "Solusi kustom untuk perusahaan besar dengan kebutuhan khusus dan dukungan prioritas.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2000"
  }
]
</script>