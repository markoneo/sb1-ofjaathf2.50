import { GOOGLE_MAPS_CONFIG } from '../config/maps';

let isInitialized = false;
let initializationPromise: Promise<void> | null = null;

export const initGoogleMapsScript = (): Promise<void> => {
  if (isInitialized) {
    return Promise.resolve();
  }

  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise = new Promise((resolve, reject) => {
    try {
      // Check if the API is already loaded
      if (window.google?.maps) {
        isInitialized = true;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_CONFIG.apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.addEventListener('load', () => {
        isInitialized = true;
        resolve();
      });

      script.addEventListener('error', (e) => {
        initializationPromise = null;
        reject(e);
      });
      
      document.head.appendChild(script);
    } catch (error) {
      initializationPromise = null;
      reject(error);
    }
  });

  return initializationPromise;
};

export const createAutocomplete = (
  input: HTMLInputElement,
  options = GOOGLE_MAPS_CONFIG.options
): google.maps.places.Autocomplete | null => {
  if (!window.google?.maps) {
    return null;
  }
  return new google.maps.places.Autocomplete(input, options);
};