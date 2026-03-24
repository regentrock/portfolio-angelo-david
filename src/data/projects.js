export const projectsData = [
  {
    id: 1,
    title: "Portfólio Profissional",
    description: "Portfólio pessoal desenvolvido com Next.js, focado em performance, SEO e componentização. Integração com API local para gerenciamento dinâmico de projetos e estrutura escalável para futuras expansões.",
    technologies: ["Next.js", "JavaScript", "CSS Modules", "CSS3", "Git"],
    githubUrl: "https://github.com/regentrock/portfolio-angelo-david",
    liveUrl: "https://portfolio-angelo.com",
    imageUrl: "/projects/portfolio.png",
    featured: true,
    year: "2026"
  },
  {
    id: 2,
    title: "Weather App - Aplicativo Climático",
    description: "Aplicação de previsão do tempo com consumo de API externa, busca por cidades e exibição dinâmica de dados climáticos. Interface responsiva e manipulação de estados com React Hooks.",
    technologies: ["React.js", "JavaScript", "REST API", "CSS Modules", "CSS3", "Git"],
    githubUrl: "https://github.com/regentrock/weather-react-app",
    liveUrl: "https://weather-react-app-lilac.vercel.app/",
    imageUrl: "/projects/weather-app.png",
    featured: true,
    year: "2025"
  },
  {
    id: 3,
    title: "WeekFlow - Gerenciador de Tarefas",
    description: "Aplicação completa de gerenciamento de tarefas semanais com drag-and-drop entre dias, persistência de dados, filtros e interface responsiva. Foco em UX e organização visual da semana.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Dnd-kit", "Context API", "Git"],
    githubUrl: "https://github.com/regentrock/weekflow-next-ts",
    liveUrl: 'https://weekflow-next-ts.vercel.app',
    imageUrl: "/projects/weekflow.png",
    featured: true,
    year: "2026"
  }
];

export const getProjects = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return projectsData;
};

export const getProjectById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return projectsData.find(project => project.id === id);
};

export const getFeaturedProjects = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return projectsData.filter(project => project.featured);
};