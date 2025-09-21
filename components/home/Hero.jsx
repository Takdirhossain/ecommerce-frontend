"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Sparkles, Zap, Circle } from "lucide-react"



const shoes = [
  {
    id: 1,
    name: "Air Max Revolution",
    price: "$189",
    originalPrice: "$249",
    image: "/assets/home/image2.png",
    description: "Revolutionary comfort meets cutting-edge design",
    rating: 4.9,
    category: "Athletic",
    color: "White/Gold",
  },
  {
    id: 2,
    name: "Urban Elite Pro",
    price: "$159",
    image: "/assets/home/image3.png",
    description: "Premium urban style for the modern professional",
    rating: 4.8,
    category: "Lifestyle",
    color: "Black/Silver",
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % shoes.length)
      setIsAnimating(false)
    }, 400)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + shoes.length) % shoes.length)
      setIsAnimating(false)
    }, 400)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentShoe = shoes[currentSlide]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden animated-bg mt-10">
      <div className="absolute inset-0 opacity-30">
        {/* Animated vector elements */}
        <div className="absolute top-20 left-20 vector-float-1">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-32 vector-float-2">
          <Zap className="w-12 h-12 text-accent" />
        </div>
        <div className="absolute bottom-32 left-16 vector-float-3">
          <Circle className="w-6 h-6 text-primary fill-primary/20" />
        </div>
        <div className="absolute top-60 left-1/3 vector-float-1" style={{ animationDelay: "2s" }}>
          <div className="w-4 h-4 bg-accent rounded-full" />
        </div>
        <div className="absolute bottom-40 right-20 vector-float-2" style={{ animationDelay: "1s" }}>
          <div className="w-8 h-8 bg-primary/30 rounded-full blur-sm" />
        </div>
        <div className="absolute top-32 right-1/4 vector-float-3" style={{ animationDelay: "3s" }}>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(var(--primary),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--accent),0.1),transparent_50%)]" />
      </div>



      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-120px)] px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isAnimating ? "slide-out" : "slide-in"}`}>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-secondary/80 backdrop-blur-sm rounded-full border border-border/50 hover:scale-105 transition-transform duration-300">
                    {currentShoe.category}
                  </span>
                  <span>•</span>
                  <span className="color-shift">{currentShoe.color}</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                  {currentShoe.name}
                </h1>

                <p className="text-xl text-muted-foreground max-w-md text-pretty">{currentShoe.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all duration-300 hover:scale-110 ${
                        i < Math.floor(currentShoe.rating) ? "text-primary fill-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{currentShoe.rating} (2,847 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-primary pulse-glow">{currentShoe.price}</span>
                {currentShoe.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{currentShoe.originalPrice}</span>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg pulse-glow hover:scale-105 transition-all duration-300"
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary px-8 py-6 text-lg bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className={`relative ${isAnimating ? "slide-out" : "slide-in"}`}>
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 pulse-glow" />
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl scale-125 vector-float-1" />

                {/* Shoe Image with enhanced animation */}
                <div className="relative z-10 shoe-float">
                  <img
                    src={currentShoe.image || "/placeholder.svg"}
                    alt={currentShoe.name}
                    className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl color-shift"
                  />
                </div>

                {/* Enhanced floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-sm vector-float-1" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-accent/15 rounded-full blur-lg vector-float-2" />
                <div className="absolute top-1/4 -left-8 w-12 h-12 bg-primary/10 rounded-full blur-md vector-float-3" />
                <div
                  className="absolute bottom-1/4 -right-6 w-8 h-8 bg-accent/20 rounded-full blur-sm vector-float-1"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Animated icons around the shoe */}
                <div className="absolute top-10 right-10 vector-float-2" style={{ animationDelay: "0.5s" }}>
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-16 left-8 vector-float-3" style={{ animationDelay: "2s" }}>
                  <Zap className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 border border-border/50">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-border hover:bg-secondary bg-transparent hover:scale-110 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {shoes.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide
                    ? "bg-primary scale-125 pulse-glow"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-border hover:bg-secondary bg-transparent hover:scale-110 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-4 bg-card/60 backdrop-blur-md rounded-2xl p-4 border border-border/50">
          {shoes.map((shoe, index) => (
            <button
              key={shoe.id}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`w-20 h-20 rounded-lg border-2 transition-all duration-300 overflow-hidden hover:scale-110 ${
                index === currentSlide ? "border-primary scale-110 pulse-glow" : "border-border hover:border-primary/50"
              }`}
              disabled={isAnimating}
            >
              <img src={shoe.image || "/placeholder.svg"} alt={shoe.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
