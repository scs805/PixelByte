// path: src/components/UI/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string | React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, content, style }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        ...style,
      }}
    >
      <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', color: '#333' }}>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default Card;
