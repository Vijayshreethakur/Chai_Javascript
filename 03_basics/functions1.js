
function myFullName (){
    console.log("vijayshree")
    console.log("vijay")
    console.log("ambekar")
}
// in this case myFullName is called refrence and () is called excetuion
// myFullName()

// this is the syntax of function
// function functionname(parameter) {
//     //function to be executed 
// }

// functionname(argument)

// 1.) function method which iss not used
// function addTwoNumber (number1, number2){
//     console.log(number1+number2)
    
// }

// const result = addTwoNumber(3,5)
// console.log(result);

// 2.) second function
// function addTwoNumber (number1, number2){
// let result = number1+number2
// // return result
// // or up one and down one method will work same 
// return number1+number2
        
//     }
    
//     const result = addTwoNumber(3,5)
//     console.log(result)


// *******************************Parameter***************************

// function LoginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter valid name")
// return
//     }
// return `${username} just logged in`
// }
// console.log(LoginUserMessage())

// **********Rest Operator*********

// function calculateCart (val1,val2,...num1){
//     return num1
//     }

// console.log(calculateCart(100,200,344,342324))

// // this dot method is called rest operator 


// *****************functions with object*********


// let user = {
//     username : "Vijayshree",
//     age : 18
// }
// function useraddress(anuobject){
//     console.log(`UserName is ${anuobject.username} and her age is ${anuobject.age}`)
// }

// useraddress(user)

// u will need to write everything corretly because javascript is case sensitive
// console.log("hell")


// ****************Array inside a function******************

let myNewArray = [100,200,300,400]

function secondNewArray(getArray){
    return getArray[1]
}
console.log(secondNewArray(myNewArray))
console.log(secondNewArray([200,23746,34734,2234,324,6788]))











