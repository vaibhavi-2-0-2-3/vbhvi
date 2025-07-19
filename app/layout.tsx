import type React from "react";
import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      "Personal portfolio of Vaibhavi Gaonkar, a full-stack developer crafting digital experiences with modern technologies.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={calistoga.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
