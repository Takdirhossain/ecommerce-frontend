"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler"
import { useIsMobile } from "@/hooks/Ismobile"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const navItems = ["HOME", "SHOP", "PRODUCTS", "PAGES", "BLOGS"]

  return (
    <header className="w-full header bg-blur-2xl border-b border-gray-100 bg-white fixed top-0 left-0 z-50">
      <div className="mx-auto flex h-16 md:h-20 px-4 md:px-20 items-center justify-between relative">
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="p-2">
            <Menu className="h-5 w-5 text-gray-900" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">ProSlider</h1>
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {!isMobile ? (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="SEARCH PRODUCTS"
                onFocus={() => setSearchOpen(true)}
                className="w-96 pl-10 pr-4 py-2 text-sm h-10 rounded-full border-gray-200 focus:border-gray-300 focus:ring-0 cursor-pointer"
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="p-2">
              <Search className="h-5 w-5 text-gray-900" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button
            variant="ghost"
            className="hidden md:flex text-sm font-medium text-gray-900 hover:text-gray-600 px-2 cursor-pointer"
          >
            LOGIN
          </Button>

          {/* Wishlist */}
          {/* <Button variant="ghost" size="icon" className="p-2 cursor-pointer">
            <Heart className="h-5 w-5 text-gray-900" />
            <span className="sr-only">Wishlist</span>
          </Button>

          <Button variant="ghost" size="icon" className="relative p-2 cursor-pointer">
            <ShoppingBag className="h-5 w-5 text-gray-900" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
              0
            </span>
            <span className="sr-only">Shopping bag</span>
          </Button> */}

          <AnimatedThemeToggler />
        </div>
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-80 p-6">
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle>Menu</SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X className="h-5 w-5" />
            </Button>
          </SheetHeader>

          <div className="mt-8 space-y-6">
            {/* Navigation Links */}
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Login Button */}
            <div className="pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                className="w-full text-sm font-medium text-gray-900 hover:text-gray-600 bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
        <SheetContent side="top" className="w-screen mt-16 md:mt-20 h-screen p-4 md:p-6 border-t animate-slide-down">
          <SheetHeader>
            <SheetTitle>Search Suggestions</SheetTitle>
          </SheetHeader>

          {isMobile && (
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="SEARCH PRODUCTS"
                className="w-full pl-10 pr-4 py-2 text-sm h-10 rounded-full border-gray-200 focus:border-gray-300 focus:ring-0"
                autoFocus
              />
            </div>
          )}

          <div className="mt-6 space-y-4">
            <p className="text-gray-600">Popular Categories:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">Shoes</div>
              <div className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                Watches
              </div>
              <div className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">Bags</div>
              <div className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                Accessories
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
