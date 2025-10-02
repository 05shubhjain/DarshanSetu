import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Heart, User, Baby, Accessibility, Route, Smartphone, Flower2 } from 'lucide-react';

export default function PersonalizedExperiencePage() {
  return (
    <div className="py-8">
      {/* Hero Section with Hampi Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1637644812648-7400da1f7336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1waSUyMHRlbXBsZSUyMHJ1aW5zJTIwc3VucmlzZXxlbnwxfHx8fDE3NTkzOTEzODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="हम्पी मंदिर व्यक्तिगत अनुभव पृष्ठभूमि"
              className="w-full h-full object-cover sacred-float"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <Heart className="w-5 h-5 mr-2" />
            💖 व्यक्तिगत आध्यात्मिक यात्रा | Personalized Experience
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              अति-व्यक्तिगत
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              Hyper-Personalized Pilgrim Journey
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            हर भक्त की आध्यात्मिक यात्रा अनोखी है। हमारा AI व्यक्तिगत आवश्यकताओं, प्राथमिकताओं और पहुंच आवश्यकताओं के आधार पर व्यक्तिगत अनुभव बनाता है।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Every devotee's spiritual journey is unique. Our AI creates personalized experiences based on individual needs, preferences, and accessibility requirements.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
            <Smartphone className="w-5 h-5 mr-2" />
            मेरी यात्रा को व्यक्तिगत बनाएं | Personalize My Journey
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Tailored for Every Pilgrim</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <User className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Elderly Pilgrims</h3>
              <p className="text-gray-600 text-center">Priority queues, wheelchair assistance, rest area guidance, and shortest accessible routes to ensure comfortable darshan.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Baby className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Families with Children</h3>
              <p className="text-gray-600 text-center">Child-friendly routes, nursing room locations, shorter queue options, and interactive spiritual content for young minds.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Accessibility className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Accessibility Needs</h3>
              <p className="text-gray-600 text-center">Wheelchair-accessible paths, special assistance booking, audio guidance, and priority access for seamless temple visits.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}