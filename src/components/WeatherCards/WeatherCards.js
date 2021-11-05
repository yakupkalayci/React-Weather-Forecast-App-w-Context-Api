import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import timeConverter from "../../context/getDay";

import './style.modules.css';

function WeatherCards() {
  const data = useContext(WeatherContext);
  if(!Array.isArray(data?.weatherData)) return <div>Loading....</div>
  else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "5rem",
          padding: "1rem",
          fontSize:"1.2rem"
        }}
      >
        {data.weatherData.map((weather, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#F3FEB0",
              color: "#504355",
              border: "1px solid black",
              padding: "2rem 2rem",
              marginRight: "4rem",
              marginBottom: "2rem",
              borderRadius: "8px",
              width: "190px",
              height: "200px",
            }}
            id={index === 0 ? "today" : ""}
          >
            <div>{timeConverter(weather.dt)}</div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            </div>
            <div style={{marginTop:"10px"}}>{weather.weather[0].main}</div>
            <div style={{marginTop:"10px"}}>
              <span>{weather.temp.min}</span>
              <span>/</span>
              <span>{weather.temp.max}</span>
            </div>
          </div>
        ))}
      </div>
    );
  } 

}

export default WeatherCards;
