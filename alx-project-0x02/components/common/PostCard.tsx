import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <span className="text-sm text-gray-500 block mt-4">
        Posted by User {userId}
      </span>
    </div>
  );
};

export default PostCard;
