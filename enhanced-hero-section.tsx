"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Zap, Bot, Briefcase, Target, TrendingUp, Star, ArrowRight } from "lucide-react"

export default function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    { icon: Briefcase, text: "Posts Vacancies", color: "text-purple-600" },
    { icon: Users, text: "Collects & Screens Resumes", color: "text-blue-600" },
    { icon: Target, text: "Shortlists the Best Fits", color: "text-green-600" },
    { icon: TrendingUp, text: "Tracks and Organizes Everything", color: "text-orange-600" },
  ]

  const benefits = [
    { icon: Clock, text: "Works 24/7", color: "text-orange-500" },
    { icon: Zap, text: "Never Misses a Lead", color: "text-yellow-500" },
    { icon: Bot, text: "No Training Needed", color: "text-purple-500" },
  ]

  const floatingElements = [
    { icon: "💼", delay: "0s", duration: "6s" },
    { icon: "🎯", delay: "1s", duration: "8s" },
    { icon: "⚡", delay: "2s", duration: "7s" },
    { icon: "🚀", delay: "3s", duration: "9s" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden relative">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20 animate-float-random"
          style={{
            left: `${20 + index * 20}%`,
            top: `${20 + index * 15}%`,
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {element.icon}
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* AI Robot Animation with Glow Effect */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                {/* Animated AI Robot Icon */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                  <Bot className="w-12 h-12 text-white animate-bounce-slow" />

                  {/* Orbiting Particles */}
                  <div className="absolute inset-0 rounded-2xl">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-2000"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>

                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
                  </div>
                </div>

                {/* AI Brain Waves */}
                <div className="absolute -top-4 -right-4 flex space-x-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-base font-bold rounded-full shadow-lg animate-pulse">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered Recruitment
              </Badge>
            </div>

            {/* Main Headline with Enhanced Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Meet{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    Recruitexe
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-25 animate-pulse"></div>
                </span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Your Smartest Hiring Team Member</h2>

              <p className="text-2xl lg:text-3xl text-cyan-200 font-semibold animate-fade-in-up">
                The AI employee who never takes a break.
              </p>
            </div>

            {/* Enhanced Description */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <p className="text-xl text-gray-100 leading-relaxed">
                Recruitexe isn't just a platform — it's your full-time, always-on recruiter. From job posting to
                AI-powered resume screening, Recruitexe handles it all like your most efficient teammate.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group flex items-center space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <CheckCircle className="w-6 h-6 text-green-400 z-10 relative" />
                    <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>
                  <feature.icon className={`w-6 h-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-white font-semibold group-hover:text-cyan-200 transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced Benefits */}
            <div className="flex flex-wrap items-center gap-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-md border border-white/20">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="relative">
                    <benefit.icon className={`w-5 h-5 ${benefit.color} group-hover:scale-125 transition-transform`} />
                    <div
                      className={`absolute inset-0 w-5 h-5 ${benefit.color.replace("text-", "bg-")} rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity`}
                    ></div>
                  </div>
                  <span className="font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {benefit.text}
                  </span>
                  {index < benefits.length - 1 && <span className="text-gray-400">·</span>}
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  🚀 HIRE NOW
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Hero Graphics */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Main Hero Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Dashboard Preview */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-4 flex justify-between items-center border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-bold">Recruitexe Dashboard</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6">
                    {/* Live Screening Section */}
                    <div className="mb-6">
                      <h3 className="text-white text-lg font-bold mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Live Screening
                      </h3>

                      {/* Candidate Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-cyan-400/30 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                                {String.fromCharCode(64 + i)}
                              </div>
                              <div>
                                <div className="text-white text-sm font-medium">Candidate {i}</div>
                                <div className="text-gray-400 text-xs">Software Engineer</div>
                              </div>
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                              <div
                                className="bg-gradient-to-r from-green-500 to-cyan-500 h-1.5 rounded-full"
                                style={{ width: `${60 + i * 10}%` }}
                              ></div>
                              <span className="text-cyan-400 text-xs font-bold">{60 + i * 10}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Analytics Chart */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-white font-medium">Candidate Matching</h4>
                        <div className="flex space-x-2">
                          <span className="text-xs text-purple-400">●</span>
                          <span className="text-xs text-white/70">Technical</span>
                          <span className="text-xs text-cyan-400 ml-2">●</span>
                          <span className="text-xs text-white/70">Soft Skills</span>
                        </div>
                      </div>

                      {/* Chart Visualization */}
                      <div className="h-24 flex items-end space-x-1">
                        {[40, 65, 45, 80, 60, 75, 50, 90, 70, 85, 55, 75].map((height, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                            <div
                              className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm animate-pulse"
                              style={{ height: `${height * 0.7}%` }}
                            ></div>
                            <div
                              className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-sm animate-pulse"
                              style={{ height: `${(height - 15) * 0.7}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>

                      {/* Time Markers */}
                      <div className="flex justify-between mt-2">
                        <span className="text-gray-400 text-xs">1h</span>
                        <span className="text-gray-400 text-xs">12h</span>
                        <span className="text-gray-400 text-xs">24h</span>
                      </div>
                    </div>
                  </div>

                  {/* Overlay UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Robot Assistant */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-6 shadow-2xl animate-float border-4 border-white/30">
                  <Bot className="w-12 h-12 text-white" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur opacity-50 animate-pulse"></div>
                </div>

                {/* AI Brain Visualization */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full p-6 shadow-2xl animate-float animation-delay-1000 border-4 border-white/30">
                  <Zap className="w-12 h-12 text-white" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur opacity-50 animate-pulse"></div>
                </div>
              </div>

              {/* Background Glow Effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -inset-12 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-40"></div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-gray-300 font-semibold">Uptime</div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10x
                </div>
                <div className="text-sm text-gray-300 font-semibold">Faster</div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-300 font-semibold">Active</div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Additional Visual Elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute bottom-1/4 -left-12 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(5deg); }
          50% { transform: translate(-5px, -25px) rotate(-3deg); }
          75% { transform: translate(-10px, -10px) rotate(2deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes scan {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-random { animation: float-random 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-scan { animation: scan 2s ease-in-out infinite; }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
