'use client';

import { VideoProvider } from '@/components/VideoContext';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }) {
  return (
    <VideoProvider>
      <StarryBackground />
      <Navbar />
      <main className="container" style={{ paddingTop: '80px' }}>
        {children}
      </main>
    </VideoProvider>
  );
}
