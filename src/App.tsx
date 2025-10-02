import React, { useState } from 'react';
import exampleImage from 'figma:asset/562c43e56fce1bf9118c5c90b5665d12554478d7.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import DemoModal from './components/DemoModal';
import { Toaster } from './components/ui/sonner';
import { 
  Brain, 
  BarChart3, 
  Users, 
  Route, 
  Navigation, 
  Eye, 
  Phone, 
  HeadphonesIcon, 
  TrendingUp,
  Shield,
  Zap,
  Heart,
  MapPin,
  Calendar,
  Award,
  Target,
  Smartphone,
  Home,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Globe,
  CheckCircle,
  Activity,
  Play
} from 'lucide-react';

// 👇 CRITICAL CHANGE: IMPORTING THE IMAGE FILE FROM THE SAME DIRECTORY
import setuLogo from './setu.jpg'; 

// Import page components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import PredictiveModelPage from './components/features/PredictiveModelPage';
import CommandCenterPage from './components/features/CommandCenterPage';
import VolunteerPage from './components/features/VolunteerPage';
import PersonalizedExperiencePage from './components/features/PersonalizedExperiencePage';
import MultiModalNavigationPage from './components/features/MultiModalNavigationPage';
import VirtualDarshanPage from './components/features/VirtualDarshanPage';
import ZeroTechPage from './components/features/ZeroTechPage';
import AccessibleCommPage from './components/features/AccessibleCommPage';
import DataTriangulationPage from './components/features/DataTriangulationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    { id: 'predictive', title: 'Predictive & Proactive Model', icon: Brain },
    { id: 'command-center', title: 'Command Center Dashboard', icon: BarChart3 },
    { id: 'volunteer', title: 'Volunteer Engagement', icon: Users },
    { id: 'personalized', title: 'Personalized Experience', icon: Heart },
    { id: 'navigation', title: 'Multi-Modal Navigation', icon: Navigation },
    { id: 'virtual-darshan', title: 'Virtual Darshan', icon: Eye },
    { id: 'zero-tech', title: 'Zero-Tech Onboarding', icon: Phone },
    { id: 'accessible-comm', title: 'Accessible Communication', icon: HeadphonesIcon },
    { id: 'data-triangulation', title: 'Data Triangulation', icon: TrendingUp }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: CheckCircle }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FAQPage />;
      case 'predictive':
        return <PredictiveModelPage />;
      case 'command-center':
        return <CommandCenterPage />;
      case 'volunteer':
        return <VolunteerPage />;
      case 'personalized':
        return <PersonalizedExperiencePage />;
      case 'navigation':
        return <MultiModalNavigationPage />;
      case 'virtual-darshan':
        return <VirtualDarshanPage />;
      case 'zero-tech':
        return <ZeroTechPage />;
      case 'accessible-comm':
        return <AccessibleCommPage />;
      case 'data-triangulation':
        return <DataTriangulationPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* START: LOGO CHANGE FOR NAVIGATION BAR - USING IMPORT */}
              <img 
                src={setuLogo} // ⬅️ Corrected to use the imported variable
                alt="DarshanSetu Logo with Om and Dome"
                className="w-10 h-10 object-contain rounded-full"
              />
              {/* END: LOGO CHANGE FOR NAVIGATION BAR */}
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent hover:from-orange-700 hover:to-amber-700 transition-colors"
              >
                दर्शन सेतु
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}

              {/* Features Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-gray-50 transition-colors">
                  <span>Features</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setCurrentPage(feature.id)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors"
                      >
                        <feature.icon className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-gray-700">{feature.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <DemoModal feature="Quick Platform Demo">
                <Button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                  <Play className="w-4 h-4 mr-2" />
                  शुरू करें
                </Button>
              </DemoModal>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      currentPage === item.id
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
                
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <div className="px-3 py-2 text-sm font-medium text-gray-500">Features</div>
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => {
                        setCurrentPage(feature.id);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-6 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors"
                    >
                      <feature.icon className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-700">{feature.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderPage()}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* START: LOGO CHANGE FOR FOOTER - USING IMPORT */}
                <img 
                  src={setuLogo} // ⬅️ Corrected to use the imported variable
                  alt="DarshanSetu Logo with Om and Dome"
                  className="w-10 h-10 object-contain bg-white rounded-lg p-1"
                />
                {/* END: LOGO CHANGE FOR FOOTER */}
                <span className="text-xl font-semibold">दर्शन सेतु</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-2">
                आधुनिक तकनीक और प्राचीन परंपराओं का संयोजन। मंदिरों में भक्तों की सुरक्षा और आध्यात्मिक अनुभव को बेहतर बनाने के लिए AI-powered समाधान।
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Modern technology meets ancient traditions. AI-powered solutions to enhance devotee safety and spiritual experience in temples worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Core Features</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('predictive')} className="text-gray-400 hover:text-white transition-colors">Predictive Analytics</button></li>
                <li><button onClick={() => setCurrentPage('command-center')} className="text-gray-400 hover:text-white transition-colors">Command Dashboard</button></li>
                <li><button onClick={() => setCurrentPage('volunteer')} className="text-gray-400 hover:text-white transition-colors">Volunteer Management</button></li>
                <li><button onClick={() => setCurrentPage('personalized')} className="text-gray-400 hover:text-white transition-colors">Personalized Experience</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('navigation')} className="text-gray-400 hover:text-white transition-colors">Smart Navigation</button></li>
                <li><button onClick={() => setCurrentPage('virtual-darshan')} className="text-gray-400 hover:text-white transition-colors">Virtual Darshan</button></li>
                <li><button onClick={() => setCurrentPage('zero-tech')} className="text-gray-400 hover:text-white transition-colors">Zero-Tech Access</button></li>
                <li><button onClick={() => setCurrentPage('accessible-comm')} className="text-gray-400 hover:text-white transition-colors">Accessible Communication</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">सहायता और संपर्क | Support & Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <div>
                    <div>support@darshansetu.ai</div>
                    <div className="text-xs text-gray-500">ईमेल सहायता</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <div>
                    <div>+91 1800-DARSHAN</div>
                    <div className="text-xs text-gray-500">टोल-फ्री नंबर</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <div>
                    <div>24/7 Emergency Support</div>
                    <div className="text-xs text-gray-500">आपातकालीन सेवा</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <div>
                    <div>Mumbai, India</div>
                    <div className="text-xs text-gray-500">मुख्यालय</div>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button 
                  onClick={() => setCurrentPage('faq')}
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  FAQ देखें | View FAQ →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p className="mb-1">&copy; 2025 दर्शन सेतु. आधुनिक तकनीक से पवित्र स्थानों की सुरक्षा।</p>
                <p className="text-sm text-gray-500">&copy; 2025 Darshan Setu. Protecting sacred spaces through modern technology.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">
                  हमारे बारे में | About Us
                </button>
                <button className="hover:text-white transition-colors">
                  गोपनीयता | Privacy
                </button>
                <button className="hover:text-white transition-colors">
                  नियम | Terms
                </button>
                <button onClick={() => setCurrentPage('faq')} className="hover:text-white transition-colors">
                  FAQ | सहायता
                </button>
              </div>
            </div>
            
            {/* Sacred Blessing */}
            <div className="text-center mt-6 pt-4 border-t border-gray-800">
              <div className="text-orange-400 text-sm italic">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" - May all be happy, may all be healthy
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}