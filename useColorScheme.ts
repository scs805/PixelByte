// path: src/hooks/useColorScheme.ts
import { useState, useEffect } from 'react';

interface ColorScheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

const useColorScheme = (weatherCondition: string) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    backgroundColor: '#f8f9fa',
  });

  useEffect(() => {
    const generateColorScheme = (condition: string): ColorScheme => {
      switch (condition.toLowerCase()) {
        case 'sunny':
          return {
            primaryColor: '#FFD700', // Gold
            secondaryColor: '#FFA500', // Orange
            backgroundColor: '#FFF8DC', // Cornsilk
          };
        case 'cloudy':
          return {
            primaryColor: '#B0C4DE', // LightSteelBlue
            secondaryColor: '#778899', // LightSlateGray
            backgroundColor: '#F0F8FF', // AliceBlue
          };
        case 'rainy':
          return {
            primaryColor: '#4682B4', // SteelBlue
            secondaryColor: '#5F9EA0', // CadetBlue
            backgroundColor: '#E0FFFF', // LightCyan
          };
        case 'snowy':
          return {
            primaryColor: '#00CED1', // DarkTurquoise
            secondaryColor: '#B0E0E6', // PowderBlue
            backgroundColor: '#F0FFFF', // Azure
          };
        default:
          return {
            primaryColor: '#555',
            secondaryColor: '#888',
            backgroundColor: '#f0f0f0',
          };
      }
    };

    setColorScheme(generateColorScheme(weatherCondition));
  }, [weatherCondition]);

  return colorScheme;
};

export default useColorScheme;
