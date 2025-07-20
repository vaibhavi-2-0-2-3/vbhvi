import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ChatBot from "@/components/chat-bot"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and project tracking. Features include drag-and-drop, notifications, and analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Redux"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts. Includes historical data and weather patterns analysis.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Tailwind CSS", "Weather API", "Chart.js", "Mapbox"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with Next.js and Tailwind CSS. Features dark mode, responsive design, and smooth animations.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "Full-featured blog platform with markdown support, comments, and admin panel. Includes SEO optimization and social sharing.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Express", "Markdown"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with private messaging, group chats, and file sharing. Built with WebSocket for instant communication.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-2xl">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="font-calistoga text-[70-px]">
                my projects.
              </span>
            </h1>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
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

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                          <Button size="sm" className="gap-2 hover:scale-105 transition-transform">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </main>
      <ChatBot />
    </div>
  )
}
