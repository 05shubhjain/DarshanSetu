import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Shield,
  Eye,
  Phone,
  Zap,
  BarChart3
} from 'lucide-react';

export default function LiveDashboardDemo() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [crowdLevel, setCrowdLevel] = useState(2847);
  const [isActive, setIsActive] = useState(false);
  const [riskLevel, setRiskLevel] = useState('LOW');
  const [predictions, setPredictions] = useState([
    { time: 'Next 1 Hour', crowd: 3200, risk: 'MEDIUM', color: 'yellow' },
    { time: 'Next 3 Hours', crowd: 4500, risk: 'HIGH', color: 'red' },
    { time: 'Tomorrow', crowd: 2100, risk: 'LOW', color: 'green' }
  ]);

  const [zones, setZones] = useState([
    { id: 1, name: 'Main Entrance', occupancy: 85, capacity: 500, status: 'BUSY' },
    { id: 2, name: 'Darshan Queue', occupancy: 72, capacity: 800, status: 'MODERATE' },
    { id: 3, name: 'Parking Area', occupancy: 92, capacity: 300, status: 'CRITICAL' },
    { id: 4, name: 'Prayer Hall', occupancy: 45, capacity: 1000, status: 'OPTIMAL' }
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'WARNING', message: 'Parking area approaching capacity', time: '2 min ago' },
    { id: 2, type: 'INFO', message: 'Additional volunteers deployed to Zone 1', time: '5 min ago' },
    { id: 3, type: 'SUCCESS', message: 'Queue wait time reduced by 15 minutes', time: '8 min ago' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      if (isActive) {
        // Simulate live data updates
        setCrowdLevel(prev => {
          const change = Math.floor(Math.random() * 200) - 100;
          return Math.max(1000, Math.min(5000, prev + change));
        });

        setZones(prev => prev.map(zone => ({
          ...zone,
          occupancy: Math.max(20, Math.min(95, zone.occupancy + (Math.random() * 10 - 5)))
        })));
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [isActive]);

  const toggleDemo = () => {
    setIsActive(!isActive);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPTIMAL': return 'text-green-600 bg-green-100';
      case 'MODERATE': return 'text-yellow-600 bg-yellow-100';
      case 'BUSY': return 'text-orange-600 bg-orange-100';
      case 'CRITICAL': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'LOW': return 'text-green-600 bg-green-100';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-100';
      case 'HIGH': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Live Temple Dashboard</h3>
          <p className="text-gray-600">Real-time crowd monitoring and prediction system</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge className={`${getRiskColor(riskLevel)}`}>
            Risk Level: {riskLevel}
          </Badge>
          <Button 
            onClick={toggleDemo}
            className={`${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
          >
            {isActive ? 'Stop Demo' : 'Start Demo'}
            {isActive && <Activity className="w-4 h-4 ml-2 animate-pulse" />}
          </Button>
        </div>
      </div>

      {/* Current Status */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Crowd</p>
              <p className="text-2xl font-bold text-gray-900">{crowdLevel.toLocaleString()}</p>
              <p className="text-xs text-green-600">+5.2% from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Wait Time</p>
              <p className="text-2xl font-bold text-gray-900">12 min</p>
              <p className="text-xs text-green-600">-3 min from last hour</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Volunteers</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-blue-600">6 deployed this hour</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">System Status</p>
              <p className="text-2xl font-bold text-green-600">Optimal</p>
              <p className="text-xs text-gray-600">All systems operational</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Predictions */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Crowd Predictions</h4>
            <TrendingUp className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{prediction.time}</p>
                  <p className="text-sm text-gray-600">{prediction.crowd.toLocaleString()} people</p>
                </div>
                <Badge className={getRiskColor(prediction.risk)}>
                  {prediction.risk}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Zone Occupancy</h4>
            <MapPin className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="space-y-4">
            {zones.map((zone) => (
              <div key={zone.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{zone.name}</span>
                  <Badge className={getStatusColor(zone.status)}>
                    {zone.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Progress value={zone.occupancy} className="flex-1" />
                  <span className="text-sm text-gray-600 w-16">
                    {Math.round(zone.occupancy)}%
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {Math.round((zone.occupancy / 100) * zone.capacity)} / {zone.capacity} capacity
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Live Alerts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-900">Live Alerts & Actions</h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                alert.type === 'WARNING' ? 'bg-yellow-100' : 
                alert.type === 'SUCCESS' ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                {alert.type === 'WARNING' ? 
                  <AlertTriangle className={`w-4 h-4 ${alert.type === 'WARNING' ? 'text-yellow-600' : ''}`} /> :
                  alert.type === 'SUCCESS' ?
                  <CheckCircle className="w-4 h-4 text-green-600" /> :
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                }
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
        <div className="grid md:grid-cols-4 gap-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Deploy Volunteers</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Emergency Alert</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Virtual Darshan</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>Auto-Optimize</span>
          </Button>
        </div>
      </Card>

      <div className="text-center text-sm text-gray-500">
        <p>Demo updates every 2 seconds • Last updated: {currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}