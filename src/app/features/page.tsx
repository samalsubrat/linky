"use client";

import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Zap, Globe, Lock, Cpu, ArrowRight } from "lucide-react"
import Navbar from "../navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function FeaturesPage() {

    const [link, setLink] = useState("");
    const router = useRouter();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const fullUrl = `http://localhost:3000/${link}`;
      router.push(fullUrl);
    };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
     <Navbar/>

      <main className="container mx-auto px-4 pb-16 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center">Linky Features</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <MessageSquare className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Natural Language Processing</h2>
            <p className="text-zinc-300">
              Our advanced NLP algorithms enable Linky to understand context, sentiment, and nuance in human language, providing more accurate and helpful responses.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <Zap className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Real-time Learning</h2>
            <p className="text-zinc-300">
              Linky continuously learns from interactions, improving its knowledge base and response quality over time to provide ever-evolving, up-to-date assistance.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <Globe className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Multilingual Support</h2>
            <p className="text-zinc-300">
              Break down language barriers with our AI that can understand and communicate in multiple languages, making global communication seamless.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Enhanced Security</h2>
            <p className="text-zinc-300">
              We prioritize your data security with end-to-end encryption, secure data handling practices, and compliance with global privacy standards.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <Cpu className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Customizable AI Models</h2>
            <p className="text-zinc-300">
              Tailor Linky to your specific needs with customizable AI models that can be trained on your industry-specific data and terminology.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <Bot className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Seamless Integration</h2>
            <p className="text-zinc-300">
              Easily integrate Linky into your existing platforms and workflows with our comprehensive API and developer tools.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Ready to Experience Linky?</h2>
          <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="mt-5 bg-blue-700 hover:bg-blue-800 text-white"
                  size="lg"
                >
                  Get started with Linky
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-zinc-950 text-zinc-100 border-gray-700">
                <DialogHeader>
                  <DialogTitle>Add Your Link</DialogTitle>
                  <DialogDescription>
                    Add your link to start your chatbot.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="text"
                      placeholder="Enter your link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      className="flex-grow bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                    />
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <p className="mt-4 text-zinc-400">
                    Your link will be prefixed with: http://localhost:3000/
                  </p>
                </form>
              </DialogContent>
            </Dialog>
        </div>
      </main>

      <Footer/>
    </div>
  )
}