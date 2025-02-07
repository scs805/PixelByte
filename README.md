# PixelByte
🖼️ Web application that dynamically selects color schemes based on real-time weather conditions specific location. It provides a visually appealing way to integrate weather data with UI design, offering users an immersive experience that reflects current weather conditions through color.

## Key Features 
- Dynamic Color Schemes: The app changes its UI colors dynamically based on weather conditions like sunny, cloudy, rainy, or snowy.
- Real-Time Weather Updates: Fetches live weather data for any location, providing accurate and up-to-date information.
- Reusable Components: Built with modular, reusable React components for easy scalability and maintenance.
- Beautiful Design: Implements visually appealing themes and transitions for a seamless user experience.
- Custom Hooks: Efficiently handles weather data and color schemes with React hooks.
- Cross-Browser Support: Optimized for consistent functionality and appearance across different browsers.
- Responsive Design: Adapts seamlessly to different devices and screen sizes.

## Installation 

1. Clone the Repository
```
git clone https://github.com/your-username/PixelByte.git
cd PixelByte

2. Install Dependencies:
```
yarn install
# or
npm install
``

3. Set Up Environment Variables: Create a .env file in the root directory and include your API keys:
```
WEATHER_API_KEY=your_weather_api_key
```

4. Start the Development Server:
```
yarn start
# or
npm start
```
## Tech Stack

### Frontend
React: For building reusable and dynamic UI components.
TypeScript: Provides static typing to improve code quality and reduce runtime errors.
CSS: Custom global and theme-based styles using modern CSS techniques.
React Hooks: For managing state and side effects (e.g., useWeatherData, useColorScheme).

### Backend/Services
Node.js: For environment setup and tooling.
Weather API: Integrates external APIs (like WeatherAPI) to fetch live weather data.
Custom Services: Handles fetching weather data and generating color schemes.

### Utilities
ESLint: Enforces consistent code quality and style.
Prettier: Ensures code formatting consistency.
Jest: For unit and integration testing.
DevOps
npm / Yarn: Dependency management and scripts for build and development.
Environment Variables: Securely manages API keys and other configuration values through .env.
Build Tools
React Scripts: Simplifies project bootstrapping and development workflows.
TypeScript Compiler: Ensures seamless TypeScript support.

## File Structure 

```
PixelByte/
├── src/
│   ├── components/              # React components
│   │   ├── WeatherDisplay.tsx   # Displays weather information and colors
│   │   ├── Header.tsx           # App header with title/logo
│   │   ├── Footer.tsx           # Footer for credits or additional info
│   │   ├── ColorScheme.tsx      # Dynamically updates UI color scheme
│   │   └── UI/                  # Reusable UI elements
│   │       ├── Button.tsx       # Reusable button component
│   │       ├── Card.tsx         # Card component for displaying weather data
│   │       └── Modal.tsx        # Modal for settings or location input
│   ├── pages/                   # Page-level components
│   │   ├── HomePage.tsx         # Main page of the app
│   │   └── AboutPage.tsx        # Info about the app
│   ├── hooks/                   # Custom React hooks
│   │   ├── useWeatherData.ts    # Hook for fetching weather data
│   │   └── useColorScheme.ts    # Hook for generating color schemes
│   ├── services/                # API calls and external services
│   │   ├── weatherService.ts    # Fetches weather data from API
│   │   └── colorService.ts      # Generates color schemes
│   ├── utils/                   # Utility functions/helpers
│   │   ├── colorUtils.ts        # Helper functions for color calculations
│   │   ├── locationUtils.ts     # Functions for handling geolocation
│   │   └── dateUtils.ts         # Date and time utilities
│   ├── styles/                  # Styling files
│   │   ├── global.css           # Global styles
│   │   ├── theme.css            # Base theme styles
│   │   └── components/          # Component-specific styles (if applicable)
│   ├── assets/                  # Static assets
│   │   ├── images/              # Images and icons
│   │   └── fonts/               # Custom fonts
│   ├── context/                 # React context for global state
│   │   ├── ThemeContext.tsx     # Context for theme management
│   │   └── WeatherContext.tsx   # Context for weather data
│   ├── App.tsx                  # Main React app component
│   ├── index.tsx                # Entry point for React app
│   └── types/                   # TypeScript type definitions
│       ├── weather.d.ts         # Types for weather-related data
│       ├── theme.d.ts           # Types for theme/color scheme data
│       └── index.d.ts           # General/shared types
├── public/                      # Public files served by the app
│   ├── index.html               # HTML template
│   └── favicon.ico              # App favicon
├── tests/                       # Unit and integration tests
│   ├── components/              # Component tests
│   ├── hooks/                   # Hook tests
│   ├── services/                # Service tests
│   └── utils/                   # Utility function tests
├── .env                         # Environment variables (e.g., API keys)
├── .eslint.json                 # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Node.js dependencies and scripts
├── yarn.lock                    # Dependency lock file (or package-lock.json)
└── README.md                    # Project documentation

```
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
