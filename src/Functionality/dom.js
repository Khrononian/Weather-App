function createDivs(weatherInfo, dayFinder) {
    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const img = document.createElement('img');
    const pHigh = document.createElement('p');
    const pLow = document.createElement('p')

    div.className = 'day'
    img.className = 'imgs'
    p.className = 'day-temp'

    h5.innerText = dayFinder;
    img.src = `http://openweathermap.org/img/wn/${weatherInfo.daily[1].weather.icon}@2x.png` // USE LOOP
    pHigh.innerText = weatherInfo.daily[1].temp.max // USE LOOP
    pLow.innerText = weatherInfo.daily[1].temp.min // USE LOOP

    // USE [1] AND UP IN THE DAILY ARRAY 
}

export default createDivs