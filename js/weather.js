function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live it", lat, lng);
}

function onGeoError() {
    alert("Can't find your location. Weather cannot be provided.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);