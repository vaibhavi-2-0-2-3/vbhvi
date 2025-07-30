'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/profile6.png";
import glasses from "@/public/glasses.png";
import Link from "next/link";

export default function Hero() {


  return (
    <section id="home" className="pt-40 pb-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          <span className="font-calistoga text-[70-px]">
            hi vaibhavi here. 👋
          </span>
        </h1>

        <p className="text-lg md:text-lg mb-8 leading-relaxed transition-colors duration-300">I’m a recent graduate passionate about building things — exploring the full stack, with a growing focus on backend systems. Now,I’m looking for a place to go deeper, sharpen my focus, and craft meaningful solutions that make a real-world impact</p>


        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6 animate-fade-in-delay-2">
          {/* Resume Button */}
          <Link href="/resume.pdf" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="gap-2 hover:scale-105 transition-transform bg-transparent text-foreground border border-white hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </Link>



          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/vaibhavi-2-0-2-3"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vaibhavi-gaonkar-4660522a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/vbhvi_"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Twitter / X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M4.75 3h3.74l4.06 5.71L17.94 3h3.8l-6.9 7.52L22 21h-3.78l-5.06-6.99L7.47 21H3.66l7.2-7.86L2 3z" />
              </svg>
            </a>

            {/* Email */}
            <button
              className="h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Email"
              onClick={() => window.location.href = 'vaibhavigaonkar760@gmail.com'}
            >
              <Mail className="h-5 w-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
