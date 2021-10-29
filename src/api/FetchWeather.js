import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '0c61710fdec07f4507090a38a10befd9';

export const fetchWeatherData = async (country) => {

    const { data } =  await axios.get(URL, {
        params: {
            q: country,
            units: 'metric',
            APPID: API_KEY
        }
    })

    return data;
}