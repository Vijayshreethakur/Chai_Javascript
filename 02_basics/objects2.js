// const tinderUser = Object() // this is called singleton object

// const tinderUser = {}

// tinderUser.id = "1234"
// tinderUser.name = "vijayshree"
// tinderUser.isLoggrdIn = true  // this all will come in a object format
// console.log(tinderUser)  // this is a non singleton object


// object inside object this is called nesting
// const regularUser = {
//     UserId : 1233,
//     UserName :{
//         fullName : "vijayshree",
//         lastName : "ambekar",
//         contextSecure :{
// isContextSecure : "yes",
// LoginStatus : "online"
//         }
//     }
//     }
// console.log(regularUser.UserName.contextSecure.LoginStatus)


// there are three ways to combine a object
// 1.) 

// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "c", 4: " d" }
// const obj3 = { 5: "e", 6: "f" }

// const obj4 = {obj1,obj2,obj3}

// console.log(obj4)

// 2.) 
//  const obj5 = Object.assign(obj1, obj2, obj3)

// 3.) this methode is mostly used method and used by many programmers it is called spread operator
// const obj6 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj6)

// ---------------------------------------------------------------------------------

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "vijayshree"
tinderUser.isLoggrdIn = true  // this all will come in a object format
// console.log(tinderUser)  // this is a non singleton object

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser)); 
console.log(tinderUser.hasOwnProperty('vijayshree'))