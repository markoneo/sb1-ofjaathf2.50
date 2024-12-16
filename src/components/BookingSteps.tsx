import React from 'react';
import { ClipboardEdit, Mail, CheckCircle, UserCheck, Car } from 'lucide-react';

const steps = [
  {
    icon: ClipboardEdit,
    title: '1. Fill the Form',
    description: 'Complete the booking form with your travel details'
  },
  {
    icon: Mail,
    title: '2. Receive an Offer',
    description: 'Get a personalized quote via email'
  },
  {
    icon: CheckCircle,
    title: '3. Confirm Your Transfer',
    description: 'Accept the offer and secure your booking'
  },
  {
    icon: UserCheck,
    title: '4. Meet the Driver',
    description: 'Your driver will meet you at the pickup location'
  },
  {
    icon: Car,
    title: '5. Enjoy the Ride',
    description: 'Relax and enjoy your comfortable journey'
  }
];

export default function BookingSteps() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-600 -translate-y-1/2" />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}