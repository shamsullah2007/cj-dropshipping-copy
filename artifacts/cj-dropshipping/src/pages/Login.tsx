import { useState } from "react";
import {
  Eye,
  EyeOff,
  CheckCircle2,
  ChevronLeft,
  ShoppingBag,
  Globe,
  Truck,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export default function Login() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col font-sans">
      {/* Simplified Header */}
      <header className="bg-white shadow-sm flex-shrink-0 z-10 sticky top-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#f97316] text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md shadow-sm">
              CJ
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block text-slate-800">
              dropshipping
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left Side: Orange Gradient & Info */}
        <div className="hidden md:flex md:w-1/2 lg:w-5/12 bg-gradient-to-br from-orange-400 to-orange-600 text-white flex-col justify-between p-12 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-700/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-10">
              <div className="bg-white text-[#f97316] font-bold text-3xl w-14 h-14 flex items-center justify-center rounded-lg shadow-lg">
                CJ
              </div>
              <span className="font-bold text-2xl tracking-tight">
                dropshipping
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Your All-in-One <br />
              <span className="text-orange-200">Dropshipping</span> Platform
            </h1>

            <div className="space-y-5 mb-12">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-200 flex-shrink-0" />
                <span className="text-lg font-medium">1M+ Products Ready to Ship</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-200 flex-shrink-0" />
                <span className="text-lg font-medium">No MOQ, No Subscription Fee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-200 flex-shrink-0" />
                <span className="text-lg font-medium">Automated Order Fulfillment</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-[250px]">
            <img
              src="/images/cj-login-illustration.png"
              alt="Dropshipping Illustration"
              className="max-w-full h-auto object-contain drop-shadow-2xl max-h-[300px]"
            />
          </div>

          <div className="relative z-10 mt-auto pt-8 border-t border-white/20">
            <p className="text-orange-100 text-sm mb-4 font-medium">Integrated with top platforms:</p>
            <div className="flex gap-4 items-center">
              {/* Shopify Mock Logo */}
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded backdrop-blur-sm border border-white/10">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Shopify</span>
              </div>
              {/* WooCommerce Mock Logo */}
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded backdrop-blur-sm border border-white/10">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">WooCommerce</span>
              </div>
              {/* Etsy Mock Logo */}
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded backdrop-blur-sm border border-white/10">
                <Truck className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Etsy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Forms */}
        <div className="w-full md:w-1/2 lg:w-7/12 bg-white flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 relative">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="flex items-center gap-2 mb-8 justify-center md:hidden">
              <div className="bg-[#f97316] text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded shadow-sm">
                CJ
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-800">
                dropshipping
              </span>
            </div>

            {/* Tab Switcher */}
            <div className="flex border-b border-gray-200 mb-8 relative">
              <button
                className={`flex-1 py-3 text-center font-semibold text-lg transition-colors ${
                  activeTab === "login"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Log In
              </button>
              <button
                className={`flex-1 py-3 text-center font-semibold text-lg transition-colors ${
                  activeTab === "signup"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Forms */}
            <div className="min-h-[400px]">
              {activeTab === "login" ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email or Username</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-4"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-4 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-sm font-medium text-orange-500 hover:text-orange-600 hover:underline">
                        Forgot Password?
                      </a>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-bold shadow-md shadow-orange-500/20 mt-4">
                      Log In
                    </Button>

                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500 font-medium">or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-12 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="h-12 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
                        <Facebook className="w-5 h-5 mr-2 text-[#1877F2]" />
                        Facebook
                      </Button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-6">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("signup")}
                        className="font-bold text-orange-500 hover:text-orange-600 hover:underline"
                      >
                        Sign Up
                      </button>
                    </p>
                  </form>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-3"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-3"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700">Email Address</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-3"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">Password</Label>
                      <div className="relative">
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-3 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {/* Password Strength Indicator */}
                      <div className="flex gap-1 mt-2">
                        <div className="h-1 w-full bg-red-500 rounded-full"></div>
                        <div className="h-1 w-full bg-orange-400 rounded-full"></div>
                        <div className="h-1 w-full bg-green-500 rounded-full"></div>
                        <div className="h-1 w-full bg-gray-200 rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Medium: Add a symbol or number</p>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Repeat your password"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-3 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="store-type" className="text-sm font-medium text-gray-700">Primary Store Type</Label>
                      <select 
                        id="store-type"
                        className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                        defaultValue=""
                      >
                        <option value="" disabled>Select platform...</option>
                        <option value="shopify">Shopify</option>
                        <option value="woocommerce">WooCommerce</option>
                        <option value="etsy">Etsy</option>
                        <option value="tiktok">TikTok Shop</option>
                        <option value="ebay">eBay</option>
                        <option value="amazon">Amazon</option>
                        <option value="other">Other / No store yet</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="referral" className="text-sm font-medium text-gray-700">Referral Code <span className="text-gray-400 font-normal">(Optional)</span></Label>
                      <Input
                        id="referral"
                        placeholder="Enter code"
                        className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 px-3"
                      />
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="terms" className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 mt-1" />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 leading-snug cursor-pointer"
                      >
                        I agree to CJ Dropshipping's <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                      </label>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-bold shadow-md shadow-orange-500/20 mt-6">
                      Create Account
                    </Button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500 font-medium">or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-11 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="h-11 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
                        <Facebook className="w-4 h-4 mr-2 text-[#1877F2]" />
                        Facebook
                      </Button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-4">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("login")}
                        className="font-bold text-orange-500 hover:text-orange-600 hover:underline"
                      >
                        Log In
                      </button>
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 flex-shrink-0">
        <div className="max-w-[1400px] mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CJ Dropshipping. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
