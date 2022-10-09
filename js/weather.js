const API_KEY = "0427e40535d0d4e18999846c2daee9e8"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather");
        const cityContainer = document.querySelector("#location");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
    });
}

function onGeoError() {
    alert("Can't find your location. Weather cannot be provided.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);