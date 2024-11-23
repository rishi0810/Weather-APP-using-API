var feels_like = document.querySelector(".feels_like");
var wind_speed = document.querySelector(".wind_speed");
var temp_min = document.querySelector(".temp_min");
var temp_max = document.querySelector(".temp_max");
var city_value = document.querySelector("#input_value");
var main = document.querySelector(".main");
var temp = document.querySelector(".temp ");
var weather_main = document.querySelector(".weather_main");
var pressure = document.querySelector(".pressure");
var humidity = document.querySelector(".humidity");
var sea_level = document.querySelector(".sea_level");
var grnd_level = document.querySelector(".grnd_level");
var cur_time = document.querySelector(".current_time");
var cur_day = document.querySelector(".current_day");
var btn = document.querySelector(".btn");

var date = new Date().toLocaleTimeString();
var day = new Date().toLocaleDateString();
cur_time.textContent = date.slice(0, 4) + date.slice(7);
cur_day.textContent = day;

btn.addEventListener("click", async function () {
  fetch_data();
});

city_value.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    fetch_data();
  }
});

async function fetch_data() {
  const city = city_value.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=98740f4ebc0d63bc0f8ba70090e5a091`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) throw new error(`Error Status: ${response.status}`);

    const data = await response.json();

    feels_like.innerHTML = `${data.main.feels_like}°C`;
    wind_speed.innerHTML = `${data.wind.speed} km/h`;
    temp_min.innerHTML = `${data.main.temp_min}°C`;
    temp_max.innerHTML = `${data.main.temp_max}°C`;
    temp.innerHTML = `${data.main.temp}°C`;
    weather_main.innerHTML = `${data.weather[0].main}`;
    pressure.innerHTML = `${data.main.pressure} Pa`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sea_level.innerHTML = `${data.main.sea_level} m`;
    grnd_level.innerHTML = `${data.main.grnd_level} m`;

    switch (data.weather[0].main) {
      case "Clear":
        main.src = "./assets/clear.png";
        break;
      case "Rain":
        main.src = "./assets/rain.png";
        break;
      case "Snow":
        main.src = "./assets/snow.png";
        break;
      case "Clouds":
        main.src = "./assets/cloud.png";
        break;
      case "Mist":
        main.src = "./assets/mist.png";
        break;

      default:
        main.src = "./assets/cloud.png";
        break;
    }

    main.style.visibility = "visible";
    divs = document.querySelectorAll(".ct");
    divs.forEach((div) => {
      div.style.opacity = 0;
      div.style.visibility = "visible";
      gsap.to(div, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.In",
      });
    });
    main.style.opacity = 0;
    main.style.visibility = "visible";
    gsap.to(main, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power2.In",
    });
    temp.style.opacity = 0;
    temp.style.visibility = "visible";
    gsap.to(temp, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power2.In",
    });
    weather_main.style.opacity = 0;
    weather_main.style.visibility = "visible";
    gsap.to(weather_main, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power2.In",
    });
  } catch (error) {
    console.error(error.message);
  }
}
