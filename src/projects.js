// This is your project database - update this array to add/remove projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image: null, // Add image path when you have one (e.g., "/projects/ecommerce.jpg")
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team features, drag-and-drop interface, and project analytics.",
    image: null,
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/task-management",
    liveLink: "https://taskmanager-demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps, 7-day forecasts, location search, and beautiful data visualizations.",
    image: null,
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules", "Leaflet"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://weather-demo.com"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media managers with real-time metrics, post scheduling, and engagement tracking.",
    image: null,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/social-dashboard",
    liveLink: "https://social-demo.com"
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Web application that uses AI to generate blog posts, social media captions, and marketing copy with OpenAI API.",
    image: null,
    technologies: ["React", "Node.js", "OpenAI API", "Express", "MongoDB"],
    githubLink: "https://github.com/yourusername/ai-content-generator",
    liveLink: "https://ai-content-demo.com"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS featuring dark mode, animations, and contact form.",
    image: null,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Formspree"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://yourportfolio.com"
  }
];

export default projects;