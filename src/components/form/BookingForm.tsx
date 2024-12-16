import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, User, MessageSquare } from 'lucide-react';
import FormInput from './FormInput';
import AddressInput from './AddressInput';
import PaymentMethods from './PaymentMethods';
import { validateEmail, validatePhone, validateDate } from '../../utils/validation';
import { formatDate, formatPhone } from '../../utils/formatting';
import { BookingFormData, FormErrors } from '../../types/booking';
import { handleBookingSubmission } from '../../services/bookingService';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    pickupAddress: '',
    dropoffAddress: '',
    date: '',
    passengers: 1,
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!validateDate(formData.date)) {
      newErrors.date = 'Please select a future date';
    }

    if (!formData.pickupAddress.trim()) {
      newErrors.pickupAddress = 'Pickup address is required';
    }

    if (!formData.dropoffAddress.trim()) {
      newErrors.dropoffAddress = 'Dropoff address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await handleBookingSubmission(formData);
        alert('Thank you for your booking request! We will contact you shortly with an offer.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          pickupAddress: '',
          dropoffAddress: '',
          date: '',
          passengers: 1,
          specialRequests: '',
        });
      } catch (error) {
        console.error('Error handling booking submission:', error);
        alert('There was an error submitting your booking. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          required
          icon={User}
          error={errors.fullName}
        />
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
          label="Date"
          name="date"
          type="datetime-local"
          value={formData.date}
          onChange={handleChange}
          required
          icon={Calendar}
          error={errors.date}
        />
      </div>

      <AddressInput
        label="Pickup Address"
        name="pickupAddress"
        value={formData.pickupAddress}
        onChange={(value) => handleChange({ target: { name: 'pickupAddress', value } } as any)}
        required
        error={errors.pickupAddress}
      />

      <AddressInput
        label="Dropoff Address"
        name="dropoffAddress"
        value={formData.dropoffAddress}
        onChange={(value) => handleChange({ target: { name: 'dropoffAddress', value } } as any)}
        required
        error={errors.dropoffAddress}
      />

      <FormInput
        label="Number of Passengers"
        name="passengers"
        type="number"
        value={formData.passengers}
        onChange={handleChange}
        required
        icon={Users}
        min={1}
      />

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <MessageSquare size={18} />
          Special Requests (Optional)
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Examples:
- Child seat (please specify age)
- Booster seat
- Flight number for airport pickup
- Extra luggage space needed
- Wheelchair accessibility
- Meet & Greet sign text"
        />
        <p className="text-sm text-gray-500 mt-1">
          Let us know about any special requirements or additional services you need for your journey. 
          This helps us prepare the perfect vehicle and service for your needs.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request Booking'}
      </button>

      <PaymentMethods />
    </form>
  );
}