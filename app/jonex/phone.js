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
    // let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`)
    // todaysDay.classList.add('active')
}

setInterval(digitalClock, 1000)

// time

var finger = document.getElementById('finger')
var screen = document.querySelector('#screen')
var cse = document.querySelector('#case')
var lockScreen = document.querySelector('.lockScreen')
var homeScreen = document.querySelector('.homeScreen')

finger.addEventListener('click', function(){
    // setInterval(() => {
        lockScreen.style.display = 'none' 
        homeScreen.style.display = 'flex'
    // },0)

})

homeScreen.addEventListener('dblclick', function(){

    setInterval(() => {
        homeScreen.style.display = 'none'
        lockScreen.style.display = 'none'
        screen.style.backgroundColor = 'black'
    }, 100)

})

cse.addEventListener('dblclick', function(){

    setInterval(() => {
        homeScreen.style.display = 'none'
        cse.style.display = 'flex'
        lockScreen.style.display = 'flex'
    }, 10)

})

    
