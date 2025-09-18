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
    image: "/images/p1.jpg",
    link: "https://example.com/demo1",
    repo: "https://github.com/usuario/projeto1",
  },
  {
    title: "Fila Digital",
    description: "Totem e painel com impressão térmica e dashboard.",
    tags: ["React", "Express", "WebSocket"],
    image: "/images/p2.jpg",
    link: "https://example.com/demo2",
  },
  {
    title: "Dash Metabase",
    description: "Pipeline + Metabase em Docker para BI operacional.",
    tags: ["Docker", "Metabase", "SQL"],
    image: "/images/p3.jpg",
    link: "https://example.com/demo3",
  },
];
