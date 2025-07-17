"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WorkEducation() {
  const [activeTab, setActiveTab] = useState("work")

  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and improved team productivity by 40%.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built responsive web applications and improved user experience. Collaborated with design team to implement pixel-perfect interfaces.",
      skills: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Junior Developer",
      company: "WebSolutions",
      period: "2019 - 2020",
      description:
        "Developed and maintained client websites. Gained experience in full-stack development and agile methodologies.",
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ]

  const education = [
    {
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      period: "2015 - 2019",
      description:
        "Graduated with honors. Focused on software engineering, algorithms, and data structures. Active member of the coding club.",
      skills: ["Computer Science", "Algorithms", "Data Structures", "Software Engineering"],
    },
    {
      title: "Full Stack Web Development",
      company: "Coding Bootcamp",
      period: "2019",
      description: "Intensive 6-month program covering modern web development technologies and best practices.",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
    },
  ]

  const currentData = activeTab === "work" ? workExperience : education

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground">My professional journey and academic background</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === "work" ? "default" : "ghost"}
              onClick={() => setActiveTab("work")}
              className="rounded-md"
            >
              Work
            </Button>
            <Button
              variant={activeTab === "education" ? "default" : "ghost"}
              onClick={() => setActiveTab("education")}
              className="rounded-md"
            >
              Education
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {currentData.map((item, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{item.period}</div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
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
