'use client';

import { UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { about, hero } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h3 className="section-subtitle">PROFILE OVERVIEW</h3>
        <h2 className="section-title" style={{ marginBottom: 0 }}>About Me</h2>
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', width: '100%' }}>
        {/* Left Column */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <motion.div 
            className="dark-card" 
            style={{ flex: 1 }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ 
                background: 'rgba(168, 85, 247, 0.1)', 
                padding: '12px', 
                borderRadius: '12px',
                color: 'var(--accent-purple)'
              }}>
                <UserCircle size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Who I Am</h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '1.05rem' }}>
              {about.description1}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              {about.description2}
            </p>
          </motion.div>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <motion.div 
              className="dark-card" 
              style={{ flex: 1, textAlign: 'center', padding: '32px 24px' }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--accent-purple)', marginBottom: '8px', lineHeight: 1 }}>
                {about.graduationYear}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>
                GRADUATION YEAR
              </div>
            </motion.div>
            
            <motion.div 
              className="dark-card" 
              style={{ flex: 1, textAlign: 'center', padding: '32px 24px' }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--accent-purple)', marginBottom: '8px', lineHeight: 1 }}>
                {about.projectsCount}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>
                MAJOR PROJECTS
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Profile Picture */}
        <motion.div 
          style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              aspectRatio: '4/5',
              background: 'linear-gradient(145deg, rgba(26,26,36,0.8), rgba(13,13,18,0.8))',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(168,85,247,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img 
              src="/profile-new.jpg" 
              alt="Sumit Kumar Patel" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </motion.div>
          <h3 style={{ fontSize: '2.2rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }} className="text-gradient">
            {hero.name}
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
