// Immediately Invoked Function Expressions (IIFE )
// functions jo immediatly execute ho

//kai bar global scope ke pollution se problem hoti hai variable etc ke pollution ko hatana

// named iife
(function chai (){
    console.log("DB connected")
})
();

// named iife
(function code (name){
    console.log(`DB Connected ${name}`)
}) ("vijayshree");

// simple iife
( (nametwo) => {
    console.log(`Laptop connected ${nametwo}`)
})("ambekar");

// do iife ek sath kaise declare kare just ek semicolon ki duri hai 

// declaring variable with function in iifi wont work it will throw error
// (let one = function (){
//     console.log("vijayshree")
// })
// console.log(one)