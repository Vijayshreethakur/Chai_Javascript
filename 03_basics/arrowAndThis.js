//this current context ko refer karta hai matalb apne scope me jo hai use print karta hai within scope 

const user = {
    username : "vijayshree",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username} , welcome to website `)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// run and see the code that how this works
// this jo hai wo current context ko reffer karta hai or without this function me jo property hai wo refer he nahi hoga or jab hum just within this ko console.log karte hai to wo apne jitne bhi function hai unko sath leker aayega or agar this to scope ke bahar refer kate hai to emoty scope dikhai aayega matlab usme kuch hai he nahi jo refer karsake


// function chai () {
//     const username = "vijayshree"
//     console.log(this.username);
    
// }
// chai()

// ***********arrow function***********

// const chai = ()=>{
    // let username = "Vijayshree"
//     console.log(this.username)
// }
// chai()

// basic syntax of arrow function

// () => {

// }

// 1.) agar {} ye curly braces me likha to return key add karni padegi this is called explicet return matlab jisko explicetly lagana pa raha hai
// const numTwo = (num1,num2) => {
// return num1+num2
// }
// console.log(numTwo(3,4))

// implesent return matlab lagana chaho {} to lago nahi to curly braces hai he
// means if our staemnet is of one line then no need to write {} and return keyword

// const numTwo = (num1,num2) => num1+num2
// if getting confusion then can add () to num1+num2
// console.log(numTwo(3,4))

// agar arrow function me object add karna ho to
const numTwo = (num1,num2) => ({username: "vijayhsree"})
console.log(numTwo(3,4))

    // this is mandatory if you dont wrape object in () then that function will return undefined it is mandatory to wrap object inside ()