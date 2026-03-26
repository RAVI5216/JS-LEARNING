// actually THIS keyword is used to or refer inside the object aned it can access only the object keys

const obj = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this);
        
    }    
}
obj.sayHello(); // Output: Hello, my name is John and I am 30 years old.
console.log(this);
const arrowFunc = (value1, value2) => {
    return value1+value2;
};
console.log(arrowFunc(5, 10)) // Output: 15


// implicit return
const arrowFunc5=(v1,v2)=>(v1+v2)
console.log(arrowFunc5(5, 10)) // Output: 15

const arrowFunc6=(v1,v2)=>({username:"Ravi"})
console.log(arrowFunc6()) ;// Output: { username: 'Ravi' }


// IIFE -- immedialtely invoked function expression
(function f(){   // this is named IIFE function with name f
    console.log("This is IIFE function");
}) (); // IIFE function is a function which is called immediately after its declaration and it is also called self invoking function

((value)=>{ // this is my unnamed IIFE function using arrow function with parameter without name and it is also called anonymous IIFE function
    console.log(`This is IIFE function using arrow function with parameter and the value is: ${value}`);
})(5); // IIFE function with parameter and using arrow function