// OpenWeatherMap API Key
const API_KEY = 'd775fcae6be7fd6bc61cc79e479cc846';

// Global variables
let lightningInterval = null; // Lightning animation interval
let currentCity = ''; // Store current city
let currentData = null; // Store current weather data
let isCelsius = true; // Temperature unit
let lastUpdated = null; // Last update time

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    loadFavorites();
});

// Initialize city input event listener
document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeatherByCity();
    }
});

/**
 * Change background gradient based on weather conditions
 * @param {string} weatherMain - Main weather condition (Clear, Clouds, Rain, etc.)
 * @param {boolean} isDay - Whether it's daytime
 */
function changeBackground(weatherMain, isDay) {
    document.body.className = '';
    
    if (weatherMain === 'Clear') {
        document.body.classList.add(isDay ? 'clear-day' : 'clear-night');
    } else if (weatherMain === 'Clouds') {
        document.body.classList.add('cloudy');
    } else if (weatherMain === 'Rain' || weatherMain === 'Drizzle') {
        document.body.classList.add('rainy');
    } else if (weatherMain === 'Snow') {
        document.body.classList.add('snowy');
    } else if (weatherMain === 'Thunderstorm') {
        document.body.classList.add('stormy');
    } else if (weatherMain === 'Haze' || weatherMain === 'Mist' || weatherMain === 'Fog') {
        document.body.classList.add('hazy');
    } else if (weatherMain === 'Dust' || weatherMain === 'Sand') {
        document.body.classList.add('dusty');
    } else if (weatherMain === 'Smoke') {
        document.body.classList.add('smoky');
    }
}

/**
 * Create animated rain effect
 * Generates 100 raindrops with random positions and animation delays
 */
function createRain() {
    const rainContainer = document.getElementById('rain');
    rainContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rainContainer.appendChild(drop);
    }
}

/**
 * Create animated snow effect
 * Generates 50 snowflakes with random positions and animation delays
 */
function createSnow() {
    const snowContainer = document.getElementById('snow');
    snowContainer.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = '❄';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        flake.style.animationDelay = Math.random() * 2 + 's';
        snowContainer.appendChild(flake);
    }
}

/**
 * Create animated cloud effect
 * Generates 3 clouds with random positions and animation timing
 */
function createClouds() {
    const cloudsContainer = document.getElementById('clouds');
    cloudsContainer.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.top = (Math.random() * 40 + 10) + '%';
        cloud.style.width = (Math.random() * 100 + 150) + 'px';
        cloud.style.height = '60px';
        cloud.style.animationDuration = (Math.random() * 20 + 40) + 's';
        cloud.style.animationDelay = (i * 10) + 's';
        cloudsContainer.appendChild(cloud);
    }
}

/**
 * Trigger lightning flash effect
 */
function triggerLightning() {
    const lightning = document.getElementById('lightning');
    lightning.classList.add('flash');
    setTimeout(() => lightning.classList.remove('flash'), 200);
}

/**
 * Create haze/mist/fog effect
 * Generates slow-moving haze layers
 */
function createHaze() {
    const cloudsContainer = document.getElementById('clouds');
    cloudsContainer.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const haze = document.createElement('div');
        haze.className = 'haze-layer';
        haze.style.top = (Math.random() * 100) + '%';
        haze.style.animationDuration = (Math.random() * 30 + 40) + 's';
        haze.style.animationDelay = (i * 5) + 's';
        cloudsContainer.appendChild(haze);
    }
}

/**
 * Create dust/sand storm effect
 * Generates floating dust particles
 */
function createDust() {
    const cloudsContainer = document.getElementById('clouds');
    cloudsContainer.innerHTML = '';
    
    for (let i = 0; i < 40; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.width = (Math.random() * 3 + 2) + 'px';
        dust.style.height = (Math.random() * 3 + 2) + 'px';
        dust.style.animationDuration = (Math.random() * 5 + 3) + 's';
        dust.style.animationDelay = Math.random() * 3 + 's';
        cloudsContainer.appendChild(dust);
    }
}

/**
 * Create smoke effect
 * Generates rising smoke particles
 */
