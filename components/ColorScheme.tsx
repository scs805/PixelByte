// path: src/components/ColorScheme.tsx
import React from 'react';

interface ColorSchemeProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

const ColorScheme: React.FC<ColorSchemeProps> = ({ primaryColor, secondaryColor, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        color: primaryColor,
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: primaryColor }}>Dynamic Color Scheme</h1>
      <p style={{ color: secondaryColor }}>
        This color scheme adapts dynamically based on real-time weather conditions.
      </p>
    </div>
  );
};

export default ColorScheme;
