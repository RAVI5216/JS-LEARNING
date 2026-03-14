/*Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/
let store=Number(prompt("Enter you value n:"));
let array=[];
for(let i=1; i<=store;i++){
    array[i-1]=i;
}
console.log(array);
let variable=array.reduce(function printval(result,index2){
    return result+index2;
})
console.log("the sum of your arrays is:"+variable);

let variable2=array.reduce((result,index2)=>{
    return result*index2;
})
console.log(variable2);