import React from "react";
import Link from "next/link";
interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Welcome to ALX Project",
}) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>

        <Link href="/posts" className="hover:underline">
          Posts
        </Link>

        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
