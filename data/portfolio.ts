type ProjectCollaborator = {
  username: string;
  name?: string;
  avatarUrl?: string;
};

type Project = {
  name: string;
  type: string;
  image: string;
  description: string;
  stack: string[];
  collaborators?: ProjectCollaborator[];
};

export const frontend = [
  { name: "React", icon: "react", color: "#61dafb" },
  { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#38bdf8" },
  { name: "MUI", icon: "mui", color: "#007fff" },
];

export const backend = [
  { name: "NestJS", icon: "nestjs", color: "#e0234e" },
  { name: "Golang", icon: "go", color: "#00add8" },
  { name: "Spring Boot", icon: "springboot", color: "#6db33f" },
  {
    name: "Elysia",
    iconUrl: "https://elysiajs.com/assets/elysia.svg",
    color: "#f4f4f5",
  },
];

export const tools = [
  { name: "Docker", icon: "docker", color: "#2496ed" },
  { name: "Git", icon: "git", color: "#f05032" },
  { name: "Figma", icon: "figma", color: "#f24e1e" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169e1" },
  { name: "Postman", icon: "postman", color: "#ff6c37" },
  { name: "Cloudflare", icon: "cloudflare", color: "#f38020" },
];

export const projects: Project[] = [
  {
    name: "ACS Website",
    type: "Department website",
    image: "/acs.png",
    description:
      "The official website for the Applied Computer Science department at KMUTT, showcasing program information and activities.",
    stack: ["Next.js", "Elysia"],
    collaborators: [
      {
        username: "Narutchai01",
        name: "Narutchai",
        avatarUrl: "",
      },
      {
        username: "suchanan09",
        name: "ZM",
        avatarUrl: "",
      },
      {
        username: "chanatip03",
        name: "Chanatip",
        avatarUrl: "",
      },
    ],
  },
  {
    name: "Glory",
    type: "Film platform",
    image: "/glory.png",
    description:
      "A Thai short film platform that lets filmmakers upload and share their work with a wider audience.",
    stack: ["Next.js", "Elysia"],
    collaborators: [
      {
        username: "Puwizz",
        name: "Puwizz",
        avatarUrl: "",
      },
    ],
  },
  {
    name: "Pirahus",
    type: "Web platform",
    image: "/pirahus.png",
    description:
      "A code-sibling matching platform where students earn points and exchange clues to discover their paired senior.",
    stack: ["Next.js"],
    collaborators: [
      {
        username: "Some1Names",
        name: "Some1Names",
        avatarUrl: "",
      },
    ],
  },
  {
    name: "Matrix Diagonalizer",
    type: "Calculation tool",
    image: "/da.png",
    description:
      "A tool for computing and transforming matrices into diagonal form, helping verify step-by-step mathematical results.",
    stack: ["Next.js"],
  },
  {
    name: "Library Borrowing System",
    type: "Library management",
    image: "/bs.png",
    description:
      "A library management system for tracking books, members, and borrowing status in an organized way.",
    stack: ["Next.js", "Spring Boot"],
    collaborators: [
      {
        username: "Puwizz",
        name: "Puwizz",
        avatarUrl: "",
      },
    ],
  },
];

export const contacts = [
  { label: "GitHub", value: "vixvify", href: "https://github.com/vixvify" },
  {
    label: "Instagram",
    value: "vixvify_v",
    href: "https://instagram.com/vixvify_v",
  },
  {
    label: "Email",
    value: "asnaweeezor@gmail.com",
    href: "mailto:asnaweeezor@gmail.com",
  },
];
