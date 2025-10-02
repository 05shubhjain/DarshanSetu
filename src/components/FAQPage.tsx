import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ContactForm from './ContactForm';
import DemoModal from './DemoModal';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Brain, 
  Users, 
  Phone, 
  Eye, 
  Navigation,
  Heart,
  BarChart3,
  TrendingUp,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  MessageSquare,
  Star,
  ThumbsUp,
  Clock,
  BookOpen,
  Play
} from 'lucide-react';

export default function FAQPage() {
  const [openSection, setOpenSection] = useState<string | null>('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [helpfulAnswers, setHelpfulAnswers] = useState<{[key: string]: boolean}>({});

  const faqSections = [
    {
      id: 'general',
      title: 'General Information',
      icon: HelpCircle,
      color: 'bg-blue-500',
      questions: [
        {
          question: "What is DarshanSetu and how does it work?",
          answer: "DarshanSetu is an AI-powered crowd management platform designed specifically for temples and sacred spaces. It uses predictive analytics, real-time monitoring, and intelligent routing to prevent crowd incidents while enhancing the spiritual experience. Our system analyzes data from multiple sources including mobile apps, CCTV cameras, and even simple phone calls to predict and manage crowd flow."
        },
        {
          question: "How does DarshanSetu respect the sanctity of temples?",
          answer: "We've designed our technology with deep respect for spiritual traditions. Our solutions are non-intrusive, culturally sensitive, and enhance rather than disrupt religious practices. We work closely with temple authorities and religious leaders to ensure our technology aligns with sacred protocols and traditions."
        },
        {
          question: "What makes DarshanSetu different from other crowd management systems?",
          answer: "Unlike generic crowd management systems, DarshanSetu is purpose-built for sacred spaces. We understand the unique challenges of temple management - from handling religious festivals to managing diverse pilgrim needs. Our system combines advanced AI with cultural sensitivity, offering features like virtual darshan, zero-tech accessibility, and personalized spiritual experiences."
        },
        {
          question: "Is DarshanSetu suitable for small temples?",
          answer: "Yes, absolutely! Our platform is scalable and designed to serve temples of all sizes. We offer different packages ranging from basic crowd monitoring for smaller temples to comprehensive management systems for large pilgrimage sites. Our zero-tech features ensure even temples with limited technology infrastructure can benefit."
        }
      ]
    },
    {
      id: 'predictive',
      title: 'Predictive Analytics',
      icon: Brain,
      color: 'bg-purple-500',
      questions: [
        {
          question: "How accurate are your crowd predictions?",
          answer: "Our AI system achieves 95% accuracy in crowd flow prediction by analyzing historical data, weather patterns, religious calendars, and real-time indicators. The system learns continuously, improving its predictions over time for each specific temple and its unique patterns."
        },
        {
          question: "How far in advance can you predict crowd surges?",
          answer: "Our system can predict crowd patterns from several hours to multiple days in advance. For major festivals, we can provide accurate crowd forecasts up to a week ahead, allowing temple authorities to prepare adequate resources and safety measures."
        },
        {
          question: "What data sources do you use for predictions?",
          answer: "We use three primary data sources: smartphone app data from tech-savvy pilgrims, CCTV and IoT sensor data for real-time crowd detection, and toll-free phone call data to capture offline pilgrims. This triangulation ensures comprehensive crowd assessment across all demographics."
        }
      ]
    },
    {
      id: 'dashboard',
      title: 'Command Center Dashboard',
      icon: BarChart3,
      color: 'bg-emerald-500',
      questions: [
        {
          question: "What features are included in the Temple Command Center?",
          answer: "The dashboard provides live crowd heatmaps, real-time traffic monitoring, AI-generated safety alerts, virtual queue management, volunteer coordination, emergency protocol activation, and predictive analytics. All information is presented in an intuitive, single-screen interface."
        },
        {
          question: "How do temple authorities receive emergency alerts?",
          answer: "Emergency alerts are sent instantly through multiple channels: dashboard notifications, SMS alerts, phone calls, and mobile app notifications. The system automatically categorizes alert severity and can trigger pre-defined emergency protocols, including notifying local authorities if needed."
        },
        {
          question: "Can multiple people access the dashboard simultaneously?",
          answer: "Yes, the dashboard supports multiple users with different access levels. Temple administrators, security personnel, volunteer coordinators, and emergency responders can all have customized dashboard views with appropriate permissions and relevant information."
        }
      ]
    },
    {
      id: 'volunteer',
      title: 'Volunteer Management',
      icon: Users,
      color: 'bg-orange-500',
      questions: [
        {
          question: "How does the volunteer gamification system work?",
          answer: "Volunteers can sign up through our app, receive task assignments based on their skills and location, earn points for completed tasks, unlock achievement badges, and gain recognition on leaderboards. This system motivates community participation while ensuring effective crowd management."
        },
        {
          question: "What types of tasks are assigned to volunteers?",
          answer: "Tasks include guiding pilgrims to less crowded areas, assisting elderly or disabled devotees, providing information about facilities, helping with queue management, reporting safety concerns, and supporting emergency evacuations when needed."
        },
        {
          question: "How do you ensure volunteer safety and training?",
          answer: "All volunteers complete mandatory safety training modules through our app. They receive digital certificates, safety guidelines, emergency procedures, and direct communication channels with temple security. Volunteers are never assigned dangerous tasks and always work under supervision."
        }
      ]
    },
    {
      id: 'personalized',
      title: 'Personalized Experience',
      icon: Heart,
      color: 'bg-pink-500',
      questions: [
        {
          question: "How does the app personalize the pilgrimage experience?",
          answer: "Based on user profiles (age, mobility, group composition, spiritual preferences), the app provides customized recommendations: priority queues for elderly pilgrims, family-friendly routes, accessibility features, personalized spiritual content, and optimized darshan timing suggestions."
        },
        {
          question: "What accessibility features are available?",
          answer: "We offer wheelchair-accessible route planning, priority queue access for elderly and disabled pilgrims, audio guidance for visually impaired devotees, sign language interpretation scheduling, and special assistance booking for those with mobility challenges."
        },
        {
          question: "How do you handle families with children?",
          answer: "Family profiles receive child-friendly route suggestions, information about nursing rooms and rest areas, shorter queue options, interactive spiritual content for children, and alerts about family-oriented temple programs and activities."
        }
      ]
    },
    {
      id: 'navigation',
      title: 'Smart Navigation',
      icon: Navigation,
      color: 'bg-cyan-500',
      questions: [
        {
          question: "How does multi-modal navigation work?",
          answer: "Our system integrates with traffic management and parking systems to guide pilgrims from home to temple. It provides real-time parking availability, suggests optimal arrival times, coordinates shuttle services, and offers walking navigation from parking to temple gates."
        },
        {
          question: "Does the system help with traffic congestion around temples?",
          answer: "Yes, we work with local traffic authorities to optimize traffic flow. The system suggests alternative routes during peak times, coordinates with parking facilities to distribute vehicle load, and provides real-time traffic updates to prevent congestion on approach roads."
        }
      ]
    },
    {
      id: 'virtual',
      title: 'Virtual Darshan',
      icon: Eye,
      color: 'bg-violet-500',
      questions: [
        {
          question: "What is Virtual Darshan and how does it work?",
          answer: "Virtual Darshan provides high-definition live streaming of the deity during peak hours when physical darshan may not be possible. The experience includes interactive elements like virtual prayers, puja booking for later times, and personalized spiritual content about the deity."
        },
        {
          question: "Can I book pujas through the virtual darshan system?",
          answer: "Yes, during virtual darshan, you can book specific pujas for later performance by temple priests. You'll receive confirmation, timing details, and can even watch the puja being performed live through our streaming system."
        },
        {
          question: "Is virtual darshan available 24/7?",
          answer: "Virtual darshan availability depends on each temple's schedule and religious protocols. Most temples offer virtual darshan during regular darshan hours and special occasions. The app will show real-time availability and upcoming virtual darshan schedules."
        }
      ]
    },
    {
      id: 'zerotech',
      title: 'Zero-Tech Access',
      icon: Phone,
      color: 'bg-green-500',
      questions: [
        {
          question: "How does zero-tech onboarding work for feature phone users?",
          answer: "Pilgrims simply make a missed call or call our toll-free number. The system automatically registers their phone number and provides voice-guided instructions to enter their location. This one-time registration adds them to our crowd counting system without needing smartphones or internet."
        },
        {
          question: "What information can I get through the toll-free number?",
          answer: "The IVR system provides current darshan wait times, temple timings, emergency information, weather updates, festival schedules, and facility information. In emergencies, callers can be directly connected to temple security or local authorities."
        },
        {
          question: "Is the toll-free service available in local languages?",
          answer: "Yes, our IVR system supports multiple regional languages. Callers can select their preferred language and receive all information in that language, ensuring accessibility for pilgrims from diverse linguistic backgrounds."
        }
      ]
    },
    {
      id: 'data',
      title: 'Data & Privacy',
      icon: TrendingUp,
      color: 'bg-amber-500',
      questions: [
        {
          question: "How do you ensure data privacy and security?",
          answer: "We follow strict data protection protocols with end-to-end encryption, minimal data collection, anonymized analytics, secure cloud infrastructure, and compliance with data protection regulations. Personal information is never shared with third parties without explicit consent."
        },
        {
          question: "What data do you collect and why?",
          answer: "We collect only essential data: location for crowd counting, basic demographics for personalization, phone numbers for communication, and usage patterns for service improvement. All data is anonymized for analytics and used solely to enhance safety and spiritual experience."
        },
        {
          question: "How accurate is your data triangulation method?",
          answer: "Our three-source data triangulation (app data, CCTV/sensors, phone calls) provides 95%+ accuracy in crowd estimation. This multi-source approach ensures we capture both tech-savvy and traditional pilgrims, giving comprehensive crowd intelligence."
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const markAsHelpful = (questionIndex: string) => {
    setHelpfulAnswers(prev => ({ ...prev, [questionIndex]: true }));
  };

  const filteredSections = faqSections.filter(section => {
    if (selectedCategory !== 'all' && section.id !== selectedCategory) return false;
    if (searchTerm.trim() === '') return true;
    
    return section.questions.some(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 mb-6">Frequently Asked Questions</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-gray-900">to Know About DarshanSetu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive answers about our AI-powered temple management platform, from technical details to spiritual considerations.
          </p>
          
          {/* Search and Filter */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                All Categories
              </Button>
              {faqSections.map((section) => (
                <Button
                  key={section.id}
                  variant={selectedCategory === section.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(section.id)}
                  className="flex items-center space-x-2"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Temples Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50M+</div>
              <div className="text-gray-600">Pilgrims Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSections.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600 mb-4">
                No questions match your search criteria. Try different keywords or browse all categories.
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredSections.map((section) => {
                const IconComponent = section.icon;
                const isOpen = openSection === section.id;
                
                return (
                  <Card key={section.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                            <p className="text-gray-600 text-sm">{section.questions.length} questions</p>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100">
                      {section.questions.map((faq, index) => (
                        <div key={index} className="p-6 border-b border-gray-50 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <CheckCircle className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                              <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                              
                              {/* Interactive feedback */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <div className="text-sm text-gray-500">Was this helpful?</div>
                                <div className="flex items-center space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => markAsHelpful(`${section.id}-${index}`)}
                                    className={`flex items-center space-x-1 ${helpfulAnswers[`${section.id}-${index}`] ? 'bg-green-50 border-green-200 text-green-700' : ''}`}
                                  >
                                    <ThumbsUp className="w-3 h-3" />
                                    <span>Yes</span>
                                    {helpfulAnswers[`${section.id}-${index}`] && <CheckCircle className="w-3 h-3" />}
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => setShowContactForm(true)}
                                    className="flex items-center space-x-1"
                                  >
                                    <MessageSquare className="w-3 h-3" />
                                    <span>No</span>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our dedicated support team is available 24/7 to help you understand how DarshanSetu can transform your temple's crowd management.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <DemoModal feature="FAQ Demo & Support">
                <Button size="lg" variant="outline" className="border-2 border-indigo-200 hover:bg-indigo-50">
                  <Play className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </DemoModal>
            </div>
            
            {showContactForm && (
              <div className="mt-12 max-w-4xl mx-auto">
                <ContactForm />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}