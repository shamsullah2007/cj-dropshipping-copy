import { useState } from "react";
import {
  Search,
  ChevronRight,
  PlayCircle,
  Clock,
  BookOpen,
  Award,
  Users,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Academy() {
  const [activeTab, setActiveTab] = useState("All Courses");

  const categories = [
    "All Courses",
    "Getting Started",
    "Product Research",
    "Store Setup",
    "Marketing & Ads",
    "Fulfillment & Shipping",
    "Advanced Strategies"
  ];

  const courses = [
    {
      img: "academy-course-1.png",
      category: "Product Research",
      title: "How to Find Winning Products",
      desc: "Learn the exact strategies and tools to identify high-converting products before your competitors.",
      duration: "2h 15min",
      lessons: 10,
      level: "Beginner",
      instructor: "Sarah Jenkins",
      rating: 4.8,
      enrolled: "15.2k"
    },
    {
      img: "academy-course-2.png",
      category: "Store Setup",
      title: "Setting Up Your Shopify Store",
      desc: "A step-by-step guide to building a highly optimized Shopify store designed to convert visitors.",
      duration: "3h 45min",
      lessons: 15,
      level: "Beginner",
      instructor: "Michael Chen",
      rating: 4.9,
      enrolled: "22.4k"
    },
    {
      img: "academy-course-3.png",
      category: "Marketing & Ads",
      title: "Facebook Ads for Dropshippers",
      desc: "Master Facebook advertising to drive targeted traffic and generate consistent sales.",
      duration: "4h 30min",
      lessons: 20,
      level: "Intermediate",
      instructor: "David Rodriguez",
      rating: 4.7,
      enrolled: "18.1k"
    },
    {
      img: "academy-course-4.png",
      category: "Marketing & Ads",
      title: "SEO for Dropshipping Stores",
      desc: "Optimize your product pages and blog to rank higher on Google and get free organic traffic.",
      duration: "2h 50min",
      lessons: 12,
      level: "Intermediate",
      instructor: "Emma Watson",
      rating: 4.6,
      enrolled: "8.5k"
    },
    {
      img: "academy-course-5.png",
      category: "Marketing & Ads",
      title: "Email Marketing Automation",
      desc: "Set up automated email sequences to recover abandoned carts and increase customer lifetime value.",
      duration: "1h 45min",
      lessons: 8,
      level: "Intermediate",
      instructor: "James Miller",
      rating: 4.8,
      enrolled: "11.3k"
    },
    {
      img: "academy-course-6.png",
      category: "Advanced Strategies",
      title: "Scaling from $0 to $10K/Month",
      desc: "Advanced tactics for scaling your winning campaigns and building a sustainable brand.",
      duration: "5h 20min",
      lessons: 24,
      level: "Advanced",
      instructor: "Alex Thompson",
      rating: 4.9,
      enrolled: "9.8k"
    }
  ];

  const videos = [
    { img: "academy-vid-1.png", title: "Top 5 Dropshipping Mistakes to Avoid in 2025", duration: "15:24" },
    { img: "academy-vid-2.png", title: "Live Product Research Session", duration: "42:10" },
    { img: "academy-vid-3.png", title: "How to Negotiate with CJ Suppliers", duration: "18:45" },
    { img: "academy-vid-1.png", title: "TikTok Organic Traffic Strategy", duration: "22:30" },
  ];

  const webinars = [
    {
      date: "Oct 15",
      time: "2:00 PM EST",
      topic: "Q4 Preparation Masterclass",
      speaker: "CJ Dropshipping Team",
      spots: "Filling Fast"
    },
    {
      date: "Oct 22",
      time: "1:00 PM EST",
      topic: "Winning Products for the Holiday Season",
      speaker: "Sarah Jenkins",
      spots: "Available"
    },
    {
      date: "Oct 29",
      time: "3:00 PM EST",
      topic: "Scaling with CJ VIP Program",
      speaker: "David Rodriguez",
      spots: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CJ Dropshipping Academy</h1>
            <p className="text-lg md:text-xl text-orange-50 mb-8">
              Master dropshipping with free courses, tutorials, and expert guides from industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="What do you want to learn today?" 
                  className="w-full pl-10 h-12 text-base text-gray-900 bg-white border-none rounded-lg shadow-lg"
                />
              </div>
              <Button className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base rounded-lg shadow-lg whitespace-nowrap">
                Start Learning
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-4 py-12 space-y-16">
          
          {/* Featured Course */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Course</h2>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col lg:flex-row">
              <div className="lg:w-3/5 relative">
                <img 
                  src="/images/academy-featured.png" 
                  alt="Complete Dropshipping Masterclass" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
              </div>
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-orange-500 font-medium mb-3">
                  <Award className="w-4 h-4" /> All-In-One Masterclass
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Complete Dropshipping Masterclass 2025
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Everything you need to know to start and scale a profitable dropshipping business from scratch. No prior experience required.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <Clock className="w-4 h-4 text-orange-500" /> 12h 45min
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <BookOpen className="w-4 h-4 text-orange-500" /> 45 Lessons
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <Award className="w-4 h-4 text-orange-500" /> All Levels
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                      CJ
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">CJ Academy Team</div>
                      <div className="flex items-center text-sm text-orange-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-gray-500 ml-1">(4.9)</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 rounded-lg font-semibold">
                    Start Course
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Category Tabs */}
          <section>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-4">
              {categories.map((cat, i) => (
                <Button
                  key={i}
                  variant={activeTab === cat ? "default" : "outline"}
                  onClick={() => setActiveTab(cat)}
                  className={`rounded-full whitespace-nowrap h-10 px-6 ${
                    activeTab === cat 
                      ? "bg-slate-900 hover:bg-slate-800 text-white" 
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {courses.filter(c => activeTab === "All Courses" || c.category === activeTab).map((course, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={`/images/${course.img}`} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-2.5 py-1 rounded-md">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex gap-3 mb-3">
                      <span className="flex items-center text-xs text-gray-500 gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </span>
                      <span className="flex items-center text-xs text-gray-500 gap-1 font-medium">
                        <BookOpen className="w-3.5 h-3.5" /> {course.lessons} lessons
                      </span>
                      <span className="flex items-center text-xs text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded font-medium gap-1 ml-auto">
                        <Award className="w-3.5 h-3.5" /> {course.level}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-2 flex-1">
                      {course.desc}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs">
                          {course.instructor.charAt(0)}
                        </div>
                        <div className="text-sm font-medium text-gray-700">{course.instructor}</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                        <Star className="w-4 h-4 text-orange-400 fill-current" /> {course.rating}
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border-0 transition-colors">
                      Enroll Free
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                Load More Courses
              </Button>
            </div>
          </section>

          {/* Video Tutorials Section */}
          <section className="bg-slate-900 rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="flex justify-between items-end mb-8 relative z-10">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Video className="w-6 h-6 text-orange-500" /> Video Tutorials
                </h2>
                <p className="text-slate-400 mt-1">Quick actionable tips from our YouTube channel</p>
              </div>
              <Button variant="link" className="text-orange-400 hover:text-orange-300 px-0">
                View Channel <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide relative z-10">
              {videos.map((vid, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[320px] group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img 
                      src={`/images/${vid.img}`} 
                      alt={vid.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                      {vid.duration}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-100 line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {vid.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>

          {/* Webinars */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Webinars</h2>
                <p className="text-gray-500 mt-1">Join our live sessions and get your questions answered</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webinars.map((webinar, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex flex-col items-center justify-center text-orange-600 border border-orange-100">
                      <span className="text-[10px] font-bold uppercase">{webinar.date.split(" ")[0]}</span>
                      <span className="text-lg font-bold leading-none">{webinar.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-orange-500 uppercase tracking-wide">Live Session</div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 font-medium mt-0.5">
                        <Clock className="w-3.5 h-3.5" /> {webinar.time}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{webinar.topic}</h3>
                  
                  <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" /> By {webinar.speaker}
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className={`text-xs font-medium ${webinar.spots.includes("Fast") ? "text-red-500" : "text-green-600"}`}>
                      ● {webinar.spots}
                    </span>
                    <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 h-8 text-sm">
                      Register Now
                    </Button>
                  </div>
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
