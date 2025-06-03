import React from "react";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p>This page tells you more about the ALX Project setup.</p>
      </main>
    </>
  );
};

export default AboutPage;
