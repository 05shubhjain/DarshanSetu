import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Navigation, Car, Bus, MapPin, Route, Smartphone, Compass, Signpost } from 'lucide-react';

export default function MultiModalNavigationPage() {
  return (
    <div className="py-8">
      {/* Hero Section with Konark Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1725046908999-195118679132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25hcmslMjB0ZW1wbGUlMjBjaGFyaW90JTIwd2hlZWxzfGVufDF8fHx8MTc1OTM5MTM5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="कोणार्क मंदिर नेविगेशन पृष्ठभूमि"
              className="w-full h-full object-cover temple-video"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="flex justify-center mb-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-4 text-amber-200">
                <Navigation className="w-8 h-8" />
                <span className="text-2xl font-bold">स्मार्ट नेविगेशन</span>
                <Compass className="w-8 h-8 animate-spin-slow" />
              </div>
            </div>
          </div>
          
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <Navigation className="w-5 h-5 mr-2" />
            🧭 बहु-मॉडल नेविगेशन | Smart Navigation
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              बहु-मॉडल
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              Multi-Modal Navigation System
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            एकीकृत ट्रैफिक प्रबंधन, पार्किंग समन्वय और अनुकूलित मार्गीकरण के साथ घर से मंदिर तक निर्बाध यात्रा योजना।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Seamless journey planning from home to temple with integrated traffic management, parking coordination, and optimized routing.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
            <Route className="w-5 h-5 mr-2" />
            मेरी यात्रा की योजना बनाएं | Plan My Journey
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Complete Journey Integration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Car className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Smart Parking</h3>
              <p className="text-gray-600 text-center">Real-time parking availability, reservation system, and guided navigation to optimal parking spots near temple entrances.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Bus className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Shuttle Coordination</h3>
              <p className="text-gray-600 text-center">Integrated shuttle timing, route optimization, and capacity management for seamless temple access.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Traffic Management</h3>
              <p className="text-gray-600 text-center">Dynamic route suggestions, congestion avoidance, and coordination with local traffic authorities.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}