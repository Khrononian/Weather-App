function changeColorOnTime() {
    const timedDate = new Date()
    const hours = timedDate.getHours()

    if (hours >= 5 && hours <= 8) {
        document.body.style.backgroundColor = '#f9d29d';
        document.body.style.backgroundImage = 'linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)'
        document.body.style.color = 'black'
    } else if (hours >= 11 && hours <= 15) {
        document.body.style.backgroundColor = '#7ee8fa';
        document.body.style.backgroundImage = 'linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)'
        document.body.style.color = 'black'
    } else if (hours >= 17 && hours <= 21) {
        document.body.style.backgroundColor = '#0cbaba';
        document.body.style.backgroundImage = 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)'
        document.body.style.color = 'white'
    } else if (hours >= 22 || hours <= 4) {
        document.body.style.backgroundColor = '#000000';
        document.body.style.backgroundImage = 'linear-gradient(315deg, #000000 0%, #414141 74%)'
        document.body.style.color = 'white'
    }
}

export default changeColorOnTime
