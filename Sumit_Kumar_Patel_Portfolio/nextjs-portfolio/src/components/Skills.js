'use client';

import { useState } from 'react';
import { Code, Server, Wrench, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All Tech');
  const { skills } = portfolioData;

  const categories = [
    { name: 'All Tech', icon: <CheckCircle2 size={16} /> },
    { name: 'AI/ML', icon: <Cpu size={16} /> },
    { name: 'Frontend', icon: <Code size={16} /> },
    { name: 'Backend', icon: <Server size={16} /> },
    { name: 'Tools & Design', icon: <Wrench size={16} /> },
    { name: 'Core CS', icon: <Database size={16} /> }
  ];

  const filteredSkills = activeTab === 'All Tech' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <h3 className="section-subtitle">EXPERTISE & TOOLS</h3>
        <h2 className="section-title" style={{ marginBottom: 0 }}>My Skills</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '12px', 
          marginBottom: '48px' 
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(cat.name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '30px',
              background: activeTab === cat.name ? 'rgba(45, 212, 191, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${activeTab === cat.name ? 'rgba(45, 212, 191, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
              color: activeTab === cat.name ? 'white' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {activeTab === cat.name && (
              <motion.div 
                layoutId="activeTab"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(45, 212, 191, 0.15)',
                  borderRadius: '30px'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              {cat.icon}
              {cat.name}
            </span>
          </button>
        ))}
      </motion.div>

      <motion.div 
        layout
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '20px',
          width: '100%'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className="dark-card" 
              style={{ 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '120px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle ambient glow on hover */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, rgba(45,212,191,0.1) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', zIndex: 1 }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <Code size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{skill.name}</h4>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', zIndex: 1 }}>
                {skill.category.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
