import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="180" height="40" viewBox="0 0 180 40" className="fill-current">
        <text x="0" y="30" className="text-3xl font-bold">
          <tspan className="text-blue-500">Ri</tspan>
          <tspan className="text-black">de</tspan>
          <tspan className="text-blue-500">Co</tspan>
          <tspan className="text-black">nn</tspan>
          <tspan className="text-blue-500">ect</tspan>
        </text>
      </svg>
    </div>
  );
}