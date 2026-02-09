'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    audioRef.current.src = '/assets/ambient-music.mp3';
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Handle audio loading
    const handleCanPlay = () => {
      setAudioLoaded(true);
      console.log('Audio loaded successfully');
    };
    
    const handleError = (e: any) => {
      console.error('Audio loading error:', e);
      setAudioLoaded(false);
    };
    
    audioRef.current.addEventListener('canplay', handleCanPlay);
    audioRef.current.addEventListener('error', handleError);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplay', handleCanPlay);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && audioLoaded) {
      audioRef.current.muted = isMuted;
      if (!isMuted && isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Audio play error:', error);
          setIsPlaying(false);
        });
      } else if (isMuted) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isMuted, isPlaying, audioLoaded]);

  const toggleMute = () => {
    if (!audioLoaded) {
      console.log('Audio not loaded yet');
      return;
    }
    
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (!newMutedState) {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Audio play error:', error);
          setIsPlaying(false);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap"
          >
            {isMuted ? 'Enable ambient music' : 'Disable ambient music'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMute}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`p-4 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
          isMuted 
            ? 'bg-gray-900/50 hover:bg-gray-800/70 text-gray-400' 
            : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 shadow-amber-500/30'
        }`}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <VolumeX className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Volume2 className="w-5 h-5" />
              {/* Sound waves animation */}
              <motion.div
                className="absolute -right-1 -top-1"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Music className="w-3 h-3 text-amber-300" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Audio Status Indicator */}
      {!isMuted && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full"
        >
          <motion.div
            className="w-full h-full bg-amber-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default AudioPlayer;
