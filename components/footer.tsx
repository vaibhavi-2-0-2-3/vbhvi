import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ]

  return (
    <footer id="contact" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="h-12 w-12 hover:scale-110 transition-transform"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
