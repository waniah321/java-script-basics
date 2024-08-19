// document.write("ki haal aa shero. assi java script shuru kranr ala aa.<br>");
// document.write("let's get started <br>");
// document.write("Bismillah kranda pa han bs <br>");



// // html tags in java script

// document.write("<b> ee hnr bold thi wesi. dekhna waqeee bold ho jae ga mazaq ni kr rhi.</b>");
// document.write("<br>");
// document.write("<i> hnr italics kran ga hum hiku vla bia design bnr vanja ga.hahaha.</i> <br>");
 

// // in order to comment out the code we use these lines . but this is just for a single line use ctrl+/

// // variables in java script (three types)

// // var
// // let 
// // const

// var a="Waniah";
// var b="Maryam";
// document.write("hnr goda variables da concept anda pa.<br>")
// document.write(a+b);
// document.write("<br><br>");


// // var fname=prompt("enter your name please agar masla na ho to");
// // var name1=prompt("nam ka phla hissa likho ediot");
// // var nae2=prompt("hnr dojha mn ap imagine krnra kia . dojha vi likh . sachii gal hivan bewaqoof. amma kon na dasin");

// // let's now learn about let and const
//  // the basic difference between var let and const is that
// //  when we overwrite the value of variable in var it prioratizes the second one
// //  whereas when we use let we cannot declare the variable again and in const you cannot reassign the value to variable
// //  for example

// var num="wano";
// num="maryam";
// document.write(num);
// document.write("<br><br>");

// // data types

// // String
// // Int
// // boolean
// // Array
// // Object
// // undefined
// //null

// var Arrayy=[1,2,3];
// var  obj={
//     name:"waniah",
//     degree:"BSCS"
// };

// document.write(typeof(num));
// document.write("<br><br>");
// document.write(typeof(Arrayy));
// document.write("<br><br>");
// document.write(typeof(obj),"<br>");


// //Arithmetic operators

// var a=10;
// var b=15;

// document.write(a+b,"<br>");
// document.write(a**b,"<br>");
// document.write(a/b,"<br>")

//  // when arithmetic operators come with the sign of equality ,they become assignment operators

//  // =
// // +=
// // -=
// // *=
// // /=
// // %=
// // **=

//  a+=b;
//  document.write(a,"<br>");
//  a**=b;
//  document.write(a,"<br>"); 


//  // document console in java script

// console.time("time"); 
//  console.log("hello waniah");
//  console.log("hello waniah");
//  console.log("hello waniah");
//  console.log("hello waniah");
//  console.log("hello waniah");
//  console.timeEnd("time");
//  console.clear();

//  // comparison operators

// //  == equal to
// //  === equal value and equal type
// //  != not equal to
// //  !== not equal value or not equal type
// //  > greater than
// //  < less than
// //  >= greater than equal to
// //  <= less than equal to


// var num1=12;
// var num2=17;

// document.write(num1==num2,"<br>");
// document.write(num1===num2,"<br>");
// document.write(num1!=num2,"<br>");
// document.write(num1!==num2,"<br>");
// document.write(num1>num2,"<br>");
// document.write(num1<num2,"<br>");
// document.write(num1<=num2,"<br>");
// document.write(num1>=num2,"<br>");

// //conditional statements

// var x=5;
// if(x>12 || x<6){
//     document.write("x is greater than 12 <br>");
// }

// // logical operators

// // && logical and
// // || logical or
// // ! logical not


// var x=5;
// if(x>12){
//     document.write("x is greater than 12");
// }
// else if(x<12){
// document.write("yeah<br>");
// }
// else{
//     document.write("you are wrong");
// }




// //practise Questions

// const product={
// name:"Parker Jotter",
// color:"Black",
// rating:4,
// offer:5,
// price:270
// };

// console.log(product);

// const profile={
//     name:"Waniah Maryam",
//     platform:"instagram",
//     followers:87,
//     following:53
// }

// document.write(profile.name,"<br>");


// // if , else if and else statements

// var marks=89;
  
// if(marks>80 && marks<=100){
//     document.write("merit");
// }
// else if(marks>60 && marks<=79){
//     document.write("1st division");
// }
// else if(marks>45 && marks<=59){
//     document.write("2nd division");
// }
// else if(marks>33 && marks<=44){
//     document.write("3rd division");
// }
// else{
//     document.write("fail");
// };

