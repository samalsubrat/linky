
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    
    <header className="w-screen px-2.5 md:px-10 lg:px-20 2xl:px-80 py-4 fixed top-0 z-10 bg-zinc-950/50 backdrop-blur-xl border-b border-gray-700">
      <nav className="flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold">Linky</span>
        </a>
        <div className="space-x-4">
          <Button
            variant="ghost"
            className="text-zinc-300 hover:text-white hover:bg-zinc-800"
          >
            <a href="/features">
            Features
            </a>
          </Button>
          <Button
            variant="ghost"
            className="text-zinc-300 hover:text-white hover:bg-zinc-800"
          >
            <a href="/about">
            About
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
