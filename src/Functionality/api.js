import weatherForecasting from './dom'
import { postWeatherForecastData } from './dom';

const input = document.querySelector('.search-input');
const dayFind = document.querySelector('.days')

input.addEventListener('search', findCityWeather)

function findCityWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=720db497deedc97541097097eaee6cfd`)
    .then(response => response.json())
    .then(data => {        
        async function getAllInfo() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)
                const allData = await response.json()

                document.querySelector('h3').innerText = input.value;
                weatherForecasting(allData)
                input.value = ''
                
                while (dayFind.hasChildNodes()) {
                    dayFind.removeChild(dayFind.firstChild)
                }
                allData.daily.forEach((value, index) => {
                    const dayForecast = new Date(value.dt * 1000).toLocaleDateString('en', {weekday: 'long'})
                    const weatherCasting = postWeatherForecastData(value, dayForecast)

                    if (index > 0) dayFind.insertAdjacentHTML('beforeend', weatherCasting)
                })

                console.log(allData, allData.daily[0].dt, new Date(allData.daily[0].dt))
            } catch (error) {
                input.value = ''
                return
            }
        }
        getAllInfo()
    })
} 

window.addEventListener('load', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=720db497deedc97541097097eaee6cfd')
    .then(response => response.json())
    .then(loadedData => {
        console.log(loadedData)
        async function loadCityWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${loadedData.coord.lat}&lon=${loadedData.coord.lon}&units=imperial&exclude=minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)
                const weatherData = await response.json()
            
                weatherForecasting(weatherData)

                console.log('Weather', weatherData)
                weatherData.daily.forEach((value, index) => {
                    const dayForecast = new Date(value.dt * 1000).toLocaleDateString('en', {weekday: 'long',})
                    const weatherCasting = postWeatherForecastData(value, dayForecast)
                       
                    if (index > 0) dayFind.insertAdjacentHTML('beforeend', weatherCasting)
                })
            } catch (error) {
                console.log(error)
            }
        }
        loadCityWeather()
    })
})

export default findCityWeather