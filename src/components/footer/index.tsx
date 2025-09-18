export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Gabriel Carvalho B. de Araújo</p>
        <p className="muted">Feito com Next.js</p>
      </div>
    </footer>
  );
}
