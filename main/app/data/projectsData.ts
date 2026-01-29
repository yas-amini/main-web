// Projects data - Update these with your real projects!
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and TypeScript, featuring dark/light mode and responsive design.",
    longDescription:
      "Built this portfolio from scratch to showcase my projects and skills. Implemented theme switching with React Context, responsive CSS, and optimized for SEO.",
    techStack: ["Next.js", "TypeScript", "React", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/yas-amini/main-web",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "Full-stack fashion store with product catalog, cart functionality, and admin panel.",
    longDescription:
      "Developed a full-stack e-commerce application with React frontend and Express.js backend. Features include product search, shopping cart, and an admin interface for managing inventory.",
    techStack: ["React", "Node.js", "Express", "SQLite"],
    githubUrl: "https://github.com/yas-amini",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location search and 5-day forecast.",
    longDescription:
      "Built a weather dashboard that fetches real-time data from a weather API. Features include city search, current conditions, and extended forecast with responsive charts.",
    techStack: ["JavaScript", "HTML", "CSS", "REST API"],
    githubUrl: "https://github.com/yas-amini",
    featured: false,
  },
];
