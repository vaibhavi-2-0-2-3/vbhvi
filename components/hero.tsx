"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/contact";


export default function Hero() {
  const [enabled, setEnabled] = useState(false);

  // Draggable position
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };
  const handleMouseUp = () => {
    dragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.touches[0].clientX - pos.x,
      y: e.touches[0].clientY - pos.y,
    };
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    setPos({
      x: e.touches[0].clientX - offset.current.x,
      y: e.touches[0].clientY - offset.current.y,
    });
  };
  const handleTouchEnd = () => {
    dragging.current = false;
  };


  return (
    <section
      id="home"
      className="pb-20 px-6 relative w-full h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-2xl text-left">
        {/* Heading with draggable span */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in font-calistoga">
          hi{" "}
          <span
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
              position: "relative",
              display: "inline-block",
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              userSelect: "none",
              cursor: "grab",
            }}
            className="relative px-4 py-2 border-[0.5px] border-blue-400"
          >
            {/* Four white corner squares */}
            <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
            <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>

            vaibhavi here.
          </span>
        </h1>


        <p className="text-lg md:text-xl mb-6">I am?</p>

        {/* Toggle Button */}
        <div className="flex justify-left mb-4">
          <button
            title="Toggle About Me"
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-[26px] w-[54px] rounded-full transition-colors duration-300 focus:outline-none`}
            style={{
              backgroundColor: enabled ? "hsl(var(--brandred))" : "#6B7280",
            }}
          >
            <span
              className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out m-1 
                ${enabled ? "translate-x-7" : "translate-x-0"}`}
            />
          </button>
        </div>

        {/* About Section */}
        {/* About Text */}
        <div className="text-left text-sm leading-relaxed space-y-4 transition-all duration-500">
          {/* <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {""} </span> */}
          <p className="transition-all duration-700 opacity-100">
            Originally from Goa, <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {" "}I’m a </span> {" "} recent Information Technology graduate
            <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {""} from </span> {" "}
            Goa College of Engineering, <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {""} driven by a passion for building
              things that matter. My journey in tech has been a hands-on
              one—starting with simple web pages, evolving into</span> {" "}  full-stack
            applications, <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {""} and now leaning </span> {" "} deeper into
            <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {""} the </span> {" "}
            backend systems
            <span className={enabled ? "line-through opacity-30" : "opacity-100"}> {""} that power </span> {" "}
            real-world platforms.
          </p>
          <p className="transition-all duration-700 opacity-100">
            I enjoy exploring the entire development stack, but what excites
            me most is building products that solve problems, not just sit in
            a portfolio. Whether it’s developing a smart carpooling platform
            using MERN and Python, or integrating real-time features with
            Socket.IO, I’ve always focused on making sure what I build is
            practical, scalable, and user-centered.
          </p>
          <p className="transition-all duration-700 opacity-100">
            At AppBuddy Consultancy LLP, I worked as a Software Developer
            Intern where I built a weather app and recipe interface using
            Vue.js, MongoDB, and Mongoose, learning the ins and outs of API
            integration, database management, and responsive frontend design.
          </p>
          <p className="transition-all duration-700 opacity-100">
            I believe deeply in learning by doing. Building real-world
            applications helps me translate logic into something tangible and
            useful. I enjoy the process—from debugging backend routes to
            designing intuitive UIs—and I’m always looking for opportunities
            to grow as a builder.
          </p>
          <p className="transition-all duration-700 opacity-100">
            At my core, I value honesty, curiosity, and collaboration. I love
            being part of teams where ideas are shared openly, learning is
            continuous, and every line of code contributes to something
            meaningful.
          </p>
        </div>


        {/* Resume & Socials */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-8">
          {/* Resume Button */}
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gap-2 transition-transform bg-transparent text-foreground border border-white hover:text-[hsl(var(--brandred))] hover:bg-transparent hover:border-[hsl(var(--brandred))] "
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
                  className="h-12 w-12 flex items-center justify-center hover:text-[hsl(var(--brandred))]"
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
