export default function Achievements() {
  const certifications = [
    'CodeAlpha Full Stack Web Development Internship Certificate.',
    'AI/ML Path 2026 – SkillEcted Webinar.',
    'Frame-to-Work Career Development Webinar – GUVI.',
    'MY Bharat Budget Quest 2026 – Ministry of Youth Affairs & Sports.'
  ];

  const achievements = [
    'Selected participant in GirlScript Summer of Code (GSSoC).',
    'Built AI/ML and Full Stack projects with practical implementation.',
    'Passionate about AI Agents, DSA, and intelligent systems.'
  ];

  return (
    <section className="section animate-fade-in" style={{ animationDelay: '1.0s' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
        <div>
          <h2 className="section-title">Certifications</h2>
          <div className="glass-card">
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="section-title">Achievements</h2>
          <div className="glass-card">
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
