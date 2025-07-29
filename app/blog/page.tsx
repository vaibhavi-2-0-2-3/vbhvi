import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import BottomNav from '@/components/BottomNav';
import ChatBot from "@/components/ChatBot"

export default function BlogPage() {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn best practices for structuring large React applications with proper state management and component architecture. This comprehensive guide covers everything from project setup to deployment.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Architecture", "Best Practices"],
      featured: true,
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends in web development including AI integration, edge computing, and new JavaScript frameworks. What should developers focus on in 2024?",
      date: "2024-01-08",
      readTime: "7 min read",
      tags: ["Web Development", "Trends", "AI"],
      featured: true,
    },
    {
      title: "Optimizing Next.js Performance",
      excerpt:
        "Deep dive into Next.js performance optimization techniques including image optimization, code splitting, and caching strategies for better user experience.",
      date: "2024-01-01",
      readTime: "6 min read",
      tags: ["Next.js", "Performance", "Optimization"],
      featured: true,
    },
    {
      title: "TypeScript Best Practices",
      excerpt:
        "Essential TypeScript patterns and practices for writing maintainable and type-safe code in modern applications.",
      date: "2023-12-20",
      readTime: "4 min read",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      featured: false,
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios.",
      date: "2023-12-15",
      readTime: "3 min read",
      tags: ["CSS", "Layout", "Frontend"],
      featured: false,
    },
    {
      title: "Getting Started with Docker",
      excerpt: "Learn the basics of containerization with Docker and how it can improve your development workflow.",
      date: "2023-12-10",
      readTime: "8 min read",
      tags: ["Docker", "DevOps", "Containers"],
      featured: false,
    },
  ]

  const featuredPosts = posts.filter((post) => post.featured)
  const recentPosts = posts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-2xl">


          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on development, technology, and everything in between
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Featured Posts</h2>
            <div className="space-y-6">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Recent Posts</h2>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
      <ChatBot />
      <Footer />
    </div>
  )
}
