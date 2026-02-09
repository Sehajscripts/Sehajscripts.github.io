'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CinematicHero from '@/components/CinematicHero';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Jewelry3D from '@/components/Jewelry3D';
import AudioPlayer from '@/components/AudioPlayer';
import { products } from '@/data/products';
import { Star, Heart, ArrowRight, Sparkles, Gem, Crown, Award } from 'lucide-react';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState<string[]>([]);
  const featuredProducts = products.filter(p => p.isBestseller).slice(0, 4);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-white">
          <Navbar />
          
          {/* Cinematic Hero Section */}
          <CinematicHero />

          {/* Luxury Features Section */}
          <section className="py-24 px-6 bg-gradient-to-b from-rose-50 via-white to-pink-50">
            <div className="container mx-auto max-w-7xl">
              <ScrollReveal className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    Exquisite Craftsmanship
                  </span>
                </h2>
                <p className="text-xl text-rose-600 max-w-2xl mx-auto font-light">
                  Each piece is meticulously crafted with attention to detail and quality
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Gem className="w-10 h-10 text-amber-400" />,
                    title: 'Exquisite Craftsmanship',
                    description: 'Each piece is meticulously crafted by master artisans, ensuring unparalleled quality and attention to detail.'
                  },
                  {
                    icon: <Crown className="w-10 h-10 text-amber-400" />,
                    title: 'Royal Heritage',
                    description: 'Inspired by royal traditions, our designs blend timeless elegance with contemporary sophistication.'
                  },
                  {
                    icon: <Award className="w-10 h-10 text-amber-400" />,
                    title: 'Exclusive Collections',
                    description: 'Limited edition pieces that define luxury. Own a masterpiece that tells your unique story.'
                  }
                ].map((feature, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="glass-morphism-dark rounded-2xl p-8 text-center group cursor-pointer"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Collection with 3D Effects */}
          <section className="py-24 px-6 bg-gradient-to-b from-white to-rose-50">
            <div className="container mx-auto max-w-7xl">
              <ScrollReveal className="text-center mb-16">
                <span className="text-rose-400 tracking-[0.4em] text-sm uppercase mb-4 block font-light">
                  Curated Selection
                </span>
                <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  <span className="text-rose-800">Featured</span>{' '}
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Collection</span>
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 0.15}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-rose-100">
                        <Jewelry3D
                          image={product.image}
                          alt={product.name}
                          className="aspect-square"
                        />
                        
                        <div className="absolute top-4 right-4 z-10">
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleFavorite(product.id)}
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-rose-200"
                          >
                            <Heart 
                              className={`w-5 h-5 transition-colors ${
                                favorites.includes(product.id) 
                                  ? 'text-rose-500 fill-rose-500' 
                                  : 'text-rose-400'
                              }`} 
                            />
                          </motion.button>
                        </div>

                        {product.isBestseller && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold rounded-full shadow-md">
                              BESTSELLER
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-6 text-center">
                        <p className="text-rose-600 text-sm font-medium">{product.category}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.6} className="text-center mt-16">
                <motion.a
                  href="/collections"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-full font-bold text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
                >
                  <span className="flex items-center gap-3">
                    View All Collections
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.a>
              </ScrollReveal>
            </div>
          </section>

          {/* Luxury Testimonials */}
          <section className="py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
            <div className="container mx-auto max-w-7xl">
              <ScrollReveal className="text-center mb-16">
                <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  <span className="text-gradient">Client Stories</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Hear from those who have experienced our luxury
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Priya Sharma",
                    role: "Fashion Influencer",
                    rating: 5,
                    comment: "The craftsmanship is absolutely exquisite. Every piece tells a story of luxury and elegance. I've never felt more confident wearing jewellery."
                  },
                  {
                    name: "Anjali Patel",
                    role: "Bridal Client",
                    rating: 5,
                    comment: "My bridal set from Sakhi Jewels made my wedding day truly magical. The attention to detail is unmatched. Simply breathtaking!"
                  },
                  {
                    name: "Kavita Reddy",
                    role: "Celebrity Stylist",
                    rating: 5,
                    comment: "Working with Sakhi Jewels has been an absolute pleasure. Their pieces are consistently stunning and perfect for red carpet moments."
                  }
                ].map((testimonial, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-morphism-dark rounded-2xl p-8 relative"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic leading-relaxed">
                        &ldquo;{testimonial.comment}&rdquo;
                      </p>
                      <div className="border-t border-gray-700 pt-4">
                        <p className="font-playfair font-bold text-white text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-amber-400 text-sm">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Luxury CTA Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-gray-900 to-rose-900/20" />
            <div className="container mx-auto max-w-4xl relative z-10">
              <ScrollReveal className="text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="glass-morphism-dark rounded-3xl p-12 md:p-16"
                >
                  <Crown className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                  <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                    Begin Your Journey
                  </h2>
                  <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Discover a world where luxury meets artistry. Let us help you find the perfect piece that speaks to your soul.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-full font-bold text-lg shadow-lg shadow-amber-500/30 text-center"
                    >
                      Contact Us Now
                    </motion.a>
                    <motion.a
                      href="/gallery"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 border border-amber-500/50 text-amber-400 rounded-full font-bold text-lg hover:bg-amber-500/10 transition-colors text-center"
                    >
                      View Lookbook
                    </motion.a>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </section>

          {/* Luxury Footer */}
          <footer className="bg-gray-950 border-t border-gray-800 py-16 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">S</span>
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl text-white">Sakhi Vellore</h3>
                      <p className="text-gray-500 text-sm">Est. 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Where luxury meets artistry. Crafting timeless pieces that celebrate your unique elegance.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-6">Collections</h4>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Bridal Sets</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Statement Earrings</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Luxury Necklaces</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Exclusive Bangles</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-6">Experience</h4>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Private Consultation</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Virtual Showroom</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Customization</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Gift Services</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-6">Connect</h4>
                  <div className="flex gap-4 mb-6">
                    <a href="https://instagram.com/sakhi.690" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-all">
                      <span className="text-sm font-bold">IG</span>
                    </a>
                    <a href="https://www.youtube.com/shorts/FwqEFa9Q0dY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                      <span className="text-sm font-bold">YT</span>
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Follow our journey of luxury and elegance
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  © 2024 Sakhi Vellore. All rights reserved.
                </p>
                <div className="flex gap-6 text-gray-500 text-sm">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </footer>

          {/* Audio Player */}
          <AudioPlayer />
        </div>
      )}
    </>
  );
};

export default HomePage;