// document.write("<br>")

// // ternary operator
// // (condition)? true:false;

// var x=15;
// var z;
// (x>10)? z="true":z="false";
// document.write(z);

// document.write("<br>")

// z=(x>10)? "true":"false";
// document.write(z);

// document.write("<br>")

// z=(x>10 && x<20)? "true":"false";
// document.write(z);
// document.write("<br>")

// // switch statements in java script

// // switch(expression){
// //     case condition 1:CSSLayerStatementRule(s)
// //     break;
// //     case condition 2: statement(s)
// //     break;
// //     default:statement(s)
// // }

// var day=3;

// switch(day){
//     case 2:
// document.write("today is monday");
// break;
// case 3:
//     document.write("today is not monday");
//     break;
//     default:
//         document.write("enter shi wala number");
// }


// // alert box

// // alert("hello this is an alert box");

// // var alrt=12;
// // if(alrt==12){
// //     alert("it is not a valid condition");
// // }


// // confirm box
// //confirm("hello! do you want me t continue doing programming");

// // var a=confirm("hello! do you want me to continue doing programming");
// // alert(a);

// // conditional statements in confirm boxes
// // confirm("hello! do you want me t continue doing programming");
// // if(a){
// //     alert("good job");
// // }
// // else{
// //     alert("sorry");
// // }

// // var a=prompt("hello what is your name?");
// // alert(a);
// // document.write("<br>")
// // document.write(a);


// // functions in java script

// document.write("<br>")
//  function abc(){
// document.write("hello this is a function");
// }

// abc(); 
// document.write("<br>");

// // function with return values

// function returnValue(a,b){
//     sum=a+b;
//     return sum;
// }

// document.write(returnValue(10,11));

// document.write("<br>");

// // global vs local variables
// // variables that can be used at any place in programming are known as global variables and vice versa


// // Java Script Basic events
// // click
// // double click
// // Right click
// // mouse hover
// // mouse out
// // mouse down
// // mouse up
// // key perss
// // key up 
// // load
// // unload  
// // resize 
// // scroll


// // while loop

// var a=0;
// while (a<12) {
//     document.write(a,"<br >");
//     a+=1;
// }


// var a =1;
// while(a<=10){
//     document.write("Waniah Maryam","<br> ");
//     a+=1;
// }


// // do while loop
// // it will first execute the statement once without applying any application.then it will enter in the loop 

// var d=1;
// do {
//     document.write(d,"my name is waniah and here I am trying to do do while loop <br >");
//     d+=1;
// } while (d<12);


// // for loop

// for(var a=1; a<=12;a++){
//     document.write("dapper,<br>");
// }
 


// //  break and continue in java script

//   var month=1;

//   switch (month) {
//     case 1:
//         document.write("January")
//         break;
//   case 2:
//     document.write("February")
//     break;
//     case 3:
//         document.write("March")
//         break;
//         case 4:
//             document.write("April")
//             break;
//             case 5:
//                 document.write("May")
//                 break;
//     default:
//         document.write("enter the month from 1 to 12") 
//         break;
//   }

//   document.write("<br>");

//   var d=33;
//   for(var a=1;a<d;a++){
//     if(a==3){
//         document.write("hello",a,"<br>");
//        break; 
//     }
//     document.write(a,"<br>");
//   } 



//   // even and odd numbers with while loop
   
//   for( let a=0; a<12; a++){
//     if(a%2==0){
//         continue;
//     }
//     else{
//         document.write(a,"<br >")
//     }
//   }




//   // nested for loop

//   for(var a=1; a<=10;a++){
//     for(var b=1; b<=10;b++){
//         document.write(a*b,"  ");
//     }
//     document.write("<br>");
//   }



//   document.write("<br>");


//   for(var a=1; a<=100;a+=10){
//     for(var b=a;b<a+10;b++){
//         document.write(b," ");
//     }
//     document.write("<br>");
//   }



//   document.write("<br>");
//   document.write("<br>");



//   // ===============================arrays in java script=======================================

//   var a=[1,2,3,4,5,5,6,7];
//  document.write("arrays in java script");
//  document.write("<br>");
//   document.write(a);
// document.write("<br>")



//   // array include methods
// // toString
// // valueof
// // slice
// // splice
// // shift
// // unshift
// // find
// // findIndex



