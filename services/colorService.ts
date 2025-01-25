// path: src/services/colorService.ts

export interface ColorScheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

/**
 * Generates a color scheme based on the weather condition.
 * @param weatherCondition - The current weather condition (e.g., "Sunny", "Cloudy", "Rainy").
 * @returns A color scheme object with primary, secondary, and background colors.
 */
export const generateColorScheme = (weatherCondition: string): ColorScheme => {
  switch (weatherCondition.toLowerCase()) {
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
        primaryColor: '#555', // Default dark gray
        secondaryColor: '#888', // Default medium gray
        backgroundColor: '#f0f0f0', // Default light gray
      };
  }
};
