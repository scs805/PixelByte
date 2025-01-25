// path: src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import WeatherDisplay from '../components/WeatherDisplay';
import ColorScheme from '../components/ColorScheme';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const HomePage: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [colorScheme, setColorScheme] = useState({
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    backgroundColor: '#f8f9fa',
  });

  useEffect(() => {
    // Mock fetch weather data
    const fetchWeather = async () => {
      // Replace with actual API call
      const weatherData = {
        location: 'Seattle, WA',
        temperature: 55,
        condition: 'Cloudy',
      };
      setWeather(weatherData);

      // Generate color scheme based on weather condition
      const newColorScheme = {
        primaryColor: weatherData.condition === 'Sunny' ? '#ffcc00' : '#555',
        secondaryColor: weatherData.condition === 'Sunny' ? '#ffa500' : '#888',
        backgroundColor: weatherData.condition === 'Sunny' ? '#fff7cc' : '#f0f0f0',
      };
      setColorScheme(newColorScheme);
    };

    fetchWeather();
  }, []);

  const refreshWeather = () => {
    // Trigger weather and color scheme refresh
    setWeather(null);
    setTimeout(() => {
      // Mock new data (or re-fetch from API)
      const weatherData = {
        location: 'Seattle, WA',
        temperature: 60,
        condition: 'Partly Cloudy',
      };
      setWeather(weatherData);

      const newColorScheme = {
        primaryColor: weatherData.condition === 'Sunny' ? '#ffcc00' : '#555',
        secondaryColor: weatherData.condition === 'Sunny' ? '#ffa500' : '#888',
        backgroundColor: weatherData.condition === 'Sunny' ? '#fff7cc' : '#f0f0f0',
      };
      setColorScheme(newColorScheme);
    }, 500);
  };

  return (
    <div style={{ backgroundColor: colorScheme.backgroundColor, minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: colorScheme.primaryColor }}>Weather Color App</h1>
      {weather ? (
        <>
          <WeatherDisplay weather={weather} />
          <ColorScheme {...colorScheme} />
          <Card
            title="Need a Refresh?"
            content={
              <Button label="Refresh Weather" onClick={refreshWeather} style={{ marginTop: '1rem' }} />
            }
            style={{ marginTop: '2rem' }}
          />
        </>
      ) : (
        <p style={{ textAlign: 'center', color: colorScheme.secondaryColor }}>Loading weather data...</p>
      )}
    </div>
  );
};

export default HomePage;
