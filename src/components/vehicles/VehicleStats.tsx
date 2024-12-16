import React from 'react';
import { Users, Briefcase } from 'lucide-react';

interface VehicleStatsProps {
  passengers: number;
  luggage: number;
}

export default function VehicleStats({ passengers, luggage }: VehicleStatsProps) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <Users size={18} className="text-blue-600" />
        <span>{passengers} Passengers</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Briefcase size={18} className="text-blue-600" />
        <span>{luggage} Luggage</span>
      </div>
    </div>
  );
}