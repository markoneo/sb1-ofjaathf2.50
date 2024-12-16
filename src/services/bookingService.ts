import { BookingFormData } from '../types/booking';
import { sendBookingEmail } from './emailService';

export const handleBookingSubmission = async (formData: BookingFormData): Promise<void> => {
  try {
    // Send email notification
    await sendBookingEmail(formData);
    
    // In a real application, you would also save the booking to your database
    console.log('Booking submitted:', formData);
  } catch (error) {
    console.error('Error handling booking submission:', error);
    throw error;
  }
};