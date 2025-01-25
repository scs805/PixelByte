// path: src/utils/locationUtils.ts

/**
 * Retrieves the user's current location using the Geolocation API.
 * @returns A promise that resolves to an object containing latitude and longitude.
 */
export const getCurrentLocation = async (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error(`Failed to retrieve location: ${error.message}`));
      }
    );
  });
};

/**
 * Converts latitude and longitude coordinates into a human-readable location.
 * @param latitude - The latitude coordinate.
 * @param longitude - The longitude coordinate.
 * @returns A promise that resolves to a string representing the location (e.g., "Seattle, WA").
 */
export const getLocationName = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch location name.');
    }

    const data = await response.json();
    return data.locality || `${data.city}, ${data.principalSubdivision}`;
  } catch (error) {
    console.error('Error fetching location name:', error);
    throw error;
  }
};

/**
 * Validates if the given latitude and longitude values are within valid ranges.
 * @param latitude - The latitude coordinate.
 * @param longitude - The longitude coordinate.
 * @returns A boolean indicating whether the coordinates are valid.
 */
export const validateCoordinates = (latitude: number, longitude: number): boolean => {
  return (
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  );
};
