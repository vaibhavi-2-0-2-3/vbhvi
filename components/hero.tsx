import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center md:flex-row md:items-start md:text-left md:gap-10">
          {/* LEFT: Text */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="font-calistoga text-[70-px]">
                hi Vaibhavi here. 👋
              </span>
            </h1>

            <p className="text-lg md:text-s text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay">
              I’m a recent graduate passionate about building things — exploring the full stack, with a growing focus on backend systems. I’m now looking for opportunities to go deeper, sharpen my skills, and craft meaningful solutions that make a real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6 animate-fade-in-delay-2">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center mt-8 md:mt-0">
            <Image
              src="/placeholder-user.jpg"
              alt="Vaibhavi Gaonkar"
              width={180}
              height={180}
              className="rounded-full object-cover shadow-lg border-4 border-muted"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
