import { renderHook, act } from '@testing-library/react';
import useWeatherData from '../../src/hooks/useWeatherData';

describe('useWeatherData Hook', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            location: { name: 'Seattle' },
            current: { temp_c: 55, condition: { text: 'Cloudy' } },
          }),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and returns weather data correctly', async () => {
    const { result } = renderHook(() => useWeatherData('Seattle'));

    // Use `act` to wait for the asynchronous hook update
    await act(async () => {});

    expect(result.current.weather).toEqual({
      location: 'Seattle',
      temperature: 55,
      condition: 'Cloudy',
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles errors correctly', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Internal Server Error',
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useWeatherData('InvalidLocation'));

    await act(async () => {});

    expect(result.current.weather).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Failed to fetch weather data');
  });
});
