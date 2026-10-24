import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCakes from './components/FeaturedCakes';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './data/bakeryData';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);

  const handleOpenOrderModal = (cake = null) => {
    setSelectedCake(cake);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedCake(null);
  };

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col font-sans selection:bg-blush-300 selection:text-chocolate-900">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal(null)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal(null)} />

        {/* Featured Cakes Section */}
        <FeaturedCakes onSelectCakeForOrder={(cake) => handleOpenOrderModal(cake)} />

        {/* About Us Section */}
        <AboutUs onOpenOrderModal={() => handleOpenOrderModal(null)} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Customer Testimonials Section */}
        <Testimonials />

        {/* Call to Action Section */}
        <CTASection onOpenOrderModal={() => handleOpenOrderModal(null)} />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrderModal(null)} />

      {/* Interactive Quick Cake Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        selectedCake={selectedCake}
      />

      {/* Floating Sticky WhatsApp Bubble */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Chat with Sweet Crumbs Baker on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
          Chat with us
        </span>
      </a>
    </div>
  );
}
