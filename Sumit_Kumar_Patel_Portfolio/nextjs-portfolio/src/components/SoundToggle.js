'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideo } from './VideoContext';

export default function SoundToggle() {
  const { isMuted, toggleMute } = useVideo();

  return (
    <motion.button
      onClick={toggleMute}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
      aria-label={isMuted ? 'Unmute' : 'Mute'}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 1000,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        border: '1px solid rgba(168, 85, 247, 0.4)',
        background: 'rgba(13, 13, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: isMuted ? 'var(--text-secondary)' : '#a855f7',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isMuted
          ? '0 4px 20px rgba(0,0,0,0.4)'
          : '0 0 25px rgba(168, 85, 247, 0.3), 0 4px 20px rgba(0,0,0,0.4)',
        transition: 'all 0.3s ease',
        outline: 'none',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isMuted ? (
          <motion.div
            key="muted"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX size={22} />
          </motion.div>
        ) : (
          <motion.div
            key="unmuted"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Volume2 size={22} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring when unmuted */}
      {!isMuted && (
        <motion.div
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            border: '2px solid rgba(168, 85, 247, 0.3)',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </motion.button>
  );
}
