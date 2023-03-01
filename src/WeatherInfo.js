import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>Wednesday 16:33, {props.data.description}</li>
            <li>
              Humidity:<strong>{props.data.humidity}%</strong>,Wind:
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sun"
            />
            <div>
              <span className="Temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="Unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
