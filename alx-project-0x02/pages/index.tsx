import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="text-2xl text-gray-500">
          Welcome to the ALX Next.js Project Setup!
        </h2>
        <p className="mt-4 text-gray-700">
          This is my starter page for building with Next.js, TypeScript, and
          Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
