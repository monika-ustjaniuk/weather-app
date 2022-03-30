import React from "react";
import './WeatherList.css';

function WeatherList(props){

   /*  let [pogoda, setData] = useState([])
    useEffect(()=>{
        setData(props.pogoda)
    },) */
     
 /*    function sortTemp(){
        const pogodaSort = props.pogoda.sort((a, b)=>{
            return a.temperatura < b.temperatura ? 1 : -1
        })

        console.log(sortTemp);
    } */

let pogodaList = props.pogoda.map((miasto)=>{
    return(
        <li key={miasto.id_stacji}>
                    <span className="city">{miasto.stacja}</span>
                    <span className="temperature">Temperatura: {miasto.temperatura}</span>
                    <span className="humidity">Wilgotność: {miasto.wilgotnosc_wzgledna}</span>
                    <span className="pressure">Ciśnienie: {miasto.cisnienie}</span>
                </li>
    )
})
    return (
       
        <div className="weather-list">
            {/*  <button onClick={sortTemp}>temp up</button> */}
             <ul>
                {pogodaList}
            </ul>
        </div>
    )
}

export default WeatherList;