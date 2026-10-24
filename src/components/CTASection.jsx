import React from 'react';
import { MessageCircle, Phone, Sparkles, Heart } from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../data/bakeryData';

export default function CTASection({ onOpenOrderModal }) {
  const whatsappUrl = getWhatsAppLink();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-chocolate-800 via-chocolate-700 to-chocolate-900 text-cream-100 relative overflow-hidden">
      {/* Decorative Warm Backlight Blobs */}
      <div 
        aria-hidden="true" 
        className="absolute -top-24 -left-24 w-96 h-96 bg-blush-400/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-blush-300/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100/10 border border-cream-100/20 text-cream-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blush-300" />
          <span>CELEBRATE WITH SWEET CRUMBS</span>
          <Heart className="w-3.5 h-3.5 text-blush-300 fill-blush-300" />
        </div>

        {/* Main CTA Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cream-50 tracking-tight leading-tight mb-5">
          Make Your Celebration Sweeter!
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-cream-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Your perfect cake is just a message away.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Order on WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
            id="cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Contact Us Button */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-100/15 hover:bg-cream-100/25 text-cream-100 border border-cream-100/30 font-semibold text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            id="cta-contact-btn"
          >
            <Phone className="w-4 h-4 text-cream-200" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Configurable WhatsApp Indicator note */}
        <div className="mt-8 pt-6 border-t border-cream-100/15 flex items-center justify-center gap-2 text-xs sm:text-sm text-cream-200/70">
          <span>WhatsApp support active:</span>
          <span className="font-semibold text-cream-100">{SHOP_CONFIG.phone}</span>
          <span>•</span>
          <span>Instant replies during bakery hours</span>
        </div>

      </div>
    </section>
  );
}
