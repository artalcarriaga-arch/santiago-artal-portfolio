export const siteConfig = {
  name: "Santiago Artal",
  title: "Frontend Developer",
  description: "Portfolio of Santiago Artal — Frontend Developer",
  accentColor: "rgb(150, 20, 200) ",
  social: {
    email: "artalcarriaga@gmail.com",
    linkedin: "https://www.linkedin.com/in/santiago-artal/",
    twitter: "https://x.com/SantiagoAr79436",
    github: "https://github.com/artalcarriaga-arch",
  },
  aboutMe:
    "I'm a Frontend Developer focused on building modern, interactive, and scalable web experiences with React, TypeScript, Next.js, and Tailwind CSS.\n\nI'm currently working as a Frontend Developer Intern at Fundación Vive Tu Mente, contributing to responsive design, accessibility improvements, reusable UI components, and the development of payment and donation features.\n\nAlongside my internship, I build personal projects to explore new technologies and strengthen my skills in frontend development, API integration, and backend services. I also use AI-driven workflows, LLMs, prompt engineering, and AI-powered developer tools to improve my development process.\n\nMy background in teaching and operations has strengthened my communication, problem-solving, organization, and teamwork skills, helping me collaborate effectively in agile environments.",
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  projects: [
    {
      name: "Cashwise - Fintech App",
      description:
        "A full-stack financial web application focused on seamless money transfers and asset management, built with a modern react-based frontend and REST API integration",
      link: "https://pf-corewise-frontend.vercel.app/",
      skills: ["React", "Typescript", "Tailwind CSS", "Node.js", "AWS SES/S3"],
    },
    {
      name: "Maquiavelo AI - AI Chatbot",
      description:
        "An AI-powered SPA built with React and Gemini API, designed to maintain a consistent role and personality while resisting prompt manipulation through structured context rules and MCP",
      link: "https://proyecto-m3-santiago-artal.vercel.app/",
      skills: ["React", "TypeScript", "Gemini API", "MCP"],
    },
    {
      name: "MultiShop - E-commerce",
      description:
        "A full-stack e-commerce platform with a real-time product catalog, shopping cart, and Firebase-powered admin dashboard for inventory management",
      link: "https://proyecto-m5-santiago-artal.vercel.app/",
      skills: ["React", "JavaScript", "Firebase", "Firestore"],
    },
    {
      name: "Hotelia - Hotel Booking Platform (WIP)",
      description:
        "A hotel booking platform currently in development, featuring room search filters, responsive design, and reusable UI components. Built with React, TypeScript, and Next.js, with Firebase initialized for backend integration",
      link: "https://github.com/artalcarriaga-arch/Hotelia",
      skills: ["React", "TypeScript", "Next.js", "Firebase", "Responsive Design"],
    },
  ],
  experience: [
    {
      company: "Fundación Vive Tu Mente",
      title: "Frontend Developer Intern",
      dateRange: "October 2026 - Present · Internship",
      bullets: [
        "Improved responsive design and accessibility across the platform",
        "Developed reusable UI components, including headers, footers, and help widgets, to improve maintainability",
        "Implemented a dynamic visit counter",
        "Contributing to payment and donation features, including online payments and PAC/PAT payment methods",
        "Collaborating with the technical lead and backend developers to deliver frontend improvements",
      ],
    },
    {
      company: "Educational Institution / Private Tutoring",
      title: "English Teacher",
      dateRange: "Jul 2025 - Dec 2025",
      bullets: [
        "Taught English to 45+ students with different knowledge levels, communicating complex concepts clearly and effectively",
        "Planned lessons and managed schedules around specific learning goals, increasing student engagement and retention by 25%",
        "Provided personalized feedback and follow-up while adapting to different learning needs and challenges",
      ],
    },
    {
      company: "Soychú",
      title: "Production & Workflow Operator",
      dateRange: "Aug 2025 - Mar 2026",
      bullets: [
        "Performed critical operational tasks in fast-paced enviroments while maintaining over 98% accuracy",
        "Followed strict wuality control, safety, and operational procedures with zero recorded incidents",
        "Collaborated with production line teams to maintain continuous workflow and prevent unplanned downtime",
      ],
    },
  ],
  education: [
    {
      school: "Henry Bootcamp",
      degree: "Full Stack Web Developer",
      dateRange: "Mar 2026 - Jul 2026",
      achievements: [
        "Full-stack training Focused on modern web development",
        "Hand-on experiencie building frontend and backend applications",
        "Practical work woth React, TypeScript, Node.js, PostgreSQL and Firebase",
      ],
    },
  ],
};
