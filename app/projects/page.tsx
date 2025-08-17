'use client';
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="pb-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          <span className="font-calistoga text-[70-px]">my projects.</span>
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 px-6 pb-20">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  {project.tech && (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2 hover:scale-105 transition-transform flex items-center">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="gap-2 hover:scale-105 transition-transform flex items-center">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
