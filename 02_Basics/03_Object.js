//singleton 

//object literals
const mySym = "key"

const myObj = {
    name : "Souvagya",
    age : 25,
    email : "suvv@google.com",
    location : "Bhadrak, Odisha",
    [mySym] : "unique key" //symbol will be used in object by [] (during access also)
}

console.log(myObj.age); //normal type to access object's element
console.log(myObj["email"]); // this is a special type(we can use this also)
console.log(myObj[mySym]);

// Object.freeze(myObj) //freeze the object and will not allow to change the value

myObj.email = "souvagya@gmail.com" //updating the value in object
console.log(myObj.email);

let isMale = true
myObj.isMale = true // we can add elements to the object
console.log(isMale)

myObj.greetings = function(){
    console.log("hello sir")
}
console.log(myObj.greetings) // here function is not executed, just the reference came
console.log(myObj.greetings());


myObj.greetingsTwo = function(){
    console.log(`Hello user ${this.name}`)
}
console.log(myObj.greetingsTwo());

