"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Investment Solutions",
    subtitle: "Grow Your Wealth",
    description: "Professional investment management services to help you achieve your financial goals.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Financial Planning",
    subtitle: "Secure Your Future",
    description: "Comprehensive financial planning strategies tailored to your unique needs.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Portfolio Management",
    subtitle: "Maximize Returns",
    description: "Expert portfolio management to optimize your investment returns.",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">{slide.title}</h2>
                <h3 className="text-2xl md:text-3xl mb-6 animate-fade-in-up animation-delay-200">{slide.subtitle}</h3>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-400">{slide.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors animate-fade-in-up animation-delay-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
