# Weather App

A modern, interactive weather application featuring real-time weather data with dynamic visual effects and animations.

## Project Overview
This project demonstrates a responsive weather application that fetches real-time weather data from OpenWeatherMap API and displays it with beautiful, context-aware backgrounds and animations.

## Features

- 🌤️ **Real-time Weather**: Current weather data from OpenWeatherMap API
- 🎨 **Dynamic Backgrounds**: Changes based on weather conditions (sunny, rainy, snowy, stormy, foggy, etc.)
- 🌧️ **Weather Animations**: Rain, snow, clouds, lightning, haze, dust, and smoke effects
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔍 **City Search**: Quick search by city name with instant results
- 📊 **Detailed Info**: Temperature, humidity, wind speed, pressure, and "feels like" temperature

## Dependencies

This project uses the following technologies and APIs:

- **HTML5**: Structure and markup
- **CSS3**: Styling, animations, and glassmorphism effects
- **JavaScript (ES6+)**: Application logic and DOM manipulation
- **OpenWeatherMap API**: Weather data provider (requires API key)
- **Google Fonts**: Inter font family

### External Libraries
No external JavaScript libraries or frameworks required! This is a vanilla JavaScript project.

## Setup Instructions

### Prerequisites
- A modern web browser with JavaScript enabled (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)
- Text editor (VS Code, Sublime Text, etc.) - optional, for customization

### Installation

1. **Clone or download the repository**
   ```bash
   # Clone the repository (if you have git)
   git clone <repository-url>
   cd Weather
   
   # Or download as ZIP and extract
   ```

2. **Open the application**
   
   **Method 1: Direct File Opening** (Quickest)
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```
   
   **Method 2: Using a Local Server** (Recommended for development)
   ```bash
   # Using Python 3
   python -m http.server 8000
   # Then open: http://localhost:8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have Node installed)
   npx serve
   # Then open: http://localhost:3000
   
   # Using PHP
   php -S localhost:8000
   ```

### API Key Configuration

The app uses OpenWeatherMap API. A demo API key is included, but for production use, get your own:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key (Free tier: 1000 calls/day)
3. Open `script.js` in a text editor
4. Replace the API key on line 2:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```
5. Save the file and refresh the browser

**Example:**
```javascript
// Before
const API_KEY = 'd775fcae6be7fd6bc61cc79e479cc846';

// After
const API_KEY = 'abc123def456ghi789jkl012mno345pq';
```

## Usage

### Basic Usage
1. Open the application in your browser
2. Type a city name in the search box (e.g., "London", "Tokyo", "New York")
3. Press **Enter** or click the **Search** button
4. View the weather information with animated effects

### Features Explained
- **Temperature Display**: Shows current temperature in Celsius
- **Weather Icon**: Dynamic emoji representing current conditions
- **Feels Like**: Apparent temperature based on humidity and wind
- **Humidity**: Relative humidity percentage
- **Wind Speed**: Wind velocity in meters per second
- **Pressure**: Atmospheric pressure in hPa

## Project Structure

```
Weather/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Weather logic and 3D globe implementation
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic structure and canvas elements
- **CSS3**: Modern styling features
  - CSS Grid and Flexbox for layouts
  - Glassmorphism with backdrop-filter
  - CSS animations and transitions
  - Custom keyframe animations
- **JavaScript (ES6+)**: 
  - Async/await for API calls
  - DOM manipulation
  - Event handling
  - Arrow functions
- **OpenWeatherMap API**: Weather data provider
- **Google Fonts**: Inter font family

## Commands Reference

### Starting the Application
```bash
# Direct open (simplest)
open index.html

# Python server
python -m http.server 8000

# Node.js server
npx serve

# PHP server
php -S localhost:8000
```

### Git Commands (for version control)
```bash
# Initialize repository
git init

# Add files
git add .

# Commit changes
git commit -m "Your descriptive message"

# View commit history
git log --oneline
```

## Features in Detail

### Dynamic Weather Effects
The application includes realistic weather animations:
- **Rain**: Animated raindrops falling from top to bottom
- **Snow**: Rotating snowflakes drifting down
- **Clouds**: Slow-moving cloud formations
- **Lightning**: Random flashes during thunderstorms
- **Haze/Mist/Fog**: Layered translucent effects
- **Dust/Sand**: Floating particles for desert storms
- **Smoke**: Rising smoke particles

### Weather Display
The app shows comprehensive weather information:
- **Current temperature** and conditions
- **"Feels like"** temperature (apparent temperature)
- **Humidity** percentage
- **Wind speed** in meters per second
- **Atmospheric pressure** in hPa
- **Weather icon** - intuitive emoji representation
- **Location** name and country code
- **Current date** formatted nicely

### Dynamic Backgrounds
Background gradients automatically change based on weather:
- **Clear Day** ☀️: Bright blue sky gradient
- **Clear Night** 🌙: Deep dark night gradient
- **Cloudy** ☁️: Gray gradient
- **Rainy** 🌧️: Dark blue gradient with rain animation
- **Snowy** ❄️: White-gray gradient with snowflakes
- **Stormy** ⛈️: Dark gradient with rain and lightning
- **Hazy/Foggy** 🌫️: Misty gray gradient with haze layers
- **Dusty/Sandy** 🏜️: Brown-tan gradient with dust particles
- **Smoky** 💨: Dark gray with smoke effects

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ Internet Explorer not supported

## Performance Notes

- The 3D globe uses WebGL and may be intensive on older devices
- Earth textures are loaded from CDN (requires internet)
- Weather effects are optimized for smooth performance

## Troubleshooting

**Weather not loading:**
- ✅ Check your internet connection
- ✅ Verify the API key is valid and not expired
- ✅ Check browser console (F12) for API errors
- ✅ Ensure city name is spelled correctly
- ✅ API free tier has 1000 calls/day limit

**Styling issues:**
- ✅ Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- ✅ Ensure all CSS files are loaded
- ✅ Check browser console for errors

**Animation performance issues:**
- ✅ Close other browser tabs to free up resources
- ✅ Try on a different browser (Chrome recommended)
- ✅ Reduce browser zoom to 100%
- ✅ Update graphics drivers

## Example Searches
Try searching for these cities to see different weather conditions:
- **London** - Often cloudy or rainy
- **Dubai** - Hot and sunny
- **Moscow** - Cold with potential snow
- **Mumbai** - Humid and warm
- **Tokyo** - Varied conditions
- **New York** - Four-season weather

## Credits

- Weather data: [OpenWeatherMap API](https://openweathermap.org/)
- Icons: Unicode emoji characters
- Font: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Design inspiration: Modern glassmorphism UI trends

## License

This project is created for educational purposes. Feel free to use and modify for learning.

## Contributing

This is an educational project, but suggestions are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Future Enhancements

Potential features to add:
- [ ] 7-day weather forecast
- [ ] Weather history graphs
- [ ] Multiple location comparison
- [ ] Save favorite locations with localStorage
- [ ] Geolocation for automatic location detection
- [ ] Unit conversion (Celsius/Fahrenheit)
- [ ] Weather alerts and warnings
- [ ] Dark/light mode toggle
- [ ] More detailed weather metrics (UV index, visibility, etc.)

---

**Note**: This project was created as part of a web development course to demonstrate API integration, DOM manipulation, and modern CSS techniques.
