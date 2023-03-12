const successCallback = (position) => {
  console.log(position);

  const weatherInfo = "https://api.open-meteo.com/v1/forecast?latitude="+ position.coords.latitude +"&longitude="+ position.coords.longitude +"&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&forecast_days=1&timezone=auto";
  
  fetch(weatherInfo)
  .then(function (response) {
    return response.json();
  })
  .then(function(obj) {
    //
    console.log(obj);
  })
};

const errorCallback = (error) => {
  //make a text container to show container.textContent = "Unable to retrieve your location"; something along those lines
  console.log(error);
};
//click event v
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


//concatinate the latitude and longitude info from geolocation api into the link

// 

