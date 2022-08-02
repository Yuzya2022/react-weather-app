import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState (props.defaultCity);

function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date(response.data.dt*1000)

    });
    
}

function search(){
    const apiKey = "ae90fe1370b958ce3e09241e935b028f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>       
            <div className="row">
            <div className="col-9">
                <input 
                type="search" 
                placeholder="Search for a city..." 
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
                />
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
        </div>
        );
    
} else {
    search();
    return "Loading...."
}       
}