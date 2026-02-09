'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SafeImage from '@/components/SafeImage';
import AudioPlayer from '@/components/AudioPlayer';
import { products, categories } from '@/data/products';
import { Heart, Filter, Search, Star } from 'lucide-react';

const CollectionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="text-amber-400">Our Collections</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Discover our exquisite range of fashion jewellery crafted for every occasion
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-12 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-gray-950">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.name
                      ? 'bg-amber-500 text-gray-900'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <SafeImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(product.id)}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors ${
                            favorites.includes(product.id) 
                              ? 'text-rose-500 fill-rose-500' 
                              : 'text-rose-500'
                          }`} 
                        />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium"
                      >
                        View Details
                      </motion.button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isNew && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                          New
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-gray-400 text-sm">{product.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-playfair font-bold text-white">Sakhi Kali Jewels</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your destination for exquisite fashion jewellery
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a>
            <a href="/collections" className="text-gray-400 hover:text-amber-400 transition-colors">Collections</a>
            <a href="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors">Gallery</a>
            <a href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2024 Sakhi Kali Jewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <AudioPlayer />
    </div>
  );
};

export default CollectionsPage;
