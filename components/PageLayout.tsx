// components/PageLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import BottomNav from "@/components/BottomNav";
import ChatBot from "@/components/ChatBot";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCliPage = pathname.startsWith("/cli");

  return (
    <div className="min-h-screen bg-background bg-dotted">
      <main className={isCliPage ? "fixed inset-0 z-10 w-screen h-screen p-0 overflow-hidden" : "relative z-10 pt-20 pb-32 px-6"}>
        {children}
      </main>

      {!isCliPage && (
        <>
          <div className="px-6 pb-28">
            <Footer />
          </div>
          <BottomNav />
          <ChatBot />
        </>
      )}
    </div>
  );
}
