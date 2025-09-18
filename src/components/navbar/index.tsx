import Link from "next/link";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <nav>
      <div className="container navwrap">
        <Link className="logo" href="/">Gabriel.dev</Link>
        <ul>{links.map(l => (<li key={l.href}><a href={l.href}>{l.label}</a></li>))}</ul>
      </div>
    </nav>
  );
}
