import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Kyiv</h1>
            <ul>
                <li>Sunday 14:42</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
<img
src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
alt="Mostly cloudy"
/>
<div className="temperature ">30</div>
<div className="unit mt-3">°C</div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 38%</li>
                        <li>Wind: 13 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
        )
        
}