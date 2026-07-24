import {
  Upload,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Award,
  ThumbsUp,
  DollarSign,
  ShoppingCart,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SourceForMe() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800">
      <Header />

      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400">
          <div className="absolute inset-0 bg-[url('/images/sourcing-hero.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-transparent"></div>
          <div className="max-w-[1400px] mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Can't Find What You're Looking For?
              </h1>
              <p className="text-lg md:text-xl text-orange-50 mb-8 font-medium">
                Submit a sourcing request and our team will find the best supplier for you — for free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-orange-600 hover:bg-gray-50 h-12 px-8 rounded-lg text-base font-bold shadow-lg">
                  Submit Request
                </Button>
                <Button className="bg-transparent text-white border-2 border-white/80 hover:bg-white/10 h-12 px-8 rounded-lg text-base font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 relative">
              <img src="/images/sourcing-hero.png" alt="Sourcing Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
              <div className="text-center px-4">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">50,000+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Requests Processed</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">24hr</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Average Response</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">95%</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Success Rate</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">180+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <section className="max-w-[1400px] mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How "Source for Me" Works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Get your desired products at competitive prices in just three simple steps.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative">
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center relative z-10 max-w-xs">
              <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-sm relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm border-4 border-white">1</div>
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Request</h3>
              <p className="text-gray-500 text-sm">Provide product details, links, images, and your target price in our simple form.</p>
            </div>

            <div className="hidden md:block w-24 border-t-2 border-dashed border-orange-200"></div>
            <ArrowRight className="md:hidden text-orange-300 w-8 h-8" />

            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center relative z-10 max-w-xs">
              <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-sm relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm border-4 border-white">2</div>
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Source It</h3>
              <p className="text-gray-500 text-sm">Our expert team finds the best suppliers and negotiates prices within 1-3 business days.</p>
            </div>

            <div className="hidden md:block w-24 border-t-2 border-dashed border-orange-200"></div>
            <ArrowRight className="md:hidden text-orange-300 w-8 h-8" />

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center relative z-10 max-w-xs">
              <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-sm relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm border-4 border-white">3</div>
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Sell It</h3>
              <p className="text-gray-500 text-sm">Once sourced, list the product directly to your store with one click and start selling.</p>
            </div>
          </div>
        </section>

        {/* Two Column Layout: Form + Benefits */}
        <section className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Sourcing Form */}
            <div className="flex-1 w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-500 p-2 rounded-lg"><Upload className="w-5 h-5" /></span>
                  Submit a Sourcing Request
                </h2>
                <p className="text-gray-500 mt-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Free service
                  <span className="text-gray-300">•</span>
                  <Clock className="w-4 h-4 text-blue-500" /> Response within 24 hours
                </p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="product-name" className="text-sm font-semibold text-gray-700">Product Name <span className="text-red-500">*</span></Label>
                  <Input id="product-name" placeholder="E.g., Wireless Bluetooth Earbuds" className="h-11" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-url" className="text-sm font-semibold text-gray-700">Product URL (Optional)</Label>
                  <Input id="product-url" placeholder="Link from AliExpress, Taobao, Amazon, etc." className="h-11" />
                  <p className="text-xs text-gray-500">Providing a link speeds up the sourcing process.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Product Description <span className="text-red-500">*</span></Label>
                  <Textarea id="description" placeholder="Describe the product details, color, material, variations needed..." className="min-h-[100px] resize-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="target-price" className="text-sm font-semibold text-gray-700">Target Price (USD) <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input id="target-price" type="number" placeholder="0.00" className="pl-8 h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-sm font-semibold text-gray-700">Estimated Monthly Quantity</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1 - 50 pieces</SelectItem>
                        <SelectItem value="51-200">51 - 200 pieces</SelectItem>
                        <SelectItem value="201-500">201 - 500 pieces</SelectItem>
                        <SelectItem value="500+">500+ pieces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-semibold text-gray-700">Primary Destination Country <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="eu">Europe</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">Upload Reference Images</Label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">JPG, PNG, GIF up to 5MB (Max 5 files)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-semibold text-gray-700">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any specific requirements for packaging, branding, shipping methods..." className="min-h-[80px] resize-none" />
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-bold shadow-md shadow-orange-500/20">
                    Submit Request
                  </Button>
                  <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> Your data is securely processed
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column: Benefits & Testimonials */}
            <div className="lg:w-[400px] w-full space-y-6">
              
              {/* Why Use Box */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Why Use Source for Me?</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1">100% Free of Charge</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">We don't charge any sourcing fees. You only pay for the product and shipping.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1">Expert Sourcing Team</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Dedicated agents with deep connections to direct manufacturers and factories.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1">Fast Turnaround</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Get quotes and product details usually within 24-48 hours of submission.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1">Quality Guaranteed</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">We strictly screen suppliers and perform quality checks before fulfillment.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1">Best Price Negotiation</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">We leverage our huge order volume to negotiate the lowest possible prices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 ml-1">Success Stories</h3>
                <div className="space-y-4">
                  {[
                    { name: "Sarah M.", store: "Shopify Store Owner", quote: "I requested a trending fitness item I couldn't find anywhere. CJ sourced it in 1 day and the price was 20% cheaper than AliExpress.", rating: 5 },
                    { name: "David K.", store: "Dropshipper", quote: "The sourcing agent found the exact custom packaging factory I needed. It completely transformed my brand presentation.", rating: 5 },
                    { name: "Elena V.", store: "WooCommerce Seller", quote: "I was paying $15 for shipping from another supplier. CJ sourced the same product with faster $8 shipping to the US. Amazing.", rating: 5 }
                  ].map((t, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                      <div className="flex gap-1 text-orange-400 mb-3">
                        <span className="text-sm">{"★".repeat(t.rating)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 italic">"{t.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">{t.name}</div>
                          <div className="text-[10px] text-gray-500">{t.store}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
