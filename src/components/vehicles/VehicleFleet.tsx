import React from 'react';
import { vehicles } from '../../constants/vehicles';
import VehicleCard from './VehicleCard';
import SectionTitle from '../ui/SectionTitle';
import MeetGreet from './MeetGreet';

export default function VehicleFleet() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Airport Taxis for Any Kind of Trip"
          subtitle="Choose from our diverse fleet of vehicles to match your specific needs. From standard cars to spacious minivans, we have the perfect vehicle for your journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        <MeetGreet />
      </div>
    </section>
  );
}