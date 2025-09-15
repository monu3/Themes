import React, { useState } from "react";
import { Search, Menu, X, Truck, ShoppingBag, Star, ArrowRight, Filter, Heart, User } from "lucide-react";

const ShoesShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Header = () => (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner */}
        <div className="bg-slate-900 text-white py-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center text-sm">
            <Truck className="w-4 h-4 mr-2" />
            <span>Free Shipping on Orders Over $75 | 30-Day Easy Returns</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-slate-800 to-slate-600 p-3 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554235676-64bb6cc8136a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxzdHlsaXNoJTIwc2hvZXN8ZW58MHx8fHwxNzU3OTU4MTg3fDA&ixlib=rb-4.1.0&q=85" 
                  alt="StepStyle Logo" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">StepStyle</h1>
                <p className="text-xs text-slate-500 font-medium">PREMIUM FOOTWEAR</p>
              </div>
            </div>

            {/* Center - Search Bar (Prominent) */}
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-slate-500 focus:ring-slate-500 text-gray-900"
                  placeholder="Search shoes, brands, styles..."
                  type="search"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 hover:text-slate-600 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden lg:flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Wishlist</span>
              </button>
              <button className="hidden lg:flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>
              <button className="bg-slate-800 text-white px-4 py-2 rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center justify-center space-x-12 mt-6 pt-6 border-t border-gray-100">
            <a href="#" className="text-slate-800 hover:text-slate-600 font-medium transition-colors border-b-2 border-slate-800 pb-2">Men</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium transition-colors pb-2 border-b-2 border-transparent hover:border-slate-300">Women</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium transition-colors pb-2 border-b-2 border-transparent hover:border-slate-300">Kids</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium transition-colors pb-2 border-b-2 border-transparent hover:border-slate-300">Sneakers</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium transition-colors pb-2 border-b-2 border-transparent hover:border-slate-300">Athletic</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium transition-colors pb-2 border-b-2 border-transparent hover:border-slate-300">Dress</a>
            <a href="#" className="text-red-600 hover:text-red-700 font-bold transition-colors pb-2 border-b-2 border-transparent hover:border-red-300">Sale</a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search shoes..." 
                  className="bg-transparent flex-1 outline-none text-gray-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="text-slate-800 font-medium py-2">Men</a>
                <a href="#" className="text-slate-600 font-medium py-2">Women</a>
                <a href="#" className="text-slate-600 font-medium py-2">Kids</a>
                <a href="#" className="text-slate-600 font-medium py-2">Sneakers</a>
                <a href="#" className="text-slate-600 font-medium py-2">Athletic</a>
                <a href="#" className="text-red-600 font-bold py-2">Sale</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  const Hero = () => (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-slate-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                New Collection 2024
              </div>
              
              <h1 className="text-7xl font-bold text-slate-900 leading-tight">
                Step Into
                <span className="block text-slate-600 relative">
                  Style
                  <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
                    <path d="M2 6C30 2 90 2 150 6C210 10 270 10 298 6" stroke="#64748b" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Discover premium footwear that combines comfort, style, and performance. 
                From everyday classics to statement pieces.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-slate-800">500+</div>
                <div className="text-slate-600 text-sm">Styles</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-slate-800">50+</div>
                <div className="text-slate-600 text-sm">Brands</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-slate-800">24/7</div>
                <div className="text-slate-600 text-sm">Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                Shop Collection <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              <button className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300">
                View Lookbook
              </button>
            </div>
          </div>
          
          {/* Right Content - Product Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Main Product Card */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl transform hover:-rotate-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </span>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1592670587543-f409a95839e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxzdHlsaXNoJTIwc2hvZXN8ZW58MHx8fHwxNzU3OTU4MTg3fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Premium Sneakers" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800">
                  -30%
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Urban Runner Pro</h3>
                  <p className="text-slate-600">Premium Athletic Sneakers</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-600 text-sm">(4.8) • 1.2k reviews</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-slate-800">$129.99</span>
                      <span className="text-lg text-gray-400 line-through">$185.99</span>
                    </div>
                    <p className="text-green-600 font-semibold text-sm">Free shipping & returns</p>
                  </div>
                  <button className="bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                
                {/* Size Selection */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-slate-600 mb-3">Available Sizes:</p>
                  <div className="flex space-x-2">
                    {['7', '8', '9', '10', '11'].map((size) => (
                      <button 
                        key={size}
                        className="w-10 h-10 border-2 border-gray-200 rounded-lg text-sm font-semibold hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
              Limited Time!
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Fast Delivery</div>
                  <div className="text-xs text-slate-600">2-3 Business Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Stay in Step</h3>
            <p className="text-slate-300 text-lg mb-6">
              Get the latest drops, exclusive offers, and style inspiration delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="flex-1 px-4 py-3 rounded-xl text-slate-800 outline-none"
              />
              <button className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">tw</span>
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">fb</span>
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">yt</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-slate-700 to-slate-500 p-3 rounded-2xl">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">StepStyle</h2>
                <p className="text-slate-400 text-sm">PREMIUM FOOTWEAR</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Curating the world's finest footwear since 1995. From street-ready sneakers to 
              boardroom-worthy dress shoes, we help you step forward in style.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Shop</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Men's Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kids' Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Athletic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">
            &copy; 2024 StepStyle. All rights reserved. | Designed with passion for footwear
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
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

export default ShoesShop;
