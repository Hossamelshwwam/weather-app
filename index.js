// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=3191de709bd61a28a6fcbc75d3523a3e&units=metric"
// )
//   .then((result) => {
//     result = result.json();

//     return result;
//   })
//   .then((result) => {
//     console.log(result.name);
//     console.log(Math.round(result.main.temp));
//     let textoftemp = document.createTextNode(Math.round(result.main.temp));
//     document.body
//       .appendChild(document.createElement("p"))
//       .appendChild(textoftemp);
//     let textofname = document.createTextNode(result.name);
//     document.body
//       .appendChild(document.createElement("p"))
//       .appendChild(textofname);
//   });

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=3191de709bd61a28a6fcbc75d3523a3e&units=metric"
// )
//   .then((result) => {
//     result = result.json();

//     return result;
//   })
//   .then((result) => {
//     console.log(result.weather[0].main);
//     console.log(result);
//   });

let input = document.querySelector("input");
let btn = document.querySelector(".search-icon");
let weatherSide = document.querySelector(".weather");
let images = document.querySelectorAll(".weather > img");
let temp = document.querySelector(".temp");
let countryName = document.querySelector(".country-name");
let speedHumidity = document.querySelector(".info-humidity .speed");
let speedwind = document.querySelector(".info-speed-wind .speed");
let error = document.querySelector(".error");

btn.addEventListener("click", function () {
  let urlName = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3191de709bd61a28a6fcbc75d3523a3e&units=metric`;
  fetch(urlName)
    .then((result) => {
      if (result.status == 200) {
        result = result.json();
        return result;
      }
    })
    .then((result) => {
      weatherSide.classList.remove("hidden");
      error.classList.add("hidden");
      countryName.innerHTML = input.value;
      temp.innerHTML = `${Math.round(result.main.temp)}°c`;
      speedwind.innerHTML = `${Math.round(result.wind.speed)} KM/H`;
      speedHumidity.innerHTML = `${Math.round(result.main.humidity)}%`;
      images.forEach(function (img) {
        if (img.dataset.cond == result.weather[0].main) {
          img.classList.remove("hidden");
        } else {
          img.classList.add("hidden");
        }
      });
      input.value = "";
    })
    .catch((err) => {
      weatherSide.classList.add("hidden");
      error.classList.remove("hidden");
    });
});
