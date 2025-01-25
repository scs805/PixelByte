// path: src/services/weatherService.ts

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
}

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = process.env.WEATHER_API_KEY || 'your_weather_api_key_here';

/**
 * Fetches weather data for a specific location.
 * @param location - The name of the location (e.g., "Seattle, WA").
 * @returns A promise that resolves to weather data.
 */
export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`${API_BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
