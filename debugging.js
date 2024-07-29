// Your object array containing your dataset
const worker = [
    {name: "John", job: "accountant", salary: "$4000"},
    {name: "Paschal", job: "engineer", salary: "$48000"},
    {name: "Joy", job: "nurse", salary: "$4300"},
    {name: "Jane", job: "artist", salary: "$45000"},
    {name: "Excel", job: "singer", salary: "$40300"}
]

// Your object containing your dataset
const stu = {
    stu: "Ade",
    stud: "Kemi",
    stude: "George",
    studen: "Kelz",
    student: "Victor"
}

// Your function loading on dom load
document.addEventListener('DOMContentLoaded', function(){
   
    //  Define your id from your html
    const debug = document.getElementById('debug')
    const debugged = document.getElementById('debugged')
    const debugg = document.getElementById('debugg')

    // Define different variables
    const boy = "boy"
    const gent = "boy"
    const girl = "girl"
    const lady = "girl"    
    
    // Define an empty string, and assign to variable text
    let text = " " 
    let fig = ""
    
    // Question one
    // Figure out the error, and correct it
    for(let x in stu){
        text += stu[x] + '<br>'
    }
    
    // Assign to your debug const, so it can display on..
    // .. your browser
    debug.innerHTML = text

    // loop through, using forEach, declaring a function..
    // .. 'myFunc" 
    worker.forEach(myFunc)

    function myFunc(val, ind){
        const heading = document.createElement('h1')
        
        // Question 2
        // Now I want you to make it display ..
        // .. "name" will turn 'age' by next week"
        heading.innerHTML += val.name + ' is ' + val.age 
        heading.style.color = 'blue'
    
        const head = document.createElement('h1')
        
        head.innerHTML += val.name + ' is ' + val.age 
        head.style.color = 'red'

        // Question 3
        // Now I want you to display the texts, in blue
        if (boy === gent) { // if value of boy is equal to that of gent
            
            // is the erro here(for question no. 3)?
            debugged.appendChild(heading) // display on your browser div
        }else if(girl === gent){ // if value of girl is equal to that of gent
            
            // is the erro here(for question no. 3)?
            debugg.appendChild(head) // display on your browser div
        }

    }

    // if()

})