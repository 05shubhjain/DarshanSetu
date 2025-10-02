import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Progress } from './ui/progress';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Info, 
  CheckCircle,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react';

interface InteractiveFeatureCardProps {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  demoData?: any[];
  onNavigate: (page: string) => void;
}

export default function InteractiveFeatureCard({
  id,
  icon: IconComponent,
  title,
  description,
  color,
  metrics,
  demoData = [],
  onNavigate
}: InteractiveFeatureCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const startDemo = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoData.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const stopDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const demoSteps = demoData.length > 0 ? demoData : [
    { step: 1, action: "Data Collection", description: "Gathering real-time inputs", progress: 25 },
    { step: 2, action: "AI Analysis", description: "Processing patterns", progress: 50 },
    { step: 3, action: "Prediction", description: "Generating insights", progress: 75 },
    { step: 4, action: "Action", description: "Implementing solutions", progress: 100 }
  ];

  return (
    <>
      <Card className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-indigo-200 relative overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between">
            <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Info className="w-4 h-4" />
              </Button>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            </div>
          </div>

          <div onClick={() => onNavigate(id)}>
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-900 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-2 bg-white rounded-lg shadow-sm">
                <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
                <div className="text-xs text-green-600">{metric.change}</div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  isPlaying ? stopDemo() : startDemo();
                }}
                className="flex items-center space-x-1"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span className="text-xs">{isPlaying ? 'Stop' : 'Demo'}</span>
              </Button>
              {currentStep > 0 && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    stopDemo();
                  }}
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
              )}
            </div>
            <Badge variant="outline" className="text-xs">
              Interactive
            </Badge>
          </div>

          {/* Demo Progress */}
          {isPlaying && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">
                  {currentStep < demoSteps.length ? demoSteps[currentStep].action : 'Complete'}
                </span>
                <span className="text-indigo-600">
                  Step {Math.min(currentStep + 1, demoSteps.length)} of {demoSteps.length}
                </span>
              </div>
              <Progress 
                value={currentStep < demoSteps.length ? demoSteps[currentStep].progress : 100} 
                className="h-2"
              />
            </div>
          )}
        </div>
      </Card>

      {/* Detailed Modal */}
      <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <span>{title}</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">{description}</p>

            {/* Detailed Metrics */}
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-sm text-green-600">{metric.change}</div>
                </Card>
              ))}
            </div>

            {/* Interactive Demo */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Interactive Demo</h4>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    onClick={isPlaying ? stopDemo : startDemo}
                    className={isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span className="ml-2">{isPlaying ? 'Stop' : 'Start'}</span>
                  </Button>
                  <Button size="sm" variant="outline" onClick={stopDemo}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${
                      index === currentStep && isPlaying
                        ? 'bg-indigo-50 border-indigo-200 border'
                        : index < currentStep
                        ? 'bg-green-50 border-green-200 border'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === currentStep && isPlaying
                        ? 'bg-indigo-500 text-white'
                        : index < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        step.step
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{step.action}</div>
                      <div className="text-sm text-gray-600">{step.description}</div>
                    </div>
                    {index === currentStep && isPlaying && (
                      <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex space-x-4">
              <Button 
                onClick={() => {
                  setIsExpanded(false);
                  onNavigate(id);
                }}
                className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                Explore Full Feature
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}