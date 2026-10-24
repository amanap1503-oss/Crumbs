import React, { useState } from 'react';
import { Sparkles, Heart, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenOrderModal }) {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
      {/* Decorative subtle ambient pattern */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blush-200/40 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bakery / Chef Photograph */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative layered borders */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-3 bg-blush-200/70 rounded-3xl transform -rotate-2 -z-10" 
              />
              <div 
                aria-hidden="true" 
                className="absolute -inset-1 bg-white rounded-3xl shadow-soft -z-10" 
              />

              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-soft-lg aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="Pastry chef carefully piping handcrafted frosting onto an artisan cake at Sweet Crumbs"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-white py-3.5 px-5 rounded-2xl shadow-xl border border-blush-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blush-200 flex items-center justify-center text-chocolate-800">
                  <Award className="w-5 h-5 text-chocolate-800" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg text-chocolate-900 leading-tight">100%</p>
                  <p className="text-xs text-chocolate-600 font-medium">Eggless & Custom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-200 text-chocolate-800 text-xs font-semibold tracking-wider uppercase border border-blush-300">
              <Heart className="w-3.5 h-3.5 text-blush-700 fill-blush-600" />
              <span>Our Passion & Promise</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight leading-tight">
              A Little Piece of Happiness.
            </h2>

            {/* Required prompt exact text */}
            <p className="text-base sm:text-lg md:text-xl text-chocolate-800 font-medium leading-relaxed">
              At Sweet Crumbs, we believe every celebration deserves something special. Our cakes are lovingly crafted with quality ingredients, delicious flavours, and beautiful designs to make your moments unforgettable.
            </p>

            {/* Extended narrative / craftsmanship details */}
            <div className="space-y-3 text-sm sm:text-base text-chocolate-700/90 leading-relaxed">
              <p>
                What started as a home baking journey fueled by grandmother's heirloom recipe cards has blossomed into an artisan cake studio trusted by thousands of families across Bengaluru.
              </p>
              {showFullStory && (
                <p className="p-4 rounded-2xl bg-white/80 border border-blush-200 text-chocolate-800 animate-fadeIn">
                  From selecting slow-churned butter and single-origin Madagascar cocoa to sourcing organic vanilla pods and fresh farm berries, we never cut corners. Every layer is baked fresh upon order, ensuring peak moistness, velvety frostings, and memories that linger long after the last crumb is savored.
                </p>
              )}
            </div>

            {/* Key feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-chocolate-900 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-chocolate-700 shrink-0" />
                <span>Zero artificial preservatives or trans fats</span>
              </div>
              <div className="flex items-center gap-2 text-chocolate-900 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-chocolate-700 shrink-0" />
                <span>100% Eggless options for every recipe</span>
              </div>
              <div className="flex items-center gap-2 text-chocolate-900 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-chocolate-700 shrink-0" />
                <span>Bespoke custom themes & lettering</span>
              </div>
              <div className="flex items-center gap-2 text-chocolate-900 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-chocolate-700 shrink-0" />
                <span>Same-day and express delivery slots</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-chocolate-700 hover:bg-chocolate-800 text-cream-100 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                id="discover-story-btn"
              >
                <span>{showFullStory ? "Hide Story" : "Discover Our Story"}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${showFullStory ? 'rotate-90' : ''}`} />
              </button>

              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-blush-100/80 text-chocolate-800 text-sm font-medium border border-blush-300 transition-colors"
              >
                <span>Taste the Love</span>
                <Heart className="w-4 h-4 text-blush-600" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
