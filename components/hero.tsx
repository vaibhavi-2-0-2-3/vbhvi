'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/profile3.jpg";
import glasses from "@/public/glasses.png";
import Link from "next/link";

export default function Hero() {
  const [hovered, setHovered] = useState(false)


  return (
    <section id="home" className="pt-40 pb-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center md:flex-row md:items-start md:text-left md:gap-10">
          {/* LEFT: Text */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="font-calistoga text-[70-px]">
                hi vaibhavi here. 👋
              </span>
            </h1>

            <p className={`text-lg md:text-lg mb-8 leading-relaxed transition-colors duration-300 
  ${hovered ? 'text-neutral-500' : 'text-foreground'}`}>

              <span>
                I’m a <span className={`
      transition-all duration-3000 font-semibold px-2 py-1
      ${hovered ? 'bg-stone-500 text-foreground backdrop-blur-sm shadow-md' : 'text-foreground'}
    `}>recent graduate </span> passionate about building things — exploring the full stack, with a growing focus on{" "}
              </span>

              <span
                className={`
      transition-all duration-3000 font-semibold px-2 py-1
      ${hovered ? 'bg-stone-500 text-foreground backdrop-blur-sm shadow-md' : 'text-foreground'}
    `}
              >
                backend systems.
              </span>

              <span>
                {" "}Now, <span className={`
      transition-all duration-3000 font-semibold px-2 py-1
      ${hovered ? 'bg-stone-500 text-foreground backdrop-blur-sm shadow-md' : 'text-foreground'}
    `}>I’m looking for a place to go deeper, sharpen my focus</span>, and craft meaningful solutions that make a <span className={`
      transition-all duration-3000 font-semibold px-2 py-1
      ${hovered ? 'bg-stone-500 text-foreground backdrop-blur-sm shadow-md' : 'text-foreground'}
    `}>real-world impact</span>.
              </span>
            </p>


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
                  href="https://x.com/me_vaibhavii"
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

          {/* PROFILE PICTURE with Animated Circular Stroke */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group w-[240px] h-[240px] flex items-center justify-center"
          >
            {/* Animated SVG Stroke Circle */}
            {/* <svg
              className="absolute w-[260px] h-[260px] z-10"
              viewBox="0 0 260 260"
            >
              <circle
                cx="130"
                cy="130"
                r="120"
                fill="none"
                stroke="#22c55e"
                strokeWidth="10"
                strokeDasharray={Math.PI * 2 * 120}
                strokeDashoffset={hovered ? 0 : Math.PI * 2 * 120}
                style={{ transition: 'stroke-dashoffset 2s ease-in-out' }}
              />
            </svg> */}

            {/* Profile Image */}
            <div className="w-[220px] h-[280px] mt-28 rounded-xl border-4 overflow-hidden">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
                priority
              />


              {/* Sparkles Overlay */}
              <Image
                src="/sparkle.png"
                alt="sparkle"
                width={100}
                height={40}
                className={`absolute z-30 w-6 h-6 top-[60px] left-[40px] transition-all duration-700 ease-out
      ${hovered ? 'opacity-100 translate-y-[-6px] scale-110' : 'opacity-0 translate-y-0 scale-100'}`}
              />
              <Image
                src="/sparkle.png"
                alt="sparkle2"
                width={100}
                height={40}
                className={`absolute z-30 w-6 h-6 bottom-[10px] right-[30px] transition-all duration-700 ease-out
      ${hovered ? 'opacity-100 translate-y-[-4px] scale-105' : 'opacity-0 translate-y-0 scale-100'}`}
              />


              {/* Glasses Overlay
              <Image
                src={glasses}
                alt="glasses"
                width={100}
                height={40}
                className={`absolute top-[58px] left-[60px] z-30 transition-all duration-700 ease-in-out
        ${hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
              /> */}
            </div>
          </div>


        </div>

      </div>


    </section>
  );
}
