"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu, DollarSign } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Team" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Topbar */}
      <div className="hidden lg:block bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-blue-500 flex items-center">
                <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                Find A Location
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 flex items-center">
                <Phone className="h-4 w-4 text-blue-500 mr-2" />
                +01234567890
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 flex items-center">
                <Mail className="h-4 w-4 text-blue-500 mr-2" />
                Example@gmail.com
              </a>
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-500 flex items-center">
              <DollarSign className="h-6 w-6 mr-2" />
              Isoke Development
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-1 transition-colors hover:text-blue-500 ${
                    pathname === item.href ? "text-blue-500" : "text-gray-900"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && <span className="absolute inset-0 border border-blue-500 rounded"></span>}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Start Investment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-4 transition-colors hover:text-blue-500 ${
                    pathname === item.href ? "text-blue-500" : "text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mx-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Investment
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
