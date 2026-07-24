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
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CJProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [activeImage, setActiveImage] = useState("cj-earbuds-main.png");

  const images = [
    "cj-earbuds-main.png",
    "cj-earbuds-thumb1.png",
    "cj-earbuds-thumb2.png",
    "cj-earbuds-main.png",
    "cj-earbuds-thumb1.png",
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
              <a key={i} href="#" className={`pb-1 whitespace-nowrap hover:text-orange-500 transition-colors text-gray-600`}>
                {tab}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-orange-500">Home</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#" className="hover:text-orange-500">Electronics</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-900">Wireless Earbuds</span>
        </div>

        {/* Top Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row gap-10">
          
          {/* Left: Image Gallery */}
          <div className="lg:w-[500px] flex-shrink-0 flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square border border-gray-200 rounded-lg overflow-hidden group cursor-zoom-in">
              <img 
                src={`/__mockup/images/${activeImage}`} 
                alt="Product" 
                className="w-full h-full object-contain p-4 group-hover:scale-150 transition-transform duration-300 transform-origin-center" 
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-500 hover:text-orange-500 cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-500 hover:text-orange-500 cursor-pointer">
                  <Share2 className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className={`w-20 h-20 border-2 rounded cursor-pointer overflow-hidden flex-shrink-0 ${activeImage === img ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={`/__mockup/images/${img}`} alt={`Thumbnail ${i+1}`} className="w-full h-full object-contain p-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-2">
              TWS Bluetooth 5.3 Wireless Earbuds with LED Display Charging Case, Noise Cancelling, 30H Battery, IPX5 Waterproof
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>SKU: <span className="font-mono text-gray-900">CJHZ213456</span></span>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center text-orange-500 font-medium">
                4.7 <Star className="w-4 h-4 ml-0.5 fill-current" />
                <span className="text-gray-500 font-normal ml-1">(1,234 reviews)</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span>5,678 sold</span>
            </div>

            {/* Price Box */}
            <div className="bg-orange-50/50 rounded-lg p-5 border border-orange-100 mb-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="text-gray-500 text-sm mb-1">
                    Market Price: <span className="line-through">$29.99</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-700 font-medium">CJ Price:</span>
                    <span className="text-3xl font-bold text-orange-600">$8.50 – $12.50</span>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded border border-orange-100 shadow-sm text-center">
                  <div className="text-xs text-gray-500 mb-0.5">Selling Price Range</div>
                  <div className="text-green-600 font-bold">$18 – $35</div>
                  <div className="text-xs text-green-700 font-medium mt-0.5 bg-green-50 px-1.5 py-0.5 rounded">
                    Potential Profit: $9.50 – $22.50
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-5 mb-8">
              {/* Color */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color: <span className="text-gray-600 font-normal">{selectedColor}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {['Black', 'White', 'Blue', 'Pink'].map((color) => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-1.5 rounded text-sm border ${selectedColor === color ? 'border-orange-500 text-orange-600 bg-orange-50' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity:</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded h-10 w-32">
                    <button 
                      className="px-3 text-gray-500 hover:text-orange-500 hover:bg-gray-50 h-full flex items-center"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input 
                      type="text" 
                      value={quantity} 
                      readOnly 
                      className="w-full h-full text-center border-x border-gray-300 text-sm font-medium focus:outline-none"
                    />
                    <button 
                      className="px-3 text-gray-500 hover:text-orange-500 hover:bg-gray-50 h-full flex items-center"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">9999+ pieces available</span>
                </div>
              </div>
            </div>

            {/* Shipping Info Card */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-8 space-y-4">
              <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Ship from:</span>
                <Select defaultValue="cn">
                  <SelectTrigger className="w-[180px] h-8 bg-white text-sm">
                    <SelectValue placeholder="Warehouse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cn">China Warehouse</SelectItem>
                    <SelectItem value="us">US Warehouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Shipping to:</span>
                <Select defaultValue="us">
                  <SelectTrigger className="w-[180px] h-8 bg-white text-sm">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Method:</span>
                <Select defaultValue="cjpacket">
                  <SelectTrigger className="w-full h-8 bg-white text-sm">
                    <SelectValue placeholder="Shipping Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cjpacket">CJPacket Ordinary ($3.50 / 7-15 days)</SelectItem>
                    <SelectItem value="epacket">ePacket ($4.20 / 10-20 days)</SelectItem>
                    <SelectItem value="dhl">DHL Express ($15.00 / 3-7 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 pt-2 border-t border-gray-200">
                <Truck className="w-4 h-4 text-orange-500" />
                Processing time: <span className="font-medium text-gray-900">Ships within 1-2 business days</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              <Button className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base w-full shadow-lg shadow-orange-500/20">
                Import to Store
              </Button>
              <Button variant="outline" className="h-12 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold text-base w-full">
                Add to Cart
              </Button>
              <Button variant="secondary" className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-base w-full">
                Source Similar
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Free QC
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Secure Payment
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <Zap className="w-4 h-4 text-green-500" /> Fast Ship
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <RotateCcw className="w-4 h-4 text-green-500" /> 30-Day Return
              </div>
            </div>

          </div>
        </div>

        {/* Tabs & Related Products Row */}
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          
          {/* Main Tabs Area */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start rounded-none border-b border-gray-200 h-auto p-0 bg-gray-50/50">
                <TabsTrigger 
                  value="description" 
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none data-[state=active]:border-b-transparent border-t-2 border-transparent px-6 py-4 text-sm font-medium"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="specs" 
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none data-[state=active]:border-b-transparent border-t-2 border-transparent px-6 py-4 text-sm font-medium"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none data-[state=active]:border-b-transparent border-t-2 border-transparent px-6 py-4 text-sm font-medium"
                >
                  Reviews (1,234)
                </TabsTrigger>
                <TabsTrigger 
                  value="shipping" 
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none data-[state=active]:border-b-transparent border-t-2 border-transparent px-6 py-4 text-sm font-medium"
                >
                  Shipping & Return
                </TabsTrigger>
              </TabsList>
              
              <div className="p-8">
                <TabsContent value="description" className="mt-0 outline-none space-y-8 text-gray-600 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Product Highlights</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Advanced Bluetooth 5.3:</strong> Provides a stable connection and fast transmission.</li>
                      <li><strong>Smart LED Display:</strong> Real-time battery indicator on the charging case.</li>
                      <li><strong>High-Fidelity Audio:</strong> Deep bass and clear treble for immersive listening.</li>
                      <li><strong>Active Noise Cancelling (ANC):</strong> Blocks out ambient noise for pure sound.</li>
                      <li><strong>IPX5 Waterproof:</strong> Resistant to sweat and rain, perfect for workouts.</li>
                      <li><strong>Long Battery Life:</strong> Up to 6 hours on a single charge, 30 hours with the case.</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <img src="/__mockup/images/cj-earbuds-feature1.png" alt="Feature" className="w-full max-w-3xl mx-auto rounded-lg shadow-sm" />
                    <p className="text-center text-sm">Perfect for your active lifestyle with a secure fit and waterproof design.</p>
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0 outline-none">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700 w-1/3">Brand Name</th>
                          <td className="py-3 px-4 text-gray-600">Generic / OEM</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Model Number</th>
                          <td className="py-3 px-4 text-gray-600">TWS-X9</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Bluetooth Version</th>
                          <td className="py-3 px-4 text-gray-600">V5.3</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Transmission Distance</th>
                          <td className="py-3 px-4 text-gray-600">10-15m (without obstacles)</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Battery Capacity (Earbuds)</th>
                          <td className="py-3 px-4 text-gray-600">40mAh</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Battery Capacity (Case)</th>
                          <td className="py-3 px-4 text-gray-600">300mAh</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Charging Time</th>
                          <td className="py-3 px-4 text-gray-600">1.5 hours</td>
                        </tr>
                        <tr>
                          <th className="bg-gray-50 py-3 px-4 font-medium text-gray-700">Waterproof Standard</th>
                          <td className="py-3 px-4 text-gray-600">IPX-5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0 outline-none space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Rating Overview */}
                    <div className="bg-gray-50 p-6 rounded-lg text-center min-w-[200px]">
                      <div className="text-4xl font-bold text-gray-900 mb-2">4.7</div>
                      <div className="flex justify-center text-orange-500 mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current text-gray-300" />
                      </div>
                      <div className="text-sm text-gray-500">Based on 1,234 reviews</div>
                    </div>
                    
                    {/* Rating Bars */}
                    <div className="flex-1 w-full space-y-2">
                      {[
                        { stars: 5, pct: 75 },
                        { stars: 4, pct: 15 },
                        { stars: 3, pct: 7 },
                        { stars: 2, pct: 2 },
                        { stars: 1, pct: 1 },
                      ].map((item) => (
                        <div key={item.stars} className="flex items-center gap-3 text-sm">
                          <span className="w-12 text-gray-600">{item.stars} Stars</span>
                          <Progress value={item.pct} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                          <span className="w-8 text-right text-gray-500">{item.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-bold text-gray-900">Recent Reviews</h3>
                    
                    {[
                      { name: "Sarah M.", avatar: "cj-avatar-1.png", rating: 5, date: "Oct 12, 2023", text: "These are fantastic! I've been dropshipping them for a month and my customers love them. The LED display is a great selling point.", img: "cj-earbuds-thumb1.png" },
                      { name: "David L.", avatar: "cj-avatar-2.png", rating: 5, date: "Sep 28, 2023", text: "Good quality for the price. Sound is clear and bass is decent. Arrived in US within 8 days via CJPacket.", img: "cj-earbuds-thumb2.png" },
                      { name: "Alex K.", avatar: "cj-avatar-3.png", rating: 4, date: "Sep 15, 2023", text: "Nice product, solid build. The noise cancelling is okay, not amazing but expected for this price tier. Packaging is good." },
                    ].map((review, i) => (
                      <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`/__mockup/images/${review.avatar}`} />
                              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">{review.name}</div>
                              <div className="text-xs text-gray-500">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex text-orange-500">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className={`w-3.5 h-3.5 ${j < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{review.text}</p>
                        {review.img && (
                          <div className="w-16 h-16 border border-gray-200 rounded cursor-pointer overflow-hidden">
                            <img src={`/__mockup/images/${review.img}`} alt="Review" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <button className="flex items-center gap-1 hover:text-orange-500"><ThumbsUp className="w-3.5 h-3.5" /> Helpful (12)</button>
                          <button className="flex items-center gap-1 hover:text-orange-500"><MessageSquare className="w-3.5 h-3.5" /> Reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="mt-0 outline-none">
                  <div className="text-gray-600 text-sm space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Shipping Information</h3>
                      <p>CJ Dropshipping offers a variety of shipping methods globally. Shipping times and costs vary depending on the destination and chosen warehouse.</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Processing Time:</strong> Typically 1-3 business days after order confirmation.</li>
                        <li><strong>US Warehouse:</strong> Delivery in 2-5 business days via USPS.</li>
                        <li><strong>China Warehouse:</strong> 7-15 days via CJPacket Ordinary, 10-20 days via ePacket.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Return & Refund Policy</h3>
                      <p>We accept returns or refund requests under the following conditions within 30 days of receipt:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Product is damaged or defective upon arrival.</li>
                        <li>Incorrect item or variation was sent.</li>
                        <li>Package was lost in transit (verified by tracking).</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Sidebar: Related Products */}
          <div className="lg:w-[280px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex-shrink-0 self-start">
            <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">You May Also Like</h3>
            <div className="space-y-4">
              {[
                { img: "prod-1.png", name: "Mini Portable Wireless Speaker", price: "$12.50" },
                { img: "prod-2.png", name: "Smart Fitness Watch", price: "$18.90" },
                { img: "prod-3.png", name: "Wireless Charging Pad", price: "$9.20" },
                { img: "cat-electronics.png", name: "Noise Cancelling Headphones", price: "$25.00" },
                { img: "prod-1.png", name: "Bone Conduction Earbuds", price: "$15.40" },
              ].map((prod, i) => (
                <div key={i} className="flex gap-3 group cursor-pointer">
                  <div className="w-20 h-20 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                    <img src={`/__mockup/images/${prod.img}`} className="w-full h-full object-contain p-2 mix-blend-multiply group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xs text-gray-700 line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors mb-1">{prod.name}</h4>
                    <span className="font-bold text-orange-500 text-sm">{prod.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
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
                <li><a href="#" className="hover:text-orange-500">Order Tracking</a></li>
                <li><a href="#" className="hover:text-orange-500">Return Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Dispute Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Subscribe to get the latest winning products and dropshipping news.</p>
              <div className="flex gap-2">
                <Input placeholder="Email address" className="h-10 text-sm border-gray-300" />
                <Button className="h-10 bg-orange-500 hover:bg-orange-600">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} CJ Dropshipping. All Rights Reserved.</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-500">Terms of Service</a>
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