//   var a=["waniah","maryam","bushra"];
// var b=a.includes("waniah");
// document.write(b);
// document.write("<br>");


// //  array to string method

// var a=["waniah","maryam","bushra"];
// a.toString();
// document.write(a);// after converting to string no methods of arrays can be applied

// document.write("<br>");

// // fill and value of

// var a=["waniah","maryam","bushra"];

// a.fill("Wanoo");
// document.write(a);
// document.write("<br>");

// // slice in arrays

// var a=["waniah","maryam","bushra"];
// var b=a.slice(0,1);
// document.write(b);
// document.write("<br>");
// document.write(a.slice(0,2));
// document.write("<br>");

// // adding new values in array

// // splice(index,howmanyDelete(optional function),"new value")
// // delete


// var a=["waniah","maryam","bushra"];

// a.splice(2,0,"wanoo","Hassan");
//  document.write(a);
// document.write("<br>");

// a.splice(2,1,"maaz");
// document.write(a,"<br>");







// // constant object

// const object={
//     name:"Waniah Maryam",
//     Age:21,
//     Semester:3,
//     Religion:"Islam"
// };


// document.write(object.Age,"<br>");

// object.name="waniah maryam";
// document.write(object.name,"<br>");


// // shift and unshift in arrays

// var a=["Waniah","Asia","Saima","Hafsah","Khalda"];

// // shift deletes the first index whereas unshift adds new value to the first index

// document.write(a,"<br>");
//  a.shift();
//  document.write(a,"<br>");
//  a.unshift("Waniah","Maryam");
//  document.write(a,"<br>");


//  // find and findIndex in arrays
// // the first value which comes after applying condition appears on screen
// // findIndex gives the index number
// var age=[12,13,14,33,45,66];

// var b=age.find(findage);

// function findage(age){
//     return age>=18;
// }

// document.write(b,"<br>");

// // find index

// var age=[12,13,14,33,45,66];

// var b=age.findIndex(findage);

// function findage(age){
//     return age>=18;
// }

// document.write(b,"<br>");



// // index of and last index of method
//     // index of(search item,start)

//     var a=["Waniah","Asia","Saima","Waniah","Khalda"];
//     document.write(a.indexOf("Waniah",0),"<br>");
//     document.write(a.lastIndexOf("Waniah"),"<br>")// last index of the same value




//     //Pop and Push methods
// // pop targets the last variable in the array
// // whereas the push adds new value to array

//     var a=["Waniah","Asia","Saima","Waniah","Khalda"];

//     document.write(a.pop(),"<br>");
//    a.push("Mahnoor");
//     document.write(a,"<br>");

    



//     // Array filter method
// // filter always gives a new array after filtering values in the existing array
//     var age=[12,23,44,55,667,77];
     
//     var b=age.filter(findage);
// document.write(b,"<br>")

//     function findage(age){

//            return  age>=33;
        
//     }







//     // Concat and join
// // Concat means concatination(joining two arrays)
// // whereas join makes single value by joining different values of arrays

// var a=["Waniah","Ayesha","Fatima","Bushra"];
// var b=["Maryam","Hassan"];
// document.write(a.concat(b),"<br>");
//  var c=["New array","hehehe"];
//  document.write(a.concat(b,c),"<br>");

// document.write(a.join(" "),"<br>");
// document.write(a.join("/"),"<br>");



// // some and  every methods
// // some to find if any of the value is equal to the givem condition or not
// // gives answer in trye and false
// var age=[12,13,14,33,45,66];

// document.write(age.some(checkage),"<br>");

// function checkage(age){
//     return age>=17;
// }

// // every function gives true only when all the values fulfill the condition
// var eve=[1,2,3,4,5];
// document.write(eve.every(huh),"<br>")

// function huh(eve){
//     return eve>=0;
// }




// // sort and reverse

// var a=["Waniah","Ayesha","Fatima","Bushra"];
// document.write("sorted array",a.sort(),"<br>");
// document.write("reversed array",a.reverse(),"<br>");



// // modify and remove

// var a=["Waniah","Ayesha","Fatima","Bushra"];
// // in order to modify value
// a[2]="Nothing";
// document.write(a,"<br>");
// // in order to delete value

// delete a[2];
// document.write(a,"<br>");




