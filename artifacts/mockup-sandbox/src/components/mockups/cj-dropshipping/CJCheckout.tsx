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
  Trash2,
  Minus,
  Plus,
  ShieldCheck,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function CJCheckout() {
  const [shippingMethod, setShippingMethod] = useState("standard");

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800 flex flex-col">
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
              <div className="flex flex-col items-center cursor-pointer text-orange-500 group">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-orange-500 transition-colors" />
                  <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
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
            <div className="flex items-center gap-1 text-gray-600 hover:text-orange-500 cursor-pointer pb-1 whitespace-nowrap transition-colors">
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
      <main className="max-w-[1400px] mx-auto px-4 py-8 flex-1 w-full">
        
        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto text-sm font-medium relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
            
            <div className="flex flex-col items-center gap-2 bg-[#f5f6f8] px-2 text-orange-500">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">1</div>
              <span>Cart</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 bg-[#f5f6f8] px-2 text-gray-400">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-bold">2</div>
              <span>Shipping</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 bg-[#f5f6f8] px-2 text-gray-400">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-bold">3</div>
              <span>Payment</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 bg-[#f5f6f8] px-2 text-gray-400">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-bold">4</div>
              <span>Confirmation</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart (3 items)</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart & Shipping */}
          <div className="flex-1 space-y-6">
            
            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 p-4 border-b border-gray-100 bg-gray-50 text-sm font-medium text-gray-600 hidden md:grid">
                <div className="w-6"><Checkbox id="selectAll" defaultChecked className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" /></div>
                <div>Product</div>
                <div className="w-24 text-center">Price</div>
                <div className="w-32 text-center">Quantity</div>
                <div className="w-24 text-center">Subtotal</div>
                <div className="w-12 text-center">Action</div>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {/* Item 1 */}
                <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 p-4 items-center">
                  <div className="w-6 self-start md:self-center mt-2 md:mt-0"><Checkbox defaultChecked className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" /></div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                      <img src="/__mockup/images/prod-earbuds.png" alt="Wireless Earbuds" className="w-full h-full object-contain mix-blend-multiply p-1" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-orange-500 line-clamp-2">TWS True Wireless Bluetooth Earbuds Smart Touch Control Waterproof</a>
                      <div className="text-xs text-gray-500 mt-1">SKU: CJ-EB-001</div>
                      <div className="text-xs text-gray-500">Variant: White</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold md:w-24 md:text-center">$10.50</div>
                  <div className="md:w-32 flex justify-center">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Minus className="w-3 h-3" /></button>
                      <input type="text" value="2" readOnly className="w-10 h-8 text-center text-sm border-x border-gray-200 focus:outline-none" />
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-orange-500 md:w-24 md:text-center hidden md:block">$21.00</div>
                  <div className="md:w-12 flex justify-center text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Item 2 */}
                <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 p-4 items-center">
                  <div className="w-6 self-start md:self-center mt-2 md:mt-0"><Checkbox defaultChecked className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" /></div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                      <img src="/__mockup/images/prod-lamp.png" alt="LED Desk Lamp" className="w-full h-full object-contain mix-blend-multiply p-1" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-orange-500 line-clamp-2">Modern LED Desk Lamp with Wireless Charger Touch Control Table Lamp</a>
                      <div className="text-xs text-gray-500 mt-1">SKU: CJ-LM-042</div>
                      <div className="text-xs text-gray-500">Variant: Black</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold md:w-24 md:text-center">$8.20</div>
                  <div className="md:w-32 flex justify-center">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Minus className="w-3 h-3" /></button>
                      <input type="text" value="1" readOnly className="w-10 h-8 text-center text-sm border-x border-gray-200 focus:outline-none" />
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-orange-500 md:w-24 md:text-center hidden md:block">$8.20</div>
                  <div className="md:w-12 flex justify-center text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Item 3 */}
                <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 p-4 items-center">
                  <div className="w-6 self-start md:self-center mt-2 md:mt-0"><Checkbox defaultChecked className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" /></div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                      <img src="/__mockup/images/prod-cases.png" alt="Phone Case Set" className="w-full h-full object-contain mix-blend-multiply p-1" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-orange-500 line-clamp-2">Silicone Smartphone Case Set (10pcs) Drop Protection</a>
                      <div className="text-xs text-gray-500 mt-1">SKU: CJ-PC-10X</div>
                      <div className="text-xs text-gray-500">Variant: Mixed Colors / iPhone 14 Pro</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold md:w-24 md:text-center">$15.00</div>
                  <div className="md:w-32 flex justify-center">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Minus className="w-3 h-3" /></button>
                      <input type="text" value="3" readOnly className="w-10 h-8 text-center text-sm border-x border-gray-200 focus:outline-none" />
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-orange-500 md:w-24 md:text-center hidden md:block">$45.00</div>
                  <div className="md:w-12 flex justify-center text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Below Cart Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input placeholder="Coupon Code" className="w-full sm:w-48" />
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">Apply</Button>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <a href="#" className="text-sm text-gray-600 hover:text-orange-500 flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </a>
                <Button variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Update Cart
                </Button>
              </div>
            </div>

            {/* Shipping Calculator */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Estimate Shipping
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label>Destination Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>State / Province</Label>
                  <Select defaultValue="ca">
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>ZIP Code</Label>
                  <Input placeholder="e.g. 90210" defaultValue="90210" />
                </div>
              </div>
              
              <Button className="bg-slate-800 hover:bg-slate-900 text-white mb-6">
                Calculate Shipping
              </Button>

              {/* Shipping Results */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 text-sm font-semibold text-gray-700">
                  Available Shipping Methods
                </div>
                <div className="p-4">
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="gap-3">
                    <div className="flex items-center justify-between space-x-2 border border-gray-200 p-3 rounded hover:border-orange-300 transition-colors [&:has([data-state=checked])]:border-orange-500 [&:has([data-state=checked])]:bg-orange-50/30 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="standard" id="standard" className="text-orange-500 border-gray-300 data-[state=checked]:border-orange-500" />
                        <Label htmlFor="standard" className="cursor-pointer">
                          <div className="font-semibold text-gray-800">CJPacket Ordinary</div>
                          <div className="text-xs text-gray-500 mt-0.5">Estimated Delivery: 12-18 days</div>
                        </Label>
                      </div>
                      <div className="font-bold text-gray-900">$2.50</div>
                    </div>
                    
                    <div className="flex items-center justify-between space-x-2 border border-gray-200 p-3 rounded hover:border-orange-300 transition-colors [&:has([data-state=checked])]:border-orange-500 [&:has([data-state=checked])]:bg-orange-50/30 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="expedited" id="expedited" className="text-orange-500 border-gray-300 data-[state=checked]:border-orange-500" />
                        <Label htmlFor="expedited" className="cursor-pointer">
                          <div className="font-semibold text-gray-800">CJPacket Fast Line</div>
                          <div className="text-xs text-gray-500 mt-0.5">Estimated Delivery: 5-8 days</div>
                        </Label>
                      </div>
                      <div className="font-bold text-gray-900">$8.90</div>
                    </div>
                    
                    <div className="flex items-center justify-between space-x-2 border border-gray-200 p-3 rounded hover:border-orange-300 transition-colors [&:has([data-state=checked])]:border-orange-500 [&:has([data-state=checked])]:bg-orange-50/30 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="express" id="express" className="text-orange-500 border-gray-300 data-[state=checked]:border-orange-500" />
                        <Label htmlFor="express" className="cursor-pointer">
                          <div className="font-semibold text-gray-800">DHL/FedEx Express</div>
                          <div className="text-xs text-gray-500 mt-0.5">Estimated Delivery: 2-4 days</div>
                        </Label>
                      </div>
                      <div className="font-bold text-gray-900">$18.00</div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">Order Summary</h2>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal (3 items)</span>
                  <span className="font-medium text-gray-900">$74.20</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">${shippingMethod === 'standard' ? '2.50' : shippingMethod === 'expedited' ? '8.90' : '18.00'}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="font-medium text-green-600">-$0.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="text-gray-400 italic">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100 mb-6 flex justify-between items-center">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-orange-500">${(74.20 + (shippingMethod === 'standard' ? 2.50 : shippingMethod === 'expedited' ? 8.90 : 18.00)).toFixed(2)}</span>
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-bold shadow-md shadow-orange-500/20 mb-4">
                Proceed to Checkout
              </Button>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-6">
                <div className="flex justify-center items-center gap-3 mb-2">
                  <CreditCard className="w-6 h-6 text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">Secure Payment Options</span>
                </div>
                <div className="flex justify-center gap-2 opacity-70 grayscale">
                  {/* Payment Icons Placeholders */}
                  <div className="h-6 w-10 bg-blue-800 rounded flex items-center justify-center text-white text-[8px] font-bold">VISA</div>
                  <div className="h-6 w-10 bg-red-600 rounded flex items-center justify-center text-white text-[8px] font-bold">MC</div>
                  <div className="h-6 w-10 bg-blue-500 rounded flex items-center justify-center text-white text-[8px] font-bold">PayPal</div>
                  <div className="h-6 w-10 bg-indigo-500 rounded flex items-center justify-center text-white text-[8px] font-bold">Stripe</div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>SSL Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Customers Also Bought</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: "cat-sports.png", name: "Fitness Resistance Bands Set Workout Tubes", price: "$6.50", sold: "2.1k" },
              { img: "cat-electronics.png", name: "Portable Power Bank 10000mAh Fast Charging", price: "$12.80", sold: "4.5k" },
              { img: "cat-home.png", name: "Automatic Toothpaste Dispenser Wall Mount", price: "$3.90", sold: "1.8k" },
              { img: "cat-beauty.png", name: "Jade Roller Gua Sha Scraping Massage Tool", price: "$2.20", sold: "3.2k" },
            ].map((prod, i) => (
              <div key={i} className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-orange-200 transition-all duration-300">
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <img src={`/__mockup/images/${prod.img}`} alt={prod.name} className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm text-gray-700 leading-snug line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
                    {prod.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="text-base font-bold text-orange-500 mb-1">{prod.price}</div>
                    <div className="text-[11px] text-gray-500 mb-3">
                      <span>{prod.sold} sold</span>
                    </div>
                    <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 h-8 text-xs">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-auto">
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
                <li><a href="#" className="hover:text-orange-500">Tracking Order</a></li>
                <li><a href="#" className="hover:text-orange-500">Return & Refund</a></li>
                <li><a href="#" className="hover:text-orange-500">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Subscribe to get the latest products and industry news.</p>
              <div className="flex">
                <Input placeholder="Email Address" className="rounded-r-none focus-visible:ring-0 border-r-0 h-10" />
                <Button className="rounded-l-none bg-slate-800 hover:bg-slate-900 h-10">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} CJ Dropshipping. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500">Terms of Service</a>
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
