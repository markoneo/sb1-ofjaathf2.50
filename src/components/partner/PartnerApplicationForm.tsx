import React, { useState } from 'react';
import FormInput from '../form/FormInput';
import { User, Mail, Phone, Building2, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { validateEmail, validatePhone } from '../../utils/validation';
import { PartnerFormData } from '../../types/partner';
import { sendPartnerApplicationEmail } from '../../services/emailService';

interface FormErrors {
  [key: string]: string;
}

export default function PartnerApplicationForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<PartnerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    city: '',
    companyAddress: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.companyAddress.trim()) {
      newErrors.companyAddress = 'Company address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await sendPartnerApplicationEmail(formData);
        alert('Thank you for your application! We will contact you within 48 hours.');
        onClose();
      } catch (error) {
        console.error('Error submitting partner application:', error);
        alert('There was an error submitting your application. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Partner Application</h2>
          <p className="text-gray-600 mt-2">Fill out the form below to join our network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="First Name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              icon={User}
              error={errors.firstName}
            />
            <FormInput
              label="Last Name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              icon={User}
              error={errors.lastName}
            />
          </div>

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            icon={Mail}
            error={errors.email}
          />

          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            icon={Phone}
            error={errors.phone}
          />

          <FormInput
            label="Company Name"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            required
            icon={Building2}
            error={errors.companyName}
          />

          <FormInput
            label="City"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            required
            icon={MapPin}
            error={errors.city}
          />

          <FormInput
            label="Company Address"
            name="companyAddress"
            type="text"
            value={formData.companyAddress}
            onChange={handleChange}
            required
            icon={MapPin}
            error={errors.companyAddress}
          />

          <div className="flex gap-4 justify-end">
            <Button
              variant="secondary"
              onClick={onClose}
              type="button"
              className="border border-gray-300"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}