'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef([]);

  const registerVideo = useCallback((videoEl) => {
    if (videoEl && !videoRefs.current.includes(videoEl)) {
      videoRefs.current.push(videoEl);
      videoEl.muted = false;
    }
  }, []);

  const unregisterVideo = useCallback((videoEl) => {
    videoRefs.current = videoRefs.current.filter(v => v !== videoEl);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      videoRefs.current.forEach(video => {
        video.muted = newMuted;
      });
      return newMuted;
    });
  }, []);

  return (
    <VideoContext.Provider value={{ isMuted, toggleMute, registerVideo, unregisterVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}
