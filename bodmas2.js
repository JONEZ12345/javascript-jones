function sum(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("int");
    var u = document.getElementById("puts");

    // console.log(Math.floor(Math.random() * 7))
    // x.value = Math.floor(Math.random())
    
    if (x.value && y.value && t.value && u.value) {
        var result = parseInt(x.value) + parseInt(y.value)
        var resul = parseInt(t.value) + parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        
        const see = document.querySelector('ul li .try')

        see.style.display = "flex"
        
        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

       

    } else if(!x.value || !y.value || !t.value || !u.value) {
        var ranOne = Math.floor(Math.random() * 7)
        var ranTwo = Math.floor(Math.random() * 7)
        var ranThree = Math.floor(Math.random() * 7)
        var ranFour = Math.floor(Math.random() * 7)

        x.value = x.value || ranOne
        y.value = y.value || ranTwo
        t.value = t.value || ranThree
        u.value = u.value || ranFour

        var result = parseInt(x.value) + parseInt(y.value)
        var resul = parseInt(t.value) + parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"
        
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
    var t = document.getElementById("int");
    var u = document.getElementById("puts");


    
    if (x.value && y.value && t.value && u.value) {
        var result = parseInt(x.value) - parseInt(y.value)
        var resul = parseInt(t.value) - parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        

        
        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"

    } else if(!x.value || !y.value || !t.value || !u.value) {
        var ranOne = Math.floor(Math.random() * 7)
        var ranTwo = Math.floor(Math.random() * 7)
        var ranThree = Math.floor(Math.random() * 7)
        var ranFour = Math.floor(Math.random() * 7)

        x.value = x.value || ranOne
        y.value = y.value || ranTwo
        t.value = t.value || ranThree
        u.value = u.value || ranFour

        var result = parseInt(x.value) - parseInt(y.value)
        var resul = parseInt(t.value) - parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"
        
    }
}

function times(){ 
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("int");
    var u = document.getElementById("puts");


    
    if (x.value && y.value && t.value && u.value) {
        var result = parseInt(x.value) * parseInt(y.value)
        var resul = parseInt(t.value) * parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        

        
        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"

    } else if(!x.value || !y.value || !t.value || !u.value) {
        var ranOne = Math.floor(Math.random() * 7)
        var ranTwo = Math.floor(Math.random() * 7)
        var ranThree = Math.floor(Math.random() * 7)
        var ranFour = Math.floor(Math.random() * 7)

        x.value = x.value || ranOne
        y.value = y.value || ranTwo
        t.value = t.value || ranThree
        u.value = u.value || ranFour

        var result = parseInt(x.value) * parseInt(y.value)
        var resul = parseInt(t.value) * parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"
        
    }
}

function divide(){ 
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("int");
    var u = document.getElementById("puts");


    
    if (x.value && y.value && t.value && u.value) {
        var result = parseInt(x.value) / parseInt(y.value)
        var resul = parseInt(t.value) / parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        

        
        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"

    } else if(!x.value || !y.value || !t.value || !u.value) {
        var ranOne = Math.floor(Math.random() * 7)
        var ranTwo = Math.floor(Math.random() * 7)
        var ranThree = Math.floor(Math.random() * 7)
        var ranFour = Math.floor(Math.random() * 7)

        x.value = x.value || ranOne
        y.value = y.value || ranTwo
        t.value = t.value || ranThree
        u.value = u.value || ranFour

        var result = parseInt(x.value) / parseInt(y.value)
        var resul = parseInt(t.value) / parseInt(u.value)

        document.getElementById('display').value = result
        document.getElementById('displa').value = resul

        const header = document.querySelector('#big .stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

        const see = document.querySelector('ul li .try')

        see.style.display = "flex"
        
    }
}

function square(){
    var z = document.getElementById("display")
    var c = document.getElementById("displa")

    var b = 2
    var d = parseFloat(c.value) + parseFloat(z.value)

    // var a = parseFloat(z.value) ** b
    var a = Math.pow(d,b)
    document.getElementById('stress').value = a

}

function squareroot(){
    var z = document.getElementById("display")
    var c = document.getElementById("displa")

    
    var d = parseFloat(c.value) + parseFloat(z.value)

    // var b = 0.5
    // var a = parseFloat(z.value) ** b
    // var a = Math.pow(d,b)
    var a = Math.sqrt(d)
    document.getElementById('stress').value = a
}

function set(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var t = document.getElementById("int");
    var u = document.getElementById("puts");
    var z = document.getElementById("display");
    var c = document.getElementById("displa");
    var f = document.getElementById("stress");

    x.value = null
    y.value = null
    z.value = null
    t.value = null
    u.value = null
    c.value = null
    f.value = null

    const header = document.querySelector('#big .stress')

    header.style.display = "none"

    const heed = document.querySelector('ul li .stress')

    heed.style.display = "none"

    const hed = document.querySelector('ul li .stone')

    hed.style.display = "none"

    const see = document.querySelector('ul li .try')

    see.style.display = "none"
}
