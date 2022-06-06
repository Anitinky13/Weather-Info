var nameEl = document.querySelector("#city-name");
var userForm = document.querySelector("#user-form");
var searchBtn = document.getElementById("#search-Btn");
var clearBtn = document.getElementById("#clear-Btn");
var searchHist = JSON.parse(localStorage.getItem("searchHist")) || [];

var searchBtn = function (event) {
  event.preventDefault();
  var cityName = nameEl.value.trim();

  if (cityName) {
    fetchWeather(cityName);
  } else {
    alert("City not found!");
  }
};
var fetchWeather = function (city) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=59e7c2fec0a7dcc3a2ab7131590e50bb`;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeather(data);
      });
    }
  });
};
var displayWeather = function (day) {
  console.log(day.city.coord.lon);
  var lat = day.city.coord.lat;
  var lon = day.city.coord.lon;

  var UvEl = `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=59e7c2fec0a7dcc3a2ab7131590e50bb`;
  fetch(UvEl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        var dt =
      });
    }
  });
};

userForm.addEventListener("submit", searchBtn);

// var app = {
//   init: () => {
//     searchBtn.addEventListener("click", app.fetchWeather);
//   },
//   fetchWeather: (cityName) => {
//     //my unique api-assign to a variable
//     var cityName = nameEl.value;
//     var key = "59e7c2fec0a7dcc3a2ab7131590e50bb";
//     var url =
//       "https://api.openweathermap.org/data/2.5/onecall?q=" +
//       cityName +
//       "&appid=" +
//       key;

//     //fetch the url
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) new Error(response.statusText);
//         return response.json();
//       })
//       .then((data) => {
//         app.showWeather(data);
//       })
//       .catch(console.error);
//   },
//   showWeather: (response) => {
//     console.log(response);
//     var row = document.querySelector(".weather.row");
//     row.innerHTML = response.daily.map((day, idx) => {
//       if (idx <= 2) {
//         var dt = new Date(day.dt * 1000);
//         return ``;
//       }
//     });
//   },
// };

// app.init();

// //get request from weather api to execute a current weather app
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

// //call the input in javascript
// //take the value off of it,
// // add a event listner and use the value of the input in the api call

// //need to store the retrieved data inside weather object
// //uv index
// //for uv index if good show green,mild yellow, and bad red

// //to get 5 day forecast for "a" citty

// //loop through and parse to display forecast for 5 days
// //to get history from local storage
// //to clear history button
// //
