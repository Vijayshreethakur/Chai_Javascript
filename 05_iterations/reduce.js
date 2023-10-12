const newnum = [ 1,2,3,4,5,6,7]

// const total = newnum.reduce( function (acc, currvalue) {
// console.log(` acc: ${acc} currentValue : ${currvalue}`)
//     return acc + currvalue
// },2)

// const total = newnum.reduce( (acc, currvalue) => {
//     console.log(` acc: ${acc} currentValue : ${currvalue}`)
// return acc + currvalue
// },0)
// console.log(total)


// shopping cart 

const shoppingCart = [
    {coursers : "js course",
price : 2999},
    {coursers : "phython course",
price : 4999},
    {coursers : "c++ course",
price : 7999},
    {coursers : "mobile dev course",
price : 11999}
]

const myTotal = shoppingCart.reduce ( (acc, item) =>{
return acc + item.price
},0 )
console.log(myTotal)



