

// createElement, createTextNode and createComment
// in case we want to add any tag in html through javascript coding we can use createElement method
// in case we want to add a text into html document we need to use createTextNode method
//incase of adding comment we use createComment method <!--just comment-->

// var newElement=document.createElement("p");
// console.log(newElement);

// var newText=document.createTextNode("hello this is a text");
// console.log(newText);

// var newComment=document.createComment("this is a comment");
// console.log(newComment);


//  Arithmetic operators
// + addition
// - subtraction
// * multiplication
// ** exoponentation
// / division
// % modulus
// ++ increment
// -- decrement

// var a=10;
// var b=14;
// document.write(a+b,"<br>");
// document.write(a-b,"<br>");
// document.write(a/b,"<br>",a*b);



// Append Methods

// java script practise


// Question # 1

// function getName(name){
//     document.write("Assalam o Alaikum",+ name);
// }
// getName("waniah");

// document.write("<br>");

// // question # 2
// // function with default parameters

// function multiplication(a,b=5){
//     document.write(a*b);
// }
// multiplication(12);

// document.write("<br>");

// // question # 3
// // function expressions

// function add(a,b){
//     document.write(a+b);
// }
// var x=12;
// var y=15;
// add(x,y);

// document.write("<br>");


// //arrow functions

// add=(a,b)=>a+b;

// document.write(add(12,12));

// document.write("<br>");

// hello=()=>"assalam o alaikum ! this is an arrow function";
// document.write(hello());

// document.write("<br>");



// //question # 5

// function evenOdd(num){
// if(num%2==0){
//     document.write("it is an even number");
// }
// else{
//     document.write("it is an odd number");
// }
// }

// evenOdd(12);
// document.write("<br>");

// // question # 6

// function returnGrade(grade){
//     if(grade>80 && grade<=100){
//         document.write("A");
//     }
//     else if(grade>70 && grade<=79){
//         document.write("B");
//     }
//     else if(grade>55 && grade<=69){
//         document.write("C");
//     }
//     else if(grade>45 && grade<=54){
//         document.write("D");
//     }
//     else{
//         document.write("fail");
//     }
// }


// returnGrade(12);


// document.write("<br>");


// // question # 7
// // switch statement

// var day=5;

// switch(day){
//      case 0:
//         document.write("Monday")
//         break;
//         case 1:
//         document.write("Tuesday")
//         break;
//         case 2:
//         document.write("Wednesday")
//         break;
//         case 3:
//         document.write("Thursday")
//         break;
//         case 4:
//         document.write("Friday")
//         break;
//         case 5:
//             document.write("Saturday")
//             break;
//             case 6:
//                 document.write("Sunday")
//                 break;
// }

// document.write("<br>");

// // Question # 8

// function isAdult(age){
//     if(age>=18){
//         document.write(true);
//     }
//     else{
//         document.write(false);
//     }
// }

// isAdult(18);

// document.write("<br>");

// // Question # 9

// for(var a=0; a<10; a++){
//     document.write(a,"<br>");
// }
// document.write("<br>");

// // Question # 10

// function sumNumbers(){
// var num=1;
// while(num<=10){
//     num+=1;
// }
// document.write(num);
// }

// sumNumbers();

// document.write("<br>");


// // Question #11


// var array=[1,2,3,4,5,6];
// for(var i=0; i<=5;i++){
//     document.write(array[a]);
// }



// 20 questions to practice 50 tutorials

//question # 1
// different data types in java script
// var a="string";
// var b=[1,2,3,4];
// var c=12;

// document.write(typeof(a),"<br>");
// document.write(typeof(b),"<br>");
// document.write(typeof(c),"<br>");


// // Question # 2
// // write a question to concatinate two strings

// var a="Waniah";
// var b="Maryam";
// document.write(a+b+"<br>");

// // Question #3
// // create an array of five elements and display the third one

// var array=[1,2,3,4,5,6];
// document.write(array[2],"<br>");


// //Question#4
// // write a function which takes name as parameter and returns a greeting message

// function greetings(name){
//     return "hello"+name;
// }

// document.write(greetings("waniah"),"<br>");

// // Question # 5
// // function declaration to find square of a number

