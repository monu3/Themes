import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Smartphone, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Choose Your Shop Design
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore different e-commerce layouts for various business types
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link 
            to="/plant-shop" 
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Plant Shop</h2>
            <p className="text-gray-600">Green, natural, and organic design</p>
          </Link>
          
          <Link 
            to="/electronics-shop" 
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Electronics Shop</h2>
            <p className="text-gray-600">Modern, tech-focused design</p>
          </Link>
          
          <Link 
            to="/cosmetics-shop" 
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Cosmetics Shop</h2>
            <p className="text-gray-600">Elegant, beauty-focused design</p>
          </Link>
          <Link 
            to="/tea-coffee-shop" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
          >
            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
              <Coffee className="w-10 h-10 text-amber-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tea & Coffee Shop</h2>
            <p className="text-gray-600">Warm, cozy, and inviting design</p>
          </Link>

          <Link 
            to="/shoes-shop" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
          >
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
              <ShoppingBag className="w-10 h-10 text-slate-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Shoes Shop</h2>
            <p className="text-gray-600">Sleek, modern footwear design</p>
          </Link>

          <Link 
            to="/earrings-shop" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
          >
            <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
              <Crown className="w-10 h-10 text-rose-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Earrings Shop</h2>
            <p className="text-gray-600">Luxury jewelry and accessories</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
