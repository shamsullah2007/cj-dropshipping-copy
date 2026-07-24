import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  Headset,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Products", path: "/find-products" },
    { name: "Source for Me", path: "/source-for-me" },
    { name: "Warehouse", path: "/warehouse" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Academy", path: "/academy" },
    { name: "Podcast", path: "/podcast" },
  ];

  return (
    <>
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
              <Link href="/login" className="hover:text-orange-500 transition-colors">Log In</Link>
              <Link href="/login" className="bg-orange-50 text-orange-500 px-3 py-0.5 rounded text-xs font-medium hover:bg-orange-100 transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <div className="bg-[#f97316] text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md shadow-sm">
                CJ
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block text-slate-800">
                dropshipping
              </span>
            </Link>

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

            <div className="flex items-center gap-5 flex-shrink-0">
              <Link href="/checkout" className="flex flex-col items-center cursor-pointer hover:text-orange-500 group">
                <div className="relative text-gray-700 group-hover:text-orange-500">
                  <ShoppingCart className="w-6 h-6 transition-colors" />
                  <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
                </div>
                <span className="text-xs mt-1 font-medium hidden lg:block text-gray-700 group-hover:text-orange-500">Cart</span>
              </Link>
              <Button className="hidden lg:flex bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-sm h-11 px-6 rounded-lg font-semibold">
                Authorization
              </Button>
            </div>
          </div>

          <div className="flex items-center mt-5 gap-6 text-sm font-medium overflow-x-auto pb-1 scrollbar-hide">
            <div className="flex items-center gap-1 text-orange-500 cursor-pointer pb-1 whitespace-nowrap border-b-2 border-transparent hover:border-orange-500 transition-colors">
              <Menu className="w-4 h-4" /> All Categories
            </div>
            {navLinks.map((tab, i) => {
              const isActive = location === tab.path || (location.startsWith(tab.path) && tab.path !== "/");
              return (
                <Link 
                  key={i} 
                  href={tab.path} 
                  className={`pb-1 whitespace-nowrap transition-colors ${
                    isActive 
                      ? "text-orange-500 font-semibold border-b-2 border-orange-500" 
                      : "text-gray-600 border-b-2 border-transparent hover:text-orange-500"
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