// function findsquare(num){
//     return num*num;
// }

// document.write(findsquare(12),"<br>");



// // arrow function

// square=(num)=>num*num;

// document.write(square(12),"<br>");


// // loop to write numbers from 1 to 10

// for (let index = 0; index <=10; index++) {
// document.write(index,"<br>");
// }

// document.write("<br>");

// var a=10;

// while(a>=0){
//     document.write(a,"<br>")
//     a-=1;
// }


// // recursive function
// function recursion(num) {
//     if (num >= 0) {
//         num -= 1;
//         recursion(num);
//     } else {
//         return;  // This return isn't necessary, but it's good practice to have an explicit return.
//     }
// }

// // Since recursion(num) does not return anything, document.write will write 'undefined'.
// // Instead, you can modify the function to return a value if needed.
// recursion(12);  // Call the function
// document.write("Completed");
// document.write("<br>");



// // nested loop to print 5*5 


// for (let index = 0; index < 5; index++) {
//     for(var b=0; b<5*5;b++){
//         document.write("*");
//     } 
//     document.write("<br>"); 
// }


// // write a question to find wether a number is even or ood

// // var num=prompt("enter the number:");

// // if(num%2==0){
// //     document.write("number is even");
// // }
// // else{
// //     document.write("number is ood");
// // }
// // document.write("<br>")


// // switch statement

// var days=3;

// switch(days){
//     case 1:
//       ("it's monday yooo")
//         break;
//         case 2:
//             document.write("it's Tuesday ")
//             break;
//             case 3:
//                 document.write("it's Wednesday ")
//             break;
//             case 4:
//                 document.write("it's Thursday ")
//                 break;
//                 case 5:
//                     document.write("it's Friday ")
//                     break;
//                     case 6:
//                         document.write("it's Saturday ")
//                         break;
//                         case 7:
//                             document.write("it's Sunday ")
//                             break; 
// }


// // create an object to store the attributes of a book and display each property

// var object={
//     title:"Harry Potter",
//     author:"keun btaon",
//     year:2002
// }

// document.write("<br>")
// document.write(object.title,"<br>");

// document.write(object.author,"<br>");

// document.write(object.year,"<br>");


// // object method

// var object={
//     title:"Harry Potter",
//     author:"keun btaon",
//     year:2002
// }


// object.author="hn ye wo h";
// document.write(object.author,"<br>");


// // array iteration

// var arrays=[1,2,3,4,5,6,7,8,9,10];

// for(var a=0;a<=arrays.length;a++){
//     if(arrays[a]%2==0){
//         document.write(arrays[a],"<br>")
//     }
// }


// var num1=prompt("enter number 1:");
// var num2=prompt("enter number 2:");
// var num3=prompt("enter number 3:");

// if(num1>num2 && num1>num3){
//     document.write("number 1 is the largest",num1,"<br>");
// }
// else if(num2>num1 && num2>num3){
//     document.write("num2 is the largest",num2,"<br>");
// }
// else{
//     document.write("num3 is the largest","<br>");
// }





// Array method questions

var practiceArray=["Waniah",2,"A","Maaz","Hassan","Faiq"];

document.write(practiceArray,"<br>");
practiceArray.toString();
document.write(practiceArray,"<br>");

var stringObject={
    name:"waniah",
    section:"A",
    marks:5
}

//document.write(stringObject.name,"<br>");
for(var key in stringObject){
    document.write(key+":",stringObject[key],"<br>");
}

document.write(practiceArray.slice(0,3),"<br>");
document.write(practiceArray.slice(-4),"<br>");
practiceArray.splice(2,0,"hello","this is a splice function");
document.write(practiceArray,"<br>");
practiceArray.splice(3,1,"after deletion");
document.write(practiceArray,"<br>");
// shift deletes the first value of index whereas unshift adds new value to the array
practiceArray.shift();
document.write(practiceArray,"<br>");
practiceArray.unshift("waniah","maryam");
document.write(practiceArray,"<br>");
// find and findIndex
var b=practiceArray.find(findName);
function findName(practiceArray){
    if(practiceArray=="waniah"){
    return;
    document.write("<br>");
    }
}

