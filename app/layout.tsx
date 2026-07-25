import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ameah Tem Chelsy — Full-Stack Developer",
  description: "Full-stack developer based in Yaoundé, Cameroon. Building real-world web applications with React, Next.js, NestJS, and TypeScript. Open to remote roles.",
  keywords: ["full-stack developer", "React", "Next.js", "NestJS", "TypeScript", "remote", "Cameroon"],
  authors: [{ name: "Ameah Tem Chelsy" }],
  openGraph: {
    title: "Ameah Tem Chelsy — Full-Stack Developer",
    description: "Building real-world web applications. Open to remote full-stack roles.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
