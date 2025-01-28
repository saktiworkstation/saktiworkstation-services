import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Plans from './components/Plans';
import PricingDataScience from './components/PricingDataScience';
import PricingWebsite from './components/PricingWebsite';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <Products />
        <Plans />
        <PricingDataScience />
        <PricingWebsite />
      </div>
    </div>
  );
}

export default App;