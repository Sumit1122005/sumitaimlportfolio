import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import { Mail, Phone, Code, Download } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />

      <footer style={{ 

        textAlign: 'center', 
        padding: '60px 20px', 
        borderTop: '1px solid var(--card-border)', 
        color: 'var(--text-secondary)', 
        marginTop: '80px',
        background: 'rgba(10, 10, 15, 0.5)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Download Resume Button */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="btn btn-primary"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '14px 28px',
              fontSize: '1.1rem',
              borderRadius: '30px',
              textDecoration: 'none'
            }}
          >
            <Download size={22} />
            Download Resume
          </a>

          {/* Contact Details & Social Links */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '10px'
          }}>
            <a href="mailto:sumitkumarpatel01122005@gmail.com" className="social-icon" aria-label="Email" title="Email: sumitkumarpatel01122005@gmail.com">
              <Mail size={20} />
            </a>
            <a href="tel:+917224825162" className="social-icon" aria-label="Phone" title="Phone: +91 7224825162">
              <Phone size={20} />
            </a>
            <a href="https://github.com/Sumit1122005" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub" title="GitHub">
              <img src="/github-logo.svg" alt="GitHub" width="20" height="20" style={{ filter: 'invert(1)' }} />
            </a>
            <a href="https://www.linkedin.com/in/sumit1122005" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com/SumitKumardb" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)" title="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://leetcode.com/u/sumitkumarpatel1122005/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode" title="LeetCode">
              <Code size={20} />
            </a>
          </div>

          <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.7 }}>
            © 2026 SUMIT KUMAR PATEL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}
