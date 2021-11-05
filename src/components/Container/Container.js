import React from 'react'

import SelectCity from '../SelectCity/SelectCity'
import WeatherCards from '../WeatherCards/WeatherCards'
import WeatherCard from '../WeatherCard/WeatherCard'

function Container() {
    return (
        <div>
            <SelectCity />
            <WeatherCards />
            <WeatherCard />
        </div>
    )
}

export default Container
