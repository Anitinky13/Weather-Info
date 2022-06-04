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

//my unique api-assign to a variable
var key = "3d65e260204c2c7e3d9edd022c956cf0";

function getResponseWeather(cityName) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    key;

  //Clear content of today-weather
  $("#today-weather").empty();
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {});
}
