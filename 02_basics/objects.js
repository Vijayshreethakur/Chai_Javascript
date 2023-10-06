// objects and events are very important to learn this javascript programming language

// there are three ways to create a object 1.) singleton 2.)object literals 3.) constructer method or ise ke andar singleton banta hai

// this method is callled object literals
const mySym = Symbol("key23")
const jsUser = {
    name : "vijayshree",
    age : 17,
    "fullname" : "vijayshree vijay ambekar",
    email:" vijayshreeambekar@gmail.com",
    loggedin : true,
    lastLoggedIn : ["monday","saturday"],
    [mySym] : "key23" // this syntax willreturn string as it should be symbol the proper methode which should be us is
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(typeof jsUser.mySym)
// console.log(jsUser[mySym])
// console.log(typeof [mySym])
// by typing typeof it will show that it is a string or an object but will we will print our full object then it is specially show that it is a symbol

// to change any value 
jsUser.email = "vijayshree thakur"


// now to freeze our object so that no one can change 

// Object.freeze(jsUser)
// jsUser.fullname = "vijayshree Harish thakur"

// by using freeze method you will not allowed anyone to change your object
// console.log(jsUser)

// to use our object with function

jsUser.greetings = function () {
    console.log("namaste bharat")
}

console.log(jsUser.greetings())

// how to use string interpoletion method 

jsUser.pranam = function() {
    console.log(`hello ${this.fullname} ramram`)
}

console.log(jsUser.pranam())
