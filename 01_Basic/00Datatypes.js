//alert(4+4) // not alowed here, only in web version suported machine

let name = "souvagya" //string
let age = 32 //number => 2 to the power 53
let isMale = true //boolean
//bigint
//null
//undefined
//symbol => unique (mostly used in implementation of react)


//object

//console.log(typeof null);

// console.log(typeof undefined);
 

//********************************** summery ******************************

//  Primitive (stored in heap memory)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)(stored in heap memory)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
