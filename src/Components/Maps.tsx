import React from 'react';
import { useQuery } from 'react-query';
export {};

function Maps() {
  const { isLoading, error } = useQuery('countriesData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
      throw new Error('Failed to fetch countries data');
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading countries data...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  // Render the map using countriesData

  return <div>Maps</div>;
}

export default Maps;
