import React, {Component} from "react";
import './Weather.css';
import WeatherList from "./WeatherList";
import axios from "axios";

class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            pogoda:[]
        };
    }

     componentDidMount(){
         this.getWeatherData();
    } 
     
     getWeatherData=()=>{
         axios.get('https://danepubliczne.imgw.pl/api/data/synop', {
             mode: 'cors'
         })
         .then(res => {
             const weatherElem = res.data;
             console.log(weatherElem);
             this.setState((data)=>{
                    let newOBJ = {
                        temp: data.temperatura
                    }
                  
             })
         })
     }

     render(){
         return (
         <div className="weather">
             <WeatherList/>
         </div>
        )}

}

export default Weather;