import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "vixvify | Full Stack Developer",
  description:
    "Portfolio bio for vixvify, a full stack developer studying Applied Computer Science at KMUTT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050505] font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}
