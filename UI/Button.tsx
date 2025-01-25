// path: src/components/UI/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, style }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
