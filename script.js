const apiKey = "b1696f32306c440faeb54218241911";  // Your API key is here
// use your own api key
const cityInput= document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const themeToggle = document.getElementById('theme-toggle');

searchBtn.addEventListener("click", () => {
    const city = cityInput.ariaValueMax.trim();
    if(city) {
        fetchWeather(city);
    }else{
        alert("Please enter a city name!");
    }
})

async function fetchWeather(city){
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?keys=${apiKey}&c'
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data){
    cityName.textContent = `$(data.location.name), $(data.location.country)`;
    weatherDescription.textContent = data.current.condition.text;
    temperature.textContent = Math.round(data.current.temp_c);
    humidity.textContent = data.current.humidity;
    windSpeed.textContent = data.current.wind_kph;
   
    weatherIcon.src = `https:$(data.current.condition.icon)`;
    weatherIcon.alt = data.current.condition.text;
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains(dark-mode)) {
        icon.classList.replace("fa-moon", "fa-sun");
} else {
    icon.classList.replace("fa-sun", "fa-moon");
}
});