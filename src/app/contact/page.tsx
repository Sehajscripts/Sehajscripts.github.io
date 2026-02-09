'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Instagram, MapPin } from 'lucide-react';

const ContactPage = () => {
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="text-amber-400">Connect With Us</span>
            </h1>
            <p className="text-xl text-gray-400">
              DM us on Instagram for orders & inquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Contact Only */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-3xl p-10 md:p-16 text-center border border-gray-700"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <Instagram className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              @sakhi.690
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Follow us and send a direct message for orders, custom requests, or any questions!
            </p>
            
            <a
              href="https://instagram.com/sakhi.690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span>Visit Instagram</span>
            </a>

            {/* Location */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Based in Mohali, India</span>
              </div>
              <p className="text-gray-500 text-sm">
                Serving customers nationwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-white font-semibold mb-2">Custom Orders</h3>
              <p className="text-gray-400 text-sm">DM for personalized designs</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-white font-semibold mb-2">Nationwide Shipping</h3>
              <p className="text-gray-400 text-sm">Delivered to your doorstep</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-white font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400 text-sm">Handcrafted with love</p>
            </motion.div>
          </div>
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
          <p className="text-gray-400 mb-6">
            Your destination for exquisite fashion jewellery
          </p>
          <a
            href="https://instagram.com/sakhi.690"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@sakhi.690</span>
          </a>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2024 Sakhi Kali Jewels. Mohali, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
