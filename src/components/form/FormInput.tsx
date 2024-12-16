import React from 'react';
import { LucideIcon } from 'lucide-react';
import FormError from './FormError';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  icon?: LucideIcon;
  min?: number;
  error?: string;
}

export default function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
  icon: Icon,
  min,
  error
}: FormInputProps) {
  const inputClasses = `
    w-full px-4 py-2 border rounded-md 
    focus:ring-2 focus:ring-blue-800 focus:border-transparent
    ${error ? 'border-red-300' : 'border-blue-700'}
    ${Icon ? 'pl-10' : ''}
  `;

  const getPlaceholder = () => {
    if (type === 'tel') {
      return '+1 (555) 123-4567';
    }
    return '';
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        {Icon && <Icon size={18} />}
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-800">
            <Icon size={18} />
          </div>
        )}
        {type === 'textarea' ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={4}
            className={inputClasses}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            min={min}
            className={inputClasses}
            placeholder={getPlaceholder()}
          />
        )}
      </div>
      {error && <FormError message={error} />}
      {type === 'tel' && (
        <p className="text-xs text-gray-500 mt-1">
          Please include your country code (e.g., +1 for USA/Canada, +44 for UK, +49 for Germany)
        </p>
      )}
    </div>
  );
}