import React, { useState } from "react";
import { Search, Menu, X, Sparkles, ShoppingBag, Star, ArrowRight, Heart } from "lucide-react";

const CosmeticsShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Header = () => (
    <header className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1561408564-99cd1624ccac" 
              alt="Beauty Bloom Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-pink-800">Beauty Bloom</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-pink-700 hover:text-pink-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Products</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Category</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Collection</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2 w-80">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search beauty products..." 
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
          <div className="md:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-pink-700 font-medium">Home</a>
              <a href="#" className="text-gray-600 font-medium">Products</a>
              <a href="#" className="text-gray-600 font-medium">Category</a>
              <a href="#" className="text-gray-600 font-medium">Collection</a>
              <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 mt-3">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search beauty products..." 
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
    <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Discover Your 
              <span className="text-pink-600 block animate-pulse">Natural Beauty</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premium cosmetics and skincare products that enhance your natural radiance and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300">
                Beauty Tips
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348" 
                alt="Premium Cosmetics" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Luxury Lipstick Set</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-2xl font-bold text-pink-600">$89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-pink-400" />
              <span className="text-xl font-bold">Beauty Bloom</span>
            </div>
            <p className="text-pink-200">
              Enhancing natural beauty with premium cosmetics and skincare.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-pink-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beauty Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-pink-200">
              <li><a href="#" className="hover:text-white transition-colors">Skincare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Makeup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fragrance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">pi</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pink-800 mt-8 pt-8 text-center text-pink-200">
          <p>&copy; 2024 Beauty Bloom. All rights reserved.</p>
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

export default CosmeticsShop;