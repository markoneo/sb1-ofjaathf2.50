import React from 'react';
import { heroImages } from '../constants/images';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1920")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '600px'
        }}
      >
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-lg">
          Your Premium Transfer Service
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-shadow">
          Experience luxury and comfort with our professional private transfer service
        </p>
        <Button href="#booking">
          Book Your Transfer
        </Button>
      </div>
    </div>
  );
}