let weatherInfo = {
  regoin: "Mecca",
  api_link: (targetRegoin) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${targetRegoin}&appid=69555b4d3cc724c801073ded6214bcd2`,
  errorMsg: (text) => (text === undefined ? "No Data" : text),
},
searchFaild = document.getElementById("search-faild");

function getData() {
    // Set The Regoin 
    weatherInfo.regoin = searchFaild.value;

    fetch(weatherInfo.api_link(weatherInfo.regoin))
    .then((response) => response.json())
    .then((data) => {

        document.querySelector('.background').src = `https://source.unsplash.com/1600x900/?${data.name}`
      document.getElementById("regoin-name").innerHTML = weatherInfo.errorMsg(
        data.name
      );
      document.getElementById("weather-description").innerHTML =
        weatherInfo.errorMsg(data.weather[0].description);
        document.getElementById("weather-description-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      document.getElementById("temp").innerHTML = weatherInfo.errorMsg(
        data.main.temp
      );
      document.getElementById("weather-humidity").innerHTML =
        weatherInfo.errorMsg(data.main.humidity + "%");
      document.getElementById("weather-wind").innerHTML = weatherInfo.errorMsg(
        data.wind.speed + "km/h"
      );
    });
}
window.onload = () => getData();

searchFaild.addEventListener("input", () => getData());
