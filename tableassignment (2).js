
const Jones = [
    { num: 1, name: 'Kelechi', age: 10, group: 'o+', gender: 'male', id: 1},
    { num: 2, name: 'Kelec', age: 14, group: 'ab+', gender: 'male', id: 2},
    { num: 3, name: 'Kelhihj', age: 10, group: 'b+', gender: 'female',id: 3},
]

document.addEventListener('DOMContentLoaded', function(){

    console.log('line one')
    const contain = document.getElementById('contain')
    const tableContain = document.getElementById('tableContain')
    const header = document.querySelector('#tableContain thead')
    const footer = document.querySelector('#tableContain tfoot')
    const table = document.querySelector('#tableContain tbody')

    // table.innerHTML = ''
    console.log('line two')
    Jones.forEach( (data) => {
        const row = document.createElement("tr")
        row.classList.add(data.id)
        // alert(data.name)
        
        console.log('line three')
        row.innerHTML = `
            <td > ${data.num} </td>
            <td > ${data.name} </td>
            <td > ${data.age} </td>
            <td > ${data.group} </td>
            <td > ${data.gender} </td>
        
        `
    table.appendChild(row)
    row.style.border = '3px solid blue'
    })
    console.log('line four')
    contain.style.border = '3px solid '
    tableContain.style.border = '3px solid'
    tableContain.border = '1px'
    tableContain.width = '100%'
    
    header.style.backgroundColor = 'red'
    footer.style.backgroundColor = 'red'
    
    
})