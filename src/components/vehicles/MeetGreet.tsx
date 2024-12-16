import React from 'react';
import { UserCheck, Clock, MapPin, Sparkles } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Professional Chauffeur',
    description: 'Experienced, well-dressed drivers who prioritize your comfort'
  },
  {
    icon: Clock,
    title: 'Flight Monitoring',
    description: 'We track your flight to adjust pickup time if needed'
  },
  {
    icon: MapPin,
    title: 'Terminal Meeting',
    description: 'Driver meets you at arrivals with a name board'
  },
  {
    icon: Sparkles,
    title: 'Complimentary Wait Time',
    description: '60 minutes of free waiting time at airports'
  }
];

export default function MeetGreet() {
  return (
    <div className="bg-blue-50 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Complimentary Meet & Greet Service
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every airport pickup includes our premium meet and greet service at no additional cost
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}