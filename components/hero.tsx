"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/contact";

export default function Hero() {
  const [enabled, setEnabled] = useState(false);

  return (
    <section id="home" className="pb-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          <span className="font-calistoga text-[70px]">
            hi vaibhavi here. 👋
          </span>
        </h1>

        {/* Toggle Button */}
        <div className="flex justify-left mb-4">
          <button
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-[26px] w-[54px] rounded-full transition-colors duration-300 focus:outline-none`}
            style={{
              backgroundColor: enabled ? "hsl(var(--brandred))" : "#6B7280" 
            }}

          >
            <span
              className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out m-1 
          ${enabled ? "translate-x-7" : "translate-x-0"}`}
            />
          </button>
        </div>

        {/* About Text */}
        <div className="text-left text-sm leading-relaxed space-y-4 transition-all duration-500">

          <p
            className={`transition-all duration-700 ${enabled ? "opacity-100" : "line-through opacity-30"
              }`}
          >
            I’m a recent graduate passionate about building things — exploring
            the full stack, with a growing focus on backend systems. I believe in creating things with real-world impact. From learning
            data structures and participating in hackathons to working with
            blockchain and exploring Web3, I’m always curious about pushing
            boundaries. I’m deeply interested in backend engineering, scalable
            APIs, and cloud-native architectures, and I enjoy figuring out how
            systems talk to each other.
          </p>

          <p
            className={`transition-all duration-700 ${enabled ? "opacity-100" : "line-through opacity-30"
              }`}
          >
            Outside tech, I enjoy simplifying complex problems, teaching others
            what I know, and occasionally getting lost in a good playlist or a
            challenging puzzle. My goal is to find a place where I can grow
            alongside sharp minds and build tools that matter.
          </p>
        </div>

        {/* Buttons & Socials */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-8">
          {/* Resume Button */}
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gap-2 hover:scale-105 transition-transform bg-transparent text-foreground border border-white hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon, href, label }) => {
              const isImage = typeof icon === "object" && "src" in icon;
              const Icon = icon;

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label={label}
                >
                  {isImage ? (
                    <Image src={icon} alt={label} width={20} height={20} />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
