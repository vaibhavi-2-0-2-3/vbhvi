import Header from "@/components/header";
import Footer from "@/components/footer";
import BottomNav from "@/components/BottomNav";
import ChatBot from "@/components/ChatBot";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative z-10 pt-40 pb-32 px-6">
        {children}
      </main>

      <div className="px-6 pb-28">
        <Footer />
      </div>

      <BottomNav />
      <ChatBot />
    </div>
  );
}
