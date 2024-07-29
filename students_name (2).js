const stu = {
    stu: "Ade",
    stud: "Kemi",
    stude: "George",
    studen: "Kelz",
    student: "Victor"
}

const profile = [
    {name: "Ade", age: 22},
    {name: "Kemi", age: 23},
    {name: "Femi",age: 24},
    {name: "Chioma",age: 26},
    {name: "Cindy",age: 28}

]

const work = [
    {name: "Kelechi", job: ""}
]
document.addEventListener('DOMContentLoaded', function(){
    const student = document.getElementById('student')

    let text = ""
    let fig = ''
    for(let x in stu){
        text += stu[x] + '<br>'
    }
    document.getElementById('student').innerHTML = text

    profile.forEach(myFunc)

    function myFunc(val, ind){
        const heading = document.createElement("h1")

        heading.innerHTML +=val.name + ' is ' + val.age
        heading.style.color = "blue"
        document.getElementById('chill')

        chill.appendChild(heading)
                
    }
})