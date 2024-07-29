
document.addEventListener('DOMContentLoaded', function(){ 

    // This is the container div
    const contain = document.getElementById('contain')
    
    // Create your form element
    const formCreated = document.createElement('form')  

    // Style your form
    formCreated.style.border = "3px solid black"
    formCreated.style.padding = '3px'

    // Create your input elements
    const inputOneCreated = document.createElement('input')  

    // Style inputs 
    inputOneCreated.type = 'text'
    inputOneCreated.placeholder = 'Name'

    // Append inputs within form
    formCreated.appendChild(inputOneCreated)

    // Append form within container div
    contain.appendChild(formCreated)
    

})