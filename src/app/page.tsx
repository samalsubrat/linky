"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "./navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [link, setLink] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullUrl = `http://localhost:3000/${link}`;
    router.push(fullUrl);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">
      <Navbar />
      <MaxWidthWrapper className="flex-grow flex flex-col items-center justify-center text-center sm:pt-20 mt-20">
        <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-800">
          <p className="text-sm font-semibold text-zinc-300">
            ChatLinky is now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your
          <br />
          <span className="text-blue-500">links</span> in seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-400 sm:text-lg">
          ChatLinky allows you to have conversations with any website. Simply
          add our website before links and start asking questions right away.
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mt-5 bg-blue-700 hover:bg-blue-800 text-white"
              size="lg"
            >
              Get started <ArrowRight className="ml-2 h-5 w-5" />
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
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-zinc-900/50 p-2 ring-1 ring-inset ring-zinc-800 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/demoOne.png"
                    alt="Product Preview"
                    width={1895}
                    height={985}
                    quality={100}
                    className="rounded-md bg-zinc-800 shadow-2xl ring-1 ring-zinc-700"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-20 mt-20 max-w-6xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto mx-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-zinc-100 sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Chatting to your links has never been easier than with ChatLinky
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-700 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-500">Step 1</span>
              <span className="text-xl font-semibold text-zinc-200">
                Go to Your Website
              </span>
              <span className="mt-2 text-zinc-400">
                Go to your desired website.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-700 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-500">Step 2</span>
              <span className="text-xl font-semibold text-zinc-200">
                Add the Chatbot URL
              </span>
              <span className="mt-2 text-zinc-400">
                Prepend your chatbot&apos;s local URL to the existing URL in the
                address bar.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-700 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-500">Step 3</span>
              <span className="text-xl font-semibold text-zinc-200">
                Start asking questions
              </span>
              <span className="mt-2 text-zinc-400">
                It&apos;s that simple. Try out ChatLinky today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-zinc-900/50 p-2 ring-1 ring-inset ring-zinc-800 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/demoTwo.png"
                alt="Uploading preview"
                width={1920}
                height={942}
                quality={100}
                className="rounded-md bg-zinc-800 shadow-2xl ring-1 ring-zinc-700"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          <p className="mt-5 max-w-prose text-zinc-400 sm:text-lg">
            What are you waiting for?
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="mt-5 bg-blue-700 hover:bg-blue-800 text-white"
                size="lg"
              >
                Get started <ArrowRight className="ml-2 h-5 w-5" />
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
      </div>
      <Footer />
    </div>
  );
}
