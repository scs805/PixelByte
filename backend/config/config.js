module.exports = {
  // Environment variables
  env: process.env.NODE_ENV || 'development',

  // Server configuration
  server: {
    port: process.env.PORT || 3000,
  },

  // Database configuration (if applicable)
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'my_database',
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
  },

  // External API keys or tokens
  apiKeys: {
    weatherApiKey: process.env.WEATHER_API_KEY || 'your_weather_api_key_here',
    otherApiKey: process.env.OTHER_API_KEY || 'your_other_api_key_here',
  },

  // Other configurations
  // Add other configuration variables as needed
};
