import weatherForecasting from './dom'

const input = document.querySelector('.search-input');
const dayFind = document.querySelector('.days')

input.addEventListener('search', findCityWeather)

function findCityWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=720db497deedc97541097097eaee6cfd`)
    .then(response => response.json())
    .then(data => {
        // ADD A WAY TO PREVENT searching a non existing city
        console.log(data)

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
                    const forecast = 
                        `<div class="day">
                        <h5>${dayForecast}</h5>
                        <img class="imgs" src="https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png">
                        <p class="temp temps">${Math.round(value.temp.day)}°F</p>
                        <p class="weather">${value.weather[0].main}</p>
                        </div>`

                    if (index > 0) dayFind.insertAdjacentHTML('beforeend', forecast)
                })

                console.log(allData, allData.daily[0].dt, new Date(allData.daily[0].dt))
            } catch (error) {
                console.log(error)
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
                    const forecast = 
                    `<div class="day">
                    <h5>${dayForecast}</h5>
                    <img class="imgs" src="https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png">
                    <p class="temp temps">${Math.round(value.temp.day)}°F</p>
                    <p class="weather">${value.weather[0].main}</p>
                    </div>`
                       
                    if (index > 0) dayFind.insertAdjacentHTML('beforeend', forecast)
                })
            } catch (error) {
                console.log(error)
            }
        }
        loadCityWeather()
    })
})

export default findCityWeather