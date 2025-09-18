import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Desenvolvedor Full-Stack</h1>
          <p className="lead">
            Eu construo apps rápidos, seguros e escaláveis em JavaScript/TypeScript, Java e Python.
          </p>
          <div className="actions">
            <a className="btn" href="#projetos">Ver projetos</a>
            <a className="btn ghost" href="#contato" aria-label="Abrir seção de contato">Contato</a>
          </div>
        </div>
        <div className="hero-img">
          <Image src="/images/profile.jpeg" alt="Foto de perfil" width={520} height={520} priority />
        </div>
      </div>
    </section>
  );
}
