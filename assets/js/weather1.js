getForecast = function () {
  var urlPoint =
    "https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=metric&appid={API key}";
  var forecastTodayEl = document.getElementsByClassName("forecast");

  fetch(urlPoint).then(function (response) {
    if (200 !== response.status) {
      console.log("There is something wrong. Status Code: " + response.status);
      return;
    }
    forecastTodayEl[0].classList.add("loaded");
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
  });
};
