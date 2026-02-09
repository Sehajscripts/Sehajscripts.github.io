'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Heart, Sparkles, Award, Users } from 'lucide-react';

const AboutPage = () => {
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
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Celebrating the beauty and elegance of modern women through exquisite jewellery that 
              tells your unique story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">
                <span className="text-gradient">Born from Passion</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sakhi Jewels began as a dream to create beautiful, accessible jewellery that 
                  empowers modern women to express their unique style. Founded with love and a deep 
                  appreciation for craftsmanship, we believe that every piece of jewellery tells a story.
                </p>
                <p>
                  Our journey started in 2020, when we noticed a gap in the market for high-quality, 
                  trendy imitation jewellery that doesn't break the bank. We set out to bridge this gap, 
                  curating collections that blend traditional Indian artistry with contemporary design.
                </p>
                <p>
                  Today, Sakhi Jewels is more than just a brand – it's a community of strong, beautiful 
                  women who celebrate their individuality through our carefully crafted pieces.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611088256428-4d2b6b5d6fbb?w=600&h=600&fit=crop"
                  alt="Sakhi Jewels Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 luxury-gradient rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-soft-pink/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality First",
                description: "Every piece is carefully crafted with premium materials and attention to detail"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Made with Love",
                description: "We pour our hearts into creating jewellery that you'll cherish forever"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Trendy Designs",
                description: "Stay ahead of the fashion curve with our latest collections"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Happiness",
                description: "Your satisfaction is our ultimate goal and driving force"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 luxury-gradient rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
                <span className="text-gradient">Our Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Sakhi Jewels, our mission is to make luxury jewellery accessible to every woman 
                  who deserves to feel special. We believe that elegance shouldn't come with a hefty 
                  price tag.
                </p>
                <p>
                  We're committed to creating pieces that not only enhance your beauty but also 
                  boost your confidence. Each design is thoughtfully crafted to ensure you stand out 
                  in every crowd and feel extraordinary on every occasion.
                </p>
                <p>
                  Join us in our journey to redefine fashion jewellery, one beautiful piece at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-luxury-gold to-rose-gold">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "500+", label: "Unique Designs" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            <a href="/collections" className="hover:text-luxury-gold transition-colors">Collections</a>
            <a href="/gallery" className="hover:text-luxury-gold transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-luxury-gold transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            <p>&copy; 2024 Sakhi Jewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