// // Arrays ||
// // if u donot know how many values you want to add to an array
// // you just need to use new array function
// var a=[1,2,3,4,5,6,7,8,9];
// var a=new Array();
// a[0]="Amna";
// a[1]="Waniah";
// a[2]="Kia";
// a[3]="Hassan";
// a[4]="Hussain";
// document.write(a,"<br>");


// // multidimentional arrays
// // document.write(array[0][1],"<br>");

// var array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

// // Write the table structure
// document.write("<table border='5px solid black'>");
// for (var a = 0; a < 4; a++) {
//     document.write("<tr>");
//     for (var b = 0; b < 4; b++) {
//         document.write("<td>" + array[a][b] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");




// // for in loop
 
// var objects = {
//     name: "Waniah",
//     section: "A",
//     degree: "BSCS",
//     age: 21
// }

// for (var i in objects) {
//     document.write(i , ": " + objects[i] + "<br>");
// }


// // for each loop


// var a=["Wwania","kwjds","JDSDHJD"];
// // first variable is for printing values in array while index in second variable for printing index number
// a.forEach(function(value,index){
// document.write(index,value,"<br>");
// })




// // objects in java script



// var obj={
//     fullName:"waniah Maryam",
//     name:function(){
//         return "Waniah";
//     },
//     section:"A",
//     secondName:function(fullName){
//     return this.fullName;
//     }
// }

// document.write(obj.name(),"<br>");
// document.write(obj.secondName(),"<br>");

// document.write("<br>");

// // Array of objects
// // which means creating objects in an array

// var arrayOfObjects=[
//     {name:"Maaz",age:24},
//     {name:"Waniah",age:21},
//     {name:"Sannan",age:17},
//     {name:"Faiq",age:7}
// ];

// console.log(arrayOfObjects);
// for(var a=0; a<arrayOfObjects.length;a++){
//     document.write(arrayOfObjects[a].name,arrayOfObjects[a].age,"<br>");  
// };



// // objects

// var person=new Object();
// person.firstName="Waniah";
// person.lastName="Maryam";
// person.age=21;

// console.log(person);

// document.write(person.firstName," ",person.lastName," ",person.age,"<br>");



// // map methods in arrays
// // if I want a new array to be produced after multiplying the values of previoues array 

// var ary=[11,2,33,4,5556];
// var b=ary.map(test)//function name
// document.write(b,"<br>");
// function test(x){
// return x*10;
// }
// document.write("<br>");




// // string methods in java script
 

// var str="java script is a java fantastic language";
// document.write(str,"<br>");
// document.write(str.length,"<br>");
// document.write(str.toLowerCase(),"<br>");
// document.write(str.toUpperCase(),"<br>");
// document.write(str.includes("java"),"<br>");// if this word is found in the string or not and is case sensitive
// document.write(str.endsWith("age"),"<br>");// end of the whole string not the words in string
// document.write(str.startsWith("java"),"<br>");
// document.write(str.search("java"),"<br>")// gives the position of word not true or false
// document.write(str.match(/java /g),"<br>")// matches in the whole string and returns the exact match
// // (/regular expression/)/word to find/ searches for that word gis for globally means lookin for it in the whole string
// document.write(str.indexOf("java"),"<br>");// gives the index of the word to find
// document.write(str.lastIndexOf("java"),"<br>");
// document.write(str.replace("java","JAVA"),"<br>");
// //document.write(str.trim(),"<br>");// as the name mentions it trims the extra spaces around the string
// document.write(str.charAt(1),"<br>"); // character at index falana
// document.write(str.charCodeAt(3),"<br>");// gives the asci code of the word at that index
// // concat() this function is used to concat two strings
// document.write(str.split(""),"<br>");// split the space in the string and returns an array
// document.write(str.split("java"),"<br>");
// document.write(str.repeat(2),"<br>");// how many times do we want to repeat a string
// document.write(str.slice(2,4),"<br>");// slice is same as array
// //  substr vs substring
// document.write(str.substr(2,6),"<br>");
// document.write(str.substring(1,5)); //substring is like it  counts till the last mentioned index not the last index along
// document.write("<br>");



// // number methods in java script

 
// // Number()// converts a string to number
// // parseInt()// will convert any number to integer
// // parseFloat()// will convert a number to float
// // isFinite()
// // isInteger()
// // toFixed()
// // toPrecision()





