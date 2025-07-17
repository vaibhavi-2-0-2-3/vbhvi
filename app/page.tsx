import Header from "@/components/header"
import Hero from "@/components/hero"
import WorkEducation from "@/components/work-education"
import ChatBot from "@/components/chat-bot"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WorkEducation />
      </main>
      <ChatBot />
    </div>
  )
}
