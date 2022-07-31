import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date: new Date(response.data.dt*1000)

    });
    
}

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
            <div className="row">
            <div className="col-9">
                <input 
                type="search" 
                placeholder="Search for a city..." 
                className="form-control"
                autoFocus="on"
                />
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <h1>{props.defaultCity}</h1>
            <ul>
                <li><FormatedDate date={weatherData.date}/></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
<img
src={weatherData.iconUrl}
alt={weatherData.description}
/>
<div className="temperature ">{Math.round(weatherData.temperature)}</div>
<div className="unit mt-3">°C</div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity} %</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    
} else {
    const apiKey = "ae90fe1370b958ce3e09241e935b028f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...."
}       
}