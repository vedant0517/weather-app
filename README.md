# Weather App with Interactive 3D Globe

A modern weather application featuring real-time weather data and an interactive 3D Earth globe for location selection.

## Features

- 🌍 **Interactive 3D Globe**: Real Earth with rotating clouds, click to select any location
- 🌤️ **Real-time Weather**: Current weather data from OpenWeatherMap API
- 🎨 **Dynamic Backgrounds**: Changes based on weather conditions (sunny, rainy, snowy, stormy)
- 🌧️ **Weather Animations**: Rain, snow, clouds, and lightning effects
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎯 **Intuitive Interface**: Search by city or click on globe

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and Three.js CDN)

### Installation

1. **Clone or download the repository**
   ```bash
   # If using git
   git clone <repository-url>
   cd Weather
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
   Then open `http://localhost:8000` in your browser

### API Key Configuration

The app uses OpenWeatherMap API. The current API key is included for testing, but you should get your own:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the API key in `script.js`:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

## Usage

### Search by City
1. Type a city name in the search box
2. Press Enter or click the Search button
3. View current weather and detailed information

### Select Location on Globe
1. Click the "🌍 Select Location on Globe" button
2. Rotate and zoom the 3D Earth using your mouse/touch:
   - **Drag**: Rotate the globe
   - **Scroll**: Zoom in/out
   - **Click**: Select a location (marker appears)
3. Click "Get Weather for Selected Location"
4. View weather for the selected coordinates

## Project Structure

```
Weather/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Weather logic and 3D globe implementation
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Structure and Canvas element
- **CSS3**: Styling, animations, glassmorphism effects
- **JavaScript (ES6+)**: Application logic
- **Three.js**: 3D graphics library for the Earth globe
- **OpenWeatherMap API**: Real-time weather data
- **Google Fonts**: Inter font family

## Features in Detail

### 3D Globe
- Built with Three.js for realistic 3D rendering
- Real Earth texture from NASA imagery
- Animated cloud layer
- Ambient and directional lighting
- Orbit controls for intuitive navigation
- Raycasting for precise location selection
- Visual marker on selected location

### Weather Display
- Current temperature and conditions
- "Feels like" temperature
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Weather icon
- Location and date

### Dynamic Backgrounds
The app changes its gradient background based on weather:
- **Clear Day**: Blue sky gradient
- **Clear Night**: Dark night gradient
- **Cloudy**: Gray gradient
- **Rainy**: Dark blue gradient with rain animation
- **Snowy**: White-gray gradient with snowflakes
- **Stormy**: Dark gradient with rain and lightning

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

**Globe not appearing:**
- Check browser console for errors
- Ensure WebGL is enabled in your browser
- Try refreshing the page

**Weather not loading:**
- Check your internet connection
- Verify the API key is valid
- Check browser console for API errors

**Slow performance:**
- Close other browser tabs
- Try on a different device
- Reduce browser zoom level

## Credits

- Earth textures: Three.js examples (NASA imagery)
- Weather data: OpenWeatherMap API
- Icons: Unicode emoji
- Font: Google Fonts (Inter)

## License

This project is for educational purposes.

## Future Enhancements

- 7-day weather forecast
- Weather history graphs
- Multiple location comparison
- Save favorite locations
- More detailed globe (cities, countries)
- Night side of Earth visualization
- Weather alerts and warnings
