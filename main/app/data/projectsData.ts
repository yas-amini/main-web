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
  context?: string; // "school" | "personal" | "freelance"
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Built from scratch with Next.js to practice React patterns. Implemented dark/light theme using Context API and CSS variables.",
    longDescription:
      "Personal project to learn Next.js and TypeScript. Features include theme persistence with localStorage, responsive design, and SEO optimization.",
    techStack: ["Next.js", "TypeScript", "React", "Emotion CSS"],
    liveUrl: "https://yas-amini.github.io", // UPDATE with your real URL
    githubUrl: "https://github.com/yas-amini/main-web",
    featured: true,
    context: "personal",
  },
  {
    id: 2,
    title: "Freaky Fashion Store",
    description:
      "School project: Full-stack e-commerce with product catalog, cart, and admin panel. Built REST API from scratch with Express.js.",
    longDescription:
      "EC Utbildning school assignment. Learned database design with SQLite, REST API architecture, and state management in React.",
    techStack: ["React", "Node.js", "Express", "SQLite"],
    githubUrl: "https://github.com/yas-amini", // UPDATE with actual repo
    featured: true,
    context: "school",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Practice project: Fetches real-time weather data from OpenWeatherMap API. Learned async/await and API integration.",
    longDescription:
      "Self-study project to practice working with external APIs and handling asynchronous JavaScript.",
    techStack: ["JavaScript", "HTML", "CSS", "REST API"],
    githubUrl: "https://github.com/yas-amini", // UPDATE with actual repo
    featured: false,
    context: "personal",
  },
];
