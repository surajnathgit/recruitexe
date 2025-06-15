"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Zap, Bot, Briefcase, Target, TrendingUp } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Briefcase, text: "Posts Vacancies" },
    { icon: Users, text: "Collects & Screens Resumes" },
    { icon: Target, text: "Shortlists the Best Fits" },
    { icon: TrendingUp, text: "Tracks and Organizes Everything" },
  ]

  const benefits = [
    { icon: Clock, text: "Works 24/7" },
    { icon: Zap, text: "Never Misses a Lead" },
    { icon: Bot, text: "No Training Needed" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Robot Emoji with Animation */}
            <div className="flex items-center space-x-3">
              <div className="text-6xl animate-bounce">🦾</div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium">
                AI-Powered Recruitment
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meet{" "}
                <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  Recruitexe
                </span>{" "}
                – Your Smartest Hiring Team Member
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 font-medium">The AI employee who never takes a break.</p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Recruitexe isn't just a platform — it's your full-time, always-on recruiter. From job posting to
              AI-powered resume screening, Recruitexe handles it all like your most efficient teammate.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <feature.icon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap items-center gap-4 text-gray-700">
              <Clock className="w-5 h-5 text-orange-500" />
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <benefit.icon className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">{benefit.text}</span>
                  {index < benefits.length - 1 && <span className="text-gray-400">·</span>}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🚀 HIRE NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                ⚡ IMMEDIATE JOINER
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image/Graphics */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10 bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Recruitment Dashboard"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-float">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-float animation-delay-1000">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-lg p-3 shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-sm font-medium text-gray-700">24/7 Active</span>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-orange-200 rounded-3xl -z-10 blur-lg opacity-50"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-orange-500">10x</div>
                <div className="text-sm text-gray-600">Faster Hiring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
