import React, { useState } from "react";
import { Search, Menu, X, Crown, ShoppingBag, Star, ArrowRight, Gift, Shield, Sparkles } from "lucide-react";

const EarringsShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Header = () => (
    <header className="bg-gradient-to-r from-rose-50 to-amber-50 border-b-2 border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Banner */}
        <div className="text-center py-3 bg-gradient-to-r from-rose-600 to-amber-600 text-white text-sm font-medium -mx-4 sm:-mx-6 lg:-mx-8">
          ✨ Exclusive Holiday Collection - Up to 40% Off Selected Pieces ✨
        </div>

        <div className="py-6">
          <div className="flex items-center justify-between">
            {/* Logo Section - Centered Design */}
            <div className="flex-1">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 via-pink-400 to-amber-400 rounded-full p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1676496220343-1585b0cdcc3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwZWFycmluZ3N8ZW58MHx8fHwxNzU3OTU4MTkzfDA&ixlib=rb-4.1.0&q=85" 
                      alt="Lumière Jewelry Logo" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                    Lumière
                  </h1>
                  <p className="text-sm text-rose-500 font-medium tracking-wider">FINE JEWELRY</p>
                </div>
              </div>
            </div>

            {/* Center Navigation - Elegant Style */}
            <nav className="hidden lg:flex items-center space-x-12 flex-1 justify-center">
              <a href="#" className="text-rose-700 hover:text-rose-600 font-medium transition-colors relative group">
                Collections
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600 transform scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors relative group">
                Earrings
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors relative group">
                Necklaces
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors relative group">
                Bracelets
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-600 font-medium transition-colors relative group">
                Custom
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
              {/* Elegant Search */}
              <div className="hidden md:flex items-center bg-white border-2 border-rose-200 rounded-full px-4 py-2 w-72 focus-within:border-rose-400 transition-colors">
                <Search className="w-4 h-4 text-rose-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search luxury jewelry..." 
                  className="bg-transparent flex-1 outline-none text-gray-700 placeholder-rose-300"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full border border-rose-200 hover:bg-rose-50 transition-colors">
                  <Gift className="w-4 h-4 text-rose-600" />
                  <span className="text-sm font-medium text-rose-700">Gift Guide</span>
                </button>
                
                <button className="bg-gradient-to-r from-rose-600 to-amber-600 text-white px-6 py-2 rounded-full font-medium hover:from-rose-700 hover:to-amber-700 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Cart</span>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">2</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-full hover:bg-rose-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6 text-rose-600" /> : <Menu className="w-6 h-6 text-rose-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-rose-100">
            <div className="space-y-4">
              <div className="flex items-center bg-white border border-rose-200 rounded-lg px-3 py-2">
                <Search className="w-5 h-5 text-rose-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search jewelry..." 
                  className="bg-transparent flex-1 outline-none text-gray-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="text-rose-700 font-medium py-3 text-center bg-rose-50 rounded-lg">Collections</a>
                <a href="#" className="text-gray-700 font-medium py-3 text-center hover:bg-rose-50 rounded-lg transition-colors">Earrings</a>
                <a href="#" className="text-gray-700 font-medium py-3 text-center hover:bg-rose-50 rounded-lg transition-colors">Necklaces</a>
                <a href="#" className="text-gray-700 font-medium py-3 text-center hover:bg-rose-50 rounded-lg transition-colors">Bracelets</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  const Hero = () => (
    <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-24 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full blur-xl"></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-1/4 w-6 h-6 text-rose-300 animate-pulse" />
        <Sparkles className="absolute top-40 right-1/3 w-4 h-4 text-amber-300 animate-bounce" />
        <Sparkles className="absolute bottom-32 left-1/3 w-5 h-5 text-pink-300 animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-amber-100 px-6 py-2 rounded-full">
                <Crown className="w-5 h-5 text-rose-600 mr-2" />
                <span className="text-rose-800 font-semibold">Handcrafted Excellence</span>
              </div>
              
              <h1 className="text-7xl font-serif font-bold text-gray-900 leading-tight">
                Timeless
                <span className="block text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text relative">
                  Elegance
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-rose-300 to-amber-300 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                Discover exquisite earrings crafted with precision, adorned with the finest gems, 
                and designed to celebrate your unique beauty.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-600 font-medium">Authentic</div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">25+</div>
                <div className="text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">∞</div>
                <div className="text-gray-600 font-medium">Warranty</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-rose-600 to-amber-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-rose-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-2xl">
                Explore Collection <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              <button className="border-2 border-rose-600 text-rose-600 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-lg">
                Book Consultation
              </button>
            </div>
          </div>
          
          {/* Right Content - Luxury Product Display */}
          <div className="relative">
            {/* Main Product Showcase */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-transform duration-700 border border-rose-100">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-r from-rose-100 to-amber-100 px-4 py-2 rounded-full">
                  <span className="text-rose-800 font-semibold text-sm">Featured Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm font-medium">(5.0)</span>
                </div>
              </div>
              
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl transform rotate-1"></div>
                <img 
                  src="https://images.unsplash.com/photo-1684439673104-f5d22791c71a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZWFycmluZ3N8ZW58MHx8fHwxNzU3OTU4MTkzfDA&ixlib=rb-4.1.0&q=85" 
                  alt="Diamond Rose Gold Earrings" 
                  className="w-full h-80 object-cover rounded-2xl relative z-10"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-rose-600 font-bold text-sm">Limited Edition</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Diamond Rose Drops</h3>
                  <p className="text-gray-600">18K Rose Gold with Brilliant Cut Diamonds</p>
                </div>
                
                {/* Materials & Certifications */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-medium">Certified</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">0.5 ct total</span>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">VS1 Clarity</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">$2,890</span>
                      <span className="text-lg text-gray-400 line-through">$3,600</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-semibold text-sm">Interest-free payments</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-sm">From $241/mo</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-rose-600 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-rose-700 hover:to-amber-700 transition-all duration-300 shadow-lg">
                    Add to Cart
                  </button>
                </div>
                
                {/* Size Guide */}
                <div className="pt-6 border-t border-rose-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Size Options:</span>
                    <button className="text-rose-600 text-sm font-medium hover:underline">Size Guide</button>
                  </div>
                  <div className="flex space-x-3">
                    {['Small', 'Medium', 'Large'].map((size) => (
                      <button 
                        key={size}
                        className="px-4 py-2 border-2 border-rose-200 rounded-lg text-sm font-medium hover:border-rose-600 hover:bg-rose-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Trust Badges */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-amber-400 to-rose-400 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
              <span className="flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                Premium Quality
              </span>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-rose-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Free Gift Box</div>
                  <div className="text-xs text-gray-600">With Every Purchase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-br from-rose-900 via-pink-900 to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-60 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* VIP Section */}
        <div className="bg-gradient-to-r from-rose-800/50 to-amber-800/50 backdrop-blur-sm rounded-3xl p-12 mb-16 text-center border border-white/10">
          <Crown className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h3 className="text-4xl font-serif font-bold mb-6">Join Our VIP Circle</h3>
          <p className="text-rose-200 mb-8 text-xl max-w-2xl mx-auto">
            Get exclusive access to limited collections, personalized styling advice, and priority access to our master craftsmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email for VIP access..." 
              className="flex-1 px-6 py-4 rounded-2xl text-gray-800 outline-none bg-white/90 backdrop-blur-sm"
            />
            <button className="bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg">
              Join VIP
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand Story */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 via-pink-400 to-amber-400 rounded-full p-1">
                <div className="w-full h-full bg-gradient-to-br from-rose-600 to-amber-600 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold">Lumière</h2>
                <p className="text-rose-300 font-medium tracking-wider">FINE JEWELRY</p>
              </div>
            </div>
            <p className="text-rose-200 leading-relaxed text-lg">
              For over 25 years, Lumière has been crafting extraordinary jewelry pieces that tell your story. 
              Each creation combines traditional craftsmanship with contemporary design, using only the finest materials.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-amber-300">Follow Our Craft</h4>
              <div className="flex space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-800 to-amber-800 rounded-full flex items-center justify-center hover:from-rose-700 hover:to-amber-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">ig</span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-rose-800 to-amber-800 rounded-full flex items-center justify-center hover:from-rose-700 hover:to-amber-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">fb</span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-rose-800 to-amber-800 rounded-full flex items-center justify-center hover:from-rose-700 hover:to-amber-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">pi</span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-rose-800 to-amber-800 rounded-full flex items-center justify-center hover:from-rose-700 hover:to-amber-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">yt</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="font-bold mb-8 text-xl text-amber-300">Collections</h3>
            <ul className="space-y-4 text-rose-200">
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                Diamond Earrings
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                Gold Classics
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                Pearl Collection
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                Custom Pieces
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                Vintage Inspired
              </a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-8 text-xl text-amber-300">Services</h3>
            <ul className="space-y-4 text-rose-200">
              <li><a href="#" className="hover:text-white transition-colors">Personal Styling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appraisals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Repairs</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-8 text-xl text-amber-300">Visit Us</h3>
            <div className="space-y-6 text-rose-200">
              <div>
                <h4 className="font-semibold text-white mb-2">Flagship Boutique</h4>
                <p>Madison Avenue</p>
                <p>New York, NY 10022</p>
                <p className="text-sm mt-2">Mon-Sat: 10AM-7PM</p>
                <p className="text-sm">Sun: 12PM-5PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Private Consultations</h4>
                <p>(212) 555-LUXE</p>
                <p className="text-sm">By Appointment Only</p>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Lifetime Authenticity Guarantee</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-rose-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-rose-300 text-center md:text-left">
            &copy; 2024 Lumière Fine Jewelry. All rights reserved. | Crafted with passion since 1999
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0 text-sm text-rose-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Care Instructions</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
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

export default EarringsShop;
