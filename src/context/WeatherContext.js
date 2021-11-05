import { createContext } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {
    const values = "deneme";
    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export default WeatherContext;