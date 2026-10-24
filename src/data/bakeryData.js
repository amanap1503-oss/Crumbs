export const SHOP_CONFIG = {
  name: "Sweet Crumbs",
  tagline: "Baked with Love, Made to Delight",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Configurable WhatsApp number (without +)
  email: "hello@sweetcrumbsbakery.com",
  address: "Shop 14, Heritage Boulevard, Rosewood Avenue, Indiranagar, Bengaluru - 560038",
  businessHours: {
    weekdays: "Mon - Sat: 9:00 AM - 10:00 PM",
    weekends: "Sunday: 10:00 AM - 11:00 PM",
  },
  socials: {
    instagram: "https://instagram.com/sweetcrumbs.bakery",
    facebook: "https://facebook.com/sweetcrumbs.bakery",
  },
  trustPoints: [
    "Freshly Baked",
    "Premium Ingredients",
    "Made with Love",
  ],
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Our Cakes", href: "#cakes" },
  { name: "About Us", href: "#about" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export const FEATURED_CAKES = [
  {
    id: "chocolate-truffle",
    name: "Chocolate Truffle Cake",
    price: 699,
    rating: 4.9,
    reviewsCount: 128,
    badge: "Bestseller",
    description: "Layers of velvety Dutch chocolate sponge smothered in silky dark chocolate ganache and chocolate curls.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    flavorNotes: "Rich Belgian Ganache • 55% Cocoa",
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    price: 799,
    rating: 4.8,
    reviewsCount: 94,
    badge: "Chef's Special",
    description: "Crimson-hued delicate sponge infused with vanilla, paired with Madagascar vanilla bean cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
    flavorNotes: "Cream Cheese Frosting • Delicate Cocoa",
  },
  {
    id: "strawberry-dream",
    name: "Strawberry Dream Cake",
    price: 749,
    rating: 4.9,
    reviewsCount: 110,
    badge: "Seasonal Favorite",
    description: "Fluffy vanilla genoise sponge layered with fresh hand-picked strawberry compote and whipped Chantilly cream.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    flavorNotes: "Fresh Strawberries • Whipped Cream",
  },
  {
    id: "black-forest",
    name: "Black Forest Cake",
    price: 649,
    rating: 4.7,
    reviewsCount: 86,
    badge: "Classic",
    description: "Traditional chocolate sponge layered with tart cherry compote, fresh dairy cream, and fine Belgian chocolate flakes.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    flavorNotes: "Dark Cherries • Shaved Chocolate",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "freshly-baked",
    title: "Freshly Baked",
    description: "Made fresh to bring you the best taste. Every cake is baked on the morning of delivery.",
    icon: "Clock",
  },
  {
    id: "premium-ingredients",
    title: "Premium Ingredients",
    description: "Carefully selected ingredients for exceptional flavour, from organic vanilla to fine cocoa.",
    icon: "Sparkles",
  },
  {
    id: "custom-designs",
    title: "Custom Designs",
    description: "Cakes designed to match your celebrations. Custom messages, sizes, and artisan themes.",
    icon: "Palette",
  },
  {
    id: "made-with-love",
    title: "Made with Love",
    description: "Every creation receives special care and attention from our passionate master pastry chefs.",
    icon: "Heart",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Bengaluru",
    rating: 5,
    review: "The Chocolate Truffle cake made my sister's birthday truly unforgettable! The chocolate was incredibly rich, moist, and not overly sweet. Ordering was effortless!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    cakeOrdered: "Chocolate Truffle Cake",
  },
  {
    id: 2,
    name: "Rohan & Sneha",
    city: "Bengaluru",
    rating: 5,
    review: "Sweet Crumbs baked our anniversary cake and it was a showstopper! The Red Velvet cream cheese frosting is easily the best we've ever tasted in the city.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    cakeOrdered: "Red Velvet Cake",
  },
  {
    id: 3,
    name: "Ananya Deshmukh",
    city: "Bengaluru",
    rating: 5,
    review: "The Strawberry Dream cake was light, fluffy, and tasted like fresh summer strawberries. The presentation was gorgeous and delivery was prompt!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    cakeOrdered: "Strawberry Dream Cake",
  },
];

// Helper to generate WhatsApp URL with prefilled message
export const getWhatsAppLink = (cakeName = "", weight = "", message = "") => {
  let text = "Hello Sweet Crumbs! 🎂 ";
  if (cakeName) {
    text += `I would like to order the *${cakeName}*`;
    if (weight) text += ` (${weight})`;
    if (message) text += ` with message: "${message}"`;
    text += `. Please let me know the availability and delivery details!`;
  } else {
    text += "I'm looking to order a delicious cake for my upcoming celebration. Could you please share the details?";
  }
  return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
