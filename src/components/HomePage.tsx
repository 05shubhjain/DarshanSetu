import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import DemoModal from './DemoModal';
import LiveDashboardDemo from './LiveDashboardDemo';
import InteractiveFeatureCard from './InteractiveFeatureCard';
import { 
  Brain, 
  BarChart3, 
  Users, 
  Navigation, 
  Eye, 
  Phone, 
  HeadphonesIcon, 
  TrendingUp,
  Zap,
  Heart,
  Calendar,
  Award,
  Target,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Play,
  BarChart,
  Activity,
  Sparkles,
  Sun,
  Moon,
  Flower2,
  Crown,
  Shield
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const [showDashboard, setShowDashboard] = useState(false);

  const features = [
    {
      id: 'predictive',
      icon: Brain,
      title: "दिव्य पूर्वानुमान मॉडल (Divine Predictive Model)",
      description: "प्राचीन ज्ञान और आधुनिक AI का संयोजन, जो भक्त���ं की संख्या का पूर्वानुमान लगाता है।",
      color: "from-saffron-500 to-orange-600",
      metrics: [
        { label: "शुद्धता", value: "95%", change: "+3%" },
        { label: "पूर्व सूचना", value: "7 दिन", change: "+2 दिन" },
        { label: "सुरक्षा", value: "100%", change: "0%" }
      ]
    },
    {
      id: 'command-center',
      icon: BarChart3,
      title: "मंदिर नियंत्रण केंद्र (Temple Command Center)",
      description: "सोमनाथ मंदिर से प्रेरित एकीकृत डैशबोर्ड, लाइव दर्शन प्रबंधन के लिए।",
      color: "from-amber-500 to-yellow-600",
      metrics: [
        { label: "प्रतिक्रिया", value: "2स", change: "-30%" },
        { label: "क्षेत्र", value: "15", change: "+5" },
        { label: "उपलब्धता", value: "99.9%", change: "+0.1%" }
      ]
    },
    {
      id: 'volunteer',
      icon: Users,
      title: "सेवादार प्रबंधन (Sevak Management)",
      description: "भगवान की सेवा में लगे सेवादारों के लिए गेमिफाइड पुरस्कार प्रणाली।",
      color: "from-red-500 to-rose-600",
      metrics: [
        { label: "सक्रिय सेवक", value: "248", change: "+12%" },
        { label: "सेवा कार्य", value: "1.2k", change: "+18%" },
        { label: "रेटिंग", value: "4.8", change: "+0.2" }
      ]
    },
    {
      id: 'personalized',
      icon: Heart,
      title: "व्यक्तिगत आध्यात्मिक यात्रा (Personal Spiritual Journey)",
      description: "भक्त की आयु, शारीरिक क्षमता और आध्यात्मिक रुचि के अनुसार व्यक्तिगत दर्शन अनुभव।",
      color: "from-pink-500 to-purple-600",
      metrics: [
        { label: "संतुष्टि", value: "96%", change: "+4%" },
        { label: "व्यक्तिगत अनुभव", value: "85%", change: "+15%" },
        { label: "पहुंच", value: "100%", change: "0%" }
      ]
    },
    {
      id: 'navigation',
      icon: Navigation,
      title: "बहुआयामी मार्गदर्शन (Multi-Modal Navigation)",
      description: "मंदिर परिसर में स्मार्ट यातायात प्रबंधन और पार्किंग उपलब्धता।",
      color: "from-cyan-500 to-blue-600",
      metrics: [
        { label: "प्रतीक्षा कम", value: "60%", change: "+10%" },
        { label: "मार्ग", value: "12", change: "+3" },
        { label: "पार्किंग", value: "95%", change: "+5%" }
      ]
    },
    {
      id: 'virtual-darshan',
      icon: Eye,
      title: "आभासी दर्शन अनुभव (Virtual Darshan Experience)",
      description: "उच्च गुणवत्ता वाली लाइव स्ट्रीमिंग के साथ घर बैठे दर्शन का अनुभव।",
      color: "from-violet-500 to-indigo-600",
      metrics: [
        { label: "HD स्ट्रीम", value: "4K", change: "नया" },
        { label: "समानांतर दर्शन", value: "10k", change: "+25%" },
        { label: "गुणवत्ता", value: "99%", change: "+1%" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section - Somnath Inspired with Temple Video Background */}
      <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730021155304-9ff1f0f33b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21uYXRoJTIwdGVtcGxlJTIwaW5kaWFuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTM5MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="सोमनाथ मंदिर पृष्ठभूमि"
              className="w-full h-full object-cover scale-105 animate-pulse"
            />
          </div>
        </div>
        
        {/* Temple Architecture Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 z-20">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.3'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3Cpath d='M30 15a15 15 0 100 30 15 15 0 000-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Time-based greeting */}
                <div className="flex items-center space-x-4 text-white/90">
                  <Sun className="w-5 h-5 text-orange-300" />
                  <span className="text-lg">
                    {new Date().getHours() < 12 ? '🌅 प्रभातकाल (Morning Prayers)' : 
                     new Date().getHours() < 18 ? '☀️ मध्याह्न (Afternoon Darshan)' : 
                     '🌙 संध्याकाल (Evening Aarti)'}
                  </span>
                </div>
                
                <Badge className="bg-orange-100/90 text-orange-800 hover:bg-orange-200/90 px-6 py-3 text-lg backdrop-blur-sm">
                  🕉️ श्री सोमनाथ ज्योतिर्लिंग से प्रेरित | Inspired by Somnath Jyotirlinga
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
                    दर्शन सेतु
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
                    Divine Temple Technology
                  </span>
                </h1>
                
                <p className="text-xl text-orange-50 leading-relaxed max-w-lg drop-shadow-md">
                  आधुनिक तकनीक और प्राचीन परंपराओं का संयोजन। मंदिरों में भक्तों की सुरक्षा और आध्यात्मिक अनुभव को बेहतर बनाने के लिए AI-powered समाधान।
                </p>
                
                <p className="text-lg text-orange-100 leading-relaxed max-w-lg">
                  Modern technology meets ancient traditions. AI-powered solutions to enhance devotee safety and spiritual experience in temples.
                </p>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-4 text-lg text-orange-200">
                    <Sparkles className="w-6 h-6" />
                    <span className="font-medium">हर मंदिर, एक दिव्य अनुभव | Every Temple, A Divine Experience</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-lg text-amber-200">
                    <Flower2 className="w-6 h-6" />
                    <span className="font-medium">सत्यम् शिवम् सुंदरम् | Truth, Goodness, Beauty</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <DemoModal feature="सोमनाथ मंदिर प्रबंधन सिस्टम | Somnath Temple Management System">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl backdrop-blur-sm"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    लाइव डेमो देखें | Watch Live Demo
                  </Button>
                </DemoModal>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setShowDashboard(!showDashboard)}
                  className="border-2 border-white/50 hover:bg-white/10 text-lg px-8 py-4 text-white backdrop-blur-sm"
                >
                  <BarChart className="w-5 h-5 mr-2" />
                  {showDashboard ? 'डैशबोर्ड छुपाएं | Hide Dashboard' : 'लाइव डैशबोर्ड | Live Dashboard'}
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-orange-200">95%</div>
                  <div className="text-orange-100">पूर्वानुमान शुद्धता</div>
                  <div className="text-sm text-orange-200">Accuracy</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-amber-200">5 करोड़+</div>
                  <div className="text-amber-100">भक्त सेवित</div>
                  <div className="text-sm text-amber-200">Devotees Served</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-yellow-200">24/7</div>
                  <div className="text-yellow-100">सेवा सहायता</div>
                  <div className="text-sm text-yellow-200">Support</div>
                </div>
              </div>
            </div>

            {/* Temple Live Video Feed */}
            <div className="relative">
              <div className="space-y-6">
                {/* Main Temple View */}
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  {/* Golden temple glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-amber-600/40 rounded-3xl blur-xl transform scale-110"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-200/50">
                    <div className="relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1648402197949-fdefa634aa87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBnb2xkZW4lMjBob3VyJTIwY3Jvd2R8ZW58MXx8fHwxNzU5MzkwODg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="लाइव मंदिर दर्शन - Live Temple View"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>लाइव | LIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-orange-200/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-600">मंदिर स्थिति | Temple Status</div>
                            <div className="font-semibold text-green-600 flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              आदर्श दर्शन प्रवाह | Optimal Flow
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Temple Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-200/50">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1545633983-2dfe007e9948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGJlbGxzJTIwcHJheWVyc3xlbnwxfHx8fDE3NTkzOTA4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="मंदिर की घंटी | Temple Bells"
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <div className="text-sm font-medium text-gray-800">आरती समय</div>
                      <div className="text-xs text-gray-600">Aarti Time</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-200/50">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1757308530438-4e2340a6475f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBkaXlhJTIwb2lsJTIwbGFtcHMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NTkzOTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="दीप प्रकाश | Temple Lamps"
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <div className="text-sm font-medium text-gray-800">दीप प्रकाश</div>
                      <div className="text-xs text-gray-600">Sacred Lamps</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Temple Video Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 relative overflow-hidden">
        {/* Sacred Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F97316' fill-opacity='0.4'%3E%3Cpath d='M20 0l20 20-20 20L0 20z'/%3E%3Ccircle cx='20' cy='20' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-6 border border-white/20">
              <Play className="w-8 h-8 text-amber-200 divine-pulse" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                🎥 लाइव मंदिर दर्शन | Live Temple Darshan
              </h2>
              <Sparkles className="w-8 h-8 text-amber-200 divine-pulse" />
            </div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-4">
              घर बैठे पवित्र मंदिर का सीधा दर्शन करें। हमारे AI-संचालित प्रणाली के साथ एक आध्यात्मिक यात्रा का अनुभव लें।
            </p>
            <p className="text-lg text-amber-200 max-w-3xl mx-auto">
              Experience live temple darshan from your home with our AI-powered spiritual journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* YouTube Video Embed */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-600/20 rounded-3xl blur-xl transform scale-110"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-200/50 transform hover:scale-105 transition-all duration-500 video-container">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.youtube.com/embed/i-xASU2OvBA?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="Live Temple Darshan - दर्शन सेतु"
                    className="w-full h-full rounded-t-3xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Video Overlay Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center justify-between video-sacred-overlay">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full live-indicator"></div>
                        <span className="text-white font-medium">🔴 LIVE दर्शन</span>
                      </div>
                      <div className="text-orange-300 text-sm">
                        👥 5.2K watching now
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Description */}
                <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    🏛️ पवित्र मंदिर दर्शन | Sacred Temple Experience
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience the divine atmosphere of ancient Indian temples through our live streaming technology, bringing spiritual connection to devotees worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800">
                      🎥 4K Quality
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-800">
                      🔴 Live Stream
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      🙏 Devotional
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Features & Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      🎯 वास्तविक समय दर्शन | Real-time Darshan
                    </h4>
                    <p className="text-orange-100">
                      AI-powered cameras provide immersive temple experiences with optimal viewing angles and crystal-clear quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      💫 आध्यात्मिक कनेक्शन | Spiritual Connection
                    </h4>
                    <p className="text-amber-100">
                      Connect with divine energy through synchronized aarti timings and interactive prayer sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      🌍 विश्वव्यापी पहुंच | Global Access
                    </h4>
                    <p className="text-yellow-100">
                      Available 24/7 for devotees worldwide, breaking geographical barriers to spiritual experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all"
                >
                  <Play className="w-5 h-5 mr-2" />
                  पूर्ण स्क्रीन में देखें | Watch Fullscreen
                </Button>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-200 mb-2">5.2K+</div>
              <div className="text-orange-100">वर्तमान दर्शक</div>
              <div className="text-sm text-orange-300">Live Viewers</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-200 mb-2">50M+</div>
              <div className="text-amber-100">कुल दर्शन</div>
              <div className="text-sm text-amber-300">Total Views</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-200 mb-2">24/7</div>
              <div className="text-yellow-100">लाइव स्ट्रीम</div>
              <div className="text-sm text-yellow-300">Live Stream</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-rose-200 mb-2">4K</div>
              <div className="text-rose-100">अल्ट्रा HD</div>
              <div className="text-sm text-rose-300">Ultra HD Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Timings & Sacred Schedule */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              🏛️ आज का मंदिर कार्यक्रम | Today's Temple Schedule
            </h3>
            <p className="text-gray-600">सभी पवित्र समय और आरती की जानकारी | Sacred timings and aarti information</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Sun className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">मंगला आरती</h4>
                <p className="text-sm text-gray-600 mb-2">Mangala Aarti</p>
                <div className="text-lg font-bold text-orange-600">प्रातः 5:00</div>
                <div className="text-sm text-gray-500">5:00 AM</div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Crown className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">श्रृंगार आरती</h4>
                <p className="text-sm text-gray-600 mb-2">Shringar Aarti</p>
                <div className="text-lg font-bold text-amber-600">प्रातः 9:00</div>
                <div className="text-sm text-gray-500">9:00 AM</div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Eye className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">मध्याह्न दर्शन</h4>
                <p className="text-sm text-gray-600 mb-2">Midday Darshan</p>
                <div className="text-lg font-bold text-yellow-600">दोपहर 12:00</div>
                <div className="text-sm text-gray-500">12:00 PM</div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Moon className="w-8 h-8 text-rose-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">संध्या आरती</h4>
                <p className="text-sm text-gray-600 mb-2">Evening Aarti</p>
                <div className="text-lg font-bold text-rose-600">सायं 7:00</div>
                <div className="text-sm text-gray-500">7:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">वर्तमान में खुला | Currently Open</span>
              </div>
              <div className="text-sm text-gray-500">|</div>
              <div className="text-sm text-orange-600 font-medium">अगली आरती: 2 घंटे में | Next Aarti: 2 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Demo */}
      {showDashboard && (
        <section className="py-16 bg-white border-t border-b border-orange-100 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650696347800-6dcffd62153e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBzdG9uZSUyMGNhcnZpbmd8ZW58MXx8fHwxNzU5MzkwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="मंदिर वास्तुकला"
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    🏛️ सोमनाथ मंदिर लाइव डैशबोर्ड | Somnath Temple Live Dashboard
                  </h3>
                  <p className="text-gray-600">वास्तविक समय में मंदिर प्रबंधन देखें | Real-time temple management view</p>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650696347800-6dcffd62153e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBzdG9uZSUyMGNhcnZpbmd8ZW58MXx8fHwxNzU5MzkwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="मंदिर वास्तुकला"
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                />
              </div>
              
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                  <Activity className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-800">लाइव अपडेट | Live Updates</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">सुरक्षित | Secure</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">AI-संचालित | AI-Powered</span>
                </div>
              </div>
            </div>
            <LiveDashboardDemo />
            
            {/* Sanskrit Blessing */}
            <div className="text-center mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-200">
              <div className="text-lg font-bold text-orange-800 mb-2 italic">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
              </div>
              <div className="text-gray-700">
                May all be happy, may all be healthy - This is the blessing of Darshan Setu
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Overview - Hindu Theme */}
      <section className="py-24 bg-gradient-to-br from-white to-orange-50 relative">
        {/* Temple Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1650696347800-6dcffd62153e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBzdG9uZSUyMGNhcnZpbmd8ZW58MXx8fHwxNTkzOTA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="मंदिर पैटर्न"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-6 py-3 text-lg">
              🕉️ नवरत्न विशेषताएं | Nine Sacred Features
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              सम्पूर्ण मंदिर प्रबंधन पारिस्थितिकी तंत्र
            </h2>
            
            <h3 className="text-2xl lg:text-3xl text-orange-600 font-medium">
              Complete Temple Management Ecosystem
            </h3>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              पूर्वानुमान विश्लेषण से लेकर व्यक्तिगत भक्त अनुभव तक, हमारा प्लेटफॉर्म पवित्र स्थान प्रबंधन को रूपांतरित करता है।
            </p>
            
            <p className="text-lg text-gray-500 max-w-4xl mx-auto">
              From predictive analytics to personalized devotee experiences, our platform transforms sacred space management with cutting-edge AI technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
                <Sun className="w-6 h-6 mr-2" />
                <span>सूर्योदय से सूर्यास्त तक | Dawn to Dusk</span>
              </div>
              <div className="flex items-center text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
                <Crown className="w-6 h-6 mr-2" />
                <span>राजसी सेवा | Royal Service</span>
              </div>
              <div className="flex items-center text-rose-600 bg-rose-50 px-4 py-2 rounded-full">
                <Flower2 className="w-6 h-6 mr-2" />
                <span>दिव्य अनुभव | Divine Experience</span>
              </div>
            </div>
            
            {/* Sacred Numbers */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">108</div>
                <div className="text-sm text-gray-600">पवित्र संख्या | Sacred Number</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">12</div>
                <div className="text-sm text-gray-600">ज्योतिर्लिंग | Jyotirlingas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">9</div>
                <div className="text-sm text-gray-600">मुख्य विशेषताएं | Core Features</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <InteractiveFeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                metrics={feature.metrics}
                onNavigate={setCurrentPage}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setCurrentPage('predictive')}
              variant="outline" 
              className="border-2 border-orange-200 hover:bg-orange-50 text-orange-700 px-8 py-3"
            >
              सभी विशेषताएं देखें
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats & Benefits - Hindu Heritage */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.1'%3E%3Cpath d='M60 0L90 30L60 60L30 30z'/%3E%3Cpath d='M60 60L90 90L60 120L30 90z'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '120px 120px'
               }}>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730021155304-9ff1f0f33b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21uYXRoJTIwdGVtcGxlJTIwaW5kaWFuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTM5MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="पवित्र मंदिर"
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-orange-200 shadow-lg"
              />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              विश्वभर के पवित्र संस्थानों का भरोसा
            </h2>
            
            <h3 className="text-2xl lg:text-3xl text-orange-600 font-medium mb-6">
              Trusted by Sacred Institutions Worldwide
            </h3>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              तीर्थयात्रा को सुरक्षित, सुलभ और आध्यात्मिक रूप से समृद्ध बनाना
            </p>
            
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Making pilgrimage safe, accessible, and spiritually enriching through advanced technology
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4 text-orange-600 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200">
                <Flower2 className="w-8 h-8" />
                <span className="text-xl font-bold">सत्यम् शिवम् सुंदरम्</span>
                <Flower2 className="w-8 h-8" />
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-gray-600">
              <span className="text-sm">Truth, Goodness, Beauty</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">मंदिर जुड़े हुए</div>
              <div className="text-sm text-orange-600 mt-1">भारत और विदेश में</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5 करोड़+</div>
              <div className="text-gray-600 font-medium">भक्त सेवित</div>
              <div className="text-sm text-red-600 mt-1">दैनिक दर्शन</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98.5%</div>
              <div className="text-gray-600 font-medium">सुरक्षा रेटिंग</div>
              <div className="text-sm text-yellow-600 mt-1">शून्य दुर्घटना</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">भक्त रेटिंग</div>
              <div className="text-sm text-purple-600 mt-1">संतुष्टि गारंटी</div>
            </div>
          </div>

          {/* Sanskrit Shloka */}
          <div className="text-center mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-200">
            <div className="text-2xl font-bold text-orange-800 mb-4 italic">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
            </div>
            <div className="text-lg text-gray-700">
              सभी सुखी हों, सभी रोगमुक्त हों - यही है दर्शन सेतु का लक्ष्य
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Divine Theme with Temple Video Background */}
      <section className="py-24 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Evening Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-900/70 to-yellow-900/80 z-10"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757308530438-4e2340a6475f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBkaXlhJTIwb2lsJTIwbGFtcHMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NTkzOTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="मंदिर संध्या पृष्ठभूमि"
            className="w-full h-full object-cover scale-110 animate-pulse"
          />
        </div>
        
        {/* Temple architecture pattern */}
        <div className="absolute inset-0 opacity-20 z-20">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M50 0L75 25H25z'/%3E%3Cpath d='M50 100L25 75h50z'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Cpath d='M20 20h60v60H20z' fill='none' stroke='white' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-30">
          <div className="space-y-8">
            {/* Sacred Invocation */}
            <div className="flex justify-center mb-6">
              <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
                <div className="flex items-center space-x-4 text-amber-200">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  <span className="text-2xl font-bold">ॐ नमः शिवाय</span>
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Multi-language Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              अपने पवित्र स्थान को रूपांतरित करने के लिए तैयार हैं?
            </h2>
            
            <h3 className="text-2xl lg:text-3xl text-orange-200 font-medium drop-shadow-md">
              Ready to Transform Your Sacred Space?
            </h3>
            
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              दुनियाभर के सैकड़ों मंदिरों में शामिल हों जो दर्शन सेतु पर भरोसा करते हैं सुरक्षित, कुशल और आध्यात्मिक रूप से समृद्ध अनुभव प्रदान करने के लिए।
            </p>
            
            <p className="text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of temples worldwide that trust Darshan Setu to provide safe, efficient, and spiritually enriching experiences for millions of devotees.
            </p>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <DemoModal feature="संपूर्ण मंदिर रूपांतरण सिस्टम | Complete Temple Transformation System">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-4 shadow-xl transform hover:scale-105 transition-all"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  डेमो शेड्यूल करें | Schedule Demo
                </Button>
              </DemoModal>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setCurrentPage('about')}
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-4 backdrop-blur-sm transform hover:scale-105 transition-all"
              >
                <Shield className="w-5 h-5 mr-2" />
                और जानें | Learn More
              </Button>
            </div>
            
            {/* Sacred Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-orange-200">मंदिर | Temples</div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">5 करोड़+</div>
                <div className="text-sm text-amber-200">भक्त | Devotees</div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-yellow-200">सेवा | Service</div>
              </div>
            </div>
            
            {/* Sacred Blessing */}
            <div className="flex justify-center mt-8">
              <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
                <div className="text-amber-200 text-lg font-medium">
                  🙏 आपकी सेवा में, आपके मंदिर की सुरक्षा में
                </div>
                <div className="text-orange-200 text-sm mt-1">
                  In your service, in your temple's protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}