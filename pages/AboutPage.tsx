// path: src/pages/AboutPage.tsx
import React from 'react';
import Card from '../components/UI/Card';

const AboutPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1.5rem', color: '#333' }}>About Weather Color App</h1>
      <Card
        title="Our Mission"
        content={
          <p>
            Weather Color App dynamically adapts the user interface color schemes to match
            real-time weather conditions for a specific location. Our goal is to provide users
            with a visually immersive experience that harmonizes weather data with beautiful
            and functional UI design.
          </p>
        }
        style={{ marginBottom: '1.5rem' }}
      />
      <Card
        title="Features"
        content={
          <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
            <li>Real-time weather updates for your location.</li>
            <li>Dynamic color schemes based on weather conditions.</li>
            <li>Elegant, user-friendly UI for a seamless experience.</li>
            <li>Customizable features to suit your needs.</li>
          </ul>
        }
        style={{ marginBottom: '1.5rem' }}
      />
      <Card
        title="Contact Us"
        content={
          <p>
            Have questions or feedback? Feel free to reach out at{' '}
            <a href="mailto:support@weathercolorapp.com">support@weathercolorapp.com</a>.
          </p>
        }
      />
    </div>
  );
};

export default AboutPage;
