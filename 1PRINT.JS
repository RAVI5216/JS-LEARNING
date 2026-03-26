// console.log("hey");
// console.log("Hey i have started to learn java script");
// console.log("Hey My name is Ravi kumar");
// console.log ("And i am from Bihar");
// console.log("i Love to do javaScript");
// age = 25;
// console.log("Age is: "+age);
// const student={
//     name:"Yusuf Hashmi",
//     class:"4EV5",
//     Fathers_Name:"Atharjamal Hashmi",
//     personality:"Katua", 
// }
// let bihari=25;
// console.log(student.class);
// // alert("you are doing perfect");
// const z=28;
// let a=2;
// let b=3;
// console.log("a+b=",a+b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a**b=",a**b)
// let fullname="Ravi";
// let value=2; 
// a++;
// console.log("a=",a);
// console.log(a++ + a);//1st it called preincrement means the value first executed then increment
// console.log(a-- + a++);
// console.log(a++ * a--);
// console.log(a++ ** a--);
// console.log(--b);
// console.log("a==b", a==b);
// console.log("a!=b",a!==b);
// console.log("a===b",a===b); //false bcz data type of same but the value is different
// console.log(fullname===value);

// let b="4";//string
// let c=a==b;
// console.log(c);
// console.log("a===b",a===b);
// console.log("a>=b",!(a>=b));
// let str="Ravi kumar";
//  console.log(str);
// console.log(str.length);
// let test=`the matches between me and you is ${str}`;
// console.log(test);
// let a="4"; //first it convert the string into number then compare
// let b=4;
// if(a==b)
// // {
// //     console.log("same");
// // }
// //types of String methods
// // let Str="Ravi kumar";
// // let str = "       ABHAY HYBRID";
// // console.log("Uppercase is:",Str.toUpperCase());
// // console.log("The lowercase of the string is:",str.toLowerCase());
// // console.log("The trim of str is:",str.trim());
// // console.log("The concat of the Strings are:",Str.concat(str));
// // console.log("The slice of the String is:", Str.slice(1,3));
// // console.log("The replace of the character of the String is:",Str.replace("Ravi","Abhay"));
// // console.log("The Character at the index 4 is:",Str.charAt(4));
// //ARRAYS::
// let realprice=[250,65,300,900,50];
// let me=["ram","satyam"];
// let heroes=["krish","ironman","Shaktiman","Rammohan"];
// let after = realprice.push(360);
// console.log(realprice);
// console.log(realprice.pop());
// console.log(realprice);
// let array= realprice.toString();
// console.log(array);
// console.log(`after concat the array is${realprice.concat(me,heroes)}`);
// me.unshift("Ravi");
// console.log(realprice);
// realprice.shift();
// let str= (heroes.slice(1,3)).toString();
// console.log(me.slice(1,3));
// console.log(str);



// arrow function
//(a,b)=>{
/*block    };
and we can store that variable in any variable*/

// const arrow=(a,b)=>
// {
//     console.log(a*b);
//     console.log(a,b);
// }
// ;
// // console.log(arrow(10,20));
// // console.log(a);//this will not print it shows error bcz a and b are local variables that means they only have block scope means they can access inside only in the function block

// For each function or callback function --- callback means executing each element of an array
// let arr=[1,2,3,4];
// let nam=arr.forEach((value)=>{    // Actually we can pass three things in the callback function that are: Value(that are inside the array values), index and third is array itself.
//     console.log(value);      // higher order function or higher order method we use call.
// })    
// console.log(nam);        //here the output of this line shows undefined means we cannot create a new array.                      // we call that function as higher order function who use other FUNCTIONS AS A PARAMETER OR RETURN

// let num=[20,22,23,25,0,29];
// let newArray=num.map((value)=>{      // this map method is generally different with for each in terms of creating new array instead of real one.
//     return value;
// })
// console.log(newArray);
// num.push(24);

//FILTER
// let array=[24,25,26,28,90,24,3,54,55,51];
// let store=array.filter((value)=>{// filter is used to filter the elements according to the condition
//     return value%2==0;
// })
// console.log(store);
//ANOTHER WAY TO DO THIS SAME QUESTION
// for(let i=0; i<array.length;i++)
// {
//     if(array[i]%2!=0)
//     {
//        array.splice(i,1);
//     }
// }
// console.log(array); //output for this will 24,26,28,90,24,54,51 because in SPLICE method when any element is deleted then the right side element are shifted to left;
//so in many cases even index values are not even check the condition. That is the reason that the last element come as it is.

//MAPPING WHICH IS ONE OF THE METHOD OF ARRAy
// let num=[1,2,3,4,5,6];
// let stores=num.map((value)=>{
//     return value*value;
// })
// console.log(stores);

// //practice

// let stor=num.filter((value)=>{
//     return value%2==0;
// })
// console.log(stor);


//TIME TO REDUCE METHOD OF THE ARRAY
// let array=[];
// for (let i = 0; i < 6; i++) {
//     array[i]=Number(prompt("Enter your Arrays:"));
   
// } 
// console.log(array);
//  let store = array.reduce((result,index2)=>{
//     return result>index2? result:index2;    //now have to find the largest no. among them
//  });
//  console.log(store);

// let i=0
// while(true)
// {
//     console.log(i);  // INFINITY LOOP
//     i++;
// }

//Trying 
// let str = ["Ravi", "kumar","jamun"];
// let str2= ["aam","litchi","kela"];
// // let store = str.charAt(1);
// // console.log(store);
// // let store= str.concat(str2);
// // console.log(store);
// // let store2= str.unshift("roman");
// // console.log(store2);
// // let store3=str2.shift();
// let store4= str.slice(1,3);
// console.log(store4);
// const sum = ( a, b ) => {

// return a + b;

// }

// console.log(sum(4,5));
// let arr=[1,2,3,4,5];
// let store=arr.reduce((result,nextindex)=>{
//      return result+nextindex;
// })
// console.log(store);

//properties of the array of js
//tagname    --- to know the tag of the perticular node we use this tag name



//TYPES OF DOMS: 


// let store=document.getElementsByClassName(".firstChoice");
// console.dir(store);
// let store= document.getElementsByClassName("firstChoice");
// console.dir("store");
// console.log(store);
// let store=document.getElementsByTagName("h1");
// console.dir(store);
// let store=document.querySelectorAll("#id");  // here we have to write the class name using . for class # for id and for paragaraph direcly you can write
// console.dir(store); // it returns the node list ---- inside all the DOM or Window object all the things are nodes even window is node itself. 

// let store2=document.querySelector("p");
// console.dir(store2);
// const p01 = document.getElementById(".firstChoice");
// console.dir(p01);
// console.log(p01.firstChild.nodeName);

//properties:

/*1. tagname ---- which willl show you the tagename like in line no. 203 if we write "store" in console it will show you the 
full code that is we writen in <P> tag in index.html file, now if i want to know the type of that tag that we use on that code
we used to write "store.tagName", this will result in Button, p or etc whatever is that.

2. Innertext -- that will define that what is inside any tag lets say there is any <div></div> something inside that tag now this
innertext properties will show you the all the text that is inside that.  By just typing "div.Innertext".*/
// let store=document.querySelector("div");
// console.dir(store);