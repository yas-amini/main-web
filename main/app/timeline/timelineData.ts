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
        period: "09/2025 — 11/2026",
        title: "iPhone & Android Programmer",
        company: "Malmö Yrkeshögskola • Higher Vocational Education • 280 YHP",
        shortDesc: "Mobile development with React Native, Swift/SwiftUI, Kotlin/Jetpack Compose, and on-device AI with CoreML & ML Kit.",
        fullDesc: "Comprehensive mobile development program covering cross-platform development with React Native, native iOS development with Swift and SwiftUI, and native Android development with Kotlin and Jetpack Compose. Includes on-device AI development with CoreML and ML Kit, interaction design for mobile devices, multilingual app development, and app store publishing. Features 20 weeks of workplace-based learning (LIA) and a final thesis project.",
        skills: ["React Native", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "CoreML", "ML Kit"]
    },
    {
        id: 2,
        period: "06/2025",
        title: "Python Programming for AI Development",
        company: "Yrkeshögskolan • Course • 30 YHP",
        shortDesc: "AI and machine learning fundamentals using Python, data visualization, ML frameworks, and hands-on AI model development.",
        fullDesc: "Completed coursework in Python programming and AI development. Covered Python syntax, standard libraries, Git version control, and ethical considerations in AI. Learned data visualization with Matplotlib, Seaborn, and Jupyter Notebooks. Gained skills in data handling with Pandas and machine learning with Scikit-learn, TensorFlow, and Keras. Developed an object detection AI model for cat face identification using YOLOv8, including data preprocessing of ~50,000 images in COCO format, model training with GPU acceleration, and achieving ~99% precision and recall.",
        skills: ["Python", "YOLOv8", "TensorFlow", "Scikit-learn", "Pandas", "Computer Vision", "Deep Learning", "Git"]
    },
    {
        id: 3,
        period: "02/2025",
        title: "Computer Technology",
        company: "NTI-skolan • Course • 100 GYP",
        shortDesc: "Computer systems, networks, and operating systems fundamentals.",
        fullDesc: "Studied computer systems, networks, and operating systems. Gained skills in hardware and software assembly and installation, network configuration, and system security.",
        skills: ["Networks", "Operating Systems", "Hardware", "System Security"]
    },
    {
        id: 4,
        period: "04/2024 - 06/2024  |  11/2024 - 01/2025",
        title: "Web Developer",
        company: "Strawberry • Internship",
        shortDesc: "Built features with TypeScript & Preact in Islands architecture, worked with Contentful CMS and component-driven development.",
        fullDesc: "Developed new features using TypeScript and Preact within Islands architecture. Worked with Contentful CMS, Emotion CSS, Storybook, and Jest. Built reusable components, wrote accessibility-focused tests, and contributed to SCSS to Emotion CSS migration. Developed an AI-powered alt-text generation script and implemented a microservice using NPM workspaces. Researched tech stack improvements including Koa to Hono + Vite migration and AWS Lambda deployment.",
        skills: ["TypeScript", "Preact", "Contentful CMS", "Emotion CSS", "Jest", "Storybook"]
    },
    {
        id: 5,
        period: "02/2023 - 12/2025",
        title: "Frontend Developer",
        company: "EC Utbildning • Higher Vocational Education • 400 YHP",
        shortDesc: "Comprehensive frontend development program covering modern web technologies and frameworks.",
        fullDesc: "Acquired in-depth knowledge of HTML5, CSS3, JavaScript, React, TypeScript, Angular, C#, ASP.NET, and UX/UI design principles with Agile methodologies. Thesis project: Developed an interactive web platform for real-time tracking and visualization of outdoor cats using React, Emotion CSS, and Mapbox API with responsive design and dynamic data visualization.",
        skills: ["React", "TypeScript", "Angular", "C#", "ASP.NET", "UX/UI"]
    },
    {
        id: 6,
        period: "01/2014 — 12/2023",
        title: "Front Desk Receptionist / Office Coordinator",
        company: "Excellence Hotels • Work",
        shortDesc: "Managed hotel systems, automated bookings, and trained new team members.",
        fullDesc: "Managed Property Management Systems (PMS), integrated systems, and automated bookings. Maintained and updated content across multiple platforms. Trained and documented procedures for over 10 new employees on various systems. Identified and resolved discrepancies between different integrated systems and platforms.",
        skills: ["PMS Systems", "System Integration", "Training", "Documentation"]
    },
];
