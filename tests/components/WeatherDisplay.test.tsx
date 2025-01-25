import { render, screen } from '@testing-library/react';
import WeatherDisplay from '../../src/components/WeatherDisplay';

describe('WeatherDisplay Component', () => {
  it('renders weather information correctly', () => {
    const mockWeather = { location: 'Seattle', temperature: 55, condition: 'Cloudy' };

    render(<WeatherDisplay weather={mockWeather} />);
    expect(screen.getByText('Seattle')).toBeInTheDocument();
    expect(screen.getByText('55°F')).toBeInTheDocument();
    expect(screen.getByText('Cloudy')).toBeInTheDocument();
  });
});
