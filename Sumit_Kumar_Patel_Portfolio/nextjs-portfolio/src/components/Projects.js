'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h3 className="section-subtitle">PORTFOLIO</h3>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px', width: '100%' }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="dark-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient project glow */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
              borderRadius: '50%'
            }} />
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', zIndex: 1 }}>{project.title}</h3>
            
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.05em', zIndex: 1 }}>
              {project.techStack}
            </div>
            
            <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '32px', lineHeight: '1.7', fontSize: '1.05rem', zIndex: 1 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', zIndex: 1 }}>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '600', flex: 1 }}>
                <img src="/github-logo.svg" alt="GitHub" width="18" height="18" style={{ filter: 'invert(1)' }} /> Code
              </a>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '600', flex: 1 }}>
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
