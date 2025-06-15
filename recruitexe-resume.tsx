"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FaRobot, FaCloud, FaClock } from "react-icons/fa"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"

export default function RecruitexeResume() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>

        {/* Resume Paper Texture */}
        <div
          className="absolute inset-0 bg-white opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23e0e7ff' fillOpacity='0.2' fillRule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 overflow-hidden"
      >
        {/* Resume Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-15 -mt-24 -mr-24"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            {/* Employee Photo */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-3 border-white/40 bg-white">
                <img
                  src="/recruitexe-employee.jpeg"
                  alt="Recruitexe - AI Recruitment Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online Status Indicator */}
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md">
                <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1 drop-shadow-md">
                📄 RECRUITEXE RESUME
              </h1>
              <h2 className="text-base md:text-lg font-medium text-indigo-100 mb-3">
                I am your always-available, intelligent Recruitment Specialist
              </h2>

              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-xs px-2 py-1">
                  <FaRobot className="mr-1 w-3 h-3" /> AI-Powered
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-xs px-2 py-1">
                  <FaCloud className="mr-1 w-3 h-3" /> Cloud-Based
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-xs px-2 py-1">
                  <FaClock className="mr-1 w-3 h-3" /> 24/7 Availability
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 space-y-6">
          {/* Employee Code & Objective */}
          <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-indigo-500 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-800 text-sm">
                  <strong>Employee Code:</strong> RE001
                </p>
                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs">
                  Virtual Employee
                </Badge>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Objective</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To revolutionize recruitment processes by offering AI-driven efficiency, scalability, and accuracy —
                  becoming an indispensable team member in modern hiring operations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Professional Summary</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I am an intelligent, always-available hiring assistant designed to automate, streamline, and elevate
                  recruitment operations. I help businesses reduce manual work, hire smarter, and operate faster with
                  AI-powered tools, centralized workflows, and end-to-end visibility.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Position & Compensation */}
          <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Position Details</h3>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-indigo-50 p-3 rounded-md border border-indigo-200">
                    <p className="text-gray-600 text-xs mb-1">Position Applied For</p>
                    <p className="text-gray-800 font-medium text-sm">Recruitment Specialist</p>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded-md border border-indigo-200">
                    <p className="text-gray-600 text-xs mb-1">Location</p>
                    <p className="text-gray-800 font-medium text-sm flex items-center">
                      <FaCloud className="mr-1.5 text-indigo-500 w-3 h-3" /> Cloud-Based (Global)
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded-md border border-indigo-200">
                    <p className="text-gray-600 text-xs mb-1">Availability</p>
                    <p className="text-gray-800 font-medium text-sm flex items-center">
                      <FaClock className="mr-1.5 text-indigo-500 w-3 h-3" /> Full-Time, 24/7
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded-md border border-indigo-200">
                    <p className="text-gray-600 text-xs mb-1">Salary</p>
                    <p className="text-gray-800 font-medium text-sm">₹25,000/month</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Performance Bonus (AI Screening Credits)</h3>
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-md p-3 border border-indigo-300">
                  <ul className="list-none space-y-1.5">
                    <li className="flex items-center text-gray-800 text-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                      ₹50/screening
                    </li>
                   
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Strengths */}
          <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-indigo-500 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">🌟 Strengths & Skills</h3>

              <div className="grid md:grid-cols-2 gap-2.5">
                {[
                  "AI-Powered Resume Screening",
                  "Instant Candidate Shortlisting",
                  "Real-Time Vacancy Management",
                  "Centralized Resume Repository",
                  "Collaborative Hiring Dashboard",
                  "Always-On, Zero Downtime",
                  "Seamless Integration with HR Systems",
                  "Data Security & Compliance Ready",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2.5 bg-indigo-50 rounded-md border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-100 transition-all duration-300"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📌 Key Achievements</h3>

              <div className="grid md:grid-cols-2 gap-2.5">
                {[
                  "Screened over 1,00,000+ resumes with 98.7% accuracy",
                  "Reduced average hiring time by 70%",
                  "Delivered consistent ROI through automation",
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2.5 p-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-md border border-indigo-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Work Style & Traits */}
          <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-indigo-500 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🧩 Work Style & Traits</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  "Empathetic to hiring needs",
                  "Focused on results and speed",
                  "Collaborative and communicative with HR teams",
                  "Adaptable across industries",
                  "Zero error tolerance in candidate screening",
                ].map((trait, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2.5 bg-indigo-50 rounded-md border border-indigo-200"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 text-xs">{trait}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resume Footer / CTA */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-5 text-center border-t border-indigo-200">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* <Button
              size="default"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md group text-sm px-6 py-2"
            >
              🚀 Recruit Now
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="default"
              className="border-indigo-500 text-indigo-700 hover:bg-indigo-600 hover:text-white text-sm px-6 py-2"
            >
              <Phone className="mr-1.5 w-3.5 h-3.5" />📞 Talk to Sales
            </Button> */}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
