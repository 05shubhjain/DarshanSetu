import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import DemoModal from '../DemoModal';
import LiveDashboardDemo from '../LiveDashboardDemo';
import { 
  BarChart3, 
  Monitor, 
  AlertTriangle, 
  Users, 
  Map, 
  Radio,
  Shield,
  Zap,
  Clock,
  Bell,
  Activity,
  Eye,
  Settings,
  ChevronRight,
  Play
} from 'lucide-react';

export default function CommandCenterPage() {
  const dashboardFeatures = [
    {
      icon: Map,
      title: "लाइव भीड़ हीटमैप | Live Crowd Heatmaps",
      description: "रंग-कोडेड तीव्रता मैपिंग के साथ मंदिर परिसर में भीड़ घनत्व का वास्तविक समय दृश्यावलोकन। Real-time visualization of crowd density across temple premises with color-coded intensity mapping."
    },
    {
      icon: Activity,
      title: "यातायात निगरानी | Traffic Monitoring", 
      description: "पहुंच मार्गों पर लाइव ट्रैफिक स्थिति, पार्किंग उपलब्धता और वाहन प्रवाह प्रबंधन। Live traffic conditions on approach roads, parking availability, and vehicle flow management."
    },
    {
      icon: AlertTriangle,
      title: "AI सुरक्षा अलर्ट | AI Safety Alerts",
      description: "संभावित भगदड़ की स्थितियों और आपातकालीन परिस्थितियों के लिए स्वचालित अलर्ट के साथ बुद्धिमान जोखिम मूल्यांकन। Intelligent risk assessment with automated alerts for potential stampede situations and emergency scenarios."
    },
    {
      icon: Users,
      title: "आभासी क्यू प्रबंधन | Virtual Queue Management",
      description: "वास्तविक समय प्रतीक्षा समय, क्षमता प्रबंधन और प्रवाह अनुकूलन के साथ डिजिटल क्यू सिस्टम। Digital queue system with real-time wait times, capacity management, and flow optimization."
    },
    {
      icon: Radio,
      title: "संचार केंद्र | Communication Hub",
      description: "सुरक्षा टीमों, स्वयंसेवकों और आपातकालीन उत्तरदाताओं के लिए एकीकृत संचार प्रणाली। Integrated communication system for security teams, volunteers, and emergency responders."
    },
    {
      icon: Shield,
      title: "Emergency Protocols",
      description: "One-click emergency response activation with pre-defined protocols and authority notifications."
    }
  ];

  const alertTypes = [
    {
      type: "Critical",
      icon: AlertTriangle,
      color: "bg-red-500",
      description: "Immediate safety risks requiring instant response",
      examples: ["Stampede risk detected", "Medical emergency", "Security threat"]
    },
    {
      type: "High Priority",
      icon: Bell,
      color: "bg-orange-500",
      description: "Important issues needing prompt attention",
      examples: ["Crowd threshold exceeded", "Queue overflow", "Traffic congestion"]
    },
    {
      type: "Medium",
      icon: Eye,
      color: "bg-yellow-500",
      description: "Notable events requiring monitoring",
      examples: ["Unusual crowd patterns", "Weather alerts", "Facility issues"]
    },
    {
      type: "Info",
      icon: Activity,
      color: "bg-blue-500",
      description: "General updates and system notifications",
      examples: ["System updates", "Scheduled maintenance", "Performance reports"]
    }
  ];

  const realTimeMetrics = [
    { label: "Current Crowd", value: "2,847", status: "Normal", color: "text-green-600" },
    { label: "Wait Time", value: "12 min", status: "Optimal", color: "text-blue-600" },
    { label: "Safety Score", value: "98.5%", status: "Excellent", color: "text-green-600" },
    { label: "Queue Efficiency", value: "94%", status: "High", color: "text-emerald-600" },
    { label: "Alert Level", value: "Low", status: "Safe", color: "text-green-600" },
    { label: "Response Time", value: "< 30s", status: "Fast", color: "text-blue-600" }
  ];

  return (
    <div className="py-8">
      {/* Hero Section with Meenakshi Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1738474570473-6b693c062171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWVuYWtzaGklMjB0ZW1wbGUlMjBjb2xvcmZ1bCUyMHRvd2Vyc3xlbnwxfHx8fDE3NTkzOTEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="मीनाक्षी मंदिर कमांड सेंटर पृष्ठभूमि"
              className="w-full h-full object-cover sacred-float"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  🏛️ कमांड और नियंत्रण | Command & Control
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
                    मंदिर नियंत्रण केंद्र
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
                    Temple Command Center Dashboard
                  </span>
                </h1>
                <p className="text-xl text-orange-50 leading-relaxed drop-shadow-md">
                  एक एकीकृत, बुद्धिमान डैशबोर्ड जो मंदिर अधिकारियों को भीड़ प्रबंधन, सुरक्षा प्रोटोकॉल और परिचालन दक्षता पर पूर्ण दृश्यता और नियंत्रण देता है।
                </p>
                <p className="text-lg text-amber-100 leading-relaxed drop-shadow-sm">
                  A unified, intelligent dashboard that gives temple authorities complete visibility and control over crowd management, safety protocols, and operational efficiency.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">360°</div>
                  <div className="text-gray-600 text-sm">Complete Visibility</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">Real-time</div>
                  <div className="text-gray-600 text-sm">Live Monitoring</div>
                </div>
              </div>

              <DemoModal feature="Live Command Center Dashboard">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  <Play className="w-5 h-5 mr-2" />
                  View Live Dashboard
                </Button>
              </DemoModal>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-white to-emerald-50 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-900">Live Control Center</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>
                  
                  {/* Mini Dashboard Simulation */}
                  <div className="grid grid-cols-2 gap-4">
                    {realTimeMetrics.slice(0, 4).map((metric, index) => (
                      <div key={index} className="p-3 bg-white rounded-lg border">
                        <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                        <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Alert Simulation */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-800">All systems normal</span>
                      </div>
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-yellow-800">Moderate crowd in East Gate</span>
                      </div>
                      <Eye className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">System Status</span>
                      <Badge className="bg-white/20 text-white">Optimal</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Dashboard Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything temple authorities need in one integrated, intuitive interface designed for rapid decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alert System */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Alert System</h2>
            <p className="text-xl text-gray-600">
              AI-powered alerts categorized by priority for optimal response management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alertTypes.map((alert, index) => {
              const IconComponent = alert.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${alert.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">{alert.type}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{alert.description}</p>
                    <div className="space-y-2">
                      {alert.examples.map((example, idx) => (
                        <div key={idx} className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real-time Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Performance Metrics</h2>
            <p className="text-xl text-gray-600">
              Real-time insights into temple operations and crowd management effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realTimeMetrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-emerald-200">
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
                  <Badge className="bg-emerald-100 text-emerald-800">{metric.status}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Control Capabilities */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Control Capabilities</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Instant Response</h3>
                    <p className="text-gray-600">Deploy emergency protocols, redirect crowds, and coordinate resources with single-click actions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Multi-User Coordination</h3>
                    <p className="text-gray-600">Enable multiple operators with role-based access and real-time collaboration tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Customizable Interface</h3>
                    <p className="text-gray-600">Adapt the dashboard layout and priorities based on temple-specific needs and preferences.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white shadow-xl">
              <h3 className="font-bold text-gray-900 mb-6">Dashboard Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Data Processing Speed</span>
                    <span className="font-medium">&lt; 100ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Alert Response Time</span>
                    <span className="font-medium">&lt; 30 seconds</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">System Uptime</span>
                    <span className="font-medium">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-[99%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">User Satisfaction</span>
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Dashboard Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of our command center with this live interactive demonstration.
            </p>
          </div>
          <LiveDashboardDemo />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Experience Complete Control
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Transform your temple management with an intelligent command center that puts everything you need at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <DemoModal feature="Complete Command Center Experience">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Monitor className="w-5 h-5 mr-2" />
                  Live Demo
                </Button>
              </DemoModal>
              <DemoModal feature="Command Center Training Program">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                  <Settings className="w-5 h-5 mr-2" />
                  Schedule Training
                </Button>
              </DemoModal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}