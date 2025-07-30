'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/profile6.png"; // optional if you want to use it
import Link from "next/link";
import { socialLinks } from "@/data/contact";

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          <span className="font-calistoga text-[70-px]">
            hi vaibhavi here. 👋
          </span>
        </h1>

        <p className="text-lg md:text-lg mb-8 leading-relaxed">
          I’m a recent graduate passionate about building things — exploring the full stack,
          with a growing focus on backend systems. Now, I’m looking for a place to go deeper,
          sharpen my focus, and craft meaningful solutions that make a real-world impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6">
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
              const isImage = typeof icon === "object" && "src" in icon; // detects imported images like SVG/PNG
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
