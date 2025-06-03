import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Investa</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for investment solutions and financial planning.</p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Investment Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Portfolio Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Financial Advisory
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Risk Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="text-blue-500 mr-3" size={16} />
                <span className="text-gray-400">123 Business St, City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-500 mr-3" size={16} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-500 mr-3" size={16} />
                <span className="text-gray-400">info@investa.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Investa. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
