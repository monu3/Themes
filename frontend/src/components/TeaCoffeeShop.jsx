import React, { useState } from "react";
import { Search, Menu, X, Coffee, ShoppingBag, Star, ArrowRight, MapPin, Clock } from "lucide-react";

const TeaCoffeeShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Header = () => (
    <header className="bg-gradient-to-r from-amber-800 to-amber-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-amber-600">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>123 Coffee Street, Bean City</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Open 7:00 AM - 9:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>(555) 123-BREW</span>
            <span>|</span>
            <span>Free Delivery on Orders $25+</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center h-20">
          {/* Logo with different layout */}
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-2">
              <img 
                src="https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NTc5NTgxODJ8MA&ixlib=rb-4.1.0&q=85" 
                alt="Brew & Bean Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Brew & Bean</span>
              <p className="text-amber-200 text-sm">Premium Coffee Experience</p>
            </div>
          </div>

          {/* Centered Navigation - Different Layout */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a href="#" className="text-white hover:text-amber-300 font-medium transition-colors border-b-2 border-amber-500 pb-1">Home</a>
            <a href="#" className="text-amber-200 hover:text-amber-300 font-medium transition-colors pb-1 hover:border-b-2 hover:border-amber-300 border-b-2 border-transparent">Coffee</a>
            <a href="#" className="text-amber-200 hover:text-amber-300 font-medium transition-colors pb-1 hover:border-b-2 hover:border-amber-300 border-b-2 border-transparent">Tea</a>
            <a href="#" className="text-amber-200 hover:text-amber-300 font-medium transition-colors pb-1 hover:border-b-2 hover:border-amber-300 border-b-2 border-transparent">Pastries</a>
            <a href="#" className="text-amber-200 hover:text-amber-300 font-medium transition-colors pb-1 hover:border-b-2 hover:border-amber-300 border-b-2 border-transparent">About</a>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-amber-900/30 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-amber-200 mr-2" />
              <input 
                type="text" 
                placeholder="Search coffee, tea..." 
                className="bg-transparent text-white placeholder-amber-200 flex-1 outline-none w-32"
              />
            </div>
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cart
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-amber-600">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-white font-medium py-2">Home</a>
              <a href="#" className="text-amber-200 font-medium py-2">Coffee</a>
              <a href="#" className="text-amber-200 font-medium py-2">Tea</a>
              <a href="#" className="text-amber-200 font-medium py-2">Pastries</a>
              <a href="#" className="text-amber-200 font-medium py-2">About</a>
              <div className="flex items-center bg-amber-900/30 rounded-lg px-3 py-2 mt-3">
                <Search className="w-5 h-5 text-amber-200 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent text-white placeholder-amber-200 flex-1 outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  const Hero = () => (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Different Layout */}
          <div className="space-y-10">
            <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full text-amber-800 font-medium">
              <Coffee className="w-4 h-4 mr-2" />
              <span>Fresh Roasted Daily</span>
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              Wake Up to
              <span className="text-amber-600 block relative">
                Perfect Coffee
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200 -z-10 transform -skew-x-12"></div>
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 leading-relaxed font-light">
              Handcrafted beverages made with love, premium beans sourced globally, and served with a smile that starts your day right.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-gray-600">Coffee Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-amber-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                Order Online <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              <button className="border-3 border-amber-600 text-amber-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg">
                Visit Store
              </button>
            </div>
          </div>
          
          {/* Right Content - Unique Card Design */}
          <div className="relative">
            {/* Main Product Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-transform duration-700">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-amber-100 px-3 py-1 rounded-full text-amber-800 text-sm font-semibold">
                  Featured Today
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">(4.9)</span>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NTc5NTgxODJ8MA&ixlib=rb-4.1.0&q=85" 
                alt="Premium Ethiopian Coffee" 
                className="w-full h-72 object-cover rounded-2xl mb-6"
              />
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Ethiopian Single Origin</h3>
                <p className="text-gray-600">Rich, full-bodied coffee with notes of dark chocolate and berries</p>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-amber-600">$24.99</span>
                      <span className="text-lg text-gray-400 line-through">$32.99</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">25% Off Today!</div>
                  </div>
                  <button className="bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              Free Shipping!
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Fresh Roasted</div>
                  <div className="text-xs text-gray-600">This Morning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-amber-800/50 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Brewing Fresh</h3>
          <p className="text-amber-200 mb-6 text-lg">Get exclusive coffee tips, new arrivals, and special offers delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 outline-none"
            />
            <button className="bg-amber-600 hover:bg-amber-500 px-8 py-3 rounded-xl font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <Coffee className="w-10 h-10 text-amber-400" />
              <div>
                <span className="text-2xl font-bold">Brew & Bean</span>
                <p className="text-amber-200 text-sm">Premium Coffee Experience</p>
              </div>
            </div>
            <p className="text-amber-200 leading-relaxed">
              From bean to cup, we're passionate about delivering the perfect coffee experience. 
              Each blend is carefully crafted to awaken your senses and fuel your day.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">tw</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Menu</h3>
            <ul className="space-y-3 text-amber-200">
              <li><a href="#" className="hover:text-white transition-colors">Espresso Drinks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cold Brews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialty Teas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fresh Pastries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coffee Beans</a></li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Information</h3>
            <ul className="space-y-3 text-amber-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coffee Origins</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brewing Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Visit Us</h3>
            <div className="space-y-4 text-amber-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-amber-400" />
                <div>
                  <p>123 Coffee Street</p>
                  <p>Bean City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <p>Mon-Fri: 7AM-9PM</p>
                  <p>Sat-Sun: 8AM-10PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">📞</span>
                <p>(555) 123-BREW</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-12 pt-8 text-center text-amber-200">
          <p>&copy; 2024 Brew & Bean Coffee Co. All rights reserved. | Crafted with ❤️ and ☕</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default TeaCoffeeShop;
