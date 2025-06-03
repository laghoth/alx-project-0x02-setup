import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      title: "Welcome to ALX Project",
      content: "Reusable components in action.",
    },
    {
      title: "Learning Next.js",
      content: "Routing, components, and Tailwind CSS.",
    },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">🏡 Home Page</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ➕ Add Post
          </button>
        </div>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default HomePage;
