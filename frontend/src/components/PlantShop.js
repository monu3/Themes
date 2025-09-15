import React, { useState } from "react";
import { Search, Menu, X, Leaf, ShoppingBag, Star, ArrowRight } from "lucide-react";

const PlantShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Header = () => (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1483718983629-1100e0808b32" 
              alt="Green Haven Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-green-800">Green Haven</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-green-700 hover:text-green-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Products</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Category</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Collection</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2 w-80">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search plants..." 
              className="bg-transparent flex-1 outline-none text-gray-700"
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-green-700 font-medium">Home</a>
              <a href="#" className="text-gray-600 font-medium">Products</a>
              <a href="#" className="text-gray-600 font-medium">Category</a>
              <a href="#" className="text-gray-600 font-medium">Collection</a>
              <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 mt-3">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search plants..." 
                  className="bg-transparent flex-1 outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  const Hero = () => (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Bring Nature 
              <span className="text-green-600 block animate-pulse">Home</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our collection of beautiful, healthy plants that will transform your space into a green paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1586093248060-ceac286c4160" 
                alt="Beautiful Plant" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Monstera Deliciosa</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-600">$49</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">Green Haven</span>
            </div>
            <p className="text-green-200">
              Your trusted partner for bringing nature into your home.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white transition-colors">Indoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outdoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Succulents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Care</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">tw</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 Green Haven. All rights reserved.</p>
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

export default PlantShop;