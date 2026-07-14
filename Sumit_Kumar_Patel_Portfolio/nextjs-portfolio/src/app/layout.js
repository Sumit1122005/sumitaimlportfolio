import './globals.css';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL('https://sumitkumarpatel.dev'), // Replace with actual domain
  title: 'Sumit Kumar Patel | AI Automation Engineer & AI/ML Engineer',
  description: 'Portfolio of Sumit Kumar Patel, an Aspiring AI Automation and AI/ML Engineer with experience in building intelligent applications and automation workflows.',
  openGraph: {
    title: 'Sumit Kumar Patel | AI Automation Engineer & AI/ML Engineer',
    description: 'Portfolio of Sumit Kumar Patel, an Aspiring AI Automation and AI/ML Engineer.',
    url: 'https://sumitkumarpatel.dev', // Replace with your actual domain
    siteName: 'Sumit Kumar Patel Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can add an actual OG image in the public folder later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Kumar Patel | AI Automation Engineer & AI/ML Engineer',
    description: 'Portfolio of Sumit Kumar Patel, an Aspiring AI Automation and AI/ML Engineer.',
    images: ['/og-image.jpg'], // Add your image in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StarryBackground />
        <Navbar />
        <main className="container" style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
