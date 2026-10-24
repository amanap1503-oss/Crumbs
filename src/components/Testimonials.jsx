import React from 'react';
import { Star, Quote, Heart, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-96 bg-blush-200/30 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-200 text-chocolate-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-blush-300">
            <Heart className="w-3.5 h-3.5 text-blush-700 fill-blush-600" />
            <span>Community Love</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight mb-4">
            Sweet Words from Our Customers
          </h2>
          
          <p className="text-base sm:text-lg text-chocolate-700 font-normal leading-relaxed">
            Read heartwarming stories from celebrations made sweeter with our handcrafted creations.
          </p>
          <div className="w-16 h-1 bg-blush-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-3xl bg-white border border-blush-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-blush-200 pointer-events-none">
                <Quote className="w-10 h-10 fill-blush-100 rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs font-bold text-chocolate-800 ml-2">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-chocolate-800 text-sm sm:text-base leading-relaxed italic relative z-10 mb-6 font-normal">
                  "{t.review}"
                </p>
              </div>

              {/* Customer Info Footer */}
              <div className="pt-4 border-t border-blush-200/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`${t.name}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blush-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-serif font-bold text-chocolate-900 text-base leading-tight">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-chocolate-600 mt-0.5">
                    <span>{t.city}</span>
                    <span>•</span>
                    <span className="text-chocolate-500 italic">{t.cakeOrdered}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Disclaimer */}
        <p className="text-center text-xs text-chocolate-500 mt-10">
          * Realistic placeholder testimonials shown for demonstration. Customer names and quotes are simulated for display purposes.
        </p>

      </div>
    </section>
  );
}
