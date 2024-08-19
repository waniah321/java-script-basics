// methods
// document,document.all,document.documentElement,document.head,document.title,document.body,document.images,document.anchors,document.links,document.forms
// document.doctype,document.URL,document.baseURL,document.domain

// var element=document.getElementById("header");
// console.log(element);
// var byclass=document.getElementsByClassName("hello");
// console.log(byclass);


// // get and set methods in java script

// //.innertext gives the internal data  
// var getset=document.getElementById("contant").innerText;
// console.log(getset);

// // innerHTML gives innertext along with tags
// var get=document.getElementById("header").innerHTML;
// console.log(get);

// // get attributes give only name of attribute
// element=document.getElementById("header").getAttribute("id");
// console.log(element);

// // in case you want to know the value that attributes have
// element=document.getElementById("header").getAttributeNode("id").value;
// console.log(element);

// // attributes
// // in case we give id,class,style aetc to the div ,we can get all those attributes by attribute method
// element=document.getElementById("header").attributes;
// console.log(element);

// // for any perticular attribute
// element=document.getElementById("header").attributes[1];
// console.log(element);

// // for value in that attribue
// element=document.getElementById("header").attributes[2].value;
// console.log(element);


// // for name
// element=document.getElementById("header").attributes[2].name;
// console.log(element);



// setter methods

// innerText,innerHTML,setAttribute,Attribute,removwAttribute


// document.getElementById("header").innerText="wppwp";
// console.log(getset);

// document.getElementById("header").innerHTML="<h1>wppwp</h1>";
// console.log(getset);



// // set attribute
// document.getElementById("header").setAttribute("class","pop");
// element=document.getElementById("header").getAttribute("class");
// console.log(element)


// // remove attribute

// document.getElementById("header").removeAttribute("class");
// console.log(element); 



// query selector
// as we have studies that for class we use getElementByClassName
// for id we use getElementByid and so on  
// why not we should have only one method for all attributes
// querySelector and querySelectorAll
// document.querySelector(css selector)// selects only first one
// document.querySelectorAll(css selector)// selects all attributes
 
// var element=document.querySelector("#header").innerHTML="<h1>wow</h1>";
// console.log(element);

// var element=document.querySelector("#header").getAttribute("onclick");
// document.write(element);

// var element=document.querySelectorAll("#header");
// document.write(element);


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


// document.getElementById("header").addEventListener('click',function(){
//     this.style.color="blue";
// });

// document.getElementById("header").addEventListener('mouseenter',function(){
//     this.style.border="10px solid brown";
// })


// another method
// addEventListener(event,function,usecapture) usecapture can either be true or false
   //  in case we have two boxes and we have applied events to bothe boxes but we want either function to be applied first, then we use third method


//    document.querySelector("#inner").addEventListener('click',function(){
//     alert("inner div");
//    } )
// document.querySelector("#usecapt").addEventListener("click",function(){
//     alert("outer div");
// })

// main difference between getElementbyid and querySelector is that id is only for id whereas queryselector is for all other classes,tags etc

// document.getElementById("inner").addEventListener('click',function(){
//     alert("inner div");
//    },true )
// document.getElementById("usecapt").addEventListener("click",function abc(){
//     alert("outer div");
// },)




// remove eventlistener method
// document.getElenemtByid().removeEventlistener(event,functionName);

// document.getElementById("header").addEventListener("click",xyz);
// function xyz(){
//     document.getElementById("header").removeEventListener('click',abc);
// }





// class list method
// add(class1,class2,...)
//remove(class1,class2,...)
//toggle(class)
//contains(class) 
//item(index)
//length


// document.getElementById("header").addEventListener('click',abc);
// function abc(){
//     document.getElementById("header").classList.add("waow");
// }// we can add more than one classes using comma between two class names

// length
//    var a= document.getElementById("header").classList.length;
// console.log(a);



//toggle method
// 1st click class added 2nd click class remved and vice versa

// document.getElementById("header").addEventListener('click',abc);
// function abc(){
//     document.getElementById("header").classList.toggle("waow");
//     var a=document.getElementById("header").classList;
// console.log(a);
// }



// item method

// var a=document.getElementById("header").classList.item(0);
// console.log(a);


// contains
// var a=document.getElementById("header").classList.contains("waow ");
// console.log(a); 




//-------------------- DOM traversal methods---------------------

// parent elements and parent nodes
//children
//childnodes
//firstChild
//firstElementChild
//lastChild
//lastElementChild
//nextElementsibling
//nextSibling
//previousElementSibling
//previousSibling
 

// help to target elements in html

// 1st( parent node and parent elements)

// var a=document.getElementById("inner").parentElement;
// console.log(a);

// var a=document.getElementById("usecapt").parentElement;// its parent is body
// console.log(a);


// var a=document.getElementById("inner").parentElement.style.backgroundColor="red";
// console.log(a);



// parent element gives null value when there is no parent on calling but a node gives any kind of value but tht is not null


// var a=document.getElementById("main ").parentNode;
// console.log(a);



// var a=document.getElementById("inner").children;
// console.log(a);

// document.getElementById("inner").children[1].style.backgroundColor="pink";
//document.getElementById("inner").children[1].innerHTML="h1";


// firstChild LastChild
// var a=document.getElementById("inner").firstElementChild;
// console.log(a);

// var a=document.getElementById("inner").lastElementChild;
// console.log(a);

// var a=document.getElementById("inner").lastElementChild.style.backgroundColor="brown";
// console.log(a);


// var a=document.getElementById("inner").lastChild;// gives a space in console as it gives a space in data so we cannot apply any styling or changing into it
// console.log(a);


// next sibling vs previous sibling

// var a=document.getElementById("inner").nextElementSibling;
// console.log(a);

// var a=document.getElementById("one").previousElementSibling;
// console.log(a);






//---------------------DOM create methods--------------------
//createElement
//createTextNode
//createComment
// when we want to add tags,text or comment from java script to html then we use this mwthod

// var newElement=document.createElement("p");
// console.log(newElement); 

// var newElement=document.createTextNode("hello this is a text");
// console.log(newElement); 



// when by using create text =,comment and element methods we can only create then but what if we want to append then or insert in them. in that case we use append methods

// var newElement=document.createElement("p");

// console.log(newElement)
// var text=document.createTextNode("this is a text");
// console.log(text)
// newElement.appendChild(text);// they only append 
// // console.log(newElement);

// document.getElementById("append").appendChild(newElement);


// now if I want to insert before the nodes of div i need to use insertBefore method

// var target=document.getElementById("append");
// target.insertBefore(newElement,target.childNodes[0]);





// insert Adjacent Element
//insertAdhacentHTML
//insertAdjacentText
// above three create and append the elements

//positions
// beforebegin
//afterbegun
//beforeend
//afterend

// var newElement=document.createElement("h1");
// var newtext=document.createTextNode("this is text hehehheh");
// newElement.appendChild(newtext);
// var target=document.getElementById("append");
// target.insertAdjacentElement("beforebegin",newElement);



//replaceChild and removeChild
























