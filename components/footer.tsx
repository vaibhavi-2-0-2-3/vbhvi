import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/vaibhavi-2-0-2-3", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhavi-gaonkar-4660522a6/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/me_vaibhavii", label: "Twitter" },
    { icon: Mail, href: "mailto:vaibhavigaonkar760@gmail.com", label: "Email" },
  ]

  return (
    <footer className="py-20 mx-auto max-w-2xl">
      <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

        {/* Text */}
        <p className="text-center sm:text-right">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-foreground">
            vaibhavig.dev
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
            Privacy
          </Link>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:text-foreground transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
