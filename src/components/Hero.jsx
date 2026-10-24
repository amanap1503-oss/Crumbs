import React from 'react';
import { Heart, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { SHOP_CONFIG } from '../data/bakeryData';

export default function Hero({ onOpenOrderModal }) {
  const handleScrollToCakes = (e) => {
    e.preventDefault();
    const section = document.getElementById('cakes');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Warm Ambient Glow Background */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-to-tr from-blush-200/50 via-cream-200/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-12 -right-12 w-72 h-72 bg-blush-200/60 rounded-full blur-2xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-200/80 border border-blush-300 text-chocolate-800 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-chocolate-700 animate-spin-slow" />
              <span>HANDCRAFTED WITH LOVE</span>
              <Heart className="w-3.5 h-3.5 text-blush-700 fill-blush-600 ml-0.5" />
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-chocolate-900 leading-[1.12] tracking-tight">
              Baked with Love, <br className="hidden sm:inline" />
              <span className="relative inline-block text-chocolate-700">
                Made to Delight.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-blush-300 -z-10"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-chocolate-800/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From dreamy birthday cakes to unforgettable celebrations, we turn your sweetest moments into delicious memories.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#cakes"
                onClick={handleScrollToCakes}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-chocolate-700 hover:bg-chocolate-800 text-cream-100 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                id="hero-explore-btn"
              >
                <span>Explore Our Cakes</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blush-200/90 hover:bg-blush-300 text-chocolate-900 font-semibold text-base border border-blush-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                id="hero-order-btn"
              >
                <span>Order Your Cake</span>
                <Heart className="w-4 h-4 text-chocolate-700" />
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4 border-t border-blush-300/60 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-y-2 text-xs sm:text-sm font-medium text-chocolate-800">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blush-700" />
                  Freshly Baked
                </span>
                <span className="mx-2.5 text-blush-400">•</span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blush-700" />
                  Premium Ingredients
                </span>
                <span className="mx-2.5 text-blush-400">•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-blush-700 fill-blush-600" />
                  Made with Love
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Decorative Soft Shapes */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-4 bg-gradient-to-tr from-blush-200 via-blush-100 to-cream-200 rounded-[2.5rem] transform rotate-3 scale-95 shadow-soft -z-10"
            />
            <div 
              aria-hidden="true" 
              className="absolute -inset-1 bg-white rounded-[2.5rem] transform -rotate-1 shadow-soft-lg -z-10"
            />

            {/* Main Showcase Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/4.8] max-w-md w-full group">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=85"
                alt="Signature Handcrafted Sweet Crumbs Celebration Cake with fresh berries and chocolate ganache"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Gentle gradient overlay on bottom of image for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Bottom Image Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel text-chocolate-900 text-xs sm:text-sm font-medium flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-chocolate-900">Sweet Crumbs Signature</p>
                  <p className="text-[11px] text-chocolate-700">Berry Ganache Celebration Tier</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blush-200 text-chocolate-800 text-xs font-semibold">
                  From ₹699
                </span>
              </div>
            </div>

            {/* Floating Badge: "Made Fresh Daily" */}
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-blush-200 flex items-center gap-2.5 animate-float z-20">
              <div className="w-9 h-9 rounded-xl bg-blush-200 flex items-center justify-center text-chocolate-800 shadow-inner">
                <Sparkles className="w-5 h-5 text-chocolate-800" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-chocolate-600 font-bold">100% Artisan</p>
                <p className="font-serif font-bold text-chocolate-900 text-sm leading-tight">Made Fresh Daily</p>
              </div>
            </div>

            {/* Additional Micro Social Proof Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-blush-200 flex items-center gap-2.5 z-20 hidden sm:flex">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-chocolate-900 leading-tight">4.9 / 5.0</p>
                <p className="text-[10px] text-chocolate-600">500+ Happy Celebrations</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
