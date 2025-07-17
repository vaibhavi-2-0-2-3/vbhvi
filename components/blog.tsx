import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn best practices for structuring large React applications with proper state management and component architecture.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Architecture", "Best Practices"],
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends in web development including AI integration, edge computing, and new JavaScript frameworks.",
      date: "2024-01-08",
      readTime: "7 min read",
      tags: ["Web Development", "Trends", "AI"],
    },
    {
      title: "Optimizing Next.js Performance",
      excerpt:
        "Deep dive into Next.js performance optimization techniques including image optimization, code splitting, and caching strategies.",
      date: "2024-01-01",
      readTime: "6 min read",
      tags: ["Next.js", "Performance", "Optimization"],
    },
  ]

  return (
    <section id="blog" className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Blogs</h2>
          <p className="text-muted-foreground">Thoughts on development, technology, and more</p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
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
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

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
    </section>
  )
}
