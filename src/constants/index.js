import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
    description: "Building end-to-end web applications with modern technologies"
  },
  {
    title: "Web Scraping Specialist",
    icon: mobile,
    description: "Extracting and analyzing data from websites and landing pages"
  },
  {
    title: "WordPress Developer",
    icon: backend,
    description: "Creating custom websites and CMS solutions with WordPress"
  },
  {
    title: "Python Developer",
    icon: creator,
    description: "Developing scripts, automation, and backend systems with Python"
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Scraping Specialist & Full Stack Developer",
    company_name: "Blue Ocean Production",
    icon: "💼",
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developed web scraping solutions to extract data from landing pages and service sections",
      "Built full-stack applications using Next.js, React, and modern JavaScript frameworks",
      "Implemented server-side functionality using PHP and Node.js for backend operations",
      "Designed and managed SQL databases, writing efficient queries and ensuring data integrity",
      "Created automated data collection processes and developed APIs for data integration",
    ],
    technologies: ["Python", "Next.js", "PHP", "SQL", "JavaScript", "Web Scraping"]
  },
  {
    title: "Web Developer Intern",
    company_name: "IT ADVISOR",
    icon: "💻",
    iconBg: "#E6DEDD",
    date: "August 2023",
    points: [
      "Developed company websites using WordPress CMS with custom PHP functionality",
      "Created and optimized SQL databases for website content management",
      "Implemented front-end features using modern web technologies (HTML5, CSS3, JavaScript)",
      "Assisted in website maintenance, performance optimization, and troubleshooting",
      "Collaborated with team members on client projects and requirements analysis",
    ],
    technologies: ["WordPress", "PHP", "SQL", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Arabic Language Teacher",
    company_name: "Floraison Kentira",
    icon: "📚",
    iconBg: "#383E56",
    date: "May 2021 - 2022",
    points: [
      "Taught Arabic language to children in kindergarten and elementary sections",
      "Developed educational methods and teaching materials for young learners",
      "Managed classroom activities and organized educational programs",
      "Enhanced communication and teaching skills through practical experience",
    ],
    technologies: ["Teaching", "Communication", "Curriculum Development"]
  },
];

const testimonials = [
  {
    testimonial:
      "Abdellah demonstrated exceptional problem-solving skills in our web scraping project. His attention to detail and technical expertise delivered exactly what we needed.",
    name: "Blue Ocean Team",
    designation: "Project Manager",
    company: "Blue Ocean Production",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    testimonial:
      "During his internship, Abdellah showed great initiative and quickly adapted to our development workflow. His WordPress contributions were valuable to our projects.",
    name: "IT ADVISOR Team",
    designation: "Development Lead",
    company: "IT ADVISOR",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    testimonial:
      "Abdellah's dedication to learning new technologies and his passion for web development make him a promising talent in the field.",
    name: "Academic Advisor",
    designation: "Instructor",
    company: "Bachelor Program",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
];

const projects = [
  {
    id: 1,
    name: "Web Scraping Automation System",
    description:
      "Advanced web scraping system that extracts and analyzes data from multiple landing pages and service sections, providing valuable business intelligence and competitive insights.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Automation",
        color: "orange-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
    category: "scraping",
    featured: true,
  },
  {
    id: 2,
    name: "WordPress Business Website",
    description:
      "Professional company website built with WordPress CMS, featuring custom PHP functionality, responsive design, and optimized SQL database for content management.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "purple-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
    category: "web",
    featured: false,
  },
  {
    id: 3,
    name: "Full Stack Web Application",
    description:
      "Modern full-stack application built with Next.js and React, featuring responsive UI, backend API integration, and real-time data processing capabilities.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "cyan-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
    category: "fullstack",
    featured: true,
  },
  {
    id: 4,
    name: "Flutter Mobile Application",
    description:
      "Cross-platform mobile application developed with Flutter, providing seamless user experience across both iOS and Android platforms with modern UI design.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "cyan-text-gradient",
      },
      {
        name: "Mobile",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
    category: "mobile",
    featured: false,
  },
  {
    id: 5,
    name: "IoT Network Security System",
    description:
      "IoT security solution implementing network protection protocols and monitoring systems for connected devices, ensuring data integrity and system security.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Network Security",
        color: "red-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
    category: "iot",
    featured: false,
  },
];

export { services, technologies, experiences, testimonials, projects };