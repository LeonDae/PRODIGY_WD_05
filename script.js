document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
});

async function fetchWeatherData(location) {
    const apiKey = '3801e1a9c1318d87aae4dde4d461a2f7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    const cityName = document.getElementById('cityName');
    const weatherDescription = document.getElementById('weatherDescription');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const weatherContainer = document.getElementById('weatherContainer');

    cityName.textContent = data.name;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherContainer.style.display = 'block';
}