function createSmoke() {
    const cloudsContainer = document.getElementById('clouds');
    cloudsContainer.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke-particle';
        smoke.style.left = Math.random() * 100 + '%';
        smoke.style.animationDuration = (Math.random() * 8 + 6) + 's';
        smoke.style.animationDelay = Math.random() * 4 + 's';
        cloudsContainer.appendChild(smoke);
    }
}

/**
 * Clear all weather effects (rain, snow, clouds, lightning)
 */
function clearEffects() {
    document.getElementById('rain').innerHTML = '';
    document.getElementById('snow').innerHTML = '';
    document.getElementById('clouds').innerHTML = '';
    
    if (lightningInterval) {
        clearInterval(lightningInterval);
        lightningInterval = null;
    }
}

/**
 * Fetch weather data for a city using OpenWeatherMap API
 * Handles loading states and error messages
 */
async function getWeatherByCity() {
    const city = document.getElementById('cityInput').value.trim();
    
    // Validate input
    if (!city) {
        return;
    }

    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const weatherInfo = document.getElementById('weatherInfo');

    // Show loading state
    loading.classList.add('active');
    error.classList.remove('active');
    weatherInfo.classList.remove('active');

    try {
        // Fetch weather data from API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (err) {
        loading.classList.remove('active');
        error.classList.add('active');
    }
}

/**
 * Display weather data on the page
 * Updates all weather information elements and triggers visual effects
 * @param {Object} data - Weather data from OpenWeatherMap API
 */
function displayWeather(data) {
    const loading = document.getElementById('loading');
    const weatherInfo = document.getElementById('weatherInfo');

    // Clear previous effects
    clearEffects();

    const weatherMain = data.weather[0].main;
    const isDay = data.weather[0].icon.includes('d');
    
    // Change background based on weather
    changeBackground(weatherMain, isDay);

    // Add weather-specific effects
    if (weatherMain === 'Rain' || weatherMain === 'Drizzle') {
        createRain();
    } else if (weatherMain === 'Snow') {
        createSnow();
    } else if (weatherMain === 'Clouds') {
        createClouds();
    } else if (weatherMain === 'Thunderstorm') {
        createRain();
        lightningInterval = setInterval(triggerLightning, 3000 + Math.random() * 4000);
    } else if (weatherMain === 'Haze' || weatherMain === 'Mist' || weatherMain === 'Fog') {
        createHaze();
    } else if (weatherMain === 'Dust' || weatherMain === 'Sand') {
        createDust();
    } else if (weatherMain === 'Smoke') {
        createSmoke();
    }

    // Update weather information
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Map weather icons to emoji
    const iconMap = {
        '01d': '☀️', '01n': '🌙',
        '02d': '⛅', '02n': '☁️',
        '03d': '☁️', '03n': '☁️',
        '04d': '☁️', '04n': '☁️',
        '09d': '🌧️', '09n': '🌧️',
        '10d': '🌦️', '10n': '🌧️',
        '11d': '⛈️', '11n': '⛈️',
        '13d': '❄️', '13n': '❄️',
        '50d': '🌫️', '50n': '🌫️'
    };
    
    document.getElementById('weatherIcon').textContent = iconMap[data.weather[0].icon] || '🌤️';
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

    // Store current data
    currentData = data;
    currentCity = data.name;
    lastUpdated = new Date();
    updateLastUpdatedTime();
    
    // Show refresh button
    document.getElementById('refreshBtn').classList.add('show');
    
    // Update favorite button state
    updateFavoriteButton();
    
    // Convert temperature if needed
    if (!isCelsius) {
        convertTemperatureDisplay();
    }

    // Hide loading and show weather info
    loading.classList.remove('active');
    weatherInfo.classList.add('active');
}

/**
 * Get weather data using geolocation
 */
async function getWeatherByLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
    }

    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const weatherInfo = document.getElementById('weatherInfo');

    loading.classList.add('active');
    error.classList.remove('active');
    weatherInfo.classList.remove('active');

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) {
                    throw new Error('Location not found');
                }

                const data = await response.json();
                document.getElementById('cityInput').value = data.name;
                displayWeather(data);
            } catch (err) {
                loading.classList.remove('active');
                error.classList.add('active');
            }
        },
        (err) => {
            loading.classList.remove('active');
            alert('Unable to retrieve your location');
        }
    );
}

