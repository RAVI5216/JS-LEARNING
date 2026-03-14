let array=[];
let sum=0;
for(let i = 0; i < 5; i++) {
    let Marks = prompt("Enter your Marks:");
    array[i]=Number(Marks);
    sum+=array[i];
}
// console.log("Your Marks are:",array);
// console.log(sum);
// console.log("The percentage is:",sum/array.length);
//another way to show the result using template literals
console.log(`your Marks are ${array}`);
console.log(`${sum}`);
console.log(`the percentage is:${sum/array.length}%`);
