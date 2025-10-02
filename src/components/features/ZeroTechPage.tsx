import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Phone, PhoneCall, Users, Globe, Smartphone, HeadphonesIcon, PhoneIncoming, Waves } from 'lucide-react';

export default function ZeroTechPage() {
  return (
    <div className="py-8">
      {/* Hero Section with Brihadeeswarar Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1686310894901-d326b8722c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmloYWRlZXN3YXJhciUyMHRlbXBsZSUyMHRoYW5qYXZ1cnxlbnwxfHx8fDE3NTkzOTEzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="बृहदीश्वर मंदिर ज़ीरो-टेक पृष्ठभूमि"
              className="w-full h-full object-cover temple-video"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="flex justify-center mb-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-4 text-amber-200">
                <Phone className="w-8 h-8 divine-pulse" />
                <span className="text-2xl font-bold">शून्य तकनीक पहुंच</span>
                <PhoneIncoming className="w-8 h-8 divine-pulse" />
              </div>
            </div>
          </div>
          
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <Phone className="w-5 h-5 mr-2" />
            📞 शून्य-तकनीक पहुंच | Zero-Tech Access
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              कोई एप्प नहीं, कोई इंटरनेट नहीं
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              No App, No Internet, No Problem
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            सरल मिस्ड कॉल या टोल-फ्री नंबर पंजीकरण यह सुनिश्चित करता है कि हर तीर्थयात्री तकनीकी पहुंच की परवाह किए बिना भीड़ प्रबंधन में भाग ले सके।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Simple missed call or toll-free number registration ensures every pilgrim can participate in crowd management, regardless of technology access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
              <PhoneCall className="w-5 h-5 mr-2" />
              +91 1800-DARSHAN कॉल करें
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm transform hover:scale-105 transition-all">
              <Waves className="w-5 h-5 mr-2" />
              मिस्ड कॉल दें | Missed Call
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Inclusive Technology for All</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Missed Call Registration</h3>
              <p className="text-gray-600 text-center">One missed call automatically registers your phone number and adds you to the crowd counting system with voice-guided setup.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Multilingual Support</h3>
              <p className="text-gray-600 text-center">IVR system supports regional languages with voice navigation and location-based crowd tracking for diverse communities.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Feature Phone Compatible</h3>
              <p className="text-gray-600 text-center">Works with basic feature phones and landlines, ensuring no pilgrim is left out of the safety and information system.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}