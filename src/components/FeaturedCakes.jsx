import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { FEATURED_CAKES, getWhatsAppLink } from '../data/bakeryData';

export default function FeaturedCakes({ onSelectCakeForOrder }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="cakes" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-96 h-96 bg-cream-100/70 rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blush-100/50 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 text-chocolate-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-blush-200">
            <Sparkles className="w-3.5 h-3.5 text-blush-600" />
            <span>Artisan Bakery Selection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight mb-4">
            Our Sweetest Creations
          </h2>
          
          <p className="text-base sm:text-lg text-chocolate-700 font-normal leading-relaxed">
            Every cake tells a story. Find the perfect one for your special moment.
          </p>
          <div className="w-16 h-1 bg-blush-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cakes Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {FEATURED_CAKES.map((cake) => {
            const isFav = !!favorites[cake.id];

            return (
              <div
                key={cake.id}
                className="group flex flex-col bg-cream-50 rounded-3xl overflow-hidden border border-blush-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5"
                id={`cake-card-${cake.id}`}
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/3.4] overflow-hidden bg-blush-100/50">
                  <img
                    src={cake.image}
                    alt={`${cake.name} - handcrafted artisan cake from Sweet Crumbs`}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Top Badge */}
                  {cake.badge && (
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-chocolate-900 text-xs font-bold tracking-wide shadow-sm border border-blush-200">
                      {cake.badge}
                    </div>
                  )}

                  {/* Favorite Toggle Button */}
                  <button
                    onClick={() => toggleFavorite(cake.id)}
                    className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 backdrop-blur-md text-chocolate-700 hover:text-red-500 shadow-sm transition-all duration-200 hover:scale-110 focus:outline-none"
                    aria-label={`Save ${cake.name} to favorites`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-chocolate-600'
                      }`}
                    />
                  </button>

                  {/* Flavor Notes pill on image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 py-1 px-2.5 rounded-lg bg-chocolate-900/70 backdrop-blur-md text-white text-[11px] font-medium text-center truncate">
                    {cake.flavorNotes}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Rating row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3.5 h-3.5 ${
                                star <= Math.floor(cake.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-chocolate-900 ml-1">
                          {cake.rating}
                        </span>
                        <span className="text-[11px] text-chocolate-500">
                          ({cake.reviewsCount})
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blush-200/80 text-chocolate-800">
                        Fresh
                      </span>
                    </div>

                    {/* Cake Name */}
                    <h3 className="font-serif text-xl font-bold text-chocolate-900 group-hover:text-chocolate-700 transition-colors leading-snug">
                      {cake.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-chocolate-700 line-clamp-2 leading-relaxed">
                      {cake.description}
                    </p>
                  </div>

                  {/* Price & Action Button Footer */}
                  <div className="pt-3 border-t border-blush-200/60 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase font-semibold text-chocolate-500 tracking-wider">Starting at</p>
                      <p className="font-serif text-2xl font-bold text-chocolate-900">
                        ₹{cake.price}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectCakeForOrder(cake)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-chocolate-700 hover:bg-chocolate-800 active:scale-95 text-cream-100 text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      aria-label={`Order ${cake.name}`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order Now</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note for Customization */}
        <div className="mt-14 p-6 rounded-3xl bg-blush-100/80 border border-blush-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-chocolate-900">
              Need a Custom Themed or Multi-Tier Cake?
            </h4>
            <p className="text-xs sm:text-sm text-chocolate-700">
              We create custom designs for weddings, anniversaries, corporate events, and kid's birthdays.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Custom Celebration Cake")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream-100 text-chocolate-900 border border-blush-300 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span>Inquire for Custom Cake</span>
          </a>
        </div>

      </div>
    </section>
  );
}
