import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Eye, Video, Heart, Calendar, Play, Smartphone, Flower2, Sun } from 'lucide-react';

export default function VirtualDarshanPage() {
  return (
    <div className="py-8">
      {/* Hero Section with Tirupati Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1585438211210-e12e1f4b469e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJ1cGF0aSUyMHRlbXBsZSUyMGdvbGRlbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTkzOTEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="तिरुपति मंदिर आभासी दर्शन पृष्ठभूमि"
              className="w-full h-full object-cover divine-pulse"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="flex justify-center mb-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-4 text-amber-200">
                <Eye className="w-8 h-8" />
                <span className="text-2xl font-bold">आभासी दर्शन</span>
                <Eye className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <Eye className="w-5 h-5 mr-2" />
            👁️ आभासी दर्शन अनुभव | Virtual Darshan Experience
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              दिव्य संयोजन
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              Divine Connection Beyond Physical Presence
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            इंटरैक्टिव आध्यात्मिक तत्वों के साथ उच्च-परिभाषा आभासी दर्शन के माध्यम से दिव्यता का अनुभव करें, दूरी से भी पवित्र संबंध बनाए रखें।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Experience the divine through high-definition virtual darshan with interactive spiritual elements, maintaining sacred connection even from a distance.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
            <Play className="w-5 h-5 mr-2" />
            आभासी दर्शन प्रारंभ करें | Start Virtual Darshan
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              गहन आध्यात्मिक अनुभव | Immersive Spiritual Experience
            </h2>
            <div className="flex justify-center">
              <div className="flex items-center space-x-4 text-orange-600">
                <Flower2 className="w-8 h-8" />
                <span className="text-lg font-medium">हर दर्शन, एक दिव्य अनुभव</span>
                <Flower2 className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border border-orange-200">
              <Video className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">HD लाइव स्ट्रीमिंग | HD Live Streaming</h3>
              <p className="text-gray-600 text-center text-sm">देवता की क्रिस्टल-स्पष्ट, वास्तविक समय वीडियो स्ट्रीम, कई कैमरा कोणों और इष्टतम देखने के लिए ज़ूम क्षमताओं के साथ। Crystal-clear, real-time video streams of the deity with multiple camera angles and zoom capabilities for optimal viewing.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border border-orange-200">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">इंटरैक्टिव प्रार्थना | Interactive Prayers</h3>
              <p className="text-gray-600 text-center text-sm">आभासी पेशकश विकल्प, प्रार्थना अनुरोध, और अनुष्ठानों में डिजिटल भागीदारी के साथ व्यक्तिगत आध्यात्मिक सामग्री। Virtual offering options, prayer requests, and personalized spiritual content with digital participation in rituals.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border border-orange-200">
              <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">पूजा बुकिंग | Puja Booking</h3>
              <p className="text-gray-600 text-center text-sm">मंदिर के पुजारियों द्वारा बाद में प्रदर्शन के लिए विशिष्ट पूजा का शेड्यूल करें, लाइव देखने और व्यक्तिगत आशीर्वाद वितरण के साथ। Schedule specific pujas for later performance by temple priests with live viewing and personalized blessing delivery.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}