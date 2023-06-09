import React from 'react';
import { useQuery } from 'react-query';
export {};

function Charts() {
  const { isLoading, error } = useQuery('graphData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    if (!response.ok) {
      throw new Error('Failed to fetch graph data');
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading graph data...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  // Render the chart using graphData

  return <div>Charts</div>;
}

export default Charts;

  