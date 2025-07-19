import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", username: "@Vaibhavijohnson" },
    { icon: Linkedin, href: "#", label: "LinkedIn", username: "Vaibhavi Johnson" },
    { icon: Twitter, href: "#", label: "Twitter", username: "@Vaibhavijohnson" },
    { icon: Mail, href: "mailto:hello@Vaibhavijohnson.dev", label: "Email", username: "hello@Vaibhavijohnson.dev" },
  ]

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Email", value: "hello@Vaibhavijohnson.dev" },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">Let's connect and build something amazing together</p>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <info.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{info.label}:</span>
                    <span className="text-sm">{info.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <div key={social.label} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <social.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{social.label}</span>
                      <span className="text-sm text-muted-foreground">{social.username}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center pt-6">
            <p className="text-muted-foreground mb-4">
              Ready to start a project or just want to chat? I'd love to hear from you.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:hello@Vaibhavijohnson.dev">
                <Mail className="h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
