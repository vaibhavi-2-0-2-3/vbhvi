"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WorkEducation() {
  const [activeTab, setActiveTab] = useState("education")

  const workExperience = [
    {
      title: "Software Developer Intern",
      company: "AppBuddy Consultancy LLP",
      period: "Jun 2024 – Aug 2024",
      location: "Sakalim, Goa",
      description: [
        "Developed a real-time weather application and a recipe feature using Vue.js and Bootstrap.",
        "Integrated third-party weather APIs with backend services for live updates.",
        "Implemented CRUD operations and schema validations using MongoDB and Mongoose.",
        "Built responsive, mobile-friendly UIs optimized for cross-browser compatibility.",
        "Worked in Agile sprints and participated in regular code reviews and stand-ups.",
        "Documented components and API integrations for onboarding and team reference.",
        "Improved SEO with semantic HTML and lazy loading, boosting crawlability and page speed."
      ],
      skills: [
        "Vue.js",
        "Bootstrap",
        "MongoDB",
        "Mongoose",
        "JavaScript",
        "REST APIs",
        "Git",
        "Agile"
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Engineering - Information Technology",
      company: "Goa College of Engineering, Farmagudi",
      period: "2021 – 2025",
      description: [
        "CGPA: 7.49",
        "Ponda, Goa",
        "Studied core IT subjects including software engineering, algorithms, and web development. Participated in hackathons and coding competitions."
      ],
      skills: [
        "Information Technology",
        "Data Structures",
        "Algorithms",
        "Web Development",
        "DBMS",
        "OOP",
      ],
    },
    {
      title: "Higher Secondary School (XII)",
      company: "Our Lady Of The Rosary Higher Secondary School",
      period: "2019 – 2021",
      description: [
        "Percentage: 74%",
        "Dona Paula, Goa",
        "Studied Physics, Chemistry, Mathematics."
      ],
      skills: ["Mathematics", "Physics", "Chemistry", "Computer"],
    },
    // {
    //   title: "High School (X)",
    //   company: "Axilium High School",
    //   period: "2010 – 2019",
    //   description: [
    //     "Percentage: 81%",
    //     "Caranzalem, Goa",
    //     "Focused on foundational subjects and developed early interest in technology and computing."
    //   ],
    //   skills: ["Mathematics", "Science", "Problem Solving"],
    // },
  ]


  const currentData = activeTab === "education" ? education : workExperience

  return (
    <section className="py- px-6">
      <div className="mx-auto max-w-2xl">

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-lg p-1 w-full max-w-2xl justify-between bg-muted">
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
                  <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1 text-sm">
                    {Array.isArray(item.description) ? (
                      item.description.map((point, i) => (
                        <li key={i}>
                          {point.split(/(real-time weather application|recipe feature|Vue\.js|Bootstrap|MongoDB|Mongoose|JavaScript|REST APIs|Git|Agile|CRUD operations|UI\/UX enhancements|code reviews|stand-ups|schema validations)/g)
                            .map((part, j) =>
                              [
                                "real-time weather application",
                                "recipe feature",
                                "Vue.js",
                                "Bootstrap",
                                "MongoDB",
                                "Mongoose",
                                "JavaScript",
                                "REST APIs",
                                "Git",
                                "Agile",
                                "CRUD operations",
                                "code reviews",
                                "stand-ups",
                                "schema validations",
                              ].includes(part) ? (
                                <span key={j} className="text-foreground font-medium">{part}</span>
                              ) : (
                                <span key={j}>{part}</span>
                              )
                            )}
                        </li>
                      ))
                    ) : (
                      <li>{item.description}</li>
                    )}
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
