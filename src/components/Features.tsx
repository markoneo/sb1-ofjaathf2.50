import React from 'react';
import { Shield, Car, HeadphonesIcon } from 'lucide-react';

export default function Features() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-200">
        <Shield className="h-8 w-8 mx-auto mb-3 text-blue-600" />
        <h3 className="text-lg font-semibold mb-2">Professional Service</h3>
        <p className="text-gray-600">Experienced and courteous drivers at your service</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-200">
        <Car className="h-8 w-8 mx-auto mb-3 text-blue-600" />
        <h3 className="text-lg font-semibold mb-2">Comfortable Vehicles</h3>
        <p className="text-gray-600">Modern fleet of vehicles for a luxurious journey</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-200">
        <HeadphonesIcon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
        <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
        <p className="text-gray-600">Round-the-clock customer support for your peace of mind</p>
      </div>
    </div>
  );
}