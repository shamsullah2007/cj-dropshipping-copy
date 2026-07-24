import React from "react";
import {
  Box,
  Printer,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  Package,
  ArrowRight,
  Truck,
  Layers,
  Camera,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800">
      <Header />

      <main className="pb-16">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-[1400px] mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              All-in-One Dropshipping Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 mb-10 max-w-3xl mx-auto font-medium">
              Everything you need to run a successful dropshipping business, all in one place.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-white text-orange-600 hover:bg-gray-50 h-14 px-8 text-lg font-bold shadow-lg rounded-xl">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg font-bold backdrop-blur-sm rounded-xl bg-white/5 border-2">
                Talk to an Agent
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-4 -mt-8 relative z-20">
          
          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ServiceCard 
              icon={<Box className="w-8 h-8" />}
              title="Dropshipping"
              desc="Source & fulfill from 1M+ products. No MOQ, automatic fulfillment, real-time tracking."
              features={["1M+ Winning Products", "No Minimum Order Quantity", "Automatic Fulfillment", "Real-time Tracking Updates"]}
              image="service-warehouse.png"
            />
            <ServiceCard 
              icon={<Printer className="w-8 h-8" />}
              title="Print on Demand"
              desc="Custom products with your design. T-shirts, mugs, phone cases, hoodies. No inventory."
              features={["Hundreds of Blank Products", "High-Quality Printing", "White-Label Shipping", "Design Mockup Generator"]}
              image="service-printing.png"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <ServiceCard 
              icon={<Tag className="w-7 h-7" />}
              title="Private Label / White Label"
              desc="Brand your products. Custom logo, packaging, inserts."
              features={["Custom Logos", "Branded Packaging", "Custom Inserts", "Brand Building"]}
            />
            <ServiceCard 
              icon={<Layers className="w-7 h-7" />}
              title="Inventory Stocking"
              desc="Pre-stock hot items in CJ warehouses for faster shipping."
              features={["Global Warehouses", "Faster Dispatch", "Bulk Discounts", "No Storage Fee (up to 30 days)"]}
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-7 h-7" />}
              title="Quality Inspection"
              desc="Professional QC team checks every order before shipping. Photos provided."
              features={["Detailed Inspection", "Photo/Video Proof", "Defect Removal", "Peace of Mind"]}
              image="service-quality.png"
            />
            <ServiceCard 
              icon={<Package className="w-7 h-7" />}
              title="Custom Packaging"
              desc="Branded boxes, bags, tissue paper, thank-you cards."
              features={["Custom Boxes", "Branded Tissue Paper", "Thank You Cards", "Stickers & Labels"]}
              image="service-packaging.png"
            />
            <ServiceCard 
              icon={<Camera className="w-7 h-7" />}
              title="Product Photography"
              desc="Professional product photos shot in CJ studios. From $3/photo."
              features={["High-Res Photos", "Lifestyle Shots", "Product Videos", "Fast Turnaround"]}
            />
            <ServiceCard 
              icon={<Truck className="w-7 h-7" />}
              title="Order Fulfillment"
              desc="Automated order processing. Connects to Shopify, WooCommerce, etc."
              features={["Multi-Store Sync", "Auto Processing", "Tracking Sync", "Split/Merge Orders"]}
            />
            <ServiceCard 
              icon={<RotateCcw className="w-7 h-7" />}
              title="Returns Management"
              desc="Handle returns professionally. Local return addresses available."
              features={["Local Return Centers", "Easy Process", "Refund Support", "Customer Satisfaction"]}
            />
          </div>

          {/* Pricing Highlight */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 text-center mb-16 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Most services are <span className="text-orange-500">FREE</span> with your CJ account</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">No subscription fees, no hidden costs. You only pay for the product cost and shipping.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-10 text-lg font-bold rounded-xl shadow-lg shadow-orange-500/20">
              Create Your Free Account
            </Button>
          </div>

          {/* How to Get Started */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
              <p className="text-gray-500 text-lg">Four simple steps to start dropshipping with CJ</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gray-200 z-0"></div>
              
              {[
                { step: "1", title: "Authorize Store", desc: "Connect your Shopify, WooCommerce, or other stores." },
                { step: "2", title: "Source Products", desc: "Find winning products or post a sourcing request." },
                { step: "3", title: "List Products", desc: "Push products to your store with one click." },
                { step: "4", title: "Auto Fulfill", desc: "We automatically fulfill orders when you make a sale." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-orange-100 flex items-center justify-center mb-6 shadow-sm shadow-orange-100 relative group">
                    <div className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    <span className="text-4xl font-extrabold text-orange-500 group-hover:text-white transition-colors">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Platform Integrations */}
          <section className="bg-white rounded-2xl border border-gray-200 p-10 md:p-14 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Seamless Integration With Your Platform</h2>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {['Shopify', 'WooCommerce', 'Etsy', 'Amazon', 'eBay', 'TikTok Shop', 'Wix', 'BigCommerce'].map((platform, i) => (
                <div key={i} className="px-6 py-3 bg-gray-50 text-gray-800 font-bold rounded-lg border border-gray-100 hover:bg-white hover:border-orange-200 hover:text-orange-500 hover:shadow-md transition-all cursor-pointer">
                  {platform}
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  desc, 
  features,
  image 
}: { 
  icon: React.ReactNode, 
  title: string, 
  desc: string, 
  features: string[],
  image?: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200 transition-all group flex flex-col h-full">
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={`/images/${image}`} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <div className={`w-16 h-16 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors ${image ? '-mt-16 relative z-10 shadow-lg' : ''}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">{desc}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm font-medium">{f}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 group/link">
            Learn More 
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
