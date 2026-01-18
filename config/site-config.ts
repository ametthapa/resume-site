// Site Configuration
// Edit this file to customize all the content on your resume site

import { University } from "lucide-react"

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Amrit Thapa",
    title: "Software Engineer | Backend Developer",
    email: "amet.thapa27@gmail.com",
    phone: "+49 1556 5707404",
    location: "Magdeburg, Germany",
    profileImage: "/header_photo.jpg",
    resumePDF: "/resume.pdf",
  },

  // Bio/About Section
  bio: {
    paragraphs: [
      "I'm a passionate, self-motivated software engineer with experience in back-end development, cloud services and automation tools.",
      "3+ years of industry experience, specializing in building scalable web applications. Handson experiences with AWS cloud services like S3, Lambda, Queue. Leadership experience as a team lead for a project involving multiple developers.",
      "Currently pursuing my Master's in Digital Engineering at Otto von Guericke University, Magdeburg, Germany.",
    ],
  },

  // Social Links
  social: {
    github: "https://github.com/ametthapa",
    linkedin: "https://www.linkedin.com/in/amritthapa27/",
    // twitter: "https://twitter.com/yourusername",
  },

  // Work Experience
  experience: [
    {
      period: "April 2025 — August 2025",
      title: "Software Engineer",
      company: "Fanz Unlimited LLC",
      // companyUrl: "https://techcorp.com",
      description: [
        "Implemented Live Streaming functionality integrating a vendor, also handling all the associated business logic to align with requirements",
        "Developed a CRUD in the admin panel that allows administrators to publish articles for platform updates and onboarding, while end users can view, read and like the article considering UI/UX.",
      ],
      technologies: ["PHP", "Javascript", "Cloud", "MySQL"],
      colorScheme: "chart-1", // Used for styling
    },
    {
      period: "July 2022 — April 2025",
      title: "Software Engineer",
      company: "Cedargate Technologies",
      companyUrl: "https://www.cedargate.com/",
      description:[
        "Implemented functionality to resume file generation from previous stages using S3 bucket, enhancing project resilience and secure data handling,",
        "Researched on new features and feasibility and working with team to complete it,",
        "Developed features to meet project requirements, demonstrating strong software engineering principles,",
        "Created various automated scripts (python, SQL procedures) to trigger schedules, fetch usercreated artifact information, and build tools to increase productivity and security compliance"
      ],
      technologies: ["JAVA", "AWS", "Angular", "MySQL"],
      colorScheme: "chart-2",
    },
    {
      period: "December 2024 — April 2025",
      title: "Software Engineer - Part Time",
      company: "Fanz Unlimited LLC",
      // companyUrl: "https://digitalagency.com",
      description:[
        "Implemented various functionalities connecting to vendors and their APIs into our platform for verifying user age and moderating(poizoning) shared content,",
        "Created a simple and robust User Interface for users on the platforms",
      ],
      technologies: ["PHP", "JavaScript", "APIs"],
      colorScheme: "chart-3",
    },
    {
      period: "July 2024 – October 2024",
      title: "Software Engineer - Part Time",
      company: "US Legal Pro",
      companyUrl: "https://uslegalpro.com/",
      description:[
        "Developed a feature that allows legal personnel to send customized emails to users, incorporating secure handling of sensitive data,,",
        "Designed and implemented functionality to sort raw data displayed in tables, streamlining the presentation, and enabling more efficient data analysis,",
        "Contributed to enhancing the user interface and overall usability of internal tools, improving operational efficiency"
      ],
      technologies: ["Java","JavaScript", "XML"],
      colorScheme: "chart-4",
    },
    {
      period: "December 2024 — April 2025",
      title: "Software Engineer - Trainee",
      company: "Cedargate Technologies",
      companyUrl: "https://www.cedargate.com",
      description:[
        "Improved debugging skills by resolving complex issues efficiently,",
        "Worked with AWS services, including CloudWatch, Code Commit, SQS and S3 bucket,",
        "Explored various aspects of software development, acquiring a comprehensive grasp of the entire development lifecycle"
      ],
      technologies: ["AWS", "Java", "JavaScript"],
      colorScheme: "chart-1",
    },
  ],

  //education
  education: [
    {
      courseName: "Master's in Digital Engineering",
      university: "Otto von Guericke University",
      universityUrl: "https://www.ovgu.de/",
      period: "October 2025 - Present",
      location: "Germany",
      colorScheme: "chart-1",
    },
    {
      courseName: "Bachelor of Science in Computer Science and Information Technology",
      university: "Tribhuvan University",
      universityUrl: "https://tu.edu.np/",
      period: "2016 - 2021",
      location: "Nepal",
      colorScheme: "chart-2",
    }

   
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
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Github"],
    copyrightName: "Amrit Thapa",
  },
}

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig
