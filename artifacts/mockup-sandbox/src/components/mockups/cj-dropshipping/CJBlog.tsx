import React from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  Headset,
  Star,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Package,
  Calendar,
  Clock,
  ArrowRight,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function CJBlog() {
  const articles = [
    {
      title: "How to Start Dropshipping with $0 in 2025",
      excerpt: "Discover the step-by-step blueprint to launching a profitable dropshipping business without any upfront capital. Perfect for beginners.",
      category: "Dropshipping Tips",
      author: "Alex Morgan",
      date: "May 12, 2025",
      readTime: "8 min read",
      image: "blog-1.png",
      initials: "AM"
    },
    {
      title: "Best Dropshipping Products for Q2 2025",
      excerpt: "We analyzed data across millions of orders to find the top 20 trending products you should add to your store right now.",
      category: "Product Research",
      author: "Sarah Chen",
      date: "May 10, 2025",
      readTime: "6 min read",
      image: "blog-2.png",
      initials: "SC"
    },
    {
      title: "CJ vs AliExpress: Which is Better for Dropshipping?",
      excerpt: "A comprehensive comparison of shipping times, product quality, support, and integration features between the two giants.",
      category: "Case Studies",
      author: "David Wilson",
      date: "May 8, 2025",
      readTime: "12 min read",
      image: "blog-3.png",
      initials: "DW"
    },
    {
      title: "How to Handle Customer Returns in Dropshipping",
      excerpt: "Don't let returns ruin your margins. Learn how to create a return policy that protects you and keeps customers happy.",
      category: "Store Setup",
      author: "Jessica Taylor",
      date: "May 5, 2025",
      readTime: "7 min read",
      image: "blog-4.png",
      initials: "JT"
    },
    {
      title: "Shopify vs WooCommerce for Dropshippers",
      excerpt: "Which platform is right for your business? We break down the costs, features, and scalability of both ecommerce solutions.",
      category: "Store Setup",
      author: "Michael Lee",
      date: "May 2, 2025",
      readTime: "10 min read",
      image: "blog-5.png",
      initials: "ML"
    },
    {
      title: "Print on Demand vs Dropshipping: Full Comparison",
      excerpt: "Two popular business models compared. Find out which one offers better margins, easier operations, and faster growth.",
      category: "Dropshipping Tips",
      author: "Emma Roberts",
      date: "Apr 28, 2025",
      readTime: "9 min read",
      image: "blog-6.png",
      initials: "ER"
    },
    {
      title: "How to Write Product Descriptions That Sell",
      excerpt: "Stop using supplier descriptions. Learn our proven copywriting framework that increases conversion rates by up to 30%.",
      category: "Marketing",
      author: "Ryan Patel",
      date: "Apr 25, 2025",
      readTime: "5 min read",
      image: "blog-7.png",
      initials: "RP"
    },
    {
      title: "Top 10 Dropshipping Niches with Low Competition",
      excerpt: "Skip the saturated markets. These untapped niches have high demand, passionate buyers, and plenty of room for new stores.",
      category: "Product Research",
      author: "Sarah Chen",
      date: "Apr 20, 2025",
      readTime: "8 min read",
      image: "blog-8.png",
      initials: "SC"
    },
    {
      title: "How CJ Automated My Entire Fulfillment Process",
      excerpt: "A seller case study on scaling from 10 to 500 orders per day without hiring a team, using CJ's automated fulfillment network.",
      category: "Case Studies",
      author: "James Miller",
      date: "Apr 15, 2025",
      readTime: "11 min read",
      image: "blog-9.png",
      initials: "JM"
    }
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
            <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer transition-colors whitespace-nowrap text-gray-600">
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
              <a key={i} href="#" className={`pb-1 whitespace-nowrap hover:text-orange-500 transition-colors ${tab === 'Blog' ? "text-orange-500 font-semibold border-b-2 border-orange-500" : "text-gray-600"}`}>
                {tab}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CJ Dropshipping Blog</h1>
          <p className="text-gray-500">Your ultimate resource for ecommerce, product sourcing, and business growth.</p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row group">
          <div className="md:w-3/5 relative aspect-video md:aspect-auto overflow-hidden">
            <img src="/__mockup/images/blog-hero.png" alt="Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
          </div>
          <div className="md:w-2/5 p-6 md:p-10 flex flex-col justify-center bg-white relative">
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 border-none rounded uppercase tracking-wider text-xs font-bold px-3 py-1 mb-4 self-start">
              Featured
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight">
              Top 20 Trending Products to Dropship in 2025
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3 md:line-clamp-4 leading-relaxed">
              Stop guessing what to sell. We've analyzed the purchasing data of over 500,000 successful dropshippers to bring you the definitive list of winning products that are set to dominate the market this year.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Avatar className="w-10 h-10 border-2 border-orange-100">
                <AvatarImage src="" />
                <AvatarFallback className="bg-orange-100 text-orange-600 font-bold">CJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-gray-900">CJ Research Team</p>
                <div className="flex items-center text-xs text-gray-500 gap-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> May 15, 2025</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 10 min read</span>
                </div>
              </div>
            </div>
            <Button className="w-fit bg-orange-500 hover:bg-orange-600 text-white gap-2 px-6">
              Read Full Article <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide border-b border-gray-200">
          {["All", "Dropshipping Tips", "Product Research", "Store Setup", "Marketing", "Case Studies", "News & Updates"].map((cat, i) => (
            <Button 
              key={i} 
              variant={i === 0 ? "default" : "outline"} 
              className={`rounded-full whitespace-nowrap ${i === 0 ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Article Grid */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {articles.map((article, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all group flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img src={`/__mockup/images/${article.image}`} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded uppercase tracking-wider text-[10px] font-bold px-2.5 py-0.5 shadow-sm">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-slate-100 text-slate-600 text-xs font-medium">{article.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{article.author}</p>
                          <p className="text-[10px] text-gray-500">{article.date} • {article.readTime}</p>
                        </div>
                      </div>
                      <a href="#" className="text-orange-500 p-2 rounded-full hover:bg-orange-50 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mb-10 lg:mb-0">
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-orange-500 w-10 h-10 p-0" disabled>
                <ChevronDown className="w-4 h-4 rotate-90" />
              </Button>
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 p-0">1</Button>
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-500 w-10 h-10 p-0">2</Button>
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-500 w-10 h-10 p-0">3</Button>
              <span className="text-gray-400 px-2">...</span>
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-500 w-10 h-10 p-0">12</Button>
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-orange-500 w-10 h-10 p-0">
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Search Blog</h3>
              <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden focus-within:border-orange-500 focus-within:ring-1 ring-orange-200 transition-all">
                <Input
                  className="flex-1 border-0 shadow-none focus-visible:ring-0 rounded-none px-3 text-sm placeholder:text-gray-400"
                  placeholder="Search articles..."
                />
                <Button className="rounded-none bg-slate-800 hover:bg-slate-700 px-4">
                  <Search className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <Mail className="w-8 h-8 mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Join 250,000+ Subscribers</h3>
              <p className="text-orange-100 text-sm mb-6">Get the latest dropshipping trends, product recommendations, and expert tips delivered weekly.</p>
              <div className="space-y-3 relative z-10">
                <Input className="bg-white/10 border-white/20 text-white placeholder:text-orange-200" placeholder="Email address" />
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-50 font-bold">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-[10px] text-orange-200 text-center mt-3 opacity-80">We respect your privacy. No spam.</p>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Popular Articles</h3>
              <div className="space-y-4">
                {[
                  { title: "How to Build a High-Converting Product Page", img: "blog-7.png", date: "Mar 12, 2025" },
                  { title: "7 Payment Gateways for High-Risk Dropshippers", img: "blog-2.png", date: "Mar 05, 2025" },
                  { title: "TikTok Ads Strategy for Dropshipping in 2025", img: "blog-8.png", date: "Feb 28, 2025" },
                  { title: "Why Your Facebook Ads Are Failing (And How to Fix)", img: "blog-1.png", date: "Feb 15, 2025" },
                  { title: "Automating Order Fulfillment: A Beginner's Guide", img: "blog-9.png", date: "Feb 10, 2025" },
                ].map((post, i) => (
                  <a key={i} href="#" className="flex gap-4 group">
                    <div className="w-20 h-20 rounded bg-gray-100 flex-shrink-0 overflow-hidden relative">
                      <img src={`/__mockup/images/${post.img}`} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-0 left-0 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-br">{i+1}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-orange-500 transition-colors mb-1 line-clamp-2">{post.title}</h4>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Categories List */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Categories</h3>
              <ul className="space-y-2">
                {[
                  { name: "Dropshipping Tips", count: 142 },
                  { name: "Product Research", count: 89 },
                  { name: "Store Setup", count: 64 },
                  { name: "Marketing Strategy", count: 115 },
                  { name: "Case Studies", count: 47 },
                  { name: "Platform Updates", count: 32 },
                ].map((cat, i) => (
                  <li key={i}>
                    <a href="#" className="flex justify-between items-center group text-sm py-1.5 text-gray-600 hover:text-orange-500">
                      <span className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-orange-500 transition-colors" /> {cat.name}
                      </span>
                      <span className="bg-gray-100 group-hover:bg-orange-50 group-hover:text-orange-600 px-2 py-0.5 rounded-full text-xs transition-colors">{cat.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "AliExpress", "TikTok Ads", "Facebook Ads", "Winning Products", "Print on Demand", "SEO", "Branding", "Fulfillment", "Beginner Guide", "Q4 Strategy"].map((tag, i) => (
                  <a key={i} href="#" className="bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 hover:border-orange-200 text-xs px-3 py-1.5 rounded transition-colors">
                    {tag}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-slate-300 pt-16 pb-8 border-t-4 border-orange-500 mt-12">
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
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                CJ Dropshipping is a global dropshipping platform that helps ecommerce sellers source products, manage inventory, and fulfill orders automatically worldwide.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                {['fb', 'tw', 'yt', 'ig', 'in'].map((social, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">
                    <span className="text-xs uppercase">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">About Us</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About CJ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Partner Program</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Customer Service</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Calculator</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Tutorials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Sourcing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Print on Demand</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Custom Packaging</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Global Warehouses</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">API API & Integrations</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>© {new Date().getFullYear()} CJ Dropshipping. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" className="h-5 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Mastercard" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
