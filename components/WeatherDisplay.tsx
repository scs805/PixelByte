//path: src/components/WeatherDisplay.tsx
import React from 'react';

interface WeatherDisplayProps {
  location: string;
  temperature: number;
  condition: string;
  colorScheme: string[];
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ location, temperature, condition, colorScheme }) => {
  return (
    <div style={{ backgroundColor: colorScheme[0], color: colorScheme[1], padding: '1rem', borderRadius: '8px' }}>
      <h1>Weather in {location}</h1>
      <h2>{temperature}°C</h2>
      <p>{condition}</p>
    </div>
  );
};

export default WeatherDisplay;
