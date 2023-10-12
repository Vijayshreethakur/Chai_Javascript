// chai or code ki personal opition hai ki ye for each se better hota hai map method ko use karna
// map method's speciallity is it automatically returns value

let mynums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = mynums.map( (numbers) => {
// return numbers +10
// }
// )
// console.log(newNums)

// this is called chaining method :-
let numNumbers = mynums.map( (num) => (num * 2)) .filter( (num) => ( num >= 6)).map( (num) => ( num *10)).filter( (num) => (num >= 100))

console.log(numNumbers);


