const bb = Symbol("key1");
// // // console.log(typeof bb);

const JsUser = {
  name: "Ravikumar",
  Class: "4EV5",
  [bb]: "key1",
  Roll: 92400120129,
  "Full name": "KomalPaswan",
  full_name: "Ramu Rajbhar",
};
// console.log(JsUser);

// // //here Keys are String in itself
//  console.log(JsUser.name);
// // // The concept is when we use this dot notation "when there is no space between the words of variable"
// // //instead of that syntax we can go with []concept
// console.log(JsUser["Full name"]);
// // // one important concept about Symbol
// console.log(JsUser[bb]);
// console.log(typeof JsUser[bb]); // it will show String type only bcz the inside that bb is String type so, the type is defined based on their Vlues
// // // We can modify the keys values of the object
// JsUser.name = "Ravi Singh Rajput";
// console.log(JsUser);
// // Object.freeze(JsUser) // this method will freeze the Changes in the object
// JsUser.name = "Ritik kumar singh";
// console.log(JsUser["name"]);
// JsUser.full_name = "Raj bhai";
// console.log(JsUser);
// JsUser.greeting = function () {
//   console.log("hello I am learning Js bro!");
// }
// console.log(JsUser.greeting);// IN OUTPUT IT SHOWS ONE UNDEFINED TOO WHICH MEANS WHEN YOU NOT RETURNING ANYTHIING IN THE FUNCTION THEN INTERNALLY JS THINK THAT IT HAVE TO RETURN UNDEFINED
// //WITH METHOD IT SHOWS THE FUNCTION VALUES AND RETURN VALUES  BUT WITH NO METHOD IT SHOWS FUNCTION REFERENCE
//  JsUser.greetingtwo=function(){
//   console.log(`hello i am learning something new MR.${this["Full name"]}`);
//   return null;
//   ;
//  }
//  console.log(JsUser.greetingtwo);
//  console.log(JsUser.greetingtwo());

//// OBJECT 2.0

// const obj1=new Object();
// console.log(obj1);
// const obj2={

// }
// console.log(obj2);
// const tinderUser={};
// tinderUser.name="KomalPaswan";
// tinderUser.id="123abc";
// tinderUser.isLoggedIn=false;
// console.log(tinderUser["name"]);

// OBJECT INSIDE OBJECT

// const obj3={
//   CEO: "Ravi Kumar",
//   customer1:{
//     name:"RamPrasad",
//     Village:"SonaPur",
//     profession:"Farmer"
//   }
// };

// console.log(obj3);
// console.log(obj3.customer1["name"]);

// NOW IF YOU WANT O MERGE THE OBJECTS NOT THE ARRAY
//WE USE OBJECT.ASSIGN(OBJ1, OBJ2);

// const obj4=Object.assign({},obj3,JsUser); // here this empty braces act as target and after that all are act as source Means all source are store in {}.
// console.log(obj4);
// console.log(typeof obj4);

// // ANOTHER WAY TO MERGE THE OBJECT BY USING SPLIT AND COMBINE i.e
// const obj5={...obj3,...JsUser,};  // in this method the JsUser objects are stored in obj3
// console.log(obj5);

// OBJECT INSIDE THE ARRAY
// const tenderUser=[
//   {
//     name:"Ravi kumar",
//     class:"4EV5"
//   },
//   {
//     name:"Rohit Solanki",
//     class:"4EV5"
//   },
//   {
//     name:"Abhay Hybrid",
//     class:"4EV5"
//   },
//   {
//     name:"yusuf hashmi",
//     class:"4EV5"
//   }
// ];
// console.log(tenderUser[0].name);

// NEW METHOD WHICH IS USE TO ACCESS THE KEYS OF THAT OBJECT

// console.log(Object.keys(tenderUser));   // ARRAYS ARE THE OBJECT IN ITSELF IN THE JAVASCRIPT
// console.log(Object.keys(tenderUser[0]));
// console.log(Object.values(tenderUser[0]));

// // ONE MORE METHOD WHICH IS USED TO ASK THE COMPILER THAT PERTICULAR KEYS IS PRESENT IN  THE OBJECT OR NOT
// console.log(Object.hasOwnProperty('logge'));
// console.log(Object.hasOwnProperty('name'));

//OBJECT DES-TRUCTURED OR JSON-API INTRO

const { name:username } = JsUser;
// console.log(name); // this is called di-structuring
console.log(username);
// we can say that Di-Structuring can be notice by {} braces 

