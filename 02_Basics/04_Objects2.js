// const user = new Object() //singleton object
const user1 = {} // not a singleton object

user1.email = "souvagya@chatGPT.com",
user1.firstName = "Souvagya",
user1.lastName = "Mallick"

// console.log(user1);

const Blinkit = {
    email : "souvagya@chatGPT.com",
    userName : {
        userFirstName : {
            firstName : "Souvagya",
            lastName : "Mallisk"
        }
    }

}
// console.log(Blinkit.userName.userFirstName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //return all key with a array
// console.log(Object.values(tinderUser)); //return all values with a array
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


