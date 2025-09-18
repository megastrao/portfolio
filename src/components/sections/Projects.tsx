import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <h2>Projetos</h2>
        <div className="grid grid-3">
          {projects.map(p => (
            <article key={p.title} className="card">
              <div className="thumb">
                <Image src={p.image} alt={p.title} width={640} height={360} />
              </div>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              <div className="card-actions">
                <a className="btn" href={p.link} target="_blank">Demo</a>
                {p.repo && <a className="btn ghost" href={p.repo} target="_blank">Código</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
