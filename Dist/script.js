const form = document.querySelector("form");
const city_section = document.querySelector(".city_section");
const days_section = document.querySelector(".days_section");
const divs = document.querySelectorAll(".day");

const updateWeather = data => {
  const currentCity = data.city_output;
  console.log(currentCity);
  const daysWeather = data.days;
  console.log(daysWeather);

  // update HTML content
  city_section.innerHTML = `
    <img
      class="city_img"
      src="https://source.unsplash.com/featured/?city,${daysWeather.city.name}"
    />

<h2 class="city_name">${daysWeather.city.name}</h2>
    <p class="lead">${currentCity.description}</p>
    <p class=" degress">${Math.floor(daysWeather.list[0].main.temp)}°</p>
 `;

  const data_array = daysWeather.list;
  const array = [];
  data_array.filter(arr => {
    if (arr.dt_txt.includes("00:00:00")) {
      array.push(arr);
    }
  });
  console.log(array);

  divs.forEach((div, index) => {
    div.innerHTML = `<h2 class="city_name">DAY</h2>
    <p class="lead">${Math.floor(array[index].main.temp)}</p>`;
  });
};

//const data_array

const updateCity = async city => {
  const city_output = await getCity(city);
  const days_weather = await getDays(city_output.name);

  return {
    city_output: city_output.weather[0],
    days: days_weather
  };
};

form.addEventListener("submit", e => {
  // prevent default action
  e.preventDefault();

  // entered city value
  const city = form.city.value.trim();
  form.reset();

  // insert new city
  updateCity(city)
    .then(data => {
      updateWeather(data);
      console.log(data);
    })
    .catch(error => {
      alert("Could not fecht data " + error);
    });
});
