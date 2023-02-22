import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import Footer from "./footer";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-5">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-input"
            />
          </div>
          <div className="col-3 p-o">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="search"
            />
          </div>
        </div>
      </form>
      <WeatherInfo />
      <WeatherForecast />
      <Footer />
    </div>
  );
}
