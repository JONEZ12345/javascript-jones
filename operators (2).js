var element = 0

document.addEventListener('DOMContentLoaded', function(){
    var nothin = null // *
    var somethin = 'something' // *
    var results = nothin ?? somethin // *
    var resultsTwo = nothin || somethin
    var resultsThree = nothin && somethin

    var array = [1, 2, 4, 8]

    // console.log(array[array.length-1])
    for (let index = 0; index <= array.length - 1; index++) {
        // const element = array[index];
        

        element += array[index]
    }
    
        var results = Array.from(element)

        console.log(results.at(-1))

        console.log(element)
})


    // console.log(results)
    // console.log(resultsTwo)
    // console.log(resultsThree)
    // console.log(array[3])
    // console.log(array.length)