import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import ContactForm from './ContactForm';
import DemoModal from './DemoModal';
import { 
  Shield, 
  Target, 
  Heart, 
  Users, 
  Globe, 
  Award,
  Lightbulb,
  Eye,
  Handshake,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Building,
  TrendingUp,
  Activity
} from 'lucide-react';

export default function AboutPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const values = [
    {
      icon: Heart,
      title: "Spiritual Reverence",
      description: "We deeply respect the sanctity of sacred spaces and ensure our technology enhances rather than disrupts spiritual experiences."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Pilgrim safety is our paramount concern. Every feature is designed with crowd safety and emergency preparedness in mind."
    },
    {
      icon: Users,
      title: "Inclusive Access",
      description: "Our solutions work for everyone - from tech-savvy youth to elderly pilgrims who prefer traditional communication methods."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "We harness cutting-edge AI and technology to solve real-world problems in sacred space management."
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      description: "Former IIT professor with 15+ years in AI research and deep understanding of temple management challenges.",
      expertise: "AI/ML, Temple Operations"
    },
    {
      name: "Arjun Patel",
      role: "CTO",
      description: "Ex-Google engineer specializing in scalable systems and real-time analytics for large-scale crowd management.",
      expertise: "System Architecture, Real-time Analytics"
    },
    {
      name: "Kavya Reddy",
      role: "Head of Spiritual Technology",
      description: "Temple administration expert ensuring our technology respects traditional practices and cultural sensitivities.",
      expertise: "Temple Operations, Cultural Integration"
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Safety & Emergency",
      description: "Former disaster management official with expertise in crowd psychology and emergency response protocols.",
      expertise: "Emergency Management, Crowd Psychology"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "DarshanSetu founded with mission to revolutionize temple crowd management through AI."
    },
    {
      year: "2021",
      title: "First Deployment",
      description: "Successful pilot at 10 major temples across India, preventing 15+ potential crowd incidents."
    },
    {
      year: "2022",
      title: "AI Breakthrough",
      description: "Achieved 95% prediction accuracy in crowd flow forecasting and stampede risk assessment."
    },
    {
      year: "2023",
      title: "National Recognition",
      description: "Winner of National Technology Award for Innovation in Public Safety and Cultural Preservation."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 500+ temples worldwide, serving 50M+ pilgrims annually."
    },
    {
      year: "2025",
      title: "Next Generation",
      description: "Launching advanced Virtual Darshan and Zero-Tech accessibility features."
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2">About DarshanSetu</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Bridging Sacred Traditions
              </span>
              <br />
              <span className="text-gray-900">with Smart Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, DarshanSetu emerged from a profound understanding that technology can enhance spiritual experiences while preserving the sanctity of sacred spaces. We're not just building software—we're crafting solutions that respect tradition while embracing innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To make sacred spaces safer, more accessible, and spiritually enriching for millions of devotees worldwide through intelligent crowd management and respectful technology integration.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-8 h-8 text-purple-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A world where every pilgrim can experience divine connection safely and seamlessly, where technology serves spirituality, and where crowd management enhances rather than hinders the sacred journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                    <div className="text-gray-600">Temples Protected</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50M+</div>
                    <div className="text-gray-600">Lives Impacted</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
                    <div className="text-gray-600">Safety Improvement</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experts in technology, spirituality, and public safety</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-indigo-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.description}</p>
                <Badge variant="outline" className="text-xs">{member.expertise}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in revolutionizing sacred space management</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 to-purple-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-indigo-100 text-indigo-800">{milestone.year}</Badge>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Acknowledged for innovation in public safety and cultural preservation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">National Technology Award 2023</h3>
              <p className="text-gray-600 text-sm">Innovation in Public Safety Technology</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Cultural Preservation Excellence</h3>
              <p className="text-gray-600 text-sm">UNESCO Digital Heritage Initiative</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Global Impact Award 2024</h3>
              <p className="text-gray-600 text-sm">World Economic Forum Technology Pioneers</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your temple's crowd management? Let's discuss how DarshanSetu can help.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setShowContactForm(true)}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-600 text-sm mb-4">Fill out our detailed contact form and we'll respond within 24 hours.</p>
              <Button variant="outline" className="w-full">
                Contact Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <DemoModal feature="Complete Platform Walkthrough">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Schedule Demo</h3>
                <p className="text-gray-600 text-sm mb-4">Book a personalized demonstration of all DarshanSetu features.</p>
                <Button variant="outline" className="w-full">
                  Book Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </DemoModal>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Emergency Support</h3>
              <p className="text-gray-600 text-sm mb-4">24/7 emergency support line for urgent temple crowd management needs.</p>
              <Button variant="outline" className="w-full">
                Call Now: +91 1800-DARSHAN
              </Button>
            </Card>
          </div>

          {showContactForm && (
            <div className="mt-12">
              <ContactForm />
            </div>
          )}
        </div>
      </section>

      {/* Partnership & Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation & Support</h2>
            <p className="text-xl text-gray-600">From planning to deployment, we're with you every step</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Assessment & Planning</h3>
                  <p className="text-gray-600">Comprehensive analysis of your temple's unique needs and crowd patterns.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Custom Configuration</h3>
                  <p className="text-gray-600">Tailored setup respecting your temple's traditions and operational requirements.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Training & Deployment</h3>
                  <p className="text-gray-600">Comprehensive staff training and gradual system deployment with 24/7 support.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Ongoing Optimization</h3>
                  <p className="text-gray-600">Continuous monitoring, updates, and optimization based on real-world data.</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
              <h3 className="font-bold text-gray-900 mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Week 1-2: Assessment</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Week 3-4: Configuration</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Week 5-6: Training</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Week 7-8: Deployment</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Average Go-Live</span>
                  <span className="text-2xl font-bold text-indigo-600">8 weeks</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Partner with us to make sacred spaces safer and more accessible for millions of devotees worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <DemoModal feature="Partnership Discussion">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Handshake className="w-5 h-5 mr-2" />
                  Partner with Us
                </Button>
              </DemoModal>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setShowContactForm(true)}
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Activity className="w-5 h-5 mr-2" />
                Contact Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}