// path: src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5', color: '#555' }}>
      <p>
        © {new Date().getFullYear()} Weather Color App. All rights reserved.
      </p>
      <p>
        Made with <span role="img" aria-label="love">❤️</span> by Molly Beach.
      </p>
    </footer>
  );
};

export default Footer;
