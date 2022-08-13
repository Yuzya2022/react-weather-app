import React, {useState, useEffect, useLayoutEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast]= useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if(loaded){
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
        <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col">
        <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col">
        <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col">
        <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col">
        <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    </div>
  );

}
  
else {
  let apiKey ="f434eda7b7f505e61af8cb42d6657dfa";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;

  let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return null;

}
}
