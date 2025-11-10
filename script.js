
const weather_form = document.querySelectorAll(".weather_form")[0];
const city_input = document.querySelectorAll(".city_input")[0];
const card = document.querySelectorAll(".card")[0];
const api_key = "fcd5086478c939c4faf7e1de92fb3b1c";


weather_form.addEventListener("submit", async event => {
    event.preventDefault(); // forms auto refresh pages but we don't want that
    const city = city_input.value;
    if (city) {
        const weather_data = await get_weather_data(city);
        display_weather_info(weather_data);
    }
    else {
        display_error("Please enter a city");
    }
});

async function get_latitude_and_longitude(city) {
    const api_url = ` http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`;
    let response = await fetch(api_url);
    response = await response.json();
    if (Array.isArray(response)) {
        lat = response[0]["lat"];
        lon = response[0]["lon"];
        return [lat, lon];
    }
    else {
        lat = response["lat"];
        lon = response["lon"];
        return [lat, lon];
    }
}

async function get_weather_data(city) {
    let lat_and_lon = await get_latitude_and_longitude(city)
    lat = lat_and_lon[0]
    lon = lat_and_lon[1]
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json()
}

function kelvin_to_degrees(kelvin_temp) {
    return kelvin_temp - 273.15
}

function display_weather_info(info) {
    console.log(info)
}


function get_weather_emoji(weather) {

}


function display_error(message) {
    const error_display = document.createElement("p");
    error_display.textContent = message;
    error_display.className = "error_display";
    card.appendChild(error_display);
    card.style.display = "flex";
}

get_latitude_and_longitude()