// ============================================================================
// DATA TYPES
// ============================================================================

export interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  shortDesc: string;
  fullDesc: string;
  skills: string[];
}

// ============================================================================
// DATA
// ============================================================================

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2025.03 — 2027",
    title: "Frontend Development Student",
    company: "EC Utbildning • 400 YHP",
    shortDesc:
      "Comprehensive frontend development program covering HTML, CSS, JavaScript, React, TypeScript, Angular, and UX/UI design.",
    fullDesc:
      "Ongoing studies in Frontend Development covering HTML, CSS, JavaScript, React, PHP, and C#. Learning UX/UI design principles including responsive design and web accessibility. Working with web technologies including web server management and IT security. Program includes 25 weeks of workplace-based learning (LIA) internship from April 2026 to December 2026. Comfortable working in agile teams and eager to contribute to innovative web projects.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Express.js",
      "MySQL",
      "HTML",
      "CSS",
      "UX/UI",
    ],
  },
  {
    id: 2,
    period: "2019.09 — 2021.06",
    title: "Webmaster",
    company: "University West • 120 hp",
    shortDesc:
      "Web technologies, IT security, server management, and communication studies.",
    fullDesc:
      "Studied web technologies including web server management and IT security. Gained knowledge in communication and text analysis. Developed skills in creating and maintaining web platforms with focus on technical implementation and user communication.",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "PHP",
      "C#",
      "Database Management",
      "IT Security",
      "Web Server Management",
      "UX/UI Design",
    ],
  },
  {
    id: 3,
    period: "2022.01 — 2022.05",
    title: "SEO & Content Producer",
    company: "Omnitas Consulting",
    shortDesc:
      "CMS management, SEO-optimized content creation, and digital marketing campaigns.",
    fullDesc:
      "Managed CMS and automation for research and article production for websites. Created SEO-optimized content and analyzed traffic data. Planned and executed digital marketing campaigns. Provided support in project coordination using Monday CMS.",
    skills: [
      "SEO",
      "Content Production",
      "CMS",
      "Digital Marketing",
      "Google Analytics",
    ],
  },
  {
    id: 4,
    period: "2014 — 2019",
    title: "Content Creator & Social Media Manager",
    company: "Hold That Pose For Me",
    shortDesc:
      "Documented Sweden's street dance scene, creating digital content and managing social media.",
    fullDesc:
      "Filmed and documented Sweden's street dance scene, creating digital content for online audiences. Managed social media pages, optimizing posts for engagement and SEO. Produced multimedia content for cultural events and performances, strengthening storytelling and user experience.",
    skills: [
      "Content Creation",
      "Social Media",
      "SEO",
      "Adobe Creative Suite",
      "Storytelling",
    ],
  },
  {
    id: 5,
    period: "2014 — 2019",
    title: "Sales Advisor",
    company: "Massimo Dutti",
    shortDesc:
      "Customer service, inventory management, and sales target achievement.",
    fullDesc:
      "Provided personalized customer service and product expertise. Managed cash register, inventory, and store presentation. Actively contributed to achieving and exceeding sales targets.",
    skills: [
      "Customer Service",
      "Sales",
      "Inventory Management",
      "Communication",
    ],
  },
  {
    id: 6,
    period: "2011.09 — 2014.06",
    title: "Korean Studies",
    company: "Stockholm University • University Education • 120 hp",
    shortDesc:
      "Korean language, culture, society, politics, and inter-Korean relations.",
    fullDesc:
      "Completed comprehensive studies in Korean language, culture, and society. Studied Korean politics and inter-Korean relations. Developed cross-cultural communication skills and analytical abilities.",
    skills: [
      "Korean Language & Translation",
      "East Asian Politics",
      "Inter-Korean Relations",
      "Cultural Analysis",
      "Academic Research",
      "Literature Studies",
    ],
  },
];
