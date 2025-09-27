export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;   // demo
  repo?: string;  // opcional
};

export const projects: Project[] = [
  {
    title: "Governanta de Cidades",
    description: "App para reportar buracos e integrar com cashback de parceiros.",
    tags: ["Next.js", "Node", "PostgreSQL", "Maps"],
    image: "/images/p1.png",
    link: "https://example.com/demo1",
    repo: "https://github.com/usuario/projeto1",
  },
  {
    title: "Fila Digital",
    description: "Totem e painel com impressão térmica e dashboard.",
    tags: ["Next.JS", "Express", "WebSocket"],
    image: "/images/p2.png",
    link: "https://example.com/demo2",
    repo: "https://github.com/usuario/projeto2",
  },
  {
    title: "Dash Metabase",
    description: "Pipeline + Metabase em Docker para BI operacional.",
    tags: ["Docker", "Metabase", "SQL"],
    image: "/images/p3.png",
    link: "https://example.com/demo3",
    repo: "https://github.com/usuario/projeto3",
  },
];
