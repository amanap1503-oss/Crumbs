import React from 'react';
import { Clock, Sparkles, Palette, Heart } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/bakeryData';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-7 h-7 text-chocolate-800" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-chocolate-800" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-chocolate-800" />;
      case 'Heart':
        return <Heart className="w-7 h-7 text-chocolate-800 fill-blush-300" />;
      default:
        return <Sparkles className="w-7 h-7 text-chocolate-800" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-80 h-80 bg-blush-100/60 rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-80 h-80 bg-cream-200/50 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 text-chocolate-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-blush-200">
            <Heart className="w-3.5 h-3.5 text-blush-600 fill-blush-600" />
            <span>The Sweet Crumbs Difference</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight mb-4">
            Why Everyone Loves Our Cakes
          </h2>
          
          <p className="text-base sm:text-lg text-chocolate-700 font-normal leading-relaxed">
            Crafted with uncompromising standards, wholesome passion, and unhurried artistry.
          </p>
          <div className="w-16 h-1 bg-blush-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-3xl bg-cream-50/80 hover:bg-white border border-blush-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Subtle top index indicator */}
              <div className="absolute top-6 right-6 font-serif text-2xl font-bold text-blush-200 group-hover:text-blush-300 transition-colors select-none">
                0{index + 1}
              </div>

              <div>
                {/* Icon wrapper with hover bounce and blush background */}
                <div className="w-14 h-14 rounded-2xl bg-blush-200/90 group-hover:bg-blush-300 flex items-center justify-center mb-6 shadow-xs transition-all duration-300 group-hover:scale-110">
                  {getIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-chocolate-900 mb-3 group-hover:text-chocolate-800 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-chocolate-700 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-blush-200/50 flex items-center text-xs font-semibold text-chocolate-600 group-hover:text-chocolate-800 transition-colors">
                <span className="inline-block w-2 h-2 rounded-full bg-blush-400 mr-2 group-hover:scale-125 transition-transform" />
                <span>Our Bakery Quality Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
