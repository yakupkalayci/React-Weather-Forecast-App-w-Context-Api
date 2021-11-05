import SelectCity from "../SelectCity/SelectCity";
import WeatherCards from "../WeatherCards/WeatherCards";



function Container() {
  return (
    <div style={{marginTop:"3rem"}}>
      <SelectCity />
      <WeatherCards />
    </div>
  );
}

export default Container;
