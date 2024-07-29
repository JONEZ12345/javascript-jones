
// document.addEventListener('DOMContentLoaded', function(){
//     const contentOne = document.getElementById('contentOne')
//     const contentTwo = document.getElementById('contentTwo')
//     // const contentOneClass = document.getElementsByClassName('contentOne')
//     // const contentTwoClass = document.getElementsByClassName('contentTwo')
//     // const hThree = document.getElementsByTagName('h3')
//     // const contentFourName = document.getElementsByTagName('contentFour')

//     document.getElementById('contentThree').textContent = 'Hello content three'

//     contentOne.textContent = 'Hello Content One'
//     contentOne.style.color = 'blue'
//     contentOne.style.fontSize = '50px'
//     contentOne.style.fontFamily = 'sans-serif'


    
//     contentTwo.value = 'Hello Content Two'
//     contentTwo.style.border = '3px solid blue' 

//     // contentOneClass.style.color = 'blue'
//     // contentTwoClass.value = 'Hello Content Two class name'
//     // hThree.textContent = 'Hello Content h3 tagname'
//     // contentFourName.value = 'Hello Content Value'
// })


function changeValue(){

    const contentOne = document.getElementById('contentOnee')
    const elementCreated = document.createElement('div')
const contain = document.getElementById('contain')

    elementCreated.textContent = 'New element Created'
    elementCreated.style.color = 'blue'

    contain.appendChild(elementCreated)
    
    contentOne.value = 'Done'
    contentOne.style.color = 'blue'
    contentOne.style.border = '4px solid blue'
}


function handleSubmit(event){
    event.preventDefault()
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const nameValue = name.value

    alert(nameValue + " " + email.value + " " 
    + " " + password.value)

    changeValue()
}


// const yam = document.getElementById('changeValueAgain')

// yam.addEventListener("click", function(){
//     const contentTwo = document.getElementById('contentTwoo')

//     contentTwo.value = 'done'
// })