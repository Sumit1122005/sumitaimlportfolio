'use client';

import { useRef, useEffect } from 'react';
import { Play, Clapperboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useVideo } from './VideoContext';

const videos = [
  { src: '/v3.mp4', label: 'Part III', subtitle: 'Skills & Expertise' },
  { src: '/v4.mp4', label: 'Part IV', subtitle: 'Vision & Goals' },
];

function ShowreelCard({ video, index }) {
  const { isMuted, registerVideo, unregisterVideo } = useVideo();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const container = containerRef.current;
    if (!videoEl || !container) return;

    registerVideo(videoEl);
    videoEl.muted = isMuted;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);

    return () => {
      unregisterVideo(videoEl);
      observer.disconnect();
    };
  }, [registerVideo, unregisterVideo, isMuted]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        flex: '1 1 400px',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        boxShadow: '0 0 40px rgba(168, 85, 247, 0.1), 0 15px 40px rgba(0,0,0,0.4)',
        background: 'rgba(13, 13, 18, 0.6)',
        cursor: 'default',
      }}
    >
      {/* Video */}
      <div style={{ aspectRatio: '9/16', position: 'relative', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Gradient overlay at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(13,13,18,0.95), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Label badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(168, 85, 247, 0.2)',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: '700',
          color: '#d8b4fe',
          letterSpacing: '0.1em',
        }}>
          <Play size={12} fill="#d8b4fe" />
          {video.label}
        </div>

        {/* Bottom text overlay */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          right: '20px',
        }}>
          <h4 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            marginBottom: '4px',
            color: '#fff',
          }}>
            {video.subtitle}
          </h4>
          <p style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: '500',
          }}>
            Introduction Video
          </p>
        </div>

        {/* Live indicator */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          borderRadius: '20px',
          fontSize: '0.65rem',
          fontWeight: '700',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.1em',
        }}>
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}
          />
          LIVE
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoShowreel() {
  return (
    <section id="showreel" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h3 className="section-subtitle">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Clapperboard size={14} />
            VIDEO INTRODUCTION
          </span>
        </h3>
        <h2 className="section-title" style={{ marginBottom: '16px' }}>My Showreel</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          Watch my introduction videos to know more about my skills, expertise, and what drives me as an engineer.
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        gap: '32px',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {videos.map((video, index) => (
          <ShowreelCard key={index} video={video} index={index} />
        ))}
      </div>
    </section>
  );
}
