const skills = [
  "TypeScript", "Next.js", "React", "Node.js", "Java", "Spring",
  "Python", "PostgreSQL", "MariaDB", "Docker", "Git", "CI/CD",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="tags">
          {skills.map(s => <span key={s} className="tag">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
