//For a given array with marks of students 85,97,44,37,76,60 Find the average marks of the entire class
let Marks=[85,97,95,90,88,99];
let sum=0;
for (let i of Marks)
{
    console.log("Marks of the Student are:",i);
    sum+=i;
}
console.log("The total Marks of the student is:",sum);
let percentage=prompt("your percentage is:",sum/Marks.length+"%");
console.log("Your percentage is:",percentage,"%");