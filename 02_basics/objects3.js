// this method is called object destructuring
const shoppingList = {
    food : "khane ka saman",
softDrinks : "pineka samman",
makeUp : "lagane ka saman"
}

// insted of writting again and again to get makeup
console.log(shoppingList.makeUp)

// we will use this method to destructor our object and to make our work bit easier
const {softDrinks : beer} = shoppingList

console.log(beer)

// ye jo beer ha wo same hai use nam thoda choota kar diya hai koi difference nahi aayega 