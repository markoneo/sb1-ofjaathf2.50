import { airports } from '../data/airports';
import { ports } from '../data/ports';

export const searchAddresses = (query: string) => {
  if (!query || query.length < 2) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const results = [];
  
  // Search airports
  const airportResults = airports
    .filter(airport => 
      airport.code.toLowerCase().includes(normalizedQuery) ||
      airport.name.toLowerCase().includes(normalizedQuery) ||
      airport.city.toLowerCase().includes(normalizedQuery) ||
      airport.country.toLowerCase().includes(normalizedQuery)
    )
    .map(airport => ({
      label: `${airport.name} (${airport.code})`,
      value: `${airport.name} (${airport.code}), ${airport.city}, ${airport.country}`,
      type: 'airport'
    }));
  
  // Search ports
  const portResults = ports
    .filter(port => 
      port.code.toLowerCase().includes(normalizedQuery) ||
      port.name.toLowerCase().includes(normalizedQuery) ||
      port.city.toLowerCase().includes(normalizedQuery) ||
      port.country.toLowerCase().includes(normalizedQuery)
    )
    .map(port => ({
      label: `${port.name} (${port.type === 'cruise' ? 'Cruise Terminal' : 'Port'})`,
      value: `${port.name}, ${port.city}, ${port.country}`,
      type: 'port'
    }));

  results.push(...airportResults, ...portResults);
  
  return results.slice(0, 8); // Limit to top 8 results
};