/**
 * Refresh weather data for current city
 */
function refreshWeather() {
    if (currentCity) {
        document.getElementById('cityInput').value = currentCity;
        getWeatherByCity();
    }
}

/**
 * Toggle temperature unit between Celsius and Fahrenheit
 */
function toggleUnit() {
    isCelsius = !isCelsius;
    document.getElementById('unitToggle').textContent = isCelsius ? '°C' : '°F';
    localStorage.setItem('temperatureUnit', isCelsius ? 'celsius' : 'fahrenheit');
    
    if (currentData) {
        convertTemperatureDisplay();
    }
}

/**
 * Convert and update temperature display
 */
function convertTemperatureDisplay() {
    if (!currentData) return;
    
    const temp = isCelsius 
        ? currentData.main.temp 
        : (currentData.main.temp * 9/5) + 32;
    
    const feelsLike = isCelsius 
        ? currentData.main.feels_like 
        : (currentData.main.feels_like * 9/5) + 32;
    
    const unit = isCelsius ? '°C' : '°F';
    
    document.getElementById('temperature').textContent = `${Math.round(temp)}${unit}`;
    document.getElementById('feelsLike').textContent = `${Math.round(feelsLike)}${unit}`;
}

/**
 * Update last updated time display
 */
function updateLastUpdatedTime() {
    if (!lastUpdated) return;
    
    const now = new Date();
    const diff = Math.floor((now - lastUpdated) / 1000); // seconds
    
    let timeText = '';
    if (diff < 60) {
        timeText = 'Just now';
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        timeText = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        timeText = lastUpdated.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit'
        });
    }
    
    document.getElementById('lastUpdated').textContent = `Last updated: ${timeText}`;
}

/**
 * Load favorites from localStorage
 */
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
    displayFavorites(favorites);
}

/**
 * Display favorite cities
 */
function displayFavorites(favorites) {
    const container = document.getElementById('favorites');
    container.innerHTML = '';
    
    favorites.forEach(city => {
        const btn = document.createElement('div');
        btn.className = 'favorite-city';
        btn.innerHTML = `
            <span onclick="loadFavoriteCity('${city}')">${city}</span>
            <span class="remove" onclick="removeFavorite('${city}')">✕</span>
        `;
        container.appendChild(btn);
    });
}

/**
 * Load weather for a favorite city
 */
function loadFavoriteCity(city) {
    document.getElementById('cityInput').value = city;
    getWeatherByCity();
}

/**
 * Toggle favorite status for current city
 */
function toggleFavorite() {
    if (!currentCity) return;
    
    let favorites = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
    const index = favorites.indexOf(currentCity);
    
    if (index === -1) {
        if (favorites.length >= 5) {
            alert('Maximum 5 favorite cities allowed');
            return;
        }
        favorites.push(currentCity);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
    displayFavorites(favorites);
    updateFavoriteButton();
}

/**
 * Remove a city from favorites
 */
function removeFavorite(city) {
    let favorites = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
    favorites = favorites.filter(c => c !== city);
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
    displayFavorites(favorites);
    updateFavoriteButton();
}

/**
 * Update favorite button appearance
 */
function updateFavoriteButton() {
    if (!currentCity) return;
    
    const favorites = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
    const btn = document.getElementById('favoriteBtn');
    const isFavorite = favorites.includes(currentCity);
    
    btn.textContent = isFavorite ? '⭐ Remove from Favorites' : '⭐ Add to Favorites';
    btn.classList.toggle('favorited', isFavorite);
}

/**
 * Load saved settings from localStorage
 */
function loadSettings() {
    // Load temperature unit
    const unit = localStorage.getItem('temperatureUnit');
    if (unit === 'fahrenheit') {
        isCelsius = false;
        document.getElementById('unitToggle').textContent = '°F';
    }
}

// Update last updated time every minute
setInterval(() => {
    if (lastUpdated) {
        updateLastUpdatedTime();
    }
}, 60000);