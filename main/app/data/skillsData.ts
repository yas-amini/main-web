// Skills data organized by category
export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Express.js"],
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Figma", "GitHub"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "Currently Learning",
    skills: ["Angular", "PHP", "C#"],
  },
];
