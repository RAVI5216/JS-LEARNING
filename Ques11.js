// We are given array of marks of students. Filter out of the marks of students that scored 90+.
let i=0;
let array=[];
while(i<5)
{
    
    array[i]=Number(prompt("Enter your marks:"));
    i++;
}
console.log(array);
let Store=array.filter((val)=>{
    return val>90;
})
console.log(Store);