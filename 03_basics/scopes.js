// block scope means any code which is inside {} those are called block scope 

// {} these are called scopes
//refer viedo scope viedo to write notes

function one(){
    const username = "vijayshree"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    // two()
}
// one()

if (5>1) {
    const website = "youtube"
    // console.log(website) 
}

// ********************intresting*******************

function addone(num){
    return num+1
}
// console.log(addone(5))

//this is called an expresion function inside a variable
const addtwo = function(num){
    return num+2
}
// addtwo()
