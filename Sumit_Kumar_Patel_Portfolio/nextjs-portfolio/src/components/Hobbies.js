'use client';

import { motion } from 'framer-motion';
import { Rocket, Bot, Users, Sparkles, BrainCircuit, CloudCog, Brush, Book } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const iconMap = {
  rocket: Rocket,
  bot: Bot,
  users: Users,
  sparkles: Sparkles,
  brain: BrainCircuit,
  'cloud-cog': CloudCog,
  brush: Brush,
  book: Book,
};

export default function Hobbies() {
  const { hobbies } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hobbies" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h3 className="section-subtitle">PERSONAL INTERESTS</h3>
        <h2 className="section-title" style={{ marginBottom: 0 }}>My Hobbies</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '24px', 
          width: '100%' 
        }}
      >
        {hobbies.map((hobby, index) => {
          const IconComponent = iconMap[hobby.icon];
          return (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="dark-card" 
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '36px 24px',
                cursor: 'default'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1))',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.15), inset 0 0 12px rgba(168, 85, 247, 0.05)',
              }}>
                {IconComponent && (
                  <IconComponent 
                    size={28} 
                    strokeWidth={1.8}
                    style={{ color: '#a855f7' }}
                  />
                )}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>
                {hobby.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {hobby.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
