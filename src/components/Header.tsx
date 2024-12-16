import React, { useState } from 'react';
import Logo from './Logo';
import Button from './ui/Button';
import PartnerApplicationForm from './partner/PartnerApplicationForm';

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <Button 
            variant="secondary"
            onClick={() => setShowForm(true)}
            className="text-sm px-4 py-2 border border-blue-600"
            size="small"
          >
            Become our partner
          </Button>
        </div>
      </div>

      {showForm && <PartnerApplicationForm onClose={() => setShowForm(false)} />}
    </header>
  );
}