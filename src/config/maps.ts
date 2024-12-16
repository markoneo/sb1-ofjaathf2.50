// Google Maps configuration
export const GOOGLE_MAPS_CONFIG = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  options: {
    componentRestrictions: { country: ['us', 'ca', 'gb', 'de'] }, // Add relevant countries
    types: ['address'],
    fields: ['formatted_address', 'geometry', 'place_id', 'name']
  }
};