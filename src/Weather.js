import React, {Component} from "react";
import './Weather.css';
import WeatherList from "./WeatherList";
import axios from "axios";

class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            pogoda:[],
             sorted:[],
            
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
            /*  console.log(weatherElem); */

             this.setState({pogoda: weatherElem})
             this.setState({sorted: weatherElem})
             
             
         }) 
     }

      tempUp = () => {
        let arr = this.state.pogoda
        arr.sort((a, b)=>{return (a.temperatura - b.temperatura)});
        this.setState({sorted: arr})
       
      }

      tempDown = () => {
        let arr = this.state.pogoda
        arr.sort((a, b)=>{return (b.temperatura - a.temperatura)});
        this.setState({sorted: arr})
       
      }

      AlfabetUp = () => {
        let arr = this.state.pogoda
        arr.sort((a, b)=>{return (a.stacja > b.stacja)? 1 : -1});
        this.setState({sorted: arr})
       
      }


        searchCity = () => {
        this._inputSearch.value = this._inputSearch.value.trim().toLocaleLowerCase()
        let cityFilter = this.state.pogoda.filter((city)=> {
            return (city.stacja.toLowerCase().includes(this._inputSearch.value))
        })

        this.setState({sorted: cityFilter})
        
      }  

 

   render(){
         
         return (
         <div className="weather">
             <div>
                 <button onClick={this.tempUp}>Sortuj temperature do najwyzszej</button>
                 <button onClick={this.tempDown}>Sortuj temperature do najnizszej</button>
                 <button onClick={this.AlfabetUp}>Sortuj alfabetycznie</button>
                 <input ref={stacja => this._inputSearch = stacja} onChange={this.searchCity}
                  type="text" placeholder="Szukaj miasta"/>
             </div>
           {/*  <input onClick={this.tempUp} type="button"/>
            <input onClick={this.tempDown} type="button"/> 
            <input onClick={this.AlfabetUp} type="button"/>  */}
             <WeatherList pogoda={this.state.sorted}/>
         </div>
        )}

}

export default Weather;