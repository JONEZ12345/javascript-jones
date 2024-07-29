

function sum(){
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");

    var result = parseInt(first.value) + parseInt(second.value)
    
    document.getElementById('display').value = result

};
