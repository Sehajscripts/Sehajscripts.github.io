export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 'crystal-bun-pin',
    name: 'Crystal Bun Pin',
    category: 'Accessories',
    price: 699,
    image: '/assets/crystal-bun-pin.jpg',
    description: 'Elegant crystal bun pin perfect for traditional and modern hairstyles',
    isBestseller: true
  },
  {
    id: 'rose-gold-earrings',
    name: 'Rose Gold Earrings',
    category: 'Earrings',
    price: 1299,
    image: '/assets/rose-gold-earrings.jpg',
    description: 'Beautiful rose gold earrings with intricate crystal work',
    isBestseller: true
  },
  {
    id: 'pearl-necklace',
    name: 'Pearl Necklace Set',
    category: 'Necklaces',
    price: 1899,
    image: '/assets/pearl-necklace.jpg',
    description: 'Elegant pearl necklace set with gold accents',
    isBestseller: true
  },
  {
    id: 'crystal-bangles',
    name: 'Crystal Bangles',
    category: 'Bangles',
    price: 1599,
    image: '/assets/crystal-bangles.jpg',
    description: 'Sparkling crystal bangles perfect for festive occasions',
    isBestseller: true
  },
  {
    id: 'bridal-maang-tikka',
    name: 'Bridal Maang Tikka',
    category: 'Bridal Sets',
    price: 2499,
    image: '/assets/bridal-maang-tikka.jpg',
    description: 'Exquisite bridal maang tikka with kundan work',
    isBestseller: true
  }
];

export const categories = [
  { name: 'All', icon: '✨' },
  { name: 'Accessories', icon: '🎀' },
  { name: 'Earrings', icon: '💎' },
  { name: 'Necklaces', icon: '📿' },
  { name: 'Bangles', icon: '⭕' },
  { name: 'Bridal Sets', icon: '👑' }
];

export const galleryImages = [
  '/assets/crystal-bun-pin.jpg',
  '/assets/rose-gold-earrings.jpg',
  '/assets/pearl-necklace.jpg',
  '/assets/crystal-bangles.jpg',
  '/assets/bridal-maang-tikka.jpg',
  '/assets/image3.jpg',
  '/assets/image4.jpg',
  '/assets/image5.jpeg',
  '/assets/image6.jpeg',
  '/assets/image7.jpeg',
  '/assets/image8.jpeg',
  '/assets/crystal-bun-pin.jpg'
];
