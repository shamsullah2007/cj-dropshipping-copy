import { useState } from "react";
import {
  PlayCircle,
  PauseCircle,
  Download,
  Share2,
  Clock,
  Calendar,
  Mic2,
  Mail,
  Music,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Podcast() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([35]);

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800">
      <Header />

      <main className="pb-16">
        {/* Podcast Hero Section */}
        <section className="bg-slate-900 pt-16 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0 mb-6 px-3 py-1 uppercase tracking-wider text-xs">
                  <Mic2 className="w-3 h-3 mr-1.5 inline" /> Official Podcast
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  The CJ Dropshipping <span className="text-orange-500">Podcast</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Real stories and strategies from successful dropshippers. Learn how to scale your e-commerce business from 0 to 7 figures.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Button className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-lg font-bold shadow-lg shadow-orange-500/20 w-full sm:w-auto">
                    Subscribe Now
                  </Button>
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <span className="text-slate-400 text-sm font-medium mr-2">Listen on:</span>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Spotify">
                      <Music className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Apple Podcasts">
                      <Headphones className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-md lg:w-1/3 relative group">
                <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20 blur"></div>
                <img 
                  src="/images/podcast-hero.png" 
                  alt="CJ Dropshipping Podcast" 
                  className="relative z-10 w-full aspect-square object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-4 -mt-12 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="flex-1 space-y-8">
              {/* Featured Latest Episode */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img 
                      src="/images/podcast-ep-1.png" 
                      alt="How I Made $100K in 3 Months with CJ Dropshipping" 
                      className="w-full h-full object-cover aspect-square md:aspect-auto"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                      <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 border-0">Latest Episode</Badge>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Oct 24, 2023</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 45 min</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-orange-500 transition-colors cursor-pointer leading-snug">
                      How I Made $100K in 3 Months with CJ Dropshipping
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      In this episode, we sit down with Sarah, a 24-year-old entrepreneur who scaled her beauty niche store from zero to $100K in just 90 days. She shares her exact product research strategy, Facebook ad structure, and how she used CJ's fast shipping to outpace her competitors.
                    </p>
                    
                    {/* Audio Player Mockup */}
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-colors flex-shrink-0 shadow-md shadow-orange-500/20"
                      >
                        {isPlaying ? <PauseCircle className="w-6 h-6" /> : <PlayCircle className="w-6 h-6 ml-1" />}
                      </button>
                      <div className="flex-1">
                        <Slider 
                          value={progress} 
                          onValueChange={setProgress} 
                          max={100} 
                          step={1} 
                          className="w-full [&>span:first-child]:bg-gray-200 [&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500 [&>span:first-child>span]:bg-orange-500" 
                        />
                        <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
                          <span>15:45</span>
                          <span>45:00</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-gray-700 transition-colors p-2">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors p-2">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Episode List */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">All Episodes</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8">Sort by Date</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { ep: "Ep. 45", date: "Oct 17, 2023", duration: "38 min", img: "podcast-ep-2.png", title: "From 0 to $50K: A Beginner's Journey", desc: "A realistic look at what it takes to get your first dropshipping store off the ground and profitable." },
                    { ep: "Ep. 44", date: "Oct 10, 2023", duration: "42 min", img: "podcast-ep-3.png", title: "Finding Winning Products with CJ's Tools", desc: "Deep dive into using CJ Dropshipping's sourcing features to find untapped products before they go viral." },
                    { ep: "Ep. 43", date: "Oct 03, 2023", duration: "51 min", img: "podcast-ep-4.png", title: "Print on Demand vs Dropshipping in 2025", desc: "Comparing the two business models and how to combine them using CJ's POD services." },
                    { ep: "Ep. 42", date: "Sep 26, 2023", duration: "47 min", img: "podcast-ep-5.png", title: "Interview: 7-Figure Shopify Store Owner", desc: "Michael explains his exact framework for building branded dropshipping stores that customers trust." },
                    { ep: "Ep. 41", date: "Sep 19, 2023", duration: "35 min", img: "podcast-ep-6.png", title: "Shipping Secrets: How to Get Faster Delivery", desc: "Stop using ePacket. We explain how CJ's private lines can get your products delivered in 5-8 days." },
                    { ep: "Ep. 40", date: "Sep 12, 2023", duration: "44 min", img: "podcast-hero.png", title: "Facebook vs TikTok Ads for Dropshipping", desc: "Which platform is currently yielding the highest ROAS? We break down the data from 100+ stores." },
                    { ep: "Ep. 39", date: "Sep 05, 2023", duration: "39 min", img: "podcast-ep-1.png", title: "How to Handle Returns Like a Pro", desc: "Returns are inevitable. Here is a systematized approach to handling them without losing money." },
                    { ep: "Ep. 38", date: "Aug 29, 2023", duration: "41 min", img: "podcast-ep-2.png", title: "Best Niches for New Dropshippers", desc: "We analyze the data to find the most beginner-friendly niches with high margins and low competition." },
                  ].map((episode, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 shadow-sm relative">
                        <img src={`/images/${episode.img}`} alt={episode.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 text-xs text-gray-500 font-medium">
                          <span className="text-orange-600 font-bold">{episode.ep}</span>
                          <span>•</span>
                          <span>{episode.date}</span>
                          <span>•</span>
                          <span>{episode.duration}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors truncate">{episode.title}</h4>
                        <p className="text-sm text-gray-500 line-clamp-1">{episode.desc}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4 sm:mt-0 pl-4 sm:pl-0 sm:border-l border-gray-100 h-full">
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm">
                          <PlayCircle className="w-5 h-5 ml-0.5" />
                        </button>
                        <button className="w-10 h-10 rounded-full text-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center hidden sm:flex">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                    Load More Episodes
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="w-full lg:w-[320px] space-y-6">
              {/* Subscribe Box */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg shadow-orange-500/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Never Miss an Episode</h3>
                <p className="text-orange-100 text-sm mb-6">Get notified when we drop new dropshipping strategies and interviews.</p>
                <div className="space-y-3">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30 h-11"
                  />
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-50 h-11 font-bold shadow-md">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              {/* Topics / Tags */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Product Research", "Facebook Ads", "TikTok Marketing", "Success Stories", "Store Design", "SEO", "Branding", "Logistics"].map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600 cursor-pointer font-medium px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
