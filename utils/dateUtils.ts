// path: src/utils/dateUtils.ts

/**
 * Formats a JavaScript Date object into a human-readable string.
 * @param date - The Date object to format.
 * @returns A formatted date string (e.g., "January 25, 2025").
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Formats a JavaScript Date object into a time string.
 * @param date - The Date object to format.
 * @returns A formatted time string (e.g., "2:30 PM").
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

/**
 * Calculates the difference in days between two dates.
 * @param startDate - The starting date.
 * @param endDate - The ending date.
 * @returns The difference in days as a number.
 */
export const calculateDateDifference = (startDate: Date, endDate: Date): number => {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Returns a greeting based on the current time of day.
 * @returns A string such as "Good morning", "Good afternoon", or "Good evening".
 */
export const getTimeBasedGreeting = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return 'Good morning';
  } else if (currentHour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};
