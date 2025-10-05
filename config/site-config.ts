// Site Configuration
// Edit this file to customize all the content on your resume site

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Amrit Thapa",
    title: "Software Engineer | Backend Developer",
    email: "amet.thapa27@gmail.com",
    phone: "+1 (234) 567-890",
    location: "Magdeburg, Germany",
    profileImage: "/header_photo.jpg",
    resumePDF: "/resume.pdf",
  },

  // Bio/About Section
  bio: {
    paragraphs: [
      "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
      "Currently, I'm a Senior Full-Stack Engineer at TechCorp, specializing in building scalable web applications. I contribute to the creation and maintenance of UI components that power our platform's frontend, ensuring our products meet web accessibility standards and best practices to deliver an inclusive user experience.",
      "In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with modern technologies.",
    ],
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // Work Experience
  experience: [
    {
      period: "2024 — Present",
      title: "Senior Frontend Engineer",
      company: "TechCorp",
      companyUrl: "https://techcorp.com",
      description:
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      colorScheme: "chart-1", // Used for styling
    },
    {
      period: "2022 — 2024",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      companyUrl: "https://startupxyz.com",
      description:
        "Developed and shipped highly interactive web applications for a fast-growing startup. Collaborated with designers to translate Figma designs into responsive, performant React applications. Implemented RESTful APIs and integrated with third-party services.",
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "AWS"],
      colorScheme: "chart-2",
    },
    {
      period: "2020 — 2022",
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      companyUrl: "https://digitalagency.com",
      description:
        "Built and maintained websites for various clients across different industries. Focused on creating responsive, accessible, and performant web experiences. Worked with modern JavaScript frameworks and CMS platforms.",
      technologies: ["Vue.js", "SCSS", "WordPress", "Figma"],
      colorScheme: "chart-3",
    },
  ],

  // Projects
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, checkout process, and payment integration. Built with modern technologies and best practices for scalability and performance.",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      image: "/modern-ecommerce-dashboard.png",
      projectUrl: "https://ecommerce-demo.com",
      colorScheme: "chart-1",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and advanced filtering capabilities.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "/task-management-kanban.png",
      projectUrl: "https://taskapp-demo.com",
      colorScheme: "chart-2",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather metrics. Integrates with multiple weather APIs for accurate data.",
      technologies: ["TypeScript", "Chart.js", "OpenWeather API", "Mapbox"],
      image: "/weather-dashboard-interface.png",
      projectUrl: "https://weather-demo.com",
      colorScheme: "chart-3",
    },
  ],

  // Contact Section
  contact: {
    title: "Get In Touch",
    description:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
  },

  // Footer
  footer: {
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    copyrightName: "Alex Morgan",
  },
}

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig
