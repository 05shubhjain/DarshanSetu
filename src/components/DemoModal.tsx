import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Calendar, Users, MapPin, Phone, Mail, Building } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface DemoModalProps {
  children: React.ReactNode;
  feature?: string;
}

export default function DemoModal({ children, feature = "DarshanSetu Platform" }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    templeSize: '',
    currentChallenges: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Demo request submitted successfully! Our team will contact you within 24 hours.');
  };

  const challenges = [
    "Crowd congestion during festivals",
    "Long waiting times for darshan",
    "Safety concerns during peak hours",
    "Inefficient staff deployment",
    "Poor visitor experience",
    "Limited parking management",
    "Communication barriers",
    "Emergency response coordination"
  ];

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in {feature}. Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Demo scheduled within 48 hours</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>We'll call to confirm details</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Check your email for confirmation</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Schedule a {feature} Demo
          </DialogTitle>
          <p className="text-gray-600">
            Get a personalized demonstration of how DarshanSetu can transform your temple's crowd management.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-indigo-600" />
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 XXX XXX XXXX"
                  required
                />
              </div>
              <div>
                <Label htmlFor="role">Your Role</Label>
                <Select onValueChange={(value) => handleInputChange('role', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="temple-administrator">Temple Administrator</SelectItem>
                    <SelectItem value="trust-member">Trust Member</SelectItem>
                    <SelectItem value="security-head">Security Head</SelectItem>
                    <SelectItem value="operations-manager">Operations Manager</SelectItem>
                    <SelectItem value="government-official">Government Official</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Organization Information */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-indigo-600" />
              Temple Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="organization">Temple/Organization Name *</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  placeholder="Enter temple name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="templeSize">Temple Size</Label>
                <Select onValueChange={(value) => handleInputChange('templeSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select temple size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (0-1,000 daily visitors)</SelectItem>
                    <SelectItem value="medium">Medium (1,000-10,000 daily visitors)</SelectItem>
                    <SelectItem value="large">Large (10,000-50,000 daily visitors)</SelectItem>
                    <SelectItem value="mega">Mega (50,000+ daily visitors)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4">
              <Label htmlFor="currentChallenges">Current Challenges</Label>
              <Textarea
                id="currentChallenges"
                value={formData.currentChallenges}
                onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                placeholder="Describe your current crowd management challenges..."
                className="h-20"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {challenges.map((challenge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-indigo-50 hover:border-indigo-300"
                    onClick={() => {
                      const current = formData.currentChallenges;
                      const newValue = current ? `${current}, ${challenge}` : challenge;
                      handleInputChange('currentChallenges', newValue);
                    }}
                  >
                    {challenge}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Scheduling */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
              Preferred Demo Schedule
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Demo Features */}
          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
            <h3 className="font-semibold text-gray-900 mb-4">What You'll See in the Demo</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Live crowd prediction dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Real-time safety monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Volunteer management system</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Pilgrim experience personalization</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Multi-modal navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Virtual darshan capabilities</span>
              </div>
            </div>
          </Card>

          <div className="flex space-x-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}