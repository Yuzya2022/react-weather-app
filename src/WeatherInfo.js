import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
return(
<div className="WeatherInfo">
<h1>{props.data.city}</h1>
<ul>
    <li><FormatedDate date={props.data.date}/></li>
    <li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row">
    <div className="col-6">
<div className="mt-7 icon">
<WeatherIcon code={props.data.icon}/>        
</div>
<div className="temperature ">{Math.round(props.data.temperature)}</div>
<div className="unit mt-3">°C</div>
    </div>
    <div className="col-6">
        <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
        </ul>
    </div>
</div>
</div>
);
}