import {useContext} from 'react'
import WeatherContext from '../../context/WeatherContext'


function SelectCity() {
    const data = useContext(WeatherContext);

    const handleChange = (e) => {
       data.cities.forEach((item, index) => {
           if(item.name === e.target.value) {
               data.setCity(data.cities[index]);
           }
       })
    }

    return (
        <div>
            <select onChange={handleChange} value={data.city.name}>
                {
                    data.cities.map((city, index) => (
                        <option key={index} value={city.name}>{city.name}</option>
                    ))
                }
            </select>
            
            <h2>{data.city.name}</h2>
        </div>
    )
}

export default SelectCity
