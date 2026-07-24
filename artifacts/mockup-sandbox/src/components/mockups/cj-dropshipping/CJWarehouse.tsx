import React from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  Headset,
  Star,
  MapPin,
  CheckCircle2,
  Package,
  Zap,
  Camera,
  RefreshCw,
  Box,
  Truck,
  Building,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CJWarehouse() {
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
            <div className="flex items-center gap-1 text-orange-500 cursor-pointer border-b-2 border-transparent hover:border-orange-500 pb-1 whitespace-nowrap transition-colors">
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
              <a key={i} href="#" className={`pb-1 whitespace-nowrap hover:text-orange-500 transition-colors ${tab === "Warehouse" ? "text-orange-500 font-semibold border-b-2 border-orange-500" : "text-gray-600 border-b-2 border-transparent"}`}>
                {tab}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        
        {/* HERO SECTION */}
        <section className="relative w-full bg-slate-900 overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-40">
            <img 
              src="/__mockup/images/warehouse-interior.png" 
              alt="Warehouse Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          
          <div className="max-w-[1400px] mx-auto px-4 relative z-10 flex flex-col items-start text-white">
            <div className="inline-block bg-orange-500/20 text-orange-400 font-bold px-3 py-1 rounded-full text-sm mb-6 border border-orange-500/30 backdrop-blur-sm">
              CJ Fulfillment Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 max-w-3xl leading-tight">
              Global Warehouses, <br/> Local <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Speed</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Store your inventory in our warehouses worldwide and ship to customers in days, not weeks. Reduce shipping times and increase customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 h-14 px-8 text-lg font-bold shadow-lg shadow-orange-500/25 rounded-lg">
                Get Started
              </Button>
              <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg font-semibold backdrop-blur-sm rounded-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-4 py-8 relative -mt-10 z-20">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
              <div className="text-center px-4">
                <div className="text-4xl font-black text-slate-800 mb-1">6</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Countries</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl font-black text-slate-800 mb-1">325k+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Sq Ft Space</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl font-black text-slate-800 mb-1">99.7%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Accuracy</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl font-black text-orange-500 mb-1">24h</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Same-day Processing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-16 space-y-24">
          
          {/* WAREHOUSE LOCATIONS MAP SECTION */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Footprint</h2>
              <p className="text-gray-500 text-lg">Strategically located facilities to ensure fast and cost-effective delivery to your global customer base.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 mb-12 shadow-sm border border-gray-100">
              <img 
                src="/__mockup/images/world-map-pins.png" 
                alt="Global Warehouse Map" 
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "US Warehouse", city: "Los Angeles, CA", size: "50,000 sq ft", flag: "🇺🇸", features: ["2-4 Days Shipping", "Return Processing"] },
                { name: "EU Warehouse", city: "Germany", size: "30,000 sq ft", flag: "🇪🇺", features: ["VAT Handling", "Cross-border EU"] },
                { name: "AU Warehouse", city: "Sydney", size: "15,000 sq ft", flag: "🇦🇺", features: ["Oceania Hub", "Fast Dispatch"] },
                { name: "UK Warehouse", city: "London", size: "20,000 sq ft", flag: "🇬🇧", features: ["Next Day Delivery", "Local Support"] },
                { name: "CN Warehouse", city: "Shenzhen", size: "200,000 sq ft", flag: "🇨🇳", features: ["HQ Hub", "Global Sourcing", "Quality Control"] },
                { name: "CA Warehouse", city: "Toronto", size: "10,000 sq ft", flag: "🇨🇦", features: ["North America Expansion", "Duty Optimized"] },
              ].map((wh, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-3xl">{wh.flag}</div>
                    <div className="bg-orange-50 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-md">
                      {wh.size}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{wh.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> {wh.city}
                  </div>
                  <ul className="space-y-2">
                    {wh.features.map((feat, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES OFFERED */}
          <section className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More Than Just Storage</h2>
              <p className="text-slate-300 text-lg">We offer a complete suite of value-added services to elevate your brand and streamline operations.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { icon: <Box />, title: "Inventory Storage", desc: "Secure, climate-controlled storage for your products with real-time tracking." },
                { icon: <CheckCircle2 />, title: "Quality Inspection", desc: "Rigorous 100% manual quality checks before items enter inventory." },
                { icon: <Package />, title: "Custom Packaging / White Label", desc: "Build your brand with custom boxes, polymailers, inserts, and stickers." },
                { icon: <Layers />, title: "Kitting & Bundling", desc: "Combine multiple SKUs into customized bundles ready for fulfillment." },
                { icon: <RefreshCw />, title: "Returns Processing", desc: "Local return addresses to handle, inspect, and restock returned items." },
                { icon: <Camera />, title: "Photography Service", desc: "Professional product photos and videos for your store listings." },
              ].map((svc, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center text-orange-400 mb-5 shadow-inner">
                    {React.cloneElement(svc.icon, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-500 text-lg">Four simple steps to automate your fulfillment.</p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full z-0"></div>
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "1", title: "Ship to Us", desc: "Send your inventory to one of our global warehouses.", icon: <Truck className="w-6 h-6" /> },
                  { step: "2", title: "Receive & Inspect", desc: "We receive, inspect quality, and stock your items.", icon: <CheckCircle2 className="w-6 h-6" /> },
                  { step: "3", title: "Sync Orders", desc: "Your store orders sync automatically to our system.", icon: <Zap className="w-6 h-6" /> },
                  { step: "4", title: "Pick, Pack & Ship", desc: "We fulfill and dispatch orders within 24 hours.", icon: <Package className="w-6 h-6" /> },
                ].map((step, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center relative group hover:border-orange-200 transition-all">
                    <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors relative shadow-sm">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRICING TABLE */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
              <p className="text-gray-500 text-lg">No hidden fees, no subscriptions. Only pay for what you use.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center flex flex-col">
                <h3 className="text-lg font-bold text-gray-700 mb-2">Storage Fee</h3>
                <div className="text-4xl font-black text-gray-900 mb-2">$0.015</div>
                <p className="text-sm text-gray-500 mb-6">per unit / day</p>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400">First 30 days free in CN warehouse</p>
                </div>
              </div>
              
              <div className="bg-orange-500 text-white rounded-2xl p-8 border border-orange-600 text-center flex flex-col shadow-xl shadow-orange-500/20 transform scale-105 z-10">
                <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mx-auto mb-4">Most Common</div>
                <h3 className="text-lg font-bold text-orange-100 mb-2">Pick & Pack</h3>
                <div className="text-5xl font-black text-white mb-2">$0.50</div>
                <p className="text-sm text-orange-200 mb-6">per order</p>
                <div className="mt-auto">
                  <p className="text-xs text-orange-200">+ $0.15 per additional item</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center flex flex-col">
                <h3 className="text-lg font-bold text-gray-700 mb-2">Inbound Fee</h3>
                <div className="text-4xl font-black text-gray-900 mb-2">Varies</div>
                <p className="text-sm text-gray-500 mb-6">based on volume</p>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400">Contact us for large shipments</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white h-14 px-10 text-lg font-bold rounded-lg shadow-lg">
                Get Custom Quote
              </Button>
            </div>
          </section>

        </div>
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
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">About CJ</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Partner Program</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">Product Sourcing</a></li>
                <li><a href="#" className="hover:text-orange-500">Global Warehouses</a></li>
                <li><a href="#" className="hover:text-orange-500">Print on Demand</a></li>
                <li><a href="#" className="hover:text-orange-500">Custom Packaging</a></li>
                <li><a href="#" className="hover:text-orange-500">Photography</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500">Shipping Calculator</a></li>
                <li><a href="#" className="hover:text-orange-500">CJ Academy</a></li>
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">API Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} CJ Dropshipping. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-600">Terms of Use</a>
              <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
