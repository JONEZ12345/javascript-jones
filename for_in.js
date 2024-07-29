const obj = {
    firstname: "Jimmy", secondname: "Chijioke", age: 11
}
document.addEventListener('DOMContentLoaded', function(){
    // object name

    const mass = document.getElementById('mass')
    // document.getElementById('tableContain')
    // const table = document.querySelector('#tableContain tbody')


    let text = ""

    for(let x in obj){
        text += obj[x] + '<br>'
    }

    // document.getElementById('mass').innerHTML = text
    mass.innerHTML = text
})
