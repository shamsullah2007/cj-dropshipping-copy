import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  Headset,
  Star,
  ChevronRight,
  Filter,
  Grid,
  List,
  ChevronUp,
  Plus,
  Minus,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function CJFindProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "Computer & Office", count: "125,430" },
    { name: "Bags & Shoes", count: "89,210" },
    { name: "Women's Clothing", count: "342,100" },
    { name: "Jewelry & Watches", count: "56,780" },
    { name: "Home, Garden & Furniture", count: "210,500" },
    { name: "Toys, Kids & Baby", count: "78,900" },
    { name: "Sports & Outdoors", count: "145,200" },
    { name: "Health, Beauty & Hair", count: "198,300" },
    { name: "Automobiles & Motorcycles", count: "45,600" },
    { name: "Home Improvement", count: "67,800" },
  ];

  const products = [
    { id: 1, img: "findprod-1.png", name: "TWS True Wireless Bluetooth Earbuds Smart Touch Control Waterproof", price: "$4.50 - $6.20", shipping: "Free Shipping", from: "CN", rating: 4.8, reviews: 1240 },
    { id: 2, img: "findprod-2.png", name: "Smart Watch Men Women Fitness Tracker Blood Pressure Heart Rate", price: "$12.30 - $15.50", shipping: "$2.50 shipping", from: "US", rating: 4.5, reviews: 856 },
    { id: 3, img: "findprod-3.png", name: "Modern LED Desk Lamp with Wireless Charger Touch Control Table Lamp", price: "$18.90 - $22.10", shipping: "Free Shipping", from: "CN", rating: 4.9, reviews: 2100 },
    { id: 4, img: "findprod-4.png", name: "Adjustable Dumbbell Set Home Gym Fitness Equipment Workout", price: "$45.00 - $55.00", shipping: "$15.00 shipping", from: "US", rating: 4.7, reviews: 540 },
    { id: 5, img: "findprod-5.png", name: "Facial Cleansing Brush Electric Face Scrubber Waterproof Silicone", price: "$3.20 - $4.80", shipping: "Free Shipping", from: "CN", rating: 4.6, reviews: 3200 },
    { id: 6, img: "findprod-6.png", name: "Noise Cancelling Headphones Over Ear Wireless Bluetooth Headset", price: "$22.50 - $28.00", shipping: "$3.00 shipping", from: "US", rating: 4.8, reviews: 1800 },
    { id: 7, img: "findprod-7.png", name: "Luxury Men's Chronograph Watch Waterproof Stainless Steel Quartz", price: "$15.80 - $19.50", shipping: "Free Shipping", from: "CN", rating: 4.4, reviews: 920 },
    { id: 8, img: "findprod-8.png", name: "Aromatherapy Essential Oil Diffuser Ultrasonic Humidifier Wood Grain", price: "$8.50 - $11.20", shipping: "$1.50 shipping", from: "US", rating: 4.7, reviews: 4500 },
    { id: 9, img: "findprod-9.png", name: "Magnetic Building Blocks Set Educational STEM Toys for Kids", price: "$14.20 - $18.50", shipping: "Free Shipping", from: "CN", rating: 4.9, reviews: 1100 },
    { id: 10, img: "findprod-10.png", name: "1080P HD Mini WiFi Camera Home Security Secret Night Vision", price: "$9.90 - $12.50", shipping: "$2.00 shipping", from: "US", rating: 4.3, reviews: 760 },
    { id: 11, img: "prod-1.png", name: "Premium Yoga Mat Non-Slip Eco Friendly Exercise Mat with Alignment Lines", price: "$16.50 - $21.00", shipping: "Free Shipping", from: "CN", rating: 4.8, reviews: 2300 },
    { id: 12, img: "prod-2.png", name: "Programmable Coffee Maker with Thermal Carafe 12 Cup Capacity", price: "$35.00 - $42.00", shipping: "$8.50 shipping", from: "US", rating: 4.5, reviews: 890 },
  ];

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
              <a key={i} href="#" className={`pb-1 whitespace-nowrap hover:text-orange-500 transition-colors ${i === 1 ? "text-orange-500 font-semibold" : "text-gray-600"}`}>
                {tab}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-[240px] flex-shrink-0 space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-gray-800">Categories</h3>
              <Filter className="w-4 h-4 text-gray-500" />
            </div>
            <div className="p-2 max-h-[300px] overflow-y-auto">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between px-2 py-2 hover:bg-orange-50 cursor-pointer group rounded">
                  <div className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-orange-600">
                    <Plus className="w-3 h-3 text-gray-400 group-hover:text-orange-500" />
                    <span className="truncate max-w-[140px]">{cat.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 group-hover:text-orange-400">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between cursor-pointer">
              <h3 className="font-bold text-gray-800 text-sm">Price Range</h3>
              <ChevronUp className="w-4 h-4 text-gray-500" />
            </div>
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Input placeholder="Min" className="h-8 text-sm" />
                <span className="text-gray-400">-</span>
                <Input placeholder="Max" className="h-8 text-sm" />
              </div>
              <Button className="w-full mt-3 bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600 h-8 text-sm shadow-none">
                Apply
              </Button>
            </div>

            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between cursor-pointer">
              <h3 className="font-bold text-gray-800 text-sm">Ship From</h3>
              <ChevronUp className="w-4 h-4 text-gray-500" />
            </div>
            <div className="p-4 border-b border-gray-100 space-y-3">
              {["China Warehouse", "US Warehouse", "EU Warehouse", "AU Warehouse"].map((wh, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`wh-${i}`} />
                  <label htmlFor={`wh-${i}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 cursor-pointer">
                    {wh}
                  </label>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between cursor-pointer">
              <h3 className="font-bold text-gray-800 text-sm">Delivery Time</h3>
              <ChevronUp className="w-4 h-4 text-gray-500" />
            </div>
            <div className="p-4 border-b border-gray-100 space-y-3">
              {["1-3 days", "4-7 days", "7-14 days", "14+ days"].map((time, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`time-${i}`} />
                  <label htmlFor={`time-${i}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 cursor-pointer">
                    {time}
                  </label>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between cursor-pointer">
              <h3 className="font-bold text-gray-800 text-sm">Rating</h3>
              <ChevronUp className="w-4 h-4 text-gray-500" />
            </div>
            <div className="p-4 space-y-3 border-b border-gray-100">
              {[4, 3, 2, 1].map((rating, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${i}`} />
                  <label htmlFor={`rating-${i}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 flex items-center gap-1 cursor-pointer">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-3.5 h-3.5 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <span>& Up</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="p-3 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 underline decoration-dotted">Reset Filters</a>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <a href="#" className="hover:text-orange-500">Home</a>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-gray-900 font-medium">Find Products</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">1,234,567</span> products found
              </div>
            </div>
            
            <div className="h-px bg-gray-100 my-4"></div>
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                  {["Best Match", "Newest", "Price Low-High", "Price High-Low", "Best Selling"].map((sort, i) => (
                    <div key={i} className={`px-3 py-1.5 text-sm cursor-pointer border-r border-gray-200 last:border-r-0 ${i === 0 ? "bg-white text-orange-500 font-medium" : "text-gray-600 hover:bg-white"}`}>
                      {sort}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-md p-1 bg-gray-50">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white text-orange-500 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${viewMode === "list" ? "bg-white text-orange-500 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {products.map((prod) => (
              <div key={prod.id} className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 relative">
                {/* Hover overlay for Add to Cart */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-center items-center gap-3 hidden md:flex pointer-events-none">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg pointer-events-auto h-10 px-6 rounded-full font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
                
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <img src={`/__mockup/images/${prod.img}`} alt={prod.name} className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-gray-100">
                    {prod.from === "CN" ? "🇨🇳 CN" : "🇺🇸 US"}
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-1 relative z-0 bg-white">
                  <h3 className="text-sm text-gray-700 leading-snug line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors" title={prod.name}>
                    {prod.name}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-bold text-gray-700">{prod.rating}</span>
                      <span className="text-[10px] text-gray-400">({prod.reviews})</span>
                    </div>
                    
                    <div className="text-lg font-bold text-orange-500 mb-1">{prod.price}</div>
                    
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-4">
                      <span className="bg-gray-100 px-1.5 py-0.5 rounded">{prod.shipping}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white border-none shadow-none h-8 text-xs transition-colors">
                        Source
                      </Button>
                      <Button variant="outline" className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 h-8 text-xs">
                        Import
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="hover:text-orange-500" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-orange-500 text-white hover:bg-orange-600 hover:text-white border-orange-500">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="hover:text-orange-500">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="hover:text-orange-500">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="hover:text-orange-500">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="hover:text-orange-500" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] border-t border-gray-800 pt-16 pb-8 mt-12 text-gray-400">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#f97316] text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">
                  CJ
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  dropshipping
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                CJ Dropshipping is a global dropshipping platform that helps ecommerce sellers source products, manage inventory, and fulfill orders automatically worldwide.
              </p>
              <div className="flex gap-4">
                {['fb', 'tw', 'yt', 'ig', 'in'].map((social, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">
                    <span className="text-xs uppercase">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">About Us</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About CJ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Partner Program</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Customer Service</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Calculator</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Submit Dispute</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to get the latest product updates and dropshipping tips.</p>
              <div className="flex flex-col gap-2">
                <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} CJ Dropshipping. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
