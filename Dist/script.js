const form = document.querySelector("form");

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
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
});
