import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import DemoModal from '../DemoModal';
import { 
  Brain, 
  TrendingUp, 
  Calendar, 
  Cloud, 
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Target,
  Zap,
  Clock,
  Users,
  Shield
} from 'lucide-react';

export default function PredictiveModelPage() {
  const features = [
    {
      icon: Calendar,
      title: "धार्मिक कैलेंडर एकीकरण | Religious Calendar Integration",
      description: "त्योहारों, शुभ समय और विशेष अवसरों का विश्लेषण करके भक्तों के बढ़े हुए प्रवाह का पूर्वानुमान। Analyzes festival dates, auspicious timings, and special occasions to predict increased pilgrim flow."
    },
    {
      icon: Cloud,
      title: "मौसम पैटर्न विश्लेषण | Weather Pattern Analysis",
      description: "मौसम पूर्वानुमान और मौसमी पैटर्न को शामिल करता है जो तीर्थयात्रा के पैटर्न को प्रभावित करते हैं। Incorporates weather forecasts and seasonal patterns that influence pilgrimage patterns."
    },
    {
      icon: TrendingUp,
      title: "ऐतिहासिक डेटा खनन | Historical Data Mining",
      description: "वर्षों के भीड़ के पैटर्न से सीखता है, सटीक भविष्यवाणियों के लिए रुझान और विसंगतियों की पहचान करता है। Learns from years of crowd patterns, identifying trends and anomalies for accurate predictions."
    },
    {
      icon: Users,
      title: "वास्तविक समय व्यवहार विश्लेषण | Real-time Behavioral Analysis",
      description: "वर्तमान तीर्थयात्री आंदोलन पैटर्न की निगरानी करके भविष्यवाणियों को गतिशील रूप से परिष्कृत और समायोजित करता है। Monitors current pilgrim movement patterns to refine and adjust predictions dynamically."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Prevent Stampedes",
      description: "Early warnings allow proactive crowd control measures before dangerous situations develop.",
      metric: "95% prevention rate"
    },
    {
      icon: Target,
      title: "Resource Optimization",
      description: "Optimal staff deployment and facility preparation based on predicted crowd levels.",
      metric: "40% efficiency gain"
    },
    {
      icon: Clock,
      title: "Reduced Wait Times",
      description: "Smart crowd distribution and queue management based on predictive insights.",
      metric: "60% faster darshan"
    },
    {
      icon: CheckCircle,
      title: "Enhanced Safety",
      description: "Comprehensive safety protocols activated automatically based on crowd predictions.",
      metric: "Zero incidents"
    }
  ];

  const predictionTypes = [
    {
      timeframe: "Real-time",
      description: "Current crowd density and immediate flow patterns",
      accuracy: "98%",
      color: "bg-green-500"
    },
    {
      timeframe: "1-6 Hours",
      description: "Short-term crowd surge predictions and bottleneck alerts",
      accuracy: "95%",
      color: "bg-blue-500"
    },
    {
      timeframe: "1-3 Days",
      description: "Medium-term planning for festivals and special events",
      accuracy: "92%",
      color: "bg-purple-500"
    },
    {
      timeframe: "1-7 Days",
      description: "Long-term resource planning and preparation strategies",
      accuracy: "88%",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section with Khajuraho Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1723233106209-bbce19d67824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraGFqdXJhaG8lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBjYXJ2ZWR8ZW58MXx8fHwxNzU5MzkxMzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="खजुराहो मंदिर पूर्वानुमान पृष्ठभूमि"
              className="w-full h-full object-cover temple-video"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm">
                  <Brain className="w-5 h-5 mr-2" />
                  🧠 AI-संचालित पूर्वानुमान | AI-Powered Prediction
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
                    दिव्य पूर्वानुमान मॉडल
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
                    Predictive & Proactive Crowd Management
                  </span>
                </h1>
                <p className="text-xl text-orange-50 leading-relaxed drop-shadow-md">
                  हमारा AI सिस्टम केवल भीड़ का प्रबंधन नहीं करता; यह घंटों या दिनों पहले खतरनाक स्थितियों की भविष्यवाणी करके उन्हें समस्या बनने से रोकता है।
                </p>
                <p className="text-lg text-amber-100 leading-relaxed drop-shadow-sm">
                  Our AI system doesn't just manage crowds; it prevents them from becoming a problem by predicting dangerous situations hours or even days in advance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20">
                  <div className="text-3xl font-bold text-orange-200 mb-2">95%</div>
                  <div className="text-orange-100 text-sm">पूर्वानुमान शुद्धता</div>
                  <div className="text-orange-200 text-xs">Prediction Accuracy</div>
                </div>
                <div className="text-center p-4 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20">
                  <div className="text-3xl font-bold text-amber-200 mb-2">7 दिन</div>
                  <div className="text-amber-100 text-sm">पूर्व चेतावनी</div>
                  <div className="text-amber-200 text-xs">Advance Warning</div>
                </div>
              </div>

              <DemoModal feature="दिव्य पूर्वानुमान डेमो | Predictive Analytics Demo">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 backdrop-blur-sm shadow-xl">
                  <Zap className="w-5 h-5 mr-2" />
                  लाइव डेमो देखें | See Live Demo
                </Button>
              </DemoModal>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-white/95 to-orange-50/95 shadow-2xl backdrop-blur-sm border-2 border-orange-200/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">लाइव पूर्वानुमान डैशबोर्ड | Live Prediction Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800">सक्रिय | Active</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">Tomorrow 8-11 AM</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Medium Risk</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Today 2-5 PM</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span className="font-medium">Friday Festival</span>
                      </div>
                      <Badge className="bg-red-100 text-red-800">High Risk</Badge>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Current Crowd Level</span>
                      <span className="text-2xl font-bold">2,847</span>
                    </div>
                    <div className="mt-2 bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              हमारा AI भीड़ के पैटर्न की भविष्यवाणी कैसे करता है
            </h2>
            <h3 className="text-2xl font-medium text-orange-600 mb-4">
              How Our AI Predicts Crowd Patterns
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हमारे उन्नत मशीन लर्निंग एल्गोरिदम भीड़ की भविष्यवाणी में अभूतपूर्व सटीकता प्रदान करने के लिए कई डेटा स्रोतों का विश्लेषण करते हैं।
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-2">
              Our advanced machine learning algorithms analyze multiple data sources to provide unprecedented accuracy in crowd prediction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-orange-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prediction Timeline */}
      <section className="py-24 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              समय के साथ पूर्वानुमान सटीकता | Prediction Accuracy Across Time
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              इष्टतम योजना और वास्तविक समय प्रतिक्रिया के लिए विभिन्न पूर्वानुमान क्षितिज
            </p>
            <p className="text-lg text-gray-500">
              Different prediction horizons for optimal planning and real-time response
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {predictionTypes.map((type, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gray-100 text-gray-800">{type.timeframe}</Badge>
                    <div className={`w-3 h-3 ${type.color} rounded-full`}></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{type.accuracy}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${type.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: type.accuracy }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results & Benefits</h2>
            <p className="text-xl text-gray-600">
              Real impact on temple safety, efficiency, and pilgrim experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{benefit.description}</p>
                  <Badge className="bg-blue-100 text-blue-800">{benefit.metric}</Badge>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced AI Technology</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Machine Learning Models</h3>
                    <p className="text-gray-600">Deep neural networks trained on millions of data points from temples worldwide, continuously learning and improving accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Real-time Analytics</h3>
                    <p className="text-gray-600">Live data processing with sub-second response times for immediate threat detection and crowd flow optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Safety Protocols</h3>
                    <p className="text-gray-600">Automated safety protocol activation based on predicted risk levels, ensuring proactive crowd management.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white shadow-xl">
              <h3 className="font-bold text-gray-900 mb-6">Prediction Algorithm Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Festival Crowd Prediction</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Weather Impact Analysis</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Emergency Risk Assessment</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-500 to-orange-600 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Real-time Flow Prediction</span>
                    <span className="font-medium">97%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full w-[97%]"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M50 0L75 25H25z'/%3E%3Cpath d='M50 100L25 75h50z'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center mb-6">
              <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
                <div className="flex items-center space-x-4 text-amber-200">
                  <Brain className="w-8 h-8 animate-pulse" />
                  <span className="text-2xl font-bold">दिव्य पूर्वानुमान शक्ति</span>
                  <Brain className="w-8 h-8 animate-pulse" />
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              दिव्य पूर्वानुमान बुद्धि का अनुभव करें
            </h2>
            <h3 className="text-2xl lg:text-3xl text-orange-200 font-medium">
              Experience Predictive Intelligence
            </h3>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto drop-shadow-sm">
              अपने मंदिर के भीड़ प्रबंधन को उस AI के साथ बदलें जो समस्याओं के होने से पहले ही उनकी भविष्यवाणी करता है और रोकता है।
            </p>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              Transform your temple's crowd management with AI that predicts and prevents problems before they occur.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <DemoModal feature="संपूर्ण पूर्वानुमान विश्लेषण प्रणाली | Complete Predictive Analytics System">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
                  डेमो का अनुरोध करें | Request Demo
                </Button>
              </DemoModal>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm transform hover:scale-105 transition-all">
                और जानें | Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}