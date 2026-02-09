'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallback?: string;
}

const SafeImage = ({ 
  src, 
  alt, 
  className = '', 
  width = 400, 
  height = 400,
  priority = false,
  fallback = '/assets/placeholder.jpg'
}: SafeImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasError ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      ) : (
        <>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-110`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMCY0P/5sEBwEA"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      )}
    </div>
  );
};

export default SafeImage;
