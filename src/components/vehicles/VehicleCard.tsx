import React from 'react';
import { Users, Briefcase, Car, CarFront, Bus, Truck } from 'lucide-react';
import { Vehicle } from '../../types/vehicles';
import VehicleStats from './VehicleStats';

const vehicleIcons = {
  'standard': CarFront,
  'executive': Car,
  'van': Truck,
  'minivan': Bus,
};

export default function VehicleCard({
  name,
  type,
  passengers,
  luggage,
  description,
}: Vehicle) {
  const IconComponent = vehicleIcons[type] || Car;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <div className="relative h-40 bg-gradient-to-br from-blue-50 to-gray-50 p-6 flex items-center justify-center">
        <IconComponent className="w-20 h-20 text-blue-600" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <VehicleStats passengers={passengers} luggage={luggage} />
      </div>
    </div>
  );
}