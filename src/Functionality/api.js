import weatherForecasting, { postWeatherForecastData } from './dom'

const input = document.querySelector('.search-input');
const dayFind = document.querySelector('.days');
const tempContain = document.querySelector('.temp-contain');

input.addEventListener('search', findCityWeather);

function findCityWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=720db497deedc97541097097eaee6cfd`)
    .then(response => response.json())
    .then(data => {
        async function getAllInfo() {
            try {
                let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=hourly,minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)
                if (tempContain.dataset.temp == 'cels') response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=hourly,minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)
                const allData = await response.json()
                
                document.querySelector('h3').innerText = input.value;
                weatherForecasting(allData);
                input.value = '';
                
                while (dayFind.hasChildNodes()) {
                    dayFind.removeChild(dayFind.firstChild);
                }
                allData.daily.forEach((value, index) => {
                    const dayForecast = new Date(value.dt * 1000).toLocaleDateString('en', {weekday: 'long'})
                    const weatherCasting = postWeatherForecastData(value, dayForecast)

                    if (index > 0) dayFind.insertAdjacentHTML('beforeend', weatherCasting)
                })

                if (tempContain.dataset.temp == 'cels') {
                    const allTemps = document.querySelectorAll('.temps')

                    allTemps.forEach(v => {
                        v.innerText = v.innerText.replace(/[^0-9]/g, '')
                        v.innerText += '°C'
                    })
                }
            } catch (error) {
                input.value = ''
                throw error
            }
        }
        getAllInfo()
    })
} 

window.addEventListener('load', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=720db497deedc97541097097eaee6cfd')
    .then(response => response.json())
    .then(loadedData => {
        async function loadCityWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${loadedData.coord.lat}&lon=${loadedData.coord.lon}&units=imperial&exclude=hourly,minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)
                const weatherData = await response.json()
            
                weatherForecasting(weatherData)

                weatherData.daily.forEach((value, index) => {
                    const dayForecast = new Date(value.dt * 1000).toLocaleDateString('en', {weekday: 'long'})
                    const weatherCasting = postWeatherForecastData(value, dayForecast)
                       
                    if (index > 0) dayFind.insertAdjacentHTML('beforeend', weatherCasting)
                })
            } catch (error) {
                throw error
            }
        }
        loadCityWeather()
    })
})

export default findCityWeather