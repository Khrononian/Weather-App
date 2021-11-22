import createDivs from './dom'

const input = document.querySelector('.search-input');

input.addEventListener('search', findCityWeather)

function findCityWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=720db497deedc97541097097eaee6cfd`)
    .then(response => response.json())
    .then(data => {

        // ADD A WAY TO PREVENT searching a non existing city
        
        console.log(data)

        // IMPERIAL IS FARENHEIT AND METRIC IS CELSIUS
        // FOR SWITCHING FROM CELSIUS TO FARENHEIT, TRY USING BUTTON TO CHANGE IT IN THE FETCH API

        async function getAllInfo() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)
                const allData = await response.json()
                const day = document.querySelectorAll('.day')
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                const dayFinder = days[new Date(value.dt * 1000).getDay()];

                document.querySelector('h3').innerText = input.value;
                document.querySelector('.location-weather').innerText = allData.current.weather[0].main
                document.querySelector('.location-temp').innerText = `${Math.round(allData.current.temp)}°F`
                document.querySelector('.location-high').innerText = `H: ${Math.round(allData.daily[0].temp.max)}°F`
                document.querySelector('.location-low').innerText = `L: ${Math.round(allData.daily[0].temp.min)}°F`

                input.value = ''

                allData.daily.forEach((value, index) => {

                })

                allData.daily.forEach((value, index) => {
                    if (index > 0) {
                        const dayForecast = new Date(value.dt * 1000).toLocaleDateString('en', {weekday: 'long'})
                        

                        console.log('Day test', dayForecast)

                        for (let i = 0; i < day.length; i++) {
                            const h5 = document.createElement('h5')

                            h5.innerText = days[new Date(value.dt * 1000).getDay()]
                            day[i].appendChild(h5)
                            console.log('Test again', dayForecast)
                            console.log('Name', days[new Date(value.dt * 1000).getDay()])
                        }
                    }
                })

                console.log(allData, allData.daily[0].dt, new Date(allData.daily[0].dt))
            } catch (error) {
                console.log(error)
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

                console.log('Food')
                document.querySelector('.location-temp').innerText = `${Math.round(weatherData.current.temp)}°F`
                document.querySelector('.location-weather').innerText = weatherData.current.weather[0].main
                document.querySelector('.location-high').innerText = `H: ${Math.round(weatherData.daily[0].temp.max)}°F`
                document.querySelector('.location-low').innerText = `L: ${Math.round(weatherData.daily[0].temp.min)}°F`

            } catch (error) {
                console.log(error)
            }
        }
        loadCityWeather()
    })


})

export default findCityWeather