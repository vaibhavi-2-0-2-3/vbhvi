import Header from "@/components/header"
import Hero from "@/components/hero"
import WorkEducation from "@/components/work-education"
import ChatBot from "@/components/ChatBot"
import Footer from "@/components/footer"
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WorkEducation />
        <FeaturedProjects />
      </main>
      <ChatBot />
      <Footer />
    </div>
  )
}
