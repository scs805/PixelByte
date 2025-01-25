// path: src/utils/colorUtils.ts

/**
 * Converts a hexadecimal color code to an RGB color string.
 * @param hex - The hexadecimal color code (e.g., "#FF5733").
 * @returns The RGB color string (e.g., "rgb(255, 87, 51)").
 */
export const hexToRgb = (hex: string): string => {
  const sanitizedHex = hex.replace('#', '');
  const bigint = parseInt(sanitizedHex, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Adjusts the brightness of a color.
 * @param hex - The hexadecimal color code (e.g., "#FF5733").
 * @param percent - A percentage to lighten or darken the color (positive to lighten, negative to darken).
 * @returns The adjusted hexadecimal color code.
 */
export const adjustBrightness = (hex: string, percent: number): string => {
  const sanitizedHex = hex.replace('#', '');
  const bigint = parseInt(sanitizedHex, 16);

  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  r = Math.min(255, Math.max(0, r + (r * percent) / 100));
  g = Math.min(255, Math.max(0, g + (g * percent) / 100));
  b = Math.min(255, Math.max(0, b + (b * percent) / 100));

  const newColor = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  return `#${newColor}`;
};

/**
 * Checks the contrast ratio between two colors.
 * @param hex1 - The first hexadecimal color code.
 * @param hex2 - The second hexadecimal color code.
 * @returns A boolean indicating if the colors have sufficient contrast.
 */
export const hasSufficientContrast = (hex1: string, hex2: string): boolean => {
  const luminance = (hex: string) => {
    const rgb = hexToRgb(hex)
      .match(/\d+/g)
      ?.map(Number);

    if (!rgb) return 0;

    const [r, g, b] = rgb.map((value) => {
      const normalized = value / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = luminance(hex1) + 0.05;
  const l2 = luminance(hex2) + 0.05;
  const contrastRatio = l1 > l2 ? l1 / l2 : l2 / l1;

  return contrastRatio >= 4.5; // WCAG AA standard for text contrast
};
