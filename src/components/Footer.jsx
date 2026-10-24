import React from 'react';
import { Cake, MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart } from 'lucide-react';
import { SHOP_CONFIG, NAV_LINKS, getWhatsAppLink } from '../data/bakeryData';

export default function Footer({ onOpenOrderModal }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-chocolate-900 text-cream-100 pt-16 pb-12 border-t border-chocolate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-chocolate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center text-chocolate-900 shadow-sm">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Sweet Crumbs
              </span>
            </div>

            <p className="text-sm text-chocolate-300 leading-relaxed">
              Handcrafting moments of sweetness with premium ingredients, artisanal recipes, and timeless passion. Made fresh daily for all of life's celebrations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHOP_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate-800 hover:bg-blush-200 hover:text-chocolate-900 flex items-center justify-center text-cream-100 transition-colors"
                aria-label="Sweet Crumbs Instagram (Placeholder)"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={SHOP_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate-800 hover:bg-blush-200 hover:text-chocolate-900 flex items-center justify-center text-cream-100 transition-colors"
                aria-label="Sweet Crumbs Facebook (Placeholder)"
                title="Like us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-chocolate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-blush-200 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenOrderModal()}
                  className="hover:text-blush-200 transition-colors inline-block text-left text-blush-300 font-semibold"
                >
                  Custom Order Inquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Bakery Hours
            </h3>
            <div className="space-y-3 text-sm text-chocolate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blush-300 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday — Saturday</p>
                  <p className="text-xs text-chocolate-400">9:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blush-300 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-xs text-chocolate-400">10:00 AM – 11:00 PM</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-chocolate-800/60 border border-chocolate-700/60 text-xs text-chocolate-300">
                ✨ Pre-orders recommended 24 hours in advance for multi-tier designs.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Visit Our Bakery
            </h3>
            <div className="space-y-3 text-sm text-chocolate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blush-300 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm leading-relaxed">
                  {SHOP_CONFIG.address} <br />
                  <span className="text-[11px] text-chocolate-400 italic">(Placeholder Bakery Address)</span>
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blush-300 shrink-0" />
                <a
                  href={`tel:${SHOP_CONFIG.phone}`}
                  className="hover:text-blush-200 transition-colors"
                >
                  {SHOP_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blush-300 shrink-0" />
                <a
                  href={`mailto:${SHOP_CONFIG.email}`}
                  className="hover:text-blush-200 transition-colors truncate"
                >
                  {SHOP_CONFIG.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blush-200 hover:bg-blush-300 text-chocolate-900 text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-chocolate-400">
          <p>
            © {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved. Handcrafted with love.
          </p>
          <div className="flex items-center gap-1 text-chocolate-400">
            <span>Baked with</span>
            <Heart className="w-3.5 h-3.5 text-blush-400 fill-blush-400" />
            <span>for cake lovers everywhere</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
