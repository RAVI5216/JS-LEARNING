/*Prompt the user to enter their full name. Generate a username for them based on the input Start username with @, followed by their
full name and ending withe fullname length.
e.g. user name ="Ravi kumar", username should be "@Ravikumar13" */

let fullname=prompt("Enter your Name");
let username="@"+ fullname +fullname.length;
console.log("Your Username is:",username);