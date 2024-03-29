const APIkey = "cbf7a62a8ad5eb0729fd2051f6515821";

const getCity = async cityName => {
  // we make a request passing the API call and the parameter
  //we get from the function we put in as que q = querie in to
  // the API call
  const APIcall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`;

  // response is the response que get once we fetch from the
  //API CALL
  const response = await fetch(APIcall);

  // We format the response into data using json
  const data = await response.json();
  return data;
};

const getDays = async cityName => {
  const APIcall = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${APIkey}`;

  const response = await fetch(APIcall);

  const data = await response.json();
  return data;
};

getCity("Bruges")
  .then(data => {
    return data;
  })
  .then(data => {
    return getDays(data.name);
  })

  .catch(error => console.log(error));
