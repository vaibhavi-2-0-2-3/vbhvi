"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education, workExperience } from "@/data/workEducation"

// 🔍 Keywords to highlight
const HIGHLIGHT_KEYWORDS = ["real-time weather application", "Vue.js", "Node.js", "Express.js", "MongoDB", "weather APIs", "API call caching", "MVC architecture", "Vue.js", "Bootstrap", "Agile", "code reviews", "stand-ups", "SEO", "semantic HTML", "lazy loading", "frontend optimization"];

function highlightText(text: string) {
  const regex = new RegExp(`(${HIGHLIGHT_KEYWORDS.join("|")})`, "gi");
  return text.split(regex).map((part, i) =>
    HIGHLIGHT_KEYWORDS.includes(part) ? (
      <span key={i} className="font-semibold text-primary">{part}</span>
    ) : (
      part
    )
  );
}

export default function WorkEducation() {
  const [activeTab, setActiveTab] = useState("education")
  const currentData = activeTab === "education" ? education : workExperience

  return (
    <section className="py- px-6">
      <div className="mx-auto max-w-3xl">
        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-lg p-1 w-full max-w-3xl justify-between bg-muted">
            <button
              onClick={() => setActiveTab("education")}
              className={`w-1/2 rounded-md py-2 text-sm font-medium transition-colors duration-200 ${activeTab === "education"
                ? "bg-background text-foreground"
                : "bg-transparent text-muted-foreground"
                }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`w-1/2 rounded-md py-2 text-sm font-medium transition-colors duration-200 ${activeTab === "work"
                ? "bg-background text-foreground"
                : "bg-transparent text-muted-foreground"
                }`}
            >
              Work
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {currentData.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 underline-brand">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{item.period}</div>
                  </div>

                  <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1 text-sm">
                    {item.description.map((point, i) => (
                      <li key={i}>{highlightText(point)}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
