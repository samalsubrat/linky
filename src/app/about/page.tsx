"use client";

import { Button } from "@/components/ui/button";
import { Users, Globe, Zap, ArrowRight } from "lucide-react";
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

export default function AboutPage() {
  const [link, setLink] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullUrl = `https://liinky.vercel.app//${link}`;
    router.push(fullUrl);
  };
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="container mx-auto px-4 pb-16 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center">About Linky</h1>

        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-zinc-300">
              At Linky, we&apos;re on a mission to revolutionize digital
              communication. We believe in the power of AI to enhance human
              interactions, streamline processes, and unlock new possibilities
              in how we connect and share information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-zinc-300">
              Founded in 2024, Linky emerged from a simple idea: what if we
              could make AI-powered conversations as natural and effective as
              talking to a human expert? Our team of passionate developers,
              linguists, and AI specialists came together to turn this vision
              into reality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Users className="w-6 h-6 text-blue-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">User-Centric Design</h3>
                  <p className="text-zinc-300">
                    We put our users first in everything we do, ensuring our AI
                    is intuitive, helpful, and respectful.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Globe className="w-6 h-6 text-blue-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">Global Accessibility</h3>
                  <p className="text-zinc-300">
                    We&apos;re committed to breaking down language barriers and
                    making AI accessible to everyone, everywhere.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-blue-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">Continuous Innovation</h3>
                  <p className="text-zinc-300">
                    We&apos;re always pushing the boundaries of what&apos;s
                    possible with AI, staying at the forefront of technological
                    advancements.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-zinc-300 mb-4">
              We&apos;re excited about the future of AI-powered communication,
              and we invite you to be a part of it. Whether you&apos;re a
              business looking to enhance customer service, a developer
              interested in AI integration, or an individual curious about the
              possibilities of conversational AI, Linky is here to support
              you.
            </p>
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
                    Your link will be prefixed with: https://liinky.vercel.app//
                  </p>
                </form>
              </DialogContent>
            </Dialog>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
