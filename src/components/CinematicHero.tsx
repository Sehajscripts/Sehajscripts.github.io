'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Play, Volume2, VolumeX } from 'lucide-react';

const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-rose-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-rose-300 tracking-[0.3em] text-sm uppercase mb-6 font-light"
        >
          Luxury Fashion Jewellery
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl font-playfair font-bold">
            <span className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Sakhi
            </span>
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-playfair text-rose-800 mt-2">
            Vellore
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-rose-600 text-lg md:text-xl mt-6 max-w-2xl text-center font-light"
        >
          Where elegance meets craftsmanship in every piece
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <motion.a
            href="/collections"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full font-medium text-lg shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-all duration-300"
          >
            Explore Collection
          </motion.a>
          <motion.a
            href="https://www.youtube.com/shorts/FwqEFa9Q0dY"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white border-2 border-rose-200 text-rose-600 rounded-full font-medium text-lg hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Watch Showreel
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 cursor-pointer hover:text-white transition-colors">
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default CinematicHero;
