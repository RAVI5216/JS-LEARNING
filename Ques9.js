//Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string
let count = 0;
const Function=(a) => {     //using arrow function
    let store = a.toString();
    
    for (let i = 0; i < store.length; i++) {
        console.log(store);
        if (store[i] === "a" || store[i] === "e" || store[i] === "i" || store[i] === "o" || store[i] === "u") {
            count++;
        }
    }
    console.log(count);
}
