let a = 1;
let b = a++;
// a = 2, b =1
let c = ++a;
// what is the value of a, b, and c?
// console.log(a,b,c)
// a = 3, b = 1, c = 3


let d = "hello";
let e = false;

d++;
e++;
// console.log(d,e)
// d = NaN, e = 1

let perplexed;
// perplexed is undefined (no value is assigned)
perplexed + 2;
// console.log(perplexed)
// undefined

// let price = 2.7;
// price.toFixed(2);
// //console.log(price)
// // 2.7

// let price = "2.7";
// price.toFixed(2);
// console.log(price)
// //error

isNaN(0)
// False
isNaN(1)
// False

isNaN("")
//false

isNaN("string")
// true
isNaN("0")

// false
isNaN("1")
// false
isNaN("3.145")
// false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false

isNaN("true")
// true


isNaN(true)
// false
isNaN("false")
// true
isNaN(false)
// false


// to illustrate why the isNaN() function is needed:
NaN == NaN

!true
// false

!false
// true

!!true
// true

!!false
// false

!!0
// false
!!-0
// false
!!1
// true
!!-1
// true
!!0.1
// true
!!"hello"
// true
!!""
// false
!!''
// false
!!"false"
// true
!!"0"
// true

//EXERCISE 2 ////////////

let sample = "Hello Codeup";
// console.log(sample.length)
// //12 is the lenght of the string
//
// //Lowercase example ( you can do it either way of this or the uppercase example.
// //sample = sample.toLowerCase()
//
// console.log(sample)
//
// //uppercase example
// // console.log(sample.toUpperCase())
//
// //"Hello Codeup Students" exercise
// let clase = " Class"
//
// console.log(sample + clase);
// console.log(sample.indexOf("c"));
// console.log(sample.indexOf("C"));
//
// sample.indexOf("C")
// console.log(sample.substring(6))

//EXERCISE 3 ////////////////

// let littleMermaid = 3
// let brotherBear = 5
// let hercules = 1
// let price = 3
// //let total = (price * littleMermaid) + (price * brotherBear) + (price * hercules)
// console.log(total)
// let priceLittle = 9
// let priceBrother = 15
// let priceHercules = 3
//  console.log("You will have to pay $" + total.toString())

////

let google = 400
let amazon = 380
let facebook = 350
let total = (google * 6) + (amazon * 4) + (facebook * 10)

console.log("Your payment is $" + total)