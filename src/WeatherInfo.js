import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>London</h1>
          <ul>
            <li>Wednesday 16:33, clouds</li>
            <li>
              Humidity:<strong>72%</strong>,Wind:<strong>3km/h</strong>
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
              <span className="Temperature">7</span>
              <span className="Unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
