function sum(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("gas");
    var j = document.getElementById("damn");
    
    if ((x.value && y.value )&& (t.value && j.value)) {
        var result = parseInt(x.value) + parseInt(y.value)
        var results = parseInt(t.value) + parseInt(j.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = results

        // const big = document.getElementById(big)

        // big.appendChild(stress)

        // const head = document.querySelector('')
        
        const header = document.querySelector('.stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

    } else {
        alert('Please, fill in the input fields')
         
        x.value = 1
        y.value = 2
        t.value = 3
        j.value = 4
    }
    // const formw = document.getElementById('big')

    // const formCreated = document.createElement('form')

    // const inputOneCreated = document.createElement('input')  

    // // Style inputs 
    // inputOneCreated.type = 'number'
    // inputOneCreated.placeholder = 'Result 2'
    // inputOneCreated.disabled = true

    // // Append inputs within form
    // formCreated.appendChild(inputOneCreated)
    // formw.appendChild(formCreated)

    // const square = document.createElement("button")

    
    
}


function minus(){ 
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("gas");
    var j = document.getElementById("damn");
    
    if ((x.value && y.value )&& (t.value && j.value)) {
        var result = parseInt(x.value) - parseInt(y.value)
        var results = parseInt(t.value) - parseInt(j.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = results

        // const big = document.getElementById(big)

        // big.appendChild(stress)

        // const head = document.querySelector('')
        
        const header = document.querySelector('.stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

    } else {
        alert('Please, fill in the input fields')
    }
}

function times(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("gas");
    var j = document.getElementById("damn");
    
    if ((x.value && y.value )&& (t.value && j.value)) {
        var result = parseInt(x.value) * parseInt(y.value)
        var results = parseInt(t.value) * parseInt(j.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = results

        // const big = document.getElementById(big)

        // big.appendChild(stress)

        // const head = document.querySelector('')
        
        const header = document.querySelector('.stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

    } else {
        alert('Please, fill in the input fields')
    }

}

function divide(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("gas");
    var j = document.getElementById("damn");
    
    if ((x.value && y.value )&& (t.value && j.value)) {
        var result = parseInt(x.value) / parseInt(y.value)
        var results = parseInt(t.value) / parseInt(j.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = results

        // const big = document.getElementById(big)

        // big.appendChild(stress)

        // const head = document.querySelector('')
        
        const header = document.querySelector('.stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

    } else {
        alert('Please, fill in the input fields')
    }

}

function square(){
    
    var z = document.getElementById("display")
    
    var c = document.getElementById("displa")

    var b = 2
    var d = parseFloat(c.value) + parseFloat(z.value)

    var a = parseFloat (d) ** b
    // var a = Math.pow(d, 2) 

    document.getElementById('stress').value = a

}

function squareroot(){
    
    var z = document.getElementById("display")
    
    var c = document.getElementById("displa")

    var b = 1/2
    var d = parseFloat(c.value) + parseFloat(z.value)

    var a = parseFloat (d) ** b
    // var a = Math.sqrt(d)
    
    document.getElementById('stress').value = a


}