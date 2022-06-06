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
