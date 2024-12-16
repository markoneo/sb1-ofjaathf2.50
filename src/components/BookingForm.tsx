import React, { useState } from 'react';
import { Calendar, Users, MapPin, Mail, Phone, User } from 'lucide-react';
import FormInput from './FormInput';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  pickupAddress: string;
  dropoffAddress: string;
  date: string;
  passengers: number;
  specialRequests: string;
}

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly with an offer.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          icon={Mail}
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          icon={Phone}
        />
        <FormInput
          label="Date"
          name="date"
          type="datetime-local"
          value={formData.date}
          onChange={handleChange}
          required
          icon={Calendar}
        />
      </div>

      <FormInput
        label="Pickup Address"
        name="pickupAddress"
        type="text"
        value={formData.pickupAddress}
        onChange={handleChange}
        required
        icon={MapPin}
      />

      <FormInput
        label="Dropoff Address"
        name="dropoffAddress"
        type="text"
        value={formData.dropoffAddress}
        onChange={handleChange}
        required
        icon={MapPin}
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

      <FormInput
        label="Special Requests (Optional)"
        name="specialRequests"
        type="textarea"
        value={formData.specialRequests}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Request Booking
      </button>
    </form>
  );
}