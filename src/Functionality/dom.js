const fahrenheit = document.querySelector('.fare')
const celsius = document.querySelector('.cels');
const tempChange = document.querySelector('.temp-contain')

function postWeatherForecastData(weatherData, dayFinder) {
    const forecast =
        `<div class="day">
        <h5>${dayFinder}</h5>
        <img class="imgs" src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">
        <p class="temp temps">${Math.round(weatherData.temp.day)}°F</p>
        <p class="weather">${weatherData.weather[0].main}</p>
        </div>`

    return forecast
}

fahrenheit.addEventListener('click', () => { // CHANGE TO FAHRENHEIT
    const temperatures = document.querySelectorAll('.temps');
    
    temperatures.forEach(temps => {
        let temperature = temps.innerText.match(/\d/g)
        let highLows
        let fahrenheitTemp

        temperature = temperature.join('')
        if (temps.dataset.high == 'high' || temps.dataset.low == 'low') {
            let productTemp = temperature * 1.8
            let sumTemp = Math.round(productTemp + 32)
            
            highLows = sumTemp
            temps.innerText = `${highLows}°F`
        } else {
            let productTemp = temperature * 1.8;
            let sumTemp = Math.round(productTemp + 32);

            fahrenheitTemp = sumTemp;
            temps.innerText = `${fahrenheitTemp}°F`;
        }

        fahrenheit.style.opacity = .5;
        celsius.style.opacity = 1;
        fahrenheit.style.pointerEvents = 'none';
        celsius.style.pointerEvents = 'auto'
        tempChange.dataset.temp = 'fare'
    })
})

celsius.addEventListener('click', () => { // CHANGE TO CELSIUS
    const temperatures = document.querySelectorAll('.temps');

    temperatures.forEach(temps => {
        let temperature = temps.innerText.match(/\d/g)
        let celciusTemp
        let highLows

        temperature = temperature.join('')
        if (temps.dataset.high == 'high' || temps.dataset.low == 'low') {
            let newTemp = Number(temperature)
            let differenceTemp = (newTemp - 32)
            let productTemp = differenceTemp * 5
            let quotientTemp = Math.round(productTemp / 9)
            
            highLows = quotientTemp
            temps.innerText = `${highLows}°C`             
        } else {
            let newTemp = Number(temps.innerText.substring(0, 2))
            let differenceTemp = (newTemp - 32)
            let productTemp = differenceTemp * 5
            let quotientTemp = Math.round(productTemp / 9)

            celciusTemp = quotientTemp
            temps.innerText = `${celciusTemp}°C`
        }
        
        fahrenheit.style.opacity = 1;
        celsius.style.opacity = .5;
        celsius.style.pointerEvents = 'none'
        fahrenheit.style.pointerEvents = 'auto'
        tempChange.dataset.temp = 'cels'
    })
})

function weatherForecasting(weatherInfo) {
    const temp = document.querySelector('.location-temp').innerText = `${Math.round(weatherInfo.current.temp)}°F`
    const weather = document.querySelector('.location-weather').innerText = weatherInfo.current.weather[0].main
    const image = document.querySelector('.location-image').src = `https://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}@2x.png`
    const high = document.querySelector('.location-high').innerText = `${Math.round(weatherInfo.daily[0].temp.max)}°F`
    const low = document.querySelector('.location-low').innerText = `${Math.round(weatherInfo.daily[0].temp.min)}°F`
}

export default weatherForecasting
export { postWeatherForecastData }