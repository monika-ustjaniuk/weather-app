import React from "react";
import './WeatherList.css';

function WeatherList(props){

    return (
        <div className="weather-list">
             <ul>
                <li>
                    <span className="city">Elblag</span>
                    <span className="temperature">Temperatura: </span>
                    <span className="humidity">Wilgotność: </span>
                    <span className="pressure">Ciśnienie: </span>
                </li>
            </ul>
        </div>
    )
}

export default WeatherList;