// // number
// var a="22";
// var num=Number(a);
// document.write(num+10,"<br>");
// var a=true;
// var num=Number(a);
// document.write(num,"<br>");


// //parseInt and parseFloat
// // one gives integer value other gives float value

// var c="22.33";
// var b=parseInt(c);
// document.write(b,"<br>")
// var a=12.33333;
// var d=parseFloat(a);
// document.write(d,"<br>");





// // isfinit and isinteger
// // all is functions in java script are supposed to give same function and that is boolean(true or false)


// var e=12;
// document.write(isFinite(e),"<br>");
// var f= Number.isInteger(e);
// document.write(f,"<br>");



// //  tofix and to precision

// var g=12.446765;
// var h= g.toFixed(3); // 3 is the number of decimal places till we want output
// document.write(h,"<br>");

// document.write(g.toPrecision(5),"<br>"); // this gives the rounded value



// // MATH Methods

// // celi,floor,round,trunc,max,min,sqrt,cbrt,pow(x,y),random,abs,PI
// // all the math functions need to be followed by math word

// // ceil gives upward value whereas floor gives downward value

// var variable=12.4444;
// var k=Math.ceil(variable);// gives the nearest upper value in case of positive integers and down value in case of negative integer
// document.write(k,"<br>");
// var l=Math.floor(variable)// opposite to ceil
// document.write(l,"<br>");


// // round and trunc

// var variable=12.4444;
// var b=Math.round(variable);
// document.write(b,"<br>");
// b=Math.trunc(variable,"<br>");// only gives the integer value



// // min and max

// var maximum=Math.max(12,22,44,556,7,565,454);
// document.write(maximum,"<br>");
// var minimum=Math.min(12,22,44,556,7,565,454);
// document.write(minimum,"<br>");



// //sqrt and cbrt

// document.write(Math.sqrt(25),"<br>");// square root
// document.write(Math.cbrt(125),"<br>");// cube root


// // pow (power of). pow(base,power);

// document.write(Math.pow(2,3),"<br>");


// // random function

// document.write(Math.random(),"<br>");
// document.write((Math.random()*10)+1,"<br>");
// document.write(Math.floor((Math.random()*10)+1),"<br>");


// // abs (absolute value)

// var a=Math.abs(-5.454);
// document.write(a,"<br>");
// document.write(Math.abs(2*7),"<br>");



// // PI  3.14....

// document.write(Math.PI,"<br>");


// // Date methods
// // toDAteString , getDate, getFullYear, getMonth, getDay, getHours, getMinutes, getSeconds
// // getMilliseconds, setDate, setFullYear, setHours, setMilliseconds, setMintes, setMonth, setSeconds()


// var now=new Date();// this will give complete date,time and universal time etc . you can also insert date of ur choice in brackets
// document.write(now,"<br>");
// document.write(now.toDateString(),"<br>");// this will give only date
// document.write(now.getFullYear(),"<br>");
// document.write(now.getMonth(),"<br>");
// document.write(now.getDay(),"<br>");
// document.write(now.getHours(),"<br>");
// document.write(now.getMilliseconds(),"<br>");
// now.setDate(20);
// document.write(now,"<br>");
// now.setFullYear(2037);
// document.write(now,"<br>");
// now.setMonth(12);
// document.write(now,"<br>");
// now.setHours(14);
// document.write(now,"<br>");
// document.write(now.getDate(),"/",now.getFullYear(),"/"
// ,now.getMonth(),"<br>")



// DOM (document object model)
// get and set for getting from nodes and set for setting into nodes
// add new element or delete existing element

//----------------------DOM methods---------------------------

// how to target dom objects
//1: by id name
// 2:  by class name
// 3: by tag name
// document.getElementsById/ClassName/TagName(name)



//addEventListener method
 // document.getElementByid().onclick=function name

//  document.getElementById("header").onclick=abc;

//  function abc()
// {
//     document.getElementById("header").style.background="green"; 
// }


// you can easily add more than one events like click and mouseenter together
// document.getElementById("header").addEventListener("click",abc);
// function abc(){
//     document.getElementById("header").style.background="green"; 
// }


document.getElementById("header").addEventListener('click',function(){
    this.style.color="blue";
});

document.getElementById("header").addEventListener('mouseenter',function(){
    this.style.border="10px solid brown";
})






