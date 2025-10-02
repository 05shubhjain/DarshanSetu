import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { HeadphonesIcon, Phone, Clock, AlertTriangle, Globe, Smartphone, Volume2, Languages } from 'lucide-react';

export default function AccessibleCommPage() {
  return (
    <div className="py-8">
      {/* Hero Section with Varanasi Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1679284409993-ab65b7ec4421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMHRlbXBsZSUyMGdhbmdlcyUyMGdoYXR8ZW58MXx8fHwxNzU5MzkxMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="वाराणसी मंदिर सुलभ संचार पृष्ठभूमि"
              className="w-full h-full object-cover sacred-float"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="flex justify-center mb-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-4 text-amber-200">
                <HeadphonesIcon className="w-8 h-8 divine-pulse" />
                <span className="text-2xl font-bold">24/7 संचार सेवा</span>
                <Volume2 className="w-8 h-8 divine-pulse" />
              </div>
            </div>
          </div>
          
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <HeadphonesIcon className="w-5 h-5 mr-2" />
            🎧 सुलभ संचार | 24/7 Communication
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              सुलभ संचार
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              Accessible Communication For Every Pilgrim
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            सभी तीर्थयात्रियों के लिए वास्तविक समय की जानकारी, आपातकालीन सहायता और बहुभाषी संचार प्रदान करने वाला 24/7 टोल-फ्री समर्थन।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            24/7 toll-free support providing real-time information, emergency assistance, and multilingual communication for all pilgrims.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              अभी सहायता प्राप्त करें | Access Support Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm transform hover:scale-105 transition-all">
              <Languages className="w-5 h-5 mr-2" />
              भाषा चुनें | Choose Language
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Comprehensive Communication Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Real-time Wait Times</h3>
              <p className="text-gray-600 text-center">IVR system provides current darshan wait times, temple schedules, and optimal visit timing in your preferred language.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Emergency Information</h3>
              <p className="text-gray-600 text-center">Instant emergency alerts, medical assistance coordination, and direct connection to temple security and local authorities.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Multilingual IVR</h3>
              <p className="text-gray-600 text-center">Support in multiple regional languages with voice navigation, ensuring accessibility for diverse pilgrim communities.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}