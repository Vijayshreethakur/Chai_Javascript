// while using parenthesses we will always need to write return key word

// let nums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = nums.filter( (number) => { return number > 4}

// )
// console.log(newNums)

// while in () no need to write return keyword
let nums = [1,2,3,4,5,6,7,8,9,10]

let newNums = nums.filter( (number) => (number > 4)

)
// console.log(newNums)


//how can we use filter method on object inside an aarray

let  books = [
    {title : "book one", genre : "Science", publish : 1983, edition : 2001},
    {title : "book two", genre : "Science - friction", publish : 2001, edition : 2004},
    {title : "book three", genre : "History", publish : 2006, edition : 2012},
    {title : "book four", genre : "History", publish : 1989, edition : 2324},
    {title : "book five", genre : "physics", publish : 1934, edition : 2037},
    {title : "book six", genre : "Grammer", publish : 1979, edition : 2032},
    {title : "book seven", genre : "Grammer", publish : 1987, edition : 2088}

]
// let userbooks = books.filter( (bk) => (
//  bk.genre  === "Science"
// )
// )

// to remove book along with date of publish

let userbooks = books.filter( (bk) => (
    bk.publish >= 2000 && bk.genre === "History"
))

console.log(userbooks)


// like to filter our searches in amazon

