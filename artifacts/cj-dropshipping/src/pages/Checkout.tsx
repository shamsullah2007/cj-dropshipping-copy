import { useState } from "react";
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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function Checkout() {
  const [shippingMethod, setShippingMethod] = useState("standard");

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800 flex flex-col">
      <Header />

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
                      <img src="/images/prod-earbuds.png" alt="Wireless Earbuds" className="w-full h-full object-contain mix-blend-multiply p-1" />
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
                      <img src="/images/prod-lamp.png" alt="LED Desk Lamp" className="w-full h-full object-contain mix-blend-multiply p-1" />
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
                      <img src="/images/prod-cases.png" alt="Phone Case Set" className="w-full h-full object-contain mix-blend-multiply p-1" />
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
                <Link href="/" className="text-sm text-gray-600 hover:text-orange-500 flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </Link>
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
                  <div className="h-6 w-10 bg-blue-500 rounded flex items-center justify-center text-white text-[8px] font-bold">AMEX</div>
                  <div className="h-6 w-10 bg-yellow-400 rounded flex items-center justify-center text-blue-900 text-[8px] font-bold">PP</div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <p>Safe and secure checkout. Your personal information is protected by industry-standard encryption.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
