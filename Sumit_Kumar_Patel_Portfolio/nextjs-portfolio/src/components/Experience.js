export default function Experience() {
  return (
    <section className="section animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <h2 className="section-title">Internship Experience</h2>
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '5px' }}>Full Stack Web Development Intern</h3>
            <p style={{ fontWeight: '500', color: 'var(--accent-color)' }}>CodeAlpha</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'var(--text-secondary)' }}>Oct 2025 – Nov 2025</p>
          </div>
        </div>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Built applications using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB and MySQL.</li>
          <li>Worked on frontend development, API integration, debugging, and optimization.</li>
        </ul>
      </div>
    </section>
  );
}
