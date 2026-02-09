'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SafeImage from '@/components/SafeImage';
import AudioPlayer from '@/components/AudioPlayer';
import { galleryImages } from '@/data/products';
import { Instagram, Heart, Search } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = galleryImages.filter((_, index) => 
    searchTerm === '' || index.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-soft-pink via-white to-rose-gold/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-6 luxury-gradient rounded-full flex items-center justify-center">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="text-gradient">Gallery & Lookbook</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get inspired by our latest collections and customer favorites
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:border-luxury-gold focus:outline-none glass-morphism"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <a
              href="https://instagram.com/sakhi.690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rose-gold-gradient text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span>Follow @sakhi.690 on Instagram</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-soft-pink/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              >
                <SafeImage
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Details</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={filteredImages[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
            
            {/* Navigation */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <span className="text-xl leading-none">&larr;</span>
              </button>
            )}
            
            {selectedImage < filteredImages.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <span className="text-xl leading-none">&rarr;</span>
              </button>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Style Tips Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              <span className="text-gradient">Style Tips & Trends</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how to style our jewellery for different occasions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Everyday Elegance",
                description: "Minimal pieces that complement your daily outfits perfectly",
                tips: ["Layer delicate necklaces", "Stud earrings for work", "Simple bangles"]
              },
              {
                title: "Wedding Glamour",
                description: "Statement pieces for your special day",
                tips: ["Bridal sets", "Chandbali earrings", "Kundan necklaces"]
              },
              {
                title: "Party Perfect",
                description: "Eye-catching jewellery for celebrations",
                tips: ["Statement earrings", "Bold necklaces", "Crystal pieces"]
              }
            ].map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-playfair font-bold mb-4 text-gradient">
                  {style.title}
                </h3>
                <p className="text-gray-600 mb-6">{style.description}</p>
                <ul className="space-y-2">
                  {style.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-gray-700 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-luxury-gold to-rose-gold">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Share Your Style
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Tag us @sakhi.690 to be featured in our gallery
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-luxury-gold rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Shop The Look
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 luxury-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-playfair font-bold">Sakhi Jewels</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your destination for exquisite fashion jewellery
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/" className="hover:text-luxury-gold transition-colors">Home</a>
            <a href="/about" className="hover:text-luxury-gold transition-colors">About</a>
            <a href="/collections" className="hover:text-luxury-gold transition-colors">Collections</a>
            <a href="/contact" className="hover:text-luxury-gold transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            <p>&copy; 2024 Sakhi Kali Jewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <AudioPlayer />
    </div>
  );
};

export default GalleryPage;
