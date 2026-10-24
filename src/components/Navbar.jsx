import React, { useState, useEffect } from 'react';
import { Cake, Menu, X, ShoppingBag, PhoneCall, Sparkles } from 'lucide-react';
import { SHOP_CONFIG, NAV_LINKS, getWhatsAppLink } from '../data/bakeryData';

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlight
      const sections = ['home', 'cakes', 'about', 'why-us', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft py-3'
          : 'bg-cream-100/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Sweet Crumbs Home"
          >
            <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center text-chocolate-700 shadow-sm group-hover:bg-blush-300 transition-colors">
              <Cake className="w-5 h-5 text-chocolate-800 transition-transform group-hover:rotate-6" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-chocolate-900 block leading-tight">
                Sweet Crumbs
              </span>
              <span className="text-[10px] uppercase tracking-widest text-chocolate-600 font-medium block">
                Artisan Cake Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-chocolate-900 bg-blush-200/70 font-semibold shadow-xs'
                      : 'text-chocolate-800 hover:text-chocolate-900 hover:bg-blush-100/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SHOP_CONFIG.phone}`}
              className="text-chocolate-700 hover:text-chocolate-900 p-2 rounded-full hover:bg-blush-100 transition-colors"
              title="Call Bakery"
              aria-label="Call Sweet Crumbs"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenOrderModal()}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-chocolate-700 hover:bg-chocolate-800 text-cream-100 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              id="navbar-order-btn"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Order Now</span>
              <span className="inline-block w-2 h-2 rounded-full bg-blush-300 animate-pulse"></span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-3 py-1.5 rounded-full bg-chocolate-700 text-cream-100 text-xs font-semibold flex items-center gap-1 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-chocolate-900 hover:bg-blush-200/50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-blush-200/60 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blush-200 text-chocolate-900 font-semibold'
                      : 'text-chocolate-800 hover:bg-blush-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-blush-200/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-chocolate-700 text-cream-100 font-semibold shadow-md active:scale-95 transition-transform"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Cake Now</span>
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-blush-300 text-chocolate-800 font-medium hover:bg-blush-100 text-sm transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
