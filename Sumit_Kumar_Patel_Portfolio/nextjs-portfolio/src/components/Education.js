'use client';

import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="education" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h3 className="section-subtitle">ACADEMIC TIMELINE</h3>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Education</h2>
      </motion.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', paddingLeft: '60px' }}>
        <motion.div 
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: 'top' }}
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} style={{ position: 'relative' }}>
              <motion.div 
                className="timeline-icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.2), type: "spring", stiffness: 200 }}
              >
                <GraduationCap size={14} />
              </motion.div>
              
              <div className="dark-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', flex: 1, minWidth: '250px' }}>
                    {edu.degree}
                  </h3>
                  <div className="pill-badge" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>
                    {edu.date}
                  </div>
                </div>
                
                <h4 style={{ fontSize: '1rem', color: 'var(--accent-purple)', marginBottom: '16px', fontWeight: '600' }}>
                  {edu.institution}
                </h4>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
