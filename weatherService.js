
import axios from 'axios';
const API_KEY = "12e38fb012cf9023ab3fa9b10df08df8"
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export const getCurrentWeather = async (city) => {
 const response = await 
axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
 return response.data;
};
export const getHistoricalWeather = async (lat, lon, timestamp) => {
const response = await 
axios.get(`${BASE_URL}/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&appid=${API_KEY}&units=metric`);
 return response.data;
};
