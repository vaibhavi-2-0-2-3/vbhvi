//app/layout.tsx

import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatBotProvider } from "@/context/ChatBotContext";
import PageLayout from "@/components/PageLayout";
import "@/styles/globals.css";
import { clsx } from "clsx";


const inter = Inter({ subsets: ["latin"] });

const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calistoga",
});

export const metadata: Metadata = {
  title: "Vaibhavi Gaonkar - Full Stack Developer",
  description:
    "Personal portfolio of Vaibhavi Gaonkar, a full-stack developer crafting digital experiences with modern technologies.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript"],
  authors: [{ name: "Vaibhavi Gaonkar" }],
  openGraph: {
    title: "Vaibhavi Gaonkar - Full Stack Developer",
    description:
      "Personal portfolio of Vaibhavi Gaonkar, Full Stack Developer with a focus on Node.js, crafting sleek, scalable applications from front to back.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={calistoga.variable} suppressHydrationWarning>
      <body className={clsx(inter.className, "bg-dotted")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ChatBotProvider>
            <PageLayout>
              {children}
            </PageLayout>
          </ChatBotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
