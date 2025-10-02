import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Users, Award, Target, Star, Trophy, Heart, Zap, Flower2, Sparkles } from 'lucide-react';

export default function VolunteerPage() {
  return (
    <div className="py-8">
      {/* Hero Section with Jagannath Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWdhbm5hdGglMjB0ZW1wbGUlMjBwdXJpJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzU5MzkxMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="जगन्नाथ मंदिर स्वयंसेवक पृष्ठभूमि"
              className="w-full h-full object-cover divine-pulse"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="flex justify-center mb-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-4 text-amber-200">
                <Users className="w-8 h-8" />
                <span className="text-2xl font-bold">स्वयंसेवक सेवा</span>
                <Heart className="w-8 h-8 animate-pulse" />
              </div>
            </div>
          </div>
          
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <Users className="w-5 h-5 mr-2" />
            🤝 स्वयंसेवक सहभागिता | Volunteer Engagement
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              गेमिफाइड स्वयंसेवक
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              Gamified Volunteer Management System
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            सामुदायिक सेवा को हमारे बुद्धिमान स्वयंसेवक समन्वय मंच के साथ एक आकर्षक, पुरस्कृत अनुभव में बदलें।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Transform community service into an engaging, rewarding experience with our intelligent volunteer coordination platform.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
            <Heart className="w-5 h-5 mr-2" />
            स्वयंसेवक के रूप में जुड़ें | Join as Volunteer
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              स्वयंसेवक गेमिफिकेशन कैसे काम करता है | How Volunteer Gamification Works
            </h2>
            <div className="flex justify-center">
              <div className="flex items-center space-x-4 text-orange-600">
                <Sparkles className="w-8 h-8" />
                <span className="text-lg font-medium">सेवा से सम्मान तक</span>
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border border-orange-200">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4">कार्य आवंटन | Task Assignment</h3>
              <p className="text-gray-600 text-sm">इष्टतम भीड़ प्रबंधन के लिए कौशल, स्थान और उपलब्धता के आधार पर AI-संचालित कार्य वितरण। AI-powered task distribution based on skills, location, and availability for optimal crowd management.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4">Points & Badges</h3>
              <p className="text-gray-600">Earn points for completed tasks, unlock achievement badges, and gain recognition for community service.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4">Leaderboards</h3>
              <p className="text-gray-600">Friendly competition with local and global leaderboards, seasonal challenges, and special recognition.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}