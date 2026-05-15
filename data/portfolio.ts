export const frontend = [
  { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
  { name: "Angular", icon: "angular", color: "#dd0031" },
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

export const projects = [
  {
    name: "ACS Website",
    type: "Department website",
    image: "/acs.png",
    description:
      "เว็บไซต์ของสาขาวิทยาการคอมพิวเตอร์ประยุกต์ KMUTT สำหรับสื่อสารข้อมูลของหลักสูตรและกิจกรรมต่างๆ",
    stack: ["Next.js", "Elysia"],
  },
  {
    name: "Matrix Diagonalizer",
    type: "Calculation tool",
    image: "/da.png",
    description:
      "เครื่องมือสำหรับคำนวณและแปลงเมทริกซ์ให้อยู่ในรูป diagonal เพื่อช่วยตรวจสอบขั้นตอนและผลลัพธ์ทางคณิตศาสตร์",
    stack: ["Next.js"],
  },
  {
    name: "Library Borrowing System",
    type: "Library management",
    image: "/bs.png",
    description:
      "ระบบยืมหนังสือห้องสมุดสำหรับจัดการข้อมูลหนังสือ สมาชิก และสถานะการยืมคืนให้เป็นระบบมากขึ้น",
    stack: ["Next.js", "Spring Boot"],
  },
  {
    name: "Payment Tracking",
    type: "Finance workflow",
    image: "/pt.png",
    description:
      "ระบบติดตามสถานะการจ่ายเงิน ช่วยให้ผู้ใช้ตรวจสอบและจัดการข้อมูลการชำระเงินได้เป็นระบบมากขึ้น",
    stack: ["Next.js", "Golang"],
  },
  {
    name: "Letter from Where",
    type: "Storytelling web",
    image: "/lw.png",
    description:
      "เว็บเล่าเรื่องเกี่ยวกับ imposter syndrome ผ่านประสบการณ์และบรรยากาศแบบ interactive storytelling",
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
