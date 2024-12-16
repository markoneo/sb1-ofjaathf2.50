import React from 'react';
import { CreditCard, Info } from 'lucide-react';

export default function PaymentMethods() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="text-gray-600" size={20} />
        <h3 className="text-lg font-semibold text-gray-700">Payment Methods</h3>
      </div>

      {/* Payment Description */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start gap-2">
          <Info className="text-blue-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Payment Terms</h4>
            <p className="text-blue-800 text-sm">
              A 20% deposit is required to secure your reservation. The remaining balance can be paid later, up to 24 hours before your scheduled pickup.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Traditional Payment Methods */}
        <div className="payment-method-card">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt="Visa"
            className="h-8 object-contain"
          />
        </div>

        <div className="payment-method-card">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-8 object-contain"
          />
        </div>

        <div className="payment-method-card">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-8 object-contain"
          />
        </div>

        {/* Digital Wallets */}
        <div className="payment-method-card">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
            alt="Google Pay"
            className="h-8 object-contain"
          />
        </div>

        <div className="payment-method-card">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
            alt="Apple Pay"
            className="h-8 object-contain"
          />
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        <p className="text-center text-sm text-gray-500">
          Secure payment processing powered by Stripe
        </p>
        <ul className="flex items-center justify-center gap-4 text-xs text-gray-400">
          <li>256-bit SSL Encryption</li>
          <li>•</li>
          <li>PCI Compliant</li>
          <li>•</li>
          <li>Bank-level Security</li>
        </ul>
      </div>
    </div>
  );
}