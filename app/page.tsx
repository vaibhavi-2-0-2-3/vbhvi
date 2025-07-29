import Header from "@/components/header"
import Hero from "@/components/hero"
import WorkEducation from "@/components/work-education"
import ChatBot from "@/components/ChatBot"
import Footer from "@/components/footer"
import FeaturedProjects from "@/components/FeaturedProjects";
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative z-10">
        <Hero />
        <WorkEducation />
        <FeaturedProjects />
      </main>

      <BottomNav />
      <ChatBot />
      <Footer />
    </div>
  )
}
