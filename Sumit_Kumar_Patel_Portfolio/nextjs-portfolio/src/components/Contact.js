'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

// Utility for rendering the correct inline SVG based on name
const SocialIcon = ({ type }) => {
  if (type === 'github') {
    return <img src="/github-logo.svg" alt="GitHub" width="20" height="20" style={{ filter: 'invert(1)' }} />;
  }
  if (type === 'linkedin') {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
  }
  if (type === 'leetcode') {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.53 5.23 5.23 0 0 0 .889 2.115 5.205 5.205 0 0 0 1.914 1.583 5.168 5.168 0 0 0 2.457.478 5.148 5.148 0 0 0 2.428-.621l4.57-2.67c.36-.21.603-.564.673-.972a1.077 1.077 0 0 0-.156-.81 1.054 1.054 0 0 0-.616-.484 1.066 1.066 0 0 0-.91.134l-4.57 2.67a3.085 3.085 0 0 1-1.464.376 3.102 3.102 0 0 1-1.474-.288 3.13 3.13 0 0 1-1.15-.95 3.14 3.14 0 0 1-.532-1.272 3.22 3.22 0 0 1 .074-1.523 3.167 3.167 0 0 1 .724-1.268l3.854-4.126 5.406-5.788a1.385 1.385 0 0 0 .19-1.576A1.378 1.378 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.381h7.905a1.38 1.38 0 0 0 1.38-1.381 1.38 1.38 0 0 0-1.38-1.382h-7.905z"/></svg>;
  }
  return null;
};

export default function Contact() {
  const { contact } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    try {
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      window.location.href = `mailto:sumitkumarpatel01122005@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      setSubmitStatus('success');
      e.target.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h3 className="section-subtitle">GET IN TOUCH</h3>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Contact Me</h2>
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', width: '100%' }}>
        
        {/* Left Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dark-card" 
          style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Send a Message</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Your Name</label>
              <input type="text" name="name" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Email Address</label>
              <input type="email" name="email" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Subject</label>
              <input type="text" name="subject" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea name="message" required rows="4" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', resize: 'vertical', outline: 'none' }}></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} style={{ 
              width: '100%', 
              padding: '16px', 
              borderRadius: '30px', 
              background: 'linear-gradient(135deg, #a855f7, #7c3aed)', 
              color: 'white', 
              fontWeight: '700', 
              fontSize: '1rem',
              letterSpacing: '0.03em',
              border: 'none', 
              cursor: isSubmitting ? 'not-allowed' : 'pointer', 
              marginTop: '12px', 
              opacity: isSubmitting ? 0.7 : 1,
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-body)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
            {submitStatus === 'success' && <p style={{ color: '#10b981', textAlign: 'center', marginTop: '8px' }}>Message sent successfully!</p>}
            {submitStatus === 'error' && <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '8px' }}>Failed to send message. Please try again or email me directly.</p>}
          </form>
        </motion.div>

        {/* Right Column: Contact Details & Social Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dark-card" 
          style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                padding: '16px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--accent-purple)'
              }}>
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '4px' }}>EMAIL</div>
                <a href={`mailto:${contact.email}`} style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{contact.email}</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                padding: '16px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--accent-purple)'
              }}>
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '4px' }}>PHONE</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{contact.phone}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                padding: '16px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--accent-purple)'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '4px' }}>LOCATION</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{contact.location}</div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '8px 0' }} />

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '24px' }}>Find Me On</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contact.socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px', 
                    padding: '16px 24px', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <div style={{ color: 'var(--text-primary)' }}>
                    <SocialIcon type={social.icon} />
                  </div>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
