'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Jewelry3DProps {
  image: string;
  alt: string;
  className?: string;
}

const Jewelry3D = ({ image, alt, className = '' }: Jewelry3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          transform: "translateZ(50px)",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        {/* 3D Card Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
          }}
        />

        {/* Image Container */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          
          {/* Reflection Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"
            style={{
              transform: "translateZ(20px)",
            }}
          />
        </div>

        {/* 3D Depth Layers */}
        <div 
          className="absolute inset-0 rounded-2xl border border-amber-500/30 pointer-events-none"
          style={{
            transform: "translateZ(2px)",
          }}
        />
        <div 
          className="absolute inset-2 rounded-xl border border-amber-500/20 pointer-events-none"
          style={{
            transform: "translateZ(4px)",
          }}
        />
      </motion.div>

      {/* Shadow */}
      <motion.div
        className="absolute inset-0 rounded-2xl -z-10"
        style={{
          transform: "translateZ(-50px) translateY(20px)",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
};

export default Jewelry3D;
