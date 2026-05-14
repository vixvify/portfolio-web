import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-zinc-100">{children}</body>
    </html>
  );
}
