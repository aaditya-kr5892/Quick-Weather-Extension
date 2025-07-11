// const { get } = require("express/lib/response");

const API_KEY = "ac48ee9efa762e27aa31a6410f8516a0";
const api_link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".searchbox input");
const searchBtn = document.querySelector(".button-icon button");


async function getWeather(city) {
    const response = await fetch(api_link +city+ `&appid=${API_KEY}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }

    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    // document.querySelector(".weather").innerHTML = data.weather[0].main;
    // document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn
    // return data;

    if(data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "images/clouds.png";
        document.querySelector(".container").style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
    }
    else if(data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "images/clear.png";
        document.querySelector(".container").style.background = "linear-gradient(135deg, #56ccf2, #2f80ed)";
    }
    else if(data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "images/rain.png";
        document.querySelector(".container").style.background = "linear-gradient(135deg, #2b5876, #4e4376)";
    }
    else if(data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "images/drizzle.png";
        document.querySelector(".container").style.backgroundImage = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    }
    else if(data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "images/mist.png";
        document.querySelector(".container").style.backgroundImage = "linear-gradient(135deg, #606c88, #3f4c6b)";
    }
    else if(data.weather[0].main == "Snow") {
        document.querySelector(".weather-icon").src = "images/snow.png";
        document.querySelector(".container").style.backgroundImage = "linear-gradient(135deg, #e0eafc, #cfdef3)";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    // document.querySelector("body").style.height="800px";

}



searchBtn.addEventListener("click",()=>{
    const city = searchBox.value;
    getWeather(city);
})
// getWeather();