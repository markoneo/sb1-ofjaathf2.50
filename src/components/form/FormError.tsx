import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormErrorProps {
  message: string;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
      <AlertCircle size={14} />
      <span>{message}</span>
    </div>
  );
}