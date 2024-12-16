import React, { useState } from 'react';
import { TrendingUp, Shield, Users, Wallet, Clock, DollarSign } from 'lucide-react';
import Button from './ui/Button';
import PartnerApplicationForm from './partner/PartnerApplicationForm';

const benefits = [
  {
    icon: DollarSign,
    title: 'Instant Payments',
    description: 'Get paid immediately after each ride - no waiting periods or payment delays',
    isPrimary: true
  },
  {
    icon: Clock,
    title: 'No Payment Delays',
    description: 'Unlike other services, we ensure you receive your earnings right away',
    isPrimary: true
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Access our large customer base and increase your revenue'
  },
  {
    icon: Shield,
    title: 'Reliable Partnership',
    description: 'Join a trusted network of transportation providers'
  },
  {
    icon: Users,
    title: 'Support & Training',
    description: 'Get comprehensive training and 24/7 partner support'
  },
  {
    icon: Wallet,
    title: 'Competitive Rates',
    description: 'Enjoy industry-leading rates and transparent fee structure'
  }
];

export default function PartnerSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="partner" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Become Our Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our network and experience the difference - get paid instantly after each ride, 
            with no waiting periods or payment delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`rounded-lg p-6 transform hover:scale-105 transition-transform duration-200 ${
                benefit.isPrimary 
                  ? 'bg-gradient-to-br from-blue-50 to-white shadow-lg border-2 border-blue-200' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  benefit.isPrimary ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <benefit.icon className={`w-6 h-6 ${
                    benefit.isPrimary ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  benefit.isPrimary ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setShowForm(true)}
            className="shadow-lg"
          >
            Apply Now
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Start earning with instant payments - join RideConnect today
          </p>
        </div>
      </div>

      {showForm && <PartnerApplicationForm onClose={() => setShowForm(false)} />}
    </section>
  );
}