document.addEventListener("DOMContentLoaded", function(){
    // 
    var one = document.getElementById('one')
    var two = document.getElementById('two')
    var three = document.getElementById('three')
    
    console.log(one.innerHTML) //  This is a  <b>bold</b> text.
    console.log(two.innerText) //This is a bold text.
    console.log(three.textContent) //  This is a  bold text.
    
    var oneA = document.getElementById('oneA')
    var twoA = document.getElementById('twoA')
    var threeA = document.getElementById('threeA')

    oneA.innerHTML = `This  is a  <b>bold</b>  text`
    twoA.innerText = `This  is a  <b>bold</b>  text` //Uncaught TypeError: Cannot set properties of undefined (setting 'innerText') at HTMLDocument.<anonymous>
    threeA.textContent = `This  is a  <b>bold</b>  text`

    let Kelz = 2

    console.log(Kelz + ' i')
})