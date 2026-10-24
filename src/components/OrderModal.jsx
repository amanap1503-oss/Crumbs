import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, Heart, Calendar, Check, Sparkles } from 'lucide-react';
import { FEATURED_CAKES, SHOP_CONFIG, getWhatsAppLink } from '../data/bakeryData';

export default function OrderModal({ isOpen, onClose, selectedCake = null }) {
  const [currentCake, setCurrentCake] = useState(FEATURED_CAKES[0]);
  const [weight, setWeight] = useState('1 kg');
  const [customMessage, setCustomMessage] = useState('');
  const [isEggless, setIsEggless] = useState(true);
  const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    if (selectedCake) {
      setCurrentCake(selectedCake);
    }
  }, [selectedCake]);

  if (!isOpen) return null;

  // Weight multipliers
  const weightMultiplier = weight === '0.5 kg' ? 0.6 : weight === '1 kg' ? 1.0 : 1.9;
  const calculatedPrice = Math.round(currentCake.price * weightMultiplier);

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const messageInfo = customMessage.trim() ? customMessage.trim() : "None";
    const egglessText = isEggless ? "100% Eggless" : "Regular";
    const dateText = deliveryDate ? deliveryDate : "Earliest Available";

    const text = `Hello Sweet Crumbs! 🎂\n\nI would like to order:\n• *Cake:* ${currentCake.name}\n• *Weight:* ${weight}\n• *Dietary:* ${egglessText}\n• *Message on Cake:* "${messageInfo}"\n• *Preferred Date:* ${dateText}\n• *Estimated Price:* ₹${calculatedPrice}\n\nPlease confirm availability and payment details. Thank you!`;

    const url = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-chocolate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blush-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Top Header */}
        <div className="bg-blush-100/90 p-5 border-b border-blush-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blush-200 flex items-center justify-center text-chocolate-800">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 id="order-modal-title" className="font-serif font-bold text-chocolate-900 text-lg leading-tight">
                Quick Cake Order
              </h3>
              <p className="text-[11px] text-chocolate-600">Freshly baked upon your order</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-chocolate-700 hover:bg-blush-200 transition-colors"
            aria-label="Close order dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleWhatsAppOrder} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Select Cake */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-700 mb-1.5">
              Select Your Cake
            </label>
            <select
              value={currentCake.id}
              onChange={(e) => {
                const found = FEATURED_CAKES.find((c) => c.id === e.target.value);
                if (found) setCurrentCake(found);
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-blush-300 bg-cream-50 text-chocolate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400"
            >
              {FEATURED_CAKES.map((cake) => (
                <option key={cake.id} value={cake.id}>
                  {cake.name} — Base ₹{cake.price}
                </option>
              ))}
            </select>
          </div>

          {/* Cake Snapshot preview */}
          <div className="p-3 rounded-2xl bg-cream-50 border border-blush-200 flex items-center gap-3">
            <img
              src={currentCake.image}
              alt={currentCake.name}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-serif font-bold text-sm text-chocolate-900 truncate">
                {currentCake.name}
              </p>
              <p className="text-xs text-chocolate-600 truncate">{currentCake.flavorNotes}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase text-chocolate-500 font-semibold">Total Est.</p>
              <p className="font-serif font-bold text-lg text-chocolate-900">₹{calculatedPrice}</p>
            </div>
          </div>

          {/* Size / Weight Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-700 mb-1.5">
              Select Weight / Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['0.5 kg', '1 kg', '2 kg'].map((w) => (
                <button
                  type="button"
                  key={w}
                  onClick={() => setWeight(w)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    weight === w
                      ? 'bg-chocolate-700 text-cream-100 border-chocolate-800 shadow-xs'
                      : 'bg-white text-chocolate-800 border-blush-200 hover:bg-blush-100'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-cream-50 border border-blush-200">
            <div>
              <p className="text-xs font-bold text-chocolate-900">100% Eggless Preparation</p>
              <p className="text-[11px] text-chocolate-600">Pure vegetarian baked with premium dairy</p>
            </div>
            <button
              type="button"
              onClick={() => setIsEggless(!isEggless)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isEggless ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-md" />
            </button>
          </div>

          {/* Custom Inscription */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-700 mb-1.5">
              Custom Message on Cake <span className="text-chocolate-400 font-normal lowercase">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Happy 25th Birthday Sarah! ❤️"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-blush-300 bg-white text-chocolate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 placeholder:text-chocolate-400"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-700 mb-1.5">
              Preferred Delivery / Pickup Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-blush-300 bg-white text-chocolate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400"
              />
            </div>
          </div>

          {/* Submit on WhatsApp CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Confirm & Order via WhatsApp</span>
            </button>

            <p className="text-center text-[11px] text-chocolate-500 mt-2">
              Opens WhatsApp directly with your cake choice pre-filled for our baker!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
