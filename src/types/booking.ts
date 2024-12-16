export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  pickupAddress: string;
  dropoffAddress: string;
  date: string;
  passengers: number;
  specialRequests: string;
}

export interface FormErrors {
  [key: string]: string;
}