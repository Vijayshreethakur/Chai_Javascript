let program = ["html", 'css', "javascript", "python", "ruby", "swift"]

// 1.) method
// program.forEach( function (value) {
//     console.log(value)
// })

// 2.(method) using arrow function
program.forEach(value => {
    // console.log(value)
});



// callback function hai to nam nahi likhee hai  


// agar hume function kahi or likhna ho to hume us function ka just refrence dene ki jarrurat 
// ye refrence hum aase dete hai


// function printMe (value){
//     console.log(value)
// }

// program.forEach(printMe)

// to get every information about our array


// function printMe (value, index, array){
//     console.log(value, index, array)
// }

// program.forEach(printMe)


// Object inside array


let mycoding = [
    {
        languageName : "JavaScript",
        languageFile : "JS"
    },
    {
        languageName : "Java",
        languageFile : "Java"
    },
    {
        languageName : "phython",
        languageFile : "ph"
    }
]

mycoding.forEach(item => {
    console.log(item.languageName)
});



