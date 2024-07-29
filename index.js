var x=12

var b = function HelloUniverse(){
    var y = 10
    let z=20
    return x=5
}
function HelloWorld(){
    // alert(b)
    
    var Ad = 9
    var y = "9"
    
    // var AddStr = 58 % "10"

    console.log(Ad == y ? "t" : "o")
    // 3
}

var b = 10 + 15
//25

var b = 3 + "4"
//34

var b = 3 + " 4"
//3 4

var b = 3 - 2
//1

var b = 3 - "4"
//-1

var b = 4 * 9
//36

var b = 5 * "10"
//50

var b = 50 / 10
//5

var b = 51 / "3"
//17

var b = 49 % 9
//4 

var b = 58 % 10
//8

var b = 35 % 5
//0

var b = "49"
b++     //50
b--     //48

var b = 42
b++     //43
b--     //41

var a = 4
var b = 3
a**b    //64
a**b.toString   //64

x = y   //y
x += y  //x + y
x -= y  //x - y
x *= y  //x * y
x /= y  //x / y
x %= y  //x % y
x **= y  //x ** y

// =       //assign
// ==      //equal to
// ===     //strictly equal to 
// !=      //not equal to
// !==     //strictly not equal to
// <       //less than
// >       //greater than
// <=      //less than or equal to
// >=      //greater than or equal to

var a = 2
var b = 3
var c = "2"
var d = "2"

a == b        //false
a == c        //true
c == d        //true

a === b       //false
a === c       //false
c === d       //true
 
a != b       //true
a != c       //false
a != d       //false
b != c       //true

a !== b       //true
a !== c       //true
a !== d       //true
b !== c       //true
c !== d       //false

a < b         //true 
a < c         //false
b < d         //false
b < a         //false
c < b         //true

a > b         //false 
a > c         //false
b > d         //true
b > a         //true
c > b         //false

a <= b         //true 
a <= c         //true
b <= d         //false
b <= a         //false
c <= b         //true

a >= b         //false 
a >= c         //true
b >= d         //true
b >= a         //true
c >= b         //false

// Ternary operator is an if-else operator.
a != b ? b : "o"
// the above statement is a ternary operator that displays the value of
// b: which is 3, if a != b is true, and displays o if a != b is false.