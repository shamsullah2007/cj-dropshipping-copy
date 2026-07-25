import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  Globe,
  Headset,
  Star,
  X,
  LogIn,
  UserPlus,
  Home,
  Package,
  Warehouse,
  Settings,
  BookOpen,
  GraduationCap,
  Mic,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Find Products", path: "/find-products", icon: Package },
  { name: "Source for Me", path: "/source-for-me", icon: Search },
  { name: "Warehouse", path: "/warehouse", icon: Warehouse },
  { name: "Services", path: "/services", icon: Settings },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Academy", path: "/academy", icon: GraduationCap },
  { name: "Podcast", path: "/podcast", icon: Mic },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top utility bar — desktop only */}
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
            <div className="h-4 w-px bg-gray-300 mx-1" />
            <div className="flex items-center gap-3">
              <Link href="/login" className="hover:text-orange-500 transition-colors">Log In</Link>
              <Link href="/login" className="bg-orange-50 text-orange-500 px-3 py-0.5 rounded text-xs font-medium hover:bg-orange-100 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
              <div className="bg-[#f97316] text-white font-bold text-xl sm:text-2xl w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md shadow-sm">
                CJ
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight hidden sm:block text-slate-800">
                dropshipping
              </span>
            </Link>

            {/* Search bar */}
            <div className="flex-1 flex">
              <div className="flex w-full border-2 border-orange-500 rounded-lg overflow-hidden focus-within:ring-2 ring-orange-200 transition-all">
                <div className="hidden lg:flex items-center bg-gray-50 px-3 border-r border-gray-200 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                  All Categories <ChevronDown className="w-4 h-4 ml-1" />
                </div>
                <Input
                  className="flex-1 border-0 shadow-none focus-visible:ring-0 rounded-none px-2 sm:px-4 h-9 sm:h-11 text-sm sm:text-base placeholder:text-gray-400"
                  placeholder="Search products, SKU..."
                />
                <Button className="rounded-none bg-orange-500 hover:bg-orange-600 h-9 sm:h-11 px-3 sm:px-6 md:px-8 text-sm sm:text-base flex-shrink-0">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                  <span className="hidden sm:inline">Search</span>
                </Button>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">

              {/* Cart */}
              <Link href="/checkout" className="flex flex-col items-center cursor-pointer hover:text-orange-500 group">
                <div className="relative text-gray-700 group-hover:text-orange-500">
                  <ShoppingCart className="w-6 h-6 transition-colors" />
                  <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
                </div>
                <span className="text-xs mt-1 font-medium hidden lg:block text-gray-700 group-hover:text-orange-500">Cart</span>
              </Link>

              {/* Mobile: Login + Register icon buttons */}
              <div className="flex items-center gap-1 md:hidden">
                <Link href="/login">
                  <button className="flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-orange-500 px-2 py-1.5 rounded-md hover:bg-orange-50 transition-colors">
                    <LogIn className="w-4 h-4" />
                    <span className="hidden xs:inline">Login</span>
                  </button>
                </Link>
                <Link href="/login">
                  <button className="flex items-center gap-1 text-xs font-medium text-white bg-orange-500 hover:bg-orange-600 px-2 py-1.5 rounded-md transition-colors">
                    <UserPlus className="w-4 h-4" />
                    <span className="hidden xs:inline">Register</span>
                  </button>
                </Link>
              </div>

              {/* Desktop Authorization button */}
              <Button className="hidden md:flex bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-sm h-10 lg:h-11 px-4 lg:px-6 rounded-lg font-semibold text-sm">
                Authorization
              </Button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop nav strip */}
          <div className="hidden md:flex items-center mt-4 gap-6 text-sm font-medium overflow-x-auto pb-1">
            <div className="flex items-center gap-1 text-orange-500 cursor-pointer pb-1 whitespace-nowrap border-b-2 border-transparent hover:border-orange-500 transition-colors">
              <Menu className="w-4 h-4" /> All Categories
            </div>
            {navLinks.map((tab) => {
              const isActive = location === tab.path || (location.startsWith(tab.path) && tab.path !== "/");
              return (
                <Link
                  key={tab.path}
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

          {/* Mobile nav strip (scrollable) */}
          <div className="md:hidden flex items-center mt-3 gap-4 text-sm font-medium overflow-x-auto pb-1 scrollbar-hide">
            <div className="flex items-center gap-1 text-orange-500 cursor-pointer whitespace-nowrap flex-shrink-0">
              <Menu className="w-4 h-4" /> All
            </div>
            {navLinks.map((tab) => {
              const isActive = location === tab.path || (location.startsWith(tab.path) && tab.path !== "/");
              return (
                <Link
                  key={tab.path}
                  href={tab.path}
                  className={`whitespace-nowrap flex-shrink-0 pb-0.5 transition-colors ${
                    isActive
                      ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                      : "text-gray-500 border-b-2 border-transparent hover:text-orange-500"
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-[#f97316] text-white font-bold text-base w-8 h-8 flex items-center justify-center rounded-md">CJ</div>
                <span className="font-bold text-slate-800">dropshipping</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-3">
              {navLinks.map((tab) => {
                const isActive = location === tab.path || (location.startsWith(tab.path) && tab.path !== "/");
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.path}
                    href={tab.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-orange-500 bg-orange-50 border-r-2 border-orange-500"
                        : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {tab.name}
                  </Link>
                );
              })}
            </nav>

            {/* Utility info */}
            <div className="px-5 py-3 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> English</span>
              <span>USD</span>
              <span className="flex items-center gap-1"><Headset className="w-3.5 h-3.5" /> Support</span>
            </div>

            {/* Auth buttons */}
            <div className="px-5 py-4 border-t border-gray-100 space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 h-11 font-semibold flex items-center gap-2">
                  <LogIn className="w-4 h-4" /> Log In
                </Button>
              </Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-11 font-semibold flex items-center gap-2">
                  <UserPlus className="w-4 h-4" /> Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
