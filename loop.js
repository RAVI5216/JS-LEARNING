// for - of loop is used for finding or print each word of any STRING
// let Name = "YUSUF HASHMI";
// let size=0;
// for (let i of Name)
// {
//     console.log("i=",i);
//     size++;
// }
// console.log("Size of the String is:",size);

// for - in loop which is used for print  or find the keys of any objects in javascript
let Home={
    Utensils:"2",
    Members:4,
    rooms:3,
    Vehicles:3,
    jobs:1
};
for (let keys in Home){
    // prompt("Yours keys are:",keys);
    console.log("The keys are:", keys,"\n the Objects are:",Home[keys]);
}