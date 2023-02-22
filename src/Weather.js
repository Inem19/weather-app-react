import React from "react";
import axios from "axios";

import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `it is currently ${response.data.main.temp}°c in ${response.data.name}`
    );
  }
  let apiKey = "f72458c09ad644eba2a16441fd1ee46a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
