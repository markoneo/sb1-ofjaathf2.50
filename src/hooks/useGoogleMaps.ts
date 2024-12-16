import { useState, useEffect } from 'react';
import { initGoogleMapsScript } from '../services/mapsService';

export const useGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    initGoogleMapsScript()
      .then(() => setIsLoaded(true))
      .catch((error) => {
        console.error('Failed to load Google Maps:', error);
        setLoadError(error);
      });
  }, []);

  return { isLoaded, loadError };
};