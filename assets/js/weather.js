var nameEl = document.getElementById("city-name");
var searchBtn = document.getElementById("search-Btn");
var clearBtn = document.getElementById("clear-Btn");
var cityName = document.getElementById("citys-name");
var currentPic = document.getElementById("current-pic");
var temperatureEl = document.getElementById("temperature");
var humidEL = document.getElementById("humidity");
var windEl = document.getElementById("wind-speed");
var uvEl = document.getElementById("UV-index");
var historyEl = document.getElementById("history");
var FiveEl = document.getElementById("five-days");
var weatherEl = document.getElementById("Weather-Today");
var SearchingHist = JSON.parse(localStorage.getItem("search")) || [];
//create forcast variable

getForecast = function () {
  var urlPoint =
    "https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=metric&appid={API key}";
  var forecastTodayEl = document.getElementsByClassName("forecast");
  //need to use fetch,promise that resolves response.
  fetch(urlPoint)
    .then(function (response) {
      if (200 !== response.status) {
        console.log(
          "There is something wrong. Status Code: " + response.status
        );
        return;
      }
      forecastTodayEl[0].classList.add("loaded");
      //json data and loop through the array
      response.json().then(function (data) {
        var weatherDay = "";
        data.daily.forEach((value, index) => {
          if (index > o) {
            var name = new Date(value.dt * 1000).toLocaleDateString("en", {
              weekday: "long",
            });
            var imageEl = value.weather[0].image;
            var temperatureEl = value.temp.day.toFixed(0);
            weatherDay = `<div class="forecast-day">
                <p>${name}</p>
                <p><span class="ima-${image}" title="${image}"></span></p>
                <div class="forecast-day--temp">${temp}<sup>°C</sup></div>
            </div>`;
            forecastTodayEl[0].insertAdjacentHTML("before", weatherDay);
          }
        });
      });
    })
    .catch(function (error) {
      console.log("fetch Error :-S", error);
    });
};

searchBtn.addEventListener("click", searchClick);
function searchClick() {
  var cityName = nameEl.value;
  console.log(cityName);
}

//my unique api-assign to a variable

var key = "59e7c2fec0a7dcc3a2ab7131590e50bb";
//get request from weather api to execute a current weather app
// function getResponseWeather(cityName) {
//   var queryURL =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     cityName +
//     "&appid=" +
//     key;

//   //Clear content of today-weather
//   $("#today-weather").empty();
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//   });
// }

//call the input in javascript
//take the value off of it,
// add a event listner and use the value of the input in the api call

//need to store the retrieved data inside weather object
//uv index
//for uv index if good show green,mild yellow, and bad red

//to get 5 day forecast for "a" citty

//loop through and parse to display forecast for 5 days
//to get history from local storage
//to clear history button
//
