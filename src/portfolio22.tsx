"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-blue-950 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-300">
            <TypeAnimation
              sequence={[
                'Jaynil Patel',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
          </h1>
          <p className="text-xl text-blue-200">
            <TypeAnimation
              sequence={[
                500,
                'Aspiring Data Scientist',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-blue-900 flex-shrink-0">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Jaynil Patel"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">About Me</h2>
            <p className="text-gray-300">
              I am a dedicated and enthusiastic individual holding a Bachelor's degree in Computer Engineering, graduating with a CGPA of 9.11. My passion lies in the fields of Data Science and Machine Learning. I am eager to apply my skills in real-world scenarios, contributing to innovative projects that make a meaningful impact.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Python", "SQL", "Advanced Excel", "PowerBI", "Statistical Analysis", "Data Wrangling", "Database Management", "Machine Learning"].map((skill) => (
              <Card key={skill} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardHeader className="py-2">
                  <CardTitle className="text-sm text-center text-blue-300">{skill}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Communication", "Collaboration", "Problem-Solving", "Adaptability", "Critical Thinking", "Time Management", "Attention to Detail"].map((skill) => (
              <Card key={skill} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                <CardHeader className="py-2">
                  <CardTitle className="text-sm text-center text-blue-200">{skill}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Customer churn analysis using PowerBI",
              "Electric vehicle data analysis using SQL",
              "Customer investment preference analysis using PowerBI",
              "Diabetes prediction using machine learning",
              "Customer segmentation using machine learning"
            ].map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardHeader>
                  <CardTitle className="text-blue-300">{project}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${index + 1}`}
                    alt={project}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <CardDescription className="mt-4 text-gray-400">
                    A brief description of the {project.toLowerCase()} project and its key outcomes.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Contact Me</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="bg-gray-900 border-gray-800 hover:bg-gray-800 text-blue-300">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
            <Button variant="outline" className="bg-gray-900 border-gray-800 hover:bg-gray-800 text-blue-300">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button variant="outline" className="bg-gray-900 border-gray-800 hover:bg-gray-800 text-blue-300">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © 2024 Jaynil Patel. All rights reserved.
        </div>
      </footer>
    </div>
  )
}