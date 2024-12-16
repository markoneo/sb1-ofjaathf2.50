export interface Vehicle {
  id: number;
  name: string;
  type: 'standard' | 'executive' | 'van' | 'minivan';
  description: string;
  passengers: number;
  luggage: number;
}