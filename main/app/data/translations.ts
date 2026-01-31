// All UI text translations for the portfolio
// You can update the Swedish (sv) translations as needed!

export type Language = "en" | "sv";

export const translations = {
  en: {
    // Hero Section
    hero: {
      badge: "Seeking LIA Internship — April 2026",
      title: "[ FRONTEND DEVELOPER ]",
      description:
        "Building accessible, user-friendly web interfaces with React & TypeScript.",
      studying: "Currently studying frontend development at EC Utbildning.",
      location: "Stockholm, Sweden",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
      resumeLink: "/CV-EN.pdf",
    },

    // About Section
    about: {
      title: "[ ABOUT ]",
      heading: "Who I Am",
      paragraph1:
        "I'm a frontend development student at EC Utbildning in Sweden, passionate about building accessible and user-friendly web interfaces. My journey into tech started with a curiosity about how websites work, and has grown into a deep interest in creating meaningful digital experiences.",
      paragraph2:
        "Currently studying React, TypeScript, and modern web development practices. I bring a unique background in SEO, content creation, and customer service — skills that help me understand both the technical and human sides of building products.",
      paragraph3:
        "I'm looking for a LIA internship starting April 2026 where I can contribute to real projects, learn from experienced developers, and grow as part of a collaborative team.",
      highlights: {
        student: "frontend development student",
        background: "SEO, content creation, and customer service",
        internship: "LIA internship starting April 2026",
      },
      infoLabels: {
        location: "Location",
        education: "Education",
        languages: "Languages",
        availability: "LIA Availability",
      },
      infoValues: {
        location: "Stockholm, Sweden",
        education: "EC Utbildning (2025–2027)",
        languages: "English, Swedish, Korean",
        availability: "April 2026",
      },
    },

    // Skills Section
    skills: {
      title: "[ SKILLS ]",
      heading: "Tech Stack",
    },

    // Projects Section
    projects: {
      title: "[ PROJECTS ]",
      heading: "What I've Built",
      context: {
        school: "School Project",
        personal: "Personal Project",
        freelance: "Freelance",
      },
      viewLive: "Live Demo",
      viewCode: "View Code",
    },

    // Timeline Section
    timeline: {
      title: "[ EXPERIENCES ]",
      heading: "My Journey",
      description1: "A timeline of my experiences",
      description2: "Click on each experience to learn more",
      beginning: "The Beginning",
    },

    // Contact Section
    contact: {
      title: "[ CONTACT ]",
      heading: "Let's Connect",
      description:
        "Interested in working together or have questions about my work? I'd love to hear from you.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again.",
    },

    // Footer / Navigation
    nav: {
      logo: "YASAMIN",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  },

  sv: {
    // Hero Section
    hero: {
      badge: "Söker LIA-praktik — April 2026",
      title: "[ FRONTENDUTVECKLARE ]",
      description:
        "Bygger tillgängliga, användarvänliga webbgränssnitt med React & TypeScript.",
      studying: "Studerar just nu frontendutveckling på EC Utbildning.",
      location: "Stockholm, Sverige",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "CV",
      resumeLink: "/CV-SV.pdf",
    },

    // About Section
    about: {
      title: "[ OM MIG ]",
      heading: "Vem jag är",
      paragraph1:
        "Jag är en frontendutvecklingsstudent på EC Utbildning i Sverige, passionerad för att bygga tillgängliga och användarvänliga webbgränssnitt. Min resa in i tech började med en nyfikenhet på hur webbplatser fungerar, och har vuxit till ett djupt intresse för att skapa meningsfulla digitala upplevelser.",
      paragraph2:
        "Studerar just nu React, TypeScript och moderna webbutvecklingsmetoder. Jag har en unik bakgrund inom SEO, innehållsskapande och kundservice — kompetenser som hjälper mig förstå både den tekniska och mänskliga sidan av produktutveckling.",
      paragraph3:
        "Jag söker en LIA-praktik med start april 2026 där jag kan bidra till riktiga projekt, lära mig av erfarna utvecklare och växa som en del av ett samarbetande team.",
      highlights: {
        student: "frontendutvecklingsstudent",
        background: "inom SEO, innehållsskapande och kundservice",
        internship: "LIA-praktik med start april 2026",
      },
      infoLabels: {
        location: "Plats",
        education: "Utbildning",
        languages: "Språk",
        availability: "LIA-tillgänglighet",
      },
      infoValues: {
        location: "Stockholm, Sverige",
        education: "EC Utbildning (2025–2027)",
        languages: "Engelska, Svenska, Koreanska",
        availability: "April 2026",
      },
    },

    // Skills Section
    skills: {
      title: "[ KOMPETENSER ]",
      heading: "Teknisk stack",
    },

    // Projects Section
    projects: {
      title: "[ PROJEKT ]",
      heading: "Vad jag har byggt",
      context: {
        school: "Skolprojekt",
        personal: "Personligt projekt",
        freelance: "Frilans",
      },
      viewLive: "Live-demo",
      viewCode: "Visa kod",
    },

    // Timeline Section
    timeline: {
      title: "[ ERFARENHETER ]",
      heading: "Min resa",
      description1: "En tidslinje över mina upplevelser",
      description2: "Klicka på varje upplevelse för att läsa mer",
      beginning: "Början",
    },

    // Contact Section
    contact: {
      title: "[ KONTAKT ]",
      heading: "Låt oss höras",
      description:
        "Intresserad av att samarbeta eller har frågor om mitt arbete? Jag vill gärna höra från dig.",
      nameLabel: "Namn",
      namePlaceholder: "Ditt namn",
      emailLabel: "E-post",
      emailPlaceholder: "din@epost.se",
      messageLabel: "Meddelande",
      messagePlaceholder: "Ditt meddelande...",
      send: "Skicka meddelande",
      sending: "Skickar...",
      success: "Meddelandet har skickats!",
      error: "Något gick fel. Försök igen.",
    },

    // Footer / Navigation
    nav: {
      logo: "YASAMIN",
      about: "Om mig",
      skills: "Kompetenser",
      projects: "Projekt",
      contact: "Kontakt",
    },
  },
} as const;

// Helper type to get translation keys
export type TranslationKeys = typeof translations.en;
