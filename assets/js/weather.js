//variables.
var nameEl = document.querySelector("#city-name");
var userForm = document.querySelector("#user-form");
var searchBtn = document.querySelector("#search-Btn");
var weatherToday = document.getElementById("weather-today");
var fiveDays = document.getElementById("five-days");

//search button function
var searchBtn = function (event) {
  event.preventDefault();
  var cityName = nameEl.value.trim();
  //if intered correct city give the information
  if (cityName) {
    fetchWeather(cityName);
    //if not correct city name send alert
  } else {
    alert("City not found!");
  }
};
//get weather function
var fetchWeather = function (city) {
  //api url to get the data from
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=59e7c2fec0a7dcc3a2ab7131590e50bb`;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeather(data);
      });
    }
  });
};
var display = document.getElementById("weather-today");
var container = document.createElement("div");
container.setAttribute("class", "container");
display.appendChild(container);
//weather display function
var displayWeather = function (day) {
  console.log(day);
  var lat = day.city.coord.lat;
  var lon = day.city.coord.lon;
  //UV index function
  var UvEl = `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&lang=en&units=imperial&appid=59e7c2fec0a7dcc3a2ab7131590e50bb`;
  fetch(UvEl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        console.log(day);
        var dt = new Date(data.current.dt * 1000);
        weatherToday.innerHTML = `<h2 class="card-title p-2">${
          day.city.name
        } (${dt.toDateString()})
        <img 
        src="http://openweathermap.org/img/wn/$%7Bdata.current.weather[0].icon%7D.png" alt="${
          data.current.weather[0].description
        }"/>
        <p>Temp:${data.current.temp}&deg;F</p>
        <p>Humidity:${data.current.humidity}%</p>
        <p>Wind Speed:${data.current.wind_speed}MPH</p>
        <p>UV Index:<span>${data.current.uvi}</span></p>`;
        //look how to get weekly report
        fiveDays.innerHTML =
          `<h2>5-Day Weather</h2>` +
          data.daily.map((day, idx) => {
            if (idx > 0 && idx < 6) {
              var dt = new Date(day.dt * 1000);
              console.log(dt);
              return `<div class="card">
              <p>date:(${dt.toDateString()})</p>
              <p><img 
              src="http://openweathermap.org/img/wn/$%7Bdata.current.weather[0].icon%7D.png" alt="${
                data.current.weather[0].description
              }"/>
              </p>
              <p>Temp:${data.current.temp}&deg;F</p>
              <p>Humidity:${data.current.humidity}%</p>
              <p>Wind speed:${data.current.wind_speed}MPH</p>

          </div>`;

              // Generate and append html elements on the page
            }
          });
      });
    }
  });
};
//create an array of the days
//create for loop for the array
//for each item of array print object

userForm.addEventListener("submit", searchBtn);
