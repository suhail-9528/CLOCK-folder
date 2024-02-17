


// oops object orianeted programing;
//  simple object;
// let pa={
//   name:"nandni",
//   age:20,
//   gendder:"female",
//   main(){console.log("hello i am eve")}
// };


//  factiory function objects
// function factiory(name,age,gender,Class){
 
// let func= {
//   name:name,
//   age:age,
//   gender:gender,
//   Class:Class,
//   heel(){console.log(this.name)}
// }
// return func;
// }

// let pa=factiory("simon",34,"male","10th");
// let pa1=factiory("lightgreey",93,"female","12th");

// new operator
// this=publi
// function publi(name,age,gender){
//   this.name=name,
//   this.age=age,
//   this.gender=gender

//   console.log(this.name)
// }
// publi.prototype.hello= function (){console.log("hello i am bruce and eve")}
// let pa=new publi("bruce",83,"male");
// let pa1=new publi("eve",32,"male")
// 


//  Clasess object oriented progaming; constructor;
// class persons {
//   constructor(name,age){
//     this.name=name,
//     this.age=age
//   };
//   talk(){console.log(`helli haaalo ${this.name}`)}
// }

//  let p=new persons("bruce",73);
//  let p12=new persons("eve",12);

// class school{
//   constructor(claseName,roomNo,teacher,age){
//     this.claseName=claseName;
//     this.roomNo=roomNo;
//     this.teacher=teacher;
//     this.age=age;
//   };
//   studentinformation(){console.log("hi to college information basicly",this.teacher)}
// };

// // imheritance extends and super key words
// class student extends school{
//   constructor(claseName,roomNo,teacher,age){
//   super(claseName,roomNo,teacher,age);
  
//   }
// }
// // class teacher{
// //   constructor(name,age,subject){
// //     this.name=name;
// //     this.age=age;
// //     this.subject=subject;
// //   };
// //   techInform(){console.log(`hi i am tech ${this.subject} subject!`)}
// // };


// let stu=new student(23,64,"kamlesh",65);
// let stu1=new student(63,73,"adam",836);

//  constructor functions
function person (name,age){
  this.name=name,
  this.age=age
  
};
person.prototype.talk=function(){console.log("hello")};

let p3=new person("hello",34);
let p4=new person("bydan",90);

// 
function mulstudent(name,age,gender){
  let student={
    name:name,
    age:age,
    gender:gender,
    talk(){console.log(`hi i am petter ${this.name}`)}
    }
return student;
}
 let p1=mulstudent("petter",23,"male");
 let p2=mulstudent("eve",43,"male");



// ARRAY SE RALATED QUESTIONS 
 const arr=[73,8,2,10,6,14,16,3,4,5,6,1,2,3,8,0,10,9,];
// console.log(arr);

const oddNum=arr.filter(arg=> arg%2!=0);
console.log("odd number",oddNum);

const evenNum=arr.filter(arr=> arr%2===0);
console.log(" even number", evenNum);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example 1: Filtering even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

const fruits=["apple","grapes","banana","pineapple","watermelon","gavava","kiwi"];

const array=fruits.filter(fruit => fruit.length>2);
console.log(array);


