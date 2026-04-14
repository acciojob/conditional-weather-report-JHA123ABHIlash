import React from 'react'

export default function WeatherDisplay({weatherdata}) {
    
  return (
    <div>
        <p>
            Temperature: 
            <span className= {weatherdata.temperature>20  ? 'red':"blue"}> {weatherdata.temperature}</span>
        </p>
        <p>conditions: {weatherdata.conditions}</p>
    </div>
  )
}
