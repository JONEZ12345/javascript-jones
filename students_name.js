const stu = {
    stu: "Ade",
    stud: "Kemi",
    stude: "George",
    studen: "Kelz",
    student: "Victor"}

const profile = [
    {name: "Ade", age: 22},
    {name: "Kemi", age: 23},
    {name: "Femi",age: 24},
    {name: "Chioma",age: 26},
    {name: "Cindy",age: 28}

]

const worker = [
    {name: "John", job: "accountant", salary: $4000},
    {name: "Paschal", job: "engineer", salary: $48000},
    {name: "Joy", job: "nurse", salary: $4300},
    {name: "Jane", job: "artist", salary: $45000},
    {name: "Excel", job: "singer", salary: $40300}
]

document.addEventListener('DOMContentLoaded', function(){
    const student = document.getElementById('student')
    const chill = document.getElementById('chill') 

    
    let text = ""
    let fig = ''
    for(let x in stu){
        text += stu[x] + '<br>'
    }
    document.getElementById('student').innerHTML = text

    profile.forEach(myFunc)

    function myFunc(val, ind){
        const heading = document.createElement('h1')
        
        heading.innerHTML +=val.name + ' is ' + val.age 
        heading.style.color = 'blue'
    
    }
    student.appendChild(heading)
    chill.appendChild(heading)
    
    worker.forEach(workee)
    function workee(val, i){
        document.getElementById('chil') += val.name + " is working as " + val.job + " that pays "
        + val.salary + " every month."
    }
})
