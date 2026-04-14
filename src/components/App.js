
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay'
const App = () => {
  const [weatherdata,setWeatherdata]=useState({temperature :20,conditions: "Sunny"});
  return (
    <div>
        
      <WeatherDisplay weatherdata={weatherdata}/>
    </div>
  )
}

export default App
