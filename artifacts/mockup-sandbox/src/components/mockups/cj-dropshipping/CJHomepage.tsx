import React from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  Headset,
  Box,
  Zap,
  Printer,
  RotateCcw,
  MapPin,
  CheckCircle2,
  Star,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CJHomepage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-gray-100 py-1.5 px-4 text-[13px] hidden md:block">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Star className="w-3.5 h-3.5" /> Favorite CJ
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Headset className="w-3.5 h-3.5" /> 24/7 Support
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Globe className="w-3.5 h-3.5" /> English <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              USD <ChevronDown className="w-3 h-3" />
            </div>
            <div className="h-4 w-px bg-gray-300 mx-1"></div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-orange-500 transition-colors">Log In</a>
              <a href="#" className="bg-orange-50 text-orange-500 px-3 py-0.5 rounded text-xs font-medium hover:bg-orange-100 transition-colors">Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <div className="bg-[#f97316] text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md shadow-sm">
                CJ
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                dropshipping
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-3xl flex">
              <div className="flex w-full border-2 border-orange-500 rounded-lg overflow-hidden group focus-within:ring-2 ring-orange-200 transition-all">
                <div className="hidden sm:flex items-center bg-gray-50 px-3 border-r border-gray-200 text-sm text-gray-600 cursor-pointer hover:bg-gray-100">
                  All Categories <ChevronDown className="w-4 h-4 ml-1" />
                </div>
                <Input
                  className="flex-1 border-0 shadow-none focus-visible:ring-0 rounded-none px-4 h-10 md:h-11 text-base placeholder:text-gray-400"
                  placeholder="Enter keyword, SKU or AliExpress/Shopify URL"
                />
                <Button className="rounded-none bg-orange-500 hover:bg-orange-600 h-10 md:h-11 px-6 md:px-8 text-base">
                  <Search className="w-5 h-5 mr-2 hidden md:block" />
                  Search
                </Button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5 flex-shrink-0">
              <div className="flex flex-col items-center cursor-pointer hover:text-orange-500 group">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" />
                  <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </div>
                <span className="text-xs mt-1 font-medium hidden lg:block">Cart</span>
              </div>
              <Button className="hidden lg:flex bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-sm h-11 px-6 rounded-lg font-semibold">
                Authorization
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center mt-5 gap-6 text-sm font-medium overflow-x-auto pb-1 scrollbar-hide">
            <div className="flex items-center gap-1 text-orange-500 cursor-pointer border-b-2 border-orange-500 pb-1 whitespace-nowrap">
              <Menu className="w-4 h-4" /> All Categories
            </div>
            {[
              "Home",
              "Find Products",
              "Source for Me",
              "Warehouse",
              "Services",
              "Blog",
              "Academy",
              "Podcast"
            ].map((tab, i) => (
              <a key={i} href="#" className={`pb-1 whitespace-nowrap hover:text-orange-500 transition-colors ${i === 0 ? "text-orange-500 font-semibold" : "text-gray-600"}`}>
                {tab}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 py-6 space-y-8">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[460px]">
          {/* Categories Sidebar (Desktop) */}
          <div className="hidden lg:block w-[240px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-y-auto py-2">
            {[
              { icon: "📱", name: "Computer & Office" },
              { icon: "👜", name: "Bags & Shoes" },
              { icon: "👗", name: "Women's Clothing" },
              { icon: "💍", name: "Jewelry & Watches" },
              { icon: "🏠", name: "Home, Garden & Furniture" },
              { icon: "🧸", name: "Toys, Kids & Baby" },
              { icon: "⚽", name: "Sports & Outdoors" },
              { icon: "💄", name: "Health, Beauty & Hair" },
              { icon: "🚗", name: "Automobiles & Motorcycles" },
              { icon: "🛠️", name: "Home Improvement" },
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 cursor-pointer group transition-colors">
                <div className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-orange-600">
                  <span className="text-lg">{cat.icon}</span>
                  {cat.name}
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-orange-500" />
              </div>
            ))}
          </div>

          {/* Center Banner */}
          <div className="flex-1 relative rounded-xl overflow-hidden shadow-sm group">
            <img 
              src="/__mockup/images/hero-bg.png" 
              alt="CJ Dropshipping Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent flex flex-col justify-center p-10 lg:p-14">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight max-w-lg">
                Your Global <br/> <span className="text-orange-300">Dropshipping</span> Partner
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-md font-medium">
                No MOQ, No Subscription Fee, No Warehouse Fee. Source globally, fulfill locally.
              </p>
              <div className="flex gap-4">
                <Button className="bg-white text-orange-600 hover:bg-gray-50 h-12 px-8 rounded-lg text-base font-bold shadow-lg">
                  Start for Free
                </Button>
                <Button className="bg-orange-500/20 text-white border border-white/40 hover:bg-orange-500/40 h-12 px-8 rounded-lg text-base font-semibold backdrop-blur-sm">
                  Watch Video
                </Button>
              </div>
            </div>
            
            {/* Banner Nav Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-6 h-1.5 bg-orange-500 rounded-full cursor-pointer"></div>
              <div className="w-1.5 h-1.5 bg-white/50 hover:bg-white rounded-full cursor-pointer transition-colors"></div>
              <div className="w-1.5 h-1.5 bg-white/50 hover:bg-white rounded-full cursor-pointer transition-colors"></div>
            </div>
          </div>

          {/* Right Panels */}
          <div className="hidden xl:flex flex-col w-[280px] gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Trending Products</h3>
              <p className="text-xs text-gray-500 mb-4">Discover what's selling fast globally</p>
              <Button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 shadow-none">
                Explore Now
              </Button>
            </div>
            <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-sm p-5 text-white relative overflow-hidden flex flex-col justify-between group cursor-pointer">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors"></div>
              <div>
                <span className="bg-orange-500 text-xs font-bold px-2 py-1 rounded mb-3 inline-block uppercase tracking-wider">ACADEMY</span>
                <h3 className="font-bold text-lg leading-tight mb-2">Learn to dropship like a pro</h3>
                <p className="text-slate-300 text-sm">Free courses and tutorials for beginners</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:translate-x-1 transition-transform">
                Start Learning <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 flex flex-wrap justify-between gap-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-orange-50/30 pointer-events-none"></div>
          {[
            { icon: <Box className="w-6 h-6" />, title: "1M+ Products", desc: "Abundant categories" },
            { icon: <Zap className="w-6 h-6" />, title: "Fast Shipping", desc: "Global delivery" },
            { icon: <Printer className="w-6 h-6" />, title: "Print on Demand", desc: "Custom branding" },
            { icon: <RotateCcw className="w-6 h-6" />, title: "Auto Fulfill", desc: "Sync with stores" },
            { icon: <Search className="w-6 h-6" />, title: "Free Sourcing", desc: "Request products" },
            { icon: <MapPin className="w-6 h-6" />, title: "Global Warehouses", desc: "Local fulfillment" },
          ].map((feature, i) => (
             <div key={i} className="flex items-center gap-4 group cursor-pointer relative z-10">
               <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                 {feature.icon}
               </div>
               <div>
                 <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{feature.title}</h4>
                 <p className="text-xs text-gray-500">{feature.desc}</p>
               </div>
             </div>
          ))}
        </div>

        {/* Top Categories */}
        <section>
          <div className="flex justify-between items-end mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                Shop by Categories
              </h2>
              <p className="text-sm text-gray-500 mt-1">Explore a wide range of products for your dropshipping business</p>
            </div>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { img: "cat-electronics.png", name: "Consumer Electronics" },
              { img: "cat-fashion.png", name: "Men & Women's Fashion" },
              { img: "cat-home.png", name: "Home, Garden & Furniture" },
              { img: "cat-sports.png", name: "Sports & Outdoors" },
              { img: "cat-beauty.png", name: "Health & Beauty" },
              { img: "cat-toys.png", name: "Toys, Kids & Babies" },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center cursor-pointer group hover:shadow-md transition-all border border-gray-100 hover:border-orange-200">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-50 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img src={`/__mockup/images/${cat.img}`} alt={cat.name} className="w-20 h-20 object-contain mix-blend-multiply" />
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition-colors line-clamp-2">{cat.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Products */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-red-500">🔥</span> Hot Products
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 border-orange-200 text-orange-600 hover:bg-orange-50">New Arrivals</Button>
              <Button variant="outline" size="sm" className="h-8 border-gray-200 text-gray-600 hover:bg-gray-50">Top Selling</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { img: "prod-1.png", name: "TWS True Wireless Bluetooth Earbuds Smart Touch Control Waterproof", price: "$4.50 - $6.20", sold: "5.2k", shipping: "Free Shipping" },
              { img: "prod-2.png", name: "Smart Watch Men Women Fitness Tracker Blood Pressure Heart Rate", price: "$12.30 - $15.50", sold: "3.8k", shipping: "$2.50 to US" },
              { img: "prod-3.png", name: "Modern LED Desk Lamp with Wireless Charger Touch Control Table Lamp", price: "$18.90 - $22.10", sold: "2.1k", shipping: "Free Shipping" },
              { img: "cat-sports.png", name: "Adjustable Dumbbell Set Home Gym Fitness Equipment Workout", price: "$45.00 - $55.00", sold: "1.5k", shipping: "$15.00 to US" },
              { img: "cat-beauty.png", name: "Facial Cleansing Brush Electric Face Scrubber Waterproof Silicone", price: "$3.20 - $4.80", sold: "8.9k", shipping: "Free Shipping" },
              { img: "prod-1.png", name: "Noise Cancelling Headphones Over Ear Wireless Bluetooth Headset", price: "$22.50 - $28.00", sold: "4.4k", shipping: "$3.00 to US" },
              { img: "prod-2.png", name: "Luxury Men's Chronograph Watch Waterproof Stainless Steel Quartz", price: "$15.80 - $19.50", sold: "2.7k", shipping: "Free Shipping" },
              { img: "cat-home.png", name: "Aromatherapy Essential Oil Diffuser Ultrasonic Humidifier Wood Grain", price: "$8.50 - $11.20", sold: "6.1k", shipping: "$1.50 to US" },
              { img: "cat-toys.png", name: "Magnetic Building Blocks Set Educational STEM Toys for Kids", price: "$14.20 - $18.50", sold: "3.3k", shipping: "Free Shipping" },
              { img: "cat-electronics.png", name: "1080P HD Mini WiFi Camera Home Security Secret Night Vision", price: "$9.90 - $12.50", sold: "4.8k", shipping: "$2.00 to US" },
            ].map((prod, i) => (
              <div key={i} className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300">
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <img src={`/__mockup/images/${prod.img}`} alt={prod.name} className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Hot
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm text-gray-700 leading-snug line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
                    {prod.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="text-lg font-bold text-orange-500 mb-1">{prod.price}</div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                      <span className="bg-gray-100 px-1.5 py-0.5 rounded">{prod.shipping}</span>
                      <span>{prod.sold} sold</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border-none shadow-none h-8 text-xs transition-colors">
                        Source
                      </Button>
                      <Button variant="outline" className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 h-8 text-xs">
                        List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why CJ & Integrations */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Why Choose CJ?</h2>
            <p className="text-slate-300 mb-8 relative z-10 text-lg">Your all-in-one dropshipping solution to scale your ecommerce business.</p>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">500K+</div>
                <p className="text-sm text-slate-400">Active Dropshippers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">1M+</div>
                <p className="text-sm text-slate-400">Winning Products</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">200+</div>
                <p className="text-sm text-slate-400">Logistics Methods</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                <p className="text-sm text-slate-400">Agent Support</p>
              </div>
            </div>

            <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white border-0 h-12 px-8 text-base font-semibold shadow-lg shadow-orange-500/30">
              Join Us Now
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Seamless Integration</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Connect Your Store Easily</h2>
              <p className="text-gray-500 text-lg">Authorize your store with CJ Dropshipping to automate your order fulfillment. We support major ecommerce platforms.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Shopify", color: "bg-green-50 text-green-600 border-green-100" },
                { name: "WooCommerce", color: "bg-purple-50 text-purple-600 border-purple-100" },
                { name: "eBay", color: "bg-blue-50 text-blue-600 border-blue-100" },
                { name: "TikTok Shop", color: "bg-gray-100 text-gray-900 border-gray-200" },
                { name: "Etsy", color: "bg-orange-50 text-orange-500 border-orange-100" },
                { name: "Amazon", color: "bg-yellow-50 text-yellow-600 border-yellow-100" },
              ].map((platform, i) => (
                <div key={i} className={`flex items-center justify-center h-16 rounded-xl border ${platform.color} font-bold cursor-pointer hover:shadow-md transition-shadow`}>
                  {platform.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#f97316] text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">
                  CJ
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  dropshipping
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                CJ Dropshipping is a global dropshipping platform that helps ecommerce sellers source products, manage inventory, and fulfill orders automatically worldwide.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                {['fb', 'tw', 'yt', 'ig', 'in'].map((social, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">
                    <span className="text-xs uppercase">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">About Us</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">About CJ</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Partner Program</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Customer Service</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500">Shipping Calculator</a></li>
                <li><a href="#" className="hover:text-orange-500">Return & Refund</a></li>
                <li><a href="#" className="hover:text-orange-500">Dispute Process</a></li>
                <li><a href="#" className="hover:text-orange-500">CJ Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Get the latest dropshipping news, product recommendations and promotions.</p>
              <div className="flex">
                <Input placeholder="Enter your email" className="rounded-r-none focus-visible:ring-0 border-gray-300" />
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none text-white px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 CJ Dropshipping. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500">Terms of Use</a>
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
