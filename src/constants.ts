import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'midnight-jasmine',
    name: 'Midnight Jasmine & Oud',
    price: 48.00,
    description: 'A seductive blend of night-blooming jasmine and smokey agarwood.',
    features: ['60-hour burn time', 'Hand-poured in a reusable ceramic jar'],
    benefits: 'Sets a calming, sophisticated mood for evening relaxation.',
    tags: ['Floral', 'Woody', 'Best Seller', 'Premium'],
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800',
    scentProfile: 'Floral & Enigmatic'
  },
  {
    id: 'sun-drenched-citrus',
    name: 'Sun-Drenched Citrus',
    price: 42.00,
    description: 'An uplifting explosion of Sicilian bergamot and Meyer lemon.',
    features: ['Essential oil-infused', 'Lead-free cotton wick'],
    benefits: 'Naturally energizes your workspace and purifies the air.',
    tags: ['Fresh', 'Energizing', 'Morning Ritual'],
    image: 'https://images.unsplash.com/photo-1603007905991-6528193a1b3c?auto=format&fit=crop&q=80&w=800',
    scentProfile: 'Fresh & Vibrant'
  },
  {
    id: 'velvet-santal',
    name: 'Velvet Santal & Cardamom',
    price: 45.00,
    description: 'Creamy sandalwood layered with the spicy warmth of green cardamom.',
    features: ['Sustainable soy wax', 'Phthalate-free fragrance oils'],
    benefits: 'Creates a cozy, inviting atmosphere for guest areas.',
    tags: ['Warm', 'Spicy', 'Home Office'],
    image: 'https://images.unsplash.com/photo-1595433707802-68267d83760a?auto=format&fit=crop&q=80&w=800',
    scentProfile: 'Woody & Smooth'
  },
  {
    id: 'lavender-rain',
    name: 'Lavender Rain & Sage',
    price: 42.00,
    description: 'Crisp rain notes softened by French lavender and earthy sage.',
    features: ['Eco-friendly packaging', 'Cruelty-free'],
    benefits: 'Promotes deep sleep and reduces daily stress.',
    tags: ['Herbal', 'Calming', 'Sleep Aid'],
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&q=80&w=800',
    scentProfile: 'Floral & Calming'
  },
  {
    id: 'spiced-fig',
    name: 'Spiced Fig & Cedar',
    price: 48.00,
    description: 'Rich Mediterranean fig balanced by the grounding scent of Virginian cedarwood.',
    features: ['Minimalist matte black glass vessel', 'Slow-burning'],
    benefits: 'A sophisticated seasonal scent that feels both fresh and warm.',
    tags: ['Fruity', 'Woody', 'Seasonal'],
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=800',
    scentProfile: 'Woody & Warm'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "The Midnight Jasmine scent is transformative. My living room feels like a 5-star spa.",
    author: "Elena R."
  },
  {
    id: '2',
    text: "I love that these are truly eco-friendly. No soot, just pure, beautiful fragrance.",
    author: "Mark T."
  },
  {
    id: '3',
    text: "The perfect gift. The packaging is as stunning as the scents themselves.",
    author: "Sophia L."
  }
];
