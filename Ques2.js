let Marks=prompt("Enter your marks here");
let grade;
if(Marks>=90 && Marks<=100){
    grade="A";
}
else if(Marks>=70 && Marks<=89){
    grade="B";
}
else if(Marks>=60 && Marks<=69)
{
    grade="C";
}
else if(Marks>=50 && Marks<=59)
{
    grade ="D";
}
else if(Marks>=0 && Marks<=49)
{
    grade ="F";
}
console.log(Marks,"is your marks");
console.log("Hence Your Grade is", grade);