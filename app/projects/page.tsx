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
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-muted-foreground text-lg">
              A collection of my work, from web applications to open-source contributions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
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

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Other Projects</h2>
            <div className="grid gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
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
