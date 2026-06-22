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

export type Experience = {
  period: string;
  role: string;
  company: string;
  type: "Internship" | "Freelance" | "Full-time" | "Part-time";
  current?: boolean;
};

export const experience: Experience[] = [
  {
    period: "2026 — Present",
    role: "Full Stack Developer",
    company: "Intech Software House",
    type: "Freelance",
    current: true,
  },
  {
    period: "Jun - Aug 2026",
    role: "Developer",
    company: "PTT Public Company Limited",
    type: "Internship",
    current: true,
  },
];

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
    name: "OCR Portal",
    type: "Web application",
    image: "/ocr.png",
    description:
      "A web application that allows users to upload meter images and automatically extracts meter readings using OCR technology.",
    stack: ["Next.js"],
  },
  {
    name: "Linear System Solver",
    type: "Calculation tool",
    image: "/matrix.png",
    description:
      "A numerical methods tool for solving systems of linear equations using Gauss Elimination, Gauss Jordan, LU Factorization, and Inverse Matrix techniques.",
    stack: ["Next.js"],
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
