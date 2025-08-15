import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export const contactInfo = [
  { icon: MapPin, label: "Location", value: "Panjim, Goa" },
  { icon: Phone, label: "Phone", value: "+91 9309735778" },
  { icon: Mail, label: "Email", value: "vaibhavigaonkar760@gmailcom" },
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/vaibhavi-2-0-2-3",
    label: "GitHub",
    username: "vaibhavi-2-0-2-3",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vaibhavi-gaonkar-4660522a6/",
    label: "LinkedIn",
    username: "vaibhavi-gaonkar-4660522a6",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/vbhvi_",
    label: "Twitter",
    username: "@vbhvi_",
  },

  {
    icon: Mail,
    href: "mailto:vaibhavigaonkar760@gmailcom",
    label: "Email",
    username: "vaibhavigaonkar760@gmailcom",
  },
];
