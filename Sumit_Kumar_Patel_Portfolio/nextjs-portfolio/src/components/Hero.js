'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Mail, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const videoSources = [
  { src: '/V11.mp4', label: 'Part I' },
];

export default function Hero() {
  const { hero, socials } = portfolioData;
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Play next video when current one ends
  const handleVideoEnd = useCallback(() => {
    const nextIndex = (currentIndex + 1) % videoSources.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  // Update progress bar
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  }, []);

  // Load and play new video when index changes (only after user has started)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const currentVideo = videoSources[currentIndex] || videoSources[0];
    video.src = currentVideo.src;
    video.load();
    setProgress(0);
    if (hasStarted) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [currentIndex, hasStarted]);

  // Initial play button handler
  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasStarted(true);
    setIsMuted(false);
    video.muted = false;
    video.play().then(() => setIsPlaying(true)).catch(() => {
      // Fallback: play muted if browser blocks
      video.muted = true;
      setIsMuted(true);
      video.play().then(() => setIsPlaying(true));
    });
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const jumpToVideo = (index) => {
    setCurrentIndex(index);
  };

  // Auto pause/resume based on scroll visibility
  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasStarted) return;

    if (isVisible) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPlaying(false);
    }
  }, [isVisible, hasStarted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', padding: '120px 0 60px', position: 'relative' }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(45,212,191,0.1) 0%, rgba(253,186,116,0.05) 40%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Top — Text content (centered) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <motion.div variants={itemVariants} style={{ marginBottom: '16px' }}>
            <div className="pill-badge" style={{ fontSize: '0.75rem', padding: '6px 18px' }}>
              <span style={{ marginRight: '8px', display: 'inline-block', width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }}></span>
              AVAILABLE FOR WORK
            </div>
          </motion.div>

          <motion.h3 variants={itemVariants} style={{
            fontSize: '1rem',
            letterSpacing: '0.3em',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            HI, I&apos;M
          </motion.h3>

          <motion.h1 variants={itemVariants} className="text-gradient" style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            marginBottom: '24px',
            letterSpacing: '-0.03em'
          }}>
            {hero.name}
          </motion.h1>

          <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
            <div className="pill-badge">
              <span style={{ marginRight: '8px', display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-cyan)' }}></span>
              {hero.role}
            </div>
          </motion.div>

          <motion.p variants={itemVariants} style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '36px',
            fontWeight: '400',
            maxWidth: '700px',
            margin: '0 auto 36px',
          }}>
            {hero.description}
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>Let&apos;s Talk</a>
            <a href="#projects" className="btn btn-outline" style={{ padding: '14px 36px', fontSize: '1rem' }}>View My Work</a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <a href={`mailto:${socials.email}`} className="social-icon" aria-label="Email" style={{ width: '48px', height: '48px' }}>
              <Mail size={20} />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub" style={{ width: '48px', height: '48px' }}>
              <img src="/github-logo.svg" alt="GitHub" width="20" height="20" style={{ filter: 'invert(1)' }} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" style={{ width: '48px', height: '48px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom — 16:9 Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', maxWidth: '900px' }}
        >
          {/* Video container */}
          <div ref={videoContainerRef} style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--card-border)',
            boxShadow: '0 0 60px rgba(45,212,191,0.1), 0 25px 60px rgba(0,0,0,0.5)',
            background: '#0a0a0f',
          }}>
            <video
              ref={videoRef}
              playsInline
              muted={isMuted}
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            >
              <source src={(videoSources[currentIndex] || videoSources[0]).src} type="video/mp4" />
            </video>

            {/* Big centered Play button (before first play) */}
            <AnimatePresence>
              {!hasStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                  onClick={handlePlay}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'rgba(0,0,0,0.55)',
                    cursor: 'pointer',
                    zIndex: 5,
                  }}
                >
                  {/* Pulsing ring */}
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        border: '2px solid var(--accent-purple)',
                      }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent-purple), #ea580c)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 40px rgba(253, 186, 116, 0.5)',
                      }}
                    >
                      <Play size={32} fill="white" color="white" style={{ marginLeft: '4px' }} />
                    </motion.div>
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                  }}>
                    Watch My Introduction
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls overlay (after started) */}
            {hasStarted && (
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 3,
              }}>
                {/* Part label */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'rgba(45, 212, 191, 0.1)',
                  border: '1px solid var(--card-border)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.1em',
                }}>
                  <motion.div
                    animate={isPlaying ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: isPlaying ? '#ef4444' : '#666' }}
                  />
                  {(videoSources[currentIndex] || videoSources[0]).label}
                </div>

                {/* Control buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} fill="white" style={{ marginLeft: '2px' }} />}
                  </button>

                  {/* Mute toggle */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      color: isMuted ? 'rgba(255,255,255,0.5)' : 'var(--accent-cyan)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
              </div>
            )}

            {/* Progress bar at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'rgba(255,255,255,0.1)',
              zIndex: 3,
            }}>
              <motion.div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                  borderRadius: '0 2px 2px 0',
                }}
              />
            </div>
          </div>

          {/* Video selector dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            alignItems: 'center',
            marginTop: '20px',
          }}>
            {videoSources.map((v, index) => (
              <button
                key={index}
                onClick={() => jumpToVideo(index)}
                aria-label={`Play video ${index + 1}`}
                style={{
                  width: currentIndex === index ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: currentIndex === index
                    ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))'
                    : 'rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  outline: 'none',
                  boxShadow: currentIndex === index ? '0 0 10px rgba(45,212,191,0.4)' : 'none',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
