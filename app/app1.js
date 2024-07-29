function digitalClock(){
    let dateFunction = new Date()
    // let day = dateFunction.getDay()
    let hours = dateFunction.getHours()
    let minutes = dateFunction.getMinutes()
    // let seconds = dateFunction.getSeconds()
    let timeFormat = 'AM'

    timeFormat = hours >= 12 ? 'PM' : 'AM'
    hours = hours == 0 ? 12 : hours // 00:00 hence 12am
    hours = hours > 24 ? hours - 24 : hours
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    // seconds = seconds < 10 ? '0' + seconds : seconds

    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    // document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeFormat

    // let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`)
    // todaysDay.classList.add('active')
}

setInterval(digitalClock, 1000)

var finger = document.getElementById('finger')

finger.addEventListener('click', function(){
    var lockScreen = document.querySelector('.screen')
    var homeScreen = document.querySelector('.home')

    setInterval(() => {
        lockScreen.style.display = 'none'
        homeScreen.style.display = 'flex'
    }, 1000);
    
})