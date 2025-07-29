import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowLeft, Send } from "lucide-react"
import Footer from "@/components/footer"
import BottomNav from '@/components/BottomNav';
import ChatBot from "@/components/ChatBot";

export default function ContactPage() {
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
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-2xl">

          {/* Page Header */}
          <Header />

          {/* Contact Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">Let's connect and build something amazing together</p>
          </div>

          <div className="space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project or just say hello!" rows={5} />
                </div>
                <Button className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <info.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <span className="text-sm text-muted-foreground">{info.label}:</span>
                      <span className="ml-2">{info.value}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Connect with Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => (
                  <div key={social.label} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <social.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <span className="font-medium">{social.label}</span>
                        <span className="ml-2 text-sm text-muted-foreground">{social.username}</span>
                      </div>
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
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <p className="text-muted-foreground mb-4">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you!
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
      </main>
      <BottomNav />
      <ChatBot />
      <Footer />
    </div>
  )
}
