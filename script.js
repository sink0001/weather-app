
const weather_form = document.querySelectorAll(".weather_form")[0];
const city_input = document.querySelectorAll(".city_input")[0];
const card = document.querySelectorAll(".card")[0];
const api_key = "86f1383d68fc57d59bd42c1d80224933";


weather_form.addEventListener("submit", async event => {
    event.preventDefault(); // forms auto refresh pages but we don't want that
    console.log("test")
    const city = city_input.value;
    if (city) {

    }
    else {
        display_error("Please enter a city");
    }
});


async function get_weather_data(city) {

}

function display_weather_info(info) {

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