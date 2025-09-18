const items = [
  {
    role: "Analista de TI — EPAC",
    period: "jul/2022 • atual",
    desc: "Automação de rotinas, integrações e dashboards operacionais.",
  },
  {
    role: "Suporte de TI — Lapahe",
    period: "nov/2021 • jun/2022",
    desc: "Atendimento, scripts e manutenção de infraestrutura.",
  },
];

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <h2>Experiência</h2>
        <ul className="timeline">
          {items.map(i => (
            <li key={i.role}>
              <h3>{i.role} <span className="muted">· {i.period}</span></h3>
              <p className="muted">{i.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
