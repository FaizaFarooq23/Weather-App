import Search from "./components/Search/search";
import Weather from "./components/current-weather/weather";
import { Weather_Api_Url } from "./api";
import { Weather_Api_Key} from "./api";
import { useState } from "react";
import ForecastWeather from "./components/forecast/Forecast";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

   const currentWeatherFetch = fetch(
    `${Weather_Api_Url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
  );
  const forecastFetch = fetch(
    `${Weather_Api_Url}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
  ); 
    Promise.all([currentWeatherFetch,  forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });

      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container h-screen ">
      <Search onSearchChange={handleOnSearchChange} />
     {currentWeather && <Weather data = {currentWeather}/>}
   {forecastWeather &&  <ForecastWeather data={forecastWeather}/>}
    </div>
  );
}

export default App;
