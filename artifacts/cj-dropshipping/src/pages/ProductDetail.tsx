import { useState } from "react";
import {
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
  Zap,
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ProductDetail() {
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
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link href="/find-products" className="hover:text-orange-500">Electronics</Link>
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
                src={`/images/${activeImage}`} 
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
                  <img src={`/images/${img}`} alt={`Thumbnail ${i+1}`} className="w-full h-full object-contain p-1" />
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
                    <img src="/images/cj-earbuds-feature1.png" alt="Feature" className="w-full max-w-3xl mx-auto rounded-lg shadow-sm" />
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
                      <div className="flex justify-center text-orange-400 mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current text-gray-300" />
                      </div>
                      <div className="text-sm text-gray-500">Based on 1,234 reviews</div>
                    </div>
                    
                    {/* Rating Bars */}
                    <div className="flex-1 w-full space-y-3">
                      {[
                        { stars: 5, pct: 75 },
                        { stars: 4, pct: 15 },
                        { stars: 3, pct: 7 },
                        { stars: 2, pct: 2 },
                        { stars: 1, pct: 1 },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3">
                          <div className="text-sm text-gray-600 w-12 flex items-center gap-1">
                            {row.stars} <Star className="w-3 h-3 text-gray-400" />
                          </div>
                          <Progress value={row.pct} className="h-2 bg-gray-100 [&>div]:bg-orange-400" />
                          <div className="text-sm text-gray-500 w-8 text-right">{row.pct}%</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Review List */}
                  <div className="space-y-6">
                    {[
                      { name: "John D.", avatar: "cj-avatar-1.png", rating: 5, date: "Oct 12, 2023", text: "Great product, excellent quality. My customers love it. Shipping to the US took about 8 days." },
                      { name: "Sarah M.", avatar: "cj-avatar-2.png", rating: 5, date: "Oct 05, 2023", text: "Sourced this for my Shopify store and it's a best seller. CJ's packaging is solid and I haven't had any returns yet." },
                      { name: "Michael R.", avatar: "cj-avatar-3.png", rating: 4, date: "Sep 28, 2023", text: "Good sound quality for the price. The LED display is a nice touch. One star off because the manual could be clearer." },
                    ].map((review, i) => (
                      <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="w-10 h-10 border border-gray-100">
                            <AvatarImage src={`/images/${review.avatar}`} />
                            <AvatarFallback className="bg-gray-100 text-gray-600">{review.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-bold text-gray-900">{review.name}</div>
                            <div className="flex items-center gap-2">
                              <div className="flex text-orange-400">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                              </div>
                              <span className="text-xs text-gray-400">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{review.text}</p>
                        <div className="flex gap-4 mt-3">
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-500">
                            <ThumbsUp className="w-3.5 h-3.5" /> Helpful (12)
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="mt-0 outline-none">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Shipping & Delivery</h3>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      <strong>Processing Time:</strong> Orders are typically processed and dispatched within 1-3 business days after payment confirmation.
                    </p>
                    <p>
                      <strong>Shipping Methods:</strong> We offer various shipping options including CJPacket, ePacket, USPS, DHL, and more depending on the destination country.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-800">
                      <h4 className="font-bold flex items-center gap-2 mb-2"><Truck className="w-4 h-4" /> Estimated Delivery Times (CJPacket)</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>USA: 7-15 business days</li>
                        <li>UK: 6-10 business days</li>
                        <li>Europe: 7-12 business days</li>
                        <li>Australia: 7-14 business days</li>
                        <li>Rest of World: 10-20 business days</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">Return & Refund Policy</h3>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      CJ Dropshipping offers a 30-day return policy for products with quality issues, damage during transit, or incorrect items sent.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Please provide photo or video evidence of the issue when submitting a dispute.</li>
                      <li>For items returned due to buyer's remorse, the buyer is responsible for return shipping costs.</li>
                      <li>Refunds are processed within 3-5 business days after the returned item is received at our facility.</li>
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Column: Supplier & Recommended */}
          <div className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
            {/* Supplier Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-400 border border-gray-200">
                  FA
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">Shenzhen FastAudio Tech Co., Ltd</h3>
                  <div className="text-xs text-gray-500 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-0.5" /> Guangdong, China
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm border-y border-gray-100 py-4">
                <div className="text-center">
                  <div className="text-gray-500 text-xs mb-1">Item Match</div>
                  <div className="font-bold text-green-600">4.8 <span className="text-gray-400 font-normal">/ 5</span></div>
                </div>
                <div className="text-center border-l border-gray-100">
                  <div className="text-gray-500 text-xs mb-1">Response Time</div>
                  <div className="font-bold text-green-600">&lt; 24h</div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <MessageSquare className="w-4 h-4 mr-2" /> Contact Supplier
              </Button>
            </div>

            {/* Frequently Bought Together */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Frequently Bought Together</h3>
              <div className="space-y-4">
                {[
                  { title: "Silicone Protective Case for Earbuds", price: "$1.50", img: "prod-cases.png" },
                  { title: "Fast Charging Cable Type-C", price: "$2.20", img: "prod-2.png" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center group cursor-pointer">
                    <div className="w-16 h-16 bg-gray-50 rounded border border-gray-100 overflow-hidden flex-shrink-0">
                      <img src={`/images/${item.img}`} alt={item.title} className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors leading-snug mb-1">{item.title}</h4>
                      <div className="text-orange-500 font-bold">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
