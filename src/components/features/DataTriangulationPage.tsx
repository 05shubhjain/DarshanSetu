import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { TrendingUp, Smartphone, Camera, Phone, BarChart3, Target, Database, Triangle } from 'lucide-react';

export default function DataTriangulationPage() {
  return (
    <div className="py-8">
      {/* Hero Section with Akshardham Temple Background */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Temple Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-amber-900/30 to-yellow-900/40 z-10"></div>
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1741358706805-a5935a200a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxha3NoYXJkaGFtJTIwdGVtcGxlJTIwZGVsaGklMjBuaWdodHxlbnwxfHx8fDE3NTkzOTEzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="अक्षरधाम मंदिर डेटा त्रिकोणीकरण पृष्ठभूमि"
              className="w-full h-full object-cover temple-video"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="flex justify-center mb-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-4 text-amber-200">
                <TrendingUp className="w-8 h-8 divine-pulse" />
                <span className="text-2xl font-bold">डेटा बुद्धिमत्ता</span>
                <Database className="w-8 h-8 divine-pulse" />
              </div>
            </div>
          </div>
          
          <Badge className="bg-orange-100/90 text-orange-800 px-6 py-3 text-lg backdrop-blur-sm mb-6">
            <TrendingUp className="w-5 h-5 mr-2" />
            📊 डेटा त्रिकोणीकरण | Data Intelligence
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              त्रिपल-स्रोत
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2 block">
              Triple-Source Data Accuracy
            </span>
          </h1>
          
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-4 drop-shadow-md">
            भीड़ के प्रवाह की भविष्यवाणी और प्रबंधन में अभूतपूर्व सटीकता के लिए स्मार्टफोन डेटा, CCTV विश्लेषिकी और टोल-फ्री कॉल ट्रैकिंग का संयोजन।
          </p>
          
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Combining smartphone data, CCTV analytics, and toll-free call tracking for unprecedented accuracy in crowd flow prediction and management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
              <BarChart3 className="w-5 h-5 mr-2" />
              विश्लेषिकी देखें | View Analytics
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm transform hover:scale-105 transition-all">
              <Triangle className="w-5 h-5 mr-2" />
              डेटा स्रोत | Data Sources
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Three Powerful Data Sources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Smartphone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">App Data Analytics</h3>
              <p className="text-gray-600 text-center">Real-time location and movement data from tech-savvy pilgrims using smartphones and our mobile application.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Camera className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">CCTV & IoT Sensors</h3>
              <p className="text-gray-600 text-center">Computer vision analysis of camera feeds and IoT sensor data for precise crowd density and movement tracking.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-4 text-center">Toll-Free Call Data</h3>
              <p className="text-gray-600 text-center">Voice call analytics and registration data capturing offline pilgrims for comprehensive crowd assessment.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}