import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Welcome to the Home Page of the ALX Project.</p>
        <div className="flex flex-wrap justify-center mt-6">
          <Card title="othmane laghlimi" content="i'm frontend developer" />
          <Card
            title="ALX Project"
            content="This is a sample card component."
          />
          <Card title="Next.js" content="This project is built with Next.js." />
          <Card
            title="React"
            content="We are using React for building UI components."
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
