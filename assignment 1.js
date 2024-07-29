document.addEventListener('DOMContentLoaded' (){ 

    const Jones = { 
        name: 'Kelechi', 
        nam: 'jones', 
        na: 'john', 
        n: 'game', 
        e: 'kcjones'
    }


    let text = ""

    for(let x in Jones){}
        text += Jones[x] + "<br >"
  
    
    document.getElementById('contain').textContent = 
    document.getElementById('contain').innerHTML = 'text'

     .innerHTML = `
     ${Jones.name} 

`
})